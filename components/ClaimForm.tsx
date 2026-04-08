"use client";

import { useState } from "react";

export default function ClaimForm({ location }: { location: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, location }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-4xl mb-4">☀️</div>
        <h3 className="text-xl font-black uppercase text-white mb-2">You&apos;re In!</h3>
        <p className="text-white/70 text-sm">We&apos;ll send your 10% off code to <span className="text-white font-semibold">{form.email}</span> shortly.</p>
      </div>
    );
  }

  return (
    <section className="py-14 md:py-20 bg-[#1a1a1a]">
      <div className="max-w-xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Exclusive Offer</p>
          <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight text-white mb-3">
            Unlock 10% Off Your First Tan
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
            Australia&apos;s largest automated spray tan provider. A streak-free, perfectly even tan in under 5 minutes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-colors text-sm"
          >
            {status === "loading" ? "Sending..." : "Claim My 10% Off →"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
          )}
          <p className="text-white/30 text-xs text-center pt-1">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
