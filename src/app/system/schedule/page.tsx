"use client";
import { useState } from "react";
import { SCHEDULE_DATA, SUBSTITUTIONS, STORES, type SubstitutionPost } from "@/lib/system-data";

const SHIFT_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  早班: { bg: "#dff5f3", color: "#3d9e98", label: "早" },
  晚班: { bg: "#eeebff", color: "#7c6fd4", label: "晚" },
  全班: { bg: "#fff3ed", color: "#e07b39", label: "全" },
  休假: { bg: "#f0f4f6", color: "#6b8c92", label: "休" },
};

const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
const MONTHS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

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

function CalendarView({ year, month }: { year: number; month: number }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const cells: Array<{ day: number | null }> = [];
  for (let i = 0; i < firstDay; i++) cells.push({ day: null });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d });
  while (cells.length % 7 !== 0) cells.push({ day: null });

  return (
    <div>
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map(d => (
          <div key={d} className="text-center text-xs font-semibold py-1" style={{ color: "#7aada9" }}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          if (!cell.day) return <div key={i} />;
          const shift = SCHEDULE_DATA[cell.day];
          const style = shift ? SHIFT_STYLE[shift] : null;
          const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === cell.day;
          return (
            <div key={i} className="flex flex-col items-center py-1">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold"
                style={isToday
                  ? { background: "#3d9e98", color: "white", boxShadow: "0 2px 8px rgba(61,158,152,0.4)" }
                  : style
                  ? { background: style.bg, color: style.color }
                  : { color: "#2c3a47" }
                }
              >
                {shift ? style!.label : cell.day}
              </div>
              {!shift && <span className="text-[9px]" style={{ color: "#aacbc8" }}>{cell.day}</span>}
            </div>
          );
        })}
      </div>
      {/* Legend */}
      <div className="flex gap-3 flex-wrap mt-4">
        {Object.entries(SHIFT_STYLE).map(([key, s]) => (
          <div key={key} className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold" style={{ background: s.bg, color: s.color }}>{s.label}</div>
            <span className="text-xs" style={{ color: "#7aada9" }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubBoard({ posts }: { posts: SubstitutionPost[] }) {
  if (posts.filter(p => p.status === "open").length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-4xl mb-2">📅</p>
        <p className="text-sm font-medium" style={{ color: "#7aada9" }}>目前沒有開放的代班需求</p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {posts.filter(p => p.status === "open").map(post => (
        <div key={post.id} className="p-4 rounded-2xl" style={{ background: "rgba(78,205,196,0.07)", border: "1px solid rgba(78,205,196,0.2)" }}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold" style={{ color: "#2c3a47" }}>{post.date} · {post.shiftType}</p>
              <p className="text-xs mt-0.5" style={{ color: "#7aada9" }}>{post.storeName} · {post.area}</p>
              {post.reason && <p className="text-xs mt-1" style={{ color: "#aacbc8" }}>{post.reason}</p>}
              <p className="text-xs mt-1 font-medium" style={{ color: "#5a8a87" }}>發布者：{post.postedBy}</p>
            </div>
            <button className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)" }}>
              接班
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const SHIFT_OPTIONS = ["早班 08:00-18:00", "晚班 13:00-23:00", "全班 08:00-22:00"];

export default function SchedulePage() {
  const [mainTab, setMainTab] = useState<"schedule" | "sub">("schedule");
  const [subTab, setSubTab] = useState<"board" | "mine" | "post">("board");
  const [subs, setSubs] = useState(SUBSTITUTIONS);

  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const [postForm, setPostForm] = useState({
    date: now.toISOString().slice(0, 10),
    shift: SHIFT_OPTIONS[0],
    area: "萬華區" as "萬華區" | "中正區",
    storeId: STORES[0].id,
    reason: "",
  });

  function handlePost() {
    const store = STORES.find(s => s.id === postForm.storeId) ?? STORES[0];
    const newPost: SubstitutionPost = {
      id: `sub${Date.now()}`,
      date: postForm.date,
      shiftType: postForm.shift,
      startTime: "08:00",
      endTime: "18:00",
      storeName: store.name,
      area: postForm.area,
      reason: postForm.reason,
      status: "open",
      postedBy: "我",
    };
    setSubs([newPost, ...subs]);
    setSubTab("board");
  }

  return (
    <div className="space-y-4 py-4">
      {/* Main Tab Toggle */}
      <div className="mx-4">
        <div className="flex gap-2 p-1 rounded-2xl" style={{ background: "rgba(255,255,255,0.6)" }}>
          {([["schedule", "📅 班表"], ["sub", "🔁 代換班"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setMainTab(t)}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={mainTab === t
                ? { background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)", color: "white", boxShadow: "0 4px 12px rgba(78,205,196,0.35)" }
                : { color: "#7aada9" }
              }>
              {label}
            </button>
          ))}
        </div>
      </div>

      {mainTab === "schedule" && (
        <>
          {/* Attendance Quick Links */}
          <SectionCard title="出勤管理" subtitle="Attendance">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: "🔗", label: "請假系統", sub: "Leave System" },
                { icon: "📅", label: "Google 日曆", sub: "Sync Calendar" },
                { icon: "📝", label: "班表填寫", sub: "Schedule Entry" },
                { icon: "📊", label: "出勤統計", sub: "Attendance Stats" },
              ].map(item => (
                <button key={item.label} className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-150 active:scale-95"
                  style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(78,205,196,0.2)" }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div className="text-left">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#2c3a47" }}>{item.label}</p>
                    <p className="text-xs" style={{ color: "#7aada9" }}>{item.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </SectionCard>

          {/* Calendar */}
          <SectionCard title={`${viewYear}年 ${MONTHS[viewMonth]}`} subtitle="月班表"
            action={
              <div className="flex items-center gap-2">
                <button onClick={() => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else { setViewMonth(m => m - 1); } }}
                  className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button onClick={() => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else { setViewMonth(m => m + 1); } }}
                  className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            }
          >
            <CalendarView year={viewYear} month={viewMonth} />
          </SectionCard>
        </>
      )}

      {mainTab === "sub" && (
        <SectionCard title="代班系統" subtitle="Substitution · 發布 / 接班 / 媒合"
          action={
            <button onClick={() => setSubTab("post")} className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)" }}>
              + 發布代班
            </button>
          }
        >
          {/* Sub Tabs */}
          <div className="flex gap-2 mb-4">
            {(["board", "mine", "post"] as const).map(t => (
              <button key={t} onClick={() => setSubTab(t)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-150"
                style={subTab === t
                  ? { background: "rgba(78,205,196,0.15)", color: "#3d9e98", border: "1px solid rgba(78,205,196,0.3)" }
                  : { color: "#7aada9", border: "1px solid rgba(78,205,196,0.1)" }
                }>
                {t === "board" ? "📋 代班看板" : t === "mine" ? "👤 我的代班" : "+ 發布代班"}
              </button>
            ))}
          </div>

          {subTab === "board" && <SubBoard posts={subs} />}

          {subTab === "mine" && (
            <div className="space-y-3">
              {subs.filter(p => p.postedBy === "我").length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-4xl mb-2">📋</p>
                  <p className="text-sm" style={{ color: "#7aada9" }}>尚無發布的代班需求</p>
                </div>
              ) : (
                subs.filter(p => p.postedBy === "我").map(post => (
                  <div key={post.id} className="p-4 rounded-2xl" style={{ background: "rgba(78,205,196,0.07)", border: "1px solid rgba(78,205,196,0.2)" }}>
                    <p className="text-sm font-bold" style={{ color: "#2c3a47" }}>{post.date} · {post.shiftType}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#7aada9" }}>{post.storeName} · {post.area}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-lg mt-2 inline-block" style={{ background: post.status === "open" ? "#dff5f3" : "#f0f4f6", color: post.status === "open" ? "#3d9e98" : "#6b8c92" }}>
                      {post.status === "open" ? "🟢 開放中" : "✅ 已媒合"}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}

          {subTab === "post" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>代班日期</label>
                <input type="date" value={postForm.date} onChange={e => setPostForm({ ...postForm, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl text-sm font-medium" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>班別</label>
                  <select value={postForm.shift} onChange={e => setPostForm({ ...postForm, shift: e.target.value })}
                    className="w-full px-3 py-3 rounded-2xl text-sm" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}>
                    {SHIFT_OPTIONS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>區域</label>
                  <select value={postForm.area} onChange={e => setPostForm({ ...postForm, area: e.target.value as "萬華區" | "中正區" })}
                    className="w-full px-3 py-3 rounded-2xl text-sm" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}>
                    <option>萬華區</option><option>中正區</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>門市</label>
                <select value={postForm.storeId} onChange={e => setPostForm({ ...postForm, storeId: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl text-sm" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}>
                  {STORES.filter(s => s.area === postForm.area).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#5a8a87" }}>代班原因（選填）</label>
                <textarea value={postForm.reason} onChange={e => setPostForm({ ...postForm, reason: e.target.value })}
                  placeholder="請輸入代班原因，讓接班人了解情況" rows={3}
                  className="w-full px-4 py-3 rounded-2xl text-sm resize-none" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }} />
              </div>
              <button onClick={handlePost}
                className="w-full py-4 rounded-2xl text-sm font-bold text-white transition-all duration-200 active:scale-95"
                style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)", boxShadow: "0 4px 16px rgba(78,205,196,0.4)" }}>
                發布代班需求
              </button>
            </div>
          )}
        </SectionCard>
      )}
    </div>
  );
}
