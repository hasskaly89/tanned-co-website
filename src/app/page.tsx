import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import TanOptions from "@/components/TanOptions";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import BookCTA from "@/components/BookCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <TanOptions />
        <Pricing />
        <Locations />
        <FAQ />
        <BookCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
