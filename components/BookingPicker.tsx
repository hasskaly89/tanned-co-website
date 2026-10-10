"use client";

import { useState } from "react";
import Link from "next/link";
import { LOCATIONS, bookingUrlFor, type LocationData } from "@/lib/locations";
import { CASUAL, GLOW_CLUB, GLOW_CLUB_PER_TAN_UNDER, TEN_PACK, formatAud } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";
import { CheckIcon } from "@/components/Icons";

function StepHeading({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display font-medium uppercase tracking-[0.08em] text-xl md:text-2xl text-ink mb-5">
      <span className="w-8 h-8 shrink-0 rounded-full bg-ink text-white flex items-center justify-center font-sans text-sm font-semibold tracking-normal">
        {n}
      </span>
      {children}
    </h2>
  );
}

/**
 * Book now: pick a studio, then book a casual tan at that studio. 10 pack and
 * Glow Club sit underneath as compact secondary options. No studio is
 * preselected, so nobody lands on GymMaster at the wrong studio.
 */
export default function BookingPicker() {
  const [studio, setStudio] = useState<LocationData | null>(null);

  const book = (plan: "casual" | "tenPack") => {
    if (!studio) return;
    trackEvent("book_now_click", {
      source: "book_now_picker",
      plan,
      location_slug: studio.slug,
      destination: bookingUrlFor(studio, plan),
    });
  };

  return (
    <div>
      {/* STEP 1: STUDIO */}
      <fieldset>
        <legend className="sr-only">Choose your studio</legend>
        <StepHeading n={1}>Choose your studio.</StepHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {LOCATIONS.map((loc) => {
            const selected = studio?.slug === loc.slug;
            return (
              <label
                key={loc.slug}
                className={`relative flex items-start gap-3 rounded-2xl border px-4 py-4 cursor-pointer transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-bronze ${
                  selected ? "bg-ink border-ink text-white" : "bg-white border-line text-ink hover:border-bronze"
                }`}
              >
                <input
                  type="radio"
                  name="studio"
                  value={loc.slug}
                  checked={selected}
                  onChange={() => setStudio(loc)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#a46746]"
                />
                <span className="min-w-0">
                  <span className="block font-display font-medium uppercase tracking-[0.08em] text-[15px] leading-tight">
                    {loc.shortName}
                  </span>
                  <span className={`block text-xs mt-1 leading-snug ${selected ? "text-on-dark" : "text-muted"}`}>
                    {loc.address}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* STEP 2: CASUAL TAN */}
      <div className="mt-12">
        <StepHeading n={2}>Book a casual tan.</StepHeading>
        <div className="bg-white rounded-[28px] border-[1.5px] border-bronze/40 p-7 md:p-9 grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="eyebrow">Casual tan</p>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted bg-cream border border-line rounded-full px-3 py-1">
                Pay as you go
              </span>
            </div>
            <p className="font-display font-medium text-6xl leading-none text-ink">{formatAud(CASUAL.price)}</p>
            <p className="text-body text-sm mt-3">Per session. Pay when you book. No commitment.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-body">
              {["Private room, just you", "About 4 minutes in the booth", "Choose your shade and depth"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-bronze shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-[340px]" aria-live="polite">
            {studio ? (
              <>
                <a
                  href={bookingUrlFor(studio, "casual")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => book("casual")}
                  className="btn btn-dark w-full !py-4"
                >
                  Book a casual tan at {studio.shortName}, {formatAud(CASUAL.price)}
                </a>
                <p className="text-xs text-muted text-center mt-3">
                  Opens {studio.shortName}&apos;s booking page in our secure portal.
                </p>
              </>
            ) : (
              <>
                <button type="button" disabled className="btn btn-dark w-full !py-4">
                  Book a casual tan, {formatAud(CASUAL.price)}
                </button>
                <p className="text-xs text-muted text-center mt-3">Choose your studio above to book.</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* SECONDARY OPTIONS */}
      <div className="mt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-4">
          <h2 className="eyebrow">Tan regularly? Other ways to book</h2>
          <Link href="/pricing" className="text-link text-sm">Compare all options on the pricing page</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-3xl border border-line p-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow mb-2">10 pack</p>
              <p className="font-display font-medium text-3xl leading-none text-ink">{formatAud(TEN_PACK.price)}</p>
              <p className="text-sm text-body mt-2">
                {formatAud(TEN_PACK.perTan)} a tan, save {formatAud(TEN_PACK.saving)}. Valid for {TEN_PACK.validity}.
              </p>
            </div>
            {studio ? (
              <a
                href={bookingUrlFor(studio, "tenPack")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => book("tenPack")}
                className="btn btn-outline shrink-0"
              >
                Buy a 10 pack
              </a>
            ) : (
              <button type="button" disabled className="btn btn-outline shrink-0" title="Choose your studio above first">
                Buy a 10 pack
              </button>
            )}
          </div>
          <div className="bg-espresso text-white rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow-light mb-2">Glow Club</p>
              <p className="font-display font-medium text-3xl leading-none">
                {formatAud(GLOW_CLUB.monthly)}
                <span className="font-sans text-sm font-normal text-on-dark-muted"> / month</span>
              </p>
              <p className="text-sm text-on-dark mt-2">
                {GLOW_CLUB.tansPerMonth} tans a month, under {formatAud(GLOW_CLUB_PER_TAN_UNDER)} a tan.{" "}
                {GLOW_CLUB.minimumMonths} month minimum ({formatAud(GLOW_CLUB.minimumTotal)}).
              </p>
            </div>
            <Link
              href="/glow-club"
              onClick={() => trackEvent("glow_club_click", { source: "book_now_picker" })}
              className="btn btn-light shrink-0"
            >
              See Glow Club
            </Link>
          </div>
        </div>
        {!studio && <p className="text-xs text-muted mt-3">Choose your studio above to buy a 10 pack.</p>}
      </div>
    </div>
  );
}
