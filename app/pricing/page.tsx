"use client";

import { useState } from "react";
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
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Simple, Honest Pricing</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            No hidden fees. No awkward upsells. Just beautiful tans.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Casual */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Casual Tan</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-6xl font-black">$35</span>
                <span className="text-[#5a4a3a] mb-2">/ session</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">Pay as you go</p>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-3">What&apos;s Included</h4>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 1x automated spray tan session</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 2 months from purchase</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your colour &amp; depth</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> All 5 Sydney locations</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Book via app or online</li>
              </ul>
              <Link href="/book-now" className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors">
                Buy Now
              </Link>
            </div>

            {/* 5 Pack */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden scale-[1.02]">
              <div className="absolute top-5 right-5 flex flex-col items-end gap-1.5">
                <span className="bg-[#a46746] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                <span className="bg-white/10 text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">🔥 Best Value</span>
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">5 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-6xl font-black">$160</span>
              </div>
              <p className="text-white/50 text-sm mb-6">$32 per tan · Save $15</p>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">What&apos;s Included</h4>
              <ul className="space-y-3 text-white/70 text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 5x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 5 months from purchase</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Name-specific booking</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> All 5 Sydney locations</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Book via app or online</li>
              </ul>
              <Link href="/book-now" className="block text-center bg-[#a46746] text-white py-3.5 rounded-full font-semibold hover:bg-[#7d4e33] transition-colors">
                Buy Now
              </Link>
            </div>

            {/* 10 Pack */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">10 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-6xl font-black">$300</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">$30 per tan · Save $50</p>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-3">What&apos;s Included</h4>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 10x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 10 months from purchase</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Name-specific booking</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> All 5 Sydney locations</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Best value per session</li>
              </ul>
              <Link href="/book-now" className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors">
                Buy Now
              </Link>
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

      {/* MEMBERSHIP */}
      <section className="py-20 md:py-28 bg-[#fdf0d5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">For Regular Glowers</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">Membership Options</h2>
          <p className="text-center text-[#5a4a3a] mb-14 max-w-lg mx-auto">
            Tan regularly? Our membership plans offer unlimited sessions, priority booking and exclusive member rates.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Solo Studio",
                desc: "Unlimited sessions at your home studio.",
                perks: ["Unlimited sessions/month", "1 location access", "Priority booking", "Member-only pricing"],
                cta: "1 studio",
              },
              {
                name: "All Access",
                desc: "Tan at any of our 5 Sydney locations whenever you want.",
                perks: ["Unlimited sessions/month", "All 5 locations", "Priority booking", "Member-only pricing", "Transferable sessions"],
                cta: "All 5 studios",
                highlight: true,
              },
              {
                name: "Duo",
                desc: "Share your membership with a friend or partner.",
                perks: ["Unlimited sessions/month", "2 members, 1 plan", "All 5 locations", "Priority booking"],
                cta: "2 people",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 border flex flex-col ${
                  plan.highlight
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-xl"
                    : "bg-white text-[#1a1a1a] border-[#e8d9c3] shadow-sm"
                }`}
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-2">{plan.cta}</p>
                <h3 className={`text-xl font-black uppercase mb-3 ${plan.highlight ? "text-white" : "text-[#1a1a1a]"}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/60" : "text-[#5a4a3a]"}`}>{plan.desc}</p>
                <ul className={`space-y-2.5 text-sm flex-1 mb-8 ${plan.highlight ? "text-white/70" : "text-[#5a4a3a]"}`}>
                  {plan.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-[#a46746] mt-0.5">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <div className={`text-center py-3 rounded-full font-bold text-sm uppercase tracking-wider ${plan.highlight ? "bg-[#a46746] text-white" : "border-2 border-[#1a1a1a] text-[#1a1a1a]"}`}>
                  Pricing on Request
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#5a4a3a] text-sm mt-10">
            Interested in a membership?{" "}
            <Link href="/contact" className="text-[#a46746] font-semibold hover:underline">
              Contact your nearest studio →
            </Link>
          </p>
        </div>
      </section>

      {/* MEMBERSHIP BANNER */}
      <section className="py-16 bg-white text-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Go Further</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Looking for Something More Regular?</h2>
          <p className="text-[#5a4a3a] text-lg mb-8">
            We offer membership options for our most dedicated glow-getters. Get in touch to find out what&apos;s available at your nearest location.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-8 py-3.5 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
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
