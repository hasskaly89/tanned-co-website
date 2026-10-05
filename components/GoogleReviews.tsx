"use client";

import { useEffect, useState } from "react";
import { LOCATIONS } from "@/lib/locations";
import type { GoogleReview } from "@/lib/google-reviews";

type Summary = {
  available: boolean;
  rating?: number;
  total?: number;
  studios?: { slug: string; name: string; rating: number; total: number; url: string }[];
  reviews?: (GoogleReview & { studio: string })[];
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} aria-hidden="true" className={`w-4 h-4 ${i < count ? "text-[#fbbc04]" : "text-[#e8d9c3]"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Homepage reviews: live Google rating and reviews across all 5 studios. */
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">What Clients Are Saying</p>
            <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight">Real Glows. Real Reviews.</h2>
          </div>
          {live && (
            <div className="flex items-center gap-4 bg-[#fdf6ec] border border-[#e8d9c3] rounded-2xl px-6 py-4 flex-shrink-0">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-[#1a1a1a]">{live.rating!.toFixed(1)}</span>
                  <Stars count={Math.round(live.rating!)} />
                </div>
                <p className="text-xs text-[#5a4a3a] mt-0.5">{live.total} Google reviews across 5 studios</p>
              </div>
            </div>
          )}
        </div>

        {live && live.reviews && live.reviews.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {live.reviews.map((r, i) => (
              <figure key={`${r.author}-${i}`} className="bg-[#fdf6ec] rounded-2xl p-6 border border-[#e8d9c3] flex flex-col gap-3">
                <Stars count={r.rating} />
                <blockquote className="text-[#3a2e24] text-sm leading-relaxed flex-1">&ldquo;{r.text.length > 280 ? `${r.text.slice(0, 277).trimEnd()}…` : r.text}&rdquo;</blockquote>
                <figcaption className="border-t border-[#e8d9c3] pt-3">
                  <p className="font-bold text-[#1a1a1a] text-sm">{r.author}</p>
                  <p className="text-[#a46746] text-xs tracking-wider">{r.studio} · {r.relativeTime} on Google</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#a46746] mb-3">Read our reviews on Google</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((s) => (
              <a key={s.slug} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#3a2e24] underline decoration-[#a46746]/40 underline-offset-4 hover:decoration-[#a46746]">
                {s.name}{s.total ? ` (${s.total})` : ""}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
