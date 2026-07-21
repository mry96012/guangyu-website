"use client";
import React from "react";

/* ─── Shared design tokens ─── */
export const C = {
  teal:     "#29bdb3",
  tealDark: "#1fa099",
  tealLight:"#4ecdc4",
  green:    "#22c55e",
  cardBg:   "rgba(255,255,255,0.82)",
  headerBg: "linear-gradient(135deg,#1e2e3a 0%,#243341 100%)",
  text:     "#1a2a35",
  textSub:  "#5a7d84",
  textMute: "#8ab4ba",
  border:   "rgba(255,255,255,0.88)",
  shadow:   "0 8px 32px rgba(0,50,70,0.11),0 1px 0 rgba(255,255,255,0.75) inset",
};

/* ─── Section Card ─── */
export function Card({
  title, subtitle, children, action, noPad = false,
}: {
  title: string; subtitle: string; children: React.ReactNode; action?: React.ReactNode; noPad?: boolean;
}) {
  return (
    <div className="mx-4 rounded-[20px] overflow-hidden" style={{ background: C.cardBg, backdropFilter:"blur(24px)", border:`1px solid ${C.border}`, boxShadow: C.shadow }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{ background: C.headerBg }}>
        <div className="flex items-center gap-2.5">
          <div className="rounded-full shrink-0" style={{ width:3, minHeight:28, background:`linear-gradient(180deg,${C.tealLight},${C.green})` }} />
          <div>
            <p className="font-bold text-white leading-tight" style={{ fontSize:15 }}>{title}</p>
            <p className="font-medium leading-none mt-0.5" style={{ fontSize:11, color:C.tealLight }}>{subtitle}</p>
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className={noPad ? "" : "p-5"}>{children}</div>
    </div>
  );
}

/* ─── Primary Button ─── */
export function PrimaryBtn({ label, onClick, small }: { label: string; onClick?: () => void; small?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="font-bold text-white active:scale-95 transition-transform"
      style={{
        background:`linear-gradient(135deg,${C.tealLight},${C.tealDark})`,
        padding: small ? "6px 14px" : "14px",
        borderRadius: small ? 12 : 16,
        fontSize: small ? 12 : 14,
        boxShadow:`0 4px 14px rgba(46,191,181,0.38)`,
        width: small ? undefined : "100%",
      }}
    >
      {label}
    </button>
  );
}

/* ─── Ghost Button ─── */
export function GhostBtn({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full font-semibold transition-all active:scale-95"
      style={{
        padding:"12px", borderRadius:16, fontSize:14, color:C.teal,
        background:"rgba(255,255,255,0.55)", border:`1.5px solid rgba(46,191,181,0.35)`,
      }}
    >
      {label}
    </button>
  );
}

/* ─── KPI Stat Tile ─── */
export function StatTile({ icon, value, unit, label, color = C.teal }: {
  icon: string; value: string|number; unit: string; label: string; color?: string;
}) {
  return (
    <div className="flex flex-col items-center py-4 px-1 rounded-[18px]"
      style={{ background:"rgba(255,255,255,0.6)", border:`1px solid rgba(255,255,255,0.85)`, boxShadow:"0 2px 12px rgba(0,50,70,0.07)" }}>
      <span style={{ fontSize:22, lineHeight:1 }}>{icon}</span>
      <span className="font-black mt-1.5 leading-none" style={{ fontSize:26, color }}>{value}</span>
      <span className="font-medium mt-0.5" style={{ fontSize:11, color:C.textSub }}>{unit}</span>
      <span className="font-medium mt-1 text-center leading-tight" style={{ fontSize:10, color:C.textMute }}>{label}</span>
    </div>
  );
}

/* ─── Shift Badge ─── */
const SHIFT_MAP: Record<string, { bg:string; color:string }> = {
  早班: { bg:"#d7f5f3", color:"#1a8a84" },
  晚班: { bg:"#eae8ff", color:"#5b4fc9" },
  全班: { bg:"#ffeede", color:"#c45e1a" },
  休假: { bg:"#e8f1f3", color:"#4d7580" },
};
export function ShiftBadge({ shift }: { shift: string }) {
  const s = SHIFT_MAP[shift] ?? { bg:"#e8f1f3", color:"#4d7580" };
  return (
    <span className="text-xs font-bold px-2.5 py-1 rounded-xl shrink-0" style={{ background:s.bg, color:s.color }}>
      {shift}
    </span>
  );
}

/* ─── Divider ─── */
export function Divider() {
  return <div style={{ height:1, background:"rgba(46,191,181,0.12)", margin:"0 0" }} />;
}

/* ─── Form Field ─── */
export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-semibold mb-1.5" style={{ fontSize:12, color:C.textSub }}>{label}</label>
      {children}
    </div>
  );
}
export const inputStyle: React.CSSProperties = {
  width:"100%", padding:"12px 16px", borderRadius:14, fontSize:14,
  background:"rgba(255,255,255,0.85)", border:"1.5px solid rgba(46,191,181,0.2)",
  color:C.text, outline:"none", appearance:"none" as const,
};

/* ─── Tab Toggle ─── */
export function TabToggle<T extends string>({ options, value, onChange }: {
  options: { value: T; label: string }[]; value: T; onChange: (v: T) => void;
}) {
  return (
    <div className="flex p-1 rounded-2xl mb-4" style={{ background:"rgba(46,191,181,0.1)" }}>
      {options.map(opt => (
        <button key={opt.value} onClick={() => onChange(opt.value)}
          className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
          style={value === opt.value
            ? { background:"white", color:C.teal, boxShadow:"0 2px 10px rgba(0,50,70,0.1)" }
            : { color:C.textSub }
          }>
          {opt.label}
        </button>
      ))}
    </div>
  );
}
