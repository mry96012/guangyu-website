import Link from "next/link";

const cases = [
  {
    id: "08-1",
    color: "#1A2D45",
    bg: "rgba(26,45,69,0.04)",
    tag: "事業轉換期",
    tagline: "找到熱情所在，勇敢踏出下一步",
    quote: "一直猶豫是否該離職創業，透過分析才發現自己的優勢與時機，更有信心做出決定！",
    problem: "不知道是否該離職創業，擔心時機不對或能力不足。",
    tools:   "八字分析 + 紫微斗數",
    focus:   "事業運勢、天賦特質、流年時機、適合發展方向",
    result:  "了解自己的優勢與最佳時機，順利轉換跑道創業成功。",
    feedback:"「報告內容非常詳細，讓我看見自己的價值與方向，感謝老師的專業與耐心！」",
    emoji:   "👔",
  },
  {
    id: "08-2",
    color: "#C0453A",
    bg: "rgba(192,69,58,0.04)",
    tag: "感情反覆內耗",
    tagline: "看見關係模式，學會愛與被愛",
    quote: "總是在感情裡受傷，透過分析看見彼此互動模式，學會先愛自己，關係也慢慢改善。",
    problem: "總是遇到類似感情模式，關係反覆受傷、難以穩定。",
    tools:   "塔羅占卜 + 生命靈數",
    focus:   "感情互動模式、內在需求、吸引力法則、成長課題",
    result:  "看見自己的相處盲點，調整溝通方式，關係更穩定和諧。",
    feedback:"「老師的分析很準確，讓我更理解自己，也更有力量去經營一段健康的關係！」",
    emoji:   "💗",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>真實案例分享</h2>
          <div className="gold-diamond"><span /></div>
          <p>陪伴你走過迷惘，找到專屬的方向</p>
        </div>
        <p className="text-center text-sm font-sans mb-12" style={{ color: "#6B7E90" }}>
          每個案例都是一段真實的轉變故事，透過命理工具的協助，更清楚理解自己，做出更適合的選擇。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: `1px solid ${c.color}18`,
                boxShadow: "0 4px 20px rgba(26,45,69,0.07)",
              }}
            >
              {/* Header */}
              <div className="px-7 pt-7 pb-5" style={{ background: c.bg }}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold font-sans px-3 py-1.5 rounded-full"
                    style={{ background: c.color, color: "#fff" }}
                  >
                    {c.tag}
                  </span>
                </div>
                <p className="font-serif text-xl font-semibold" style={{ color: c.color }}>{c.tagline}</p>

                {/* Quote */}
                <div className="mt-4 pl-4" style={{ borderLeft: `3px solid ${c.color}40` }}>
                  <p className="text-sm font-sans italic leading-relaxed" style={{ color: "#5A6E82" }}>
                    "{c.quote}"
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="px-7 py-5 space-y-3">
                {[
                  { icon: "👤", label: "問題",    value: c.problem },
                  { icon: "🔧", label: "使用工具", value: c.tools },
                  { icon: "📊", label: "分析重點", value: c.focus },
                  { icon: "💡", label: "結果",    value: c.result },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <span className="w-6 text-center text-sm mt-0.5">{row.icon}</span>
                    <span
                      className="text-xs font-semibold font-sans shrink-0 mt-0.5"
                      style={{ color: c.color, minWidth: "52px" }}
                    >
                      {row.label}
                    </span>
                    <p className="text-sm font-sans leading-relaxed" style={{ color: "#5A6E82" }}>
                      {row.value}
                    </p>
                  </div>
                ))}

                {/* Feedback */}
                <div
                  className="mt-4 px-4 py-3 rounded-xl"
                  style={{ background: "rgba(184,144,42,0.06)", border: "1px solid rgba(184,144,42,0.15)" }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs">💛</span>
                    <span className="text-xs font-semibold font-sans" style={{ color: "#B8902A" }}>客戶回饋</span>
                  </div>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: "#4A5E72" }}>
                    {c.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <p className="font-serif text-base" style={{ color: "#1A2D45" }}>
              每個故事，都是改變的開始
            </p>
          </div>
          <Link href="/cases" className="btn-navy text-sm px-6 py-3 inline-flex items-center gap-2">
            查看更多案例 →
          </Link>
        </div>
      </div>
    </section>
  );
}
