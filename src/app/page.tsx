import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import ServiceProcess from "@/components/ServiceProcess";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MaintenanceOverlay from "@/components/MaintenanceOverlay";

export const metadata: Metadata = pageMeta("/", "光宇方向命理研究所｜八字・紫微・塔羅・占星整合諮詢", "透過八字、紫微斗數、塔羅、生命靈數與占星整合分析，協助你整理現況、理解課題，找到更適合自己的方向。台灣命理諮詢，提供完整書面報告。");

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandValues />
        <ServiceProcess />
        <FinalCTA />
      </main>
      <Footer />
      <MaintenanceOverlay />
    </>
  );
}
