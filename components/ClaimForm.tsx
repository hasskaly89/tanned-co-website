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
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-5">☀️</div>
          <h3 className="text-2xl font-black uppercase text-white mb-3">You&apos;re In!</h3>
          <p className="text-white/60 leading-relaxed">
            Your 10% off code is on its way to <span className="text-white font-semibold">{form.email}</span>.
            Check your inbox and book your first tan at Tanned Co. {location}.
          </p>
          <div className="mt-8 pt-6 border-t border-white/10 text-white/40 text-xs">
            Didn&apos;t get it? Check your spam folder or call us on 1300 826 633.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="claim" className="bg-[#1a1a1a] scroll-mt-16">
      {/* Trust strip */}
      <div className="border-b border-white/10 py-3 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          <span className="flex items-center gap-1.5"><span className="text-yellow-400">★★★★★</span><span className="text-white font-semibold">5.0</span> Rated 5 stars</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>✓ Open 7 days · 6am to midnight</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>✓ No staff · Fully automated</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>✓ Results in under 5 minutes</span>
        </div>
      </div>
      <div className="py-16 md:py-20 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Exclusive First-Timer Offer</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-white mb-5">
              Unlock 10% Off Your First Tan
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Sydney&apos;s largest automated spray tan provider. A streak-free, perfectly even glow in under 5 minutes — completely private, no staff involved.
            </p>
            <ul className="space-y-3">
              {[
                "Private, locked booth — just you",
                "Results in under 5 minutes",
                "Open 7 days, 6am to midnight",
                "No fake orange — natural glow guaranteed",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#a46746]/20 flex items-center justify-center flex-shrink-0 text-[#a46746] text-xs font-bold">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-white font-black uppercase tracking-wide text-sm mb-1">Claim Your Discount</p>
            <p className="text-white/40 text-xs mb-6">Fill in your details and we&apos;ll send your code straight away.</p>
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
                className="w-full bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-colors text-sm mt-1"
              >
                {status === "loading" ? "Sending..." : "Send My 10% Off Code →"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
              )}
              <p className="text-white/25 text-xs text-center pt-1">
                No spam. Unsubscribe anytime. Offer valid for new customers only.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
}
