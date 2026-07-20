"use client";
import { useState } from "react";
import { ROUTINE_TASKS, type RoutineTask } from "@/lib/system-data";

const CATEGORY_COLORS: Record<string, { bg: string; color: string; icon: string }> = {
  "開店流程": { bg: "#dff5f3", color: "#3d9e98", icon: "🔓" },
  "日常維護": { bg: "#eeebff", color: "#7c6fd4", icon: "🧹" },
  "物流管理": { bg: "#fff3ed", color: "#e07b39", icon: "📦" },
  "設備維護": { bg: "#e8f4ff", color: "#3d7be0", icon: "🔧" },
  "財務核對": { bg: "#fff8e8", color: "#c49a16", icon: "💰" },
  "關店流程": { bg: "#f5e8ff", color: "#9c6fd4", icon: "🔒" },
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

function TaskRow({ task, onToggle }: { task: RoutineTask; onToggle: (id: string) => void }) {
  const cfg = CATEGORY_COLORS[task.category] ?? { bg: "#f0f4f6", color: "#6b8c92", icon: "📌" };
  return (
    <div
      className="flex items-center gap-3 py-3 border-b last:border-0"
      style={{ borderColor: "rgba(78,205,196,0.15)", opacity: task.completed ? 0.6 : 1 }}
    >
      <button
        onClick={() => onToggle(task.id)}
        className="shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150"
        style={task.completed
          ? { borderColor: "#4ecdc4", background: "#4ecdc4" }
          : { borderColor: "#c8dada", background: "transparent" }
        }
      >
        {task.completed && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <polyline points="1,5 4.5,8.5 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: cfg.bg }}>
        {cfg.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight" style={{ color: "#2c3a47", textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md" style={{ background: cfg.bg, color: cfg.color }}>{task.category}</span>
          <span className="text-[10px]" style={{ color: "#aacbc8" }}>{task.frequency}</span>
        </div>
      </div>
      {task.dueTime && (
        <span className="shrink-0 text-xs font-medium" style={{ color: task.completed ? "#aacbc8" : "#5a8a87" }}>{task.dueTime}</span>
      )}
    </div>
  );
}

export default function RoutinePage() {
  const [tasks, setTasks] = useState(ROUTINE_TASKS);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...Array.from(new Set(tasks.map(t => t.category)))];
  const filtered = filter === "all" ? tasks : tasks.filter(t => t.category === filter);

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  function toggleTask(id: string) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function resetAll() {
    setTasks(prev => prev.map(t => ({ ...t, completed: false })));
  }

  return (
    <div className="space-y-4 py-4">
      {/* Progress Card */}
      <SectionCard title="例行公事" subtitle="Routine Tasks"
        action={
          <button onClick={resetAll} className="px-3 py-1.5 rounded-xl text-xs font-bold" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            重置
          </button>
        }
      >
        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold" style={{ color: "#2c3a47" }}>今日完成進度</span>
            <span className="text-sm font-bold" style={{ color: "#3d9e98" }}>{completedCount}/{tasks.length}</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(78,205,196,0.15)" }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: "linear-gradient(90deg, #4ecdc4, #22c55e)" }}
            />
          </div>
          <p className="text-xs mt-1.5 text-right" style={{ color: "#7aada9" }}>{progress}% 完成</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(cat => {
            const cfg = CATEGORY_COLORS[cat];
            return (
              <button key={cat} onClick={() => setFilter(cat)}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150"
                style={filter === cat
                  ? { background: cat === "all" ? "linear-gradient(135deg, #4ecdc4, #2ab5ad)" : cfg.bg, borderColor: "transparent", color: cat === "all" ? "white" : cfg.color }
                  : { background: "transparent", borderColor: "rgba(78,205,196,0.25)", color: "#7aada9" }
                }>
                {cat === "all" ? "全部" : cat}
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Task List */}
      <SectionCard title={filter === "all" ? "所有任務" : filter} subtitle={`${filtered.filter(t => t.completed).length}/${filtered.length} 完成`}>
        {filtered.map(task => (
          <TaskRow key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </SectionCard>
    </div>
  );
}
