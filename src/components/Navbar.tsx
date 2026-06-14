"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const navLinks = [
  { href: "/",           label: "首頁" },
  { href: "/about",      label: "關於光宇" },
  { href: "/services",   label: "服務項目" },
  { href: "/services#theme",    label: "主題分析" },
  { href: "/services#integrated", label: "整合報告" },
  { href: "/experience", label: "免費體驗" },
  { href: "/cases",      label: "客戶案例" },
  { href: "/faq",        label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,253,249,0.97)" : "rgba(251,248,244,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "rgba(184,144,42,0.2)" : "rgba(184,144,42,0.1)"}`,
        boxShadow: scrolled ? "0 2px 24px rgba(26,45,69,0.08)" : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between"
        style={{ height: scrolled ? "64px" : "76px", transition: "height 0.3s ease" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" style={{ textDecoration: "none" }}>
          <div
            className="relative shrink-0"
            style={{
              width: scrolled ? "44px" : "52px",
              height: scrolled ? "44px" : "52px",
              transition: "width 0.3s ease, height 0.3s ease",
            }}
          >
            <Image
              src="/logo.png"
              alt="光宇方向命理研究所"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <p
              className="font-serif font-bold tracking-widest"
              style={{
                color: "#1A2D45",
                fontSize: scrolled ? "0.95rem" : "1.05rem",
                transition: "font-size 0.3s ease",
              }}
            >
              光宇方向命理研究所
            </p>
            <p
              className="font-sans mt-1"
              style={{
                color: "#B8902A",
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
              }}
            >
              理解自己・找到方向・創造更好的選擇
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="font-sans text-sm transition-colors duration-200 relative group whitespace-nowrap"
              style={{ color: "#4A5E72", letterSpacing: "0.04em" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "#B8902A" }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-white px-4 py-2.5 rounded-md transition-all duration-200"
            style={{
              background: "#06C755",
              letterSpacing: "0.04em",
              boxShadow: "0 2px 8px rgba(6,199,85,0.25)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            加入 LINE
          </a>
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="選單"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "#1A2D45",
                transform: open ? "translateY(8px) rotate(45deg)" : "",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: "#1A2D45", opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "#1A2D45",
                transform: open ? "translateY(-8px) rotate(-45deg)" : "",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="xl:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "520px" : "0",
          background: "rgba(251,248,244,0.98)",
          borderTop: open ? "1px solid rgba(184,144,42,0.1)" : "none",
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-3 gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-sans border-b transition-colors duration-200"
              style={{
                color: "#4A5E72",
                borderColor: "rgba(184,144,42,0.1)",
                letterSpacing: "0.04em",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-md"
            style={{ background: "#06C755" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            加入 LINE 預約諮詢
          </a>
        </nav>
      </div>
    </header>
  );
}
