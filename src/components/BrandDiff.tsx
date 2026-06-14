const general = [
  { icon: "🔮", text: "告訴你結果", sub: "直接給出結論，著重吉凶與好壞。" },
  { icon: "🎱", text: "預測未來",   sub: "強調未來會發生什麼，容易造成焦慮。" },
  { icon: "💬", text: "單一答案",   sub: "給出唯一建議，缺乏彈性與思考空間。" },
  { icon: "😔", text: "被動接受",   sub: "讓人感到無力，只能聽天由命。" },
];

const guangyu = [
  { icon: "🔍", text: "理解原因", sub: "深入解析命盤結構，了解背後的原因與脈絡。" },
  { icon: "📋", text: "整理現況", sub: "協助看清目前的狀態、課題與資源。" },
  { icon: "🎯", text: "分析課題", sub: "找出關鍵影響因素，釐清盲點與成長機會。" },
  { icon: "🧭", text: "提供方向", sub: "提供多元建議與可能性，適合你的選擇方向。" },
  { icon: "🤝", text: "保留選擇權", sub: "尊重你的決定，陪伴你走在屬於自己的路上。" },
];

export default function BrandDiff() {
  return (
    <section className="py-20" style={{ background: "#1A2D45" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans tracking-widest mb-3" style={{ color: "rgba(184,144,42,0.7)" }}>
            NOT JUST FORTUNE-TELLING
          </p>
          <h2 className="font-serif text-3xl font-semibold text-white tracking-wide">光宇方向的不同</h2>
          <div className="gold-diamond mt-3 mb-4"><span /></div>
          <p className="text-sm font-sans" style={{ color: "rgba(255,255,255,0.55)" }}>
            不只是算命，更是專業顧問式命理服務
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-start">
          {/* Left: General */}
          <div
            className="lg:col-span-5 rounded-2xl p-7 space-y-5"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p
              className="text-center text-sm font-semibold font-sans py-2 px-4 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
            >
              一般命理服務
            </p>
            <div className="space-y-4">
              {general.map((g) => (
                <div key={g.text} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    {g.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-sans" style={{ color: "rgba(255,255,255,0.65)" }}>{g.text}</p>
                    <p className="text-xs font-sans mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{g.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-2 py-2 px-4 rounded-xl text-center text-xs font-sans"
              style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)" }}
            >
              😟 結果導向，容易產生依賴與恐懼
            </div>
          </div>

          {/* VS */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "#B8902A", color: "#fff", flexShrink: 0 }}
            >
              VS
            </div>
          </div>

          {/* Right: Guangyu */}
          <div
            className="lg:col-span-5 rounded-2xl p-7 space-y-5"
            style={{ background: "rgba(184,144,42,0.08)", border: "1px solid rgba(184,144,42,0.3)" }}
          >
            <p
              className="text-center text-sm font-semibold font-sans py-2 px-4 rounded-full"
              style={{ background: "#B8902A", color: "#fff" }}
            >
              光宇方向命理研究所
            </p>
            <div className="space-y-4">
              {guangyu.map((g) => (
                <div key={g.text} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{ background: "rgba(184,144,42,0.15)" }}
                  >
                    {g.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-sans" style={{ color: "#E8D08A" }}>{g.text}</p>
                    <p className="text-xs font-sans mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{g.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-2 py-2 px-4 rounded-xl text-center text-xs font-sans"
              style={{ background: "rgba(184,144,42,0.15)", color: "#E8D08A" }}
            >
              😊 理解導向，帶來力量與清晰的選擇
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-14 text-center space-y-2">
          <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            我們不是要取代你的決定，而是成為你在重要時刻的參考與支持，
          </p>
          <p className="font-serif text-xl font-semibold" style={{ color: "#E8D08A" }}>
            讓你在混亂中，看見更適合自己的方向。
          </p>
        </div>
      </div>
    </section>
  );
}
