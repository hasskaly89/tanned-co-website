"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";

const pricingFaqs = [
  {
    q: "Can I share my pack with someone else?",
    a: "Our packs are name-specific and linked to your account. They cannot be shared or transferred.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, Apple Pay and Google Pay via our app and booking portal.",
  },
  {
    q: "Can I get a refund on unused sessions?",
    a: "Sessions are non-refundable but can be transferred to another booking date within the validity period.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/pricing" />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
          alt="Tanned Co. tanning result"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Transparent &amp; Simple</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Simple, Honest Pricing</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            No hidden fees. No awkward upsells. Just beautiful tans.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Transparent &amp; Simple</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Our Pricing</h2>
          <p className="text-center text-[#5a4a3a] mb-14 max-w-md mx-auto">Three ways to glow. Pick what suits you.</p>
          <div className="grid md:grid-cols-3 gap-6 items-stretch pt-4">

            {/* Casual */}
            <div className="relative bg-white rounded-3xl p-8 border border-[#e8d9c3] shadow-sm flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 rounded-2xl bg-[#f5ecdd] text-[#a46746] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3s6 6 6 10a6 6 0 1 1-12 0c0-4 6-10 6-10z" /></svg>
                </span>
                <span className="bg-[#f1e7d6] text-[#8a6a4a] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Pay as you go</span>
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-2">Casual Tan</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-black">$39</span><span className="text-[#5a4a3a] mb-1.5">/ session</span></div>
              <p className="text-[#8a6a4a] text-sm mb-6">Single visit, no commitment</p>
              <div className="border-t border-[#e8d9c3] mb-6" />
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 1x automated spray tan session</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 2 months</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your shade &amp; depth</li>
              </ul>
              <a
                href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("book_now_click", { source: "pricing_page", plan: "casual" })}
                className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
              >
                Book Casual Tan →
              </a>
            </div>

            {/* 10 Pack */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-[#a46746]/35 shadow-md flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 rounded-2xl bg-[#a46746]/12 text-[#a46746] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" /><path d="M4 12l8 4.5 8-4.5" /><path d="M4 16.5l8 4.5 8-4.5" /></svg>
                </span>
                <span className="bg-[#a46746]/12 text-[#a46746] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Save $30</span>
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-2">10 Pack</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-black">$360</span></div>
              <p className="text-[#a46746] font-semibold text-sm mb-6">$36 per tan · save $30</p>
              <div className="border-t border-[#e8d9c3] mb-6" />
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 10x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 10 months</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Name-specific booking</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Best for regular tanners</li>
              </ul>
              <a
                href="https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("book_now_click", { source: "pricing_page", plan: "10_pack" })}
                className="block text-center border-2 border-[#a46746] text-[#a46746] py-3 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors text-sm"
              >
                Buy 10 Pack →
              </a>
            </div>

            {/* Glow Club */}
            <div className="relative bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-2xl ring-1 ring-[#a46746]/40 flex flex-col md:scale-[1.03] md:-my-1">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#a46746] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">★ Best Value</div>
              <div className="flex items-center justify-between mb-6 mt-1">
                <span className="w-11 h-11 rounded-2xl bg-[#a46746] text-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5z" /></svg>
                </span>
                <span className="bg-white/10 text-[#e0a878] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Membership</span>
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-2">Glow Club</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-black">$89</span><span className="text-white/50 mb-1.5">/ month</span></div>
              <p className="text-white/50 text-sm mb-2">3 tans a month · under $30 a tan</p>
              <p className="text-[#e0a878] text-sm font-semibold mb-6">3 casual tans would cost $117. You save $28 a month.</p>
              <div className="border-t border-white/10 mb-6" />
              <ul className="space-y-3 text-white/70 text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 3-month minimum, then month-to-month</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Glow Key to all 5 locations</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Birthday tan on us</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Founding member status</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Mate&apos;s rate</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Priority access</li>
              </ul>
              <a
                href="https://tannedco.gymmasteronline.com/portal/membership/a015bd6ac18c7596fa250eed4e8ab668"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("glow_club_join_click", { source: "pricing_page", plan: "membership" })}
                className="block text-center bg-[#a46746] text-white py-3 rounded-full font-semibold hover:bg-[#7d4e33] transition-colors text-sm"
              >
                Join Glow Club →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* URGENCY STRIP */}
      <div className="bg-[#1a1a1a] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2"><span className="text-[#a46746]">✓</span> All 5 Sydney locations open today</span>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="flex items-center gap-2"><span className="text-[#a46746]">✓</span> Book online in under 60 seconds</span>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="flex items-center gap-2"><span className="text-[#a46746]">✓</span> No lock-in contracts</span>
        </div>
      </div>

      {/* FAQ STRIP */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Pricing Questions</p>
          <h2 className="text-4xl font-black uppercase text-center mb-14">Common Questions</h2>
          <div className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#1a1a1a] hover:bg-[#fdf6ec] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className={`text-[#a46746] text-xl font-black flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[#5a4a3a] leading-relaxed text-sm border-t border-[#e8d9c3] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#fdf6ec] text-[#1a1a1a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase mb-6">Book Your First Tan</h2>
          <p className="text-[#5a4a3a] text-lg mb-10">Ready to glow? Book online in seconds.</p>
          <Link
            href="/book-now"
            className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-10 py-4 rounded-full font-semibold transition-colors text-base"
          >
            Book Now →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
