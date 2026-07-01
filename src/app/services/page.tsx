import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務項目與定價 | 光宇方向命理研究所",
  description: "東方命理、西方命理、主題式分析、整合型報告。完整服務項目與定價一覽。",
};

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const themes = [
  { emoji: "💑", label: "感情", desc: "感情模式、關係困擾、吸引力法則與未來發展。", hint: "適合：感情停滯、重複同樣模式、想釐清緣分走向" },
  { emoji: "💼", label: "事業", desc: "職涯定位、發展方向、決策時機與天賦優勢。", hint: "適合：轉職迷惘、創業評估、不知道自己適合什麼" },
  { emoji: "💰", label: "財運", desc: "財務規劃、投資時機、金錢流動與財富能量。", hint: "適合：財運起伏、想掌握財務節奏、投資決策" },
  { emoji: "🤝", label: "人際", desc: "人際模式、職場關係、貴人能量與小人防範。", hint: "適合：人際摩擦、職場困境、想改善溝通方式" },
  { emoji: "🏠", label: "家庭", desc: "親子關係、家族課題、婚姻狀況與家庭和諧。", hint: "適合：親子衝突、婚姻困惑、家庭角色課題" },
  { emoji: "🧭", label: "人生方向", desc: "人生目標、價值觀、轉職選擇與未來方向。", hint: "適合：感覺迷失、找不到意義、想重新定位自己" },
];

const packages = [
  {
    id: "p1",
    title: "基礎命理解讀",
    badge: "適合初次諮詢者",
    price: "NT$2,800",
    duration: "60 分鐘",
    desc: "了解先天格局、性格特質、運勢趨勢與目前課題，給出具體建議與方向。",
    highlight: false,
  },
  {
    id: "p2",
    title: "流年運勢分析",
    badge: "最多人選擇",
    price: "NT$3,800",
    duration: "60 分鐘",
    desc: "針對當年運勢、事業、財運、感情、健康等重點分析，提供年度策略與建議。",
    highlight: true,
  },
  {
    id: "p3",
    title: "關係合盤諮詢",
    badge: "伴侶 / 合作 / 親子",
    price: "NT$4,800",
    duration: "90 分鐘",
    desc: "分析雙方互動模式、緣分深度、相處課題與未來發展，促進理解與和諧。",
    highlight: false,
  },
  {
    id: "p4",
    title: "命理 + 晶石能量",
    badge: "提升能量磁場",
    price: "NT$5,800",
    duration: "90 分鐘",
    desc: "結合命理分析與晶石能量建議，客製化適合你的能量調整，提升磁場與運勢。",
    highlight: false,
  },
];

