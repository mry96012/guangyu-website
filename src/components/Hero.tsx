import Image from "next/image";
import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const trustItems = [
  { icon: "🛡", label: "專業整合分析" },
  { icon: "👤", label: "個人化專屬解讀" },
  { icon: "📄", label: "書面報告・清楚完整" },
  { icon: "🤝", label: "陪伴理解・不預測未來" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 60%, #EDE3D6 100%)",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 right-0 w-96 h-96 opacity-10 rounded-full"
          style={{ background: "radial-gradient(circle, #B8902A 0%, transparent 70%)" }} />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 opacity-5 rounded-full"
          style={{ background: "radial-gradient(circle, #1A2D45 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-8">
            <div style={{ opacity: 0, animation: "fade-up 1s ease-out 0.1s forwards" }}>
              <h1
                className="font-serif font-bold leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", color: "#1A2D45", letterSpacing: "0.02em" }}
              >
                看懂自己，
                <br />
                比急著改變人生更重要
              </h1>
              <div className="mt-4 h-0.5 w-16" style={{ background: "#B8902A" }} />
            </div>

            <p
              className="font-sans leading-relaxed"
              style={{ color: "#4A5E72", fontSize: "1rem", maxWidth: "480px", opacity: 0, animation: "fade-up 1s ease-out 0.45s forwards" }}
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
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(184,144,42,0.2)",
                boxShadow: "0 2px 8px rgba(26,45,69,0.06)",
              }}
            >
              <span className="text-sm">⭐</span>
              <span className="font-sans text-xs font-semibold" style={{ color: "#1A2D45" }}>5.0</span>
              <span className="font-sans text-xs" style={{ color: "#6B7E90" }}>·</span>
              <span className="font-sans text-xs" style={{ color: "#6B7E90" }}>128 則 Google 好評</span>
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
              <Link
                href="/experience"
                className="btn-gold inline-flex items-center justify-center gap-2 text-sm"
                style={{ padding: "14px 28px" }}
              >
                ✦ 免費命盤體驗
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 text-sm"
                style={{ padding: "14px 28px" }}
              >
                📅 立即預約諮詢
              </a>
            </div>

            <div
              className="flex justify-between pt-2"
              style={{ opacity: 0, animation: "fade-up 1s ease-out 1s forwards" }}
            >
              {trustItems.map((t) => (
                <div key={t.label} className="flex items-center gap-1.5">
                  <span className="text-sm">{t.icon}</span>
                  <span className="text-sm font-sans whitespace-nowrap" style={{ color: "#6B7E90" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="hidden lg:flex items-center justify-center relative"
            style={{ minHeight: "520px", opacity: 0, animation: "fade-up 1.2s ease-out 0.3s forwards" }}
          >
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
