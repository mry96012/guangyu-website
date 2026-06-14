import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const services = [
  {
    id: "05-1",
    emoji: "☯️",
    title: "八字分析",
    price: "NT$600 起",
    desc: "解析命盤結構、五行能量、喜用神，幫助你了解性格特質、人生方向與重要課題。",
    tags: ["命盤結構", "五行分析", "流年運勢"],
    color: "#1A2D45",
    bg: "rgba(26,45,69,0.04)",
  },
  {
    id: "05-2",
    emoji: "🏯",
    title: "紫微斗數分析",
    price: "NT$1,600 起",
    desc: "透過命宮與十二宮位解析，深入看見你的天賦、性格、人際關係與人生格局。",
    tags: ["命盤解析", "十二宮位", "流年重點"],
    color: "#6B4FA0",
    bg: "rgba(107,79,160,0.04)",
  },
  {
    id: "05-3",
    emoji: "⚛️",
    title: "雙系統整合",
    price: "NT$2,000 起",
    desc: "八字 × 紫微斗數綜合分析，雙重視角互補驗證，提供更全面、立體的人生解析。",
    tags: ["八字分析", "紫微分析", "交叉驗證"],
    color: "#2E7D56",
    bg: "rgba(46,125,86,0.04)",
  },
  {
    id: "05-4",
    emoji: "🎴",
    title: "塔羅占卜",
    price: "NT$350 起",
    desc: "釐清當下問題與選擇方向，提供逐步指引與實際建議，協助你看見更多可能性。",
    tags: ["問題釐清", "選擇指引", "能量狀態"],
    color: "#C0453A",
    bg: "rgba(192,69,58,0.04)",
  },
  {
    id: "05-5",
    emoji: "🔢",
    title: "生命靈數分析",
    price: "NT$800 起",
    desc: "從數字中看見你的天賦、性格特質與人生課題，找到屬於你的成長方向與節奏。",
    tags: ["性格特質", "天賦優勢", "人生課題"],
    color: "#2B6CB0",
    bg: "rgba(43,108,176,0.04)",
  },
  {
    id: "05-6",
    emoji: "🪐",
    title: "西洋占星分析",
    price: "NT$1,600 起",
    desc: "解析本命星盤，了解你的性格、情感、天賦與潛能，掌握人生議題與成長方向。",
    tags: ["星盤解析", "行星相位", "天賦潛能"],
    color: "#1A2D45",
    bg: "rgba(26,45,69,0.04)",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>為你推薦的服務</h2>
          <div className="gold-diamond"><span /></div>
          <p className="font-sans" style={{ color: "#6B7E90" }}>
            ─── 多元命理工具，從不同角度理解你的人生 ───
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div
              key={s.id}
              className="card-lift rounded-2xl p-6 space-y-4 flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid rgba(26,45,69,0.08)",
                boxShadow: "0 2px 12px rgba(26,45,69,0.04)",
              }}
            >
              {/* Icon + Title + Price */}
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: s.bg, border: `1px solid ${s.color}22` }}
                >
                  {s.emoji}
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold" style={{ color: "#1A2D45" }}>{s.title}</p>
                  <p className="font-semibold text-base mt-0.5" style={{ color: "#B8902A" }}>{s.price}</p>
                </div>
              </div>

              {/* Desc */}
              <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: "#5A6E82" }}>{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-sans px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(184,144,42,0.08)", color: "#8B7355", border: "1px solid rgba(184,144,42,0.15)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                style={{ color: s.color }}
              >
                了解更多 →
              </Link>
            </div>
          ))}
        </div>

        {/* Reminder */}
        <div
          className="mt-12 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ background: "rgba(26,45,69,0.03)", border: "1px solid rgba(184,144,42,0.15)" }}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5">💡</span>
            <p className="text-sm font-sans" style={{ color: "#4A5E72" }}>
              <strong style={{ color: "#1A2D45" }}>小提醒：</strong>
              每一種工具都有其擅長的面向，若想要更全面理解自己，建議選擇「整合型分析服務」，
              從多角度深入看見真實的你。
            </p>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy text-xs px-5 py-3 shrink-0 inline-flex items-center gap-2"
          >
            📅 預約諮詢
          </a>
        </div>
      </div>
    </section>
  );
}
