import type { LocationData } from "@/lib/locations";

// Live Google reviews via the Places API (New). Needs GOOGLE_PLACES_API_KEY with
// "Places API (New)" enabled. Google returns the rating, the total review count
// and at most 5 reviews per place; the full list stays on Google Maps.

export interface GoogleReview {
  author: string;
  authorUrl?: string;
  photoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface PlaceReviews {
  rating: number;
  total: number;
  reviews: GoogleReview[];
  mapsUrl?: string;
}

const API_BASE = process.env.GOOGLE_PLACES_API_BASE ?? "https://places.googleapis.com";
const FIELDS = ["places.id", "places.displayName", "places.rating", "places.userRatingCount", "places.reviews", "places.googleMapsUri"].join(",");
const DAY = 86400;

type ApiReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};
type ApiPlace = {
  id?: string;
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: ApiReview[];
  googleMapsUri?: string;
};

/** Finds the studio on Google by name and address, then returns its rating and latest reviews. */
export async function getPlaceReviews(loc: LocationData): Promise<PlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(`${API_BASE}/v1/places:searchText`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": FIELDS },
      body: JSON.stringify({
        textQuery: `Tanned Co ${loc.shortName}, ${loc.fullAddress}`,
        locationBias: { circle: { center: { latitude: loc.lat, longitude: loc.lng }, radius: 1000 } },
        maxResultCount: 3,
        languageCode: "en",
      }),
      next: { revalidate: DAY },
    });
    if (!res.ok) {
      console.error(`Google Places ${loc.shortName}: ${res.status} ${await res.text().catch(() => "")}`.slice(0, 300));
      return null;
    }
    const data = (await res.json()) as { places?: ApiPlace[] };
    // Only accept a Tanned Co listing, never a nearby business.
    const place = data.places?.find((p) => /tanned\s*co/i.test(p.displayName?.text ?? ""));
    if (!place || !place.userRatingCount) return null;

    return {
      rating: place.rating ?? 0,
      total: place.userRatingCount,
      mapsUrl: place.googleMapsUri,
      reviews: (place.reviews ?? [])
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google user",
          authorUrl: r.authorAttribution?.uri,
          photoUrl: r.authorAttribution?.photoUri,
          rating: r.rating ?? 0,
          text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
          relativeTime: r.relativePublishTimeDescription ?? "",
        }))
        .filter((r) => r.text.length > 20),
    };
  } catch (err) {
    console.error(`Google Places ${loc.shortName} failed:`, err);
    return null;
  }
}
