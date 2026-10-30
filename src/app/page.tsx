import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MaintenanceOverlay from "@/components/MaintenanceOverlay";
import { MAINTENANCE } from "@/config/site";

export const metadata: Metadata = {
  title: "光宇方向命理研究所｜八字・紫微・塔羅・占星整合諮詢",
  description: "透過八字、紫微斗數、塔羅、生命靈數與占星整合分析，協助你整理現況、理解課題，找到更適合自己的方向。台灣命理諮詢，提供完整書面報告。",
};

export default function HomePage() {
  return (
    <>
      {/* 維護中：背後的首頁只供觀看，不能點擊或用鍵盤操作 */}
      <div inert={MAINTENANCE}>
        <Navbar />
        <main>
          <Hero />
          <BrandValues />
          <CaseStudies />
          <FinalCTA />
        </main>
        <Footer />
      </div>
      {MAINTENANCE && <MaintenanceOverlay />}
    </>
  );
}
