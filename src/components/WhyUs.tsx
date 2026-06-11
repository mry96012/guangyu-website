const reasons = [
  {
    num: "01",
    title: "專業顧問式服務",
    desc: "不只是算命，更是專業顧問陪伴。多年命理經驗，幫助你清晰理解與成長。",
    icon: "◈",
  },
  {
    num: "02",
    title: "多元工具整合",
    desc: "結合東西方命理工具，以多角度分析視角，交叉驗證讓結論更精準。",
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
    <section style={{ background: "#EDE8DF", padding: "80px 28px" }}>
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
        transition: "transform .3s ease, box-shadow .3s ease",
      }}
    >
      {/* Round icon */}
      <div style={{
        width: "56px", height: "56px", borderRadius: "50%", margin: "0 auto 16px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem",
        background: "rgba(212,175,55,.1)", color: "#D4AF37",
        border: "1px solid rgba(212,175,55,.25)",
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
    </div>
  );
}
