"use client";

import { useEffect, useRef, useState } from "react";

// Repu.ai reviews widgets (business.repu.ai). Keys come from the Repu dashboard.
// Studio pages use each studio's own widget (lib/locations.ts). The homepage
// uses the "All businesses" carousel widget.
export const REPU_HOME_WIDGET_KEY = "b785fab69bb92c58";
const SCRIPT_SRC = "https://business.repu.ai/widget/reviews.js";
const EMPTY_AFTER_MS = 8000;

/**
 * Embeds a Repu reviews widget. The script is (re)loaded on mount so the widget
 * also renders after client-side navigation. If the widget has not rendered any
 * reviews after a few seconds (e.g. a studio with no reviews synced yet), the
 * optional heading and the widget area collapse so the page shows no empty gap;
 * they reappear if reviews render later.
 */
export default function RepuReviews({
  widgetKey = REPU_HOME_WIDGET_KEY,
  heading,
}: {
  widgetKey?: string;
  heading?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`script[src="${SCRIPT_SRC}"]`).forEach((s) => s.remove());
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    const el = ref.current;
    const hasContent = () => !!el && el.offsetHeight >= 60;
    const timer = setTimeout(() => setEmpty(!hasContent()), EMPTY_AFTER_MS);
    // If reviews render later (slow connection), show the area again.
    const observer = el ? new ResizeObserver(() => { if (hasContent()) setEmpty(false); }) : null;
    if (el) observer!.observe(el);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      script.remove();
    };
  }, [widgetKey]);

  return (
    // Collapsed rather than display:none while empty, so the widget can still lay out and be measured.
    <div style={empty ? { height: 0, overflow: "hidden" } : undefined} aria-hidden={empty || undefined}>
      {heading}
      <div ref={ref} data-repu-inline={widgetKey} />
    </div>
  );
}
