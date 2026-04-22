"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function LocationCardButtons({
  slug,
  shortName,
  mapsUrl,
}: {
  slug: string;
  shortName: string;
  mapsUrl: string;
}) {
  return (
    <div className="flex gap-2 mt-auto">
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("directions_click", {
            location_slug: slug,
            location_name: shortName,
          })
        }
        className="flex-1 inline-flex items-center justify-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
      >
        Directions →
      </a>
      <Link
        href={`/locations/${slug}`}
        onClick={() =>
          trackEvent("location_view_click", {
            location_slug: slug,
            location_name: shortName,
            source: "locations_grid",
          })
        }
        className="flex-1 inline-flex items-center justify-center border-2 border-[#a46746] text-[#a46746] py-2.5 rounded-full text-sm font-semibold hover:bg-[#a46746] hover:text-white transition-colors"
      >
        View Studio
      </Link>
    </div>
  );
}
