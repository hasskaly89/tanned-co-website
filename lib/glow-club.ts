// Glow Club wording, matched to the GymMaster Glow Club page (Oct 2026):
// $89 a month, 3 tans per month, under $30 a tan, birthday tan on us, member-only
// perks, your own Glow Key, limited founding member spots, 3 month minimum.
// Glow Club members get in with their Glow Key (key fob, posted to them).
// Casual and 10 pack customers get in with the Check In button in the app.
// Pending Hass: whether members also need the app Check In to open their room.
import { CASUAL, GLOW_CLUB, GLOW_CLUB_PER_TAN_UNDER, formatAud } from "@/lib/pricing";

export const GLOW_CLUB_PRICE_LINE = `${formatAud(GLOW_CLUB.monthly)} a month`;
export const GLOW_CLUB_TANS_LINE = `${GLOW_CLUB.tansPerMonth} tans per month`;
export const GLOW_CLUB_PER_TAN_LINE = `Under ${formatAud(GLOW_CLUB_PER_TAN_UNDER)} a tan`;
export const GLOW_CLUB_MINIMUM_LINE = `${GLOW_CLUB.minimumMonths} month minimum, then month to month.`;

export const GLOW_KEY_TITLE = "Your own Glow Key";
export const GLOW_KEY_LINE = "Once you join, we'll post your Glow Key to you. Just tap it at the door to get in.";

export const GLOW_CLUB_ENTRY_FAQ = {
  q: "How do Glow Club members get in?",
  a: `${GLOW_KEY_LINE} Casual and 10 pack customers use the Check In button in the Tanned Co. app.`,
};

export const GLOW_CLUB_EXTRA_TAN_LINE = `Book an extra session at the casual rate (${formatAud(CASUAL.price)}) on top of your membership whenever you need it.`;
