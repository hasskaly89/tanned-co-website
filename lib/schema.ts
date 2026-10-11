// JSON-LD builders. Everything comes from lib/locations.ts, lib/pricing.ts and
// lib/site.ts so the structured data always matches the visible copy.
// No review stars or aggregateRating anywhere: Google requires review markup to
// match reviews shown on the page, and ratings here come from third parties.
import { LOCATIONS, SCHEMA_OPENING_HOURS, SITE_URL, phoneToE164, bookingUrlFor, GLOW_CLUB_SIGNUP_URL, type LocationData } from "@/lib/locations";
import { CASUAL, GLOW_CLUB, TEN_PACK } from "@/lib/pricing";
import { CONTACT, LEGAL_ENTITY, SOCIAL_LINKS } from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO = `${SITE_URL}/logo_transparent.png`;
const DEFAULT_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg";

export const studioId = (loc: LocationData) => `${SITE_URL}/locations/${loc.slug}#studio`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Tanned Co.",
    ...(LEGAL_ENTITY ? { legalName: LEGAL_ENTITY.name, taxID: LEGAL_ENTITY.abn } : {}),
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO },
    email: CONTACT.email,
    telephone: phoneToE164(CONTACT.phone),
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok, SOCIAL_LINKS.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneToE164(CONTACT.phone),
        email: CONTACT.email,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: "English",
        hoursAvailable: SCHEMA_OPENING_HOURS,
      },
    ],
    department: LOCATIONS.map((loc) => ({ "@id": studioId(loc) })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Tanned Co.",
    url: SITE_URL,
    inLanguage: "en-AU",
    publisher: { "@id": ORG_ID },
  };
}

/** One BeautySalon (a LocalBusiness subtype) per studio. */
export function studioSchema(loc: LocationData, withContext = true) {
  return {
    ...(withContext ? { "@context": "https://schema.org" } : {}),
    "@type": "BeautySalon",
    "@id": studioId(loc),
    name: loc.fullName,
    url: `${SITE_URL}/locations/${loc.slug}`,
    image: loc.storefrontImage ?? loc.heroImage ?? DEFAULT_IMAGE,
    logo: LOGO,
    telephone: phoneToE164(loc.phone),
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.suburb,
      addressRegion: loc.state,
      postalCode: loc.postcode,
      addressCountry: "AU",
    },
    geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
    hasMap: loc.mapsUrl,
    openingHoursSpecification: SCHEMA_OPENING_HOURS,
    parentOrganization: { "@id": ORG_ID },
  };
}

export function studioListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tanned Co. studios",
    itemListElement: LOCATIONS.map((loc, i) => ({ "@type": "ListItem", position: i + 1, item: studioSchema(loc, false) })),
  };
}

export type SchemaPlan = "casual" | "tenPack" | "glowClub";

/** Spray tan service with the plans that are visible on the page. */
export function serviceSchema(plans: SchemaPlan[], loc?: LocationData) {
  const offer = (plan: SchemaPlan) => {
    const url = plan === "glowClub" ? (loc ? `${SITE_URL}/glow-club` : GLOW_CLUB_SIGNUP_URL) : loc ? bookingUrlFor(loc, plan) : `${SITE_URL}/book-now`;
    if (plan === "casual")
      return { "@type": "Offer", name: "Casual spray tan", price: CASUAL.price, priceCurrency: "AUD", url, availability: "https://schema.org/InStock" };
    if (plan === "tenPack")
      return {
        "@type": "Offer",
        name: `${TEN_PACK.sessions} pack`,
        description: `${TEN_PACK.sessions} spray tan sessions, valid for ${TEN_PACK.validity} from purchase.`,
        price: TEN_PACK.price,
        priceCurrency: "AUD",
        url,
        availability: "https://schema.org/InStock",
      };
    return {
      "@type": "Offer",
      name: "Glow Club membership",
      description: `${GLOW_CLUB.tansPerMonth} spray tans a month. ${GLOW_CLUB.minimumMonths} month minimum, then month to month.`,
      price: GLOW_CLUB.monthly,
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: GLOW_CLUB.monthly,
        priceCurrency: "AUD",
        unitCode: "MON",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
      },
      url,
      availability: "https://schema.org/InStock",
    };
  };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automated spray tan",
    serviceType: "Spray tanning",
    provider: loc ? { "@id": studioId(loc) } : { "@id": ORG_ID },
    areaServed: loc ? { "@type": "Place", name: `${loc.suburb} ${loc.state}` } : { "@type": "City", name: "Sydney" },
    offers: plans.map(offer),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

/** BreadcrumbList for an inner page. Pass the trail after Home. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}
