import Image from "next/image";
import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const trustItems = [
  { icon: "🛡", label: "專業整合分析" },
  { icon: "👤", label: "個人化專屬解讀" },
  { icon: "📄", label: "書面報告・清楚完整" },
  { icon: "🤝", label: "陪伴理解・不預測未來" },
];

const stars = [
  { top: "8%",  left: "12%", size: 2, delay: "0s",    dur: "3s" },
  { top: "15%", left: "75%", size: 3, delay: "0.7s",  dur: "4s" },
  { top: "22%", left: "38%", size: 1.5, delay: "1.2s", dur: "3.5s" },
  { top: "5%",  left: "55%", size: 2.5, delay: "0.4s", dur: "2.8s" },
  { top: "35%", left: "88%", size: 2,   delay: "1.8s", dur: "4.2s" },
  { top: "45%", left: "5%",  size: 1.5, delay: "0.9s", dur: "3.8s" },
  { top: "60%", left: "92%", size: 3,   delay: "0.2s", dur: "3.2s" },
  { top: "70%", left: "20%", size: 1.5, delay: "1.5s", dur: "4.5s" },
  { top: "80%", left: "60%", size: 2,   delay: "0.6s", dur: "3s" },
  { top: "12%", left: "92%", size: 1,   delay: "2.1s", dur: "3.7s" },
  { top: "88%", left: "35%", size: 2.5, delay: "1.1s", dur: "4s" },
  { top: "50%", left: "48%", size: 1,   delay: "0.3s", dur: "2.5s" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0C1A2B 0%, #1A2D45 40%, #0F2340 80%, #091524 100%)",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Star particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: "#E8D08A",
              opacity: 0.6,
              animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}
        {/* Nebula glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(184,144,42,0.08) 0%, transparent 65%)", transform: "translate(20%, -20%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,45,69,0.6) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(184,144,42,0.04) 0%, transparent 60%)", transform: "translate(-50%, -50%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-8">
            <div style={{ opacity: 0, animation: "fade-up 1s ease-out 0.1s forwards" }}>
              <p className="font-sans text-xs tracking-widest font-semibold mb-4"
                style={{ color: "#B8902A", letterSpacing: "0.2em" }}>
                GUANG YU FANG XIANG
              </p>
              <h1
                className="font-serif font-bold leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", color: "#F5F1EA", letterSpacing: "0.02em" }}
              >
                看懂自己，
                <br />
                比急著改變人生更重要
              </h1>
              <div className="mt-4 h-0.5 w-16" style={{ background: "linear-gradient(to right, #B8902A, #E8D08A, transparent)" }} />
            </div>

            <p
              className="font-sans leading-relaxed"
              style={{ color: "rgba(245,241,234,0.75)", fontSize: "1rem", maxWidth: "480px", opacity: 0, animation: "fade-up 1s ease-out 0.45s forwards" }}
            >
              透過八字、紫微斗數、塔羅、生命靈數與占星分析，<br />
              協助你整理現況、理解課題，找到更適合自己的方向。
            </p>

            {/* Google trust badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 w-fit"
              style={{
                opacity: 0,
                animation: "fade-up 1s ease-out 0.6s forwards",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(184,144,42,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="text-sm">⭐</span>
              <span className="font-sans text-xs font-semibold" style={{ color: "#E8D08A" }}>5.0</span>
              <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
              <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>128 則 Google 好評</span>
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ opacity: 0, animation: "fade-up 1s ease-out 0.75s forwards" }}
            >
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2 text-sm"
                style={{ padding: "14px 28px" }}
              >
                📅 加入 LINE 預約諮詢
              </a>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold font-sans rounded-lg transition-all duration-200"
                style={{
                  padding: "14px 28px",
                  border: "1px solid rgba(184,144,42,0.4)",
                  color: "#E8D08A",
                }}
              >
                ✦ 先體驗免費命盤
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-x-5 gap-y-2 pt-2"
              style={{ opacity: 0, animation: "fade-up 1s ease-out 1s forwards" }}
            >
              {trustItems.map((t) => (
                <div key={t.label} className="flex items-center gap-1.5">
                  <span className="text-sm">{t.icon}</span>
                  <span className="text-xs font-sans whitespace-nowrap" style={{ color: "rgba(245,241,234,0.55)" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="hidden lg:flex items-center justify-center relative"
            style={{ minHeight: "520px", opacity: 0, animation: "fade-up 1.2s ease-out 0.3s forwards" }}
          >
            {/* Glow ring behind image */}
            <div className="absolute w-[420px] h-[420px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(184,144,42,0.12) 0%, transparent 65%)" }} />
            <div className="relative w-[520px] h-[520px]">
              <Image
                src="/images/hero-main.png"
                alt="命理羅盤"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
