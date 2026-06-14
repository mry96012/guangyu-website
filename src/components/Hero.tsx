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

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#B8902A" }} />
              <p className="text-xs font-sans tracking-widest font-semibold" style={{ color: "#B8902A" }}>
                光宇方向命理研究所
              </p>
            </div>

            <div>
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

            <p className="font-sans leading-relaxed" style={{ color: "#4A5E72", fontSize: "1rem", maxWidth: "480px" }}>
              透過八字、紫微斗數、塔羅、生命靈數與占星分析，
              協助你整理現況、理解課題，找到更適合自己的方向。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/experience"
                className="btn-gold inline-flex items-center justify-center gap-2 text-sm"
                style={{ padding: "14px 28px" }}
              >
                ✦ 免費命盤體驗
                <span className="text-xs opacity-80 font-normal ml-1">立即領取個人命盤解析</span>
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 text-sm"
                style={{ padding: "14px 28px" }}
              >
                📅 預約諮詢
                <span className="text-xs opacity-70 font-normal ml-1">與光宇老師一對一諮詢</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              {trustItems.map((t) => (
                <div key={t.label} className="flex items-center gap-2">
                  <span className="text-sm">{t.icon}</span>
                  <span className="text-xs font-sans" style={{ color: "#6B7E90" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute w-96 h-96 rounded-full"
              style={{ border: "1px solid rgba(184,144,42,0.12)" }} />
            <div className="absolute w-72 h-72 rounded-full"
              style={{ border: "1px solid rgba(184,144,42,0.08)" }} />

            {/* Compass SVG decoration */}
            <svg viewBox="0 0 300 300" className="w-80 h-80 opacity-25" fill="none" stroke="#B8902A">
              <circle cx="150" cy="150" r="130" strokeWidth="0.5" strokeDasharray="4 4"/>
              <circle cx="150" cy="150" r="90"  strokeWidth="0.5" strokeDasharray="2 6"/>
              <circle cx="150" cy="150" r="50"  strokeWidth="0.8"/>
              <polygon points="150,20 158,142 150,280 142,142"  strokeWidth="0.5"/>
              <polygon points="20,150 142,158 280,150 142,142" strokeWidth="0.5"/>
              <polygon points="50,50 148,148 250,250 152,152"  strokeWidth="0.5"/>
              <polygon points="250,50 152,148 50,250 148,152"  strokeWidth="0.5"/>
              <circle cx="150" cy="150" r="8" strokeWidth="1.5" fill="#B8902A" opacity="0.7"/>
            </svg>

            <div className="absolute inset-0">
              <Image
                src="/images/hero-main.png"
                alt="命理羅盤"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating badge: rating */}
            <div
              className="absolute top-6 left-0 px-4 py-3 rounded-xl shadow-md"
              style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.15)" }}
            >
              <p className="text-xs font-sans" style={{ color: "#6B7E90" }}>Google 評價</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-sm font-bold font-serif" style={{ color: "#1A2D45" }}>5.0</span>
                <span className="text-yellow-400 text-xs">★★★★★</span>
              </div>
            </div>

            {/* Floating badge: clients */}
            <div
              className="absolute bottom-6 right-0 px-4 py-3 rounded-xl shadow-md"
              style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.15)" }}
            >
              <p className="text-xs font-sans font-semibold" style={{ color: "#1A2D45" }}>128 位客戶好評</p>
              <p className="text-xs font-sans mt-0.5" style={{ color: "#6B7E90" }}>真實分析・溫暖陪伴</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
