import { LOCATIONS, SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg";

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
];

/** Renders one JSON-LD <script> per location (or just for a single location when slug provided). */
export default function LocalBusinessSchema({ slug }: { slug?: string }) {
  const locs = slug ? LOCATIONS.filter((l) => l.slug === slug) : LOCATIONS;

  const schemas = locs.map((loc) => ({
    "@context": "https://schema.org",
    "@type": "BeautyBusiness",
    "@id": `${SITE_URL}/locations/${loc.slug}`,
    name: loc.fullName,
    description:
      "Sydney's automated spray tanning studio — private VersaSpa booths, streak-free results, open 7 days.",
    image: OG_IMAGE,
    url: `${SITE_URL}/locations/${loc.slug}`,
    telephone: "+611300826633",
    priceRange: "$$",
    servesCuisine: undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.suburb,
      addressRegion: loc.state,
      postalCode: loc.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.lat,
      longitude: loc.lng,
    },
    hasMap: loc.mapsUrl,
    openingHoursSpecification: OPENING_HOURS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      "http://instagram.com/tannedco_",
      "https://www.tiktok.com/@tannedco_",
      "https://www.facebook.com/profile.php?id=100086326464692",
    ],
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
