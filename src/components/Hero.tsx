"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const trustItems = [
  "專業整合分析",
  "個人化專屬解讀",
  "書面報告‧完整清楚",
  "陪伴理解‧不預測未來",
];

/* CSS entrance animation shorthand */
const anim = (name: string, dur: string, delay: string) =>
  `${name} ${dur} ease-out ${delay} both` as const;

/* Slowly rotating compass SVG (hand-drawn gold lines, dark theme) */
function CompassSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        animation: "rotate-slow 80s linear infinite",
        transformOrigin: "center center",
      }}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="200" cy="200" r="185" stroke="#E1AE14" strokeWidth="0.8" strokeOpacity="0.35" />
      {/* Mid circle */}
      <circle cx="200" cy="200" r="140" stroke="#E1AE14" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* Inner circle */}
      <circle cx="200" cy="200" r="80" stroke="#E1AE14" strokeWidth="0.5" strokeOpacity="0.18" />
      {/* Innermost */}
      <circle cx="200" cy="200" r="28" stroke="#E1AE14" strokeWidth="0.7" strokeOpacity="0.3" />

      {/* 8 main radial lines */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + 30 * Math.cos(rad);
        const y1 = 200 + 30 * Math.sin(rad);
        const x2 = 200 + 183 * Math.cos(rad);
        const y2 = 200 + 183 * Math.sin(rad);
        return (
          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#E1AE14" strokeWidth={deg % 90 === 0 ? "0.9" : "0.5"}
            strokeOpacity={deg % 90 === 0 ? "0.35" : "0.2"} />
        );
      })}

      {/* 16 minor radial ticks (outer rim) */}
      {Array.from({ length: 16 }, (_, i) => i * 22.5).map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + 175 * Math.cos(rad);
        const y1 = 200 + 175 * Math.sin(rad);
        const x2 = 200 + 185 * Math.cos(rad);
        const y2 = 200 + 185 * Math.sin(rad);
        return (
          <line key={`tick-${deg}`} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#E1AE14" strokeWidth="0.8" strokeOpacity="0.28" />
        );
      })}

      {/* 64 fine ticks on outer circle */}
      {Array.from({ length: 64 }, (_, i) => i * (360 / 64)).map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + 180 * Math.cos(rad);
        const y1 = 200 + 180 * Math.sin(rad);
        const x2 = 200 + 185 * Math.cos(rad);
        const y2 = 200 + 185 * Math.sin(rad);
        return (
          <line key={`fine-${deg}`} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#E1AE14" strokeWidth="0.4" strokeOpacity="0.18" />
        );
      })}

      {/* 8 bagua trigram symbols at cardinal/inter-cardinal positions */}
      {[
        { deg: 270, text: "☰" }, { deg: 315, text: "☱" },
        { deg: 0,   text: "☲" }, { deg: 45,  text: "☳" },
        { deg: 90,  text: "☴" }, { deg: 135, text: "☵" },
        { deg: 180, text: "☶" }, { deg: 225, text: "☷" },
      ].map(({ deg, text }) => {
        const rad = (deg * Math.PI) / 180;
        const x = 200 + 158 * Math.cos(rad);
        const y = 200 + 158 * Math.sin(rad);
        return (
          <text key={`gua-${deg}`} x={x} y={y}
            textAnchor="middle" dominantBaseline="central"
            fill="#E1AE14" fillOpacity="0.28"
            fontSize="10" fontFamily="serif"
          >{text}</text>
        );
      })}

      {/* Center dot */}
      <circle cx="200" cy="200" r="3" fill="#E1AE14" fillOpacity="0.45" />
    </svg>
  );
}

