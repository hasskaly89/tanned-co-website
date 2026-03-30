import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Download & Book",
    desc: "Download the Tanned Co. app or book online. Choose your location, date, and preferred tan shade.",
  },
  {
    num: "02",
    title: "Arrive at the Studio",
    desc: "Walk in at your booked time. Enter your private tanning room — no check-in, no waiting.",
  },
  {
    num: "03",
    title: "Select Your Shade",
    desc: "Use the in-room tan menu to select your colour and depth before stepping into the booth.",
  },
  {
    num: "04",
    title: "Walk Out Glowing",
    desc: "The booth guides you through 4 poses in just minutes. Develop for 6–8 hours then shower to reveal your glow.",
  },
];

const prepTips = [
  { icon: "🧼", title: "Exfoliate", desc: "Exfoliate 24 hours before your tan. Focus on elbows, knees, ankles and wrists." },
  { icon: "💧", title: "Moisturise", desc: "Apply light moisturiser the night before. Avoid heavy oils on the day." },
  { icon: "👗", title: "Wear Dark Loose Clothing", desc: "Wear dark, loose-fitting clothes to your appointment to avoid any transfer." },
  { icon: "💄", title: "Come Clean", desc: "No deodorant, perfume, makeup or moisturiser on the day of your tan." },
];

const shades = [
  {
    name: "Sol Golden",
    desc: "A warm, golden bronze. Perfect for fair to medium skin tones. Rinse after 6–8 hours.",
    swatch: "#c8a86b",
  },
  {
    name: "Deep Bronze",
    desc: "A deeper, richer tan for those wanting maximum colour. Rinse after 6–8 hours.",
    swatch: "#8b5e3c",
  },
  {
    name: "Clear / Natural",
    desc: "A clear solution that develops naturally. Perfect for first-timers. Suits all skin tones.",
    swatch: "#e8d5b7",
  },
  {
    name: "Rapid Express",
    desc: "In a rush? Our express formula develops in just 2–3 hours for the same beautiful result.",
    swatch: "#d4935a",
  },
];

const aftercare = [
  "Wait 6–8 hours before showering",
  "Pat dry, don't rub",
  "Moisturise daily to extend your tan",
  "Avoid chlorine and long baths",
  "Use tan-safe body wash",
  "Exfoliate before your next session",
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/how-it-works" />

      {/* PAGE HERO */}
      <section className="bg-[#fdf0d5] pt-40 pb-24 text-center px-6 border-b border-[#e8d9c3]">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#b08850] mb-4">Step by Step</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6 text-[#1a1a1a]">HOW IT WORKS</h1>
        <p className="text-[#5a4a3a] text-lg md:text-xl max-w-xl mx-auto">
          Your step-by-step guide to a perfect automated spray tan.
        </p>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#b08850] mb-4 text-center">The Process</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">4 Simple Steps</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="border border-white/10 rounded-3xl p-8 hover:border-[#b08850] transition-colors flex flex-col">
                <p className="text-5xl font-black text-[#b08850] mb-5">{num}</p>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{title}</h3>
                <p className="text-white/60 leading-relaxed text-sm flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARATION GUIDE */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#b08850] mb-4 text-center">Prep Tips</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">Before You Arrive</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {prepTips.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold uppercase tracking-wide text-sm text-[#1a1a1a] mb-3">{title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHADE OPTIONS */}
      <section className="py-20 md:py-28 bg-[#fdf6ec]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#b08850] mb-4 text-center">Tan Colours</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">Choose Your Shade</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {shades.map(({ name, desc, swatch }) => (
              <div key={name} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm text-center flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full mb-5 shadow-md border border-[#e8d9c3]"
                  style={{ backgroundColor: swatch }}
                />
                <h3 className="font-bold uppercase tracking-wide text-sm text-[#1a1a1a] mb-3">{name}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#b08850] mb-4 text-center">After Your Session</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">Aftercare Tips</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {aftercare.map((tip) => (
              <div key={tip} className="border border-white/10 rounded-2xl p-6 flex items-start gap-3 hover:border-[#b08850] transition-colors">
                <span className="text-[#b08850] font-bold text-lg mt-0.5">✓</span>
                <span className="text-white/80 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#fdf0d5] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-[#1a1a1a]">Ready to Book?</h2>
          <p className="text-[#5a4a3a] text-lg mb-10">Book your session in seconds. Walk in, walk out glowing.</p>
          <Link
            href="/book-now"
            className="inline-flex items-center bg-[#1a1a1a] hover:bg-[#3a2e24] text-white px-10 py-4 rounded-full font-semibold transition-colors text-base"
          >
            Book Now →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
