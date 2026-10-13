"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import LeadFormFields, { EMPTY_LEAD_FORM, type LeadFormState } from "@/components/LeadFormFields";
import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { newSubmissionId, submitClaim } from "@/lib/submit-lead";
import { IS_PREVIEW, PREVIEW_FORM_MESSAGE } from "@/lib/preview";
import { usePathname } from "next/navigation";

// One auto-open per visit, shared by the desktop and phone triggers. Set when the
// popup opens by itself, and when it is closed or submitted, so it never opens by
// itself again this visit. Clicking an offer button still opens it any time.
const SESSION_KEY = "tannedco_exit_shown";
const DESKTOP_QUERY = "(min-width: 768px)";
const DESKTOP_DELAY_MS = 5000; // as before 11 Oct (commit 0246f35 removed it)
const MOBILE_DELAY_MS = 8000;
// Phones: no auto-open on these routes (booking/contact/legal), nor on studio
// pages, which have the inline claim form.
const MOBILE_EXCLUDED = ["/book-now", "/contact", "/franchise", "/privacy-policy", "/terms"];

type Trigger = "click" | "auto_desktop" | "auto_mobile";

function markShown() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {}
}
function alreadyShown() {
  try {
    return !!sessionStorage.getItem(SESSION_KEY);
  } catch {
    return false;
  }
}

/**
 * First-visit offer dialog, rendered once in the root layout.
 * Fields: first name + mobile + optional marketing consent.
 * Opens on offer-button click, plus once per visit by itself: desktop exit intent
 * (after 5s, mouse leaves through the top) and phones scrolling past the hero (after 8s).
 */
export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<LeadFormState>(EMPTY_LEAD_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [crmOk, setCrmOk] = useState(false);
  const submissionId = useRef(newSubmissionId());
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const trigger = useRef<Trigger>("click");
  const visibleRef = useRef(false);
  const pathname = usePathname() ?? "";

  const open = useCallback((how: Trigger) => {
    if (visibleRef.current) return;
    trigger.current = how;
    if (how !== "click") markShown();
    returnFocus.current = document.activeElement as HTMLElement | null;
    visibleRef.current = true;
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    markShown(); // closed for good this visit (X, No thanks, Escape, backdrop, Got it)
    visibleRef.current = false;
    setVisible(false);
    returnFocus.current?.focus?.();
  }, []);

  // Click to open: OfferButton dispatches "tannedco:open-offer".
  useEffect(() => {
    const handleManualOpen = () => {
      setStatus((s) => (s === "success" ? s : "idle"));
      open("click");
    };
    window.addEventListener("tannedco:open-offer", handleManualOpen);
    return () => window.removeEventListener("tannedco:open-offer", handleManualOpen);
  }, [open]);

  // Desktop exit intent, as it ran before 11 Oct: after 5s, mouse leaves through the top.
  useEffect(() => {
    if (!window.matchMedia(DESKTOP_QUERY).matches || alreadyShown()) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 5 || alreadyShown() || !window.matchMedia(DESKTOP_QUERY).matches) return;
      document.removeEventListener("mouseleave", onLeave);
      window.setTimeout(() => open("auto_desktop"), 200);
    };
    const timer = window.setTimeout(() => document.addEventListener("mouseleave", onLeave), DESKTOP_DELAY_MS);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [open]);

  // Phones: first time the hero's bottom leaves the viewport, not before 8s on the page.
  useEffect(() => {
    if (window.matchMedia(DESKTOP_QUERY).matches || alreadyShown()) return;
    if (MOBILE_EXCLUDED.includes(pathname) || pathname.startsWith("/locations/")) return;
    const hero = document.querySelector<HTMLElement>("main#main > :first-child");
    if (!hero) return;
    const start = Date.now();
    let passed = false;
    let timer: number | undefined;
    const tryOpen = () => {
      if (!passed || alreadyShown() || window.matchMedia(DESKTOP_QUERY).matches) return;
      const wait = MOBILE_DELAY_MS - (Date.now() - start);
      if (wait > 0) {
        window.clearTimeout(timer);
        timer = window.setTimeout(tryOpen, wait);
        return;
      }
      observer.disconnect();
      open("auto_mobile");
    };
    const observer = new IntersectionObserver(([entry]) => {
      // Past the hero = no longer intersecting and its bottom is above the viewport.
      if (!entry.isIntersecting && entry.boundingClientRect.bottom <= 0) {
        passed = true;
        tryOpen();
      }
    });
    observer.observe(hero);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [open, pathname]);

  // Dialog behaviour: focus the first field, Escape closes, Tab stays inside.
  useEffect(() => {
    if (!visible) return;
    const dialog = dialogRef.current;
    // Auto-opened on a phone: focus the dialog itself so the keyboard doesn't pop up.
    if (trigger.current === "auto_mobile") dialog?.focus();
    else dialog?.querySelector<HTMLElement>("input, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      const items = dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([tabindex='-1']), textarea, select");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible, status, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitClaim({
      ...form,
      submissionId: submissionId.current,
      location: "Exit Intent Popup",
      form: "offer_popup",
    }, { source: trigger.current });
    if (result.ok) {
      markShown();
      setCrmOk(result.crm);
      setStatus("success");
    } else {
      setError(result.error);
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-espresso-deep/70 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
        tabIndex={-1}
        className="relative bg-cream rounded-[28px] max-w-md w-full p-6 md:p-10 shadow-2xl border border-line my-auto outline-none max-md:max-h-[80vh] max-md:max-h-[80svh] max-md:overflow-y-auto"
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-white transition-colors text-xl leading-none cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="text-center" aria-live="polite">
            <p className="eyebrow mb-3">You&apos;re in</p>
            <h2 id="offer-title" className="display-md mb-4">Check your phone.</h2>
            <p className="text-body leading-relaxed mb-8">
              {crmOk ? (
                <>Your 10% off code is on its way to <span className="font-semibold text-ink">{form.phone}</span> by SMS. Enter it at checkout in the Tanned Co. app.</>
              ) : (
                <>We&apos;ve got your details. Our team will SMS your 10% off code to <span className="font-semibold text-ink">{form.phone}</span> shortly.</>
              )}
            </p>
            <button type="button" onClick={close} className="btn btn-dark w-full">
              Got it
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow mb-3">First time at Tanned Co.?</p>
            <h2 id="offer-title" className="display-md mb-3">Get {FIRST_TIMER_OFFER.headline}.</h2>
            <p className="text-body leading-relaxed mb-6">
              Enter your first name and mobile and we&apos;ll text you a code to use at checkout. {FIRST_TIMER_OFFER.terms}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <LeadFormFields idPrefix="offer-popup" form={form} setForm={setForm} tone="light" variant="short" />
              <button type="submit" disabled={status === "loading" || IS_PREVIEW} className="btn btn-dark w-full !py-4">
                {status === "loading" ? "Sending..." : "Text me my code"}
              </button>
              {IS_PREVIEW && <p className="text-muted text-xs text-center">{PREVIEW_FORM_MESSAGE}</p>}
              {status === "error" && (
                <p role="alert" className="text-red-700 text-sm text-center">{error}</p>
              )}
            </form>

            <button
              type="button"
              onClick={close}
              className="block mx-auto mt-4 text-sm text-muted hover:text-ink transition-colors underline cursor-pointer"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
