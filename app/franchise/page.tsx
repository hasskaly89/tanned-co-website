import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FranchiseForm from "./FranchiseForm";
import { SITE_URL } from "@/lib/locations";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Franchise Opportunities",
  description: "Interested in opening a Tanned Co. automated spray tan studio? Send a franchise enquiry and our team will be in touch.",
  alternates: { canonical: `${SITE_URL}/franchise` },
};

const points = [
  "Five studios across Sydney, open 7 days from 6am to midnight",
  "Clients book online or in the app and check themselves in",
  "Private VersaSpa booths, with no staff needed in the room",
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/franchise" />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid md:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-start">
        <div>
          <p className="eyebrow mb-4">Franchise opportunities</p>
          <h1 className="display-lg mb-6">Own a Tanned Co. studio.</h1>
          <p className="text-body text-lg leading-relaxed mb-8">
            Tanned Co. runs automated spray tan studios where clients book, check in and tan on their own, in a
            private booth. If you&apos;re interested in bringing Tanned Co. to your area, send us your details and
            our franchise team will be in touch to talk it through.
          </p>
          <ul className="space-y-3.5 mb-9">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 font-medium">
                <CheckIcon className="w-4 h-4 mt-1.5 text-bronze shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm text-body">
            Prefer email?{" "}
            <a href="mailto:franchise@tannedco.com.au" className="text-link">franchise@tannedco.com.au</a>
          </p>
        </div>
        <FranchiseForm />
      </main>
      <Footer />
    </div>
  );
}
