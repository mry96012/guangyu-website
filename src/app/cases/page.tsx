import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "客戶案例 | 光宇方向命理研究所",
  description: "真實客戶案例分享，透過命理分析找到人生方向的真實故事。",
};

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const cases = [
  {
    tag: "事業轉換期",
    tagColor: "#1A2D45",
    tagline: "找到熱情所在，勇敢踏出下一步",
    quote: "一直猶豫是否該離職創業，透過分析才發現自己的優勢與時機，更有信心做出決定！",
    problem: "不知道是否該離職創業，擔心時機不對或能力不足。",
    tools: "八字分析 + 紫微斗數",
    focus: "事業運勢、天賦特質、流年時機、適合發展方向",
    result: "了解自己的優勢與最佳時機，順利轉換跑道創業成功。",
    feedback: "「報告內容非常詳細，讓我看見自己的價值與方向，感謝老師的專業與耐心！」",
    emoji: "👔",
  },
  {
    tag: "感情反覆內耗",
    tagColor: "#C0453A",
    tagline: "看見關係模式，學會愛與被愛",
    quote: "總是在感情裡受傷，透過分析看見彼此互動模式，學會先愛自己，關係也慢慢改善。",
    problem: "總是遇到類似感情模式，關係反覆受傷、難以穩定。",
    tools: "塔羅占卜 + 生命靈數",
    focus: "感情互動模式、內在需求、吸引力法則、成長課題",
    result: "看見自己的相處盲點，調整溝通方式，關係更穩定和諧。",
    feedback: "「老師的分析很準確，讓我更理解自己，也更有力量去經營一段健康的關係！」",
    emoji: "💗",
  },
  {
    tag: "財運與投資",
    tagColor: "#B8902A",
    tagline: "了解財務週期，做出更明智的決策",
    quote: "透過流年分析了解自己的財運週期，避開了幾個不適合投資的時間點，省下了很多損失。",
    problem: "想了解近期財運走向，以及適合投資的時機點。",
    tools: "八字分析 + 流年運勢",
    focus: "財運週期、投資時機、金錢能量、風險評估",
    result: "掌握自己的財運週期，在適合的時機做出決策，財務更穩定。",
    feedback: "「老師的分析非常實用，讓我在做財務決策時更有依據，很有幫助！」",
    emoji: "💰",
  },
  {
    tag: "人際關係調整",
    tagColor: "#4A9E6E",
    tagline: "看清人際模式，建立更好的關係",
    quote: "在職場上一直有人際困擾，透過分析了解自己的人際模式後，開始調整相處方式，關係改善很多。",
    problem: "職場人際關係緊張，不知道如何與同事、主管相處。",
    tools: "紫微斗數 + 西洋占星",
    focus: "人際互動模式、職場關係、溝通風格、貴人方向",
    result: "了解自己的人際特質，調整溝通方式，職場關係明顯改善。",
    feedback: "「讓我更理解自己的溝通模式，也知道如何與不同個性的人相處，非常實用！」",
    emoji: "🤝",
  },
];

export default function CasesPage() {
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
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>CASE STUDIES</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#1A2D45" }}>客戶案例</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>
              每個案例都是一段真實的轉變故事，透過命理工具的協助，更清楚理解自己，做出更適合的選擇。
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-4 pb-12 section-light">
          <div className="max-w-3xl mx-auto px-6 space-y-4 text-center">
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E72" }}>
              以下案例皆來自真實諮詢個案，內容經客戶同意分享，並已調整足以識別身份的細節（姓名、地點與部分時間資訊），以保護客戶隱私。每個案例呈現的問題、使用工具與分析重點，目的是讓你在預約前更清楚了解光宇方向的諮詢方式與服務深度，而不是預測式的「算命結果」。
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E72" }}>
              我們發現多數客戶來諮詢的時間點，通常落在人生轉換的關鍵階段：工作去留、感情卡關、財務決策或是人際壓力累積到一定程度。命理工具在這裡扮演的角色，不是給出唯一答案，而是協助客戶看清自己的處境、盤點手上的資源與選項，再由客戶自己做決定。
            </p>
          </div>
        </section>

        {/* Cases grid */}
        <section className="py-12 section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cases.map((c, i) => (
                <div key={i} className="rounded-2xl overflow-hidden"
                  style={{ background: "#fff", border: `1px solid ${c.tagColor}18`, boxShadow: "0 4px 20px rgba(26,45,69,0.07)" }}>
                  <div className="px-7 pt-7 pb-5" style={{ background: `${c.tagColor}06` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{c.emoji}</span>
                      <span className="text-xs font-semibold font-sans px-3 py-1.5 rounded-full"
                        style={{ background: c.tagColor, color: "#fff" }}>
                        {c.tag}
                      </span>
                    </div>
                    <p className="font-serif text-xl font-semibold" style={{ color: c.tagColor }}>{c.tagline}</p>
                    <div className="mt-4 pl-4" style={{ borderLeft: `3px solid ${c.tagColor}40` }}>
                      <p className="text-sm font-sans italic leading-relaxed" style={{ color: "#5A6E82" }}>
                        "{c.quote}"
                      </p>
                    </div>
                  </div>
                  <div className="px-7 py-5 space-y-3">
                    {[
                      { icon: "👤", label: "問題",     value: c.problem },
                      { icon: "🔧", label: "使用工具", value: c.tools },
                      { icon: "📊", label: "分析重點", value: c.focus },
                      { icon: "💡", label: "結果",     value: c.result },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="w-6 text-center text-sm mt-0.5">{row.icon}</span>
                        <span className="text-xs font-semibold font-sans shrink-0 mt-0.5"
                          style={{ color: c.tagColor, minWidth: "52px" }}>{row.label}</span>
                        <p className="text-sm font-sans leading-relaxed" style={{ color: "#5A6E82" }}>{row.value}</p>
                      </div>
                    ))}
                    <div className="mt-4 px-4 py-3 rounded-xl"
                      style={{ background: "rgba(184,144,42,0.06)", border: "1px solid rgba(184,144,42,0.15)" }}>
                      <p className="text-xs font-semibold font-sans mb-1" style={{ color: "#B8902A" }}>💛 客戶回饋</p>
                      <p className="text-sm font-sans leading-relaxed" style={{ color: "#4A5E72" }}>{c.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 section-alt">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-3xl font-semibold" style={{ color: "#1A2D45" }}>
              準備好開始你的故事了嗎？
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: "#5A6E72" }}>
              每個人都有屬於自己的命盤，光宇方向陪你看懂自己，走出屬於你的光明道路。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 inline-flex">
              預約諮詢 →
            </a>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
