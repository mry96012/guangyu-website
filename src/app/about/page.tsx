import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於光宇 | 光宇方向命理研究所",
  description: "光宇方向命理研究所的品牌理念、做法，以及由 Axel 本人負責的服務方式。",
};

const LINE_URL = "https://lin.ee/QRKXhFn";

const values = [
  { char: "整", title: "東西方整合", desc: "以八字、紫微斗數為主，搭配姓名、手機號碼與塔羅，從不同角度對照整理。" },
  { char: "審", title: "本人審核", desc: "每一份成果的命理判讀，都由 Axel 本人審核後才交付。" },
  { char: "觀", title: "客觀中立",   desc: "不預設立場、不批判對錯，分開說明事實、計算與詮釋。" },
  { char: "行", title: "可以行動", desc: "把分析整理成看得懂、做得到的建議，交付後 7 日內可提出一次文字釐清。" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <PageHero label="ABOUT US" title="關於光宇" description="理解自己・找到方向・創造更好的選擇" image="/images/heroes/about.webp" />

        {/* Brand story */}
        <section className="py-20 section-light">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>品牌理念</h2>
                <div className="h-px w-12" style={{ background: "linear-gradient(to right, #A67C3D, transparent)" }} />
                <p className="font-sans text-base leading-relaxed" style={{ color: "#6E655A" }}>
                  光宇方向命理研究所整合東西方命理，協助你理解自己、整理處境，形成實際可行的行動。
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#6E655A" }}>
                  命理的價值不在預測未來或製造焦慮。看懂命盤呈現的結構，面對選擇時會多一點依據。
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#6E655A" }}>
                  每一份報告都分開說明事實、計算與詮釋，並附上提醒與建議，決定權在你手上。
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm overflow-hidden" style={{ aspectRatio: "1402/820", border: "1px solid rgba(166,124,61,0.15)" }}>
                  <Image src="/about-photo.png" alt="光宇方向命理研究所" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultant intro */}
        <section className="py-20 section-alt">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>關於 Axel</h2>
              <div className="gold-diamond mt-3 mb-2"><span /></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm overflow-hidden" style={{ aspectRatio: "1402/820", border: "1px solid rgba(166,124,61,0.15)" }}>
                  <Image src="/about-photo.png" alt="光宇方向形象圖" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-5">
                <p className="font-sans text-base leading-relaxed" style={{ color: "#6E655A" }}>
                  光宇方向由 Axel 一人經營，沒有老師團隊或客服團隊。官方 LINE 先由系統自動回覆協助整理資料，之後交給 Axel 本人處理。
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#6E655A" }}>
                  每一份成果都依你提供的資料與提問撰寫，命理判讀由 Axel 本人審核後才交付。服務以 PDF 或文字進行，不提供語音、視訊與現場諮詢。
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#6E655A" }}>
                  命理分析用來幫助理解與整理，不取代醫療、法律或投資的專業判斷。
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["八字","紫微斗數","姓名解析","手機號碼解析","塔羅"].map((tag) => (
                    <span key={tag} className="text-xs font-sans px-3 py-1"
                      style={{ background: "rgba(166,124,61,0.08)", color: "#A67C3D", border: "1px solid rgba(166,124,61,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm">
                  透過 LINE 預約
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand values */}
        <section className="py-20 section-alt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="section-title">
              <p className="font-sans text-xs mb-3" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>BRAND VALUES</p>
              <h2 className="font-serif text-3xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.05em" }}>光宇方向的做法</h2>
              <div className="gold-diamond mt-3"><span /></div>
              <p className="mt-2 text-sm font-sans max-w-lg mx-auto" style={{ color: "#6E655A" }}>
                做法與界線都寫清楚，讓你知道會拿到什麼
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map((v) => (
                <div key={v.title} className="card-lift p-7 text-center space-y-4"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}>
                  <div className="w-14 h-14 flex items-center justify-center mx-auto"
                    style={{ background: "rgba(166,124,61,0.08)", border: "1px solid rgba(166,124,61,0.2)" }}>
                    <span className="font-serif text-xl font-semibold" style={{ color: "#A67C3D" }}>{v.char}</span>
                  </div>
                  <p className="font-serif text-lg font-semibold" style={{ color: "#2B2622" }}>{v.title}</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Difference comparison */}
        <section className="py-20" style={{ background: "#F1EAE0" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-sans text-xs mb-3" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>OUR DIFFERENCE</p>
            <h2 className="font-serif text-3xl font-semibold mb-4" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>光宇方向的不同</h2>
            <div className="gold-diamond mb-8"><span /></div>
            <p className="font-sans text-base leading-relaxed mb-12" style={{ color: "#6E655A" }}>
              命理的價值在於理解與選擇，而不是預言與判決。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 text-left space-y-3"
                style={{ background: "rgba(43,38,34,0.04)", border: "1px solid rgba(245,240,232,0.08)" }}>
                <p className="text-sm font-semibold font-sans text-center py-2 px-4"
                  style={{ background: "rgba(43,38,34,0.08)", color: "rgba(43,38,34,0.5)" }}>
                  只給結論的做法
                </p>
                {["告訴你結果","著重吉凶好壞","給出單一答案","讓你被動接受"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span style={{ color: "rgba(43,38,34,0.35)" }}>✗</span>
                    <span className="font-sans text-sm" style={{ color: "rgba(43,38,34,0.48)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <div className="p-7 text-left space-y-3"
                style={{ background: "rgba(166,124,61,0.06)", border: "1px solid rgba(166,124,61,0.3)" }}>
                <p className="text-sm font-semibold font-sans text-center py-2"
                  style={{ background: "#A67C3D", color: "#FFFFFF" }}>
                  光宇方向
                </p>
                {["幫你理解原因","整理你的現況","分析課題根源","提供方向與選擇權"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span style={{ color: "#06C755" }}>✓</span>
                    <span className="font-sans text-sm" style={{ color: "#2B2622" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 section-light">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <span className="font-display text-5xl leading-none" style={{ color: "rgba(166,124,61,0.4)" }}>"</span>
            <p className="font-serif text-2xl leading-relaxed" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>
              理解自己，整理處境，形成行動。
            </p>
            <span className="font-display text-5xl leading-none" style={{ color: "rgba(166,124,61,0.4)" }}>"</span>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 inline-flex">
              透過 LINE 預約
            </a>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
