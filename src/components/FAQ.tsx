"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I prepare for my spray tan?",
    a: "Exfoliate your skin 24 hours before your appointment. Shower and arrive with clean, dry skin — no moisturiser, perfume, or deodorant. Wear or bring loose, dark clothing.",
  },
  {
    q: "What's the difference between Rapid Clear and Standard?",
    a: "Rapid Clear develops in just 2–3 hours, then rinses off clearly — ideal if you're short on time. Standard develops over 6–8 hours for a deeper, longer-lasting result.",
  },
  {
    q: "Is spray tanning safe?",
    a: "Yes! Our solutions use DHA (dihydroxyacetone), an FDA-approved active ingredient derived from sugar cane. It reacts with the outermost layer of your skin to create a natural-looking tan.",
  },
  {
    q: "How long will my tan last?",
    a: "With proper aftercare, your tan can last 7–10 days. Moisturise daily, avoid prolonged soaking, and pat dry after showering to extend wear.",
  },
  {
    q: "Can men get a spray tan?",
    a: "Absolutely — our booths are designed for everyone. All genders welcome.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes, bookings are required. You can book online, through our app (iOS & Android), or by calling us.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#EAD9B8] rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm text-[#3A2E22] hover:bg-[#F5EDD8] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <span className="text-2xl text-[#C9A96E] font-light ml-4 shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm text-[#7A6A55] leading-relaxed border-t border-[#EAD9B8]">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A96E] mb-3">
          Got Questions?
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#3A2E22] mb-14">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
