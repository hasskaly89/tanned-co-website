"use client";

import Link from "next/link";
import { MARKETING_CONSENT_TEXT } from "@/lib/consent";

export type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
  website: string; // honeypot
};

export const EMPTY_LEAD_FORM: LeadFormState = {
  name: "",
  email: "",
  phone: "",
  marketingConsent: false,
  website: "",
};

/** Shared, labelled fields for the first-timer offer forms. */
export default function LeadFormFields({
  idPrefix,
  form,
  setForm,
  tone,
}: {
  idPrefix: string;
  form: LeadFormState;
  setForm: (f: LeadFormState) => void;
  tone: "dark" | "light";
}) {
  const input =
    tone === "dark"
      ? "w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#e0a878] transition-colors"
      : "w-full bg-white border border-[#e8d9c3] text-[#1a1a1a] placeholder-[#7a6a5a] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors";
  const label = tone === "dark" ? "block text-xs font-semibold text-white/80 mb-1.5" : "block text-xs font-semibold text-[#3a2e24] mb-1.5";
  const small = tone === "dark" ? "text-white/70" : "text-[#5a4a3a]";
  const link = tone === "dark" ? "underline text-white" : "underline text-[#1a1a1a]";

  return (
    <>
      <div>
        <label htmlFor={`${idPrefix}-name`} className={label}>Full name</label>
        <input id={`${idPrefix}-name`} type="text" autoComplete="name" required maxLength={100}
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className={label}>Email</label>
        <input id={`${idPrefix}-email`} type="email" autoComplete="email" required maxLength={254}
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-phone`} className={label}>Mobile number</label>
        <input id={`${idPrefix}-phone`} type="tel" autoComplete="tel" inputMode="tel" required maxLength={30}
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} />
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="hidden" />

      <label htmlFor={`${idPrefix}-consent`} className={`flex items-start gap-2.5 cursor-pointer ${small}`}>
        <input id={`${idPrefix}-consent`} type="checkbox" checked={form.marketingConsent}
          onChange={(e) => setForm({ ...form, marketingConsent: e.target.checked })}
          className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#a46746]" />
        <span className="text-xs leading-relaxed">{MARKETING_CONSENT_TEXT} (Optional)</span>
      </label>

      <p className={`text-xs leading-relaxed ${small}`}>
        We use your details to send the offer you asked for and to record your claim. See our{" "}
        <Link href="/privacy-policy" className={link}>privacy policy</Link>.
      </p>
    </>
  );
}
