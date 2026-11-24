"use client";

import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import { MARKETING_CONSENT_VERSION } from "@/lib/consent";
import { AU_MOBILE_HINT, toAuMobile } from "@/lib/form-utils";

export type LeadResult =
  | { ok: true; crm: boolean }
  | { ok: false; error: string };

/**
 * Posts a first-timer offer claim. `submissionId` must stay the same across
 * retries of one form so the server and downstream systems can drop duplicates.
 * `analytics` adds extra (non-personal) params to the generate_lead event only;
 * it is not sent to the API.
 */
export async function submitClaim(input: {
  submissionId: string;
  name: string;
  /** Optional: the offer popup collects first name and mobile only. */
  email?: string;
  phone: string;
  location: string;
  marketingConsent: boolean;
  website: string; // honeypot
  form: string; // analytics label, e.g. "location_claim"
}, analytics: Record<string, string> = {}): Promise<LeadResult> {
  // Checked here so a wrong number is caught before submitting, and so the API,
  // the CRM, the sheet and GymMaster all receive the one format: 04XXXXXXXX.
  const phone = toAuMobile(input.phone);
  if (!phone) return { ok: false, error: AU_MOBILE_HINT };

  try {
    const res = await fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
        phone,
        consentVersion: MARKETING_CONSENT_VERSION,
        attribution: getAttribution(),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, error: data.error ?? "Something went wrong. Please try again." };
    // No personal information goes to analytics.
    trackEvent("generate_lead", { form: input.form, location: input.location, marketing_consent: input.marketingConsent, ...analytics });
    return { ok: true, crm: data.crm === true };
  } catch {
    return { ok: false, error: "We couldn't reach our server. Check your connection and try again." };
  }
}

export function newSubmissionId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
