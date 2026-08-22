const values = [
  {
    num: "一",
    title: "專業整合",
    desc: "結合東方命理與西方占卜、占星與數字能量等工具，多角度綜合分析，提供更全面的理解與建議。",
  },
  {
    num: "二",
    title: "個人化解讀",
    desc: "根據你的生命資訊與提問，量身打造專屬解讀，不套版、不制式，讓你真正看見自己。",
  },
  {
    num: "三",
    title: "理解與陪伴",
    desc: "不預測未來、也不製造恐懼，協助你整理現況、釐清課題，陪你一起找到方向。",
  },
  {
    num: "四",
    title: "書面報告",
    desc: "提供清楚完整的書面報告，重點整理、易於理解，方便你隨時保存與回顧。",
  },
];

export default function BrandValues() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-title">
          <h2>我們的核心價值</h2>
          <div className="gold-diamond"><span /></div>
          <p>不只是命理分析，更是陪伴你理解自己、找到方向的專業顧問</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {values.map((v) => (
            <div
              key={v.num}
              className="card-lift p-7 space-y-4"
              style={{
                background: "#1E1A14",
                border: "1px solid rgba(201,169,106,0.13)",
              }}
            >
              <p
                className="font-display font-bold"
                style={{ color: "#C9A96A", fontSize: "1.4rem", opacity: 0.65 }}
              >
                {v.num}
              </p>
              <p className="font-serif font-semibold text-base" style={{ color: "#EDE8E0" }}>
                {v.title}
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(237,232,224,0.52)" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-14 py-5 px-8 text-center"
          style={{
            background: "rgba(201,169,106,0.05)",
            border: "1px solid rgba(201,169,106,0.11)",
          }}
        >
          <p className="font-sans text-sm" style={{ color: "rgba(237,232,224,0.58)" }}>
            我們相信：
            <span className="font-semibold" style={{ color: "#C9A96A" }}>了解自己</span>，是改變的開始；
            <span className="font-semibold" style={{ color: "#EDE8E0" }}>理解課題</span>，是成長的力量；
            <span className="font-semibold" style={{ color: "#C9A96A" }}>找到方向</span>，是人生的光。
          </p>
        </div>
      </div>
    </section>
  );
}
