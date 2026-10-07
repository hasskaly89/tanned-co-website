"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PricingPlans from "@/components/PricingPlans";
import SectionHeading from "@/components/SectionHeading";
import { AppleIcon, PlayStoreIcon } from "@/components/Icons";
import { LOCATIONS } from "@/lib/locations";

const bookingSteps = ["Choose a studio", "Pick a time", "Check in and glow"];

const expectTips = [
  { title: "Wear dark clothes", desc: "Loose, dark clothing avoids bronzer transfer after your session." },
  { title: "Exfoliate first", desc: "Shower and exfoliate the day before for the most even tan." },
  { title: "Skip the deodorant", desc: "Arrive without deodorant, perfume or moisturiser on your skin." },
  { title: "Leave it on", desc: "Rinse after 6 to 8 hours, or 2 to 3 hours for Rapid Venetian. Full colour develops over 24 hours." },
];

export default function BookNow() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/book-now" />

      <PageHero
        eyebrow="Book in under a minute"
        title="Book your tan."
        intro="Private. Automated. Flawless. Book in seconds from your phone or online."
        image="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
        imageAlt="Book your tan at Tanned Co."
      />

      {/* BOOKING OPTIONS: first thing after the hero so they sit at the top on mobile */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 text-sm font-medium text-body">
            {bookingSteps.map((label, i) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-bronze-text text-white flex items-center justify-center text-xs font-semibold">
                  {i + 1}
                </span>
                {label}
              </li>
            ))}
          </ol>
          <SectionHeading
            eyebrow="Book online"
            title="Choose your studio and book."
            intro="No app needed. Pick an option, choose your studio, and we'll open its booking page in our secure portal in a new tab."
          />
          <PricingPlans source="book_now_page" />
        </div>
      </section>

      {/* APP DOWNLOAD */}
      <section className="py-20 md:py-28 bg-espresso text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow-light mb-4">Prefer the app?</p>
          <h2 className="display-lg mb-5">Book and manage in the app.</h2>
          <p className="text-on-dark text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Download the Tanned Co. app to book sessions, check in at the studio, manage your membership and find
            your nearest location, all from your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/au/app/tannedco/id1659547172"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("app_download_click", { source: "book_now_hero", store: "app_store" })}
              className="inline-flex items-center justify-center gap-3 bg-cream hover:bg-white text-ink px-7 py-3.5 rounded-2xl transition-colors"
            >
              <AppleIcon className="w-7 h-7 shrink-0" />
              <span className="text-left">
                <span className="block text-[11px] text-body leading-none mb-1">Download on the</span>
                <span className="block text-base font-semibold leading-none">App Store</span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("app_download_click", { source: "book_now_hero", store: "google_play" })}
              className="inline-flex items-center justify-center gap-3 bg-cream hover:bg-white text-ink px-7 py-3.5 rounded-2xl transition-colors"
            >
              <PlayStoreIcon className="w-7 h-7 shrink-0" />
              <span className="text-left">
                <span className="block text-[11px] text-body leading-none mb-1">Get it on</span>
                <span className="block text-base font-semibold leading-none">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="First time?" title="What to expect." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {expectTips.map((t, i) => (
              <li key={t.title} className="border-t border-line pt-7">
                <p className="font-display font-normal text-4xl text-bronze leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="text-body leading-relaxed">{t.desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-center mt-12">
            <Link href="/how-it-works" className="text-link">Read the full step-by-step guide</Link>
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-14 bg-sand border-t border-line">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="eyebrow mb-6">Our Sydney studios</p>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-6 py-3 bg-white border border-line rounded-full text-sm font-medium text-ink hover:border-bronze hover:text-bronze-text transition-colors"
              >
                {loc.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
