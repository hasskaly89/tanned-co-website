import Image from "next/image";
import type { GoogleReview } from "@/lib/google-reviews";
import { Stars } from "@/components/Icons";

/** Review cards for live Google reviews, with the attribution Google requires. */
export default function GoogleReviewCards({ reviews, studio }: { reviews: GoogleReview[]; studio?: string }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
      {reviews.map((r, i) => (
        <figure key={`${r.author}-${i}`} className="break-inside-avoid bg-white rounded-3xl border border-line p-7">
          <Stars count={r.rating} />
          <blockquote className="text-ink/90 leading-relaxed mt-4">&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption className="flex items-center gap-3 mt-5">
            {r.photoUrl && <Image src={r.photoUrl} alt="" width={36} height={36} className="rounded-full" unoptimized />}
            <span>
              {r.authorUrl ? (
                <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-ink hover:underline">
                  {r.author}
                </a>
              ) : (
                <span className="block text-sm font-medium text-ink">{r.author}</span>
              )}
              <span className="block text-xs text-muted">
                {r.relativeTime} on Google{studio ? ` · ${studio}` : ""}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
