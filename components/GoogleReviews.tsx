"use client";

import { useEffect, useState } from "react";
import { LOCATIONS } from "@/lib/locations";
import type { GoogleReview } from "@/lib/google-reviews";
import RepuReviews from "@/components/RepuReviews";
import { Stars } from "@/components/Icons";

type Summary = {
  available: boolean;
  rating?: number;
  total?: number;
  studios?: { slug: string; name: string; rating: number; total: number; url: string }[];
  reviews?: (GoogleReview & { studio: string })[];
};

/** Homepage reviews: Repu reviews widget, plus the live Google rating and review count across all 5 studios when the Places API key is set. */
export default function GoogleReviews() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((r) => (r.ok ? r.json() : { available: false }))
      .then(setData)
      .catch(() => setData({ available: false }));
  }, []);

  const live = data?.available ? data : null;
  const links = live?.studios ?? LOCATIONS.map((l) => ({ slug: l.slug, name: l.shortName, url: l.mapsUrl, total: 0, rating: 0 }));

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What clients are saying</p>
            <h2 className="display-lg">Real glows, real reviews.</h2>
          </div>
          {live && (
            <div className="flex items-center gap-4 bg-white border border-line rounded-2xl px-6 py-4 shrink-0 self-start md:self-auto">
              <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-medium text-3xl leading-none text-ink">{live.rating!.toFixed(1)}</span>
                  <Stars count={Math.round(live.rating!)} />
                </div>
                <p className="text-xs text-body mt-1">{live.total} Google reviews across 5 studios</p>
              </div>
            </div>
          )}
        </div>

        <RepuReviews />

        <div className="text-center mt-10">
          <p className="eyebrow mb-4">Read our reviews on Google</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((s) => (
              <a key={s.slug} href={s.url} target="_blank" rel="noopener noreferrer" className="text-link">
                {s.name}{s.total ? ` (${s.total})` : ""}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
