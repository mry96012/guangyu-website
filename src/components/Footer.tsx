import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const quickLinks = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務項目" },
  { href: "/bazi", label: "八字測算" },
  { href: "/booking", label: "預約諮詢" },
  { href: "/contact", label: "聯絡我們" },
];

const services = [
  { href: "/services#oriental", label: "東方命理分析" },
  { href: "/services#western", label: "西方命理占卜" },
  { href: "/services#theme", label: "主題式分析" },
  { href: "/services#integrated", label: "整合型報告" },
  { href: "/booking", label: "預約諮詢流程" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080F18",
        borderTop: "1px solid rgba(200,166,58,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image src="/images/logo.png" alt="光宇" fill className="object-contain" />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-gold tracking-widest">光宇方向</p>
                <p className="text-cream/40 text-[10px] tracking-[0.2em]">命理研究所</p>
              </div>
            </div>
            <p className="text-cream/50 text-xs font-sans leading-relaxed">
              結合東西方命理智慧，透過專業分析與溫暖陪伴，
              協助你理解自己、找到方向、活出更好的未來。
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cream/60 hover:text-gold transition-colors font-sans">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                加入 LINE 好友
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gold text-xs tracking-[0.25em] font-sans uppercase">快速連結</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-cream/50 hover:text-gold text-sm font-sans tracking-wide transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-gold text-xs tracking-[0.25em] font-sans uppercase">服務項目</h4>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-cream/50 hover:text-gold text-sm font-sans tracking-wide transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-gold text-xs tracking-[0.25em] font-sans uppercase">聯絡我們</h4>
            <ul className="space-y-3">
              {[
                { icon: "◆", label: "LINE", value: "@enlite731", href: LINE_URL },
                { icon: "◆", label: "服務時間", value: "週一至週日 10:00–20:00" },
                { icon: "◆", label: "隱私保障", value: "個資嚴格保密・絕不外洩" },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-2">
                  <span className="text-gold text-xs mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-cream/40 text-[11px] font-sans">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer"
                        className="text-cream/70 hover:text-gold text-sm font-sans transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-cream/70 text-sm font-sans">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-cream/30 text-xs font-sans">
            © 2025 光宇方向命理研究所 All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["服務條款","隱私政策","退款說明","聯絡我們"].map((l) => (
              <Link key={l} href="/contact"
                className="text-cream/25 hover:text-gold text-xs font-sans transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
