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

/** Read a field as a trimmed string capped at `max` characters. */
export function field(body: Record<string, unknown>, key: string, max = 200): string {
  const v = body[key];
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
