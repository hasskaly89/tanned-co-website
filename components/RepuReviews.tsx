"use client";

import { useEffect } from "react";

// Repu.ai reviews widgets (business.repu.ai). Keys come from the Repu dashboard.
// Studio pages use each studio's own key (lib/locations.ts). The homepage uses
// this one: replace it with an all-studios carousel widget once it exists in Repu.
// For now it is the Edensor Park widget.
export const REPU_HOME_WIDGET_KEY = "b785fab69bb92c58";
const SCRIPT_SRC = "https://business.repu.ai/widget/reviews.js";

/**
 * Embeds the Repu reviews widget. The script is (re)loaded on mount so the
 * widget also renders after client-side navigation, not only on a full page load.
 */
export default function RepuReviews({ widgetKey = REPU_HOME_WIDGET_KEY }: { widgetKey?: string }) {
  useEffect(() => {
    document.querySelectorAll(`script[src="${SCRIPT_SRC}"]`).forEach((s) => s.remove());
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, [widgetKey]);

  return <div data-repu-inline={widgetKey} className="min-h-[120px]" />;
}
