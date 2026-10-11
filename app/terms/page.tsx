import { FIRST_TIMER_OFFER } from "@/lib/consent";
import { BOOKING_SLOT_LINE } from "@/lib/site";
import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/locations";
import { CASUAL, GLOW_CLUB, TEN_PACK, formatAud, DISHONOUR_FEE, PRICE_TEXT } from "@/lib/pricing";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// DRAFT for owner review, built from the terms confirmed in October 2026.
// TODO(next push): add the legal entity name(s) and ABN(s), and the failed-payment fee once confirmed.

export const metadata: Metadata = {
  title: "Purchase Terms",
  description: "Terms for casual tans, 10 packs, Glow Club membership and the first-timer offer at Tanned Co.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage title="Purchase Terms" updated="October 2026" activePath="/terms">
      <JsonLd data={breadcrumbSchema([{ name: "Purchase terms", path: "/terms" }])} />
      <section>
        <p>
          These terms apply to tans, packs and memberships bought from Tanned Co. through our website, booking portal
          or app. Prices are in Australian dollars. Nothing in these terms limits your rights under the Australian
          Consumer Law.
        </p>
      </section>

      <section>
        <h2>Casual tans</h2>
        <ul>
          <li>{formatAud(CASUAL.price)} per session.</li>
          <li>You choose a studio and time, then pay when you book.</li>
        </ul>
      </section>

      <section>
        <h2>10 pack</h2>
        <ul>
          <li>{formatAud(TEN_PACK.price)} for {TEN_PACK.sessions} sessions ({formatAud(TEN_PACK.perTan)} per tan).</li>
          <li>Valid for {TEN_PACK.validity} from purchase. Sessions not used in that time expire.</li>
          <li>Packs are in your name and cannot be shared or transferred.</li>
          <li>Sessions are not refundable, except where required by the Australian Consumer Law, but you can move a booking to another date within the validity period.</li>
        </ul>
      </section>

      <section>
        <h2>Glow Club membership</h2>
        <ul>
          <li>{formatAud(GLOW_CLUB.monthly)} per month, paid by direct debit, for {GLOW_CLUB.tansPerMonth} tans a month.</li>
          <li>Unused tans do not roll over. Your {GLOW_CLUB.tansPerMonth} tans need to be used within each month.</li>
          <li>
            There is a {GLOW_CLUB.minimumMonths} month minimum term ({PRICE_TEXT.glowClubMinimum}).
            To cancel before the minimum term ends, you pay the remaining months of the minimum term.
          </li>
          <li>After the minimum term, the membership continues month to month. Cancel by emailing {GLOW_CLUB.cancelEmail}.</li>
          <li>Members receive a Glow Key for access to all 5 Sydney studios.</li>
        </ul>
      </section>

      <section>
        <h2>First-timer offer</h2>
        <ul>
          <li>{FIRST_TIMER_OFFER.headline[0].toUpperCase() + FIRST_TIMER_OFFER.headline.slice(1)}. {FIRST_TIMER_OFFER.terms}</li>
          <li>We send the code to your mobile by SMS. Enter it at checkout in the Tanned Co. app.</li>
        </ul>
      </section>

      <section>
        <h2>Payments</h2>
        <p>We accept major credit and debit cards, Apple Pay and Google Pay in the app and booking portal.</p>
        <p>A {formatAud(DISHONOUR_FEE)} fee applies if a payment is dishonoured.</p>
      </section>

      <section>
        <h2>Arriving for your tan</h2>
        <p>
          5 minutes before your booking, tap Check In in the Tanned Co. app at the Bluetooth reader to open the studio.
          At your start time, check in again to open your tan room. {BOOKING_SLOT_LINE}
        </p>
      </section>

      <section>
        <h2>Questions</h2>
        <p>Email hello@tannedco.com.au or call 1300 826 633.</p>
      </section>
    </LegalPage>
  );
}
