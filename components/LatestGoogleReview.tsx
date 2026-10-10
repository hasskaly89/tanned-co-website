"use client";

import { useEffect, useState } from "react";
import type { GoogleReview } from "@/lib/google-reviews";
import { Stars } from "@/components/Icons";
import RepuReviews from "@/components/RepuReviews";

type Review = GoogleReview & { studio: string };

/**
 * One genuine review from the live Google feed (/api/google-reviews), shown with
 * Google attribution. Renders nothing until a review loads, and nothing at all
 * if the feed is unavailable, so there is never a placeholder or invented quote.
 * When Google is unavailable and a Repu widget key is given, the live Repu
 * reviews widget is shown instead (it collapses itself if it has no reviews).
 */
export default function LatestGoogleReview({ className = "", repuFallbackKey }: { className?: string; repuFallbackKey?: string }) {
  const [review, setReview] = useState<Review | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/google-reviews")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled) return;
        if (d?.available && d.reviews?.length) setReview(d.reviews[0]);
        else setUnavailable(true);
      })
      .catch(() => {
        if (!cancelled) setUnavailable(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!review) {
    if (!unavailable || !repuFallbackKey) return null;
    return (
      <div className={`bg-white rounded-[28px] border border-line p-5 min-w-0 ${className}`}>
        <RepuReviews widgetKey={repuFallbackKey} heading={<p className="eyebrow mb-3 px-2 pt-2">From a recent review</p>} />
      </div>
    );
  }

  return (
    <figure className={`bg-white rounded-[28px] border border-line p-7 md:p-8 ${className}`}>
      <p className="eyebrow mb-4">From a recent Google review</p>
      <Stars count={review.rating} />
      <blockquote className="text-ink/90 leading-relaxed mt-4 line-clamp-[8]">&ldquo;{review.text}&rdquo;</blockquote>
      <figcaption className="text-sm mt-5">
        <span className="block font-medium text-ink">
          {review.authorUrl ? (
            <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{review.author}</a>
          ) : (
            review.author
          )}
        </span>
        <span className="block text-xs text-muted mt-0.5">
          {review.relativeTime} on Google · {review.studio}
        </span>
      </figcaption>
    </figure>
  );
}
