export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

export interface PlaceReviewsResult {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

export async function getGoogleReviews(placeId: string): Promise<PlaceReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 86400 } } // cache for 24 hours
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== "OK") return null;

    return {
      reviews: (data.result.reviews ?? []).filter((r: GoogleReview) => r.text && r.text.length > 20),
      rating: data.result.rating ?? 0,
      user_ratings_total: data.result.user_ratings_total ?? 0,
    };
  } catch {
    return null;
  }
}
