import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 301 redirects from old Squarespace root slugs → new /locations/[slug] pages
    // Preserves Google rankings for all indexed location URLs
    const locationSlugs = [
      "caringbah",
      "woollahra",
      "edensor-park",
      "kings-park",
      "smeaton-grange",
    ];
    // Old Squarespace URLs and common variants. statusCode 301 (permanent).
    // Only /privacy and the studio slugs are known old URLs; the rest are safe catch-alls.
    // Check Google Search Console (Pages > Not found) after launch and add any others here.
    const legacy: [string, string][] = [
      ["/privacy", "/privacy-policy"],
      ["/privacy-1", "/privacy-policy"],
      ["/terms-and-conditions", "/terms"],
      ["/terms-of-service", "/terms"],
      ["/book", "/book-now"],
      ["/book-online", "/book-now"],
      ["/booking", "/book-now"],
      ["/faqs", "/faq"],
      ["/contact-us", "/contact"],
      ["/about-us", "/about"],
      ["/our-story", "/about"],
      ["/membership", "/glow-club"],
      ["/memberships", "/glow-club"],
      ["/glowclub", "/glow-club"],
      ["/franchising", "/franchise"],
      ["/locations-1", "/locations"],
      ["/home", "/"],
    ];
    return [
      ...locationSlugs.map((slug) => ({ source: `/${slug}`, destination: `/locations/${slug}`, statusCode: 301 as const })),
      ...legacy.map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/**",
      },
      // Instagram / Facebook CDN domains
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
        pathname: "/**",
      },
      // Google review author photos
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
