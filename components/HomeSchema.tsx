import { LOCATIONS, SCHEMA_OPENING_HOURS, SITE_URL, phoneToE164 } from "@/lib/locations";

const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg";

// Structured data is generated from lib/locations.ts so hours, phones and
// coordinates cannot drift. No aggregateRating: Google requires review markup
// to match reviews visible on the page.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Tanned Co.",
  url: SITE_URL,
  telephone: "+611300826633",
  email: "hello@tannedco.com.au",
  description:
    "Sydney's first automated spray tanning studio. Private VersaSpa booths, even results, open 7 days.",
  image: HERO_IMAGE,
  priceRange: "$$",
  openingHoursSpecification: SCHEMA_OPENING_HOURS,
  sameAs: [
    "https://instagram.com/tannedco_",
    "https://www.tiktok.com/@tannedco_",
    "https://www.facebook.com/profile.php?id=100086326464692",
  ],
};

const LOCATION_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: LOCATIONS.map((loc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "BeautySalon",
      "@id": `${SITE_URL}/locations/${loc.slug}`,
      name: loc.fullName,
      url: `${SITE_URL}/locations/${loc.slug}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.suburb,
        addressRegion: loc.state,
        postalCode: loc.postcode,
        addressCountry: "AU",
      },
      geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
      telephone: phoneToE164(loc.phone),
      email: "hello@tannedco.com.au",
      priceRange: "$$",
      openingHoursSpecification: SCHEMA_OPENING_HOURS,
    },
  })),
};

export default function HomeSchema() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCATION_LIST_SCHEMA) }} />
    </>
  );
}
