"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務項目" },
  { href: "/bazi", label: "八字測算" },
  { href: "/booking", label: "預約諮詢" },
  { href: "/contact", label: "聯絡我們" },
];

const pageTitles: Record<string, string> = {
  "/": "首頁",
  "/bazi": "八字測算",
  "/booking": "預約諮詢",
  "/services": "服務項目",
  "/contact": "聯絡我們",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pageTitle = pageTitles[pathname] ?? "光宇方向";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(12,29,47,0.97)"
          : "linear-gradient(to bottom, rgba(12,29,47,0.8), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,166,58,0.2)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between h-14 px-4">
        <Link href="/" className="relative w-8 h-8 shrink-0">
          <Image src="/images/logo.png" alt="光宇" fill className="object-contain" priority />
        </Link>
        <span className="font-serif text-sm font-semibold tracking-widest" style={{ color: "#C8A63A" }}>
          {pageTitle}
        </span>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="加入 LINE 諮詢"
          className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
          style={{ background: "rgba(200,166,58,0.12)", border: "1px solid rgba(200,166,58,0.25)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#C8A63A">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
        </a>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 shrink-0">
            <Image src="/images/logo.png" alt="光宇方向命理研究所" fill className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <p className="text-base font-serif font-semibold tracking-widest" style={{ color: "#C8A63A" }}>光宇方向</p>
            <p className="text-xs tracking-[0.2em] opacity-70" style={{ color: "rgba(212,202,181,0.8)" }}>命理研究所</p>
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm font-sans tracking-wider text-cream/80 hover:text-gold transition-colors duration-200 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
          className="btn-gold text-sm px-5 py-2.5">
          加入 LINE 諮詢
        </a>
      </div>
    </header>
  );
}
