"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Glow Club", href: "/glow-club" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ activePath = "/" }: { activePath?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === activePath || (href === "/locations" && activePath.startsWith("/locations"));

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-line"
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
        <Link href="/" aria-label="Tanned Co. home" className="flex items-center shrink-0">
          <Image
            src="/logo_transparent.png"
            alt="Tanned Co."
            width={1438}
            height={200}
            priority
            className="h-[18px] md:h-5 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`py-1 border-b-[1.5px] transition-colors whitespace-nowrap ${
                isActive(l.href)
                  ? "text-ink border-bronze"
                  : "text-body border-transparent hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            href="/book-now"
            onClick={() => trackEvent("book_now_click", { source: "navbar_desktop" })}
            className="btn btn-dark !px-6 !py-3 !text-sm"
          >
            Book now
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-3 -mr-3"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-cream border-t border-line px-6 py-6 flex flex-col">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`font-display text-2xl py-2.5 border-b border-line ${isActive(l.href) ? "text-bronze-text" : "text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book-now"
            onClick={() => {
              setMenuOpen(false);
              trackEvent("book_now_click", { source: "navbar_mobile_menu" });
            }}
            className="btn btn-dark mt-6"
          >
            Book now
          </Link>
        </div>
      )}
    </nav>
  );
}
