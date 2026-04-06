import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <img src="/logo.png" alt="Tanned Co." className="h-6 object-contain brightness-0 invert opacity-50" />

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
