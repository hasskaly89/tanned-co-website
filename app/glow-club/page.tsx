"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import { GLOW_CLUB, formatAud } from "@/lib/pricing";
import {
  GLOW_CLUB_ENTRY_FAQ,
  GLOW_CLUB_EXTRA_TAN_LINE,
  GLOW_CLUB_MINIMUM_LINE,
  GLOW_CLUB_PER_TAN_LINE,
  GLOW_CLUB_TANS_LINE,
  GLOW_KEY_LINE,
  GLOW_KEY_TITLE,
} from "@/lib/glow-club";

const GLOW_CLUB_SIGNUP_URL = "https://tannedco.gymmasteronline.com/portal/membership/a015bd6ac18c7596fa250eed4e8ab668";

// Perks confirmed by Hass (11 Oct 2026): the GymMaster list (Glow Key, birthday tan,
// member-only perks, founding spots) plus mate's rate, product drops, member offers
// and priority access.
const perks = [
  {
    title: GLOW_KEY_TITLE,
    body: GLOW_KEY_LINE,
  },
  {
    title: "Birthday tan on us",
    body: "A free tan during your birthday month, our treat.",
  },
  {
    title: "First access to product drops",
    body: "Be first to future tan care products and merch at member pricing.",
  },
  {
    title: "Mate's rate",
    body: `Share a code with one friend per month for ${formatAud(GLOW_CLUB.mateRateDiscount)} off their casual tan.`,
  },
  {
    title: "Exclusive member offers",
    body: "Member-only promotions and seasonal offers throughout the year.",
  },
  {
    title: "Priority access",
    body: "First in line for new locations and new services as we grow.",
  },
  {
    title: "Founding member status",
    body: "Limited founding member spots available. Once they're gone, they're gone.",
  },
];

const glowClubFaqs = [
  {
    q: "How many tans do I get each month?",
    a: `${GLOW_CLUB.tansPerMonth} automated spray tan sessions every month. ${GLOW_CLUB_PER_TAN_LINE}.`,
  },
  {
    q: "Is there a minimum commitment?",
    a: `Yes. Glow Club has a ${GLOW_CLUB.minimumMonths}-month minimum, which is ${formatAud(GLOW_CLUB.minimumTotal)} total (${GLOW_CLUB.minimumMonths} x ${formatAud(GLOW_CLUB.monthly)}). To leave before then, you pay out the rest of the minimum term. After that it continues month to month, and you can cancel by emailing ${GLOW_CLUB.cancelEmail}.`,
  },
  {
    q: "Do unused tans roll over?",
    a: `No. Your ${GLOW_CLUB.tansPerMonth} tans need to be used within each month.`,
  },
  {
    q: "What if I want a 4th tan in a month?",
    a: GLOW_CLUB_EXTRA_TAN_LINE,
  },
  {
    q: "Where can I use my membership?",
    a: "Your Glow Key works at all 5 of our Sydney locations, 7 days a week, 6am to midnight. Book through the app.",
  },
  GLOW_CLUB_ENTRY_FAQ,
];

export default function GlowClub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/glow-club" />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
          alt="Tanned Co. Glow Club member"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Founding Members Now Open</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Glow Club</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            {GLOW_CLUB_TANS_LINE}. {formatAud(GLOW_CLUB.monthly)} a month. {GLOW_CLUB_PER_TAN_LINE}, plus member-only perks.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">The Membership</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Glow Club Membership</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-md mx-auto">One simple membership: {GLOW_CLUB_TANS_LINE} plus member-only perks. {GLOW_CLUB_MINIMUM_LINE}</p>
          <div className="max-w-md mx-auto">

            {/* Glow Club Membership - featured */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-5 right-5 bg-[#a46746] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Founding Member</div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Glow Club</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">{formatAud(GLOW_CLUB.monthly)}</span>
                <span className="text-white/50 mb-1.5">/ month</span>
              </div>
              <p className="text-white/50 text-sm mb-6">{GLOW_CLUB_PER_TAN_LINE} · {GLOW_CLUB_TANS_LINE}</p>
              <ul className="space-y-3 text-white/70 text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> {GLOW_CLUB_TANS_LINE}</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> {GLOW_KEY_TITLE}: {GLOW_KEY_LINE}</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> {GLOW_CLUB_MINIMUM_LINE}</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Book via the app · 7 days, 6am to midnight</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Birthday tan on us and member-only perks</li>
              </ul>
              <a
                href={GLOW_CLUB_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("glow_club_join_click", { source: "glow_club_page", plan: "membership" })}
                className="block text-center bg-[#a46746] text-white py-3 rounded-full font-semibold hover:bg-[#7d4e33] transition-colors text-sm"
              >
                Join Glow Club →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MEMBER PERKS */}
      <section className="py-12 md:py-28 bg-[#fdf6ec]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">The Good Stuff</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Member Perks</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">What comes with your Glow Club membership.</p>
          <div className="flex flex-wrap justify-center gap-5">
            {perks.map((perk) => (
              <div key={perk.title} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] bg-white rounded-3xl p-7 shadow-sm border border-[#e8d9c3] flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="w-12 h-12 rounded-full bg-[#a46746] text-white flex items-center justify-center mb-4 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <h3 className="font-black uppercase text-sm tracking-wide mb-2">{perk.title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{perk.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* URGENCY STRIP */}
      <div className="bg-[#1a1a1a] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2"><span className="text-[#a46746]">✓</span> {GLOW_KEY_TITLE}</span>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="flex items-center gap-2"><span className="text-[#a46746]">✓</span> {GLOW_CLUB_PER_TAN_LINE}</span>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="flex items-center gap-2"><span className="text-[#a46746]">✓</span> Limited founding member spots</span>
        </div>
      </div>

      {/* FAQ STRIP */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Membership Questions</p>
          <h2 className="text-4xl font-black uppercase text-center mb-14">Common Questions</h2>
          <div className="space-y-3">
            {glowClubFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
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
          <h2 className="text-4xl font-black uppercase mb-6">Join Glow Club</h2>
          <p className="text-[#5a4a3a] text-lg mb-10">Limited founding member spots. If you want in, don&apos;t sit on it.</p>
          <a
            href={GLOW_CLUB_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("glow_club_join_click", { source: "glow_club_page_cta", plan: "membership" })}
            className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-10 py-4 rounded-full font-semibold transition-colors text-base"
          >
            Join Glow Club →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
