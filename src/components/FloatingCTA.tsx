"use client";
import { useState, useEffect } from "react";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip label */}
      <div
        className="hidden sm:block text-xs font-sans font-semibold px-3 py-1.5 rounded-full"
        style={{ background: "#1A2D45", color: "#E8D08A", letterSpacing: "0.06em" }}
      >
        免費預約諮詢
      </div>

      {/* LINE button */}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="加入 LINE 預約諮詢"
        className="relative flex items-center gap-2.5 rounded-full font-bold text-white text-sm font-sans"
        style={{
          background: "#06C755",
          padding: "14px 22px",
          boxShadow: "0 4px 20px rgba(6,199,85,0.45)",
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(6,199,85,0.3)", animationDuration: "2s" }}
        />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="relative shrink-0">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
        <span className="relative">立即預約</span>
      </a>
    </div>
  );
}
