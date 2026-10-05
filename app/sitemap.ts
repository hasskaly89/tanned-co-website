import { MetadataRoute } from "next";
import { LOCATIONS, SITE_URL } from "@/lib/locations";

// lastModified is intentionally omitted: stamping every URL with the build time
// tells search engines nothing. Add real dates per page when content changes.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL },
    { url: `${SITE_URL}/about` },
    { url: `${SITE_URL}/how-it-works` },
    { url: `${SITE_URL}/pricing` },
    { url: `${SITE_URL}/glow-club` },
    { url: `${SITE_URL}/faq` },
    { url: `${SITE_URL}/contact` },
    { url: `${SITE_URL}/locations` },
    { url: `${SITE_URL}/book-now` },
    { url: `${SITE_URL}/privacy-policy` },
    { url: `${SITE_URL}/terms` },
    { url: `${SITE_URL}/franchise` },
  ];

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.slug}`,
  }));

  return [...staticPages, ...locationPages];
}
