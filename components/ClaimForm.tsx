"use client";

import { useRef, useState } from "react";
import LeadFormFields, { EMPTY_LEAD_FORM, type LeadFormState } from "@/components/LeadFormFields";
import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { newSubmissionId, submitClaim } from "@/lib/submit-lead";

export default function ClaimForm({ location }: { location: string }) {
  const [form, setForm] = useState<LeadFormState>(EMPTY_LEAD_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [crmOk, setCrmOk] = useState(false);
  // Same id across retries of this form so duplicates can be dropped downstream.
  const submissionId = useRef(newSubmissionId());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitClaim({
      ...form,
      submissionId: submissionId.current,
      location,
      form: "location_claim",
    });
    if (result.ok) {
      setCrmOk(result.crm);
      setStatus("success");
    } else {
      setError(result.error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="py-20 bg-[#1a1a1a]" aria-live="polite">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-5" aria-hidden="true">☀️</div>
          <h3 className="text-2xl font-black uppercase text-white mb-3">You&apos;re In!</h3>
          {crmOk ? (
            <p className="text-white/70 leading-relaxed">
              Check your phone. Your 10% off code is on its way to <span className="text-white font-semibold">{form.phone}</span> by SMS.
              Enter it at checkout in the Tanned Co. app to book your first tan at {location}.
            </p>
          ) : (
            <p className="text-white/70 leading-relaxed">
              We&apos;ve got your details. Our team will SMS your 10% off code to <span className="text-white font-semibold">{form.phone}</span> shortly.
            </p>
          )}
          <div className="mt-8 pt-6 border-t border-white/10 text-white/60 text-xs">
            No SMS within a few minutes? Call us on 1300 826 633.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="claim" className="py-16 md:py-20 bg-[#1a1a1a] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#e0a878] mb-4">Exclusive First-Timer Offer</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-white mb-5">
              Get {FIRST_TIMER_OFFER.headline}
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Five automated spray tan studios across Sydney. An even, streak-free glow from a 4-minute session, completely private, no staff involved.
            </p>
            <ul className="space-y-3">
              {[
                "Private, locked booth — just you",
                "4 minutes in the booth",
                "Open 7 days, 6am to midnight",
                "Natural-looking colour, no orange",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#a46746]/20 flex items-center justify-center flex-shrink-0 text-[#e0a878] text-xs font-bold" aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-white font-black uppercase tracking-wide text-sm mb-1">Claim {FIRST_TIMER_OFFER.headline}</p>
            <p className="text-white/70 text-xs mb-6">We&apos;ll text your code to your mobile. {FIRST_TIMER_OFFER.terms}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <LeadFormFields idPrefix={`claim-${location.replace(/\W+/g, "-").toLowerCase()}`} form={form} setForm={setForm} tone="dark" />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-colors text-sm mt-1"
              >
                {status === "loading" ? "Sending..." : "Text Me My 10% Off Code →"}
              </button>
              {status === "error" && (
                <p role="alert" className="text-[#f3a99f] text-xs text-center">{error}</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
