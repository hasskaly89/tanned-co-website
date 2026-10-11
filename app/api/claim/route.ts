import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isPreviewRequest, PREVIEW_FORM_MESSAGE } from "@/lib/preview";
import { escapeHtml, field, isValidEmail, isValidPhone } from "@/lib/form-utils";
import { MARKETING_CONSENT_TEXT } from "@/lib/consent";
import { clientIp, markHandled, rateLimited, wasHandled } from "@/lib/rate-limit";

// Set GHL_WEBHOOK_URL in the environment (and rotate the hook); the literal is
// the current production hook so behaviour is unchanged until that is done.
const GHL_WEBHOOK =
  process.env.GHL_WEBHOOK_URL ??
  "https://services.leadconnectorhq.com/hooks/aZwzIqXfd3kp2OCmsGiu/webhook-trigger/9d5155c4-b4c6-4e1e-b567-81f55a14e4d6";

const TIMEOUT_MS = 8000;
const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "landing_page", "referrer"];

type Channel = { ok: boolean };

async function postJson(url: string, payload: unknown, label: string): Promise<Channel> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.error(`${label} responded ${res.status}`);
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error(`${label} failed:`, err);
    return { ok: false };
  }
}

export async function POST(req: Request) {
  if (isPreviewRequest()) {
    return NextResponse.json({ error: PREVIEW_FORM_MESSAGE }, { status: 403 });
  }
  if (rateLimited(`claim:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (field(body, "website")) {
    return NextResponse.json({ success: true, crm: true });
  }

  const name = field(body, "name", 100);
  const email = field(body, "email", 254);
  const phone = field(body, "phone", 30);
  const location = field(body, "location", 60) || "Website";
  const submissionId = field(body, "submissionId", 64);
  const consentVersion = field(body, "consentVersion", 40);
  const marketingConsent = body.marketingConsent === true;

  // Email is optional: the offer popup asks for first name and mobile only (pending Hass
  // confirmation); the studio-page offer form still sends an email. The SMS code goes to the mobile.
  if (!name || !phone) {
    return NextResponse.json({ error: "Please fill in your name and mobile number." }, { status: 400 });
  }
  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Please check your mobile number." }, { status: 400 });
  }
  if (email && !isValidEmail(email)) {
    return NextResponse.json({ error: "Please check your email address." }, { status: 400 });
  }

  // A retry of a submission we already processed: don't send it to the CRM twice.
  if (submissionId && wasHandled(submissionId)) {
    return NextResponse.json({ success: true, crm: true, duplicate: true });
  }

  const rawAttribution = (typeof body.attribution === "object" && body.attribution) || {};
  const attribution: Record<string, string> = {};
  for (const k of ATTRIBUTION_KEYS) {
    const v = (rawAttribution as Record<string, unknown>)[k];
    if (typeof v === "string" && v) attribution[k] = v.slice(0, 200);
  }

  const nameParts = name.split(/\s+/);
  const firstName = nameParts[0] ?? name;
  const lastName = nameParts.slice(1).join(" ");
  const submittedAt = new Date().toISOString();
  const consent = {
    marketingConsent,
    consentStatus: marketingConsent ? "opted_in" : "not_given",
    consentVersion: consentVersion || "unknown",
    consentText: marketingConsent ? MARKETING_CONSENT_TEXT : "",
    consentAt: marketingConsent ? submittedAt : "",
    consentSource: `Tanned Co. Website: ${location}`,
  };

  const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;

  const [crm, sheet] = await Promise.all([
    // CRM webhook: creates the contact and triggers the offer SMS
    postJson(
      GHL_WEBHOOK,
      {
        firstName,
        lastName,
        ...(email ? { email } : {}),
        phone,
        tags: ["10% Off Lead", location, ...(marketingConsent ? ["Marketing Opt-In"] : [])],
        source: "Tanned Co. Website",
        customField: { location },
        submissionId,
        ...consent,
        ...attribution,
      },
      "CRM webhook"
    ),

    // Google Sheets backup log (Apps Script web app)
    sheetsWebhook
      ? postJson(
          sheetsWebhook,
          { firstName, lastName, email, phone, location, source: "Tanned Co. Website", submittedAt, submissionId, ...consent, ...attribution },
          "Sheets webhook"
        )
      : Promise.resolve<Channel>({ ok: false }),
  ]);

  if (!sheetsWebhook) console.error("GOOGLE_SHEETS_WEBHOOK is not set; lead was not logged to the sheet.");

  // Team notification. A CRM failure is flagged in the subject so someone sends the code by hand.
  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? "");
    const res = await resend.emails.send({
      from: "Tanned Co. Website <noreply@tannedco.com.au>",
      to: ["hello@tannedco.com.au", "edensorpark@tannedco.com.au"],
      ...(email ? { replyTo: email } : {}),
      subject: `${crm.ok ? "" : "[ACTION NEEDED: CRM FAILED] "}New 10% Off Lead: ${location}`.replace(/[\r\n]+/g, " "),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fdf6ec; border-radius: 12px;">
          <h2 style="color: #1a1a1a; margin-bottom: 4px;">New Lead: 10% Off Claim</h2>
          <p style="color: #a46746; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0;">${escapeHtml(location)}</p>
          ${crm.ok ? "" : `<p style="background:#f8e6e3;color:#a1352a;padding:12px;border-radius:8px;"><strong>The CRM did not accept this lead, so no SMS was sent.</strong> Please send the 10% off code manually and add the contact to the CRM.</p>`}
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; width: 150px;">Name</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: bold;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase;">Email</td><td style="padding: 8px 0;">${email ? `<a href="mailto:${escapeHtml(email)}" style="color: #a46746;">${escapeHtml(email)}</a>` : "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase;">Mobile</td><td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase;">Location</td><td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(location)}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase;">Marketing consent</td><td style="padding: 8px 0; color: #1a1a1a;">${marketingConsent ? `Yes (${escapeHtml(consent.consentVersion)}, ${escapeHtml(submittedAt)})` : "No (offer only)"}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase;">Source</td><td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(attribution.utm_source ?? attribution.referrer ?? "Direct / unknown")}</td></tr>
          </table>
          <p style="color: #9a8a7a; font-size: 12px;">CRM: ${crm.ok ? "accepted" : "FAILED"} · Sheet: ${sheet.ok ? "logged" : "not logged"}</p>
        </div>
      `,
    });
    if (res.error) console.error("Claim email failed:", res.error);
  } catch (err) {
    console.error("Claim email threw:", err);
  }

  // The lead is safe if at least one durable record (CRM or sheet) took it.
  if (!crm.ok && !sheet.ok) {
    return NextResponse.json({ error: "We couldn't save your details. Please try again, or call 1300 826 633." }, { status: 500 });
  }

  if (submissionId) markHandled(submissionId);
  return NextResponse.json({ success: true, crm: crm.ok });
}
