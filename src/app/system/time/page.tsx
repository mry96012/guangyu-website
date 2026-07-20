"use client";
import { useState } from "react";
import { TIME_RECORDS, STORES, type TimeRecord } from "@/lib/system-data";

const SHIFT_COLORS: Record<string, string> = {
  早班: "#3d9e98", 晚班: "#7c6fd4", 全班: "#e07b39", 休假: "#6b8c92",
};

const SHIFT_OPTIONS = ["早班 08:00-18:00", "晚班 13:00-23:00", "全班 08:00-22:00"];
const SHIFT_TIMES: Record<string, { start: string; end: string }> = {
  "早班 08:00-18:00": { start: "08:00", end: "18:00" },
  "晚班 13:00-23:00": { start: "13:00", end: "23:00" },
  "全班 08:00-22:00": { start: "08:00", end: "22:00" },
};

function SectionCard({ title, subtitle, children, action }: { title: string; subtitle: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="mx-4 rounded-3xl overflow-hidden" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
      <div className="px-5 py-4" style={{ background: "linear-gradient(135deg, #3d4d5c 0%, #2c3a47 100%)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #4ecdc4, #22c55e)" }} />
            <div>
              <h2 className="text-base font-bold text-white leading-tight">{title}</h2>
              <p className="text-xs font-medium" style={{ color: "#4ecdc4" }}>{subtitle}</p>
            </div>
          </div>
          {action}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function RecordRow({ rec }: { rec: TimeRecord }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b last:border-0" style={{ borderColor: "rgba(78,205,196,0.15)" }}>
      <div className="text-center shrink-0">
        <p className="text-xs font-bold" style={{ color: "#7aada9" }}>
          {rec.date.slice(5, 7)}/{rec.date.slice(8)}
        </p>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md text-white" style={{ background: SHIFT_COLORS[rec.shiftType] }}>
          {rec.shiftType}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight" style={{ color: "#2c3a47" }}>
          {rec.storeName}
          <span className="ml-2 text-xs font-normal" style={{ color: "#7aada9" }}>{rec.area}</span>
        </p>
        <p className="text-xs" style={{ color: "#7aada9" }}>{rec.startTime} – {rec.endTime}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-bold" style={{ color: "#3d9e98" }}>{rec.hours}H</p>
        {rec.overtime > 0 && (
          <p className="text-[11px]" style={{ color: "#e07b39" }}>+{rec.overtime}H</p>
        )}
      </div>
    </div>
  );
}

export default function TimePage() {
  const [tab, setTab] = useState<"month" | "range">("month");
  const [showForm, setShowForm] = useState(false);
  const [records, setRecords] = useState(TIME_RECORDS);

  // Form state
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    shift: SHIFT_OPTIONS[0],
    area: "萬華區" as "萬華區" | "中正區",
    storeId: STORES[0].id,
    overtime: 0,
    note: "",
  });

  const totalHours = records.reduce((s, r) => s + r.hours, 0);
  const totalOvertime = records.reduce((s, r) => s + r.overtime, 0);
  const workDays = new Set(records.map(r => r.date)).size;

  const filteredStores = STORES.filter(s => s.area === form.area);

  function handleSubmit() {
    const shiftLabel = form.shift.split(" ")[0] as "早班" | "晚班" | "全班";
    const times = SHIFT_TIMES[form.shift];
    const store = STORES.find(s => s.id === form.storeId) ?? STORES[0];
    const baseHours = shiftLabel === "全班" ? 14 : 10;
    const newRec: TimeRecord = {
      id: `tr${Date.now()}`,
      date: form.date,
      shiftType: shiftLabel,
      storeName: store.name,
      area: form.area,
      startTime: times.start,
      endTime: times.end,
      hours: baseHours + form.overtime,
      overtime: form.overtime,
      note: form.note,
    };
    setRecords([newRec, ...records]);
    setShowForm(false);
  }

  return (
    <div className="space-y-4 py-4">
      {/* Stats */}
      <SectionCard
        title="工時計算與紀錄系統"
        subtitle="Time & Attendance"
        action={
          <button onClick={() => setShowForm(true)} className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)" }}>
            + 新增工時
          </button>
        }
      >
        {/* Tab Toggle */}
        <div className="flex gap-2 mb-4 p-1 rounded-2xl" style={{ background: "rgba(78,205,196,0.1)" }}>
          {(["month", "range"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={tab === t
                ? { background: "white", color: "#3d9e98", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }
                : { color: "#7aada9" }
              }
            >
              {t === "month" ? "📅 整月" : "📆 區間"}
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "工時紀錄", value: records.length, unit: "筆" },
            { label: "出勤天數", value: workDays, unit: "天" },
            { label: "總工時", value: totalHours, unit: "小時" },
            { label: "加班", value: totalOvertime, unit: "小時" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center py-3 rounded-2xl" style={{ background: "rgba(78,205,196,0.08)", border: "1px solid rgba(78,205,196,0.15)" }}>
              <span className="text-base font-bold" style={{ color: "#3d9e98" }}>{s.value}</span>
              <span className="text-[10px]" style={{ color: "#7aada9" }}>{s.unit}</span>
              <span className="text-[10px] mt-0.5 font-medium" style={{ color: "#aacbc8" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* PDF Export */}
        <button className="w-full py-2.5 rounded-2xl text-sm font-semibold border-2 transition-all duration-200 active:scale-95" style={{ borderColor: "#4ecdc4", color: "#3d9e98" }}>
          📄 匯出 PDF 報表
        </button>
      </SectionCard>

      {/* Records List */}
      <SectionCard title="工時紀錄" subtitle="Records">
        <div>
          {records.map(rec => <RecordRow key={rec.id} rec={rec} />)}
        </div>
      </SectionCard>

      {/* Add Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end" style={{ background: "rgba(0,0,0,0.4)" }} onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="w-full rounded-t-3xl p-6 space-y-4" style={{ background: "linear-gradient(160deg, #e0f7f5 0%, #c8e8e6 100%)", maxHeight: "90vh", overflowY: "auto" }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold" style={{ color: "#2c3a47" }}>新增工時紀錄</h3>
              <button onClick={() => setShowForm(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b8c92" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Date */}
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>出勤日期</label>
              <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl text-sm font-medium" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }} />
            </div>

            {/* Shift */}
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>班別</label>
              <select value={form.shift} onChange={e => setForm({ ...form, shift: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl text-sm font-medium" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}>
                {SHIFT_OPTIONS.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            {/* Area + Store */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>區域</label>
                <select value={form.area} onChange={e => setForm({ ...form, area: e.target.value as "萬華區" | "中正區", storeId: STORES.find(s => s.area === e.target.value)?.id ?? STORES[0].id })}
                  className="w-full px-3 py-3 rounded-2xl text-sm font-medium" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}>
                  <option>萬華區</option>
                  <option>中正區</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>門市</label>
                <select value={form.storeId} onChange={e => setForm({ ...form, storeId: e.target.value })}
                  className="w-full px-3 py-3 rounded-2xl text-sm font-medium" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}>
                  {filteredStores.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
            </div>

            {/* Times (derived from shift) */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>上班時間</label>
                <div className="px-4 py-3 rounded-2xl text-sm font-bold" style={{ background: "rgba(255,255,255,0.6)", color: "#3d9e98" }}>
                  {SHIFT_TIMES[form.shift]?.start}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>下班時間</label>
                <div className="px-4 py-3 rounded-2xl text-sm font-bold" style={{ background: "rgba(255,255,255,0.6)", color: "#3d9e98" }}>
                  {SHIFT_TIMES[form.shift]?.end}
                </div>
              </div>
            </div>

            {/* Overtime */}
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>加班時數</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setForm({ ...form, overtime: Math.max(0, form.overtime - 1) })}
                  className="w-10 h-10 rounded-xl text-lg font-bold" style={{ background: "rgba(255,255,255,0.85)", color: "#3d9e98" }}>−</button>
                <span className="flex-1 text-center text-lg font-bold" style={{ color: "#2c3a47" }}>{form.overtime} H</span>
                <button onClick={() => setForm({ ...form, overtime: form.overtime + 1 })}
                  className="w-10 h-10 rounded-xl text-lg font-bold" style={{ background: "rgba(255,255,255,0.85)", color: "#3d9e98" }}>+</button>
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>備注（選填）</label>
              <textarea value={form.note} onChange={e => setForm({ ...form, note: e.target.value })}
                placeholder="輸入備注..." rows={2}
                className="w-full px-4 py-3 rounded-2xl text-sm resize-none" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }} />
            </div>

            <button onClick={handleSubmit}
              className="w-full py-4 rounded-2xl text-sm font-bold text-white transition-all duration-200 active:scale-95"
              style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)", boxShadow: "0 4px 16px rgba(78,205,196,0.4)" }}>
              確認新增
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
