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
    return locationSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/locations/${slug}`,
      permanent: true, // 301 — tells Google to transfer ranking to new URL
    }));
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
    ],
  },
};

export default nextConfig;
