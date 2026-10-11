import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/locations";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { LEGAL_ENTITY } from "@/lib/site";

// DRAFT for owner review. Not legal advice; have it checked before relying on it.
// Legal entity and ABN come from LEGAL_ENTITY in lib/site.ts (confirmed by Hass 11 Oct 2026).

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tanned Co. collects, uses and protects your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026" activePath="/privacy-policy">
      <JsonLd data={breadcrumbSchema([{ name: "Privacy policy", path: "/privacy-policy" }])} />
      <section>
        <p>
          Tanned Co. (&quot;we&quot;, &quot;us&quot;) operates automated spray tan studios in Caringbah, Edensor Park, Kings Park,
          Smeaton Grange and Woollahra, NSW, and the website tannedco.com.au. This policy explains how we handle your
          personal information, in line with the Australian Privacy Principles.
        </p>
      </section>
      {LEGAL_ENTITY && (
        <section>
          <p>{`Tanned Co. is operated by ${LEGAL_ENTITY.name} (ABN ${LEGAL_ENTITY.abn}).`}</p>
        </section>
      )}

      <section>
        <h2>What we collect</h2>
        <ul>
          <li>Your name, email address and mobile number when you claim an offer, send an enquiry or book.</li>
          <li>The studio you choose and the details of your enquiry.</li>
          <li>Booking, membership and payment records when you buy through our booking portal or app.</li>
          <li>Website usage information, such as pages visited, device and browser type, and the campaign or site that referred you, collected with cookies and Google Analytics.</li>
          <li>Anything you type into our website chat assistant.</li>
        </ul>
        <p>We do not collect your full card details. Payments are processed by our payment providers.</p>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To send you the offer you asked for, by SMS.</li>
          <li>To answer your enquiries and manage your bookings, packs and membership.</li>
          <li>To send you news and offers by SMS and email, but only if you have agreed to receive them.</li>
          <li>To run, secure and improve our website and services.</li>
          <li>To meet our legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>We share personal information only with service providers that help us run the business, including:</p>
        <ul>
          <li>our customer relationship and SMS platform;</li>
          <li>our booking and membership system (GymMaster) and payment processors;</li>
          <li>email delivery, spreadsheet and record-keeping tools (including Google Workspace);</li>
          <li>website hosting, analytics (Google Analytics) and our chat assistant provider.</li>
        </ul>
        <p>
          Some of these providers store information outside Australia, including in the United States. We do not sell
          your personal information.
        </p>
      </section>

      <section>
        <h2>Marketing and unsubscribing</h2>
        <p>
          You can stop marketing messages at any time by replying STOP to an SMS, using the unsubscribe link in an
          email, or emailing hello@tannedco.com.au. We will still send messages you need about your bookings or
          membership.
        </p>
      </section>

      <section>
        <h2>Cookies and analytics</h2>
        <p>
          Our website uses cookies and Google Analytics to understand how visitors use the site. You can block or
          delete cookies in your browser settings; the site will still work.
        </p>
      </section>

      <section>
        <h2>Keeping your information safe</h2>
        <p>
          We take reasonable steps to protect your information from misuse, loss and unauthorised access, and we keep
          it only as long as we need it for the purposes above or as the law requires.
        </p>
      </section>

      <section>
        <h2>Access, correction and complaints</h2>
        <p>
          You can ask to see or correct the personal information we hold about you, or raise a privacy concern, by
          emailing hello@tannedco.com.au or calling 1300 826 633. We aim to respond within 30 days. If you are not
          satisfied with our response, you can contact the Office of the Australian Information Commissioner at
          oaic.gov.au.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The latest version is always on this page.</p>
      </section>
    </LegalPage>
  );
}
