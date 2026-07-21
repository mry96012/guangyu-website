"use client";
import { useState } from "react";
import TopBar from "@/components/system/TopBar";
import BottomNav from "@/components/system/BottomNav";
import SideMenu from "@/components/system/SideMenu";

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{
      background: "linear-gradient(155deg,#bfe7e5 0%,#9fd4d8 40%,#88c4cc 75%,#7bb8c3 100%)",
      fontFamily: '"Noto Sans TC",system-ui,sans-serif',
    }}>
      {/* Decorative blobs */}
      <div style={{ position:"fixed", top:-90, right:-70, width:260, height:260, borderRadius:"50%", background:"rgba(255,255,255,0.18)", pointerEvents:"none", zIndex:0 }} />
      <div style={{ position:"fixed", top:180, left:-100, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,0.12)", pointerEvents:"none", zIndex:0 }} />
      <div style={{ position:"fixed", bottom:130, right:-60, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,0.1)", pointerEvents:"none", zIndex:0 }} />

      <TopBar onMenuOpen={() => setMenuOpen(true)} />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="relative pt-14 pb-24 min-h-screen" style={{ zIndex:1 }}>
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
