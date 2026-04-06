"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LOCATIONS } from "@/lib/locations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ activePath = "/", withBanner = false }: { activePath?: string; withBanner?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                l.href === activePath
                  ? "text-[#1a1a1a] border-b-2 border-[#a46746] pb-0.5"
                  : "text-[#5a4a3a] hover:text-[#1a1a1a]"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Locations dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              className={`flex items-center gap-1 transition-colors ${
                activePath.startsWith("/locations")
                  ? "text-[#1a1a1a] border-b-2 border-[#a46746] pb-0.5"
                  : "text-[#5a4a3a] hover:text-[#1a1a1a]"
              }`}
            >
              Locations
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {locationsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#fdf6ec] border border-[#e8d9c3] rounded-2xl shadow-xl overflow-hidden z-50">
                <div className="p-2">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      onClick={() => setLocationsOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#fdf0d5] transition-colors group"
                    >
                      <span className="text-[#a46746] mt-0.5 text-base">📍</span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-[#1a1a1a] group-hover:text-[#a46746] transition-colors">
                          {loc.shortName}
                        </p>
                        <p className="text-xs text-[#5a4a3a] mt-0.5">{loc.address}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-[#e8d9c3] bg-[#fdf0d5]">
                  <Link
                    href="/contact"
                    onClick={() => setLocationsOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#a46746] hover:text-[#7d4e33] transition-colors"
                  >
                    View All Locations →
                  </Link>
                </div>
              </div>
            )}
          </div>
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

          {/* Mobile locations accordion */}
          <div>
            <button
              onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
              className="w-full flex items-center justify-between text-base font-medium tracking-wider uppercase text-[#5a4a3a]"
            >
              Locations
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileLocationsOpen && (
              <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-[#e8d9c3]">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    onClick={() => { setMenuOpen(false); setMobileLocationsOpen(false); }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#a46746] text-sm mt-0.5">📍</span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-[#1a1a1a]">{loc.shortName}</p>
                      <p className="text-xs text-[#5a4a3a]">{loc.address}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

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
