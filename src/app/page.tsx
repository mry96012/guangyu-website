import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import ServiceProcess from "@/components/ServiceProcess";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MaintenanceOverlay from "@/components/MaintenanceOverlay";

export const metadata: Metadata = {
  title: "光宇方向命理研究所｜八字・紫微斗數・姓名・手機號碼・塔羅",
  description: "東西方命理整合，協助你理解自己、整理處境，形成實際可行的行動。以 PDF 或文字交付，透過官方 LINE 預約。",
};

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
