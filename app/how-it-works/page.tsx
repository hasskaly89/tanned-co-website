import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg";

export const metadata: Metadata = {
  title: "How Automated Spray Tanning Works | Step-by-Step Guide | Tanned Co",
  description:
    "See how a Tanned Co automated spray tan works. Book online, walk into your private booth, and walk out glowing in minutes. No staff, no waiting. Full guide with photos.",
  alternates: { canonical: "https://www.tannedco.com.au/how-it-works" },
  openGraph: {
    title: "How It Works | Tanned Co.",
    description: "Your step-by-step guide to a perfect automated spray tan.",
    url: "https://www.tannedco.com.au/how-it-works",
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

const steps = [
  {
    num: "01",
    title: "Book Online",
    desc: "Choose your location, date and time through our easy online booking system or via our app.",
  },
  {
    num: "02",
    title: "Check In & Enter",
    desc: "Arrive at your selected appointment time. Use the Bluetooth reader to check in to our salon, then again at the door of your tan room. No queues, no waiting.",
  },
  {
    num: "03",
    title: "Prep Like a Pro",
    desc: "Remove all jewellery and makeup, then apply your hair net, sticky feet and our barrier cream. Everything you need is provided in your private room.",
  },
  {
    num: "04",
    title: "Choose Your Glow",
    desc: "Select your shade and depth from the tan menu on the wall. Enter the corresponding colour code into the blue Tmax box and press 'Start'.",
  },
  {
    num: "05",
    title: "Step Into the Booth",
    desc: "Enter the booth and follow the voice prompts. They'll guide you through each position for full, even coverage.",
  },
  {
    num: "06",
    title: "Walk Out Glowing",
    desc: "You're done! Get dressed and head out with a beautiful sun-kissed glow developing over the next few hours.",
  },
];

const prepTips = [
  {
    step: "01",
    title: "Undress & Remove Jewellery",
    desc: "Get undressed and remove any jewellery.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/66cba3e8-b0f9-4756-859a-70bf1be4aa45/DSCF2443.jpg",
  },
  {
    step: "02",
    title: "Put On Hair Cap",
    desc: "Put on a hair cap and leave your hairline and ears exposed for even coverage.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/96d6e447-3940-40dd-9241-c884ba173900/DSCF2437.jpg",
  },
  {
    step: "03",
    title: "Apply Blending Cream",
    desc: "Apply blending cream to your palms, back of hands and feet including nails to prevent over-absorption.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg",
  },
  {
    step: "04",
    title: "Apply Sticky Feet",
    desc: "Apply sticky feet to the bottom of your feet to keep them clean during your session.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f38ee636-add7-48ad-a970-c4e1438e0971/DSCF2447.jpg",
  },
];

const shades = [
  {
    name: "Rapid Venetian",
    tag: "Most Popular",
    desc: "Rich chocolate brown and subtle violet undertones the ideal choice to achieve a timeless European tan. Works for all skin tones and busy tanners.",
    rinse: "Rinse after 2–3 hours",
    swatches: ["#c4956a", "#a06b42", "#6b3f22"],
  },
  {
    name: "Malibu",
    tag: "Deep Olive Bronze",
    desc: "Caramel and violet undertones our highly sought-after neutral base solution that delivers a stunning deep olive bronze tan. Best for olive undertones.",
    rinse: "Rinse after 6–8 hours or sleep in",
    swatches: ["#c49a6c", "#9e6e42", "#6b4020"],
  },
  {
    name: "Monterey",
    tag: "Golden Beach Tan",
    desc: "A unique blend of golden and coffee brown undertones the ideal choice to achieve that iconic beach tan. Great for fair undertones or those who burn easily.",
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
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg"
          alt="Inside a Tanned Co. tanning booth"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Step by Step</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight text-white mb-4">How It Works</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Your step-by-step guide to a perfect automated spray tan.
          </p>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="py-12 md:py-28 bg-[#fdf0d5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">The Process</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-16">How It Works</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="border border-[#e8d9c3] rounded-3xl p-8 hover:border-[#a46746] transition-colors flex flex-col">
                <p className="text-5xl font-black text-[#a46746] mb-5">{num}</p>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{title}</h3>
                <p className="text-[#5a4a3a] leading-relaxed text-sm flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-WIDTH DEMO PHOTO */}
      <div className="relative h-[400px] md:h-[520px] overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f7fcbfad-4a79-4e5e-b6e1-0ea0acdc15e1/DSCF3643.jpg"
          alt="Inside a Tanned Co. tanning booth"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-widest text-center drop-shadow-lg">
            Private. Automated. Flawless.
          </p>
        </div>
      </div>

      {/* IN-BOOTH VISUAL GUIDE */}
      <section className="py-12 md:py-28 bg-white text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Book in Seconds</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Book Via the App</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">Download the Tanned Co. app, choose your location and time, and walk straight in. No check-in, no waiting.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6933d56e-70e2-44c5-8fbe-dde2aac05421/1.png", label: "Step 1" },
              { img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c3e14383-d601-4ac6-b8b2-02393874f08a/2.png", label: "Step 2" },
              { img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6d1c8f20-ab3e-4eae-adf5-62c594a286df/3.png", label: "Step 3" },
            ].map(({ img, label }) => (
              <div key={label} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#e8d9c3]">
                <Image src={img} alt={label} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHADE OPTIONS */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Tan Colours</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Choose Your Shade</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">3 signature colours, each available in 3 depths 9 shades total so you can find your perfect glow.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {shades.map(({ name, tag, desc, rinse, swatches }) => (
              <div key={name} className="bg-white rounded-3xl p-8 border border-[#e8d9c3] shadow-sm flex flex-col">
                {/* Tag */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a46746] mb-2">{tag}</span>
                {/* Name */}
                <h3 className="text-xl font-black uppercase tracking-wide text-[#1a1a1a] mb-3">{name}</h3>
                {/* Description */}
                <p className="text-[#5a4a3a] text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                {/* Rinse time */}
                <div className="flex items-center gap-2 bg-[#fdf0d5] rounded-full px-4 py-2 text-xs font-semibold text-[#a46746] uppercase tracking-wider w-fit">
                  <span>⏱</span> {rinse}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARATION GUIDE */}
      <section className="py-12 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">In The Room</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">Before You Step In</h2>
          <p className="text-center text-[#5a4a3a] mb-16 max-w-lg mx-auto">Follow these 4 steps inside your tanning room before starting your session.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {prepTips.map(({ step, title, desc, img }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden border border-[#e8d9c3] shadow-sm flex flex-col">
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#a46746] text-white text-xs font-black uppercase tracking-widest rounded-full w-9 h-9 flex items-center justify-center shadow-md">
                    {step}
                  </div>
                </div>
                {/* Text */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold uppercase tracking-wide text-sm text-[#1a1a1a] mb-2">{title}</h3>
                  <p className="text-[#5a4a3a] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="py-12 md:py-28 bg-[#fdf0d5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">After Your Session</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-16">Aftercare Tips</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {aftercare.map((tip) => (
              <div key={tip} className="border border-[#e8d9c3] rounded-2xl p-6 flex items-start gap-3 hover:border-[#a46746] transition-colors">
                <span className="text-[#a46746] font-bold text-lg mt-0.5">✓</span>
                <span className="text-[#3a2e24] leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-28 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-6 text-[#1a1a1a]">Ready to Book?</h2>
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
