"use client";
import Link from "next/link";

export default function TopBar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-14"
      style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(255,255,255,0.6)", boxShadow:"0 1px 12px rgba(0,50,70,0.08)" }}>
      <Link href="/system">
        <div className="w-9 h-9 rounded-[12px] flex items-center justify-center" style={{ background:"linear-gradient(135deg,#4ecdc4,#29bdb3)", boxShadow:"0 2px 8px rgba(46,191,181,0.35)" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
      </Link>

      <p className="font-bold tracking-wide" style={{ fontSize:15, color:"#1a2a35" }}>智能作業管理系統</p>

      <button onClick={onMenuOpen} className="w-9 h-9 rounded-[12px] flex items-center justify-center"
        style={{ background:"rgba(255,255,255,0.7)", border:"1px solid rgba(46,191,181,0.25)", boxShadow:"0 2px 6px rgba(0,0,0,0.06)" }}>
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
          <rect width="17" height="2" rx="1" fill="#29bdb3"/>
          <rect y="5.5" width="12" height="2" rx="1" fill="#29bdb3"/>
          <rect y="11" width="8" height="2" rx="1" fill="#29bdb3"/>
        </svg>
      </button>
    </header>
  );
}
