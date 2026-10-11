import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/locations";
import { CONTACT, SUPPORT_HOURS_LINE } from "@/lib/site";
import { PRICE_TEXT } from "@/lib/pricing";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: `Give someone a spray tan. Ask us about Tanned Co. gift cards: call ${CONTACT.phone} or email ${CONTACT.email}.`,
  alternates: { canonical: `${SITE_URL}/gift-cards` },
};

/*
 * FLAG for Hass: Tanned Co. sells gift cards, but no public purchase link was found
 * (Oct 2026: live site /gift-cards 404; GymMaster portal shop needs a login; the
 * GymMaster booking form only has an "Apply Gift Voucher" field to redeem one).
 * So this page sends people to the phone line and email. No prices or terms here.
 * When there's a public purchase URL, add a button to it and use only the wording
 * and prices shown there.
 */

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={breadcrumbSchema([{ name: "Gift cards", path: "/gift-cards" }])} />
      <Navbar activePath="/gift-cards" />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">Gift a tan</p>
          <h1 className="display-xl">Ask us about gift cards.</h1>
          <p className="text-body text-lg leading-relaxed mt-6">
            Want to give someone a tan? Call or email us and we&apos;ll sort out a Tanned Co. gift card.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="eyebrow mb-1">Call</dt>
              <dd>
                <a href={CONTACT.phoneHref} className="text-link text-lg">{CONTACT.phone}</a>
                <p className="text-sm text-muted mt-1">{SUPPORT_HOURS_LINE}</p>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}?subject=Gift%20card`} className="text-link text-lg">{CONTACT.email}</a>
              </dd>
            </div>
          </dl>
          <div className="mt-10 bg-white rounded-3xl border border-line p-7">
            <h2 className="text-lg font-semibold mb-2">Got a gift voucher?</h2>
            <p className="text-body leading-relaxed mb-5">Enter your voucher code when you book online.</p>
            <Link href="/book-now" className="btn btn-dark">{PRICE_TEXT.bookTan}</Link>
          </div>
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
