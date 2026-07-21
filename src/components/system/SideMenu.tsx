"use client";
import Link from "next/link";
import { useEffect } from "react";

const ITEMS = [
  { href:"/system/time",           label:"工時",    sub:"Time",         icon:"⏱️" },
  { href:"/system/reports",        label:"回報",    sub:"Reports",      icon:"💬" },
  { href:"/system/schedule",       label:"出勤",    sub:"Attendance",   icon:"📅" },
  { href:"/system/stores",         label:"門市清單", sub:"Stores",       icon:"🏪" },
  { href:"/system/schedule?tab=sub",label:"代換班", sub:"Substitution", icon:"🔁" },
  { href:"/system/routine",        label:"例行公事",sub:"Routine",      icon:"✅" },
  { href:"#",                      label:"服務聲明", sub:"Disclaimer",   icon:"📄" },
  { href:"#",                      label:"設定",    sub:"Settings",     icon:"⚙️" },
];

export default function SideMenu({ open, onClose }: { open:boolean; onClose:()=>void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{ background:"rgba(15,30,40,0.45)", backdropFilter:"blur(4px)", opacity:open?1:0, pointerEvents:open?"auto":"none" }}
        onClick={onClose} />

      <aside className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
        style={{ background:"linear-gradient(160deg,#ccecea 0%,#a8d8da 100%)", transform:open?"translateX(0)":"translateX(100%)", transition:"transform 0.32s cubic-bezier(0.4,0,0.2,1)", boxShadow:"-12px 0 48px rgba(0,50,70,0.18)" }}>

        {/* Header */}
        <div className="px-5 pt-14 pb-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-black" style={{ fontSize:15, color:"#1a2a35" }}>作業管理系統</p>
              <p className="font-medium mt-0.5" style={{ fontSize:11, color:"#4d8a87" }}>Intelligent Work System · v2.0</p>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-[12px] flex items-center justify-center"
              style={{ background:"rgba(255,255,255,0.55)", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#29bdb3" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div className="mt-4 h-px" style={{ background:"rgba(46,191,181,0.25)" }} />
        </div>

        {/* Items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto pb-4">
          {ITEMS.map(item => (
            <Link key={item.label} href={item.href} onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-150 active:scale-[0.97]"
              style={{ background:"rgba(255,255,255,0.55)", boxShadow:"0 1px 4px rgba(0,50,70,0.06)", border:"1px solid rgba(255,255,255,0.8)" }}>
              <span style={{ fontSize:20, lineHeight:1, width:28, textAlign:"center" }}>{item.icon}</span>
              <div>
                <p className="font-bold leading-tight" style={{ fontSize:14, color:"#1a2a35" }}>{item.label}</p>
                <p className="font-medium" style={{ fontSize:11, color:"#4d8a87" }}>{item.sub}</p>
              </div>
              <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8ab4ba" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-5 border-t" style={{ borderColor:"rgba(46,191,181,0.2)" }}>
          <p className="text-center font-medium" style={{ fontSize:12, color:"#7aada9" }}>© 2026 智能作業管理系統</p>
        </div>
      </aside>
    </>
  );
}
