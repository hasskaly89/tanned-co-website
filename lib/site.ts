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
/**
 * How customers get in: the Check In button in the app (confirmed by Hass, 11 Oct 2026).
 * Use this line wherever casual and 10 pack entry is explained. Glow Key wording is for Glow Club only.
 */
/**
 * Glow Club entry, word for word from the GymMaster Glow Club page (confirmed by Hass,
 * 11 Oct 2026): members get a Glow Key posted to them and tap it at the door. No app
 * Check In step for Glow Club members. Casual and 10 pack use CHECK_IN_TEXT.
 */
export const GLOW_KEY_TITLE = "Your own Glow Key";
export const GLOW_KEY = "Once you join, we'll post your Glow Key to you. Just tap it at the door to get in.";
export const GLOW_CLUB_ENTRY_FAQ = {
  q: "How do Glow Club members get in?",
  a: `${GLOW_KEY} Casual and 10 pack customers use the Check In button in the Tanned Co. app.`,
};
export const CHECK_IN_TEXT =
  "5 minutes before your booking, tap Check In in the app at the Bluetooth reader to open the studio. At your start time, tap Check In again to open your room.";

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
 * Show the booth walkthrough section on the home page. Off (Hass, 11 Oct 2026):
 * no video yet, so the whole section renders nothing. The component stays in code.
 * Candidate clip for later: Google Drive IMG_2077, Edensor Park walkthrough.
 * To bring it back: set BOOTH_VIDEO.src to the file and this flag to true.
 */
export const BOOTH_VIDEO_SECTION = false;

/**
 * "5,000+ spray tans delivered" stat on /about. Confirmed by Hass (Oct 2026).
 * Set to false to hide it.
 */
export const SHOW_TANS_DELIVERED_STAT = true;

export const BOOTH_VIDEO: { src: string; poster: string; posterAlt: string; caption: string } = {
  src: "",
  // Existing site photo (DSCF2505): a client stepping into a private tan room.
  poster:
    "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg",
  posterAlt: "A client stepping into a private Tanned Co. tan room",
  caption: "A short walkthrough of a first visit, from the front door to the booth, so you know what to expect.",
};

/** Time in the booth and booking slot length (confirmed by Hass, Oct 2026). */
export const BOOTH_TIME = "about 4 minutes";
export const BOOKING_SLOT = "20 minute";
export const BOOKING_SLOT_LINE = `Each booking is a ${BOOKING_SLOT} slot, with ${BOOTH_TIME} in the booth.`;

/**
 * Rinse and develop times (confirmed by Hass, 11 Oct 2026: Monterey and Malibu 6 to 8 hours,
 * Rapid Venetian 2 to 3 hours, all 24 hours to fully develop). Use these everywhere
 * aftercare is mentioned so the pages can't disagree.
 */
export const RINSE = { rapid: "2 to 3 hours", standard: "6 to 8 hours" } as const;
export const RINSE_LINE = `Rinse after ${RINSE.standard} for Malibu and Monterey, or ${RINSE.rapid} for Rapid Venetian.`;
export const DEVELOP_LINE = "Your colour keeps developing for 24 hours.";

/**
 * Franchise page switches. Both confirmed by Hass 11 Oct 2026. Set to false to hide.
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

/**
 * Legal entity: footer, operator line on /terms and /privacy-policy, and
 * Organization JSON-LD (legalName, taxID). Confirmed by Hass 11 Oct 2026.
 * Set to null to hide everywhere.
 */
export const LEGAL_ENTITY: { name: string; abn: string } | null = {
  name: "Tanned Co Australia Pty Limited",
  abn: "42 690 766 815",
};

/**
 * Product claims: only vegan, cruelty-free and paraben-free (manufacturer fact sheets).
 * Never claim nut-free, fragrance-free, dye-free, organic, natural, chemical-free,
 * non-toxic, hypoallergenic, dermatologist tested, pregnancy-safe or "no orange".
 */

/**
 * Gift vouchers are bought in the GymMaster Club Shop (online voucher purchase and
 * non-member shopping are on; checked by Chief of Staff, 11 Oct 2026). Expiry is 3 years
 * per the GymMaster admin setting (changed by Paige Cook, 31 Jul 2026); vouchers can be
 * used as payment when booking.
 * Pending Hass confirmation. No voucher amounts on the site.
 */
const GIFT_VOUCHER_VALIDITY = "3 years";
export const GIFT_CARDS = {
  shopUrl: "https://tannedco.gymmasteronline.com/portal/shop",
  steps: "Choose New Member, add your details and studio, then pick the gift voucher.",
  validity: GIFT_VOUCHER_VALIDITY,
  terms: `Valid for ${GIFT_VOUCHER_VALIDITY} from purchase. Enter your code when you book online.`,
} as const;

/**
 * Booking rules (Hass, 11 Oct 2026). Used on /terms and in the FAQ (and its JSON-LD).
 * Don't mention no-shows anywhere.
 */
export const BOOKING_RULES = {
  cancelCutoff: "30 minutes",
  pauseMinimum: "2 weeks",
} as const;
export const BOOKING_RULE_LINES = {
  cancel: `You can cancel or move a booking in the app up to ${BOOKING_RULES.cancelCutoff} before your start time, with no fee. The session goes back on your account.`,
  late: `Your ${BOOKING_SLOT} slot can't be extended. If you arrive late, you may not be able to get in.`,
  under18: "Under 18s need a parent or guardian's consent.",
  pause: `Glow Club members can pause their membership for free, for a minimum of ${BOOKING_RULES.pauseMinimum}. Contact your studio to arrange it.`,
  giftVoucher: `Gift vouchers are valid for ${GIFT_VOUCHER_VALIDITY} from purchase.`,
} as const;
export const BOOKING_RULE_FAQS = [
  { q: "Can I cancel or move my booking?", a: BOOKING_RULE_LINES.cancel },
  { q: "What if I'm running late?", a: BOOKING_RULE_LINES.late },
  { q: "Can under 18s get a spray tan?", a: `Yes. ${BOOKING_RULE_LINES.under18}` },
  { q: "Can I pause my Glow Club membership?", a: `Yes. ${BOOKING_RULE_LINES.pause}` },
  { q: "How long are gift vouchers valid?", a: `${BOOKING_RULE_LINES.giftVoucher} You can use them as payment when you book online.` },
];

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
 * Wording approved by Hass (Oct 2026).
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
