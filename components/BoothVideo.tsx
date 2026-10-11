import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { BOOTH_VIDEO, BOOTH_VIDEO_SECTION } from "@/lib/site";

/**
 * Booth walkthrough near the top of the homepage. Plays the video once
 * BOOTH_VIDEO.src is set in lib/site.ts (muted, inline, with controls and the
 * poster, loaded only when played). Until then it shows the real studio photo
 * with a "coming soon" label. No stock or generated imagery.
 */
export default function BoothVideo() {
  if (!BOOTH_VIDEO_SECTION) return null;
  const hasVideo = !!BOOTH_VIDEO.src;
  return (
    <section className="py-14 md:py-28 bg-sand" aria-labelledby="booth-walkthrough-title">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Booth walkthrough"
          title={<span id="booth-walkthrough-title">See the booth before you book.</span>}
          intro={BOOTH_VIDEO.caption}
        />
        <div className="relative aspect-[4/5] sm:aspect-video rounded-[28px] overflow-hidden bg-espresso">
          {hasVideo ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={BOOTH_VIDEO.src}
              poster={BOOTH_VIDEO.poster}
              muted
              playsInline
              controls
              preload="none"
              aria-label="Booth walkthrough video"
            />
          ) : (
            <>
              <Image
                src={BOOTH_VIDEO.poster}
                alt={BOOTH_VIDEO.posterAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120c]/60 via-transparent to-transparent" />
              <p className="absolute left-5 bottom-5 md:left-7 md:bottom-7 rounded-full bg-cream/90 text-ink text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2">
                Booth walkthrough video coming soon
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
