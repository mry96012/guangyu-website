"use client";
import { useState } from "react";
import { REPORTS, type Report } from "@/lib/system-data";
import { Card, C } from "@/components/system/UI";

const TYPE_CFG: Record<string,{ color:string; bg:string; icon:string; label:string }> = {
  "overdue-parcel":      { color:"#c45e1a", bg:"#fff3e8", icon:"📦", label:"逾期包裹" },
  "parcel-reallocation": { color:"#5b4fc9", bg:"#eae8ff", icon:"🔀", label:"包裹重新分配" },
  "lost-item":           { color:"#1a8a84", bg:"#d7f5f3", icon:"🔍", label:"遺落物品" },
  "store-task":          { color:"#4d7580", bg:"#e8f3f5", icon:"📋", label:"門市交辦" },
};

export default function ReportsPage() {
  const [reports, setReports] = useState(REPORTS);
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all"|"pending"|"completed">("all");

  const toggle = (id:string) => setReports(p=>p.map(r=>r.id===id?{...r,status:r.status==="completed"?"pending":"completed"}:r));
  const filtered = reports.filter(r=>(typeFilter==="all"||r.type===typeFilter)&&(statusFilter==="all"||r.status===statusFilter));
  const pendingCount = reports.filter(r=>r.status==="pending").length;

  return (
    <div className="space-y-4 py-5">
      {/* Summary tiles */}
      <Card title="日常作業回報" subtitle="Daily Operation Reports">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(TYPE_CFG).map(([type,cfg])=>{
            const count = reports.filter(r=>r.type===type).length;
            const pending = reports.filter(r=>r.type===type&&r.status==="pending").length;
            const active = typeFilter===type;
            return (
              <button key={type} onClick={()=>setTypeFilter(active?"all":type)}
                className="flex flex-col items-center py-3 gap-1 rounded-2xl transition-all duration-150 active:scale-95"
                style={{ background:active?cfg.bg:"rgba(255,255,255,0.65)", border:`1.5px solid ${active?cfg.color+"40":"rgba(255,255,255,0.85)"}`, boxShadow:"0 2px 8px rgba(0,50,70,0.06)" }}>
                <span style={{ fontSize:22 }}>{cfg.icon}</span>
                <span className="font-black" style={{ fontSize:18, color:cfg.color }}>{count}</span>
                {pending>0&&<span className="font-bold text-white px-1.5 py-0.5 rounded-full" style={{ fontSize:10, background:cfg.color }}>{pending}待</span>}
              </button>
            );
          })}
        </div>

        {/* Status pills */}
        <div className="flex gap-2">
          {(["all","pending","completed"] as const).map(s=>(
            <button key={s} onClick={()=>setStatusFilter(s)}
              className="flex-1 py-2 rounded-2xl font-semibold transition-all duration-150"
              style={{ fontSize:12,
                ...(statusFilter===s
                  ? { background:"linear-gradient(135deg,#4ecdc4,#1fa099)", color:"white", boxShadow:"0 3px 10px rgba(46,191,181,0.35)" }
                  : { background:"rgba(255,255,255,0.6)", color:C.textSub, border:"1px solid rgba(255,255,255,0.85)" })
              }}>
              {s==="all"?"全部":s==="pending"?`待處理 (${pendingCount})`:"已完成"}
            </button>
          ))}
        </div>
      </Card>

      {/* List */}
      <Card title={typeFilter==="all"?"全部回報":TYPE_CFG[typeFilter]?.label} subtitle={`${filtered.length} 筆記錄`}>
        {filtered.length===0?(
          <div className="text-center py-10">
            <p style={{ fontSize:36 }}>✅</p>
            <p className="mt-2 font-medium" style={{ fontSize:13, color:C.textMute }}>沒有符合的回報</p>
          </div>
        ):(
          <div>
            {filtered.map((rep,i)=>{
              const cfg=TYPE_CFG[rep.type];
              return (
                <div key={rep.id}>
                  <div className="flex items-start gap-3 py-3.5">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl shrink-0"
                      style={{ background:cfg.bg, border:`1.5px solid ${cfg.color}25` }}>
                      {cfg.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold px-2 py-0.5 rounded-lg" style={{ fontSize:11, background:cfg.bg, color:cfg.color }}>{cfg.label}</span>
                        <span className="font-bold" style={{ fontSize:13, color:C.text }}>{rep.storeName}</span>
                      </div>
                      <p className="mt-1 leading-relaxed" style={{ fontSize:12, color:C.textMute }}>{rep.description}</p>
                      <p className="mt-0.5 font-medium" style={{ fontSize:11, color:"#aacbc8" }}>{rep.date}</p>
                    </div>
                    <button onClick={()=>toggle(rep.id)}
                      className="shrink-0 mt-1 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-150"
                      style={rep.status==="completed"
                        ?{borderColor:C.teal,background:C.teal}
                        :{borderColor:"#c8d8da",background:"transparent"}
                      }>
                      {rep.status==="completed"&&(
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none"><polyline points="1,5.5 5,9.5 12,1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </button>
                  </div>
                  {i<filtered.length-1&&<div style={{ height:1, background:"rgba(46,191,181,0.1)" }} />}
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
