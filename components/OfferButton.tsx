"use client";

import { trackEvent } from "@/lib/analytics";

/** Opens the first-visit offer dialog (rendered once in the root layout by ExitIntent). */
export default function OfferButton({
  children,
  className,
  source,
}: {
  children: React.ReactNode;
  className?: string;
  source: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        trackEvent("first_visit_offer_open", { source });
        window.dispatchEvent(new CustomEvent("tannedco:open-offer"));
      }}
      className={className}
    >
      {children}
    </button>
  );
}
