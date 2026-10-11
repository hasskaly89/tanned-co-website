import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/locations";
import { CONTACT, GIFT_CARDS, SUPPORT_HOURS_LINE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Give someone a spray tan. Buy a Tanned Co. gift card online, valid for 3 years and redeemable when booking at any of our 5 Sydney studios.",
  alternates: { canonical: `${SITE_URL}/gift-cards` },
};

// Purchase link, steps and terms live in GIFT_CARDS in lib/site.ts.
// Terms per GymMaster admin, pending Hass confirmation. No voucher amounts.

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={breadcrumbSchema([{ name: "Gift cards", path: "/gift-cards" }])} />
      <Navbar activePath="/gift-cards" />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">Gift cards</p>
          <h1 className="display-xl">Gift a tan.</h1>
          <p className="text-body text-lg leading-relaxed mt-6">
            Tanned Co. gift cards are bought online in our booking portal.
          </p>
          <a href={GIFT_CARDS.shopUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-8">
            Buy a gift card
          </a>
          <p className="text-sm text-muted mt-3">Opens our booking portal in a new tab.</p>
          <div className="mt-10 bg-white rounded-3xl border border-line p-7">
            <h2 className="text-lg font-semibold mb-2">How it works</h2>
            <p className="text-body leading-relaxed">{GIFT_CARDS.steps}</p>
            <p className="text-body leading-relaxed mt-3">{GIFT_CARDS.terms}</p>
          </div>
          <p className="text-body leading-relaxed mt-8">
            Questions? Call <a href={CONTACT.phoneHref} className="text-link">{CONTACT.phone}</a> ({SUPPORT_HOURS_LINE.split(".")[0]}) or email{" "}
            <a href={`mailto:${CONTACT.email}?subject=Gift%20card`} className="text-link">{CONTACT.email}</a>.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="/locations-hero.jpg"
            alt="Inside a Tanned Co. studio: the lit Tanned Co. sign and waiting area"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
