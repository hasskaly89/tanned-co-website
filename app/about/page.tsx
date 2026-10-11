import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import InstagramFeed from "@/components/InstagramFeed";
import { SHOW_TANS_DELIVERED_STAT, DEVELOP_LINE } from "@/lib/site";
import { CheckIcon, SunIcon, LockIcon, LeafIcon, ClockIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg";

export const metadata: Metadata = {
  title: { absolute: "About Tanned Co. | Sydney's First Automated Spray Tan Studio" },
  description:
    "Meet Tanned Co., Sydney's first automated spray tan studio. Private VersaSpa Pro booths across 5 Sydney studios. Vegan and cruelty-free, open 7 days.",
  alternates: { canonical: "https://www.tannedco.com.au/about" },
  openGraph: {
    title: "About Us | Tanned Co.",
    description: "Sydney's first automated spray tan studio. Your own private room, open 7 days.",
    url: "https://www.tannedco.com.au/about",
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

const IMGS = {
  story: "/founder.jpg",
  booth: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg",
};

const stats = [
  { value: "5", label: "Sydney studios" },
  { value: "7", label: "Days a week" },
  { value: "3", label: "Signature shades" },
  // Confirmed by Hass; switch with SHOW_TANS_DELIVERED_STAT in lib/site.ts.
  SHOW_TANS_DELIVERED_STAT ? { value: "5,000+", label: "Spray tans delivered" } : { value: "9", label: "Shade and depth options" },
];

const features = [
  { icon: <SunIcon className="w-6 h-6" />, title: "Automated booths", desc: "VersaSpa Pro booths that talk you through every step." },
  { icon: <LockIcon className="w-6 h-6" />, title: "Private", desc: "Your own private tan room, with no staff in the room." },
  { icon: <LeafIcon className="w-6 h-6" />, title: "Vegan and cruelty-free", desc: "Vegan, cruelty-free and paraben-free tanning solutions." },
  { icon: <ClockIcon className="w-6 h-6" />, title: "Open 7 days", desc: "Open 7 days, 6am to midnight." },
];

const boothPoints = [
  "Open-air design for comfort",
  "Voice and visual guided instructions",
  "Heated booth, even in winter",
  "Height sensors for even coverage",
  "Self-cleaning between every session",
  "3 spray nozzles for full body coverage",
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <Navbar activePath="/about" />

      <PageHero
        eyebrow="Who we are"
        title="Our story."
        intro="Private, automated spray tanning. No awkward small talk, no paper undies."
        image="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg"
        imageAlt="Tanned Co. studio"
      />

      {/* FOUNDER STORY */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">Meet Paige Cook, founder</p>
            <h2 className="display-lg mb-7">The story behind Tanned Co.</h2>
            <div className="space-y-5 text-body text-lg leading-relaxed">
              <p>
                Tanned Co. was born from my background as a skin therapist, where I saw firsthand the long-term
                damage the sun can do to your skin. As a mum of three, I needed a spray tan solution that was
                quick, easy and private, and fitted into a busy day.
              </p>
              <p>
                I wanted to remove the awkwardness of traditional spray tanning salons. That&apos;s why I created
                Sydney&apos;s first automated spray tan studio, where you tan alone in your own room. No one in the room, no waiting,
                no awkward moments.
              </p>
              <p className="font-display font-normal text-2xl text-ink leading-snug">
                A good tan, on your schedule.
              </p>
            </div>
          </div>
          <div className="relative rounded-[28px] overflow-hidden aspect-[3/4]">
            <Image
              src={IMGS.story}
              alt="Paige Cook, founder of Tanned Co."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-sand border-y border-line">
        <dl className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2">
              <dt className="text-sm font-medium text-body">{s.label}</dt>
              <dd className="font-display font-medium text-6xl leading-none text-bronze-text">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* MISSION */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our mission"
            title="Just you and the booth."
            intro="A good tan should be private, easy and open when you are. No awkward small talk, no waiting around."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {features.map((f) => (
              <div key={f.title} className="border-t border-line pt-7">
                <div className="text-bronze mb-5">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOTHS */}
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/5]">
            <Image
              src={IMGS.booth}
              alt="A Tanned Co. VersaSpa Pro tanning booth"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">The technology</p>
            <h2 className="display-lg mb-6">Purpose-built tanning booths.</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Our VersaSpa Pro booths are made for automated spray tanning. Every session is guided, heated and
              self-cleaning, and designed to give a consistent, even result.
            </p>
            <ul className="space-y-3.5 mb-9">
              {boothPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 font-medium">
                  <CheckIcon className="w-4 h-4 mt-1.5 text-bronze shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/how-it-works" className="btn btn-outline">See how it works</Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="pt-20 md:pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="@tannedco_"
            title="Follow the glow."
            intro={
              <a href="https://instagram.com/tannedco_" target="_blank" rel="noopener noreferrer" className="text-link">
                See more on Instagram
              </a>
            }
          />
        </div>
        <InstagramFeed />
      </section>

      <CtaBand source="about_cta" title="Ready when you are." text={`Book online in under a minute. ${DEVELOP_LINE}`} />

      <Footer />
    </div>
  );
}
