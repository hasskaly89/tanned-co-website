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
  variant = "full",
}: {
  idPrefix: string;
  form: LeadFormState;
  setForm: (f: LeadFormState) => void;
  tone: "dark" | "light";
  /** "short" = first name + mobile only (offer popup, pending Hass confirmation). */
  variant?: "full" | "short";
}) {
  const short = variant === "short";
  const dark = tone === "dark";
  const input = dark ? "field-dark" : "field";
  const label = `block text-sm font-medium mb-1.5 ${dark ? "text-white" : "text-ink"}`;
  const small = dark ? "text-on-dark-muted" : "text-muted";
  const link = dark ? "underline text-white" : "underline text-ink";

  return (
    <>
      <div>
        <label htmlFor={`${idPrefix}-name`} className={label}>{short ? "First name" : "Full name"}</label>
        <input id={`${idPrefix}-name`} type="text" autoComplete={short ? "given-name" : "name"} required maxLength={100}
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} />
      </div>
      {!short && (
        <div>
          <label htmlFor={`${idPrefix}-email`} className={label}>Email</label>
          <input id={`${idPrefix}-email`} type="email" autoComplete="email" required maxLength={254}
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} />
        </div>
      )}
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
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#a46746]" />
        <span className="text-xs leading-relaxed">{MARKETING_CONSENT_TEXT} (Optional)</span>
      </label>

      <p className={`text-xs leading-relaxed ${small}`}>
        We use your details to send the offer you asked for and to record your claim. See our{" "}
        <Link href="/privacy-policy" className={link}>privacy policy</Link>.
      </p>
    </>
  );
}
