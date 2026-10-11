import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import LocationCardButtons from "@/components/LocationCardButtons";
import StudioBookButton from "@/components/StudioBookButton";
import { CASUAL, formatAud, PRICE_TEXT } from "@/lib/pricing";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { PinIcon, ClockIcon } from "@/components/Icons";
import { LOCATIONS, SITE_URL } from "@/lib/locations";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, studioListSchema } from "@/lib/schema";

// Existing studio photography (same hero image the site already uses), so the page has its own share image.
const LOCATIONS_OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg";

export const metadata: Metadata = {
  title: "Our Locations",
  description: `5 Tanned Co. spray tan studios across Sydney. Caringbah, Edensor Park, Kings Park, Smeaton Grange and Woollahra. Open 7 days. Casual tans ${formatAud(CASUAL.price)}.`,
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "Our Locations | Tanned Co.",
    description: "5 Sydney spray tan studios open 7 days a week. Find your nearest Tanned Co. studio.",
    url: `${SITE_URL}/locations`,
    images: [{ url: LOCATIONS_OG_IMAGE, width: 1200, height: 800, alt: "Tanned Co. spray tan studios across Sydney" }],
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={[breadcrumbSchema([{ name: "Locations", path: "/locations" }]), studioListSchema()]} />
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

      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Find us"
            title="5 Sydney studios."
            intro={
              <>
                Private booths, even results, open 7 days.{" "}
                <Link href="/pricing" className="text-link">Casual tans {formatAud(CASUAL.price)}</Link>.
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
        text="Book online in under a minute. Your colour keeps developing over the next 24 hours."
      >
        <StudioBookButton
          plan="casual"
          source="locations_page_cta"
          label={PRICE_TEXT.bookTan}
          buttonClassName="btn btn-light"
          tone="dark"
        />
        <Link href="/faq" className="btn btn-outline-light">Read the prep guide</Link>
      </CtaBand>

      <Footer />
    </div>
  );
}
