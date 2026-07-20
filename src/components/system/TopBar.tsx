"use client";
import Link from "next/link";

interface TopBarProps {
  onMenuOpen: () => void;
}

export default function TopBar({ onMenuOpen }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-14"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(78,205,196,0.15)",
      }}
    >
      <Link href="/system" className="flex items-center justify-center w-9 h-9 rounded-full" style={{ background: "rgba(78,205,196,0.12)", border: "1px solid rgba(78,205,196,0.25)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3d9e98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </Link>

      <h1 className="text-base font-bold tracking-wide" style={{ color: "#2c3a47" }}>
        智能作業管理系統
      </h1>

      <button
        onClick={onMenuOpen}
        className="flex items-center justify-center w-9 h-9 rounded-full"
        style={{ background: "rgba(78,205,196,0.12)", border: "1px solid rgba(78,205,196,0.25)" }}
        aria-label="開啟選單"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="#3d9e98" strokeWidth="2" strokeLinecap="round">
          <line x1="0" y1="1" x2="18" y2="1"/>
          <line x1="0" y1="7" x2="18" y2="7"/>
          <line x1="0" y1="13" x2="18" y2="13"/>
        </svg>
      </button>
    </header>
  );
}
