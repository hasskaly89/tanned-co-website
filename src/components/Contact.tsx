"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A96E] mb-3">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#3A2E22] mb-10">
            Contact Us
          </h2>

          <div className="flex flex-col gap-6">
            {[
              { label: "Phone", value: "1300 826 633", href: "tel:1300826633" },
              { label: "Email", value: "hello@tannedco.com.au", href: "mailto:hello@tannedco.com.au" },
              { label: "Instagram", value: "@tannedco_", href: "#" },
            ].map((item) => (
              <div key={item.label} className="border-b border-[#EAD9B8] pb-5">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7A6A55] mb-1">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  className="text-base font-semibold text-[#A8833A] hover:text-[#C9A96E] transition-colors"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#F5EDD8] rounded-2xl p-10">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#3A2E22] mb-7">
            Send a Message
          </h3>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-semibold text-[#3A2E22]">Message sent!</p>
              <p className="text-sm text-[#7A6A55] mt-1">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3.5 border border-[#EAD9B8] rounded-lg bg-white text-[#3A2E22] text-sm outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-3.5 border border-[#EAD9B8] rounded-lg bg-white text-[#3A2E22] text-sm outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-5 py-3.5 border border-[#EAD9B8] rounded-lg bg-white text-[#3A2E22] text-sm outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 transition resize-none"
              />
              <button
                type="submit"
                className="bg-[#C9A96E] hover:bg-[#A8833A] text-white font-semibold py-4 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
