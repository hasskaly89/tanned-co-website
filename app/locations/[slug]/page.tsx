import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ClaimForm from "@/components/ClaimForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ExternalBookButton from "@/components/ExternalBookButton";
import GoogleReviewCards from "@/components/GoogleReviewCards";
import RepuReviews, { REPU_HOME_WIDGET_KEY } from "@/components/RepuReviews";
import { Stars, PinIcon, ClockIcon, CarIcon, PhoneIcon, LockIcon, SunIcon, SparkleIcon, CheckIcon } from "@/components/Icons";
import { LOCATIONS, SITE_URL, bookingUrlFor } from "@/lib/locations";
import { getPlaceReviews } from "@/lib/google-reviews";
import { CASUAL, GLOW_CLUB, TEN_PACK, formatAud } from "@/lib/pricing";
import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { APP_UNLOCK_TEXT } from "@/lib/site";
import SupportBlock from "@/components/SupportBlock";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};

  const title = `Spray Tan ${loc.shortName}, Sydney`;
  const description = `Automated spray tanning in ${loc.shortName}, Sydney. Private VersaSpa booths, 3 signature shades, open 7 days. Sessions from ${formatAud(CASUAL.price)}. ${loc.fullAddress}.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/locations/${loc.slug}` },
    openGraph: {
      title: `${title} | Tanned Co.`,
      description,
      url: `${SITE_URL}/locations/${loc.slug}`,
      images: [{ url: loc.heroImage, width: 1200, height: 800, alt: `Tanned Co. ${loc.shortName}` }],
    },
  };
}

const steps = [
  { num: "01", title: "Book online", text: `Pick your time in seconds, online or in the app. ${APP_UNLOCK_TEXT}` },
  { num: "02", title: "Check in with the app", text: "5 minutes before your booking, tap Check In in the app at the Bluetooth reader to open the studio. At your start time, check in again to open your private room." },
  { num: "03", title: "Leave glowing", text: "Rinse your hands after 30 minutes. Rinse off after 6 to 8 hours (2 to 3 for Rapid Venetian). Full colour develops over 24 hours." },
];

const studioFeatures = [
  { icon: <LockIcon className="w-6 h-6" />, title: "Completely private", text: "Your own locked booth. No staff, no awkward moments. Just you and your tan." },
  { icon: <SunIcon className="w-6 h-6" />, title: "3 signature shades", text: "Malibu, Monterey or Rapid Venetian. Three depth levels each, so you can choose the glow that suits you." },
  { icon: <SparkleIcon className="w-6 h-6" />, title: "Rapid results", text: "4 minutes in the booth. See colour in 2 to 3 hours and full colour within 24 hours. Lasts up to 7 days with proper care." },
  { icon: <PhoneIcon className="w-6 h-6" />, title: "Book in seconds", text: "Download the Tanned Co. app or book online. No phone calls, no waiting. Sorted in under a minute." },
];

