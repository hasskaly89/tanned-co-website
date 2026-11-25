import { trackEvent } from "@/lib/analytics";
import { ANNOUNCEMENT, ANNOUNCEMENT_STORAGE_KEY } from "@/lib/site";

/**
 * Black Friday Glow Trio: 3 tans for $79, valid 6 months, bought through the
 * GymMaster link below. While it is live (on every page except /franchise):
 *  - the top strip shows the offer instead of the franchise message
 *  - a once-only pop-up runs on consumer pages
 *  - the 10% first-visit pop-up does not open by itself (its buttons still work)
 * At promoEnd all three switch back in the browser by themselves, no redeploy:
 * franchise strip returns (unless that was dismissed) and the 10% pop-up auto-opens again.
 *
 * To switch it off early: set `enabled` to false. To move the end: change `promoEnd`.
 */
export type PromoConfig = {
  id: string;
  enabled: boolean;
  /** null: show with no countdown and no auto-hide. A Date: hide after this instant. */
  promoEnd: Date | null;
};

export const BF_GLOW_TRIO: PromoConfig = {
  id: "bf-glowtrio-2026",
  enabled: true,
  // Confirmed by Hass (extended 25 Nov to run through Cyber Monday). Easy to change.
  promoEnd: new Date("2026-11-30T23:59:00+11:00"), // Mon 30 Nov 2026 23:59 Australia/Sydney (confirmed by Hass)
};

export const PROMO_CAMPAIGN = "bf_glowtrio";

/** Banner dismiss. Separate from the franchise key so nobody's franchise dismiss is reset. */
export const PROMO_BANNER_STORAGE_KEY = "tannedco_promo_banner_dismissed";
/** Pop-up dismiss (value is BF_GLOW_TRIO.id): never auto-opens again for this promo. */
export const PROMO_MODAL_STORAGE_KEY = "tannedco_promo_dismissed";
/** Pop-up already shown this visit: no reopening on internal navigation. */
export const PROMO_MODAL_SESSION_KEY = "tannedco_promo_shown";
/**
 * Buy link: GymMaster quick sign-up for the Glow Trio pack (membership type 194963,
 * "BLACK FRIDAY GLOW TRIO - 3 TANS FOR $79", Exclusive Offers). Quick sign-up asks
 * 6 fields (no password, no address) instead of 13. Not the Glow Club link, not
 * /book-now. Chosen by Hass 25 Nov 2026.
 * Note: Mobile Phone is optional on this GymMaster form.
 */
export const BF_GLOW_TRIO_BUY_URL =
  "https://tannedco.gymmasteronline.com/portal/quick/signup/de9d37256ec469bd7370407fa5c8ea57";

export function isPromoLive(now: number = Date.now()): boolean {
  if (!BF_GLOW_TRIO.enabled) return false;
  return BF_GLOW_TRIO.promoEnd === null || now < BF_GLOW_TRIO.promoEnd.getTime();
}

/** Every franchise route, including any future nested ones. */
export function isFranchisePath(pathname: string): boolean {
  return pathname === "/franchise" || pathname.startsWith("/franchise/");
}

export function promoShowsOn(pathname: string, now: number = Date.now()): boolean {
  return isPromoLive(now) && !isFranchisePath(pathname);
}

/** GA4 promo event. Only sent while the promo is live (and only if gtag is loaded). */
export function trackPromo(name: string, params: Record<string, unknown> = {}): void {
  if (!isPromoLive()) return;
  trackEvent(name, { campaign: PROMO_CAMPAIGN, ...params });
}

/** "2d 04h", then "5h 07m", then "12m". */
export function formatTimeLeft(msLeft: number): string {
  const mins = Math.max(0, Math.floor(msLeft / 60_000));
  const d = Math.floor(mins / 1440);
  const h = Math.floor((mins % 1440) / 60);
  const m = mins % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  if (d > 0) return `${d}d ${pad(h)}h`;
  if (h > 0) return `${h}h ${pad(m)}m`;
  return `${Math.max(1, m)}m`;
}

/** Banner: "Ends in 2d 04h". */
export function formatCountdown(msLeft: number): string {
  return `Ends in ${formatTimeLeft(msLeft)}`;
}

export function readStorage(storage: "localStorage" | "sessionStorage", key: string): string | null {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}
export function writeStorage(storage: "localStorage" | "sessionStorage", key: string, value: string) {
  try {
    window[storage].setItem(key, value);
  } catch {}
}

/**
 * Which strip shows, as classes on <html>:
 *  - promo-on: the Black Friday strip replaces the franchise strip
 *  - announce-off: whichever strip applies was dismissed (--banner-h becomes 0)
 * The head script below sets these before first paint; this keeps them right on
 * client-side navigation and when the promo ends while the page is open.
 * Returns whether the Black Friday strip is visible.
 */
export function applyAnnouncementState(pathname: string, now: number = Date.now()): boolean {
  const promo = promoShowsOn(pathname, now);
  const off = promo
    ? readStorage("localStorage", PROMO_BANNER_STORAGE_KEY) === BF_GLOW_TRIO.id
    : !ANNOUNCEMENT.enabled || readStorage("localStorage", ANNOUNCEMENT_STORAGE_KEY) === ANNOUNCEMENT.id;
  const html = document.documentElement;
  html.classList.toggle("promo-on", promo);
  html.classList.toggle("announce-off", off);
  return promo && !off;
}

/**
 * Inline <head> script: same rules as applyAnnouncementState, run before first
 * paint so neither strip flashes and the fixed nav never jumps. Once the promo
 * has ended it falls back to the franchise key by itself.
 */
export function announcementHeadScript(): string {
  const c = {
    pe: BF_GLOW_TRIO.enabled,
    end: BF_GLOW_TRIO.promoEnd ? BF_GLOW_TRIO.promoEnd.getTime() : null,
    pk: PROMO_BANNER_STORAGE_KEY,
    pid: BF_GLOW_TRIO.id,
    fe: ANNOUNCEMENT.enabled,
    fk: ANNOUNCEMENT_STORAGE_KEY,
    fid: ANNOUNCEMENT.id,
  };
  return (
    `try{var c=${JSON.stringify(c)},d=document.documentElement,p=location.pathname,` +
    `g=function(k){try{return localStorage.getItem(k)}catch(e){return null}},` +
    `on=c.pe&&(c.end===null||Date.now()<c.end)&&!(p==="/franchise"||p.indexOf("/franchise/")===0);` +
    `d.classList.toggle("promo-on",on);` +
    `d.classList.toggle("announce-off",on?g(c.pk)===c.pid:(!c.fe||g(c.fk)===c.fid))}catch(e){}`
  );
}
