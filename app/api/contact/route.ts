import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isPreviewRequest, PREVIEW_FORM_MESSAGE } from "@/lib/preview";
import { escapeHtml, field, isValidEmail, isValidPhone } from "@/lib/form-utils";
import { clientIp, rateLimited } from "@/lib/rate-limit";

export async function POST(req: Request) {
  if (isPreviewRequest()) {
    return NextResponse.json({ error: PREVIEW_FORM_MESSAGE }, { status: 403 });
  }
  if (rateLimited(`contact:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many messages. Please wait a few minutes and try again." }, { status: 429 });
  }
  try {
    const body = await req.json();

    // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
    if (field(body, "website")) {
      return NextResponse.json({ success: true });
    }

    const name = field(body, "name", 100);
    const email = field(body, "email", 254);
    const phone = field(body, "phone", 30);
    const enquiryType = field(body, "enquiryType", 80);
    const location = field(body, "location", 60);
    const message = field(body, "message", 3000);

    if (!name || !email || !phone || !enquiryType || !location || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!isValidEmail(email) || !isValidPhone(phone)) {
      return NextResponse.json({ error: "Please check your email and mobile number." }, { status: 400 });
    }

    const sheetsWebhook = process.env.GOOGLE_SHEETS_CONTACT_WEBHOOK;
    // Constructed after validation: the client throws when the key is missing.
    const resend = new Resend(process.env.RESEND_API_KEY ?? "");

    const emailSend = resend.emails
      .send({
        from: "Tanned Co. Website <noreply@tannedco.com.au>",
        to: ["hello@tannedco.com.au", "edensorpark@tannedco.com.au"],
        replyTo: email,
        subject: `${enquiryType} | ${location} | Tanned Co. Website`.replace(/[\r\n]+/g, " "),
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fdf6ec; border-radius: 12px;">
            <h2 style="color: #1a1a1a; margin-bottom: 4px;">New Enquiry from Tanned Co. Website</h2>
            <p style="color: #a46746; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0;">${escapeHtml(enquiryType)}</p>
            <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #a46746;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Mobile</td>
                <td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #a46746;">${escapeHtml(phone)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Enquiry Type</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(enquiryType)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Location</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(location)}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
            <p style="color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
            <p style="color: #3a2e24; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
            <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
            <p style="color: #9a8a7a; font-size: 12px;">Sent from tannedco.com.au reply directly to this email to respond to ${escapeHtml(name)}.</p>
          </div>
        `,
      })
      .then((res) => {
        if (res.error) {
          console.error("Contact email failed:", res.error);
          return { ok: false as const };
        }
        return { ok: true as const };
      })
      .catch((err) => {
        console.error("Contact email threw:", err);
        return { ok: false as const };
      });

    const sheetsLog = sheetsWebhook
      ? fetch(sheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            enquiryType,
            location,
            message,
            source: "Tanned Co. Website: Contact Form",
            submittedAt: new Date().toISOString(),
          }),
        })
          .then((res) => {
            if (!res.ok) console.error("Contact sheets webhook responded", res.status);
            return { ok: res.ok };
          })
          .catch((err) => {
            console.error("Contact sheets webhook failed:", err);
            return { ok: false as const };
          })
      : Promise.resolve({ ok: false as const, skipped: true });

    const [emailResult, sheetsResult] = await Promise.all([emailSend, sheetsLog]);

    if (!emailResult.ok && !sheetsResult.ok) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
