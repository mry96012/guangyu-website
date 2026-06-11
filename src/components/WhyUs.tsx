const reasons = [
  {
    num: "01",
    title: "專業顧問式服務",
    desc: "不只是告訴你答案，而是陪你整理現況、釐清課題，讓你對自己有更清楚的認識。",
    icon: "◈",
  },
  {
    num: "02",
    title: "多元工具整合",
    desc: "結合東西方命理工具，從多個角度觀察，協助你更完整地理解自己的狀態。",
    icon: "✦",
  },
  {
    num: "03",
    title: "隱私安全保障",
    desc: "嚴格保護你的個人資訊，所有資料都妥善保管，任何問題都可安心諮詢。",
    icon: "◯",
  },
  {
    num: "04",
    title: "溫暖陪伴支持",
    desc: "在人生迷茫時，給你理解與支持，並以具體建議陪你找到適合的方向。",
    icon: "♡",
  },
  {
    num: "05",
    title: "完整書面報告",
    desc: "結構清晰、條理分明的完整報告，方便你隨時回顧與實踐生活應用。",
    icon: "≡",
  },
];

export default function WhyUs() {
  return (
    <section style={{ background: "#EDE8DF", padding: "80px 28px", position: "relative", overflow: "hidden" }}>
      {/* Subtle aurora overlay — gives depth without killing the cream bg */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 50% at 5% 120%, rgba(108,82,220,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 95% 110%, rgba(212,175,55,0.06) 0%, transparent 50%)
        `,
      }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: ".72rem", fontWeight: 500, letterSpacing: ".18em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-sans)" }}>
            Why Choose Us
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 700,
            color: "#0C1D2F", letterSpacing: ".08em", marginBottom: "14px",
          }}>
            為什麼選擇光宇方向？
            <span style={{
              display: "block", width: "40px", height: "2px",
              background: "#D4AF37", margin: "10px auto 0", borderRadius: "2px",
            }} />
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
          {reasons.map((r) => (
            <ReasonCard key={r.num} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ r }: { r: typeof reasons[0] }) {
  return (
    <div
      className="whyus-card"
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "28px 22px",
        boxShadow: "0 2px 10px rgba(12,29,47,.07)",
        border: "1px solid rgba(212,175,55,.1)",
        textAlign: "center",
        transition: "transform .4s ease, box-shadow .4s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Round icon — neon ring */}
      <div style={{
        width: "58px", height: "58px", borderRadius: "50%", margin: "0 auto 16px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem",
        background: "rgba(212,175,55,.08)", color: "#D4AF37",
        border: "1.5px solid rgba(212,175,55,.45)",
        boxShadow: "0 0 12px rgba(212,175,55,.25), inset 0 0 8px rgba(212,175,55,.06)",
      }}>
        {r.icon}
      </div>

      {/* Number */}
      <p style={{ fontSize: ".65rem", letterSpacing: ".18em", color: "#D4AF37", marginBottom: "6px", fontFamily: "var(--font-sans)" }}>
        {r.num}
      </p>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700,
        color: "#0C1D2F", marginBottom: "10px", letterSpacing: ".04em",
      }}>
        {r.title}
      </h3>

      {/* Desc */}
      <p style={{ fontSize: ".82rem", color: "#6B6B6B", lineHeight: 1.75, fontFamily: "var(--font-sans)" }}>
        {r.desc}
      </p>

      <style>{`
        .whyus-card:hover {
          transform: perspective(900px) rotateX(-5deg) rotateY(3deg) translateY(-8px) scale(1.02);
          box-shadow:
            0 24px 48px rgba(12,29,47,.14),
            0 0 0 1.5px rgba(212,175,55,.35),
            0 0 30px rgba(212,175,55,.1) !important;
        }
      `}</style>
    </div>
  );
}