const tools = [
  { id: "s1", emoji: "☯️", title: "八字分析",     price: "NT$600 起",   desc: "解析命盤結構、五行能量、喜用神，幫助你了解性格特質、人生方向與重要課題。",     tags: ["命盤結構", "五行分析", "流年運勢"] },
  { id: "s2", emoji: "🏯", title: "紫微斗數分析", price: "NT$1,600 起", desc: "透過命宮與十二宮位解析，深入看見你的天賦、性格、人際關係與人生格局。",        tags: ["命盤解析", "十二宮位", "流年重點"] },
  { id: "s3", emoji: "⚛️", title: "雙系統整合",   price: "NT$2,000 起", desc: "八字 × 紫微斗數綜合分析，雙重視角互補驗證，提供更全面、立體的人生解析。",      tags: ["八字分析", "紫微分析", "交叉驗證"] },
  { id: "s4", emoji: "🎴", title: "塔羅占卜",     price: "NT$350 起",   desc: "釐清當下問題與選擇方向，提供逐步指引與實際建議，協助你看見更多可能性。",        tags: ["問題釐清", "選擇指引", "能量狀態"] },
  { id: "s5", emoji: "🔢", title: "生命靈數分析", price: "NT$800 起",   desc: "從數字中看見你的天賦、性格特質與人生課題，找到屬於你的成長方向與節奏。",        tags: ["性格特質", "天賦優勢", "人生課題"] },
  { id: "s6", emoji: "🪐", title: "西洋占星分析", price: "NT$1,600 起", desc: "解析本命星盤，了解你的性格、情感、天賦與潛能，掌握人生議題與成長方向。",        tags: ["星盤解析", "行星相位", "天賦潛能"] },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,144,42,0.08) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>
              SERVICES & PRICING
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#1A2D45" }}>
              服務項目
            </h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed max-w-md mx-auto" style={{ color: "#5A6E82" }}>
              從你最在意的問題出發，找到最適合的諮詢方式
            </p>
          </div>
        </section>

        {/* ── STEP 1: 選擇主題 ── */}
        <section className="py-20 section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "#1A2D45", color: "#E8D08A" }}>1</div>
              <h2 className="font-serif text-2xl font-semibold" style={{ color: "#1A2D45" }}>我想了解的主題是…</h2>
            </div>
            <p className="font-sans text-sm mb-10 pl-12" style={{ color: "#6B7E90" }}>
              選擇你最想深入的議題，老師會針對此主題進行重點解析
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {themes.map((t) => (
                <a
                  key={t.label}
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl p-6 space-y-3 transition-all duration-200 cursor-pointer"
                  style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)", boxShadow: "0 2px 12px rgba(26,45,69,0.04)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{t.emoji}</span>
                    <p className="font-serif text-lg font-semibold" style={{ color: "#1A2D45" }}>{t.label}分析</p>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>{t.desc}</p>
                  <p className="font-sans text-xs leading-relaxed p-3 rounded-xl"
                    style={{ background: "rgba(184,144,42,0.06)", color: "#8A6A1A", border: "1px solid rgba(184,144,42,0.15)" }}>
                    {t.hint}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold font-sans" style={{ color: "#B8902A" }}>
                    <span>預約此主題</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEP 2: 選擇方案 ── */}
        <section className="py-20 section-alt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "#1A2D45", color: "#E8D08A" }}>2</div>
              <h2 className="font-serif text-2xl font-semibold" style={{ color: "#1A2D45" }}>選擇適合的諮詢方案</h2>
            </div>
            <p className="font-sans text-sm mb-10 pl-12" style={{ color: "#6B7E90" }}>
              不確定選哪個？加入 LINE 告知你的主題，老師會直接給建議
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((p) => (
                <div
                  key={p.id}
                  className="card-lift rounded-2xl p-6 space-y-4 flex flex-col relative"
                  style={{
                    background: p.highlight ? "#1A2D45" : "#fff",
                    border: p.highlight ? "2px solid #B8902A" : "1px solid rgba(26,45,69,0.1)",
                    boxShadow: p.highlight ? "0 8px 32px rgba(184,144,42,0.2)" : "0 2px 12px rgba(26,45,69,0.05)",
                  }}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold font-sans"
                      style={{ background: "#B8902A", color: "#fff" }}>
                      ⭐ 推薦
                    </div>
                  )}
                  <p className="text-xs font-sans rounded-full px-3 py-1.5 text-center"
                    style={{
                      background: p.highlight ? "rgba(184,144,42,0.2)" : "rgba(184,144,42,0.08)",
                      color: p.highlight ? "#E8D08A" : "#8B7355",
                    }}>
                    {p.badge}
                  </p>
                  <p className="font-serif text-xl font-semibold text-center"
                    style={{ color: p.highlight ? "#fff" : "#1A2D45" }}>
                    {p.title}
                  </p>
                  <div className="text-center">
                    <p className="font-serif text-3xl font-bold" style={{ color: "#B8902A" }}>{p.price}</p>
                    <p className="text-xs font-sans mt-1" style={{ color: p.highlight ? "rgba(255,255,255,0.5)" : "#8A9BAC" }}>
                      ⏱ {p.duration}
                    </p>
                  </div>
                  <p className="font-sans text-sm leading-relaxed flex-1 text-center"
                    style={{ color: p.highlight ? "rgba(255,255,255,0.65)" : "#5A6E82" }}>
                    {p.desc}
                  </p>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                    className={p.highlight ? "btn-gold w-full justify-center text-sm" : "btn-outline w-full justify-center text-sm"}
                    style={{ display: "flex" }}>
                    加入 LINE 預約
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "🎁", label: "首次諮詢加贈", value: "專屬命盤摘要書（電子檔）" },
                { icon: "⚙️", label: "方案可客製化", value: "依需求調整諮詢內容與時間" },
                { icon: "🔄", label: "回訪優惠",     value: "回診諮詢享 9 折優惠" },
              ].map((e) => (
                <div key={e.label} className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.15)" }}>
                  <span className="text-2xl">{e.icon}</span>
                  <div>
                    <p className="text-sm font-semibold font-sans" style={{ color: "#1A2D45" }}>{e.label}</p>
                    <p className="text-xs font-sans mt-0.5" style={{ color: "#5A6E82" }}>{e.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 命理工具詳情 ── */}
        <section id="tools" className="py-20 section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="section-title">
              <h2>命理工具說明</h2>
              <div className="gold-diamond"><span /></div>
              <p>光宇整合 5 大命理系統，多角度交叉分析，讓解讀更精準立體</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {tools.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="card-lift rounded-2xl p-6 space-y-4 flex flex-col"
                  style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)", boxShadow: "0 2px 12px rgba(26,45,69,0.04)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: "rgba(184,144,42,0.07)", border: "1px solid rgba(184,144,42,0.15)" }}>
                      {s.emoji}
                    </div>
                    <div>
                      <p className="font-serif text-lg font-semibold" style={{ color: "#1A2D45" }}>{s.title}</p>
                      <p className="font-semibold text-base mt-0.5" style={{ color: "#B8902A" }}>{s.price}</p>
                    </div>
                  </div>
                  <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: "#5A6E82" }}>{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs font-sans px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(184,144,42,0.08)", color: "#8B7355", border: "1px solid rgba(184,144,42,0.15)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-semibold font-sans rounded-lg py-2.5 text-white transition-all duration-200"
                    style={{ background: "#06C755" }}>
                    LINE 預約此工具
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process + FAQ inline ── */}
        <section className="py-16 section-alt">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="font-serif text-xl font-semibold mb-6" style={{ color: "#1A2D45" }}>諮詢流程</p>
                <div className="space-y-4">
                  {["預約諮詢","填寫資料","專業諮詢","報告製作","報告交付"].map((s, i) => (
                    <div key={s} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                        style={{ background: "#1A2D45", color: "#E8D08A" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="font-sans text-sm font-semibold" style={{ color: "#1A2D45" }}>{s}</p>
                      {i < 4 && <div className="flex-1 h-px" style={{ background: "rgba(184,144,42,0.2)" }} />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold mb-6" style={{ color: "#1A2D45" }}>常見問題 FAQ</p>
                <div className="space-y-4">
                  {[
                    { q: "報告多久收到？", a: "依服務內容不同，約 1–4 個工作天。" },
                    { q: "需要哪些資料？", a: "出生年月日時間（越準越好）與出生地即可。不確定出生時間也沒關係，老師會提供評估建議。" },
                    { q: "可以退款嗎？",   a: "依服務內容不同，原則上不提供退款。詳情請洽詢。" },
                  ].map((faq) => (
                    <div key={faq.q} className="space-y-1">
                      <p className="text-sm font-semibold font-sans" style={{ color: "#1A2D45" }}>Q：{faq.q}</p>
                      <p className="text-sm font-sans leading-relaxed" style={{ color: "#5A6E72" }}>A：{faq.a}</p>
                    </div>
                  ))}
                </div>
                <Link href="/faq" className="mt-4 inline-block text-sm font-semibold" style={{ color: "#B8902A" }}>
                  查看更多 FAQ →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
