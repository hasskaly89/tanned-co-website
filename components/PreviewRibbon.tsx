import { IS_PREVIEW } from "@/lib/preview";

/** Thin ribbon shown only on Vercel preview deployments so reviewers know this is not the live site. */
export default function PreviewRibbon() {
  if (!IS_PREVIEW) return null;
  return (
    <p className="fixed bottom-0 left-0 right-0 z-[60] hidden md:block bg-bronze-text text-white text-center text-xs font-medium py-1.5 px-4">
      Design preview. This is not the live Tanned Co. site, and the forms here are switched off.
    </p>
  );
}
