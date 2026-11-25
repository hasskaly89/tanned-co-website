"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMPTY_LEAD_FORM, type LeadFormState } from "@/components/LeadFormFields";
import { newSubmissionId, submitClaim } from "@/lib/submit-lead";
import { AU_MOBILE_HINT, toAuMobile } from "@/lib/form-utils";
import { IS_PREVIEW } from "@/lib/preview";
import {
  BF_GLOW_TRIO,
  BF_GLOW_TRIO_BUY_URL,
  PROMO_MODAL_SESSION_KEY,
  PROMO_MODAL_STORAGE_KEY,
  formatTimeLeft,
  isPromoLive,
  promoShowsOn,
  readStorage,
  trackPromo,
  writeStorage,
} from "@/lib/promos/black-friday-glow-trio";

const AUTO_DELAY_MS = 3500;
const SCROLL_TRIGGER_PX = 120;
const REDIRECT_DELAY_MS = 1500;
// Consumer pages only. Every /franchise route is already excluded by promoShowsOn.
const EXCLUDED = ["/privacy-policy", "/terms"];
/** Sheet tab and CRM location tag for these leads. */
const LEAD_LOCATION = "Black Friday Glow Trio";

const INPUT =
  "h-[42px] w-full rounded-xl border border-line bg-cream px-3 font-sans text-[14px] font-medium text-ink placeholder:font-normal placeholder:text-muted outline-none focus:border-bronze-light md:h-11 md:text-[15px]";

function dismissedForPromo() {
  return readStorage("localStorage", PROMO_MODAL_STORAGE_KEY) === BF_GLOW_TRIO.id;
}
function shownThisVisit() {
  return !!readStorage("sessionStorage", PROMO_MODAL_SESSION_KEY);
}

/**
 * Black Friday Glow Trio pop-up (design "option B"), rendered once in the root layout.
 * First name + mobile; the lead goes to the CRM (its own SMS workflow) and the sheet,
 * then the visitor is sent to the GymMaster quick checkout.
 * Opens by itself once (3.5s after landing, or on first real scroll), never over
 * another open dialog, never again after a dismiss, and never once the promo ends.
 * Phones: the card sits above the sticky "Book a tan" bar, which stays visible and tappable.
 */
