import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FranchiseForm from "./FranchiseForm";
import { LOCATIONS, SITE_URL } from "@/lib/locations";
import { FRANCHISE_CONTACT, FRANCHISE_SHOW_COMPANY_OWNED, FRANCHISE_SHOW_HASS_MOBILE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Own a Tanned Co. Studio | Franchise Opportunities" },
  description:
    "Tanned Co. is now franchising across Australia. Private, automated spray tan studios. Send an enquiry or contact our director directly.",
  alternates: { canonical: `${SITE_URL}/franchise` },
};

/*
 * Short page by Hass's call (11 Oct 2026): intro, who we're looking for, enquiry
 * form and his direct contact. No figures, process steps, fee model, support lists
 * or legal detail. Those are covered on the first call and in the franchise
 * documents ("no royalty", process order and Franchising Code lines still need
 * franchise lawyer sign-off before they appear anywhere).
 */

const IMG = "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946";

// Existing site photography only. No swimwear or body shots on this page.
const studioPhotos = [
  { src: `${IMG}/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg`, alt: "The Tanned Co. Caringbah shopfront" },
  { src: "/locations-hero.jpg", alt: "Inside a Tanned Co. studio: the lit Tanned Co. sign and waiting area" },
];

const studiosText = FRANCHISE_SHOW_COMPANY_OWNED
  ? `${LOCATIONS.length} company-owned Sydney studios`
  : `${LOCATIONS.length} Sydney studios`;

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <JsonLd data={breadcrumbSchema([{ name: "Franchise", path: "/franchise" }])} />
      <Navbar activePath="/franchise" />

      <header className="max-w-6xl mx-auto px-6 pt-32 pb-14 md:pt-40 md:pb-20 grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">Franchise opportunities</p>
          <h1 className="display-xl">Own a Tanned Co. studio.</h1>
          <p className="text-body text-lg leading-relaxed mt-6">
            Tanned Co. is private, automated spray tanning, with {studiosText}. Now we&apos;re franchising across
            Australia.
          </p>
          <p className="text-body text-lg leading-relaxed mt-4">
            We&apos;re looking for people who get the brand, are happy to follow the Tanned Co. system and want
            to build something in their local area. You don&apos;t need to be a tanning expert. Spray tanning is for
            everyone, and so is owning a studio.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
            <a href="#enquire" className="btn btn-dark">Send a franchise enquiry</a>
            <a href={`mailto:${FRANCHISE_CONTACT.email}`} className="text-link">{FRANCHISE_CONTACT.email}</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {studioPhotos.map((p) => (
            <div key={p.src} className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src={p.src} alt={p.alt} fill priority sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </header>

      <section id="enquire" className="py-14 md:py-28 bg-sand scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-start">
          <div>
            <p className="eyebrow mb-4">Enquire</p>
            <h2 className="display-lg mb-6">Let&apos;s talk about your area.</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Tell us where you&apos;d like to open and when.
              {FRANCHISE_SHOW_HASS_MOBILE && ` Or contact ${FRANCHISE_CONTACT.name}, ${FRANCHISE_CONTACT.role}, directly.`}
            </p>
            <dl className="space-y-4">
              {FRANCHISE_SHOW_HASS_MOBILE && (
                <div>
                  <dt className="eyebrow mb-1">{FRANCHISE_CONTACT.name.split(" ")[0]}&apos;s mobile</dt>
                  <dd><a href={FRANCHISE_CONTACT.mobileHref} className="text-link">{FRANCHISE_CONTACT.mobile}</a></dd>
                </div>
              )}
              <div>
                <dt className="eyebrow mb-1">Email</dt>
                <dd><a href={`mailto:${FRANCHISE_CONTACT.email}`} className="text-link">{FRANCHISE_CONTACT.email}</a></dd>
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
