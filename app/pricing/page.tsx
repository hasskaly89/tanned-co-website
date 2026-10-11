import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import PageHero from "@/components/PageHero";
import PricingPlans from "@/components/PricingPlans";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { GLOW_CLUB, formatAud } from "@/lib/pricing";

const pricingFaqs = [
  {
    q: "Can I share my pack with someone else?",
    a: "Our packs are name-specific and linked to your account. They cannot be shared or transferred.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, Apple Pay and Google Pay via our app and booking portal.",
  },
  {
    q: "Can I get a refund on unused sessions?",
    a: "Sessions are non-refundable but can be transferred to another booking date within the validity period.",
  },
  {
    q: "Is there a minimum commitment?",
    a: `Casual tans and the 10 pack have no commitment. Glow Club has a ${GLOW_CLUB.minimumMonths} month minimum, which is ${formatAud(GLOW_CLUB.minimumTotal)} in base membership payments (${GLOW_CLUB.minimumMonths} x ${formatAud(GLOW_CLUB.monthly)}). To leave before then, you pay out the rest of the minimum term. After that it continues month to month, and you can cancel by emailing ${GLOW_CLUB.cancelEmail}.`,
  },
  {
    q: "Do unused Glow Club tans roll over?",
    a: `No. Your ${GLOW_CLUB.tansPerMonth} tans need to be used within each month.`,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/pricing" />

      <PageHero
        eyebrow="Transparent and simple"
        title="Simple, honest pricing."
        intro="Upfront prices. No awkward upsells. Just beautiful tans."
        image="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
        imageAlt="A Tanned Co. spray tan result"
      />

      <section className="py-14 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our pricing"
            title="Three ways to glow."
            intro="Pick what suits you. Every option works at all 5 Sydney studios."
          />
          <PricingPlans source="pricing_page" glowClubAction="join" />
          <p className="text-center text-body text-sm mt-10 max-w-2xl mx-auto">
            All 5 Sydney studios open today. Book online in under 60 seconds. Casual tans have no commitment.{" "}
            <Link href="/terms" className="text-link">Read the purchase terms</Link>
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-14 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="Pricing questions" title="Common questions." />
          <FaqAccordion items={pricingFaqs} />
          <p className="text-center mt-10">
            <Link href="/faq" className="text-link">See all FAQs</Link>
          </p>
        </div>
      </section>

      <CtaBand source="pricing_cta" title="Book your first tan." />

      <Footer />
    </div>
  );
}
