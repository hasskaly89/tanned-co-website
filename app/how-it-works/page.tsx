import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { CheckIcon, ClockIcon } from "@/components/Icons";
import { APP_ACCESS_TEXT, APP_UNLOCK_TEXT, RINSE, DEVELOP_LINE, BOOKING_SLOT_LINE, CHECK_IN_TEXT } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const OG_IMAGE =
  "/images/studio-door-side-view.jpg";

export const metadata: Metadata = {
  title: { absolute: "How Automated Spray Tanning Works | Tanned Co." },
  description:
    "How a Tanned Co. automated spray tan works. Book online, let yourself in with the app and tan in your own private room. No staff in the room.",
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
    desc: `Choose your studio, date and time online or in the app. ${BOOKING_SLOT_LINE} ${APP_UNLOCK_TEXT}`,
  },
  {
    num: "02",
    title: "Check in and enter",
    desc: CHECK_IN_TEXT,
  },
  {
    num: "03",
    title: "Prep in the room",
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
    title: "Get dressed and go",
    desc: `Get dressed and go. ${DEVELOP_LINE}`,
  },
];

// App step cards: copy word for word from the post-launch brief (13 Oct 2026).
// Phone screens are interim crops (public/images/app/, see SOURCES.md); keep the file
// names when the owner supplies fresh screenshots.
const appSteps = [
  {
    step: "Step 01",
    title: "Sign up.",
    body: "Download the Tanned Co. app, create your account and choose your studio.",
    img: { src: "/images/app/app-login.png", width: 760, height: 1520, alt: "The Tanned Co. app login screen" },
  },
  {
    step: "Step 02",
    title: "Book your session.",
    body: "Pick a studio, date and time, and pay in the app. Casual tans have no commitment.",
    img: { src: "/images/app/app-home-book.png", width: 760, height: 1520, alt: "The Tanned Co. app home screen with the Book a Tanning Session button" },
  },
  {
    step: "Step 03",
    title: "Arrive and check in.",
    body: "5 minutes before your booking, tap Check In at the Bluetooth reader to open the studio. At your start time, tap again to open your room.",
    img: { src: "/images/app/app-check-in.png", width: 600, height: 1200, alt: "The Tanned Co. app Check In screen scanning for the door reader" },
  },
];

const prepTips = [
  {
    step: "01",
    title: "Undress and remove jewellery",
    desc: "Get undressed and remove any jewellery.",
    img: "/images/prep-hair-net-dispenser.jpg",
  },
  {
    step: "02",
    title: "Put on a hair net",
    desc: "Put on a hair net and leave your hairline and ears exposed for even coverage.",
    img: "/images/prep-sticky-feet-shelf.jpg",
  },
  {
    step: "03",
    title: "Apply barrier cream",
    desc: "Apply barrier cream to your palms, back of hands and feet including nails to prevent over-absorption.",
    img: "/images/studio-door-back-view.jpg",
  },
  {
    step: "04",
    title: "Apply sticky feet",
    desc: "Apply sticky feet to the bottom of your feet to keep them clean during your session.",
    img: "/images/prep-opening-pack.jpg",
  },
];

// Colour swatch chips removed (Hass, 11 Oct 2026): names, depths and rinse times only.
// Shade descriptions follow the manufacturer fact sheets (Innové / VersaSpa PRO, Norvell).
const shades = [
  {
    name: "Rapid Venetian",
    tag: "Quick rinse",
    desc: "A cool violet-brown for a classic European-style tan, and the quickest to rinse if you're short on time.",
    rinse: `Rinse after ${RINSE.rapid}`,
  },
  {
    name: "Malibu",
    tag: "Warm brown, cool violet",
    desc: "A warm brown with cool violet undertones.",
    rinse: `Rinse after ${RINSE.standard}`,
  },
  {
    name: "Monterey",
    tag: "Warm brown",
    desc: "Warm brown undertones for a classic beach tan.",
    rinse: `Rinse after ${RINSE.standard}`,
  },
];

const depthNames = ["Natural", "Medium", "Dark"];

const aftercare = [
  `Wait ${RINSE.standard} before showering with Malibu or Monterey, or ${RINSE.rapid} for Rapid Venetian`,
  "Pat dry, don't rub",
  "Moisturise daily to extend your tan",
  "Avoid chlorine and long baths",
  "Use tan-safe body wash",
  "Exfoliate before your next session",
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={breadcrumbSchema([{ name: "How it works", path: "/how-it-works" }])} />
      <Navbar activePath="/how-it-works" />
      <main id="main" tabIndex={-1} className="outline-none">

      <PageHero
        eyebrow="Step by step"
        title="How it works."
        intro="Your step-by-step guide to an automated spray tan."
        image="/how-it-works-hero.jpg"
        imageAlt="A Tanned Co. spray tan result"
        imagePosition="50% 0%"
      />

      {/* THE PROCESS */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="The process" title="How it works, step by step." />
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
          src="/images/group-five-blue-swimwear.jpg"
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
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Tan colours"
            title="Choose your shade."
            intro="3 signature colours, each available in 3 depths. That's 9 shades in total, so you can find the glow that suits you."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {shades.map(({ name, tag, desc, rinse }) => (
              <div key={name} className="bg-white rounded-[28px] border border-line p-8 flex flex-col">
                <p className="eyebrow mb-2">{tag}</p>
                <h3 className="font-display font-medium text-[2rem] leading-tight mb-3">{name}</h3>
                <p className="text-body leading-relaxed mb-3">{desc}</p>
                <p className="text-sm text-body flex-1 mb-6">Depths: {depthNames.join(", ")}</p>
                <p className="flex items-center gap-2 text-sm font-medium text-bronze-text">
                  <ClockIcon className="w-4 h-4" /> {rinse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN THE ROOM */}
      <section className="py-14 md:py-28">
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
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Book in under a minute"
            title="Book online, unlock with the app."
            intro={`${APP_ACCESS_TEXT} You can also book and manage sessions in the app, then check in with it when you arrive.`}
          />
          <div className="grid sm:grid-cols-3 sm:grid-rows-[auto_340px] md:grid-rows-[auto_360px] gap-x-6 gap-y-6 sm:gap-y-0">
            {appSteps.map(({ step, title, body, img }) => (
              <div key={step} className="bg-white border border-line rounded-3xl overflow-hidden h-[560px] flex flex-col sm:h-auto sm:row-span-2 sm:grid sm:grid-rows-subgrid">
                <div className="p-7 pb-0 shrink-0">
                  <p className="eyebrow mb-3">{step}</p>
                  <h3 className="display-md">{title}</h3>
                  <p className="text-body leading-relaxed mt-3">{body}</p>
                </div>
                <div className="relative flex-1 min-h-0 mt-6 overflow-hidden bg-gradient-to-b from-white to-sand flex justify-center">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="220px"
                    className="w-[200px] md:w-[220px] h-auto self-start mt-6 shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="py-14 md:py-28">
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

      <CtaBand source="how_it_works_cta" title="Ready to book?" text={`Book online in under a minute. ${DEVELOP_LINE}`} />

      </main>

      <Footer />
    </div>
  );
}
