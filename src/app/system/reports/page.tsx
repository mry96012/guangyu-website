"use client";
import { useState } from "react";
import { REPORTS, type Report } from "@/lib/system-data";

const TYPE_CONFIG: Record<string, { color: string; bg: string; icon: string }> = {
  "overdue-parcel":      { color: "#e07b39", bg: "#fff3ed", icon: "📦" },
  "parcel-reallocation": { color: "#7c6fd4", bg: "#f0eeff", icon: "🔀" },
  "lost-item":           { color: "#3d9e98", bg: "#e8f7f6", icon: "🔍" },
  "store-task":          { color: "#5a8a87", bg: "#e8f4f4", icon: "📋" },
};

function SectionCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="mx-4 rounded-3xl overflow-hidden" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
      <div className="px-5 py-4" style={{ background: "linear-gradient(135deg, #3d4d5c 0%, #2c3a47 100%)" }}>
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #4ecdc4, #22c55e)" }} />
          <div>
            <h2 className="text-base font-bold text-white leading-tight">{title}</h2>
            <p className="text-xs font-medium" style={{ color: "#4ecdc4" }}>{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function ReportCard({ rep, onToggle }: { rep: Report; onToggle: (id: string) => void }) {
  const cfg = TYPE_CONFIG[rep.type];
  return (
    <div className="flex items-start gap-3 py-3 border-b last:border-0" style={{ borderColor: "rgba(78,205,196,0.15)" }}>
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl shrink-0" style={{ background: cfg.bg }}>
        {cfg.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold px-2 py-0.5 rounded-lg" style={{ background: cfg.bg, color: cfg.color }}>{rep.typeLabel}</span>
          <span className="text-xs font-semibold" style={{ color: "#2c3a47" }}>{rep.storeName}</span>
        </div>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: "#7aada9" }}>{rep.description}</p>
        <p className="text-[11px] mt-1" style={{ color: "#aacbc8" }}>{rep.date}</p>
      </div>
      <button
        onClick={() => onToggle(rep.id)}
        className="shrink-0 mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150"
        style={rep.status === "completed"
          ? { borderColor: "#4ecdc4", background: "#4ecdc4" }
          : { borderColor: "#ccc", background: "transparent" }
        }
      >
        {rep.status === "completed" && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <polyline points="1,5 4.5,8.5 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

const TYPE_LABELS: Record<string, string> = {
  all: "全部",
  "overdue-parcel": "逾期包裹",
  "parcel-reallocation": "包裹重新分配",
  "lost-item": "遺落物品",
  "store-task": "門市交辦",
};

export default function ReportsPage() {
  const [reports, setReports] = useState(REPORTS);
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "completed">("all");

  function toggleReport(id: string) {
    setReports(prev =>
      prev.map(r => r.id === id ? { ...r, status: r.status === "completed" ? "pending" : "completed" } : r)
    );
  }

  const filtered = reports.filter(r =>
    (filter === "all" || r.type === filter) &&
    (statusFilter === "all" || r.status === statusFilter)
  );

  const pendingCount = reports.filter(r => r.status === "pending").length;

  return (
    <div className="space-y-4 py-4">
      {/* Summary */}
      <SectionCard title="日常作業回報" subtitle="Daily Operation Reports">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {(["overdue-parcel", "parcel-reallocation", "lost-item", "store-task"] as const).map((type) => {
            const count = reports.filter(r => r.type === type).length;
            const pending = reports.filter(r => r.type === type && r.status === "pending").length;
            const cfg = TYPE_CONFIG[type];
            return (
              <button key={type} onClick={() => setFilter(filter === type ? "all" : type)}
                className="flex flex-col items-center py-3 rounded-2xl transition-all duration-150"
                style={{ background: filter === type ? cfg.bg : "rgba(255,255,255,0.5)", border: `1px solid ${filter === type ? cfg.color + "40" : "rgba(78,205,196,0.15)"}` }}>
                <span className="text-xl">{cfg.icon}</span>
                <span className="text-base font-bold mt-1" style={{ color: cfg.color }}>{count}</span>
                {pending > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white mt-0.5" style={{ background: cfg.color }}>{pending}待</span>}
              </button>
            );
          })}
        </div>

        {/* Status Filter */}
        <div className="flex gap-2">
          {(["all", "pending", "completed"] as const).map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-150"
              style={statusFilter === s
                ? { background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)", color: "white" }
                : { background: "rgba(255,255,255,0.5)", color: "#7aada9", border: "1px solid rgba(78,205,196,0.2)" }
              }>
              {s === "all" ? "全部" : s === "pending" ? `待處理 (${pendingCount})` : "已完成"}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Report List */}
      <SectionCard title={TYPE_LABELS[filter]} subtitle={`${filtered.length} 筆記錄`}>
        {filtered.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-4xl mb-3">✅</p>
            <p className="text-sm font-medium" style={{ color: "#7aada9" }}>目前沒有符合的回報</p>
          </div>
        ) : (
          filtered.map(rep => <ReportCard key={rep.id} rep={rep} onToggle={toggleReport} />)
        )}
      </SectionCard>
    </div>
  );
}
