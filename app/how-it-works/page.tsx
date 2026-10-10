import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { CheckIcon, ClockIcon } from "@/components/Icons";
import { APP_ACCESS_TEXT, APP_UNLOCK_TEXT } from "@/lib/site";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg";

export const metadata: Metadata = {
  title: { absolute: "How Automated Spray Tanning Works | Tanned Co." },
  description:
    "See how a Tanned Co automated spray tan works. Book online, walk into your private booth, and walk out glowing in minutes. No staff, no waiting. Full guide with photos.",
  alternates: { canonical: "https://www.tannedco.com.au/how-it-works" },
  openGraph: {
    title: "How It Works | Tanned Co.",
    description: "Your step-by-step guide to an automated spray tan.",
    url: "https://www.tannedco.com.au/how-it-works",
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

const steps = [
  {
    num: "01",
    title: "Book online",
    desc: `Choose your location, date and time online or in the app. ${APP_UNLOCK_TEXT}`,
  },
  {
    num: "02",
    title: "Check in and enter",
    desc: "5 minutes before your booking, tap Check In in the app at the Bluetooth reader to open the studio. At your start time, tap Check In again at the reader on your tan room door. No queues, no waiting.",
  },
  {
    num: "03",
    title: "Prep like a pro",
    desc: "Remove all jewellery and makeup, then apply your hair net, sticky feet and our barrier cream. Everything you need is provided in your private room.",
  },
  {
    num: "04",
    title: "Choose your glow",
    desc: "Select your shade and depth from the tan menu on the wall. Enter the corresponding colour code into the blue Tmax box and press 'Start'.",
  },
  {
    num: "05",
    title: "Step into the booth",
    desc: "Enter the booth and follow the voice prompts. They'll guide you through each position for full, even coverage.",
  },
  {
    num: "06",
    title: "Walk out glowing",
    desc: "You're done! Get dressed and head out with a beautiful sun-kissed glow developing over the next few hours.",
  },
];

const appScreens = [
  { img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6933d56e-70e2-44c5-8fbe-dde2aac05421/1.png", label: "Booking in the Tanned Co. app, step 1" },
  { img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c3e14383-d601-4ac6-b8b2-02393874f08a/2.png", label: "Booking in the Tanned Co. app, step 2" },
  { img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6d1c8f20-ab3e-4eae-adf5-62c594a286df/3.png", label: "Booking in the Tanned Co. app, step 3" },
];

const prepTips = [
  {
    step: "01",
    title: "Undress and remove jewellery",
    desc: "Get undressed and remove any jewellery.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/66cba3e8-b0f9-4756-859a-70bf1be4aa45/DSCF2443.jpg",
  },
  {
    step: "02",
    title: "Put on a hair cap",
    desc: "Put on a hair cap and leave your hairline and ears exposed for even coverage.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/96d6e447-3940-40dd-9241-c884ba173900/DSCF2437.jpg",
  },
  {
    step: "03",
    title: "Apply blending cream",
    desc: "Apply blending cream to your palms, back of hands and feet including nails to prevent over-absorption.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg",
  },
  {
    step: "04",
    title: "Apply sticky feet",
    desc: "Apply sticky feet to the bottom of your feet to keep them clean during your session.",
    img: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f38ee636-add7-48ad-a970-c4e1438e0971/DSCF2447.jpg",
  },
];

const shades = [
  {
    name: "Rapid Venetian",
    tag: "Most popular",
    desc: "Rich chocolate brown with subtle violet undertones. The ideal choice for a timeless European tan. Works for all skin tones and busy tanners.",
    rinse: "Rinse after 2 to 3 hours",
    swatches: ["#c4956a", "#a06b42", "#6b3f22"],
  },
  {
    name: "Malibu",
    tag: "Deep olive bronze",
    desc: "Caramel and violet undertones. Our highly sought-after neutral base solution delivers a stunning deep olive bronze tan. Best for olive undertones.",
    rinse: "Rinse after 6 to 8 hours or sleep in",
    swatches: ["#c49a6c", "#9e6e42", "#6b4020"],
  },
  {
    name: "Monterey",
    tag: "Golden beach tan",
    desc: "A unique blend of golden and coffee brown undertones. The ideal choice for that iconic beach tan. Great for fair undertones or those who burn easily.",
    rinse: "Rinse after 6 to 8 hours or sleep in",
    swatches: ["#d4a96a", "#b8823a", "#8a5c20"],
  },
];

const depthNames = ["Light", "Medium", "Dark"];

const aftercare = [
  "Wait 6 to 8 hours before showering with Monterey or Malibu; 2 to 3 hours for Rapid Venetian",
  "Pat dry, don't rub",
  "Moisturise daily to extend your tan",
  "Avoid chlorine and long baths",
  "Use tan-safe body wash",
  "Exfoliate before your next session",
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/how-it-works" />

      <PageHero
        eyebrow="Step by step"
        title="How it works."
        intro="Your step-by-step guide to an automated spray tan."
        image="/how-it-works-hero.jpg"
        imageAlt="A Tanned Co. spray tan result"
        imagePosition="50% 0%"
      />

      {/* THE PROCESS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="The process" title="Six steps to your glow." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {steps.map(({ num, title, desc }) => (
              <li key={num} className="border-t border-line pt-7">
                <p className="font-display font-normal text-5xl text-bronze leading-none mb-5">{num}</p>
                <h3 className="text-xl font-semibold mb-2.5">{title}</h3>
                <p className="text-body leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FULL-WIDTH PHOTO */}
      <div className="relative h-[380px] md:h-[520px] overflow-hidden bg-espresso">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f7fcbfad-4a79-4e5e-b6e1-0ea0acdc15e1/DSCF3643.jpg"
          alt="Inside a Tanned Co. tanning booth"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a120c]/45 flex items-center justify-center px-6">
          <p className="display-lg text-white text-center">Private. Automated. Yours.</p>
        </div>
      </div>

      {/* SHADES */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Tan colours"
            title="Choose your shade."
            intro="3 signature colours, each available in 3 depths. That's 9 shades in total, so you can find the glow that suits you."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {shades.map(({ name, tag, desc, rinse, swatches }) => (
              <div key={name} className="bg-white rounded-[28px] border border-line p-8 flex flex-col">
                <div className="flex gap-2 mb-7" role="img" aria-label={`${name} in light, medium and dark depths`}>
                  {swatches.map((c, i) => (
                    <div key={c} className="flex-1">
                      <div className="h-16 rounded-xl" style={{ backgroundColor: c }} />
                      <p className="text-xs text-muted text-center mt-2">{depthNames[i]}</p>
                    </div>
                  ))}
                </div>
                <p className="eyebrow mb-2">{tag}</p>
                <h3 className="font-display font-medium text-[2rem] leading-tight mb-3">{name}</h3>
                <p className="text-body leading-relaxed flex-1 mb-6">{desc}</p>
                <p className="flex items-center gap-2 text-sm font-medium text-bronze-text">
                  <ClockIcon className="w-4 h-4" /> {rinse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN THE ROOM */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="In the room"
            title="Before you step in."
            intro="Follow these 4 steps inside your tanning room before starting your session."
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prepTips.map(({ step, title, desc, img }) => (
              <li key={title}>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-5">
                  <Image src={img} alt={title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <p className="font-display font-normal text-2xl text-bronze leading-none mb-2">{step}</p>
                <h3 className="text-lg font-semibold mb-1.5">{title}</h3>
                <p className="text-body leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* APP */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Book in seconds"
            title="Book online, unlock with the app."
            intro={`${APP_ACCESS_TEXT} You can also book and manage sessions in the app, then check in with it when you arrive.`}
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {appScreens.map(({ img, label }) => (
              <div key={label} className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-line bg-white">
                <Image src={img} alt={label} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading eyebrow="After your session" title="Aftercare tips." />
          <ul className="grid sm:grid-cols-2 gap-x-12 border-t border-line">
            {aftercare.map((tip) => (
              <li key={tip} className="flex items-start gap-3 py-5 border-b border-line">
                <CheckIcon className="w-4 h-4 mt-1.5 text-bronze shrink-0" />
                <span className="text-ink/90 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand source="how_it_works_cta" title="Ready to book?" text="Book your session in seconds. Walk in, walk out glowing." />

      <Footer />
    </div>
  );
}
