import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import FranchiseForm from "./FranchiseForm";
import { LOCATIONS, SITE_URL } from "@/lib/locations";
import {
  BOOTH_TIME,
  BOOKING_SLOT,
  CONTACT,
  FRANCHISE_CONTACT,
  FRANCHISE_SHOW_COMPANY_OWNED,
  FRANCHISE_SHOW_HASS_MOBILE,
} from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "Own a Tanned Co. Studio | Franchise Opportunities" },
  description:
    "Own a Tanned Co. automated spray tan studio. Private rooms, app entry and VersaSpa Pro booths. Send a franchise enquiry to talk about your area.",
  alternates: { canonical: `${SITE_URL}/franchise` },
};

/*
 * Copy follows the Tanned Co. franchise information pack (Oct 2026, marked DRAFT
 * FOR REVIEW). No fee, investment or earnings figures on this page.
 *
 * KEPT OFF THE PAGE, pending franchise lawyer sign-off (do not publish until signed off):
 *  - "No royalty on your sales" and how Tanned Co.'s ongoing income is earned
 *  - The 10 step enquiry to opening process, its order and timings
 *  - Franchising Code of Conduct, disclosure document, 14 day and cooling-off statements
 * Pack placeholders also left out: training length and ongoing support cadence.
 */

const IMG = "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946";

// Existing site photography only. No swimwear or body shots on this page.
const studioPhotos = [
  { src: `${IMG}/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg`, alt: "The Tanned Co. Caringbah shopfront" },
  { src: "/locations-hero.jpg", alt: "Inside a Tanned Co. studio: the lit Tanned Co. sign and waiting area" },
  { src: `${IMG}/66cba3e8-b0f9-4756-859a-70bf1be4aa45/DSCF2443.jpg`, alt: "The prep station inside a private Tanned Co. tan room" },
];

const studiosLine = FRANCHISE_SHOW_COMPANY_OWNED
  ? `Today that idea runs as our ${LOCATIONS.length} company-owned studios across Sydney.`
  : `Today that idea runs as ${LOCATIONS.length} studios across Sydney.`;

const modelPoints = [
  "VersaSpa Pro automated booths with voice and visual guidance",
  "Heated, open-air booth that adjusts the spray to each client's height",
  "Self-cleaning between every session",
  `${BOOTH_TIME[0].toUpperCase()}${BOOTH_TIME.slice(1)} in the booth, in a ${BOOKING_SLOT} booking slot`,
  "Clients book online and use the app to unlock the studio and their room",
  "No tanning staff in the room. Open 7 days, 6am to midnight",
];

const whatYouGet = [
  "The Tanned Co. operations and compliance manual",
  "Fit-out guidance and an approved suppliers list",
  "VersaSpa Pro booth set-up",
  "GymMaster booking, app and studio entry set-up",
  "Brand marketing and launch support",
  "Tanning solution supplied by Tanned Co.",
  "Your studio on tannedco.com.au",
  "Ongoing support from the Tanned Co. team",
];

const owning = [
  "Regular studio and booth checks, cleaning and presentation",
  "Restocking tanning solution and client disposables",
  "Answering client messages and looking after reviews",
  "Local marketing to build your client base, alongside brand campaigns",
];

const idealFit = [
  "You get the brand: private, cheeky, confident and for everyone",
  "You want to own the local business, running it yourself or with a committed operator",
  "You're comfortable with customer care, local marketing and keeping a studio spotless",
  "You've run a business before, or have strong retail, beauty, fitness or service experience",
  "You have the funds or finance in place to open and run the studio through the early months",
  "You know your area and have a realistic timeframe",
  "You're happy to follow the Tanned Co. system, booths, booking platform and brand",
];

