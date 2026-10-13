"use client";

import { GLOW_KEY, GLOW_KEY_TITLE, GLOW_CLUB_ENTRY_FAQ } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { GLOW_CLUB_SIGNUP_URL } from "@/lib/locations";
import { CheckIcon } from "@/components/Icons";
import { CASUAL, GLOW_CLUB, GLOW_CLUB_PER_TAN_UNDER, PRICE_TEXT, formatAud } from "@/lib/pricing";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, extraFaqSchema, serviceSchema } from "@/lib/schema";

// Perks match the GymMaster Glow Club page (Hass, 11 Oct 2026 go-live): Glow Key,
// birthday tan, member-only perks and limited founding member spots. Website-only
// perks (mate's rate, product drops, member offers, priority access) removed.
const perks = [
  { title: GLOW_KEY_TITLE, body: GLOW_KEY },
  { title: "Birthday tan on us", body: "A free tan during your birthday month, our treat." },
  { title: "Member-only perks", body: "Extra perks just for Glow Club members." },
  { title: "Founding member status", body: "Limited founding member spots available. Once they're gone, they're gone." },
];

const included = [
  `${GLOW_CLUB.tansPerMonth} automated spray tan sessions a month`,
  `${GLOW_KEY_TITLE}: ${GLOW_KEY}`,
  `${GLOW_CLUB.minimumMonths}-month minimum (${PRICE_TEXT.glowClubMinimum}), then month to month`,
  "Book online or in the app, 7 days, 6am to midnight",
  "All founding member perks",
];

const glowClubFaqs = [
  {
    q: "How many tans do I get each month?",
    a: `${GLOW_CLUB.tansPerMonth} automated spray tan sessions every month, which works out to under ${formatAud(GLOW_CLUB_PER_TAN_UNDER)} per tan. ${GLOW_CLUB.tansPerMonth} tans a month covers a tan every 10 days or so.`,
  },
  {
    q: "Is there a minimum commitment?",
    a: `Yes. Glow Club has a ${GLOW_CLUB.minimumMonths}-month minimum, which is ${PRICE_TEXT.glowClubMinimum}. To leave before then, you pay out the rest of the minimum term. After that it continues month to month, and you can cancel by emailing ${GLOW_CLUB.cancelEmail}.`,
  },
  {
    q: "Do unused tans roll over?",
    a: `No. Your ${GLOW_CLUB.tansPerMonth} tans need to be used within each month.`,
  },
  {
    q: "What if I want a 4th tan in a month?",
    a: `Easy: just book an extra session at the casual rate (${formatAud(CASUAL.price)}) on top of your membership whenever you need it.`,
  },
  {
    q: "Where can I use my membership?",
    a: "Your membership works at all 5 of our Sydney studios, 7 days a week, 6am to midnight. Book online or in the app.",
  },
  GLOW_CLUB_ENTRY_FAQ,
];

function JoinButton({ source, className }: { source: string; className: string }) {
  return (
    <a
      href={GLOW_CLUB_SIGNUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("glow_club_join_click", { source, plan: "membership" })}
      className={className}
    >
      Join Glow Club
    </a>
  );
}

export default function GlowClub() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={[breadcrumbSchema([{ name: "Glow Club", path: "/glow-club" }]), serviceSchema(["glowClub"]), extraFaqSchema(glowClubFaqs)].filter((d) => d !== null)} />
      <Navbar activePath="/glow-club" />
      <main id="main" tabIndex={-1} className="outline-none">

      <PageHero
        eyebrow="Founding memberships now open"
        title="Glow Club."
        intro={`${GLOW_CLUB.tansPerMonth} tans a month. ${formatAud(GLOW_CLUB.monthly)}. Under ${formatAud(GLOW_CLUB_PER_TAN_UNDER)} a tan, with founding member perks.`}
        image="/images/two-women-white-swimwear.jpg"
        imageAlt="A Tanned Co. Glow Club member"
      >
        <JoinButton source="glow_club_hero" className="btn btn-light" />
      </PageHero>

      {/* MEMBERSHIP + PERKS */}
      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,420px)_1fr] gap-12 lg:gap-20 items-start">
          <div className="bg-espresso text-white rounded-[28px] p-8 md:p-10 shadow-xl lg:sticky lg:top-28">
            <div className="flex items-center justify-between gap-3 mb-5">
              <p className="eyebrow-light">The membership</p>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-bronze rounded-full px-3 py-1">
                Founding member
              </span>
            </div>
            <p className="font-display font-medium text-7xl leading-none">
              {formatAud(GLOW_CLUB.monthly)}
              <span className="font-sans text-base font-normal text-on-dark-muted"> / month</span>
            </p>
            <p className="text-on-dark mt-3">{GLOW_CLUB.tansPerMonth} tans a month. Under {formatAud(GLOW_CLUB_PER_TAN_UNDER)} a tan.</p>
            <div className="border-t border-white/15 my-7" />
            <ul className="space-y-3 text-on-dark text-[15px] mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="w-4 h-4 mt-1 shrink-0 text-bronze-light" />
                  {item}
                </li>
              ))}
            </ul>
            <JoinButton source="glow_club_page" className="btn btn-light w-full" />
            <p className="text-on-dark-muted text-xs mt-4 text-center">
              Paid monthly by direct debit. Unused tans don&apos;t roll over.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">The good stuff</p>
            <h2 className="display-lg mb-5">Founding member perks.</h2>
            <p className="text-body text-lg leading-relaxed mb-10 max-w-xl">
              Early Glow Club members get founding status, and these perks come with it.
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-10">
              {perks.map((perk, i) => (
                <div key={perk.title} className="border-t border-bronze/25 py-6">
                  <dt className="flex items-baseline gap-3 text-lg font-semibold mb-1.5">
                    <span className="font-display font-normal text-bronze text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {perk.title}
                  </dt>
                  <dd className="text-body leading-relaxed">{perk.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-14 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="Membership questions" title="Common questions." />
          <FaqAccordion items={glowClubFaqs} />
        </div>
      </section>

      <CtaBand
        source="glow_club_cta"
        eyebrow="Limited founding member spots"
        title="Join Glow Club."
        text="If you want in, don't sit on it. Founding spots are limited at launch."
      >
        <JoinButton source="glow_club_page_cta" className="btn btn-light" />
      </CtaBand>

      </main>

      <Footer />
    </div>
  );
}
