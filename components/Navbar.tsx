"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ activePath = "/", withBanner = false }: { activePath?: string; withBanner?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed ${withBanner ? "top-10" : "top-0"} left-0 right-0 z-50 bg-[#fdf6ec]/90 backdrop-blur-sm border-b border-[#e8d9c3] transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-6 p-0 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Tanned Co." width={300} height={112} className="h-28 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${
                l.href === activePath || (l.href === "/locations" && activePath.startsWith("/locations"))
                  ? "text-[#1a1a1a] border-b-2 border-[#a46746] pb-0.5"
                  : "text-[#5a4a3a] hover:text-[#1a1a1a]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/book-now"
          className="hidden md:inline-flex items-center bg-[#1a1a1a] text-white text-sm px-5 py-2.5 rounded-full font-medium hover:bg-[#3a2e24] transition-colors"
        >
          Book Now
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fdf6ec] border-t border-[#e8d9c3] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium tracking-wider uppercase text-[#5a4a3a]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book-now"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center bg-[#1a1a1a] text-white text-sm px-5 py-3 rounded-full font-medium"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
