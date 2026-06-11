import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務項目與定價 | 光宇方向命理研究所",
  description: "東方命理、西方命理、主題式分析、整合型報告。完整服務項目與定價一覽。",
};

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const categories = [
  {
    id: "oriental",
    icon: "東",
    title: "東方命理分析",
    subtitle: "ORIENTAL DIVINATION",
    desc: "以中華傳統命理系統，解析先天命格結構，掌握人生方向與流年趨勢。",
    dark: true,
    items: [
      { name: "八字命盤分析", price: "NT$1,200", desc: "解析人生結構，了解先天優勢與課題" },
      { name: "紫微斗數分析", price: "NT$1,600", desc: "從星宮位看人生，規劃未來方向" },
      { name: "雙系統整合（八字×紫微）", price: "NT$2,000", desc: "深度交叉分析，最完整的東方命理" },
      { name: "姓名學分析", price: "NT$800", desc: "姓名能量解析，找到最適合自己的名字" },
    ],
  },
  {
    id: "western",
    icon: "西",
    title: "西方命理占卜",
    subtitle: "WESTERN MYSTICISM",
    desc: "融合西方神秘學工具，探索內在特質與成長方向，從不同角度認識自己。",
    dark: false,
    items: [
      { name: "塔羅占卜（單題）", price: "NT$350", desc: "釐清當下狀態，提供方向與建議" },
      { name: "生命靈數分析", price: "NT$800", desc: "探索數字密碼，了解天賦與課題" },
      { name: "西洋占星分析", price: "NT$1,600", desc: "解析星盤結構，理解性格與人生模式" },
      { name: "感情深度分析", price: "NT$1,800", desc: "深入解析關係動態，提供具體改善方向" },
    ],
  },
  {
    id: "theme",
    icon: "✦",
    title: "主題式分析",
    subtitle: "THEME ANALYSIS",
    desc: "針對特定人生課題進行深度分析，提供具體可行的建議。",
    dark: true,
    items: [
      { name: "事業方向分析", price: "NT$800", desc: "職場定位、發展策略、決策時機" },
      { name: "感情關係分析", price: "NT$800", desc: "戀愛模式、伴侶選擇、關係改善" },
      { name: "財運與決策分析", price: "NT$800", desc: "財務規劃、投資時機、風險評估" },
      { name: "人際家庭健康分析", price: "NT$800", desc: "人際模式、家庭關係、健康注意事項" },
    ],
  },
  {
    id: "integrated",
    icon: "◎",
    title: "整合型報告",
    subtitle: "INTEGRATED REPORT",
    desc: "結合東西方命理視角，提供多角度的個人分析觀察與書面整理報告。",
    dark: false,
    items: [
      { name: "雙系統整合分析", price: "NT$2,000", desc: "八字×星盤，全方位了解自己" },
      { name: "感情深度整合分析", price: "NT$1,800", desc: "多工具交叉解析，看清關係本質" },
      { name: "整合型報告（主題式）", price: "NT$2,500", desc: "最完整的顧問式書面報告" },
      { name: "西洋占星分析", price: "NT$1,600", desc: "星象深度解讀，含流年預測" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0C1D2F 0%, #182F4A 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,166,58,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-gold/60 text-xs tracking-[0.3em] font-sans uppercase">Services & Pricing</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream tracking-wide">服務項目</h1>
            <div className="gold-divider max-w-xs mx-auto">
              <span className="text-gold/50 text-xs tracking-widest">完整服務・專業分析</span>
            </div>
            <p className="text-cream/60 font-sans text-sm leading-relaxed max-w-md mx-auto">
              多元命理工具整合，針對你的需求提供最適合的分析服務
            </p>
          </div>
        </section>

        {/* Tier selector info */}
        <section className="section-navy py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "入門嘗試", range: "NT$350–800", desc: "快速了解狀態與方向", badge: "適合初次諮詢" },
                { label: "深度分析", range: "NT$1,200–1,800", desc: "深入理解命格結構", badge: "適合進一步了解" },
                { label: "整合報告", range: "NT$2,000–2,500", desc: "最完整的全方位規劃", badge: "適合全面規劃" },
              ].map((tier) => (
                <div key={tier.label}
                  className="p-5 border border-gold/20 text-center space-y-2"
                  style={{ background: "rgba(24,47,74,0.4)" }}>
                  <p className="text-gold/60 text-[10px] tracking-widest font-sans">{tier.badge}</p>
                  <p className="font-serif text-lg font-semibold text-cream">{tier.label}</p>
                  <p className="text-gold text-sm font-semibold">{tier.range}</p>
                  <p className="text-cream/50 text-xs font-sans">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service categories */}
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-16 md:py-20"
            style={{
              background: cat.dark
                ? "linear-gradient(160deg, #0F2340 0%, #0C1D2F 100%)"
                : "#F5F1EA",
              color: cat.dark ? "#F5F1EA" : "#0C1D2F",
            }}
          >
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-10">
                {/* Left: Category info */}
                <div className="md:w-64 shrink-0 space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center font-serif text-2xl font-bold"
                    style={{
                      background: cat.dark ? "rgba(200,166,58,0.1)" : "rgba(12,29,47,0.07)",
                      border: `1px solid ${cat.dark ? "rgba(200,166,58,0.3)" : "rgba(12,29,47,0.15)"}`,
                      color: "#C8A63A",
                    }}>
                    {cat.icon}
                  </div>
                  <p className="text-[10px] tracking-[0.25em] font-sans"
                    style={{ color: cat.dark ? "rgba(200,166,58,0.5)" : "#8B7355" }}>
                    {cat.subtitle}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-wide">{cat.title}</h2>
                  <div className="ornament-line" style={{ opacity: cat.dark ? 0.3 : 0.2 }} />
                  <p className="text-sm leading-relaxed font-sans"
                    style={{ color: cat.dark ? "rgba(245,241,234,0.6)" : "rgba(12,29,47,0.6)" }}>
                    {cat.desc}
                  </p>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                    className={cat.dark ? "btn-outline text-xs inline-flex" : "btn-gold text-xs inline-flex"}
                    style={cat.dark ? {} : { color: "#0C1D2F", background: "#C8A63A" }}>
                    預約此類服務
                  </a>
                </div>

                {/* Right: Items */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name}
                      className="p-5 card-lift"
                      style={{
                        background: cat.dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
                        border: `1px solid ${cat.dark ? "rgba(200,166,58,0.15)" : "rgba(12,29,47,0.1)"}`,
                      }}>
                      <p className="font-serif text-base font-semibold mb-1">{item.name}</p>
                      <p className="text-xs leading-relaxed mb-3 font-sans"
                        style={{ color: cat.dark ? "rgba(245,241,234,0.55)" : "rgba(12,29,47,0.55)" }}>
                        {item.desc}
                      </p>
                      <p className="font-serif text-lg font-bold" style={{ color: "#C8A63A" }}>
                        {item.price}
                        <span className="text-xs font-sans ml-1" style={{ color: cat.dark ? "rgba(245,241,234,0.4)" : "rgba(12,29,47,0.4)" }}>起</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
