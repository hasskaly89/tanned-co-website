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
    <div className="flex gap-2.5 mt-auto">
      <Link
        href={`/locations/${slug}`}
        onClick={() =>
          trackEvent("location_view_click", {
            location_slug: slug,
            location_name: shortName,
            source: "locations_grid",
          })
        }
        className="btn btn-dark flex-1 !px-4 !py-3 !text-sm"
      >
        View studio
      </Link>
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
        className="btn btn-outline flex-1 !px-4 !py-3 !text-sm"
      >
        Directions
      </a>
    </div>
  );
}
