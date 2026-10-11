// Shared contact, support and app-access details. Change them here only.

export const CONTACT = {
  phone: "1300 826 633",
  phoneHref: "tel:1300826633",
  email: "hello@tannedco.com.au",
  /** When the phone line is answered. Matches studio opening hours. */
  supportHours: "6am to midnight, 7 days",
} as const;

/** Confirmed wording: booking needs no app, the app unlocks the studio and your room. */
export const APP_UNLOCK_TEXT = "Download the app before your visit to unlock the studio and your room.";
export const APP_ACCESS_TEXT = `Book online. ${APP_UNLOCK_TEXT}`;

/** Short hours line under the phone number (footer, contact page). */
export const SUPPORT_HOURS_LINE = `${CONTACT.supportHours[0].toUpperCase()}${CONTACT.supportHours.slice(1)}. Choose your studio when you call.`;

/** Phone help line, used on the home and studio pages. */
export const SUPPORT_CALL_TEXT = `Need a hand? Call ${CONTACT.phone}, ${CONTACT.supportHours}, and choose your studio to be connected.`;

/**
 * Booth walkthrough video for the homepage. Set `src` to the real video file
 * (e.g. "/video/booth-walkthrough.mp4" in public/) and it plays in place of the
 * poster. Until then the existing studio photo shows with a "coming soon" label.
 */
/**
 * Show the booth walkthrough section on the home page. On for this preview; Hass
 * decides whether to hide it at launch if there is no video yet (set to false).
 */
export const BOOTH_VIDEO_SECTION = true;

/**
 * "5,000+ spray tans delivered" stat on /about. No source yet, so off until Hass
 * confirms the number (then set to true).
 */
export const SHOW_TANS_DELIVERED_STAT = false;

export const BOOTH_VIDEO: { src: string; poster: string; posterAlt: string; caption: string } = {
  src: "",
  // Existing site photo (DSCF2505): a client stepping into a private tan room.
  poster:
    "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg",
  posterAlt: "A client stepping into a private Tanned Co. tan room",
  caption: "A short walkthrough of a first visit, from the front door to the booth, so you know what to expect.",
};

/**
 * Time in the booth. "about 4 minutes": pending Hass confirmation. The 20 minute
 * booking slot is from the brief.
 */
export const BOOTH_TIME = "about 4 minutes";
export const BOOKING_SLOT = "20 minute";

/**
 * Franchise page switches. Each was reported confirmed by Hass via the Chief of
 * Staff (Oct 2026). Reconfirm with Hass before go-live; set to false to hide.
 */
/** "Five company-owned studios" wording on /franchise. */
export const FRANCHISE_SHOW_COMPANY_OWNED = true;
/** Hass's mobile (and name) in the /franchise contact block. */
export const FRANCHISE_SHOW_HASS_MOBILE = true;
export const FRANCHISE_CONTACT = {
  email: "franchise@tannedco.com.au",
  name: "Hassan Aly",
  role: "Director",
  mobile: "0434 287 198",
  mobileHref: "tel:+61434287198",
} as const;

/** Social profiles (footer, contact page and Organization sameAs). */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/tannedco_",
  tiktok: "https://www.tiktok.com/@tannedco_",
  facebook: "https://www.facebook.com/profile.php?id=100086326464692",
} as const;

export const APP_LINKS = {
  appStore: "https://apps.apple.com/au/app/tannedco/id1659547172",
  googlePlay: "https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco",
} as const;

/**
 * Show the "First visit? 10% off your first tan" link in the home hero.
 * Off for now (Marketing: keep the hero to one action). The offer is still
 * reachable from the pricing section and the closing band on the home page,
 * and from the offer form on every studio page. Set to true to restore it.
 */
export const HERO_OFFER_LINK = false;

/**
 * Slim announcement strip at the top of every page. Change `id` whenever the
 * message changes so people who dismissed the old one see the new one.
 * "across Australia": pending Hass confirmation.
 */
export const ANNOUNCEMENT = {
  enabled: true,
  id: "franchise-2026-10",
  text: "Now franchising across Australia.",
  /** Second sentence, hidden on very narrow screens to keep the strip one line. */
  textMore: "Own a Tanned Co. studio.",
  linkText: "See the opportunity",
  /** Read by screen readers and search engines after linkText, so the link makes sense on its own. */
  linkTextHidden: " to own a Tanned Co. studio",
  href: "/franchise",
} as const;

export const ANNOUNCEMENT_STORAGE_KEY = "tannedco_announcement_dismissed";
