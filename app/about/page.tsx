import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Tanned Co. — Sydney's first fully automated spray tanning studio. VersaSpa booths, private rooms, 5 locations and open 7 days a week.",
};

const IMGS = {
  story: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
  booth: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg",
};

const stats = [
  { value: "5", label: "Locations" },
  { value: "7", label: "Days a Week" },
  { value: "4", label: "Colour Shades" },
  { value: "1000+", label: "Happy Clients" },
];

const features = [
  { icon: "☀️", title: "Automated Booths", desc: "State of the art VersaSpa booths that guide you through every step" },
  { icon: "🔒", title: "100% Private", desc: "Your own private tanning room, no staff involvement" },
  { icon: "🌿", title: "Vegan & Natural", desc: "Non-toxic, cruelty-free, paraben-free tanning solutions" },
  { icon: "⏰", title: "Open 7 Days", desc: "Book any time that suits you, 7 days a week" },
];

const boothPoints = [
  "Open-air design for comfort",
  "Voice & visual guided instructions",
  "Heated spa-like environment",
  "Height sensors for even coverage",
  "Self-cleaning between every session",
  "3 spray nozzles for full body coverage",
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/about" />

      {/* PAGE HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg"
          alt="Tanned Co. studio"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Who We Are</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Our Story</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8">
            Sydney&apos;s first automated spray tanning studio — where luxury meets convenience.
          </p>
          <Link
            href="/book-now"
            className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
          >
            Book Your Tan →
          </Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">How It Started</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Built for You
            </h2>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-5">
              Tanned Co was founded with one goal: to give everyone access to a premium, private spray tan experience without the awkwardness of traditional salons. We&apos;re proud to be Sydney&apos;s first fully automated spray tanning studio.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-5">
              Our state-of-the-art VersaSpa booths deliver flawless, streak-free results every time — guided entirely by voice and visual instructions. No staff, no waiting, no awkward moments.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed">
              With 5 convenient Sydney locations and doors open 7 days a week, getting your glow has never been easier.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image src={IMGS.story} alt="Tanned Co. result" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="py-14 bg-[#fdf0d5] border-y border-[#e8d9c3]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#f5e6cc] rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl font-black text-[#a46746] mb-1">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-[#5a4a3a] font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Our Mission</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Your Glow, Your Way
            </h2>
            <p className="text-[#5a4a3a] text-lg leading-relaxed">
              We believe a beautiful tan should be accessible, private, and effortless. No awkward interactions, no waiting around — just you, your booth, and your glow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-[#e8d9c3] shadow-sm text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide text-sm">{f.title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR BOOTHS */}
      <section className="py-20 md:py-28 bg-white text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">The Technology</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            State of the Art Tanning Booths
          </h2>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image src={IMGS.booth} alt="Tanned Co. booth" fill className="object-cover" />
            </div>
            <div>
              <p className="text-[#5a4a3a] text-lg leading-relaxed mb-8">
                Our VersaSpa Pro booths are the gold standard in automated spray tanning. Every session is guided, heated, and self-cleaning — delivering consistent, beautiful results every single time.
              </p>
              <ul className="space-y-4">
                {boothPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-[#a46746] font-bold mt-0.5 text-lg">✓</span>
                    <span className="text-[#3a2e24] text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 md:py-28 bg-[#fdf6ec] text-[#1a1a1a] border-t border-[#e8d9c3]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">Ready to Get Your Glow?</h2>
          <p className="text-[#5a4a3a] text-lg mb-10">Book your session online in seconds. Walk in, walk out glowing.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-now"
              className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center border-2 border-[#d0c0aa] text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold hover:border-[#a46746] transition-colors"
            >
              How It Works →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
