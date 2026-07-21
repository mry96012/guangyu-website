"use client";
import { useState } from "react";
import { TIME_RECORDS, STORES, type TimeRecord } from "@/lib/system-data";
import { Card, ShiftBadge, PrimaryBtn, GhostBtn, Field, inputStyle, TabToggle, C } from "@/components/system/UI";

const SHIFT_OPTIONS = ["早班 08:00-18:00","晚班 13:00-23:00","全班 08:00-22:00"];
const SHIFT_TIMES:Record<string,{start:string;end:string;base:number}> = {
  "早班 08:00-18:00":{start:"08:00",end:"18:00",base:10},
  "晚班 13:00-23:00":{start:"13:00",end:"23:00",base:10},
  "全班 08:00-22:00":{start:"08:00",end:"22:00",base:14},
};

export default function TimePage() {
  const [tab, setTab] = useState<"month"|"range">("month");
  const [showForm, setShowForm] = useState(false);
  const [records, setRecords] = useState(TIME_RECORDS);
  const [form, setForm] = useState({ date:new Date().toISOString().slice(0,10), shift:SHIFT_OPTIONS[0], area:"萬華區" as "萬華區"|"中正區", storeId:STORES[0].id, overtime:0, note:"" });

  const totalHours  = records.reduce((s,r)=>s+r.hours,0);
  const totalOT     = records.reduce((s,r)=>s+r.overtime,0);
  const workDays    = new Set(records.map(r=>r.date)).size;
  const filteredStores = STORES.filter(s=>s.area===form.area);

  function submit() {
    const shiftLabel = form.shift.split(" ")[0] as "早班"|"晚班"|"全班";
    const t = SHIFT_TIMES[form.shift];
    const store = STORES.find(s=>s.id===form.storeId)??STORES[0];
    setRecords([{ id:`tr${Date.now()}`, date:form.date, shiftType:shiftLabel, storeName:store.name, area:form.area, startTime:t.start, endTime:t.end, hours:t.base+form.overtime, overtime:form.overtime, note:form.note }, ...records]);
    setShowForm(false);
  }

  return (
    <div className="space-y-4 py-5">
      <Card title="工時計算與紀錄系統" subtitle="Time & Attendance"
        action={<button onClick={()=>setShowForm(true)} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-white" style={{ fontSize:12, background:"linear-gradient(135deg,#4ecdc4,#1fa099)", boxShadow:"0 3px 10px rgba(46,191,181,0.4)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增工時
        </button>}>

        <TabToggle options={[{value:"month",label:"📅 整月"},{value:"range",label:"📆 區間"}]} value={tab} onChange={setTab} />

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { icon:"📝", val:records.length, unit:"筆", label:"工時紀錄" },
            { icon:"📅", val:workDays,       unit:"天", label:"出勤天數" },
            { icon:"⏱️", val:totalHours,     unit:"時", label:"總工時" },
            { icon:"⚡", val:totalOT,        unit:"時", label:"加班" },
          ].map(s=>(
            <div key={s.label} className="flex flex-col items-center py-3 rounded-2xl"
              style={{ background:"rgba(255,255,255,0.6)", border:"1px solid rgba(255,255,255,0.88)", boxShadow:"0 2px 8px rgba(0,50,70,0.06)" }}>
              <span style={{ fontSize:18 }}>{s.icon}</span>
              <span className="font-black mt-1" style={{ fontSize:20, color:C.teal }}>{s.val}</span>
              <span className="font-medium" style={{ fontSize:10, color:C.textSub }}>{s.unit}</span>
              <span className="font-medium mt-0.5 text-center leading-tight" style={{ fontSize:9, color:C.textMute }}>{s.label}</span>
            </div>
          ))}
        </div>
        <GhostBtn label="📄 匯出 PDF 報表" />
      </Card>

      {/* Records */}
      <Card title="工時紀錄" subtitle={`共 ${records.length} 筆`}>
        <div>
          {records.map((rec,i)=>(
            <div key={rec.id}>
              <div className="flex items-center gap-3 py-3.5">
                <div className="shrink-0 text-center" style={{ minWidth:36 }}>
                  <p className="font-bold" style={{ fontSize:12, color:C.textMute }}>{rec.date.slice(5,7)}/{rec.date.slice(8)}</p>
                </div>
                <ShiftBadge shift={rec.shiftType} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate" style={{ fontSize:14, color:C.text }}>{rec.storeName}</p>
                  <p className="font-medium" style={{ fontSize:11, color:C.textMute }}>{rec.startTime}–{rec.endTime} · {rec.area}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-black" style={{ fontSize:16, color:C.teal }}>{rec.hours}H</p>
                  {rec.overtime>0 && <p className="font-bold" style={{ fontSize:11, color:"#c45e1a" }}>+{rec.overtime}H</p>}
                </div>
              </div>
              {i<records.length-1 && <div style={{ height:1, background:"rgba(46,191,181,0.1)" }} />}
            </div>
          ))}
        </div>
      </Card>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end" style={{ background:"rgba(15,30,40,0.5)", backdropFilter:"blur(6px)" }}
          onClick={e=>e.target===e.currentTarget&&setShowForm(false)}>
          <div className="w-full rounded-t-[28px] p-6 space-y-4"
            style={{ background:"linear-gradient(160deg,#ccecea 0%,#a8d8da 100%)", maxHeight:"92vh", overflowY:"auto" }}>
            <div className="flex items-center justify-between">
              <p className="font-black" style={{ fontSize:17, color:C.text }}>新增工時紀錄</p>
              <button onClick={()=>setShowForm(false)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background:"rgba(255,255,255,0.55)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.textSub} strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <Field label="出勤日期"><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} style={inputStyle}/></Field>
            <Field label="班別">
              <select value={form.shift} onChange={e=>setForm({...form,shift:e.target.value})} style={inputStyle}>
                {SHIFT_OPTIONS.map(s=><option key={s}>{s}</option>)}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="區域">
                <select value={form.area} onChange={e=>setForm({...form,area:e.target.value as "萬華區"|"中正區",storeId:STORES.find(s=>s.area===e.target.value)?.id??STORES[0].id})} style={inputStyle}>
                  <option>萬華區</option><option>中正區</option>
                </select>
              </Field>
              <Field label="門市">
                <select value={form.storeId} onChange={e=>setForm({...form,storeId:e.target.value})} style={inputStyle}>
                  {filteredStores.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="上班時間"><div className="px-4 py-3 rounded-[14px] font-bold" style={{ background:"rgba(255,255,255,0.7)", color:C.teal, fontSize:14 }}>{SHIFT_TIMES[form.shift]?.start}</div></Field>
              <Field label="下班時間"><div className="px-4 py-3 rounded-[14px] font-bold" style={{ background:"rgba(255,255,255,0.7)", color:C.teal, fontSize:14 }}>{SHIFT_TIMES[form.shift]?.end}</div></Field>
            </div>
            <Field label="加班時數">
              <div className="flex items-center gap-4 py-2">
                <button onClick={()=>setForm({...form,overtime:Math.max(0,form.overtime-1)})} className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xl" style={{ background:"rgba(255,255,255,0.75)", color:C.teal }}>−</button>
                <span className="flex-1 text-center font-black" style={{ fontSize:22, color:C.text }}>{form.overtime} H</span>
                <button onClick={()=>setForm({...form,overtime:form.overtime+1})} className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xl" style={{ background:"rgba(255,255,255,0.75)", color:C.teal }}>+</button>
              </div>
            </Field>
            <Field label="備注（選填）">
              <textarea value={form.note} onChange={e=>setForm({...form,note:e.target.value})} placeholder="輸入備注..." rows={2} style={{ ...inputStyle, resize:"none" }} />
            </Field>
            <PrimaryBtn label="確認新增" onClick={submit} />
          </div>
        </div>
      )}
    </div>
  );
}
