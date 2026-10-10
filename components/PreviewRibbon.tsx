import { IS_PREVIEW } from "@/lib/preview";

/**
 * Ribbon shown only on Vercel preview deployments so reviewers know this is not the live site.
 * Phones get a compact version above the sticky Book bar; desktop gets the full sentence at the bottom.
 */
export default function PreviewRibbon() {
  if (!IS_PREVIEW) return null;
  return (
    <p
      role="note"
      className="fixed left-0 right-0 z-[60] bottom-[calc(72px+env(safe-area-inset-bottom,0px))] md:bottom-0 bg-bronze-text text-white text-center text-[11px] md:text-xs font-medium py-1 md:py-1.5 px-4 pointer-events-none"
    >
      <span className="md:hidden">Design preview. Forms are off.</span>
      <span className="hidden md:inline">Design preview. This is not the live Tanned Co. site, and the forms here are switched off.</span>
    </p>
  );
}
