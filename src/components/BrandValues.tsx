const values = [
  {
    id: "03-1",
    emoji: "🧭",
    title: "專業整合",
    desc: "結合東方命理與西方占卜、占星與數字能量等工具，多角度綜合分析，提供更全面的理解與建議。",
  },
  {
    id: "03-2",
    emoji: "👤",
    title: "個人化解讀",
    desc: "根據你的生命資訊與提問，量身打造專屬解讀，不套版、不制式，讓你真正看見自己。",
  },
  {
    id: "03-3",
    emoji: "🤝",
    title: "理解與陪伴",
    desc: "不預測未來、也不製造恐懼，協助你整理現況、釐清課題，陪你一起找到方向。",
  },
  {
    id: "03-4",
    emoji: "📋",
    title: "書面報告",
    desc: "提供清楚完整的書面報告，重點整理、易於理解，方便你隨時保存與回顧。",
  },
];

export default function BrandValues() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>我們的核心價值</h2>
          <div className="gold-diamond"><span /></div>
          <p>不只是命理分析，更是陪伴你理解自己、找到方向的專業顧問</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((v) => (
            <div
              key={v.id}
              className="card-lift p-7 rounded-2xl text-center space-y-4"
              style={{
                background: "#fff",
                border: "1px solid rgba(184,144,42,0.15)",
                boxShadow: "0 2px 12px rgba(26,45,69,0.05)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto text-2xl"
                style={{ background: "rgba(184,144,42,0.08)", border: "1px solid rgba(184,144,42,0.2)" }}
              >
                {v.emoji}
              </div>
              <p
                className="font-serif font-semibold text-lg"
                style={{ color: "#1A2D45" }}
              >
                {v.title}
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div
          className="mt-14 py-5 px-8 rounded-2xl text-center"
          style={{ background: "rgba(26,45,69,0.03)", border: "1px solid rgba(184,144,42,0.12)" }}
        >
          <p className="font-sans text-sm" style={{ color: "#4A5E72" }}>
            我們相信：
            <span className="font-semibold" style={{ color: "#B8902A" }}>了解自己</span>，是改變的開始；
            <span className="font-semibold" style={{ color: "#1A2D45" }}>理解課題</span>，是成長的力量；
            <span className="font-semibold" style={{ color: "#B8902A" }}>找到方向</span>，是人生的光。
          </p>
        </div>
      </div>
    </section>
  );
}
