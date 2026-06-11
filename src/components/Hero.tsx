"use client";
import { useEffect, useRef } from "react";
import CelestialWheel from "./CelestialWheel";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      stars.forEach((s) => {
        const a = s.alpha * (0.5 + 0.5 * Math.sin(frame * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,208,138,${a})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0C1D2F" }}
    >
      {/* Hero background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(12,29,47,0.82) 0%, rgba(12,29,47,0.55) 50%, rgba(12,29,47,0.4) 100%)" }} />
      </div>
      {/* Mountain silhouette bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" aria-hidden="true"
        style={{
          background: "linear-gradient(to top, rgba(12,29,47,0.9) 0%, transparent 100%)",
        }}
      />
      <svg className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" viewBox="0 0 1440 160"
        preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,160 L0,80 C200,20 320,100 480,60 C640,20 720,80 880,50 C1040,20 1200,90 1440,40 L1440,160 Z"
          fill="rgba(12,29,47,0.6)"
        />
        <path
          d="M0,160 L0,110 C160,60 280,130 440,95 C600,60 720,120 900,90 C1080,60 1280,110 1440,80 L1440,160 Z"
          fill="rgba(12,29,47,0.85)"
        />
      </svg>

      {/* Stars */}
      <StarField />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(200,166,58,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-20 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        {/* Text */}
        <div className="space-y-5 md:space-y-6 text-center lg:text-left">
          {/* Sub-badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 text-gold/80 text-xs tracking-[0.2em] font-sans"
            style={{ background: "rgba(200,166,58,0.06)" }}>
            <span>✦</span>
            <span>東西方命理整合 × 現代專業顧問</span>
            <span>✦</span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wide">
            <span className="text-gold-shimmer block">看懂自己</span>
            <span className="text-cream block mt-1">理解處境</span>
            <span className="text-cream block mt-1">
              找到
              <span className="text-gold-shimmer">方向</span>
            </span>
          </h1>

          {/* Divider */}
          <div className="gold-divider max-w-xs mx-auto lg:mx-0">
            <span className="text-gold text-xs tracking-widest">光宇方向命理研究所</span>
          </div>

          {/* Description */}
          <p className="text-cream/70 font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            透過八字、紫微斗數、塔羅占卜、生命靈數與占星分析，
            協助你理解人生課題，做出更適合自己的選擇。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-1 md:pt-2">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="btn-gold pulse-gold text-sm justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              加入 LINE 諮詢
            </a>
            <a href="/services" className="btn-outline text-sm justify-center">
              了解服務內容 →
            </a>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1">
            {["專業命理分析","隱私保護","書面報告","溫暖陪伴"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-cream/60 font-sans tracking-wider">
                <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Celestial Wheel — hidden on very small screens, visible from sm+ */}
        <div className="hidden sm:flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(200,166,58,0.1) 0%, transparent 70%)" }} />
            <div className="absolute inset-0" style={{ animation: "spin-slow 40s linear infinite" }}>
              <CelestialWheel className="w-full h-full opacity-90" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-gold font-serif text-2xl font-semibold tracking-widest"
                  style={{ textShadow: "0 0 20px rgba(200,166,58,0.5)" }}>
                  光宇
                </p>
                <p className="text-cream/50 text-xs tracking-[0.3em] font-sans mt-1">方向命理</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-float">
        <span className="text-cream/60 text-xs tracking-widest font-sans">SCROLL</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A63A" strokeWidth="1.5">
          <path d="M7 10l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
}
