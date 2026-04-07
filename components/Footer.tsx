import Link from "next/link";
import Image from "next/image";
import { LOCATIONS } from "@/lib/locations";

const socials = [
  {
    label: "Instagram",
    href: "http://instagram.com/tannedco_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@tannedco_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100086326464692",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Image src="/logo.png" alt="Tanned Co." width={120} height={24} className="h-6 w-auto object-contain brightness-0 invert opacity-50" />

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/40 hover:text-white/80 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* App store buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://apps.apple.com/us/app/tannedco/id1659547172"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white rounded-xl px-4 py-2.5 border border-white/10"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left leading-tight">
              <p className="text-[9px] text-white/60 uppercase tracking-wider">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white rounded-xl px-4 py-2.5 border border-white/10"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.22.99.16l12.1-6.98-2.56-2.56-10.53 9.38zm-1.7-20.1C1.18 4 1 4.46 1 5.02v13.96c0 .56.18 1.02.48 1.36l.07.07 7.82-7.82v-.18L1.55 4.59l-.07.07zm17.44 9.5l-2.18-1.26-2.82 2.82 2.82 2.82 2.18-1.26c.62-.36.62-.94.62-.94s0-.58-.62-1.18zM4.17.24L16.27 7.22l-2.56 2.56L3.18.4C3.48.34 3.87.07 4.17.24z"/>
            </svg>
            <div className="text-left leading-tight">
              <p className="text-[9px] text-white/60 uppercase tracking-wider">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>
        </div>

        {/* Location links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="text-white/40 text-xs uppercase tracking-wider hover:text-white/70 transition-colors"
            >
              {loc.shortName}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Tanned Co. All rights reserved.
          </p>
          <a
            href="https://www.tannedco.com.au/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
