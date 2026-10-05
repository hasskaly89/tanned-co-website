// Keeps the visitor's landing source for the session so leads can be tied to
// the campaign or page that produced them. Holds no personal information.
const KEY = "tannedco_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number] | "landing_page" | "referrer", string>>;

/** Record first-touch attribution once per session. Safe to call on every page view. */
export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data: Attribution = { landing_page: window.location.pathname };
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) data[k] = v.slice(0, 100);
    }
    if (document.referrer && !document.referrer.startsWith(window.location.origin)) {
      data.referrer = new URL(document.referrer).hostname;
    }
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

export function getAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}
