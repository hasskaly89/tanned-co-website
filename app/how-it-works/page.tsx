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
  { step: "01", icon: "💍", title: "Undress & Remove Jewellery", desc: "Get undressed and remove any jewellery before stepping into the booth." },
  { step: "02", icon: "🧢", title: "Put On Hair Cap", desc: "Put on a hair cap and leave your hairline and ears exposed for even coverage." },
  { step: "03", icon: "🤲", title: "Apply Blending Cream", desc: "Apply blending cream to your palms, back of hands and feet including nails to prevent over-absorption." },
  { step: "04", icon: "👣", title: "Apply Sticky Feet", desc: "Apply sticky feet to the bottom of your feet to keep them clean during your session." },
];

const shades = [
  {
    name: "Rapid Venetian",
    tag: "Most Popular",
    desc: "Rich chocolate brown and subtle violet undertones — the ideal choice to achieve a timeless European tan. Works for all skin tones and busy tanners.",
    rinse: "Rinse after 2–3 hours",
    swatches: ["#c4956a", "#a06b42", "#6b3f22"],
  },
  {
    name: "Malibu",
    tag: "Deep Olive Bronze",
    desc: "Caramel and violet undertones — our highly sought-after neutral base solution that delivers a stunning deep olive bronze tan. Best for olive undertones.",
    rinse: "Rinse after 6–8 hours or sleep in",
    swatches: ["#c49a6c", "#9e6e42", "#6b4020"],
  },
  {
    name: "Monterey",
    tag: "Golden Beach Tan",
    desc: "A unique blend of golden and coffee brown undertones — the ideal choice to achieve that iconic beach tan. Great for fair undertones or those who burn easily.",
    rinse: "Rinse after 6–8 hours or sleep in",
    swatches: ["#d4a96a", "#b8823a", "#8a5c20"],
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
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#b08850] mb-4 text-center">In The Room</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">Before You Step In</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">Follow these 4 steps inside your tanning room before starting your session.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {prepTips.map(({ step, icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm text-center flex flex-col items-center">
                <p className="text-3xl font-black text-[#b08850] mb-2">{step}</p>
                <div className="text-3xl mb-4">{icon}</div>
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
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">Choose Your Shade</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">3 signature colours, each available in 3 depths — 9 shades total so you can find your perfect glow.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {shades.map(({ name, tag, desc, rinse, swatches }) => (
              <div key={name} className="bg-white rounded-3xl p-8 border border-[#e8d9c3] shadow-sm flex flex-col">
                {/* Colour swatches — light, medium, dark */}
                <div className="flex gap-3 mb-6">
                  {swatches.map((colour, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                      <div
                        className="w-full aspect-square rounded-xl shadow-sm border border-[#e8d9c3]"
                        style={{ backgroundColor: colour }}
                      />
                      <span className="text-[10px] uppercase tracking-widest text-[#5a4a3a]">
                        {i === 0 ? "Light" : i === 1 ? "Medium" : "Dark"}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Tag */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b08850] mb-2">{tag}</span>
                {/* Name */}
                <h3 className="text-xl font-black uppercase tracking-wide text-[#1a1a1a] mb-3">{name}</h3>
                {/* Description */}
                <p className="text-[#5a4a3a] text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                {/* Rinse time */}
                <div className="flex items-center gap-2 bg-[#fdf0d5] rounded-full px-4 py-2 text-xs font-semibold text-[#b08850] uppercase tracking-wider w-fit">
                  <span>⏱</span> {rinse}
                </div>
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
