"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import GoogleReviews from "@/components/GoogleReviews";
import TrustBadges from "@/components/TrustBadges";

const IMGS = {
  hero: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
  about: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
};

// Testimonials array kept for potential future use
const _testimonials = [
  { name: "", location: "", text: "", stars: 5 },
];

const faqs = [
  {
    q: "What is a contactless spray tan booth?",
    a: "We use state of the art spray tan booths that provide a custom spray tanning experience in your own private room. Once you've stepped into the booth, it will sense your height and guide you into 4 different positions with 3 spray nozzles for full-body coverage. The open booth is comfortably heated — even in winter you'll stay warm. Our booths self-clean between sessions.",
  },
  {
    q: "How long do I leave my tan on before showering?",
    a: "We recommend leaving your tan on for 6–8 hours. For a darker result you can sleep in it. We also offer a 2-hour rapid clear solution that develops into a deep sunkissed glow and needs to be washed off after 2–3 hours max.",
  },
  {
    q: "How long does a spray tan last?",
    a: "Most clients find their tan lasts 5–7 days with proper aftercare. Moisturising daily and avoiding long hot showers will help extend your glow.",
  },
  {
    q: "Is it really completely private?",
    a: "Yes, 100%. You enter a private room, lock the door, and the entire process is self-guided. No staff, no other clients — just you and the booth.",
  },
  {
    q: "What if I've never had a spray tan before?",
    a: "That's exactly what we're designed for. The booth gives you clear voice and screen prompts at every step. Most first-timers say it was way easier than they expected.",
  },
];