const steps = [
  { title: "Send an enquiry", text: `Fill in the form below or email ${FRANCHISE_CONTACT.email}. Tell us where you'd like to open.` },
  { title: "Talk it through", text: "A call about how the studios run, the franchise and your plans, and a chance to see a studio running." },
  { title: "Take advice", text: "We'll map out your timeline to opening together. Take the documents to your own lawyer and accountant." },
];

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-body leading-relaxed">
          <CheckIcon className="w-4 h-4 mt-1.5 text-bronze shrink-0" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={breadcrumbSchema([{ name: "Franchise", path: "/franchise" }])} />
      <Navbar activePath="/franchise" />

      {/* INTRO */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <p className="eyebrow mb-4">Franchise opportunities</p>
        <h1 className="display-xl max-w-3xl">Own a Tanned Co. studio.</h1>
        <p className="text-body text-lg leading-relaxed mt-6 max-w-2xl">
          Private, automated spray tanning. Clients book online, let themselves in with the app and tan in their own
          private room. If you&apos;d like to bring Tanned Co. to your area, we&apos;d like to hear from you.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
          <a href="#enquire" className="btn btn-dark">Send a franchise enquiry</a>
          <a href={`mailto:${FRANCHISE_CONTACT.email}`} className="text-link">{FRANCHISE_CONTACT.email}</a>
        </div>
      </header>

      {/* STORY */}
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="display-lg mb-6">The story behind Tanned Co.</h2>
            <div className="space-y-5 text-body text-lg leading-relaxed">
              <p>
                Tanned Co. was started by founder Paige Cook. Her background as a skin therapist showed her the
                long-term damage the sun can do, and she wanted a spray tan that was quick, easy and fitted into a
                busy day.
              </p>
              <p>
                So she took the awkward out of it. No standing half-dressed in front of a stranger, no waiting around.
                Just a private room, an automated booth and a glow on your own schedule. {studiosLine}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {studioPhotos.slice(0, 2).map((p) => (
              <div key={p.src} className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODEL */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden max-md:hidden">
            <Image src={studioPhotos[2].src} alt={studioPhotos[2].alt} fill sizes="50vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-4">The model</p>
            <h2 className="display-lg mb-6">Private. Automated. Low-touch.</h2>
            <Ticks items={modelPoints} />
            <div className="mt-9 bg-white rounded-3xl border border-line p-7">
              <h3 className="text-lg font-semibold mb-2">Low-touch is not no-touch.</h3>
              <p className="text-body leading-relaxed">
                The studio runs without staff in the room, but you still own the local business: keeping the studio
                clean and stocked, looking after client messages and reviews, and building a local client base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIOS */}
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our studios"
            title={`${LOCATIONS.length} studios across Sydney.`}
            intro="Every studio runs the same format: open 6am to midnight, 7 days, booked online and unlocked with the app. Tell us where you'd like to open and we'll check it against our territory map."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug} className="bg-white rounded-3xl border border-line p-6">
                <p className="font-semibold mb-1">{loc.shortName}</p>
                <p className="text-sm text-body leading-relaxed">{loc.fullAddress}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT YOU GET / OWNING */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid gap-5 md:grid-cols-2">
          <div className="bg-white rounded-3xl border border-line p-7 md:p-9">
            <p className="eyebrow mb-3">What you get</p>
            <h2 className="display-md mb-6">Set up to run the system.</h2>
            <Ticks items={whatYouGet} />
          </div>
          <div className="bg-white rounded-3xl border border-line p-7 md:p-9">
            <p className="eyebrow mb-3">What owning a studio involves</p>
            <h2 className="display-md mb-6">Your part.</h2>
            <Ticks items={owning} />
          </div>
        </div>
        <p className="max-w-6xl mx-auto px-6 mt-6 text-sm text-muted">
          Package, investment range, owner responsibilities and timeline are all covered on your first call.
        </p>
      </section>

      {/* IDEAL FRANCHISEE */}
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
          <div>
            <p className="eyebrow mb-4">Is it you?</p>
            <h2 className="display-lg mb-6">The ideal franchisee.</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              You don&apos;t need to be a tanning expert. We&apos;re looking for people who love the brand, follow a
              system and want to build something in their local area.
            </p>
            <Ticks items={idealFit} />
          </div>
          <div className="space-y-5">
            <div className="bg-white rounded-3xl border border-line p-7">
              <h3 className="text-lg font-semibold mb-2">Probably not for you if...</h3>
              <p className="text-body leading-relaxed">
                you want a business that runs itself with no involvement, want to change the core system, or need to
                sign this week. The process takes time for good reasons.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-line p-7">
              <h3 className="text-lg font-semibold mb-2">Investment.</h3>
              <p className="text-body leading-relaxed">
                The total investment and the funds you&apos;ll need are covered in detail once we&apos;ve talked. This
                page has no fee, investment or earnings figures, and nothing on it is a forecast or promise of results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Getting started" title="From enquiry to a conversation." />
          <ol className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-7">
                <p className="font-display font-normal text-5xl text-bronze leading-none mb-5">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-xl font-semibold mb-2.5">{s.title}</h3>
                <p className="text-body leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ENQUIRY FORM + CONTACT */}
      <section id="enquire" className="py-14 md:py-28 bg-sand scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-start">
          <div>
            <p className="eyebrow mb-4">Enquire</p>
            <h2 className="display-lg mb-6">Let&apos;s talk about your area.</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Tell us where you&apos;d like to open and when.
              {FRANCHISE_SHOW_HASS_MOBILE && ` ${FRANCHISE_CONTACT.name}, ${FRANCHISE_CONTACT.role}, looks after every franchise enquiry personally.`}
            </p>
            <dl className="space-y-4">
              <div>
                <dt className="eyebrow mb-1">Email</dt>
                <dd><a href={`mailto:${FRANCHISE_CONTACT.email}`} className="text-link">{FRANCHISE_CONTACT.email}</a></dd>
              </div>
              {FRANCHISE_SHOW_HASS_MOBILE && (
                <div>
                  <dt className="eyebrow mb-1">{FRANCHISE_CONTACT.name.split(" ")[0]}&apos;s mobile</dt>
                  <dd><a href={FRANCHISE_CONTACT.mobileHref} className="text-link">{FRANCHISE_CONTACT.mobile}</a></dd>
                </div>
              )}
              <div>
                <dt className="eyebrow mb-1">Studio support</dt>
                <dd><a href={CONTACT.phoneHref} className="text-link">{CONTACT.phone}</a></dd>
              </div>
            </dl>
          </div>
          <FranchiseForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
