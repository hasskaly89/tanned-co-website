"use client";

import { useRef, useState } from "react";
import LeadFormFields, { EMPTY_LEAD_FORM, type LeadFormState } from "@/components/LeadFormFields";
import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { newSubmissionId, submitClaim } from "@/lib/submit-lead";
import { CheckIcon } from "@/components/Icons";
import { IS_PREVIEW, PREVIEW_FORM_MESSAGE } from "@/lib/preview";

const points = [
  "Private, locked booth. Just you.",
  "4 minutes in the booth",
  "Open 7 days, 6am to midnight",
  "Natural-looking colour, no orange",
];

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
      <section className="py-20 bg-espresso text-white" aria-live="polite">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="eyebrow-light mb-4">You&apos;re in</p>
          <h3 className="display-md mb-4">Check your phone.</h3>
          <p className="text-on-dark leading-relaxed">
            {crmOk ? (
              <>Your 10% off code is on its way to <span className="text-white font-semibold">{form.phone}</span> by SMS. Enter it at checkout in the Tanned Co. app to book your first tan at {location}.</>
            ) : (
              <>We&apos;ve got your details. Our team will SMS your 10% off code to <span className="text-white font-semibold">{form.phone}</span> shortly.</>
            )}
          </p>
          <p className="mt-8 pt-6 border-t border-white/15 text-on-dark-muted text-sm">
            No SMS within a few minutes? Call us on 1300 826 633.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="claim" className="py-16 md:py-24 bg-espresso text-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="eyebrow-light mb-4">Exclusive first-timer offer</p>
            <h2 className="display-lg mb-5">{FIRST_TIMER_OFFER.headline}.</h2>
            <p className="text-on-dark text-lg leading-relaxed mb-8">
              Five automated spray tan studios across Sydney. An even, streak-free glow from a 4-minute session,
              completely private, no staff involved.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-on-dark">
                  <CheckIcon className="w-4 h-4 text-bronze-light shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/15 rounded-[28px] p-8">
            <p className="font-display font-medium text-2xl mb-1">Claim {FIRST_TIMER_OFFER.headline}</p>
            <p className="text-on-dark-muted text-sm mb-6">
              We&apos;ll text your code to your mobile. {FIRST_TIMER_OFFER.terms}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <LeadFormFields idPrefix={`claim-${location.replace(/\W+/g, "-").toLowerCase()}`} form={form} setForm={setForm} tone="dark" />
              <button type="submit" disabled={status === "loading" || IS_PREVIEW} className="btn btn-light w-full !py-4">
                {status === "loading" ? "Sending..." : "Text me my 10% off code"}
              </button>
              {IS_PREVIEW && <p className="text-on-dark-muted text-xs text-center">{PREVIEW_FORM_MESSAGE}</p>}
              {status === "error" && (
                <p role="alert" className="text-red-300 text-sm text-center">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
