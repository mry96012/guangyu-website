import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";
const EMAIL    = "guangyu.pro@gmail.com";
const PHONE    = "0978-586-343";
const IG_URL   = "https://instagram.com/enlite731";
const FB_URL   = "https://facebook.com";

const quickLinks = [
  { href: "/about",      label: "關於光宇" },
  { href: "/services",   label: "服務項目" },
  { href: "/cases",      label: "客戶案例" },
  { href: "/experience", label: "免費體驗" },
  { href: "/faq",        label: "FAQ" },
];

const serviceLinks = [
  { href: "/services#s1", label: "八字分析" },
  { href: "/services#s2", label: "紫微斗數分析" },
  { href: "/services#s4", label: "塔羅占卜" },
  { href: "/services#theme", label: "主題分析" },
  { href: "/services#integrated", label: "整合報告" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0F1E30", borderTop: "1px solid rgba(184,144,42,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image src="/logo.png" alt="光宇方向" fill className="object-contain" />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-white tracking-widest">光宇方向命理研究所</p>
                <p className="text-white/40 text-[10px] tracking-widest mt-0.5">理解自己・找到方向</p>
                <p className="font-sans text-[9px] tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>GUANGYU METAPHYSICS INSTITUTE</p>
              </div>
            </div>
            <p className="text-white/50 text-xs font-sans leading-relaxed">
              結合東西方命理智慧，透過專業分析與溫暖陪伴，
              協助你理解自己、找到方向，做出更適合自己的選擇。
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: "rgba(6,199,85,0.15)", border: "1px solid rgba(6,199,85,0.3)" }}
                aria-label="LINE">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#06C755">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: "rgba(184,144,42,0.1)", border: "1px solid rgba(184,144,42,0.25)" }}
                aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="#B8902A" stroke="none"/>
                </svg>
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: "rgba(184,144,42,0.1)", border: "1px solid rgba(184,144,42,0.25)" }}
                aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8902A">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white/80 text-xs tracking-[0.25em] font-sans uppercase font-semibold">快速連結</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-white/45 hover:text-white text-sm font-sans tracking-wide transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white/80 text-xs tracking-[0.25em] font-sans uppercase font-semibold">服務項目</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-white/45 hover:text-white text-sm font-sans tracking-wide transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white/80 text-xs tracking-[0.25em] font-sans uppercase font-semibold">聯絡我們</h4>
            <ul className="space-y-3">
              {[
                { label: "LINE",    value: "@enlite731",      href: LINE_URL },
                { label: "Email",   value: EMAIL,             href: `mailto:${EMAIL}` },
                { label: "電話",    value: PHONE,             href: `tel:${PHONE.replace(/-/g, "")}` },
                { label: "服務時間",value: "週一至週日 10:00–21:00" },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-2">
                  <span className="text-xs font-sans font-semibold mt-0.5 shrink-0"
                    style={{ color: "#B8902A", minWidth: "42px" }}>{c.label}</span>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white/55 hover:text-white text-xs font-sans transition-colors duration-200 break-all">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-white/55 text-xs font-sans">{c.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(184,144,42,0.1)" }}>
          <p className="text-white/25 text-xs font-sans">
            © 2025 光宇方向命理研究所 All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy"
              className="text-white/30 hover:text-white/60 text-xs font-sans transition-colors duration-200">
              隱私權與個資政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
