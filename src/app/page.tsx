import CaseStudiesSection from "./components/CaseStudiesSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TrustedBrands from "./components/TrustedBrands";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBrands />
        <ServicesSection />
        <CaseStudiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