/* Floating star particles — pure CSS */
function StarParticles() {
  const stars = [
    { x: 8, y: 15, d: 6.2, size: 1.5, delay: 0 },
    { x: 18, y: 72, d: 8.1, size: 1, delay: 1.2 },
    { x: 30, y: 35, d: 7.4, size: 2, delay: 0.5 },
    { x: 45, y: 8,  d: 9.0, size: 1.2, delay: 2.1 },
    { x: 55, y: 60, d: 6.8, size: 1.8, delay: 0.8 },
    { x: 62, y: 25, d: 7.9, size: 1, delay: 1.5 },
    { x: 72, y: 80, d: 8.5, size: 1.5, delay: 0.3 },
    { x: 80, y: 45, d: 6.5, size: 1.2, delay: 1.8 },
    { x: 88, y: 12, d: 7.2, size: 2, delay: 0.6 },
    { x: 92, y: 68, d: 8.8, size: 1, delay: 2.4 },
    { x: 5,  y: 50, d: 6.0, size: 1.5, delay: 1.0 },
    { x: 25, y: 90, d: 9.2, size: 1, delay: 0.4 },
    { x: 38, y: 55, d: 7.6, size: 1.8, delay: 1.6 },
    { x: 50, y: 42, d: 8.3, size: 1.2, delay: 2.8 },
    { x: 65, y: 18, d: 6.9, size: 2, delay: 0.9 },
    { x: 78, y: 62, d: 7.1, size: 1, delay: 2.0 },
    { x: 15, y: 30, d: 8.7, size: 1.5, delay: 1.3 },
    { x: 42, y: 78, d: 6.4, size: 1.2, delay: 0.7 },
    { x: 58, y: 92, d: 9.5, size: 1, delay: 2.2 },
    { x: 85, y: 30, d: 7.3, size: 1.8, delay: 1.1 },
    { x: 12, y: 85, d: 8.0, size: 1, delay: 3.0 },
    { x: 35, y: 15, d: 6.6, size: 1.5, delay: 0.2 },
    { x: 70, y: 50, d: 8.9, size: 1.2, delay: 1.7 },
    { x: 22, y: 60, d: 7.5, size: 2, delay: 2.6 },
    { x: 95, y: 40, d: 6.3, size: 1, delay: 0.1 },
    { x: 48, y: 22, d: 9.1, size: 1.5, delay: 1.4 },
    { x: 75, y: 88, d: 7.8, size: 1, delay: 2.9 },
    { x: 3,  y: 95, d: 8.2, size: 1.2, delay: 0.8 },
    { x: 60, y: 5,  d: 6.7, size: 1.8, delay: 1.9 },
    { x: 90, y: 78, d: 7.0, size: 1, delay: 2.3 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: "#E1AE14",
            animation: `float-up ${s.d}s ease-in-out ${s.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#121212", minHeight: "100svh", display: "flex", alignItems: "center" }}
    >
      {/* Star particles */}
      <StarParticles />

      {/* Rotating compass background */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-5%", top: "50%",
          transform: "translateY(-50%)",
          width: "min(560px, 55vw)",
          height: "min(560px, 55vw)",
          opacity: 0.1,
        }}
        aria-hidden="true"
      >
        <CompassSVG />
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "20%", right: "10%",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(225,174,20,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Asymmetric: text block offset left, image offset right-bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left text — spans 7 cols, nudged down to create visual tension */}
          <div className="lg:col-span-7 space-y-7 lg:pt-6">

            {/* Brand label */}
            <p
              className="font-sans text-xs font-medium"
              style={{
                color: "#E1AE14",
                letterSpacing: "0.28em",
                animation: anim("fade-in", "0.6s", "0.05s"),
              }}
            >
              GUANG YU METAPHYSICS INSTITUTE
            </p>

            {/* H1 — large, line-by-line */}
            <div style={{ animation: "none" }}>
              <h1
                className="font-serif font-bold leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "0.03em" }}
              >
                <span style={{ display: "block", color: "#F5F0E8", animation: anim("fade-up", "0.65s", "0.18s") }}>
                  看懂自己，
                </span>
                <span style={{ display: "block", color: "#F5F0E8", animation: anim("fade-up", "0.65s", "0.36s") }}>
                  比急著改變
                </span>
                <span
                  style={{
                    display: "block",
                    color: "#E1AE14",
                    animation: anim("fade-up", "0.65s", "0.52s"),
                    fontSize: "clamp(1.7rem, 3.8vw, 2.7rem)",
                  }}
                >
                  人生更重要
                </span>
              </h1>

              {/* Gold separator — expand from left */}
              <div
                className="mt-5 h-px"
                style={{
                  width: "80px",
                  background: "linear-gradient(to right, #E1AE14, transparent)",
                  transformOrigin: "left center",
                  animation: anim("scale-in-x", "0.5s", "0.7s"),
                }}
              />
            </div>

            {/* Description — slightly wider, creates text-mass offset */}
            <p
              className="font-sans leading-relaxed"
              style={{
                color: "rgba(245,240,232,0.62)",
                fontSize: "0.97rem",
                maxWidth: "460px",
                animation: anim("fade-in", "0.6s", "0.76s"),
                letterSpacing: "0.01em",
              }}
            >
              透過八字、紫微斗數、塔羅、生命靈數與占星整合分析，
              協助你整理現況、理解課題，找到更適合自己的方向。
            </p>

            {/* Google trust badge */}
            <div
              className="inline-flex items-center gap-3"
              style={{
                padding: "8px 16px",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(225,174,20,0.22)",
                animation: anim("fade-in", "0.5s", "0.88s"),
              }}
            >
              <span className="font-display font-bold" style={{ color: "#E1AE14", fontSize: "1.1rem", lineHeight: 1 }}>5.0</span>
              <span style={{ color: "rgba(225,174,20,0.65)", fontSize: "0.7rem", letterSpacing: "2px" }}>★★★★★</span>
              <span className="font-sans text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>128 則 Google 評價</span>
              <svg width="13" height="13" viewBox="0 0 24 24" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3" style={{ animation: anim("fade-up", "0.55s", "1.0s") }}>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2.5 text-sm"
                style={{ padding: "14px 34px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                加入 LINE 預約諮詢
              </a>
              <Link
                href="/experience"
                className="btn-outline inline-flex items-center justify-center text-sm"
                style={{ padding: "14px 28px" }}
              >
                先體驗免費命盤
              </Link>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap gap-x-5 gap-y-2" style={{ animation: anim("fade-in", "0.5s", "1.15s") }}>
              {trustItems.map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span aria-hidden="true" style={{ display: "inline-block", width: "3px", height: "3px", borderRadius: "50%", background: "#E1AE14", opacity: 0.55, flexShrink: 0 }} />
                  <span className="text-xs font-sans" style={{ color: "rgba(245,240,232,0.4)", letterSpacing: "0.02em" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image — 5 cols, pushed toward bottom-right */}
          <div
            className="hidden lg:flex lg:col-span-5 items-end justify-center relative"
            style={{ minHeight: "500px", animation: anim("scale-in", "0.9s", "0.25s") }}
          >
            {/* Glow ring behind image */}
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                width: "340px", height: "340px",
                background: "radial-gradient(circle, rgba(225,174,20,0.08) 0%, transparent 65%)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="relative w-[460px] h-[460px]">
              <Image src="/images/hero-main.png" alt="命理羅盤" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(225,174,20,0.25), transparent)" }} />
    </section>
  );
}
