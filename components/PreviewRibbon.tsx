import { IS_PREVIEW } from "@/lib/preview";

/**
 * Ribbon shown only on Vercel preview deployments so reviewers know this is not the live site.
 * Phones: a slim strip at the very top (height --ribbon-h, part of the top stack with the
 * announcement and navbar), so it never covers the hero or the sticky Book bar.
 * Desktop: the full sentence along the bottom edge.
 */
export default function PreviewRibbon() {
  if (!IS_PREVIEW) return null;
  return (
    <p
      role="note"
      className="fixed left-0 right-0 z-[60] top-0 h-[var(--ribbon-h)] leading-[var(--ribbon-h)] md:top-auto md:bottom-0 md:h-auto md:leading-normal md:py-1.5 bg-bronze-text text-white text-center text-[10px] md:text-xs font-medium px-4 pointer-events-none"
    >
      <span className="md:hidden">Design preview. Forms are off.</span>
      <span className="hidden md:inline">Design preview. This is not the live Tanned Co. site, and the forms here are switched off.</span>
    </p>
  );
}
