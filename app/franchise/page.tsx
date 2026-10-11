import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import FranchiseForm from "./FranchiseForm";
import { LOCATIONS, SITE_URL } from "@/lib/locations";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Franchise Opportunities",
  description: "Interested in opening a Tanned Co. automated spray tan studio? Send a franchise enquiry and our team will be in touch.",
  alternates: { canonical: `${SITE_URL}/franchise` },
};

const IMG = "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946";

// Existing site photography only.
const studioPhotos = [
  { src: `${IMG}/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg`, alt: "The Tanned Co. Caringbah shopfront" },
  { src: `${IMG}/90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg`, alt: "A client stepping into a private Tanned Co. tan room" },
  { src: `${IMG}/96d6e447-3940-40dd-9241-c884ba173900/DSCF2437.jpg`, alt: "The prep station inside a private Tanned Co. room" },
];

// Facts about how the studios run today (see the project brief).
const studioFacts = [
  `${LOCATIONS.length} studios across Sydney, open 7 days, 6am to midnight`,
  "Private, heated, self-cleaning VersaSpa Pro booths, with no staff in the room",
  "About 4 minutes in the booth, in a 20 minute booking slot",
  "Clients book online or in the app and use the app to unlock the studio and their room",
  "3 signature shades, each in Natural, Medium and Dark",
  "Vegan, cruelty-free and paraben-free solutions",
];

/*
 * PLACEHOLDERS (pending Hass): the franchise package, owner responsibilities,
 * timeline, ideal franchisee and investment are not confirmed facts yet, so each
 * one says the detail is available on enquiry. Replace with confirmed wording only.
 */
const ON_ENQUIRY = {
  receive: "Details of the franchise package are available on enquiry.",
  responsibilities: "Owner responsibilities are explained in full on enquiry.",
  timeline: "Steps and timeline to opening available on enquiry.",
  suits: "Our franchise team can talk through whether it's a fit for you.",
  investment: "Investment range available on enquiry.",
};

const openingSteps = [
  { title: "Send an enquiry", text: "Fill in the form below or email franchise@tannedco.com.au." },
  { title: "Talk it through", text: "Our franchise team will be in touch to talk it through." },
  { title: "Next steps", text: ON_ENQUIRY.timeline },
];

function Placeholder({ children }: { children: React.ReactNode }) {
  return <p className="text-body leading-relaxed">{children}</p>;
}

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/franchise" />

      {/* INTRO */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <p className="eyebrow mb-4">Franchise opportunities</p>
        <h1 className="display-xl max-w-3xl">Own a Tanned Co. studio.</h1>
        <p className="text-body text-lg leading-relaxed mt-6 max-w-2xl">
          Tanned Co. runs automated spray tan studios where clients book, check in and tan on their own, in a private
          booth. If you&apos;re interested in bringing Tanned Co. to your area, send us your details and our franchise
          team will be in touch to talk it through.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
          <a href="#enquire" className="btn btn-dark">Send a franchise enquiry</a>
          <a href="mailto:franchise@tannedco.com.au" className="text-link">franchise@tannedco.com.au</a>
        </div>
      </header>

      {/* THE STUDIO */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="The studio" title="How a Tanned Co. studio runs." />
          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {studioPhotos.map((p) => (
              <div key={p.src} className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {studioFacts.map((f) => (
              <li key={f} className="flex items-start gap-3 font-medium">
                <CheckIcon className="w-4 h-4 mt-1.5 text-bronze shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RECEIVE / RESPONSIBILITIES / WHO IT SUITS / INVESTMENT */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid gap-5 md:grid-cols-2">
          <div className="bg-white rounded-3xl border border-line p-7 md:p-8">
            <p className="eyebrow mb-3">What franchisees receive</p>
            <Placeholder>{ON_ENQUIRY.receive}</Placeholder>
          </div>
          <div className="bg-white rounded-3xl border border-line p-7 md:p-8">
            <p className="eyebrow mb-3">Owner responsibilities</p>
            <Placeholder>{ON_ENQUIRY.responsibilities}</Placeholder>
          </div>
          <div className="bg-white rounded-3xl border border-line p-7 md:p-8">
            <p className="eyebrow mb-3">Who it suits</p>
            <Placeholder>{ON_ENQUIRY.suits}</Placeholder>
          </div>
          <div className="bg-white rounded-3xl border border-line p-7 md:p-8">
            <p className="eyebrow mb-3">Investment</p>
            <Placeholder>{ON_ENQUIRY.investment}</Placeholder>
          </div>
        </div>
      </section>

      {/* OPENING PROCESS */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Opening process" title="From enquiry to opening." />
          <ol className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {openingSteps.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-7">
                <p className="font-display font-normal text-5xl text-bronze leading-none mb-5">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-xl font-semibold mb-2.5">{s.title}</h3>
                <p className="text-body leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section id="enquire" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-start">
          <div>
            <p className="eyebrow mb-4">Enquire</p>
            <h2 className="display-lg mb-6">Talk to our franchise team.</h2>
            <p className="text-body text-lg leading-relaxed mb-6">
              Tell us where you&apos;d like to open and when. Your enquiry goes straight to our franchise team.
            </p>
            <p className="text-sm text-body">
              Prefer email?{" "}
              <a href="mailto:franchise@tannedco.com.au" className="text-link">franchise@tannedco.com.au</a>
            </p>
          </div>
          <FranchiseForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
