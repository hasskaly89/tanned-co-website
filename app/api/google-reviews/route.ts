import { NextResponse } from "next/server";
import { LOCATIONS } from "@/lib/locations";
import { getPlaceReviews } from "@/lib/google-reviews";

// Combined Google rating, review count and latest reviews across all studios,
// for the homepage. Each studio lookup is cached for a day.
export async function GET() {
  const results = await Promise.all(LOCATIONS.map(async (loc) => ({ loc, g: await getPlaceReviews(loc) })));
  const found = results.filter((r) => r.g);
  if (!found.length) return NextResponse.json({ available: false });

  const total = found.reduce((n, r) => n + r.g!.total, 0);
  const rating = found.reduce((n, r) => n + r.g!.rating * r.g!.total, 0) / total;

  // Up to 2 five-star reviews per studio, interleaved so every studio is represented.
  const perStudio = found.map((r) =>
    r.g!.reviews.filter((rv) => rv.rating === 5).slice(0, 2).map((rv) => ({ ...rv, studio: r.loc.shortName }))
  );
  const reviews = [];
  for (let i = 0; i < 2; i++) for (const list of perStudio) if (list[i]) reviews.push(list[i]);

  return NextResponse.json({
    available: true,
    rating: Math.round(rating * 10) / 10,
    total,
    studios: found.map((r) => ({ slug: r.loc.slug, name: r.loc.shortName, rating: r.g!.rating, total: r.g!.total, url: r.g!.mapsUrl ?? r.loc.mapsUrl })),
    reviews: reviews.slice(0, 8),
  });
}
