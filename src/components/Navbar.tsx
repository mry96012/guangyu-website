"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務項目" },
  { href: "/bazi", label: "八字測算" },
  { href: "/booking", label: "預約諮詢" },
  { href: "/contact", label: "聯絡我們" },
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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
            <Image
              src="/images/logo.png"
              alt="光宇方向命理研究所"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <p
              className="text-sm md:text-base font-serif font-semibold tracking-widest"
              style={{ color: "#C8A63A" }}
            >
              光宇方向
            </p>
            <p className="text-[10px] md:text-xs text-cream-muted tracking-[0.2em] opacity-70">
              命理研究所
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-sans tracking-wider text-cream/80 hover:text-gold transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-gold text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5"
          >
            立即預約
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="選單"
          >
            <span
              className="block w-6 h-0.5 bg-gold transition-all duration-300"
              style={{ transform: open ? "translateY(8px) rotate(45deg)" : "" }}
            />
            <span
              className="block w-6 h-0.5 bg-gold transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-gold transition-all duration-300"
              style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? "400px" : "0",
          background: "rgba(12,29,47,0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-cream/80 hover:text-gold font-sans text-sm tracking-wider border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 justify-center"
          >
            立即預約諮詢
          </a>
        </nav>
      </div>
    </header>
  );
}
