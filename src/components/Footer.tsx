"use client";

import { useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Locations", href: "#locations" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const locationNames = ["Caringbah", "Edensor Park", "Kings Park", "Smeaton Grange", "Woollahra"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#2C2218] text-white/70">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/8">
        {/* Brand */}
        <div>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#C9A96E] block mb-4">
            Tanned Co.
          </span>
          <p className="text-sm text-white/50 leading-relaxed mb-5">
            Sydney&apos;s automated spray tan studio. Private booths. Custom colour. Your dream glow.
          </p>
          <div className="flex gap-4">
            {["Instagram", "TikTok", "Facebook"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs font-semibold text-[#E8D5B0] hover:text-[#C9A96E] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/55 hover:text-[#E8D5B0] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-5">
            Locations
          </h4>
          <ul className="flex flex-col gap-3">
            {locationNames.map((l) => (
              <li key={l} className="text-sm text-white/55">{l}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-3">
            Stay in the Loop
          </h4>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            Get exclusive offers and tanning tips straight to your inbox.
          </p>
          {subscribed ? (
            <p className="text-sm text-[#C9A96E] font-semibold">Thanks for subscribing! ✓</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-white/8 border border-white/15 text-white text-sm placeholder-white/35 outline-none focus:border-[#C9A96E] min-w-0"
              />
              <button
                type="submit"
                className="bg-[#C9A96E] hover:bg-[#A8833A] text-white text-xs font-bold px-4 py-2.5 rounded-full whitespace-nowrap transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-5 text-center text-xs text-white/35">
        © 2026 Tanned Co. All rights reserved.{" "}
        <a href="#" className="text-[#E8D5B0] hover:text-[#C9A96E] transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
