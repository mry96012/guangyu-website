"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  {
    href: "/system/time", label: "工時",
    icon: (a:boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?"white":"#8ab4ba"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="13" y2="17"/>
      </svg>
    ),
  },
  {
    href: "/system/reports", label: "回報",
    icon: (a:boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?"white":"#8ab4ba"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    href: "/system/schedule", label: "班表",
    icon: (a:boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?"white":"#8ab4ba"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="8" y2="14" strokeWidth="3"/>
        <line x1="12" y1="14" x2="12" y2="14" strokeWidth="3"/>
        <line x1="16" y1="14" x2="16" y2="14" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    href: "/system/routine", label: "例行公事",
    icon: (a:boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?"white":"#8ab4ba"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-3 pb-2 pt-1"
      style={{ height:70, background:"rgba(255,255,255,0.88)", backdropFilter:"blur(24px)", borderTop:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 -4px 20px rgba(0,50,70,0.08)" }}>
      {ITEMS.map(item => {
        const active = pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 flex-1">
            <div className="w-12 h-10 rounded-2xl flex items-center justify-center transition-all duration-200"
              style={active
                ? { background:"linear-gradient(135deg,#4ecdc4,#1fa099)", boxShadow:"0 4px 14px rgba(46,191,181,0.42)" }
                : {}
              }>
              {item.icon(active)}
            </div>
            <span className="font-semibold leading-none" style={{ fontSize:10, color:active?"#1fa099":"#8ab4ba" }}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
