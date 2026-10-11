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

/** Phone help line, used on the home and studio pages. */
export const SUPPORT_CALL_TEXT = `Need a hand? Call ${CONTACT.phone}, ${CONTACT.supportHours}, and choose your studio to be connected.`;

/**
 * Booth walkthrough video for the homepage. Set `src` to the real video file
 * (e.g. "/video/booth-walkthrough.mp4" in public/) and it plays in place of the
 * poster. Until then the existing studio photo shows with a "coming soon" label.
 */
export const BOOTH_VIDEO: { src: string; poster: string; posterAlt: string; caption: string } = {
  src: "",
  // Existing site photo (DSCF2505): a client stepping into a private tan room.
  poster:
    "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg",
  posterAlt: "A client stepping into a private Tanned Co. tan room",
  caption: "A short walkthrough of a first visit, from the front door to the booth, so you know what to expect.",
};

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
