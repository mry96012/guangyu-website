import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const services = [
  {
    id: "oriental",
    tag: "東方命理",
    tagEn: "ORIENTAL DIVINATION",
    title: "東方命理分析",
    desc: "解析先天命格結構，掌握人生方向與流年趨勢",
    badges: ["八字", "紫微斗數", "姓名學"],
    items: ["八字命盤分析", "紫微斗數解析", "姓名學分析", "流年大運規劃"],
    price: "NT$600 起",
    image: "/images/service-east.webp",
  },
  {
    id: "western",
    tag: "西方命理",
    tagEn: "WESTERN MYSTICISM",
    title: "西方命理占卜",
    desc: "探索內在特質與潛能，看見靈魂藍圖與成長方向",
    badges: ["塔羅", "生命靈數", "占星"],
    items: ["塔羅占卜（單題）", "生命靈數解析", "西洋占星分析", "星象能量解讀"],
    price: "NT$350 起",
    image: "/images/service-west.webp",
  },
  {
    id: "theme",
    tag: "主題分析",
    tagEn: "THEME ANALYSIS",
    title: "主題式分析",
    desc: "釐清當下關鍵課題，提供具體建議與行動方向",
    badges: ["事業", "感情", "財運"],
    items: ["事業與職場分析", "感情關係解析", "財運決策指引", "人際家庭健康"],
    price: "NT$800 起",
    image: "/images/service-theme.webp",
  },
  {
    id: "integrated",
    tag: "整合報告",
    tagEn: "INTEGRATED REPORT",
    title: "整合型報告",
    desc: "雙系統融合分析，深層理解・清晰決策・整合人生",
    badges: ["雙系統", "書面報告", "深度整合"],
    items: ["東西方命格對照", "多維度深度分析", "全方位書面報告", "專屬顧問建議"],
    price: "NT$2,000 起",
    image: "/images/service-integrated.webp",
  },
];

export default function ServicesSection() {
  return (
    <section style={{ background: "#F5F1EA", padding: "88px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: ".72rem", fontWeight: 500, letterSpacing: ".18em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-sans)" }}>
            Our Services
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 700,
            color: "#0C1D2F", letterSpacing: ".08em", marginBottom: "14px",
            position: "relative", display: "inline-block",
          }}>
            我們提供的專業服務
            <span style={{
              display: "block", width: "40px", height: "2px",
              background: "#D4AF37", margin: "10px auto 0", borderRadius: "2px",
            }} />
          </h2>
          <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "#6B6B6B", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto", fontFamily: "var(--font-sans)" }}>
            多元命理工具整合，滿足不同需求
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "22px" }}>
          {services.map((s) => (
            <div key={s.id}
              className="service-card-v2"
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(12,29,47,.07), 0 0 0 1px rgba(212,175,55,.12)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .35s ease, box-shadow .35s ease",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", width: "100%", paddingTop: "62%", overflow: "hidden" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", transition: "transform .45s ease",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 45%, rgba(12,29,47,.35) 100%)",
                  pointerEvents: "none",
                }} />
              </div>

              {/* Body */}
              <div style={{
                flex: 1, padding: "18px 20px 22px",
                borderTop: "2px solid rgba(212,175,55,.18)",
                position: "relative",
              }}>
                {/* Left accent line */}
                <div style={{
                  position: "absolute", left: 0, top: "18px", bottom: "18px", width: "2px",
                  background: "linear-gradient(to bottom, #D4AF37, transparent)",
                  opacity: .4, borderRadius: "2px",
                }} />

                {/* Tag */}
                <span style={{
                  display: "inline-block", fontSize: ".67rem", fontWeight: 500,
                  letterSpacing: ".1em", color: "#D4AF37",
                  border: "1px solid rgba(212,175,55,.38)", borderRadius: "20px",
                  padding: "2px 10px", marginBottom: "8px",
                  background: "rgba(212,175,55,.06)", fontFamily: "var(--font-sans)",
                }}>
                  {s.tag}
                </span>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontSize: "clamp(.92rem,1.2vw,1.05rem)",
                  fontWeight: 700, color: "#0C1D2F", marginBottom: "8px", letterSpacing: ".04em",
                }}>
                  {s.title}
                </h3>

                {/* Desc */}
                <p style={{ fontSize: ".8rem", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "10px", fontFamily: "var(--font-sans)" }}>
                  {s.desc}
                </p>

                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "12px" }}>
                  {s.badges.map((b) => (
                    <span key={b} style={{
                      fontSize: ".68rem", background: "rgba(212,175,55,.1)", color: "#D4AF37",
                      borderRadius: "3px", padding: "2px 8px", letterSpacing: ".04em", fontFamily: "var(--font-sans)",
                    }}>
                      {b}
                    </span>
                  ))}
                </div>

                {/* List */}
                <ul style={{ marginBottom: "16px" }}>
                  {s.items.map((item) => (
                    <li key={item} style={{
                      fontSize: ".825rem", color: "#6B6B6B", lineHeight: 1.5,
                      padding: "4px 0 4px 14px",
                      borderBottom: "1px solid rgba(212,175,55,.08)",
                      position: "relative", fontFamily: "var(--font-sans)",
                    }}>
                      <span style={{
                        position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
                        width: "5px", height: "5px", borderRadius: "50%",
                        background: "#D4AF37", opacity: .6, display: "block",
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1rem", color: "#D4AF37" }}>
                    {s.price}
                  </span>
                  <Link href="/services"
                    style={{
                      fontSize: ".75rem", color: "#6B6B6B", letterSpacing: ".04em",
                      fontFamily: "var(--font-sans)", transition: "color .2s",
                    }}>
                    了解更多 →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p style={{ textAlign: "center", marginTop: "48px", fontSize: ".87rem", color: "#6B6B6B", letterSpacing: ".12em", fontFamily: "var(--font-sans)" }}>
          不確定哪個適合你？{" "}
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            style={{ color: "#D4AF37", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            加入 LINE 直接詢問
          </a>
        </p>
      </div>

      <style>{`
        .service-card-v2:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(12,29,47,.13), 0 0 0 1.5px rgba(212,175,55,.32) !important;
        }
        .service-card-v2:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
