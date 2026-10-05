import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FranchiseForm from "./FranchiseForm";
import { SITE_URL } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Franchise Opportunities",
  description: "Interested in opening a Tanned Co. automated spray tan studio? Send a franchise enquiry and our team will be in touch.",
  alternates: { canonical: `${SITE_URL}/franchise` },
};

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/franchise" />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Franchise Opportunities</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">Own a Tanned Co. Studio</h1>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-6">
            Tanned Co. runs five automated spray tan studios across Sydney, open 7 days from 6am to midnight. Clients
            book online or in the app and tan in a private VersaSpa booth, with no staff needed in the room.
          </p>
          <p className="text-[#5a4a3a] leading-relaxed">
            If you&apos;re interested in bringing Tanned Co. to your area, send us your details and our franchise team will
            be in touch to talk it through.
          </p>
          <p className="text-sm text-[#5a4a3a] mt-6">Prefer email? franchise@tannedco.com.au</p>
        </div>
        <FranchiseForm />
      </main>
      <Footer />
    </div>
  );
}
