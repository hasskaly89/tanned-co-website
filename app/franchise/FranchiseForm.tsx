"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const EMPTY = { name: "", email: "", phone: "", area: "", timeframe: "", message: "", website: "" };
const input =
  "w-full bg-white border border-[#e8d9c3] rounded-xl px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#a46746] transition-colors";
const label = "block text-xs font-bold uppercase tracking-widest text-[#5a4a3a] mb-2";

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
      <div className="bg-white rounded-3xl border border-[#e8d9c3] p-8 text-center" aria-live="polite">
        <h3 className="text-2xl font-black uppercase mb-3">Thanks, {form.name.split(" ")[0]}</h3>
        <p className="text-[#5a4a3a]">We&apos;ve received your enquiry and our franchise team will be in touch.</p>
      </div>
    );
  }

  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl border border-[#e8d9c3] p-6 md:p-8 space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set("website")} className="hidden" />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fr-name" className={label}>Full name</label>
          <input id="fr-name" required maxLength={100} autoComplete="name" value={form.name} onChange={set("name")} className={input} />
        </div>
        <div>
          <label htmlFor="fr-phone" className={label}>Mobile number</label>
          <input id="fr-phone" type="tel" required maxLength={30} autoComplete="tel" inputMode="tel" value={form.phone} onChange={set("phone")} className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="fr-email" className={label}>Email</label>
        <input id="fr-email" type="email" required maxLength={254} autoComplete="email" value={form.email} onChange={set("email")} className={input} />
      </div>
      <div className="grid gap-5">
        <div>
          <label htmlFor="fr-area" className={label}>Area you&apos;re interested in</label>
          <input id="fr-area" required maxLength={120} placeholder="e.g. Penrith, Newcastle" value={form.area} onChange={set("area")} className={input} />
        </div>
        <div>
          <label htmlFor="fr-time" className={label}>When would you like to open?</label>
          <select id="fr-time" value={form.timeframe} onChange={set("timeframe")} className={input}>
            <option value="">Choose one (optional)</option>
            <option>Within 6 months</option>
            <option>6 to 12 months</option>
            <option>More than 12 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="fr-msg" className={label}>Anything else we should know? (optional)</label>
        <textarea id="fr-msg" rows={4} maxLength={3000} value={form.message} onChange={set("message")} className={`${input} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 text-white py-4 rounded-full font-semibold uppercase tracking-widest transition-colors"
      >
        {status === "loading" ? "Sending..." : "Send Franchise Enquiry"}
      </button>
      {status === "error" && <p role="alert" className="text-[#b3261e] text-sm text-center">{error}</p>}
      <p className="text-xs text-[#5a4a3a] text-center">
        Your enquiry goes to our franchise team. See our <Link href="/privacy-policy" className="underline">privacy policy</Link>.
      </p>
    </form>
  );
}
