// Shared contact, support and app-access details. Change them here only.

export const CONTACT = {
  phone: "1300 826 633",
  phoneHref: "tel:1300826633",
  email: "hello@tannedco.com.au",
  /** When the phone line is answered. Matches studio opening hours. */
  supportHours: "6am to midnight, 7 days",
} as const;

/** Confirmed wording: booking needs no app, the app unlocks the studio and your room. */
export const APP_ACCESS_TEXT =
  "Book online. Download the app before your visit to unlock the studio and your room.";

/** Phone help line, used on the home and studio pages. */
export const SUPPORT_CALL_TEXT = `Need a hand? Call ${CONTACT.phone}, ${CONTACT.supportHours}, and choose your studio to be connected.`;

/**
 * Booth walkthrough video for the homepage. Leave src empty until the real
 * video file is supplied (e.g. "/video/booth-walkthrough.mp4" in public/);
 * the section stays hidden while it is empty.
 */
export const BOOTH_VIDEO: { src: string; poster?: string; caption: string } = {
  src: "",
  caption: "A short walkthrough of a first visit, from the front door to the booth, so you know what to expect.",
};

export const APP_LINKS = {
  appStore: "https://apps.apple.com/au/app/tannedco/id1659547172",
  googlePlay: "https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco",
} as const;
