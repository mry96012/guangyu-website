"use client";
import Link from "next/link";
import { useEffect } from "react";

const MENU_ITEMS = [
  { href: "/system/time",     label: "工時",   sub: "Time",         icon: "📋" },
  { href: "/system/reports",  label: "回報",   sub: "Reports",      icon: "🔄" },
  { href: "/system/schedule", label: "出勤",   sub: "Attendance",   icon: "📅" },
  { href: "/system/stores",   label: "門市清單", sub: "Stores",      icon: "🏪" },
  { href: "/system/schedule?tab=sub", label: "代換班", sub: "Substitution", icon: "🔁" },
  { href: "/system/routine",  label: "例行公事", sub: "Routine",    icon: "✅" },
  { href: "#",                label: "聲明",   sub: "Disclaimer",   icon: "📄" },
  { href: "/system/settings", label: "設定",   sub: "Settings",     icon: "⚙️" },
];

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.35)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
        style={{
          background: "linear-gradient(160deg, #e0f7f5 0%, #c8e8e6 100%)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: "-8px 0 32px rgba(0,0,0,0.12)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-14 pb-6">
          <div>
            <p className="text-sm font-bold" style={{ color: "#2c3a47" }}>智能作業管理系統</p>
            <p className="text-xs" style={{ color: "#5a8a87" }}>Intelligent Work System</p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{ background: "rgba(255,255,255,0.6)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3d9e98" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-5 mb-4" style={{ height: "1px", background: "rgba(78,205,196,0.3)" }} />

        {/* Menu Items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-150 active:scale-95"
              style={{ background: "rgba(255,255,255,0.55)" }}
            >
              <span className="text-xl w-8 text-center">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold leading-tight" style={{ color: "#2c3a47" }}>{item.label}</p>
                <p className="text-xs" style={{ color: "#5a8a87" }}>{item.sub}</p>
              </div>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-6">
          <p className="text-xs text-center" style={{ color: "#7aada9" }}>v2.0 · 智能作業管理系統</p>
        </div>
      </aside>
    </>
  );
}
