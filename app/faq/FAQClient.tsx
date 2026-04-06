"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "./faq-data";

export default function FAQClient() {
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
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Got Questions?</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight text-white mb-4">FAQs</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Everything you need to know before your first tan.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-12 md:py-28 bg-[#fdf6ec]">
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
                          {cat.title === "Before You Book" ? (
                            <>{faq.a} <Link href="/book-now" className="text-[#a46746] font-semibold hover:text-[#7d4e33] transition-colors">Book your session →</Link></>
                          ) : (
                            faq.a
                          )}
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