const locations = [
  { name: "349B Kingsway, Caringbah" },
  { name: "Shop 6/207 Edensor Rd, Edensor Park" },
  { name: "6/2 Garling Rd, Kings Park" },
  { name: "1/73-77 Anderson Rd, Smeaton Grange" },
  { name: "8 Oxford St, Woollahra" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">

      {/* LOCAL BUSINESS SCHEMA — all locations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautyBusiness",
            name: "Tanned Co.",
            url: "https://www.tannedco.com.au",
            telephone: "+611300826633",
            description:
              "Sydney's first automated spray tanning studio — private VersaSpa booths, streak-free results, open 7 days.",
            image:
              "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "200",
              bestRating: "5",
            },
            location: [
              { "@type": "Place", name: "Caringbah", address: "349B Kingsway, Caringbah NSW 2229" },
              { "@type": "Place", name: "Edensor Park", address: "Shop 6/207 Edensor Rd, Edensor Park NSW 2176" },
              { "@type": "Place", name: "Kings Park", address: "6/2 Garling Rd, Kings Park NSW 2148" },
              { "@type": "Place", name: "Smeaton Grange", address: "1/73-77 Anderson Rd, Smeaton Grange NSW 2567" },
              { "@type": "Place", name: "Woollahra", address: "8 Oxford St, Woollahra NSW 2025" },
            ],
          }),
        }}
      />

      {/* ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-60 bg-[#a46746] text-white text-sm py-2.5 px-4 flex items-center justify-center gap-3">
          <span>✨ New location now open in Kings Park, Sydney — <Link href="/contact" className="underline font-semibold hover:text-white/80 transition-colors">find us here</Link></span>
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

      {/* FLOATING BOOK NOW BUTTON — desktop only (mobile uses sticky bar in layout) */}
      <Link
        href="/book-now"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest px-6 py-3.5 rounded-full shadow-2xl transition-colors items-center gap-2"
      >
        <span>☀</span> Book Now
      </Link>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <h1 className="sr-only">Tanned Co. — Sydney&apos;s Automated Spray Tanning Studio</h1>
        <Image
          src={IMGS.hero}
          alt="Tanned Co. studio"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28">
          <Image
            src="/logo_transparent.png"
            alt="Tanned Co."
            width={900}
            height={200}
            className="w-full max-w-3xl brightness-0 invert mb-6"
            style={{ height: "auto" }}
          />
          <p className="text-white/90 text-lg md:text-xl max-w-md mb-8">
            Sydney&apos;s first automated spray tanning studio. Private booths. Perfect results. 7 days a week.
          </p>
          <Link
            href="/book-now"
            className="inline-flex items-center bg-white text-[#1a1a1a] text-sm md:text-base px-8 py-3.5 rounded-full font-semibold hover:bg-[#f5e6cc] transition-colors"
          >
            Book Your Tan →
          </Link>
        </div>
      </section>

      {/* SAVE10 PROMO */}
      {promoVisible && (
        <div className="relative bg-[#fdf0d5] border-b border-[#e8d9c3] py-3.5 px-6 text-center">
          <p className="text-sm text-[#3a2e24]">
            ✨ New to Tanned Co? Get{" "}
            <strong className="text-[#1a1a1a]">10% off your first tan</strong> — use code{" "}
            <span className="font-black tracking-widest text-[#a46746]">SAVE10</span>{" "}
            at checkout.
          </p>
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
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Your Go-To Destination</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Luxury Tanning, Your Way
            </h2>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-8">
              Tanned Co is Sydney&apos;s first automated spray tanning studio — offering a luxurious, private experience with state-of-the-art VersaSpa booths. Open 7 days a week across 5 Sydney locations.
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
              <span className="text-[10px] text-[#9a8a7a]">— world&apos;s leading automated spray tan system</span>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image src={IMGS.about} alt="Tanned Co. result" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* PAIN POINT — No More Tanning Horror Stories */}
      <section className="py-16 md:py-20 bg-white border-y border-[#e8d9c3]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">We Get It</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-5">
            No More Tanning Horror Stories
          </h2>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-8">
            You&apos;ve probably had at least one bad spray tan experience — streaky legs, orange palms, or standing half-dressed in front of a stranger. At Tanned Co, every session is completely private, automated, and designed for a perfectly even result. No more guesswork.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-7 py-3 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            See How It Works →
          </Link>
        </div>
      </section>

      {/* REAL RESULTS — Before/After grid */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Real Results</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">The Transformation</h2>
          <p className="text-center text-[#5a4a3a] mb-14 max-w-md mx-auto">
            See what a Tanned Co session looks like on real skin tones.
          </p>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Pair 1 — real images */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8d9c3]">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/66cba3e8-b0f9-4756-859a-70bf1be4aa45/DSCF2443.jpg"
                    alt="Natural skin before Tanned Co. spray tan"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <span className="bg-white/90 text-[#1a1a1a] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">Before</span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
                    alt="Spray tan result after Tanned Co."
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <span className="bg-[#a46746]/90 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">After</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a46746]">Rapid Venetian · Medium</p>
            </div>

            {/* Pair 2 — placeholder */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] rounded-2xl bg-[#e8d9c3] flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a8a7a] text-center px-2">Before</span>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl bg-[#c4a882] flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white text-center px-2">After</span>
                </div>
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a46746]">Malibu · Dark</p>
              <p className="text-center text-[10px] text-[#9a8a7a] italic">Client photos coming soon</p>
            </div>

            {/* Pair 3 — placeholder */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] rounded-2xl bg-[#e8d9c3] flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a8a7a] text-center px-2">Before</span>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl bg-[#d4b896] flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white text-center px-2">After</span>
                </div>
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a46746]">Monterey · Light</p>
              <p className="text-center text-[10px] text-[#9a8a7a] italic">Client photos coming soon</p>
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
      <section className="py-20 md:py-28 bg-white text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Simple &amp; Fast</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Book Online", desc: "Choose your location, date, and preferred tan shade through our easy online booking or app." },
              { num: "02", title: "Step Into Your Booth", desc: "Enter your private tanning room. The booth senses your height and guides you through 4 positions for full coverage." },
              { num: "03", title: "Walk Out Glowing", desc: "Develop for 6–8 hours, shower, and reveal your beautiful sun kissed glow. In a rush? Try our rapid clear solution — on and off in 2–3 hours." },
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
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Transparent &amp; Simple</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">Our Pricing</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-md mx-auto">No hidden fees. Just beautiful tans at honest prices.</p>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Casual */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Casual Tan</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-black">$35</span>
                <span className="text-[#5a4a3a] mb-1.5">/ session</span>
              </div>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 1x automated spray tan session</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 2 months</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your shade &amp; depth</li>
              </ul>
              <Link href="/book-now" className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm">
                Buy Now
              </Link>
            </div>

            {/* 5 Pack */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-5 right-5 bg-[#a46746] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">5 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$160</span>
              </div>
              <p className="text-white/50 text-sm mb-6">$33 per tan · Save $15</p>
              <ul className="space-y-3 text-white/70 text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 5x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 5 months</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Name-specific booking</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Private booth experience</li>
              </ul>
              <Link href="/book-now" className="block text-center bg-[#a46746] text-white py-3 rounded-full font-semibold hover:bg-[#7d4e33] transition-colors text-sm">
                Buy Now
              </Link>
            </div>

            {/* 10 Pack */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">10 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$300</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">$30 per tan · Save $50</p>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 10x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 10 months</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Name-specific booking</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Best value per session</li>
              </ul>
              <Link href="/book-now" className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm">
                Buy Now
              </Link>
            </div>

          </div>
          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-sm font-semibold tracking-wider uppercase text-[#a46746] border-b-2 border-[#a46746] pb-0.5 hover:text-[#7d4e33] hover:border-[#7d4e33] transition-colors"
            >
              View All Options →
            </Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* FAQ TEASER */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Got Questions?</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-14">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
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
      <section className="py-20 md:py-28 bg-[#fdf6ec] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-12">

            {/* Locations list */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-[#a46746]">Our Locations</h3>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <div key={loc.name} className="flex items-start gap-3 border-b border-[#e8d9c3] pb-3">
                    <span className="text-[#a46746] mt-0.5">📍</span>
                    <p className="text-[#3a2e24]">{loc.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Get in touch */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-[#a46746]">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="mailto:hello@tannedco.com.au" className="flex items-center gap-3 text-[#3a2e24] hover:text-[#1a1a1a] transition-colors">
                    <span>✉️</span> hello@tannedco.com.au
                  </a>
                  <a href="tel:1300826633" className="flex items-center gap-3 text-[#3a2e24] hover:text-[#1a1a1a] transition-colors">
                    <span>📞</span> 1300 826 633
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-7 py-3 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                See All Locations →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