export default function PromoModal() {
  const pathname = usePathname() ?? "";
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<LeadFormState>(EMPTY_LEAD_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");
  const [now, setNow] = useState(0);
  const submissionId = useRef(newSubmissionId());
  const dialogRef = useRef<HTMLElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const visibleRef = useRef(false);

  const show = useCallback(() => {
    if (visibleRef.current || !isPromoLive()) return;
    if (dismissedForPromo() || shownThisVisit()) return;
    // Never open over another dialog.
    if (document.querySelector('[role="dialog"][aria-modal="true"]')) return;
    writeStorage("sessionStorage", PROMO_MODAL_SESSION_KEY, "1");
    returnFocus.current = document.activeElement as HTMLElement | null;
    visibleRef.current = true;
    setNow(Date.now());
    setVisible(true);
    trackPromo("promo_modal_view");
  }, []);

  const hide = useCallback(() => {
    // Any close counts as a dismiss: no more auto-opens for this promo.
    writeStorage("localStorage", PROMO_MODAL_STORAGE_KEY, BF_GLOW_TRIO.id);
    visibleRef.current = false;
    setVisible(false);
    returnFocus.current?.focus?.();
  }, []);

  const dismiss = useCallback(
    (method: "close_button" | "no_thanks" | "escape" | "backdrop") => {
      trackPromo("promo_modal_dismiss", { method });
      hide();
    },
    [hide]
  );

  // Auto-open once: 3.5s after landing, or on the first real scroll.
  useEffect(() => {
    if (!promoShowsOn(pathname) || EXCLUDED.includes(pathname)) return;
    if (dismissedForPromo() || shownThisVisit()) return;
    const timer = window.setTimeout(show, AUTO_DELAY_MS);
    const onScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER_PX) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, show]);

  // Countdown: once a minute while open. Closes itself if the promo ends while open.
  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (!isPromoLive(t)) {
        visibleRef.current = false;
        setVisible(false);
      }
    }, 60_000);
    return () => window.clearInterval(id);
  }, [visible]);

  // Dialog behaviour: focus the dialog (no keyboard pop-up on phones), Escape closes, Tab stays inside.
  useEffect(() => {
    if (!visible) return;
    const dialog = dialogRef.current;
    dialog?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "success") {
        e.preventDefault();
        dismiss("escape");
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      const items = dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([tabindex='-1'])");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible, status, dismiss]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) {
      setError("Please add your first name.");
      return;
    }
    if (!toAuMobile(form.phone)) {
      setError(AU_MOBILE_HINT);
      return;
    }
    setStatus("loading");
    if (!IS_PREVIEW) {
      // A failed save never blocks the sale: they go to checkout either way.
      await submitClaim(
        { ...form, submissionId: submissionId.current, location: LEAD_LOCATION, form: "bf_glowtrio_popup", offer: "bf_glowtrio" },
        { source: "promo_modal" }
      );
    }
    trackPromo("promo_modal_cta", { destination: "gymmaster" });
    writeStorage("localStorage", PROMO_MODAL_STORAGE_KEY, BF_GLOW_TRIO.id);
    setStatus("success");
    window.setTimeout(() => window.location.assign(BF_GLOW_TRIO_BUY_URL), REDIRECT_DELAY_MS);
  }

  if (!visible) return null;

  const end = BF_GLOW_TRIO.promoEnd?.getTime() ?? null;
  const countdown = end !== null && now ? formatTimeLeft(end - now) : null;
  const firstName = form.name.trim().split(/\s+/)[0];

  return (
    // Phones: the overlay stops above the sticky Book bar so it is never covered.
    <div className="promo-backdrop fixed inset-x-0 top-0 bottom-[calc(var(--cta-h)+env(safe-area-inset-bottom,0px))] z-[60] flex items-center justify-center px-4 pt-4 pb-3 md:p-12">
      <div
        className="absolute inset-0 bg-[rgba(31,25,20,0.58)]"
        onClick={() => {
          if (status !== "success") dismiss("backdrop");
        }}
      />
      <article
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-glowtrio-heading"
        tabIndex={-1}
        className="promo-panel relative w-full max-w-[343px] max-h-full overflow-y-auto overflow-x-hidden rounded-[28px] border border-[rgba(230,214,195,0.18)] bg-espresso-deep text-center shadow-[0_18px_50px_rgba(31,25,20,0.28)] outline-none md:max-w-[500px]"
      >
        {status !== "success" && (
          <button
            type="button"
            aria-label="Dismiss Black Friday offer"
            onClick={() => dismiss("close_button")}
            className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center text-on-dark cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}

        {status === "success" ? (
          <div aria-live="polite" className="flex flex-col items-center px-6 pb-[22px] pt-7 md:px-9 md:pb-7 md:pt-8">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-bronze-light">
              You&apos;re in{firstName ? `, ${firstName}` : ""}
            </p>
            <h1 id="bf-glowtrio-heading" className="mt-4 font-display text-[34px] font-medium uppercase leading-[0.95] tracking-[0.04em] text-[#fdf6ec]">
              Taking you to checkout
            </h1>
            <a
              href={BF_GLOW_TRIO_BUY_URL}
              className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-bronze-text font-sans text-[15px] font-semibold tracking-[0.01em] text-cream md:h-[52px] md:text-base"
            >
              Go to checkout
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center px-6 pb-[22px] pt-7 md:px-9 md:pb-7 md:pt-8">
            <p className="font-display text-[22px] font-medium uppercase leading-none tracking-[0.28em] text-bronze-light md:text-[26px]">
              Black Friday
            </p>

            <div className="mt-[18px] flex w-full flex-col items-center">
              <h1
                id="bf-glowtrio-heading"
                className="font-display text-center text-[56px] font-medium uppercase leading-[0.90] tracking-[0.04em] text-[#fdf6ec] md:text-[64px]"
              >
                <span className="block">3 tans</span>
                <span className="block text-[66px] tracking-[0.03em] text-bronze-light md:text-[76px]">for $79</span>
              </h1>
              <p className="mt-3 flex items-baseline justify-center gap-[0.5em] font-sans text-[12px] font-medium tracking-[0.1em] text-on-dark-muted">
                Valued at <span className="bf-value-amt">$117</span>
              </p>
              <p className="mt-3.5 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-on-dark">
                Valid 6 months
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-bronze-light">
                Ends Monday midnight
                {countdown && <span className="normal-case tracking-[0.12em]">·  {countdown}</span>}
              </p>
            </div>

            <form className="mt-[26px] w-full text-left" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="text"
                  name="name"
                  autoComplete="given-name"
                  aria-label="First name"
                  placeholder="First name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={INPUT}
                />
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-label="Mobile"
                  placeholder="Mobile"
                  required
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={INPUT}
                />
              </div>
              {/* Honeypot: hidden from people, filled by bots */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="hidden"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-5 flex h-12 w-full items-center justify-center rounded-full bg-bronze-text font-sans text-[15px] font-semibold tracking-[0.01em] text-cream cursor-pointer disabled:opacity-60 md:h-[52px] md:text-base"
              >
                {status === "loading" ? "One moment..." : "Get 3 tans for $79"}
              </button>
              {error && (
                <p role="alert" className="mt-2 text-center font-sans text-[12px] text-bronze-light">{error}</p>
              )}
              <p className="mt-3 text-center font-sans text-[10px] leading-[1.4] text-on-dark-muted">
                By continuing you agree to texts about this offer and our{" "}
                <Link href="/privacy-policy" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                . Reply STOP to opt out.
              </p>
            </form>

            <button
              type="button"
              onClick={() => dismiss("no_thanks")}
              className="mt-3.5 px-2 py-0.5 font-sans text-xs font-medium text-on-dark underline underline-offset-[3px] cursor-pointer"
            >
              No thanks
            </button>
          </div>
        )}
      </article>
    </div>
  );
}
