import { IS_PREVIEW } from "@/lib/preview";

/**
 * Ribbon shown only on Vercel preview deployments so reviewers know this is not the live site.
 * Always the bottom edge of the screen (the announcement strip owns the top edge). On phones the
 * sticky Book bar sits just above it (see MobileCTA); desktop gets the full sentence.
 */
export default function PreviewRibbon() {
  if (!IS_PREVIEW) return null;
  return (
    <p
      role="note"
      className="fixed left-0 right-0 z-[60] bottom-0 pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))] md:pb-1.5 bg-bronze-text text-white text-center text-[11px] md:text-xs font-medium py-1 md:py-1.5 px-4 pointer-events-none"
    >
      <span className="md:hidden">Design preview. Forms are off.</span>
      <span className="hidden md:inline">Design preview. This is not the live Tanned Co. site, and the forms here are switched off.</span>
    </p>
  );
}
