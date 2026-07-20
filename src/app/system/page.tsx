"use client";
import Link from "next/link";
import { TIME_RECORDS, REPORTS, STORES, ANNOUNCEMENTS } from "@/lib/system-data";

const SHIFT_COLORS: Record<string, string> = {
  早班: "#3d9e98",
  晚班: "#7c6fd4",
  全班: "#e07b39",
  休假: "#6b8c92",
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

function StatTile({ label, value, unit, color }: { label: string; value: string | number; unit: string; color: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(78,205,196,0.15)" }}>
      <span className="text-2xl font-bold leading-none" style={{ color }}>{value}</span>
      <span className="text-xs mt-1" style={{ color: "#5a8a87" }}>{unit}</span>
      <span className="text-[11px] mt-1 font-medium" style={{ color: "#7aada9" }}>{label}</span>
    </div>
  );
}

export default function SystemHomePage() {
  const pendingReports = REPORTS.filter(r => r.status === "pending").length;
  const todayRecord = TIME_RECORDS[0];

  return (
    <div className="space-y-4 py-4">
      {/* Today Overview */}
      <SectionCard title="今日總覽" subtitle="Today's Overview">
        <div className="grid grid-cols-2 gap-3">
          <StatTile label="工時記錄" value={todayRecord?.hours ?? 0} unit="小時" color="#3d9e98" />
          <StatTile label="待處理回報" value={pendingReports} unit="件" color="#e07b39" />
          <StatTile label="本月出勤" value={TIME_RECORDS.length} unit="天" color="#7c6fd4" />
          <StatTile label="管轄門市" value={STORES.length} unit="間" color="#3d9e98" />
        </div>
      </SectionCard>

      {/* Latest Activity */}
      <SectionCard title="最新活動" subtitle="Recent Activity">
        <div className="space-y-3">
          {TIME_RECORDS.slice(0, 4).map((rec) => (
            <div key={rec.id} className="flex items-center gap-3 py-2 border-b last:border-0" style={{ borderColor: "rgba(78,205,196,0.15)" }}>
              <span
                className="text-xs font-bold px-2 py-1 rounded-lg text-white shrink-0"
                style={{ background: SHIFT_COLORS[rec.shiftType] ?? "#6b8c92" }}
              >
                {rec.shiftType}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: "#2c3a47" }}>
                  {rec.storeName} · {rec.area}
                </p>
                <p className="text-xs" style={{ color: "#7aada9" }}>
                  {rec.startTime}–{rec.endTime} · {rec.hours}H
                  {rec.overtime > 0 && <span className="ml-1" style={{ color: "#e07b39" }}>加班{rec.overtime}H</span>}
                </p>
              </div>
              <span className="text-xs shrink-0" style={{ color: "#7aada9" }}>
                {rec.date.slice(5).replace("-", "/")}
              </span>
            </div>
          ))}
          <Link href="/system/time" className="block text-center text-sm font-medium pt-1" style={{ color: "#3d9e98" }}>
            查看全部工時記錄 →
          </Link>
        </div>
      </SectionCard>

      {/* Pending Reports */}
      <SectionCard title="待處理回報" subtitle="Pending Reports">
        {REPORTS.filter(r => r.status === "pending").length === 0 ? (
          <p className="text-center py-4 text-sm" style={{ color: "#7aada9" }}>目前無待處理回報</p>
        ) : (
          <div className="space-y-3">
            {REPORTS.filter(r => r.status === "pending").slice(0, 3).map((rep) => (
              <div key={rep.id} className="flex items-start gap-3 py-2 border-b last:border-0" style={{ borderColor: "rgba(78,205,196,0.15)" }}>
                <span className="text-xs font-bold px-2 py-1 rounded-lg shrink-0 text-white" style={{ background: "#e07b39" }}>
                  {rep.typeLabel}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold" style={{ color: "#2c3a47" }}>{rep.storeName}</p>
                  <p className="text-xs mt-0.5 truncate" style={{ color: "#7aada9" }}>{rep.description}</p>
                </div>
              </div>
            ))}
            <Link href="/system/reports" className="block text-center text-sm font-medium pt-1" style={{ color: "#3d9e98" }}>
              查看全部回報 →
            </Link>
          </div>
        )}
      </SectionCard>

      {/* Announcements */}
      <SectionCard title="系統公告" subtitle="Announcements">
        <div className="space-y-3">
          {ANNOUNCEMENTS.map((ann) => (
            <div key={ann.id} className="flex gap-3 py-2 border-b last:border-0" style={{ borderColor: "rgba(78,205,196,0.15)" }}>
              <div className="w-1 rounded-full shrink-0 mt-1" style={{ background: "linear-gradient(to bottom, #4ecdc4, #22c55e)", minHeight: "36px" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#2c3a47" }}>{ann.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "#7aada9" }}>{ann.content}</p>
                <p className="text-[11px] mt-1" style={{ color: "#aacbc8" }}>{ann.date}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
