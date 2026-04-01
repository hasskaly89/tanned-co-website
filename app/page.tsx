"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";

const IMGS = {
  hero: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
  about: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
};

const faqs = [
  {
    q: "What is a contactless spray tan booth?",
    a: "We use state of the art spray tan booths that provide a custom spray tanning experience in your own private room. Once you've stepped into the booth, it will sense your height and guide you into 4 different positions with 3 spray nozzles for full-body coverage. The open booth is comfortably heated — even in winter you'll stay warm. Our booths self-clean between sessions.",
  },
  {
    q: "How long do I leave my tan on before showering?",
    a: "We recommend leaving your tan on for 6–8 hours. For a darker result you can sleep in it. We also offer a 2-hour rapid clear solution that develops into a deep sunkissed glow and needs to be washed off after 2–3 hours max.",
  },
];

const testimonials = [
  {
    name: "Jess M.",
    location: "Caringbah",
    text: "Obsessed with Tanned Co! The booth is so easy to use and the result is always flawless. I've tried so many spray tans and nothing compares — no streaks, no orange, just a gorgeous glow.",
    stars: 5,
  },
  {
    name: "Sophie L.",
    location: "Woollahra",
    text: "I love how quick and private the whole experience is. Book on the app, walk in, walk out glowing. The 5-pack is incredible value — I'm never going back to a regular spray tan salon!",
    stars: 5,
  },
  {
    name: "Tara B.",
    location: "Kings Park",
    text: "I was nervous trying an automated booth for the first time but the instructions inside are so clear. My tan lasted over a week and developed so naturally. Absolutely recommend.",
    stars: 5,
  },
  {
    name: "Rachel K.",
    location: "Edensor Park",
    text: "The rapid clear solution is a game changer — had a wedding the next day and it was perfect. Staff are always so helpful on Instagram too when I have questions.",
    stars: 5,
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
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prevTestimonial = () => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const nextTestimonial = () => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">

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
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image src={IMGS.about} alt="Tanned Co. result" fill className="object-cover" />
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

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">What Our Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-14">Real Glows. Real Reviews.</h2>

          <div className="relative bg-[#fdf6ec] rounded-3xl p-8 md:p-12 shadow-sm border border-[#e8d9c3] text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[testimonialIndex].stars }).map((_, i) => (
                <span key={i} className="text-[#a46746] text-xl">★</span>
              ))}
            </div>
            <p className="text-[#3a2e24] text-lg md:text-xl leading-relaxed italic mb-8 min-h-[96px]">
              &ldquo;{testimonials[testimonialIndex].text}&rdquo;
            </p>
            <p className="font-bold text-[#1a1a1a] uppercase tracking-widest text-sm">{testimonials[testimonialIndex].name}</p>
            <p className="text-[#a46746] text-xs tracking-wider uppercase mt-1">{testimonials[testimonialIndex].location}</p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border-2 border-[#e8d9c3] flex items-center justify-center text-[#a46746] hover:border-[#a46746] transition-colors text-lg font-bold"
                aria-label="Previous review"
              >
                ‹
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIndex ? "bg-[#a46746]" : "bg-[#e8d9c3]"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border-2 border-[#e8d9c3] flex items-center justify-center text-[#a46746] hover:border-[#a46746] transition-colors text-lg font-bold"
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=tanned+co+sydney+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wider uppercase text-[#a46746] border-b-2 border-[#a46746] pb-0.5 hover:text-[#7d4e33] hover:border-[#7d4e33] transition-colors"
            >
              Read More Reviews →
            </a>
          </div>
        </div>
      </section>

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
