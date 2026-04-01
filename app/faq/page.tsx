"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    title: "About the Tan",
    faqs: [
      {
        q: "What is a contactless spray tan booth?",
        a: "We use state of the art VersaSpa spray tan booths that provide a custom spray tanning experience in your own private room. Once you've stepped into the booth, it will sense your height and guide you into 4 different positions with 3 spray nozzles for full-body coverage. The open booth is comfortably heated — even in winter you'll stay warm. Our booths self-clean between every session so you always step into a fresh, clean environment.",
      },
      {
        q: "How do I select my tan?",
        a: "Our booths have 4 colour options with 3 colour depths. In our tanning rooms you'll find a tan menu so you can customise your experience to suit your skin tone and desired result. If you're unsure which colour is right for you, feel free to contact us and we'll help recommend an option!",
      },
      {
        q: "How long do I leave my tan on before showering?",
        a: "We recommend leaving your tan on for 6–8 hours. For a darker result you can sleep in it — just wash your hands and face with a gentle cleanser 30 minutes after your session. We also offer a 2-hour rapid clear solution that develops into a deep sunkissed glow and needs to be washed off after 2–3 hours max.",
      },
      {
        q: "How do spray tans work?",
        a: "When your sunless tan is applied, Dihydroxyacetone (DHA) reacts with proteins in the skin to form a golden-brown colour. After 2–3 hours your skin darkens and reaches peak colour within 24 hours. Your tan will gradually fade due to natural exfoliation over 5–7 days.",
      },
      {
        q: "How long does a spray tan last?",
        a: "With proper preparation and aftercare, your tan can last up to 7 days. To extend the life of your tan, moisturise daily, avoid long baths and chlorine, and use a tan-safe body wash. Exfoliating before your next session ensures an even fade and better base for your next tan.",
      },
    ],
  },
  {
    title: "About the Experience",
    faqs: [
      {
        q: "Is it private?",
        a: "Absolutely. You have your own private tanning room with no staff involvement whatsoever. The booth guides you through your entire session with voice and visual instructions. The booth self-cleans between every session, so you always walk into a fresh, private space.",
      },
      {
        q: "Is the tanning solution safe?",
        a: "Yes, our solutions are completely safe. They are non-toxic, paraben-free, cruelty-free, and 100% vegan. The active ingredient is DHA (Dihydroxyacetone), a naturally derived compound that is well-established and widely used in cosmetics. It does not penetrate the skin barrier and contains no harmful chemicals.",
      },
      {
        q: "What should I wear?",
        a: "Wear dark, loose-fitting clothing to your appointment to avoid any potential transfer from the bronzer in the solution. On the day of your tan, please arrive without deodorant, perfume, makeup or moisturiser — these can create a barrier that affects how evenly your tan develops.",
      },
      {
        q: "Do I need to book in advance?",
        a: "Yes, all sessions at Tanned Co are pre-booked. You can book via our app or online through our website. This ensures your private room is ready for you when you arrive — no waiting, no queues.",
      },
      {
        q: "Can men get a spray tan?",
        a: "Yes! Tanned Co welcomes all genders and body types. Our automated booths are completely private and designed to make everyone feel comfortable and confident. Spray tanning is for everyone.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/faq" />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/2b8046e0-e9f5-424e-9f55-58d06dc9689f/DSCF3275.jpg"
          alt="Tanned Co. glow result"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Got Questions?</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">FAQs</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Everything you need to know before your first tan.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-[#fdf6ec]">
        <div className="max-w-3xl mx-auto px-6 space-y-14">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#a46746] text-[#1a1a1a]">
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq, i) => {
                  const key = `${cat.title}-${i}`;
                  return (
                    <div key={key} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3]">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#1a1a1a] hover:bg-[#fdf6ec] transition-colors"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <span className={`text-[#a46746] text-xl font-black flex-shrink-0 transition-transform duration-200 ${openItem === key ? "rotate-45" : ""}`}>+</span>
                      </button>
                      {openItem === key && (
                        <div className="px-6 pb-6 text-[#5a4a3a] leading-relaxed text-sm border-t border-[#e8d9c3] pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-20 bg-[#fdf0d5] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">We&apos;re Here to Help</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-[#1a1a1a]">Still Have Questions?</h2>
          <p className="text-[#5a4a3a] text-lg mb-8">
            Can&apos;t find what you&apos;re looking for? Reach out to our team — we&apos;re happy to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#1a1a1a] hover:bg-[#3a2e24] text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
