import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於光宇 | 光宇方向命理研究所",
  description: "光宇方向命理研究所的品牌理念、服務價值與我們的不同之處。",
};

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const values = [
  { emoji: "☯️", title: "東西方整合", desc: "結合東方命理與西方占卜、占星與數字能量等工具，從不同角度交叉分析，提供更全面的理解與建議。" },
  { emoji: "📊", title: "專業與經驗", desc: "多年命理實務經驗，累積上千位個案分析，用專業態度與嚴謹分析，提供值得信賴的服務內容。" },
  { emoji: "⚖️", title: "客觀中立",   desc: "不預設立場、不批判對錯，客觀呈現命盤訊息與可能性，協助你看見真實的自己，並做出更清晰的決定。" },
  { emoji: "💛", title: "顧問式陪伴", desc: "不只給答案，更在過程中陪伴你整理情緒、釐清課題，讓命理成為你人生路上的光與方向。" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,144,42,0.08) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>ABOUT US</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#1A2D45" }}>關於光宇</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>
              理解自己・找到方向・創造更好的選擇
            </p>
          </div>
        </section>

        {/* Brand story */}
        <section className="py-20 section-light">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-semibold" style={{ color: "#1A2D45" }}>我們的理念</h2>
                <div className="h-px w-12" style={{ background: "#B8902A" }} />
                <p className="font-sans text-base leading-relaxed" style={{ color: "#4A5E72" }}>
                  光宇方向命理研究所成立的初衷，是希望讓更多人透過命理工具，真正看見自己、理解自己的人生課題，並在重要時刻做出更清晰的選擇。
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#4A5E72" }}>
                  我們相信，命理的價值不在於預測未來、製造焦慮，而是透過對命盤的理解，讓你在面對人生岔路時，有更多的智慧與力量。
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#4A5E72" }}>
                  每一次諮詢，都是一段深度對話。我們不只是提供報告，更是陪伴你整理現況、釐清課題，找到屬於你自己的方向。
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-80 h-80 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/about-brand.jpg"
                    alt="光宇方向品牌形象"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand values */}
        <section className="py-20 section-alt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="section-title">
              <h2>品牌特色與優勢</h2>
              <div className="gold-diamond"><span /></div>
              <p>我們用專業、真誠與整合的力量，陪伴你在人生的每個階段做出更好的選擇</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map((v) => (
                <div key={v.title} className="card-lift rounded-2xl p-7 text-center space-y-4"
                  style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)", boxShadow: "0 2px 12px rgba(26,45,69,0.04)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto"
                    style={{ background: "rgba(184,144,42,0.07)", border: "1px solid rgba(184,144,42,0.15)" }}>
                    {v.emoji}
                  </div>
                  <p className="font-serif text-lg font-semibold" style={{ color: "#1A2D45" }}>{v.title}</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Difference comparison */}
        <section className="py-20" style={{ background: "#1A2D45" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-semibold text-white mb-4">光宇方向的不同</h2>
            <div className="gold-diamond mb-8"><span /></div>
            <p className="font-sans text-base leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.6)" }}>
              我們相信，命理的價值在於理解與選擇，而不是預言與判決。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-7 text-left space-y-3"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-sm font-semibold font-sans text-center py-2 px-4 rounded-full"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
                  一般命理服務
                </p>
                {["告訴你結果","著重吉凶好壞","給出單一答案","讓你被動接受"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>✗</span>
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-7 text-left space-y-3"
                style={{ background: "rgba(184,144,42,0.1)", border: "1px solid rgba(184,144,42,0.3)" }}>
                <p className="text-sm font-semibold font-sans text-center py-2 rounded-full"
                  style={{ background: "#B8902A", color: "#fff" }}>
                  光宇方向
                </p>
                {["幫你理解原因","整理你的現況","分析課題根源","提供方向與選擇權"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span style={{ color: "#06C755" }}>✓</span>
                    <span className="font-sans text-sm" style={{ color: "#E8D08A" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 section-light">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <span className="text-4xl" style={{ color: "#B8902A" }}>"</span>
            <p className="font-serif text-2xl leading-relaxed" style={{ color: "#1A2D45" }}>
              光宇方向，陪你在混亂中看見方向，在迷惘中找回自己。
            </p>
            <span className="text-4xl" style={{ color: "#B8902A" }}>"</span>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 inline-flex">
              加入 LINE 開始諮詢
            </a>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
