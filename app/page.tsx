import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import HomeSchema from "@/components/HomeSchema";
import PricingPlans from "@/components/PricingPlans";
import SectionHeading from "@/components/SectionHeading";
import OfferButton from "@/components/OfferButton";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { LOCATIONS } from "@/lib/locations";
import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { CASUAL, formatAud } from "@/lib/pricing";
import StudioStrip from "@/components/StudioStrip";
import BoothVideo from "@/components/BoothVideo";
import SupportBlock from "@/components/SupportBlock";
import LatestGoogleReview from "@/components/LatestGoogleReview";

const IMGS = {
  hero: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
  about: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
};

const whyPoints = [
  "Private room: lock the door, it's just you",
  "Heated, self-cleaning booths",
  "Choose your shade and depth in the room",
];

// Each photo is a side-by-side pair: before on the left, after on the right.
const results = [
  { src: "/before-after-venetian.jpg", alt: "Before (left) and after (right) a Rapid Venetian Medium spray tan", shade: "Rapid Venetian", depth: "Medium" },
  { src: "/before-after-tan.jpg", alt: "Before (left) and after (right) a Malibu Medium spray tan", shade: "Malibu", depth: "Medium" },
  { src: "/before-after-monterey-dark.jpg", alt: "Before (left) and after (right) a Monterey Dark spray tan", shade: "Monterey", depth: "Dark" },
];

