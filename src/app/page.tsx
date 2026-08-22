import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import CaseStudies from "@/components/CaseStudies";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandValues />
        <CaseStudies />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
