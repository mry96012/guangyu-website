import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "系統更新中 | 光宇方向命理研究所",
  description: "光宇方向命理研究所官網系統更新作業中，如需預約請透過 LINE 聯繫。",
};

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #0C1A2B 0%, #1A2D45 50%, #0F2340 100%)",
        padding: "2rem",
        textAlign: "center",
        gap: "0",
      }}
    >
      {/* Stars */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[
          { top: "8%",  left: "12%", s: 2 },
          { top: "15%", left: "75%", s: 3 },
          { top: "5%",  left: "55%", s: 2 },
          { top: "25%", left: "88%", s: 2 },
          { top: "60%", left: "92%", s: 3 },
          { top: "70%", left: "8%",  s: 2 },
          { top: "82%", left: "60%", s: 2 },
          { top: "45%", left: "5%",  s: 1.5 },
          { top: "90%", left: "30%", s: 2.5 },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            top: p.top, left: p.left,
            width: `${p.s}px`, height: `${p.s}px`,
            background: "#E8D08A",
            borderRadius: "50%",
            opacity: 0.6,
            animation: `twinkle ${2.5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
          }} />
        ))}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,144,42,0.08) 0%, transparent 65%)",
          transform: "translate(20%, -20%)",
        }} />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .line-btn:hover { opacity: 0.88; transform: translateY(-2px); }
        .line-btn { transition: all 0.2s ease; }
      `}</style>

      <div style={{ position: "relative", maxWidth: "440px", width: "100%" }}>
        {/* Logo / brand */}
        <p style={{
          fontFamily: "Noto Sans TC, system-ui, sans-serif",
          fontSize: "0.65rem", letterSpacing: "0.25em", fontWeight: 600,
          color: "#B8902A", marginBottom: "1.5rem",
          animation: "fade-up 0.8s ease-out 0.1s both",
        }}>
          GUANG YU FANG XIANG
        </p>

        <h1 style={{
          fontFamily: "Noto Serif TC, Georgia, serif",
          fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
          fontWeight: 700, color: "#F5F1EA",
          lineHeight: 1.4, letterSpacing: "0.04em",
          marginBottom: "1rem",
          animation: "fade-up 0.8s ease-out 0.25s both",
        }}>
          光宇方向命理研究所
        </h1>

        {/* Gold divider */}
        <div style={{
          width: "48px", height: "2px", margin: "0 auto 1.5rem",
          background: "linear-gradient(to right, transparent, #B8902A, transparent)",
          animation: "fade-up 0.8s ease-out 0.35s both",
        }} />

        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(184,144,42,0.12)",
          border: "1px solid rgba(184,144,42,0.3)",
          borderRadius: "999px", padding: "0.4rem 1rem",
          marginBottom: "2rem",
          animation: "fade-up 0.8s ease-out 0.45s both",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8D08A", display: "inline-block" }} />
          <span style={{
            fontFamily: "Noto Sans TC, system-ui, sans-serif",
            fontSize: "0.75rem", color: "#E8D08A", fontWeight: 500,
          }}>
            系統更新作業中
          </span>
        </div>

        <p style={{
          fontFamily: "Noto Sans TC, system-ui, sans-serif",
          fontSize: "0.9rem", color: "rgba(245,241,234,0.65)",
          lineHeight: 1.8, marginBottom: "2.5rem",
          animation: "fade-up 0.8s ease-out 0.55s both",
        }}>
          官網目前正在進行系統更新，<br />
          預約諮詢請直接透過 LINE 與我們聯繫，<br />
          服務不中斷，歡迎隨時預約。
        </p>

        {/* LINE Button */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="line-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            background: "#06C755",
            color: "#fff",
            fontFamily: "Noto Sans TC, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            padding: "1rem 2.5rem",
            borderRadius: "12px",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(6,199,85,0.35)",
            animation: "fade-up 0.8s ease-out 0.7s both",
            cursor: "pointer",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          加入 LINE 預約諮詢
        </a>

        <p style={{
          fontFamily: "Noto Sans TC, system-ui, sans-serif",
          fontSize: "0.72rem", color: "rgba(245,241,234,0.3)",
          marginTop: "2rem",
          animation: "fade-up 0.8s ease-out 0.85s both",
        }}>
          LINE ID：@enlite731　｜　服務時間 週一至週日 10:00–20:00
        </p>
      </div>
    </main>
  );
}
