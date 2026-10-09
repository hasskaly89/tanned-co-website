"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { IS_PREVIEW, PREVIEW_FORM_MESSAGE } from "@/lib/preview";

const EMPTY = { name: "", email: "", phone: "", area: "", timeframe: "", message: "", website: "" };
const label = "block text-sm font-medium text-ink mb-1.5";

export default function FranchiseForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong. Please try again.");
      trackEvent("generate_lead", { form: "franchise" });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-[28px] border border-line p-8 md:p-10 text-center" aria-live="polite">
        <p className="eyebrow mb-3">Thanks, {form.name.split(" ")[0]}</p>
        <h3 className="display-md mb-3">We&apos;ve got your enquiry.</h3>
        <p className="text-body">Our franchise team will be in touch.</p>
      </div>
    );
  }

  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-[28px] border border-line p-7 md:p-10 space-y-5">
      <h2 className="display-md mb-2">Send a franchise enquiry.</h2>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set("website")} className="hidden" />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fr-name" className={label}>Full name</label>
          <input id="fr-name" required maxLength={100} autoComplete="name" value={form.name} onChange={set("name")} className="field !bg-cream" />
        </div>
        <div>
          <label htmlFor="fr-phone" className={label}>Mobile number</label>
          <input id="fr-phone" type="tel" required maxLength={30} autoComplete="tel" inputMode="tel" value={form.phone} onChange={set("phone")} className="field !bg-cream" />
        </div>
      </div>
      <div>
        <label htmlFor="fr-email" className={label}>Email</label>
        <input id="fr-email" type="email" required maxLength={254} autoComplete="email" value={form.email} onChange={set("email")} className="field !bg-cream" />
      </div>
      <div>
        <label htmlFor="fr-area" className={label}>Area you&apos;re interested in</label>
        <input id="fr-area" required maxLength={120} placeholder="e.g. Penrith, Newcastle" value={form.area} onChange={set("area")} className="field !bg-cream" />
      </div>
      <div>
        <label htmlFor="fr-time" className={label}>When would you like to open?</label>
        <select id="fr-time" value={form.timeframe} onChange={set("timeframe")} className="field !bg-cream cursor-pointer">
          <option value="">Choose one (optional)</option>
          <option>Within 6 months</option>
          <option>6 to 12 months</option>
          <option>More than 12 months</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div>
        <label htmlFor="fr-msg" className={label}>Anything else we should know? (optional)</label>
        <textarea id="fr-msg" rows={4} maxLength={3000} value={form.message} onChange={set("message")} className="field !bg-cream resize-none" />
      </div>
      <button type="submit" disabled={status === "loading" || IS_PREVIEW} className="btn btn-dark w-full !py-4">
        {status === "loading" ? "Sending..." : "Send franchise enquiry"}
      </button>
      {IS_PREVIEW && <p className="text-muted text-xs text-center">{PREVIEW_FORM_MESSAGE}</p>}
      {status === "error" && <p role="alert" className="text-red-700 text-sm text-center">{error}</p>}
      <p className="text-xs text-muted text-center">
        Your enquiry goes to our franchise team. See our <Link href="/privacy-policy" className="text-link">privacy policy</Link>.
      </p>
    </form>
  );
}
