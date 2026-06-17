import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import NeedsSorter from "@/components/NeedsSorter";
import ServicesGrid from "@/components/ServicesGrid";
import BrandDiff from "@/components/BrandDiff";
import BrandFeatures from "@/components/BrandFeatures";
import CaseStudies from "@/components/CaseStudies";
import Reviews from "@/components/Reviews";
import ServiceProcess from "@/components/ServiceProcess";
import HomeFAQ from "@/components/HomeFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 02 Hero */}
        <Hero />
        {/* 03 品牌核心價值 */}
        <BrandValues />
        {/* 04 需求分流 */}
        <NeedsSorter />
        {/* 05 推薦服務 */}
        <ServicesGrid />
        {/* 06 品牌差異化 */}
        <BrandDiff />
        {/* 07 品牌特色 */}
        <BrandFeatures />
        {/* 08 客戶案例 */}
        <CaseStudies />
        {/* 09 客戶評價 */}
        <Reviews />
        {/* 11 服務流程 */}
        <ServiceProcess />
        {/* 12 FAQ */}
        <HomeFAQ />
        {/* 13 最終 CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
