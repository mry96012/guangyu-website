const reviews = [
  {
    name: "小美",
    type: "事業分析",
    stars: 5,
    text: "分析的角度讓我更清楚自己的特質，也比較知道適合往哪個方向走。報告有條理，讀完後不會一頭霧水。",
    avatar: "小",
  },
  {
    name: "阿哲",
    type: "感情分析",
    stars: 5,
    text: "感情分析讓我看清了關係中的盲點，現在的關係更加穩定和諧。老師耐心解說，給的建議都很務實可行。",
    avatar: "哲",
  },
  {
    name: "小雨",
    type: "整合型報告",
    stars: 5,
    text: "整合報告從多個角度觀察我的狀況，讀完後對自己目前的處境有了更完整的輪廓，也比較知道可以從哪裡調整。",
    avatar: "雨",
  },
  {
    name: "育民",
    type: "八字分析",
    stars: 5,
    text: "八字命盤分析非常詳盡，讓我理解了自己的先天性格，也知道如何順著自己的能量走，受益良多。",
    avatar: "育",
  },
  {
    name: "思穎",
    type: "塔羅占卜",
    stars: 5,
    text: "每次諮詢都能感受到老師認真準備，塔羅解讀配合命理分析，讓我在做重要決定時更有信心。",
    avatar: "思",
  },
  {
    name: "建成",
    type: "主題式分析",
    stars: 5,
    text: "財運主題分析給了我具體的方向建議，比起以前的茫然，現在比較知道從哪裡開始整理。很感謝這次諮詢。",
    avatar: "建",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#D4AF37", fontSize: ".9rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: "#F5F1EA", padding: "80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: ".72rem", fontWeight: 500, letterSpacing: ".18em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-sans)" }}>
            Testimonials
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 700,
            color: "#0C1D2F", letterSpacing: ".08em", marginBottom: "8px",
          }}>
            客戶真實回饋
            <span style={{
              display: "block", width: "40px", height: "2px",
              background: "#D4AF37", margin: "10px auto 0", borderRadius: "2px",
            }} />
          </h2>
          <p style={{ fontSize: ".88rem", color: "#6B6B6B", fontFamily: "var(--font-sans)" }}>
            每一個故事，都是找到方向的開始
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {reviews.map((r) => (
            <div key={r.name}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 2px 10px rgba(12,29,47,.06)",
                border: "1px solid rgba(212,175,55,.12)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <span style={{
                position: "absolute", top: "14px", right: "18px",
                fontFamily: "Georgia, serif", fontSize: "4rem", lineHeight: 1,
                color: "rgba(212,175,55,.12)", pointerEvents: "none", userSelect: "none",
              }}>
                "
              </span>

              <Stars count={r.stars} />

              <p style={{ fontSize: ".875rem", color: "#555", lineHeight: 1.75, fontFamily: "var(--font-sans)", flex: 1 }}>
                「{r.text}」
              </p>

              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                paddingTop: "12px", borderTop: "1px solid rgba(212,175,55,.12)",
              }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: ".9rem",
                  background: "rgba(212,175,55,.12)", color: "#D4AF37",
                  border: "1px solid rgba(212,175,55,.3)", flexShrink: 0,
                }}>
                  {r.avatar}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: ".875rem", color: "#0C1D2F" }}>
                    — {r.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: ".75rem", color: "#999" }}>
                    {r.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "#999", fontSize: ".75rem", marginTop: "32px", fontFamily: "var(--font-sans)" }}>
          ※ 以上回饋皆為真實客戶整理，僅供服務體驗感受參考。
        </p>
      </div>
    </section>
  );
}
