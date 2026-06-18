const features = [
  {
    id: "07-1",
    emoji: "☯️",
    title: "東西方整合",
    desc: "結合東方命理與西方占卜、占星與數字能量等工具，從不同角度交叉分析，提供更全面的理解與建議。",
  },
  {
    id: "07-2",
    emoji: "📊",
    title: "專業與經驗",
    desc: "多年命理實務經驗，累積上千位個案分析，用專業態度與嚴謹分析，提供值得信賴的服務內容。",
  },
  {
    id: "07-3",
    emoji: "⚖️",
    title: "客觀中立",
    desc: "不預設立場、不批判對錯，客觀呈現命盤訊息與可能性，協助你看見真實的自己，並做出更清晰的決定。",
  },
  {
    id: "07-4",
    emoji: "💛",
    title: "顧問式陪伴",
    desc: "不只給答案，更在過程中陪伴你整理情緒、釐清課題，讓命理成為你人生路上的光與方向。",
  },
];

export default function BrandFeatures() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>品牌特色與優勢</h2>
          <div className="gold-diamond"><span /></div>
          <p>我們用專業、真誠與整合的力量，陪伴你在人生的每個階段，做出更適合自己的選擇</p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f) => (
            <div
              key={f.id}
              className="card-lift rounded-2xl p-7 space-y-4 text-center"
              style={{
                background: "#fff",
                border: "1px solid rgba(26,45,69,0.08)",
                boxShadow: "0 2px 12px rgba(26,45,69,0.04)",
              }}
            >
              {/* Icon circle with image placeholder */}
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl relative"
                style={{ background: "rgba(184,144,42,0.06)", border: "1px solid rgba(184,144,42,0.15)" }}
              >
                {f.emoji}
                {/* Image placeholder overlay comment */}
                {/* Replace emoji with: <Image src={`/images/feature-${f.id}.png`} fill … /> */}
              </div>
              <p className="font-serif text-lg font-semibold" style={{ color: "#1A2D45" }}>{f.title}</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Dark quote band */}
        <div
          className="mt-14 py-10 px-8 rounded-2xl text-center space-y-6"
          style={{ background: "#1A2D45" }}
        >
          <div>
            <span className="text-3xl" style={{ color: "#B8902A" }}>"</span>
            <p className="font-serif text-lg md:text-xl text-white mt-2 leading-relaxed">
              我們相信，命理的價值不在於預測未來，
              <br className="hidden md:block" />
              而是幫助你理解當下，找到更適合自己的方向與選擇
            </p>
            <span className="text-3xl" style={{ color: "#B8902A" }}>"</span>
          </div>
          <a
            href="https://line.me/R/ti/p/%40enlite731"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-sm"
          >
            📅 立即預約，體驗光宇方向的服務
          </a>
        </div>
      </div>
    </section>
  );
}
