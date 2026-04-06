import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, enquiryType, message } = await req.json();

    if (!name || !email || !enquiryType || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Tanned Co. Website <onboarding@resend.dev>",
      to: "hello@tannedco.com.au",
      replyTo: email,
      subject: `${enquiryType} — Tanned Co Website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fdf6ec; border-radius: 12px;">
          <h2 style="color: #1a1a1a; margin-bottom: 4px;">New Enquiry from Tanned Co. Website</h2>
          <p style="color: #a46746; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0;">${enquiryType}</p>
          <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a46746;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Enquiry Type</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${enquiryType}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
          <p style="color: #7a6a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
          <p style="color: #3a2e24; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e8d9c3; margin: 20px 0;" />
          <p style="color: #9a8a7a; font-size: 12px;">Sent from tannedco.com.au — reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
