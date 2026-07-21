"use client";
import Link from "next/link";
import { TIME_RECORDS, REPORTS, STORES, ANNOUNCEMENTS } from "@/lib/system-data";
import { Card, StatTile, ShiftBadge, C } from "@/components/system/UI";

export default function SystemHomePage() {
  const pendingReports = REPORTS.filter(r => r.status === "pending").length;
  const totalHours = TIME_RECORDS.reduce((s, r) => s + r.hours, 0);
  const workDays  = new Set(TIME_RECORDS.map(r => r.date)).size;

  return (
    <div className="space-y-4 py-5">
      {/* KPI Overview */}
      <Card title="今日總覽" subtitle="Today's Overview">
        <div className="grid grid-cols-2 gap-3">
          <StatTile icon="⏱️" value={`${TIME_RECORDS[0]?.hours ?? 0}`} unit="小時" label="今日工時" color="#1fa099" />
          <StatTile icon="📋" value={pendingReports} unit="件" label="待處理回報" color="#c45e1a" />
          <StatTile icon="📅" value={workDays} unit="天" label="本月出勤" color="#5b4fc9" />
          <StatTile icon="🏪" value={STORES.length} unit="間" label="管轄門市" color="#1fa099" />
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { href:"/system/time",     icon:"⏱️", label:"新增工時" },
            { href:"/system/reports",  icon:"📋", label:"回報管理" },
            { href:"/system/stores",   icon:"🏪", label:"門市查詢" },
          ].map(q => (
            <Link key={q.href} href={q.href}
              className="flex flex-col items-center gap-1.5 py-3 rounded-2xl active:scale-95 transition-transform"
              style={{ background:"rgba(255,255,255,0.55)", border:"1px solid rgba(255,255,255,0.85)", boxShadow:"0 2px 8px rgba(0,50,70,0.06)" }}>
              <span style={{ fontSize:20 }}>{q.icon}</span>
              <span className="font-semibold" style={{ fontSize:11, color:C.textSub }}>{q.label}</span>
            </Link>
          ))}
        </div>
      </Card>

      {/* Latest Activity */}
      <Card title="最新活動" subtitle="Recent Activity">
        <div className="space-y-1">
          {TIME_RECORDS.slice(0, 5).map((rec, i) => (
            <div key={rec.id}>
              <div className="flex items-center gap-3 py-3">
                <ShiftBadge shift={rec.shiftType} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate" style={{ fontSize:14, color:C.text }}>
                    {rec.storeName}
                    <span className="ml-1.5 font-normal" style={{ fontSize:12, color:C.textMute }}>{rec.area}</span>
                  </p>
                  <p className="font-medium" style={{ fontSize:12, color:C.textMute }}>
                    {rec.startTime}–{rec.endTime}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-black" style={{ fontSize:15, color:C.teal }}>{rec.hours}H</p>
                  {rec.overtime > 0 && <p className="font-bold" style={{ fontSize:11, color:"#c45e1a" }}>+{rec.overtime}H</p>}
                </div>
                <p className="shrink-0 font-medium" style={{ fontSize:11, color:C.textMute, minWidth:36, textAlign:"right" }}>{rec.date.slice(5).replace("-","/")}</p>
              </div>
              {i < 4 && <div style={{ height:1, background:"rgba(46,191,181,0.1)" }} />}
            </div>
          ))}
        </div>
        <Link href="/system/time" className="mt-3 flex items-center justify-center gap-1 font-semibold"
          style={{ fontSize:13, color:C.teal }}>
          查看全部工時記錄
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </Link>
      </Card>

      {/* Pending Reports */}
      <Card title="待處理回報" subtitle={`${pendingReports} 件待處理`}>
        {REPORTS.filter(r => r.status==="pending").length === 0 ? (
          <div className="text-center py-6">
            <p style={{ fontSize:36 }}>✅</p>
            <p className="mt-2 font-medium" style={{ fontSize:13, color:C.textMute }}>目前無待處理回報</p>
          </div>
        ) : (
          <div className="space-y-1">
            {REPORTS.filter(r => r.status==="pending").slice(0,3).map((rep, i, arr) => (
              <div key={rep.id}>
                <div className="flex items-start gap-3 py-3">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background:"#c45e1a" }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold" style={{ fontSize:13, color:"#c45e1a" }}>{rep.typeLabel}</span>
                      <span className="font-semibold" style={{ fontSize:13, color:C.text }}>{rep.storeName}</span>
                    </div>
                    <p className="mt-0.5 leading-relaxed" style={{ fontSize:12, color:C.textMute }}>{rep.description}</p>
                  </div>
                </div>
                {i < arr.length-1 && <div style={{ height:1, background:"rgba(46,191,181,0.1)" }} />}
              </div>
            ))}
            <Link href="/system/reports" className="mt-3 flex items-center justify-center gap-1 font-semibold"
              style={{ fontSize:13, color:C.teal }}>
              查看全部回報
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
        )}
      </Card>

      {/* Announcements */}
      <Card title="系統公告" subtitle="Announcements">
        <div className="space-y-1">
          {ANNOUNCEMENTS.map((ann, i) => (
            <div key={ann.id}>
              <div className="flex gap-3 py-3">
                <div className="shrink-0 mt-1 rounded-full" style={{ width:3, background:`linear-gradient(180deg,${C.tealLight},${C.green})`, minHeight:40 }} />
                <div>
                  <p className="font-bold" style={{ fontSize:13, color:C.text }}>{ann.title}</p>
                  <p className="mt-0.5 leading-relaxed" style={{ fontSize:12, color:C.textMute }}>{ann.content}</p>
                  <p className="mt-1 font-medium" style={{ fontSize:11, color:"#aacbc8" }}>{ann.date}</p>
                </div>
              </div>
              {i < ANNOUNCEMENTS.length-1 && <div style={{ height:1, background:"rgba(46,191,181,0.1)" }} />}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
