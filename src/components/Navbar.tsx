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
          ? "rgba(10,22,40,0.97)"
          : "linear-gradient(to bottom, rgba(10,22,40,0.85), transparent)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.18)" : "none",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Main nav row — taller on desktop */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ height: scrolled ? "72px" : "88px", transition: "height .4s ease" }}>

        {/* ── Logo block ── */}
        <Link href="/" className="flex items-center gap-4 group" style={{ textDecoration: "none" }}>
          {/* Logo image — larger than before */}
          <div
            className="relative shrink-0 transition-all duration-400"
            style={{
              width: scrolled ? "52px" : "68px",
              height: scrolled ? "52px" : "68px",
              filter: "drop-shadow(0 0 10px rgba(212,175,55,0.35))",
              transition: "width .4s ease, height .4s ease, filter .4s ease",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="光宇方向命理研究所"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Brand text */}
          <div className="hidden sm:flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <p
              className="font-serif font-bold tracking-[.14em] transition-all duration-400"
              style={{
                color: "#D4AF37",
                fontSize: scrolled ? "1.05rem" : "1.35rem",
                textShadow: "0 0 18px rgba(212,175,55,0.35)",
                transition: "font-size .4s ease",
              }}
            >
              光宇方向研究所
            </p>
            <p
              className="font-sans tracking-[.22em] transition-all duration-400"
              style={{
                color: "rgba(212,175,55,0.55)",
                fontSize: scrolled ? ".52rem" : ".62rem",
                marginTop: "4px",
                letterSpacing: ".22em",
                transition: "font-size .4s ease",
              }}
            >
              GUANGYU DESTINY INSTITUTE
            </p>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans tracking-wider text-cream/75 hover:text-gold transition-colors duration-200 relative group"
              style={{ fontSize: ".82rem" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-gold text-xs px-4 py-2.5"
            style={{ letterSpacing: ".08em" }}
          >
            加入 LINE 諮詢
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="選單"
          >
            <span className="block w-6 h-0.5 bg-gold transition-all duration-300"
              style={{ transform: open ? "translateY(8px) rotate(45deg)" : "" }} />
            <span className="block w-6 h-0.5 bg-gold transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-gold transition-all duration-300"
              style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "" }} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? "400px" : "0",
          background: "rgba(10,22,40,0.98)",
          backdropFilter: "blur(16px)",
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
            加入 LINE 諮詢
          </a>
        </nav>
      </div>
    </header>
  );
}
