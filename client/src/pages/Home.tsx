/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Home page: Single-page layout with all sections
  Section flow: Hero → AlignmentBanner → Services → Prices → WhyUs → About → CTA → Contact → Footer
*/

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlignmentBanner from "@/components/AlignmentBanner";
import Services from "@/components/Services";
import Prices from "@/components/Prices";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AlignmentBanner />
        <Services />
        <Prices />
        <WhyUs />
        <About />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
      {/* Spacer for mobile contact bar */}
      <div className="h-14 md:hidden" />
    </div>
  );
}
