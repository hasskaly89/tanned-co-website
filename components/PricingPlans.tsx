"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { CASUAL, GLOW_CLUB, TEN_PACK, formatAud } from "@/lib/pricing";
import StudioBookButton from "@/components/StudioBookButton";
import { CheckIcon } from "@/components/Icons";

export const GLOW_CLUB_SIGNUP_URL =
  "https://tannedco.gymmasteronline.com/portal/membership/a015bd6ac18c7596fa250eed4e8ab668";

function Feature({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckIcon className={`w-4 h-4 mt-1 shrink-0 ${dark ? "text-bronze-light" : "text-bronze"}`} />
      <span>{children}</span>
    </li>
  );
}

/**
 * The three ways to tan, used on the home, pricing and book-now pages. Prices,
 * expiry and membership terms come from lib/pricing.ts only.
 */
export default function PricingPlans({
  source,
  glowClubAction = "learn",
}: {
  source: string;
  /** "learn" links to the Glow Club page; "join" goes straight to sign-up. */
  glowClubAction?: "learn" | "join";
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3 items-stretch">
      {/* Casual */}
      <div className="bg-white rounded-[28px] border border-line p-8 md:p-9 flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-5">
          <p className="eyebrow">Casual tan</p>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted bg-cream border border-line rounded-full px-3 py-1">
            Pay as you go
          </span>
        </div>
        <p className="font-display font-medium text-6xl leading-none text-ink">{formatAud(CASUAL.price)}</p>
        <p className="text-body text-sm mt-3">Per session. No commitment.</p>
        <div className="border-t border-line my-6" />
        <ul className="space-y-3 text-body text-[15px] flex-1 mb-8">
          <Feature>1 automated spray tan session</Feature>
          <Feature>Pay when you book your time</Feature>
          <Feature>Private booth experience</Feature>
          <Feature>Choose your shade and depth</Feature>
        </ul>
        <StudioBookButton plan="casual" source={source} label="Book a casual tan" buttonClassName="btn btn-outline" />
      </div>

      {/* 10 Pack */}
      <div className="bg-white rounded-[28px] border-[1.5px] border-bronze/50 p-8 md:p-9 flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-5">
          <p className="eyebrow">10 pack</p>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-bronze-text bg-bronze/10 rounded-full px-3 py-1">
            Save {formatAud(TEN_PACK.saving)}
          </span>
        </div>
        <p className="font-display font-medium text-6xl leading-none text-ink">{formatAud(TEN_PACK.price)}</p>
        <p className="text-body text-sm mt-3">{formatAud(TEN_PACK.perTan)} per tan.</p>
        <div className="border-t border-line my-6" />
        <ul className="space-y-3 text-body text-[15px] flex-1 mb-8">
          <Feature>{TEN_PACK.sessions} automated spray tan sessions</Feature>
          <Feature>Valid for {TEN_PACK.validity}</Feature>
          <Feature>Name-specific booking</Feature>
          <Feature>Best for regular tanners</Feature>
        </ul>
        <StudioBookButton plan="tenPack" source={source} label="Buy a 10 pack" buttonClassName="btn btn-outline" />
      </div>

      {/* Glow Club */}
      <div className="relative bg-espresso text-white rounded-[28px] p-8 md:p-9 flex flex-col shadow-xl">
        <div className="flex items-center justify-between gap-3 mb-5">
          <p className="eyebrow-light">Glow Club</p>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-bronze rounded-full px-3 py-1">
            Best value
          </span>
        </div>
        <p className="font-display font-medium text-6xl leading-none">
          {formatAud(GLOW_CLUB.monthly)}
          <span className="font-sans text-base font-normal text-on-dark-muted"> / month</span>
        </p>
        <p className="text-on-dark text-sm mt-3">{GLOW_CLUB.tansPerMonth} tans a month. Under $30 a tan.</p>
        <p className="text-bronze-light text-sm font-medium mt-1.5">
          {GLOW_CLUB.tansPerMonth} casual tans would cost {formatAud(GLOW_CLUB.casualEquivalent)}. You save{" "}
          {formatAud(GLOW_CLUB.monthlySaving)} a month.
        </p>
        <div className="border-t border-white/15 my-6" />
        <ul className="space-y-3 text-on-dark text-[15px] flex-1 mb-8">
          <Feature dark>{GLOW_CLUB.tansPerMonth} automated spray tans every month</Feature>
          <Feature dark>
            {GLOW_CLUB.minimumMonths} month minimum ({formatAud(GLOW_CLUB.minimumTotal)} in base payments), then month to month
          </Feature>
          <Feature dark>Birthday tan on us</Feature>
          <Feature dark>Founding member perks</Feature>
        </ul>
        {glowClubAction === "join" ? (
          <a
            href={GLOW_CLUB_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("glow_club_join_click", { source, plan: "membership" })}
            className="btn btn-light w-full"
          >
            Join Glow Club
          </a>
        ) : (
          <Link
            href="/glow-club"
            onClick={() => trackEvent("glow_club_click", { source })}
            className="btn btn-light w-full"
          >
            See Glow Club
          </Link>
        )}
      </div>
    </div>
  );
}
