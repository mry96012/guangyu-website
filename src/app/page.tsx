import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import CaseStudies from "@/components/CaseStudies";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "光宇方向命理研究所｜八字・紫微・塔羅・占星整合諮詢",
  description: "透過八字、紫微斗數、塔羅、生命靈數與占星整合分析，協助你整理現況、理解課題，找到更適合自己的方向。台灣命理諮詢，提供完整書面報告，Google 5.0 滿分評價。",
};

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
