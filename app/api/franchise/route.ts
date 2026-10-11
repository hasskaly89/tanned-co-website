import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isPreviewRequest, PREVIEW_FORM_MESSAGE } from "@/lib/preview";
import { escapeHtml, field, isValidEmail, isValidPhone } from "@/lib/form-utils";
import { clientIp, rateLimited } from "@/lib/rate-limit";

const FRANCHISE_EMAIL = "franchise@tannedco.com.au";

export async function POST(req: Request) {
  if (isPreviewRequest()) {
    return NextResponse.json({ error: PREVIEW_FORM_MESSAGE }, { status: 403 });
  }
  if (rateLimited(`franchise:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many enquiries. Please wait a few minutes and try again." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (field(body, "website")) return NextResponse.json({ success: true });

  const name = field(body, "name", 100);
  const email = field(body, "email", 254);
  const phone = field(body, "phone", 30);
  const area = field(body, "area", 120);
  const timeframe = field(body, "timeframe", 60);
  const message = field(body, "message", 3000);

  if (!name || !email || !phone || !area) {
    return NextResponse.json({ error: "Please fill in your name, email, mobile and area." }, { status: 400 });
  }
  if (!isValidEmail(email) || !isValidPhone(phone)) {
    return NextResponse.json({ error: "Please check your email address and mobile number." }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; width: 150px; vertical-align: top;">${label}</td><td style="padding: 8px 0; color: #1a1a1a;">${value}</td></tr>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? "");
    const res = await resend.emails.send({
      from: "Tanned Co. Website <noreply@tannedco.com.au>",
      to: [FRANCHISE_EMAIL],
      cc: ["edensorpark@tannedco.com.au", "hello@tannedco.com.au"],
      replyTo: email,
      subject: `Franchise enquiry: ${area}`.replace(/[\r\n]+/g, " "),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fdf6ec; border-radius: 12px;">
          <h2 style="color: #1a1a1a; margin-bottom: 16px;">New franchise enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${row("Name", escapeHtml(name))}
            ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color: #a46746;">${escapeHtml(email)}</a>`)}
            ${row("Mobile", escapeHtml(phone))}
            ${row("Area", escapeHtml(area))}
            ${row("Timeframe", escapeHtml(timeframe || "Not given"))}
          </table>
          ${message ? `<p style="color: #7a6a5a; font-size: 12px; text-transform: uppercase; margin: 20px 0 8px;">Message</p><p style="color: #3a2e24; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>` : ""}
          <p style="color: #9a8a7a; font-size: 12px;">Sent from tannedco.com.au/franchise. Reply to this email to respond to ${escapeHtml(name)}.</p>
        </div>
      `,
    });
    if (res.error) {
      console.error("Franchise email failed:", res.error);
      return NextResponse.json({ error: "We couldn't send your enquiry. Please try again, or email franchise@tannedco.com.au." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Franchise email threw:", err);
    return NextResponse.json({ error: "We couldn't send your enquiry. Please try again, or email franchise@tannedco.com.au." }, { status: 500 });
  }
}
