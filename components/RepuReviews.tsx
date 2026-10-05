"use client";

import { useEffect } from "react";

// Repu.ai reviews widget (business.repu.ai). The key comes from the Repu dashboard.
export const REPU_WIDGET_KEY = "b785fab69bb92c58";
const SCRIPT_SRC = "https://business.repu.ai/widget/reviews.js";

/**
 * Embeds the Repu reviews widget. The script is (re)loaded on mount so the
 * widget also renders after client-side navigation, not only on a full page load.
 */
export default function RepuReviews({ widgetKey = REPU_WIDGET_KEY }: { widgetKey?: string }) {
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
