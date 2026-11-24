/** Escape user-supplied text before placing it in notification-email HTML. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_RE.test(value);
}

/** Loose AU-friendly check: 8 to 15 digits once spaces, dashes and +() are ignored. */
export function isValidPhone(value: string): boolean {
  if (!/^[0-9+()\s-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

/**
 * Australian mobile in the one format GymMaster and the lead sheet use: 04XXXXXXXX
 * (10 digits, no spaces). Accepts "0412 345 678", "+61 412 345 678", "61412345678",
 * "412345678" and similar. Returns null for anything that is not an AU mobile.
 */
export function toAuMobile(value: string): string | null {
  if (!/^[0-9+()\s.-]+$/.test(value)) return null;
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("0061")) digits = digits.slice(4);
  else if (digits.startsWith("61")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  return /^4\d{8}$/.test(digits) ? `0${digits}` : null;
}

/** Short message for a mobile field that did not pass. Used client and server side. */
export const AU_MOBILE_HINT = "Australian mobile, e.g. 0412 345 678";

/** Short message for forms that also accept landlines and overseas numbers. */
export const PHONE_HINT = "Check your mobile number";

/**
 * Contact and franchise enquiries: an AU mobile is normalised to 04XXXXXXXX so it
 * matches everywhere else, while a landline or overseas number is kept as typed.
 * A business or franchise enquiry is still a real lead. Returns null if unusable.
 */
export function normalisePhone(value: string): string | null {
  const mobile = toAuMobile(value);
  if (mobile) return mobile;
  return isValidPhone(value) ? value : null;
}

/** Read a field as a trimmed string capped at `max` characters. */
export function field(body: Record<string, unknown>, key: string, max = 200): string {
  const v = body[key];
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
