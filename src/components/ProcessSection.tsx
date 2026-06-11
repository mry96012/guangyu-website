const steps = [
  { num: "01", title: "選擇服務", desc: "說明想釐清的主題，例如：事業、感情、財運、人際，我們會協助安排最合適的服務。" },
  { num: "02", title: "提供資料", desc: "提出出生年月日、時間與地點，確認預約並完成付款。" },
  { num: "03", title: "收到報告", desc: "報告完成後透過 LINE 傳送，你可以慢慢閱讀，針對建議調整方向。" },
];

/* Network node positions (percentage-based) */
const NET_NODES = [
  { x: 5, y: 20 }, { x: 18, y: 60 }, { x: 8, y: 85 },
  { x: 30, y: 10 }, { x: 42, y: 45 }, { x: 38, y: 80 },
  { x: 58, y: 15 }, { x: 62, y: 55 }, { x: 55, y: 88 },
  { x: 78, y: 25 }, { x: 85, y: 65 }, { x: 92, y: 10 },
  { x: 96, y: 50 }, { x: 90, y: 88 }, { x: 72, y: 75 },
];
const NET_EDGES = [
  [0,1],[1,2],[0,3],[3,4],[4,5],[1,4],[2,5],
  [3,6],[4,7],[5,8],[6,7],[7,8],[6,9],[7,10],
  [9,11],[11,12],[12,13],[10,13],[10,14],[8,14],[9,10],
];

export default function ProcessSection() {
  return (
    <section style={{
      position: "relative", padding: "80px 28px", overflow: "hidden",
      background: "linear-gradient(160deg, #0C1D2F 0%, #0F2340 60%, #0C1D2F 100%)",
    }}>
      {/* Aurora glow layers */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 70% 50% at 15% 110%, rgba(108,82,220,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 85% 120%, rgba(0,168,200,0.12) 0%, transparent 50%)
        `,
        animation: "aurora-drift 10s ease-in-out infinite",
      }} />

      {/* Network SVG background */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          pointerEvents: "none", opacity: .12,
        }}
      >
        {NET_EDGES.map(([a, b], i) => (
          <line key={i}
            x1={NET_NODES[a].x} y1={NET_NODES[a].y}
            x2={NET_NODES[b].x} y2={NET_NODES[b].y}
            stroke="#D4AF37" strokeWidth=".25"
            strokeDasharray="4 3"
            style={{ animation: `net-dash 3s ease-out ${(i * 0.18).toFixed(2)}s both` }}
          />
        ))}
        {NET_NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={i % 4 === 0 ? ".9" : ".5"}
            fill="#D4AF37" opacity={i % 4 === 0 ? ".9" : ".6"} />
        ))}
      </svg>

      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{
            fontSize: ".72rem", fontWeight: 500, letterSpacing: ".18em",
            color: "#D4AF37", textTransform: "uppercase", marginBottom: "10px",
            fontFamily: "var(--font-sans)",
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
            fontWeight: 700, color: "#F5F1EA", letterSpacing: ".08em",
          }}>
            預約服務流程
            <span style={{
              display: "block", width: "36px", height: "2px",
              background: "#D4AF37", margin: "10px auto 0", borderRadius: "2px",
            }} />
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", position: "relative" }}>
          {/* Connecting dashed line */}
          <div style={{
            position: "absolute", top: "28px",
            left: "calc(16.67% + 20px)", right: "calc(16.67% + 20px)",
            height: "1px",
            background: "linear-gradient(to right, rgba(212,175,55,.5), rgba(212,175,55,.5))",
            borderTop: "1px dashed rgba(212,175,55,.35)",
          }} />

          {steps.map((s, idx) => (
            <div key={s.num} style={{ textAlign: "center" }}
              className={`process-step-${idx}`}>
              {/* Neon circle */}
              <div className="neon-circle" style={{
                width: "56px", height: "56px", borderRadius: "50%",
                margin: "0 auto 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700,
                color: "#D4AF37",
                background: "rgba(212,175,55,.08)",
                border: "1.5px solid rgba(212,175,55,.6)",
                boxShadow: "0 0 14px rgba(212,175,55,.35), 0 0 40px rgba(212,175,55,.12), inset 0 0 10px rgba(212,175,55,.08)",
                animation: "neon-pulse 3s ease-in-out infinite",
                animationDelay: `${idx * 0.8}s`,
              }}>
                {s.num}
              </div>
              <h3 style={{
                fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700,
                color: "#F5F1EA", marginBottom: "10px", letterSpacing: ".04em",
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: ".82rem", color: "rgba(245,241,234,.6)",
                lineHeight: 1.75, fontFamily: "var(--font-sans)",
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
