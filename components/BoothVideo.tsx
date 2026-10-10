import SectionHeading from "@/components/SectionHeading";
import { BOOTH_VIDEO } from "@/lib/site";

/**
 * Booth walkthrough video slot (homepage). Hidden until a real video file is set
 * in lib/site.ts (BOOTH_VIDEO.src). No placeholder is shown on the site.
 */
export default function BoothVideo() {
  if (!BOOTH_VIDEO.src) return null;
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Booth walkthrough" title="See the booth before you book." intro={BOOTH_VIDEO.caption} />
        <video
          className="w-full rounded-[28px] bg-espresso aspect-video"
          src={BOOTH_VIDEO.src}
          poster={BOOTH_VIDEO.poster}
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
