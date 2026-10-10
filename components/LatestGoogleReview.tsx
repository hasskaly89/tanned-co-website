"use client";

import { useEffect, useState } from "react";
import type { GoogleReview } from "@/lib/google-reviews";
import { Stars } from "@/components/Icons";

type Review = GoogleReview & { studio: string };

/**
 * One genuine review from the live Google feed (/api/google-reviews), shown with
 * Google attribution. Renders nothing until a review loads, and nothing at all
 * if the feed is unavailable, so there is never a placeholder or invented quote.
 */
export default function LatestGoogleReview({ className = "" }: { className?: string }) {
  const [review, setReview] = useState<Review | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/google-reviews")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d?.available && d.reviews?.length) setReview(d.reviews[0]);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!review) return null;

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
