import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import LocationCardButtons from "@/components/LocationCardButtons";
import ExternalBookButton from "@/components/ExternalBookButton";
import { LOCATIONS, SITE_URL } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "5 Tanned Co. spray tan studios across Sydney. Caringbah, Edensor Park, Kings Park, Smeaton Grange and Woollahra. Open 7 days, sessions from $39.",
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
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Sydney 5 Studios</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Our Locations</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            5 convenient <Link href="/how-it-works" className="underline decoration-white/40 hover:decoration-white underline-offset-4">Sydney spray tan studios</Link> open 7 days a week. Find your nearest Tanned Co.
          </p>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Find Us</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">5 Sydney Studios</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">Private booths, flawless results, open 7 days. <Link href="/pricing" className="underline decoration-[#a46746]/40 hover:decoration-[#a46746] underline-offset-4 text-[#a46746] font-semibold">Sessions from $39</Link>.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3] shadow-sm flex flex-col">
                {/* Map */}
                <div style={{ filter: "grayscale(100%)" }}>
                  <iframe
                    title={`Map of Tanned Co. ${loc.shortName}`}
                    src={loc.mapEmbed ?? `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                    width="100%"
                    height="180"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* Details */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#a46746] text-xl">📍</span>
                    <h3 className="font-black uppercase tracking-wide text-[#1a1a1a]">{loc.shortName}</h3>
                  </div>
                  <p className="text-[#5a4a3a] text-sm mb-1">{loc.fullAddress}</p>
                  <p className="text-xs text-[#a46746] font-semibold uppercase tracking-wider mb-5">Open 7 days a week</p>
                  <LocationCardButtons
                    slug={loc.slug}
                    shortName={loc.shortName}
                    mapsUrl={loc.mapsUrl}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* CTA */}
      <section className="py-12 md:py-28 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-6 text-[#1a1a1a]">Ready to Glow?</h2>
          <p className="text-[#5a4a3a] text-lg mb-4">Book your session online in seconds. Walk in, walk out glowing.</p>
          <p className="text-[#5a4a3a] text-sm mb-10">New to spray tans? Read our <Link href="/faq" className="underline decoration-[#a46746]/40 hover:decoration-[#a46746] underline-offset-4 text-[#a46746] font-semibold">spray tan prep guide</Link> first.</p>
          <ExternalBookButton
            href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
            source="locations_page_cta"
            className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-10 py-4 rounded-full font-semibold transition-colors text-base"
          >
            Book Casual Tan $39 →
          </ExternalBookButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
