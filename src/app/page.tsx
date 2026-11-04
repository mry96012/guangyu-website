import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import ServicesOverview from "@/components/ServicesOverview";
import BookingSteps from "@/components/BookingSteps";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MaintenanceOverlay from "@/components/MaintenanceOverlay";
import { MAINTENANCE } from "@/config/content";

export const metadata: Metadata = {
  title: "光宇方向命理研究所｜東西方命理整合・專業顧問式陪伴",
  description:
    "結合八字、紫微斗數、姓名學、塔羅、生命靈數與西洋占星，協助你更理解自己、看懂處境，找到更適合自己的方向。書面報告 1–3 個工作天交付，透過官方 LINE @enlite731 預約。",
};

export default function HomePage() {
  return (
    <>
      {/* 維護中：背後的首頁只供觀看，不能點擊或用鍵盤操作 */}
      <div inert={MAINTENANCE.enabled}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-on-ink"
        >
          跳到主要內容
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <BrandValues />
          <ServicesOverview />
          <BookingSteps />
          <CaseStudies />
          <FinalCTA />
        </main>
        <Footer />
      </div>
      <MaintenanceOverlay />
    </>
  );
}
