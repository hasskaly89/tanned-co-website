import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import { LOCATIONS, SITE_URL } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "5 Tanned Co. spray tan studios across Sydney. Caringbah, Edensor Park, Kings Park, Smeaton Grange and Woollahra. Open 7 days, sessions from $35.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "Our Locations | Tanned Co.",
    description: "5 Sydney spray tan studios open 7 days a week. Find your nearest Tanned Co. studio.",
    url: `${SITE_URL}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/locations" />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg"
          alt="Tanned Co. studios across Sydney"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Sydney — 5 Studios</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Our Locations</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            5 convenient Sydney studios open 7 days a week. Find your nearest Tanned Co.
          </p>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">5 Sydney Studios</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">Private booths, flawless results, open 7 days. Sessions from $35.</p>

          {/* First 3 */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {LOCATIONS.slice(0, 3).map((loc) => (
              <div key={loc.slug} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#a46746] text-xl">📍</span>
                  <h3 className="font-black uppercase tracking-wide text-[#1a1a1a]">{loc.shortName}</h3>
                </div>
                <p className="text-[#5a4a3a] text-sm mb-1">{loc.fullAddress}</p>
                <p className="text-xs text-[#a46746] font-semibold uppercase tracking-wider mb-5">Open 7 days a week</p>
                <div className="flex gap-2 mt-auto">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    Directions →
                  </a>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="flex-1 inline-flex items-center justify-center border-2 border-[#a46746] text-[#a46746] py-2.5 rounded-full text-sm font-semibold hover:bg-[#a46746] hover:text-white transition-colors"
                  >
                    View Studio
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Last 2 centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {LOCATIONS.slice(3).map((loc) => (
              <div key={loc.slug} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#a46746] text-xl">📍</span>
                  <h3 className="font-black uppercase tracking-wide text-[#1a1a1a]">{loc.shortName}</h3>
                </div>
                <p className="text-[#5a4a3a] text-sm mb-1">{loc.fullAddress}</p>
                <p className="text-xs text-[#a46746] font-semibold uppercase tracking-wider mb-5">Open 7 days a week</p>
                <div className="flex gap-2 mt-auto">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    Directions →
                  </a>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="flex-1 inline-flex items-center justify-center border-2 border-[#a46746] text-[#a46746] py-2.5 rounded-full text-sm font-semibold hover:bg-[#a46746] hover:text-white transition-colors"
                  >
                    View Studio
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-[#1a1a1a]">Ready to Glow?</h2>
          <p className="text-[#5a4a3a] text-lg mb-10">Book your session online in seconds. Walk in, walk out glowing.</p>
          <a
            href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-10 py-4 rounded-full font-semibold transition-colors text-base"
          >
            Book Casual Tan — $35 →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
