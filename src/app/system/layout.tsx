"use client";
import { useState } from "react";
import TopBar from "@/components/system/TopBar";
import BottomNav from "@/components/system/BottomNav";
import SideMenu from "@/components/system/SideMenu";

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #dff4f2 0%, #c5e5e8 50%, #b8dde0 100%)",
        fontFamily: '"Noto Sans TC", system-ui, sans-serif',
      }}
    >
      <TopBar onMenuOpen={() => setMenuOpen(true)} />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="pt-14 pb-20 min-h-screen">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
