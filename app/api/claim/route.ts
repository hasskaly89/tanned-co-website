import { Resend } from "resend";
import { NextResponse } from "next/server";

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/aZwzIqXfd3kp2OCmsGiu/webhook-trigger/9d5155c4-b4c6-4e1e-b567-81f55a14e4d6";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const { name, email, phone, location } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] ?? name;
    const lastName = nameParts.slice(1).join(" ") || "";

    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;

    // Fire all in parallel — GHL webhook + email notification + Google Sheets
    await Promise.all([
      // GHL webhook — creates contact + triggers SMS/email automation
      fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          tags: ["10% Off Lead", location ?? "Website"],
          source: "Tanned Co. Website",
          customField: { location: location ?? "Website" },
        }),
      }),

      // Google Sheets backup log (Apps Script web app)
      sheetsWebhook
        ? fetch(sheetsWebhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              phone,
              location: location ?? "Website",
              source: "Tanned Co. Website",
            }),
          }).catch((err) => console.error("Sheets webhook failed:", err))
        : Promise.resolve(),

      // Email notification to the team
      resend.emails.send({
        from: "Tanned Co. Website <onboarding@resend.dev>",
        to: ["hello@tannedco.com.au", "edensorpark@tannedco.com.au"],
        replyTo: email,
        subject: `New 10% Off Lead — ${location ?? "Website"}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fdf6ec; border-radius: 12px;">
            <h2 style="color: #1a1a1a; margin-bottom: 4px;">New Lead — 10% Off Claim</h2>
            <p style="color: #a46746; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0;">${location ?? "Website"}</p>
            <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td>
                <td style="padding: 8px 0; color: #1a1a1a; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a46746;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Mobile</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Location</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${location ?? "Not specified"}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
            <p style="color: #9a8a7a; font-size: 12px;">Lead added to GHL — SMS/email automation triggered. Location: ${location ?? "Website"}.</p>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Claim form error:", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
