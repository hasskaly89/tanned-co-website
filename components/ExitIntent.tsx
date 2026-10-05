"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import LeadFormFields, { EMPTY_LEAD_FORM, type LeadFormState } from "@/components/LeadFormFields";
import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { newSubmissionId, submitClaim } from "@/lib/submit-lead";

const SESSION_KEY = "tannedco_exit_shown";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<LeadFormState>(EMPTY_LEAD_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [crmOk, setCrmOk] = useState(false);
  const submissionId = useRef(newSubmissionId());
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    returnFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    let triggered = false;

    // Manual trigger via custom event (e.g. from the homepage offer banner)
    const handleManualOpen = () => {
      setStatus((s) => (s === "success" ? s : "idle"));
      open();
    };
    window.addEventListener("tannedco:open-offer", handleManualOpen);

    // Desktop exit-intent auto trigger, once per session
    let alreadyShown = false;
    try {
      alreadyShown = !!sessionStorage.getItem(SESSION_KEY);
    } catch {}
    if (alreadyShown) {
      return () => window.removeEventListener("tannedco:open-offer", handleManualOpen);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !triggered) {
        triggered = true;
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {}
        setTimeout(open, 200);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("tannedco:open-offer", handleManualOpen);
    };
  }, [open]);

  // Dialog behaviour: focus the first field, Escape closes, Tab stays inside.
  useEffect(() => {
    if (!visible) return;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("input, button")?.focus();
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
    });
    if (result.ok) {
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
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
        className="relative bg-[#fdf6ec] rounded-3xl max-w-md w-full p-8 md:p-10 shadow-2xl border border-[#e8d9c3] text-center my-auto"
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 text-[#7a6a5a] hover:text-[#1a1a1a] transition-colors text-xl leading-none p-1"
          aria-label="Close"
        >
          ✕
        </button>

        {status === "success" ? (
          <div aria-live="polite">
            <div className="text-5xl mb-4" aria-hidden="true">☀️</div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">You&apos;re In!</p>
            <h2 id="offer-title" className="text-3xl font-black uppercase leading-tight text-[#1a1a1a] mb-3">
              Check Your Phone
            </h2>
            <p className="text-[#5a4a3a] text-base leading-relaxed mb-6">
              {crmOk ? (
                <>Your 10% off code is on its way to <span className="font-semibold">{form.phone}</span> by SMS. Enter it at checkout in the Tanned Co. app.</>
              ) : (
                <>We&apos;ve got your details. Our team will SMS your 10% off code to <span className="font-semibold">{form.phone}</span> shortly.</>
              )}
            </p>
            <button
              type="button"
              onClick={close}
              className="w-full bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full transition-colors"
            >
              Got It
            </button>
          </div>
        ) : (
          <>
            <div className="text-5xl mb-4" aria-hidden="true">✨</div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">
              First Time at Tanned Co.?
            </p>
            <h2 id="offer-title" className="text-3xl font-black uppercase leading-tight text-[#1a1a1a] mb-3">
              Get {FIRST_TIMER_OFFER.headline}
            </h2>
            <p className="text-[#5a4a3a] text-sm leading-relaxed mb-6">
              Enter your details and we&apos;ll text you a code to use at checkout. {FIRST_TIMER_OFFER.terms}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <LeadFormFields idPrefix="offer-popup" form={form} setForm={setForm} tone="light" />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full transition-colors"
              >
                {status === "loading" ? "Sending..." : "Text Me My Code"}
              </button>
              {status === "error" && (
                <p role="alert" className="text-[#b3261e] text-xs text-center">{error}</p>
              )}
            </form>

            <button
              type="button"
              onClick={close}
              className="mt-4 text-xs text-[#5a4a3a] hover:text-[#1a1a1a] transition-colors underline"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
