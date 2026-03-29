"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "How To", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Locations", href: "#locations" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1410]/95 backdrop-blur-md border-b border-[#C9A96E]/20 shadow-lg"
          : "bg-[#1A1410]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center gap-8 h-[72px]">
        {/* Logo */}
        <a
          href="#home"
          className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C9A96E] tracking-wide shrink-0"
        >
          Tanned Co.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 ml-auto">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/75 hover:text-[#E8D5B0] transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#book"
          className="hidden md:inline-block ml-4 bg-[#C9A96E] hover:bg-[#A8833A] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1A1410] border-t border-[#C9A96E]/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 bg-[#C9A96E] text-white text-sm font-semibold px-6 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
