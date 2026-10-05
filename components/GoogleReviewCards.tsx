import Image from "next/image";
import type { GoogleReview } from "@/lib/google-reviews";

/** Review cards for live Google reviews, with the attribution Google requires. */
export default function GoogleReviewCards({ reviews, studio }: { reviews: GoogleReview[]; studio?: string }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
      {reviews.map((r, i) => (
        <figure key={`${r.author}-${i}`} className="break-inside-avoid bg-white rounded-2xl p-6 border border-[#e8d9c3]">
          <figcaption className="flex items-center gap-3 mb-3">
            {r.photoUrl && (
              <Image src={r.photoUrl} alt="" width={36} height={36} className="rounded-full" unoptimized />
            )}
            <div>
              {r.authorUrl ? (
                <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] hover:underline">
                  {r.author}
                </a>
              ) : (
                <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">{r.author}</p>
              )}
              <p className="text-xs text-[#5a4a3a]">
                {r.relativeTime} on Google{studio ? ` · ${studio}` : ""}
              </p>
            </div>
          </figcaption>
          <div className="flex gap-0.5 mb-3" aria-label={`${r.rating} out of 5 stars`}>
            {[...Array(5)].map((_, n) => (
              <span key={n} aria-hidden="true" className={`text-sm ${n < r.rating ? "text-[#a46746]" : "text-gray-300"}`}>★</span>
            ))}
          </div>
          <blockquote className="text-[#3a2e24] text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
        </figure>
      ))}
    </div>
  );
}
