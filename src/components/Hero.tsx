import Image from "next/image";
import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const trustItems = [
  "專業整合分析",
  "個人化專屬解讀",
  "書面報告‧完整清楚",
  "陪伴理解‧不預測未來",
];

const anim = (name: string, dur: string, delay: string) =>
  `${name} ${dur} ease-out ${delay} both` as const;

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#FAF6EF",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-15%", right: "-8%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(166,124,61,0.09) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%", left: "-12%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(166,124,61,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="space-y-8">

            {/* Brand label */}
            <div>
              <p
                className="font-sans text-xs font-medium mb-5"
                style={{
                  color: "#A67C3D",
                  letterSpacing: "0.22em",
                  animation: anim("fade-in", "0.6s", "0.05s"),
                }}
              >
                GUANG YU METAPHYSICS INSTITUTE
              </p>

              {/* H1 — 逐行浮現 */}
              <h1
                className="font-serif font-bold leading-tight"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.1rem)", letterSpacing: "0.02em" }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#2B2622",
                    animation: anim("fade-up", "0.65s", "0.18s"),
                  }}
                >
                  看懂自己，
                </span>
                <span
                  style={{
                    display: "block",
                    color: "#2B2622",
                    animation: anim("fade-up", "0.65s", "0.36s"),
                  }}
                >
                  比急著改變人生更重要
                </span>
              </h1>

              {/* Gold separator */}
              <div
                className="mt-5 h-px w-14"
                style={{
                  background: "linear-gradient(to right, #A67C3D, transparent)",
                  transformOrigin: "left center",
                  animation: anim("scale-in-x", "0.5s", "0.56s"),
                }}
              />
            </div>

            {/* Description */}
            <p
              className="font-sans leading-relaxed"
              style={{
                color: "rgba(43,38,34,0.68)",
                fontSize: "0.975rem",
                maxWidth: "420px",
                animation: anim("fade-in", "0.6s", "0.64s"),
              }}
            >
              透過八字、紫微斗數、塔羅、生命靈數與占星整合分析，
              協助你整理現況、理解課題，找到更適合自己的方向。
            </p>

            {/* Google trust badge */}
            <div
              className="inline-flex items-center gap-3 w-fit"
              style={{
                padding: "8px 16px",
                background: "rgba(43,38,34,0.04)",
                border: "1px solid rgba(166,124,61,0.25)",
                borderRadius: "4px",
                animation: anim("fade-in", "0.5s", "0.78s"),
              }}
            >
              <span
                className="font-display font-bold"
                style={{ color: "#A67C3D", fontSize: "1.1rem", lineHeight: 1 }}
              >
                5.0
              </span>
              <span style={{ color: "rgba(166,124,61,0.7)", fontSize: "0.7rem", letterSpacing: "2px" }}>
                ★★★★★
              </span>
              <span className="font-sans text-xs" style={{ color: "rgba(43,38,34,0.5)" }}>
                128 則 Google 評價
              </span>
              <svg width="13" height="13" viewBox="0 0 24 24" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: anim("fade-up", "0.55s", "0.92s") }}
            >
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2.5 text-sm"
                style={{ padding: "14px 32px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                加入 LINE 預約諮詢
              </a>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center text-sm font-medium font-sans"
                style={{
                  padding: "14px 32px",
                  border: "1px solid rgba(166,124,61,0.35)",
                  color: "#A67C3D",
                  borderRadius: "4px",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                  textDecoration: "none",
                }}
              >
                先體驗免費命盤
              </Link>
            </div>

            {/* Trust items */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-2"
              style={{ animation: anim("fade-in", "0.5s", "1.08s") }}
            >
              {trustItems.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: "4px", height: "4px",
                      borderRadius: "50%",
                      background: "#A67C3D",
                      opacity: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <span className="text-xs font-sans" style={{ color: "rgba(43,38,34,0.52)" }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual — scale-in */}
          <div
            className="hidden lg:flex items-center justify-center relative"
            style={{
              minHeight: "520px",
              animation: anim("scale-in", "0.9s", "0.22s"),
            }}
          >
            <div
              aria-hidden="true"
              className="absolute w-[360px] h-[360px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(166,124,61,0.12) 0%, transparent 65%)" }}
            />
            <div className="relative w-[490px] h-[490px]">
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
