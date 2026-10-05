"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import GoogleReviews from "@/components/GoogleReviews";
import TrustBadges from "@/components/TrustBadges";
import StudioBookButton from "@/components/StudioBookButton";
import { CASUAL, GLOW_CLUB, TEN_PACK, formatAud } from "@/lib/pricing";
import { LOCATIONS, SCHEMA_OPENING_HOURS, SITE_URL, phoneToE164 } from "@/lib/locations";

const IMGS = {
  hero: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
  about: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
};

// Structured data is generated from lib/locations.ts so hours, phones and
// coordinates cannot drift. No aggregateRating: Google requires review markup
// to match reviews visible on the page.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Tanned Co.",
  url: SITE_URL,
  telephone: "+611300826633",
  email: "hello@tannedco.com.au",
  description:
    "Sydney's first automated spray tanning studio. Private VersaSpa booths, streak-free results, open 7 days.",
  image: IMGS.hero,
  priceRange: "$$",
  openingHoursSpecification: SCHEMA_OPENING_HOURS,
  sameAs: [
    "https://instagram.com/tannedco_",
    "https://www.tiktok.com/@tannedco_",
    "https://www.facebook.com/profile.php?id=100086326464692",
  ],
};

const LOCATION_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: LOCATIONS.map((loc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "BeautySalon",
      "@id": `${SITE_URL}/locations/${loc.slug}`,
      name: loc.fullName,
      url: `${SITE_URL}/locations/${loc.slug}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.suburb,
        addressRegion: loc.state,
        postalCode: loc.postcode,
        addressCountry: "AU",
      },
      geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
      telephone: phoneToE164(loc.phone),
      email: "hello@tannedco.com.au",
      priceRange: "$$",
      openingHoursSpecification: SCHEMA_OPENING_HOURS,
    },
  })),
};

const faqs = [
  {
    q: "What is a contactless spray tan booth?",
    a: "We use state of the art spray tan booths that provide a custom spray tanning experience in your own private room. Once you've stepped into the booth, it will sense your height and guide you into 4 different positions with 3 spray nozzles for full-body coverage. The open booth is comfortably heated even in winter you'll stay warm. Our booths self-clean between sessions.",
  },
  {
    q: "How long do I leave my tan on before showering?",
    a: "We recommend leaving your tan on for 6–8 hours. For a darker result you can sleep in it. We also offer a 2-hour rapid clear solution that develops into a deep sunkissed glow and needs to be washed off after 2–3 hours max.",
  },
  {
    q: "How long does a spray tan last?",
    a: "A spray tan lasts up to 7 days with proper aftercare. Moisturising daily and avoiding long hot showers will help extend your glow.",
  },
  {
    q: "Is it really completely private?",
    a: "Yes, 100%. You enter a private room, lock the door, and the entire process is self-guided. No staff, no other clients just you and the booth.",
  },
  {
    q: "What if I've never had a spray tan before?",
    a: "That's exactly what we're designed for. The booth gives you clear voice and screen prompts at every step. Most first-timers say it was way easier than they expected.",
  },
];


export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCATION_LIST_SCHEMA) }}
      />

      {/* ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <div className="hidden md:flex fixed top-0 left-0 right-0 z-60 bg-[#a46746] text-white text-sm py-2.5 px-4 items-center justify-center gap-3">
          <span>✨ Own a Tanned Co. studio. Franchise opportunities now open. <Link href="/franchise" className="underline font-semibold hover:text-white/80 transition-colors">Enquire here</Link></span>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 text-white/70 hover:text-white text-lg leading-none transition-colors"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}

      <Navbar activePath="/" withBanner={bannerVisible} />


      {/* HERO */}
      <section className="relative h-[82vh] md:h-screen min-h-[500px] flex items-end">
        <h1 className="sr-only">Tanned Co. Sydney&apos;s Automated Spray Tanning Studio</h1>
        <Image
          src={IMGS.hero}
          alt="Tanned Co. studio"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 0%" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-6 md:pb-28">
          <Image
            src="/logo_transparent.png"
            alt="Tanned Co."
            width={900}
            height={200}
            className="w-full max-w-[260px] md:max-w-3xl brightness-0 invert mb-4 md:mb-6"
            style={{ height: "auto" }}
          />
          <p className="text-white/90 text-lg md:text-xl max-w-md mb-8">
            Sydney&apos;s first automated spray tanning studio. Private booths. Perfect results. 7 days a week.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/book-now"
              className="inline-flex items-center bg-white text-[#1a1a1a] text-sm md:text-base px-8 py-3.5 rounded-full font-semibold hover:bg-[#f5e6cc] transition-colors"
            >
              Book Your Tan →
            </Link>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE OFFER BANNER */}
      {promoVisible && (
        <div className="relative bg-[#fdf0d5] border-b border-[#e8d9c3] py-3.5 px-12 text-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("tannedco:open-offer"))}
            className="text-sm text-[#3a2e24] hover:text-[#1a1a1a] transition-colors cursor-pointer"
          >
            ✨ First Timer?{" "}
            <strong className="text-[#a46746] underline underline-offset-2">Get 10% off your first tan</strong>
            {" "}· tap to claim
          </button>
          <button
            onClick={() => setPromoVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a8a7a] hover:text-[#1a1a1a] transition-colors text-lg leading-none"
            aria-label="Dismiss offer"
          >
            ✕
          </button>
        </div>
      )}

      {/* ABOUT TEASER */}
      <section className="py-12 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Your Go-To Destination</p>
            <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight mb-6">
              Luxury Tanning, Your Way
            </h2>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-8">
              Tanned Co is Sydney&apos;s first automated spray tanning studio offering a luxurious, private experience with state-of-the-art VersaSpa booths. Open 7 days a week across 5 Sydney locations.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-[#1a1a1a] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#3a2e24] transition-colors"
            >
              Learn More →
            </Link>
            <div className="flex items-center gap-2 mt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8a7a]">Powered by</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a46746] border border-[#a46746]/40 rounded-full px-3 py-1 bg-[#a46746]/5">
                VersaSpa Pro
              </span>
              <span className="text-[10px] text-[#9a8a7a]">world&apos;s leading automated spray tan system</span>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image src={IMGS.about} alt="Tanned Co. result" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* PAIN POINT No More Tanning Horror Stories */}
      <section className="py-16 md:py-20 bg-white border-y border-[#e8d9c3]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">We Get It</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-5">
            No More Tanning Horror Stories
          </h2>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-8">
            You&apos;ve probably had at least one bad spray tan experience streaky legs, orange palms, or standing half-dressed in front of a stranger. At Tanned Co, every session is completely private, automated, and designed for a perfectly even result. No more guesswork.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-7 py-3 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            See How It Works →
          </Link>
        </div>
      </section>

      {/* REAL RESULTS Before/After grid */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Real Results</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">The Transformation</h2>
          <p className="text-center text-[#5a4a3a] mb-14 max-w-md mx-auto">
            See what a Tanned Co session looks like on real skin tones.
          </p>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Pair 1 Rapid Venetian Medium */}
            <div className="space-y-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/before-after-venetian.jpg"
                  alt="Before and after Rapid Venetian Medium spray tan"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a46746]">Rapid Venetian · Medium</p>
            </div>

            {/* Pair 2 Malibu Medium */}
            <div className="space-y-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/before-after-tan.jpg"
                  alt="Before and after Malibu Medium spray tan"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a46746]">Malibu · Medium</p>
            </div>

            {/* Pair 3 Monterey Dark */}
            <div className="space-y-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/before-after-monterey-dark.jpg"
                  alt="Before and after Monterey Dark spray tan"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a46746]">Monterey · Dark</p>
            </div>

          </div>
          <div className="text-center mt-12">
            <Link
              href="/book-now"
              className="inline-flex items-center bg-[#1a1a1a] hover:bg-[#3a2e24] text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Get Your Glow →
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <InstagramFeed />

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-28 bg-white text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">The Process</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-16">4 Simple Steps</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Download & Book", desc: "Choose your location, date and time through our easy online booking system or via our app." },
              { num: "02", title: "Check In & Prep", desc: "5 minutes before your booking, tap Check In in the app at the Bluetooth reader to open the studio. At your start time, check in again to open your room. Remove jewellery and makeup, then apply your hair net, sticky feet and barrier cream." },
              { num: "03", title: "Select & Spray", desc: "Choose your shade and depth from the in-room tan menu, enter your code, and step into the booth. Voice prompts guide you through every position." },
              { num: "04", title: "Walk Out Glowing", desc: "Rinse after 6–8 hours for Malibu and Monterey, or 2–3 hours for Rapid Venetian. Your full colour develops over 24 hours." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="border border-[#e8d9c3] rounded-3xl p-8 hover:border-[#a46746] transition-colors">
                <p className="text-4xl font-black text-[#a46746] mb-4">{num}</p>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-[#5a4a3a] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-7 py-3 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Full Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* PRICING PREVIEW */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Transparent &amp; Simple</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Our Pricing</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-md mx-auto">Simple, upfront prices. Full terms are on our <Link href="/pricing" className="underline">pricing page</Link>.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Casual */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Casual Tan</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">{formatAud(CASUAL.price)}</span>
                <span className="text-[#5a4a3a] mb-1.5">/ session</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">Pay as you go, no commitment</p>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 1x automated spray tan session</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Pay when you book your time</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your shade &amp; depth</li>
              </ul>
              <StudioBookButton
                plan="casual"
                source="home_pricing"
                label="Book Casual Tan →"
                buttonClassName="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
              />
            </div>

            {/* 10 Pack */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">10 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">{formatAud(TEN_PACK.price)}</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">{formatAud(TEN_PACK.perTan)} per tan · Save {formatAud(TEN_PACK.saving)}</p>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> {TEN_PACK.sessions}x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for {TEN_PACK.validity}</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Name-specific booking</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Best for regular tanners</li>
              </ul>
              <StudioBookButton
                plan="tenPack"
                source="home_pricing"
                label="Buy 10 Pack →"
                buttonClassName="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
              />
            </div>

            {/* Glow Club */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-sm flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#e0a878] mb-3">Glow Club Membership</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">{formatAud(GLOW_CLUB.monthly)}</span>
                <span className="text-white/60 mb-1.5">/ month</span>
              </div>
              <p className="text-white/60 text-sm mb-6">{GLOW_CLUB.tansPerMonth} tans a month · under $30 a tan</p>
              <ul className="space-y-3 text-white/80 text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#e0a878] mt-0.5">✓</span> {GLOW_CLUB.tansPerMonth} automated spray tans every month</li>
                <li className="flex items-start gap-2"><span className="text-[#e0a878] mt-0.5">✓</span> Best value for regular tanners</li>
                <li className="flex items-start gap-2"><span className="text-[#e0a878] mt-0.5">✓</span> {GLOW_CLUB.minimumMonths}-month minimum ({formatAud(GLOW_CLUB.minimumTotal)} in total), then month to month</li>
              </ul>
              <Link
                href="/glow-club"
                onClick={() => trackEvent("glow_club_click", { source: "home_pricing" })}
                className="block text-center bg-white text-[#1a1a1a] py-3 rounded-full font-semibold hover:bg-[#f5e6cc] transition-colors text-sm"
              >
                See Glow Club →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* FAQ TEASER */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Got Questions?</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-14">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#1a1a1a] hover:bg-[#fdf6ec] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className={`text-[#a46746] text-xl font-black flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[#5a4a3a] leading-relaxed text-sm border-t border-[#e8d9c3] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="text-sm font-semibold tracking-wider uppercase text-[#a46746] border-b-2 border-[#a46746] pb-0.5 hover:text-[#7d4e33] hover:border-[#7d4e33] transition-colors">
              See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="py-12 md:py-28 bg-[#fdf6ec] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Find Us</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-16">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-12">

            {/* Locations list */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-[#a46746]">Our Locations</h3>
              <div className="space-y-3">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="flex items-center gap-3 border-b border-[#e8d9c3] pb-3 group"
                  >
                    <span className="text-[#a46746]">📍</span>
                    <span className="text-[#3a2e24] font-medium group-hover:text-[#a46746] transition-colors">{loc.shortName}</span>
                    <span className="ml-auto text-xs text-[#a46746] opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Get in touch */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-[#a46746]">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="mailto:hello@tannedco.com.au" onClick={() => trackEvent("email_click", { source: "home_contact" })} className="flex items-center gap-3 text-[#3a2e24] hover:text-[#1a1a1a] transition-colors">
                    <span>✉️</span> hello@tannedco.com.au
                  </a>
                  <a href="tel:1300826633" onClick={() => trackEvent("phone_click", { source: "home_contact" })} className="flex items-center gap-3 text-[#3a2e24] hover:text-[#1a1a1a] transition-colors">
                    <span>📞</span> 1300 826 633
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/locations"
                  className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-7 py-3 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  See All Locations →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-[#1a1a1a] text-[#1a1a1a] px-7 py-3 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  Contact Us →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
