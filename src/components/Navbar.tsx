"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const navLinks = [
  { href: "/",         label: "首頁" },
  { href: "/about",    label: "關於光宇" },
  { href: "/services", label: "服務項目" },
  { href: "/cases",    label: "客戶案例" },
  { href: "/faq",      label: "FAQ" },
];

const LINE_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

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
        background: scrolled ? "rgba(12,12,12,0.97)" : "rgba(18,18,18,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(225,174,20,0.25)" : "rgba(225,174,20,0.1)"}`,
        boxShadow: scrolled ? "0 2px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between"
        style={{ height: scrolled ? "60px" : "72px", transition: "height 0.3s ease" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" style={{ textDecoration: "none" }}>
          <div
            className="relative shrink-0"
            style={{
              width: scrolled ? "40px" : "48px",
              height: scrolled ? "40px" : "48px",
              transition: "width 0.3s ease, height 0.3s ease",
            }}
          >
            <Image src="/logo.png" alt="光宇方向命理研究所" fill className="object-contain" priority />
          </div>
          <div className="hidden sm:flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <p
              className="font-serif font-bold tracking-widest whitespace-nowrap"
              style={{
                color: "#F5F0E8",
                fontSize: scrolled ? "1.05rem" : "1.2rem",
                transition: "font-size 0.3s ease",
              }}
            >
              光宇方向命理研究所
            </p>
            <p className="font-sans mt-1" style={{ color: "#E1AE14", fontSize: "0.55rem", letterSpacing: "0.12em" }}>
              理解自己・找到方向・創造更好的選擇
            </p>
            <p className="font-sans mt-0.5 tracking-widest whitespace-nowrap" style={{ color: "rgba(245,240,232,0.22)", fontSize: "0.5rem" }}>
              GUANGYU METAPHYSICS INSTITUTE
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="link-hover font-sans text-sm transition-colors duration-200 whitespace-nowrap"
              style={{ color: "rgba(245,240,232,0.72)", letterSpacing: "0.05em" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-sm transition-all duration-200"
            style={{ background: "#06C755", letterSpacing: "0.04em", boxShadow: "0 2px 8px rgba(6,199,85,0.22)" }}
          >
            {LINE_ICON}
            加入 LINE
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="選單"
          >
            {[
              open ? "translateY(8px) rotate(45deg)" : "",
              undefined,
              open ? "translateY(-8px) rotate(-45deg)" : "",
            ].map((transform, i) => (
              <span
                key={i}
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "#F5F0E8",
                  transform: transform ?? "",
                  opacity: i === 1 ? (open ? 0 : 1) : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="xl:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "480px" : "0",
          background: "rgba(14,14,14,0.98)",
          borderTop: open ? "1px solid rgba(225,174,20,0.18)" : "none",
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-3 gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-sans border-b"
              style={{ color: "rgba(245,240,232,0.75)", borderColor: "rgba(225,174,20,0.12)", letterSpacing: "0.04em" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-sm"
            style={{ background: "#06C755" }}
          >
            {LINE_ICON}
            加入 LINE 預約諮詢
          </a>
        </nav>
      </div>
    </header>
  );
}
