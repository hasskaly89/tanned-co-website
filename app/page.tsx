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

const IMGS = {
  hero: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
  about: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
};

const whyPoints = [
  "Completely private: lock the door, it's just you",
  "Heated, self-cleaning booths",
  "Choose your shade and depth in the room",
];

const results = [
  { src: "/before-after-venetian.jpg", alt: "Before and after a Rapid Venetian Medium spray tan", label: "Rapid Venetian · Medium" },
  { src: "/before-after-tan.jpg", alt: "Before and after a Malibu Medium spray tan", label: "Malibu · Medium" },
  { src: "/before-after-monterey-dark.jpg", alt: "Before and after a Monterey Dark spray tan", label: "Monterey · Dark" },
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

      {/* HERO */}
      <section className="relative flex items-end min-h-[640px] h-[100svh] max-h-[920px] bg-espresso pt-[68px]">
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
        {/* pb-28 on mobile keeps the trust row clear of the sticky Book bar */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-28 md:pb-20">
          <p className="eyebrow-light mb-5">Sydney&apos;s first automated spray tan studio</p>
          <h1 className="display-xl text-white max-w-4xl">Your private glow, perfected.</h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-lg mt-6">
            Step into your own heated booth. No staff, no streaks, no awkwardness. Just an even, natural tan in minutes.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link href="/book-now" className="btn btn-light">Book your tan</Link>
            <OfferButton source="home_hero" className="btn btn-outline-light">
              First visit? Get {FIRST_TIMER_OFFER.headline}
            </OfferButton>
          </div>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 mt-9 text-sm font-medium text-on-dark">
            <li>5 Sydney studios</li>
            <li>Open 7 days, 6am to midnight</li>
            <li>4 minutes in the booth</li>
          </ul>
        </div>
      </section>

      {/* WHY TANNED CO */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">Why Tanned Co.</p>
            <h2 className="display-lg mb-6">No more tanning horror stories.</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Streaky legs, orange palms, standing half-dressed in front of a stranger? We&apos;ve all been there.
              Our VersaSpa Pro booths sense your height and guide you through four positions for a flawless,
              even result, every time.
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
              <Link href="/how-it-works" className="btn btn-outline">See how it works</Link>
              <Link href="/about" className="text-link">Our story</Link>
            </div>
          </div>
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/5]">
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
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Real results"
            title="The transformation."
            intro="What a single Tanned Co. session looks like on real skin tones."
          />
          <div className="grid sm:grid-cols-3 gap-5 md:gap-7">
            {results.map((r) => (
              <figure key={r.src}>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                  <Image src={r.src} alt={r.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="eyebrow text-center mt-4">{r.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/book-now" className="btn btn-dark">Get your glow</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="The process" title="Four simple steps." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {steps.map(({ num, title, desc }) => (
              <li key={num} className="border-t border-line pt-7">
                <p className="font-display font-normal text-5xl text-bronze leading-none mb-5">{num}</p>
                <h3 className="text-xl font-semibold mb-2.5">{title}</h3>
                <p className="text-body leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-14">
            <Link href="/how-it-works" className="btn btn-outline">Read the full guide</Link>
            <Link href="/faq" className="text-link">First time? Read the FAQ</Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-28 bg-sand">
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
          <PricingPlans source="home_pricing" />
        </div>
      </section>

      {/* REVIEWS */}
      <GoogleReviews />

      {/* STUDIOS + CLOSING CTA */}
      <section className="bg-espresso text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-24 items-center">
          <div>
            <p className="eyebrow-light mb-4">Five studios. Open 7 days.</p>
            <h2 className="display-xl">Ready when you are.</h2>
            <p className="text-on-dark text-lg leading-relaxed mt-6 max-w-md">
              Book in under a minute. First visit? Get {FIRST_TIMER_OFFER.headline}.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link href="/book-now" className="btn btn-light">Book your tan</Link>
              <OfferButton source="home_closing" className="btn btn-outline-light">
                Claim first-visit offer
              </OfferButton>
            </div>
            <p className="text-on-dark-muted text-sm mt-10">
              Want to own a Tanned Co. studio?{" "}
              <Link href="/franchise" className="underline hover:text-white transition-colors">Franchise opportunities are open</Link>.
            </p>
          </div>
          <ul className="border-t border-white/15">
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
