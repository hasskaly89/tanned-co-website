import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import LocationCardButtons from "@/components/LocationCardButtons";
import StudioBookButton from "@/components/StudioBookButton";
import { CASUAL, formatAud } from "@/lib/pricing";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { PinIcon, ClockIcon } from "@/components/Icons";
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
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/locations" />

      <PageHero
        eyebrow="Sydney. 5 studios."
        title="Our locations."
        intro={
          <>
            5 convenient{" "}
            <Link href="/how-it-works" className="underline decoration-white/50 hover:decoration-white underline-offset-4">
              Sydney spray tan studios
            </Link>{" "}
            open 7 days a week. Find your nearest Tanned Co.
          </>
        }
        image="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg"
        imageAlt="Tanned Co. studios across Sydney"
      />

      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Find us"
            title="5 Sydney studios."
            intro={
              <>
                Private booths, flawless results, open 7 days.{" "}
                <Link href="/pricing" className="text-link">Sessions from $39</Link>.
              </>
            }
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="bg-white rounded-[28px] overflow-hidden border border-line flex flex-col">
                <div style={{ filter: "grayscale(100%)" }}>
                  <iframe
                    title={`Map of Tanned Co. ${loc.shortName}`}
                    src={loc.mapEmbed ?? `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                    width="100%"
                    height="190"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display font-medium text-[1.9rem] leading-tight mb-3">
                    {loc.shortName}
                    {loc.slug === "kings-park" && (
                      <span className="align-middle ml-3 font-sans text-[11px] font-semibold uppercase tracking-wider bg-bronze text-white rounded-full px-2.5 py-1">
                        New
                      </span>
                    )}
                  </h3>
                  <p className="flex items-start gap-2.5 text-body text-[15px] mb-2">
                    <PinIcon className="w-4 h-4 mt-1 text-bronze shrink-0" /> {loc.fullAddress}
                  </p>
                  <p className="flex items-start gap-2.5 text-body text-[15px] mb-7">
                    <ClockIcon className="w-4 h-4 mt-1 text-bronze shrink-0" /> Open 7 days, 6am to midnight
                  </p>
                  <LocationCardButtons slug={loc.slug} shortName={loc.shortName} mapsUrl={loc.mapsUrl} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      <CtaBand
        source="locations_cta"
        title="Ready to glow?"
        text="Book your session online in seconds. Check in with the app, walk out glowing."
      >
        <StudioBookButton
          plan="casual"
          source="locations_page_cta"
          label={`Book a casual tan, ${formatAud(CASUAL.price)}`}
          buttonClassName="btn btn-light"
          tone="dark"
        />
        <Link href="/faq" className="btn btn-outline-light">Read the prep guide</Link>
      </CtaBand>

      <Footer />
    </div>
  );
}
