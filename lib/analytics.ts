// Google Analytics 4 helper
// Add NEXT_PUBLIC_GA_ID to env to override the default.

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TY1H7HH0NF";

type GtagFn = (
  command: "event" | "config" | "set" | "consent",
  target: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a custom GA4 event.
 * Usage: trackEvent("book_now_click", { source: "navbar" });
 */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/**
 * Explicitly fire a page_view (for SPA route changes).
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_location: url,
    page_title: title ?? document.title,
    page_path: new URL(url).pathname,
  });
}
