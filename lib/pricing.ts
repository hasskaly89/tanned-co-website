// Single source of truth for prices, expiry periods and membership terms shown
// on the website. Values must match GymMaster checkout. Change them here only.

export const CASUAL = {
  price: 39, // booked and paid per session
} as const;

export const TEN_PACK = {
  price: 360,
  sessions: 10,
  perTan: 36,
  saving: 30, // 10 casual tans ($390) minus $360
  validity: "10 months", // matches GymMaster checkout (book-now previously said 12)
} as const;

export const GLOW_CLUB = {
  monthly: 89,
  tansPerMonth: 3,
  minimumMonths: 3,
  minimumTotal: 267, // 3 x $89 base membership payments
  casualEquivalent: 117, // 3 casual tans
  monthlySaving: 28,
  mateRateDiscount: 10, // $ off a friend's casual tan, once a month
  cancelEmail: "hello@tannedco.com.au",
} as const;

export const formatAud = (n: number) =>
  Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;

/** Glow Club cost per tan rounded up to the next dollar, for "Under $30 a tan" copy. */
export const GLOW_CLUB_PER_TAN_UNDER = Math.ceil(GLOW_CLUB.monthly / GLOW_CLUB.tansPerMonth);

/** Ready-made phrases so pages never retype a price. */
export const PRICE_TEXT = {
  casualFrom: `from ${formatAud(CASUAL.price)}`,
  glowClubPerTan: `under ${formatAud(GLOW_CLUB_PER_TAN_UNDER)} a tan`,
  mateRate: `${formatAud(GLOW_CLUB.mateRateDiscount)} off`,
} as const;