const reviewsButton = "btn btn-outline";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const urls = { casual: bookingUrlFor(loc, "casual"), tenPack: bookingUrlFor(loc, "tenPack") };
  // Live Google rating and latest reviews (refreshed daily). Without a Google API key
  // the page shows no rating or review count rather than made-up numbers.
  const google = await getPlaceReviews(loc);
  const googleUrl = google?.mapsUrl ?? loc.mapsUrl;
  // Reviews: the studio's Repu widget when it has one, otherwise live Google reviews.
  const showGoogleCards = !loc.repuWidgetKey && !!google?.reviews.length;

  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <LocalBusinessSchema slug={slug} />
      <Navbar activePath={`/locations/${slug}`} />

      <PageHero
        tall
        eyebrow={`Sydney. ${loc.shortName}.`}
        title={<>Spray tan<br />{loc.shortName}.</>}
        intro={`Automated spray tanning in ${loc.shortName}. Private booths, even results, open 7 days.`}
        image={loc.heroImage}
        imageAlt={`Spray tan studio ${loc.shortName} Sydney`}
      >
        <ExternalBookButton
          href={urls.casual}
          source={`location_hero_${loc.slug}`}
          extraParams={{ plan: "casual", location_slug: loc.slug }}
          className="btn btn-light"
        >
          Book a tan, {formatAud(CASUAL.price)}
        </ExternalBookButton>
        <a href="#claim" className="btn btn-outline-light">First timer? Get {FIRST_TIMER_OFFER.headline}</a>
      </PageHero>

      {/* PROOF BAR */}
      <div className="bg-espresso-deep text-on-dark">
        <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-9 gap-y-2 text-sm">
          {google && (
            <li>
              <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <Stars count={Math.round(google.rating)} className="text-bronze-light" />
                <span className="font-semibold text-white">{google.rating.toFixed(1)}</span>
                <span>({google.total} Google reviews)</span>
              </a>
            </li>
          )}
          {["Open 7 days, 6am to midnight", "No staff, fully automated", "4 minutes in the booth"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-bronze-light" /> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* STUDIO DETAILS + BOOKING */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Find us" title={`Tanned Co. ${loc.shortName}.`} />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-[28px] border border-line overflow-hidden">
              <div style={{ filter: "grayscale(100%)" }}>
                <iframe
                  title={`Map of Tanned Co. ${loc.shortName}`}
                  src={loc.mapEmbed ?? `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <dl className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <PinIcon className="w-5 h-5 mt-0.5 text-bronze shrink-0" />
                  <div>
                    <dt className="eyebrow mb-1">Address</dt>
                    <dd className="text-body">
                      {loc.fullAddress}
                      <br />
                      <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                        Get directions
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClockIcon className="w-5 h-5 mt-0.5 text-bronze shrink-0" />
                  <div>
                    <dt className="eyebrow mb-1">Hours</dt>
                    <dd className="text-body">{loc.hours}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CarIcon className="w-5 h-5 mt-0.5 text-bronze shrink-0" />
                  <div>
                    <dt className="eyebrow mb-1">Parking</dt>
                    <dd className="text-body">{loc.parkingNote}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-5 h-5 mt-0.5 text-bronze shrink-0" />
                  <div>
                    <dt className="eyebrow mb-1">Phone</dt>
                    <dd>
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-body hover:text-ink transition-colors">
                        {loc.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="display-md mb-3">Ready to book?</h3>
              <p className="text-body leading-relaxed mb-8">
                Book your session at {loc.shortName} directly below. {APP_UNLOCK_TEXT}
              </p>
              <div className="space-y-3 mb-8">
                <ExternalBookButton href={urls.casual} source={`location_booking_${slug}`} extraParams={{ plan: "casual", location_slug: slug }} className="btn btn-dark w-full !py-4">
                  Book a casual tan, {formatAud(CASUAL.price)}
                </ExternalBookButton>
                <ExternalBookButton href={urls.tenPack} source={`location_booking_${slug}`} extraParams={{ plan: "10_pack", location_slug: slug }} className="btn btn-outline w-full !py-4">
                  Buy a 10 pack, {formatAud(TEN_PACK.price)} (save {formatAud(TEN_PACK.saving)})
                </ExternalBookButton>
                <Link href="/glow-club" className="btn btn-outline w-full !py-4">
                  Glow Club, {formatAud(GLOW_CLUB.monthly)} a month
                </Link>
              </div>
              <p className="text-sm text-body mb-8">
                Not sure which suits you? <Link href="/pricing" className="text-link">Compare the options</Link>
              </p>
              <div className="bg-sand rounded-3xl border border-line p-6">
                <p className="eyebrow mb-2">Nearby areas served</p>
                <p className="text-body">{loc.nearbySuburbs.join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST-TIMER OFFER */}
      <ClaimForm location={loc.shortName} />

      {/* REVIEWS */}
      {loc.repuWidgetKey && (
        <section className="py-20 md:py-28 bg-sand">
          <div className="max-w-6xl mx-auto px-6">
            <RepuReviews
              widgetKey={loc.showAllStudioReviews ? REPU_HOME_WIDGET_KEY : loc.repuWidgetKey}
              heading={
                <SectionHeading
                  eyebrow="Google reviews"
                  title={loc.showAllStudioReviews ? "What our clients say." : `What ${loc.shortName} clients say.`}
                  intro={loc.showAllStudioReviews ? "Reviews from across all Tanned Co. studios in Sydney." : undefined}
                />
              }
            />
            <div className="text-center mt-10">
              <a href={googleUrl} target="_blank" rel="noopener noreferrer" className={reviewsButton}>
                Read all {loc.shortName} reviews on Google
              </a>
            </div>
          </div>
        </section>
      )}

      {showGoogleCards && google && (
        <section className="py-20 md:py-28 bg-sand">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="Google reviews"
              title="Real results, real people."
              intro={`${google.rating.toFixed(1)} out of 5 from ${google.total} Google reviews for Tanned Co. ${loc.shortName}.`}
            />
            <GoogleReviewCards reviews={google.reviews} />
            <div className="text-center mt-10">
              <a href={googleUrl} target="_blank" rel="noopener noreferrer" className={reviewsButton}>
                Read all {google.total} reviews on Google
              </a>
            </div>
          </div>
        </section>
      )}

      {!loc.repuWidgetKey && !showGoogleCards && (
        <div className="py-12 bg-sand text-center">
          <a href={googleUrl} target="_blank" rel="noopener noreferrer" className={reviewsButton}>
            Read our {loc.shortName} reviews on Google
          </a>
        </div>
      )}

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Super simple" title="How it works." />
          <ol className="grid md:grid-cols-3 gap-x-10 gap-y-10">
            {steps.map(({ num, title, text }) => (
              <li key={num} className="border-t border-line pt-7">
                <p className="font-display font-normal text-5xl text-bronze leading-none mb-5">{num}</p>
                <h3 className="text-xl font-semibold mb-2.5">{title}</h3>
                <p className="text-body leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
          <p className="text-center mt-12">
            <Link href="/how-it-works" className="text-link">Read the full guide</Link>
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Why Tanned Co." title="What makes us different." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl border border-line p-7">
                <div className="text-bronze mb-5">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-body leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <SupportBlock className="bg-cream" />

      <Footer />
    </div>
  );
}
