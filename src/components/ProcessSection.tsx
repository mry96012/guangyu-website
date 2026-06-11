const steps = [
  { num: "01", title: "選擇服務", desc: "說明想釐清的主題，例如：事業、感情、財運、人際，我們會協助安排最合適的服務。" },
  { num: "02", title: "提供資料", desc: "提出出生年月日、時間與地點，確認預約並完成付款。" },
  { num: "03", title: "收到報告", desc: "報告完成後透過 LINE 傳送，你可以慢慢閱讀，針對建議調整方向。" },
];

export default function ProcessSection() {
  return (
    <section style={{ background: "#0C1D2F", padding: "72px 28px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: ".72rem", fontWeight: 500, letterSpacing: ".18em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-sans)" }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700,
            color: "#F5F1EA", letterSpacing: ".08em",
          }}>
            預約服務流程
            <span style={{
              display: "block", width: "36px", height: "2px",
              background: "#D4AF37", margin: "10px auto 0", borderRadius: "2px",
            }} />
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div style={{
            display: "none",
            position: "absolute", top: "28px",
            left: "calc(16.67% + 8px)", right: "calc(16.67% + 8px)",
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(212,175,55,.35), rgba(212,175,55,.35), transparent)",
          }} className="process-line" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ textAlign: "center" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%", margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700,
                  background: "rgba(212,175,55,.1)", color: "#D4AF37",
                  border: "1px solid rgba(212,175,55,.35)",
                }}>
                  {s.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700,
                  color: "#F5F1EA", marginBottom: "10px", letterSpacing: ".04em",
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: ".82rem", color: "rgba(245,241,234,.6)", lineHeight: 1.75, fontFamily: "var(--font-sans)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