const steps = [
  { num: "01", title: "Book", desc: "Choose your studio, date and time online or in the app." },
  { num: "02", title: "Check in", desc: "5 minutes before your booking, tap Check In in the app at the Bluetooth reader to open the studio. At your start time, check in again to open your room." },
  { num: "03", title: "Prep and spray", desc: "Pop on the hair net, sticky feet and barrier cream, pick your shade on the in-room menu, and step in. Voice prompts guide every position." },
  { num: "04", title: "Glow", desc: "Rinse after 6 to 8 hours for Malibu and Monterey, or 2 to 3 hours for Rapid Venetian. Full colour develops over 24 hours." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <HomeSchema />
      <Navbar activePath="/" />

      {/* HERO: one headline, one line, one button, one quiet link */}
      <section className="relative flex items-end h-[76svh] min-h-[520px] max-h-[720px] md:h-[100svh] md:min-h-[640px] md:max-h-[920px] bg-espresso pt-[68px]">
        <Image
          src={IMGS.hero}
          alt="Five women with even, natural spray tans at a Tanned Co. studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 0%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120c]/85 via-[#1a120c]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a120c]/75 via-[#1a120c]/30 to-transparent" />
        {/* pb-24 on mobile keeps the button clear of the sticky Book bar */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 md:pb-24">
          <h1 className="display-xl text-white max-w-4xl">Private, automated spray tanning.</h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl mt-5">
            Your own heated booth. About 4 minutes, open 7 days.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 mt-8">
            {/* Goes to the studio picker, which books the chosen studio's casual tan */}
            <Link href="/book-now" className="btn btn-light">Book a tan, {formatAud(CASUAL.price)}</Link>
            <OfferButton
              source="home_hero"
              className="text-sm font-medium text-white/90 underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white transition-colors cursor-pointer"
            >
              First visit? {FIRST_TIMER_OFFER.headline}
            </OfferButton>
          </div>
        </div>
      </section>

      {/* STUDIOS, straight under the hero */}
      <StudioStrip />

      {/* BOOTH WALKTHROUGH: real studio photo with "coming soon" until a video file is set in lib/site.ts */}
      <BoothVideo />

      {/* WHY TANNED CO */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">Sydney&apos;s first automated spray tan studio</p>
            <h2 className="display-lg mb-6">A calm, private tan in minutes.</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Book a time, let yourself in and tan in your own heated VersaSpa Pro booth. The booth senses your
              height and voice prompts guide you through four positions for an even, natural-looking result.
            </p>
            <ul className="space-y-3.5 mb-9">
              {whyPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 font-medium">
                  <CheckIcon className="w-4 h-4 mt-1.5 text-bronze shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/how-it-works" className="btn btn-outline max-md:hidden">See how it works</Link>
              <Link href="/about" className="text-link">Our story</Link>
            </div>
          </div>
          {/* Photo hidden on phones to cut scrolling; it is also on the About page */}
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] max-md:hidden">
            <Image
              src={IMGS.about}
              alt="A golden, even Tanned Co. spray tan result"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* REAL RESULTS */}
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Real results"
            title="The transformation."
            intro="What a single Tanned Co. session looks like on real skin. Results vary with skin tone, prep and aftercare."
          />
          <div className="grid md:grid-cols-3 gap-5 md:gap-7 swipe-row" style={{ ["--swipe-w" as string]: "78%" }}>
            {results.map((r) => (
              <figure key={r.src}>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                  <Image src={r.src} alt={r.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                  <span aria-hidden="true" className="absolute top-3 left-3 rounded-full bg-espresso/80 text-white text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5">Before</span>
                  <span aria-hidden="true" className="absolute top-3 right-3 rounded-full bg-espresso/80 text-white text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5">After</span>
                </div>
                <figcaption className="text-center mt-4">
                  <span className="eyebrow block">Shade: {r.shade} <span className="ml-2">Depth: {r.depth}</span></span>
                  <span className="block text-xs text-muted mt-1.5">One session, before and after</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xs text-muted md:hidden">Swipe for more results</p>
            <Link href="/book-now" className="btn btn-dark max-md:hidden">Get your glow</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="The process" title="Four simple steps." />
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-14 items-start">
          <div>
          {/* Phones: the four steps as an accordion */}
          <ol className="md:hidden border-t border-line mobile-acc">
            {steps.map(({ num, title, desc }) => (
              <li key={num} className="border-b border-line">
                <details className="group">
                  <summary className="flex items-center gap-4 py-4 cursor-pointer list-none">
                    <span className="font-display text-2xl text-bronze w-9 shrink-0">{num}</span>
                    <span className="text-lg font-semibold flex-1">{title}</span>
                    <span aria-hidden="true" className="text-2xl leading-none text-bronze transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-body leading-relaxed pb-5 pl-[3.25rem]">{desc}</p>
                </details>
              </li>
            ))}
          </ol>
          <ol className="hidden md:grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {steps.map(({ num, title, desc }) => (
              <li key={num} className="border-t border-line pt-7">
                <p className="font-display font-normal text-5xl text-bronze leading-none mb-5">{num}</p>
                <h3 className="text-xl font-semibold mb-2.5">{title}</h3>
                <p className="text-body leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-8 md:mt-12">
            <Link href="/how-it-works" className="btn btn-outline">Read the full guide</Link>
            <Link href="/faq" className="text-link">First time? Read the FAQ</Link>
          </div>
          </div>
          {/* Genuine review from the live Google feed; renders nothing if the feed is unavailable */}
          {/* Hidden on phones: the reviews carousel further down covers it */}
          <LatestGoogleReview className="max-md:hidden" repuFallbackKey={LOCATIONS[0].repuWidgetKey} />
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <SupportBlock />

      {/* PRICING */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Simple pricing"
            title="Choose your glow."
            intro={
              <>
                Upfront prices. Every session includes a private booth and your choice of shade. Full terms are on the{" "}
                <Link href="/pricing" className="text-link">pricing page</Link>.
              </>
            }
          />
          <PricingPlans source="home_pricing" mobileSwipe />
        </div>
      </section>

      {/* REVIEWS */}
      <GoogleReviews className="bg-sand" />

      {/* STUDIOS + CLOSING CTA */}
      <section className="bg-espresso text-white py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-24 items-center">
          <div>
            <p className="eyebrow-light mb-4">Five studios. Open 7 days.</p>
            <h2 className="display-xl">Ready when you are.</h2>
            <p className="text-on-dark text-lg leading-relaxed mt-6 max-w-md">
              Book in under a minute. First visit? Get {FIRST_TIMER_OFFER.headline}.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              {/* Phones already have the sticky Book bar */}
              <Link href="/book-now" className="btn btn-light max-md:hidden">Book your tan</Link>
              <OfferButton source="home_closing" className="btn btn-outline-light">
                Claim first-visit offer
              </OfferButton>
            </div>
            <p className="text-on-dark-muted text-sm mt-10">
              Want to own a Tanned Co. studio?{" "}
              <Link href="/franchise" className="underline hover:text-white transition-colors">Franchise opportunities are open</Link>.
            </p>
          </div>
          {/* Hidden on phones: the same 5 studios are in the row under the hero and in the footer */}
          <ul className="border-t border-white/15 max-md:hidden">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex items-center justify-between gap-4 py-5 border-b border-white/15"
                >
                  <span>
                    <span className="block font-display font-medium text-[1.7rem] leading-tight group-hover:text-bronze-light transition-colors">
                      {loc.shortName}
                    </span>
                    <span className="block text-on-dark-muted text-sm mt-1">{loc.address}</span>
                  </span>
                  <ArrowIcon className="w-5 h-5 text-bronze-light shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
