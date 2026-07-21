"use client";
import { useState } from "react";
import { SCHEDULE_DATA, SUBSTITUTIONS, STORES, type SubstitutionPost } from "@/lib/system-data";
import { Card, PrimaryBtn, Field, inputStyle, C } from "@/components/system/UI";

const SHIFT_STYLE:Record<string,{bg:string;color:string;label:string}> = {
  早班:{bg:"#d7f5f3",color:"#1a8a84",label:"早"},
  晚班:{bg:"#eae8ff",color:"#5b4fc9",label:"晚"},
  全班:{bg:"#fff3e8",color:"#c45e1a",label:"全"},
  休假:{bg:"#eef2f4",color:"#4d7580",label:"休"},
};
const WEEKDAYS=["日","一","二","三","四","五","六"];
const MONTHS=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const SHIFT_OPTIONS=["早班 08:00-18:00","晚班 13:00-23:00","全班 08:00-22:00"];

function CalendarView({year,month}:{year:number;month:number}){
  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const today=new Date();
  const cells:Array<number|null>=[];
  for(let i=0;i<firstDay;i++)cells.push(null);
  for(let d=1;d<=daysInMonth;d++)cells.push(d);
  while(cells.length%7!==0)cells.push(null);

  return(
    <div>
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map((d,i)=>(
          <div key={d} className="text-center py-1 font-semibold" style={{ fontSize:11, color:i===0||i===6?"#c45e1a":C.textMute }}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day,i)=>{
          if(!day)return<div key={i}/>;
          const shift=SCHEDULE_DATA[day];
          const ss=shift?SHIFT_STYLE[shift]:null;
          const isToday=today.getFullYear()===year&&today.getMonth()===month&&today.getDate()===day;
          return(
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold"
                style={{ fontSize:12,
                  ...(isToday?{background:"linear-gradient(135deg,#4ecdc4,#1fa099)",color:"white",boxShadow:"0 3px 10px rgba(46,191,181,0.4)"}
                    :ss?{background:ss.bg,color:ss.color}
                    :{color:C.text})
                }}>
                {ss?ss.label:day}
              </div>
              {!ss&&<span style={{ fontSize:9, color:"transparent" }}>·</span>}
            </div>
          );
        })}
      </div>
      {/* Legend */}
      <div className="flex gap-3 flex-wrap mt-5 pt-4 border-t" style={{ borderColor:"rgba(46,191,181,0.12)" }}>
        {Object.entries(SHIFT_STYLE).map(([key,s])=>(
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center font-bold" style={{ fontSize:10, background:s.bg, color:s.color }}>{s.label}</div>
            <span className="font-medium" style={{ fontSize:11, color:C.textSub }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SchedulePage(){
  const [mainTab,setMainTab]=useState<"schedule"|"sub">("schedule");
  const [subTab,setSubTab]=useState<"board"|"mine"|"post">("board");
  const [subs,setSubs]=useState(SUBSTITUTIONS);
  const now=new Date();
  const [yr,setYr]=useState(now.getFullYear());
  const [mo,setMo]=useState(now.getMonth());
  const [postForm,setPostForm]=useState({ date:now.toISOString().slice(0,10), shift:SHIFT_OPTIONS[0], area:"萬華區" as "萬華區"|"中正區", storeId:STORES[0].id, reason:"" });

  function handlePost(){
    const store=STORES.find(s=>s.id===postForm.storeId)??STORES[0];
    setSubs([{id:`sub${Date.now()}`,date:postForm.date,shiftType:postForm.shift,startTime:"08:00",endTime:"18:00",storeName:store.name,area:postForm.area,reason:postForm.reason,status:"open",postedBy:"我"},...subs]);
    setSubTab("board");
  }
  function prevMonth(){if(mo===0){setMo(11);setYr(y=>y-1);}else setMo(m=>m-1);}
  function nextMonth(){if(mo===11){setMo(0);setYr(y=>y+1);}else setMo(m=>m+1);}

  return(
    <div className="space-y-4 py-5">
      {/* Main toggle */}
      <div className="mx-4">
        <div className="flex gap-2 p-1 rounded-2xl" style={{ background:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.85)" }}>
          {([["schedule","📅 班表"],["sub","🔁 代換班"]] as const).map(([t,l])=>(
            <button key={t} onClick={()=>setMainTab(t)}
              className="flex-1 py-2.5 rounded-xl font-semibold transition-all duration-200"
              style={{ fontSize:14,
                ...(mainTab===t
                  ?{background:"linear-gradient(135deg,#4ecdc4,#1fa099)",color:"white",boxShadow:"0 4px 14px rgba(46,191,181,0.38)"}
                  :{color:C.textSub})
              }}>{l}</button>
          ))}
        </div>
      </div>

      {mainTab==="schedule"&&<>
        {/* Attendance quick links */}
        <Card title="出勤管理" subtitle="Attendance">
          <div className="grid grid-cols-2 gap-3">
            {[{icon:"🔗",label:"請假系統",sub:"Leave System"},{icon:"📅",label:"Google 日曆",sub:"Sync Calendar"},{icon:"📝",label:"班表填寫",sub:"Schedule Entry"},{icon:"📊",label:"出勤統計",sub:"Stats"}].map(item=>(
              <button key={item.label} className="flex items-center gap-3 px-4 py-3.5 rounded-2xl active:scale-95 transition-transform text-left"
                style={{ background:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.88)", boxShadow:"0 2px 8px rgba(0,50,70,0.06)" }}>
                <span style={{ fontSize:24 }}>{item.icon}</span>
                <div>
                  <p className="font-bold leading-tight" style={{ fontSize:13, color:C.text }}>{item.label}</p>
                  <p className="font-medium" style={{ fontSize:11, color:C.textMute }}>{item.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Calendar */}
        <Card title={`${yr}年 ${MONTHS[mo]}`} subtitle="月班表"
          action={
            <div className="flex items-center gap-1">
              <button onClick={prevMonth} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background:"rgba(255,255,255,0.2)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button onClick={nextMonth} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background:"rgba(255,255,255,0.2)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          }>
          <CalendarView year={yr} month={mo}/>
        </Card>
      </>}

      {mainTab==="sub"&&(
        <Card title="代換班系統" subtitle="Substitution · 發布 / 接班 / 媒合"
          action={<button onClick={()=>setSubTab("post")} className="flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-white" style={{ fontSize:12, background:"linear-gradient(135deg,#4ecdc4,#1fa099)", boxShadow:"0 3px 10px rgba(46,191,181,0.38)" }}>
            + 發布代班
          </button>}>
          {/* Sub tabs */}
          <div className="flex gap-2 mb-4">
            {(["board","mine","post"] as const).map(t=>(
              <button key={t} onClick={()=>setSubTab(t)}
                className="flex-1 py-2 rounded-2xl font-semibold transition-all"
                style={{ fontSize:12,
                  ...(subTab===t
                    ?{background:"rgba(46,191,181,0.15)",color:C.teal,border:`1.5px solid rgba(46,191,181,0.3)`}
                    :{color:C.textSub,border:"1.5px solid rgba(46,191,181,0.12)"})
                }}>
                {t==="board"?"📋 看板":t==="mine"?"👤 我的":"+ 發布"}
              </button>
            ))}
          </div>

          {subTab==="board"&&(
            subs.filter(p=>p.status==="open").length===0?(
              <div className="text-center py-10"><p style={{ fontSize:36 }}>📋</p><p className="mt-2 font-medium" style={{ fontSize:13, color:C.textMute }}>目前沒有代班需求</p></div>
            ):(
              <div className="space-y-3">
                {subs.filter(p=>p.status==="open").map(post=>(
                  <div key={post.id} className="p-4 rounded-2xl" style={{ background:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.88)", boxShadow:"0 2px 8px rgba(0,50,70,0.06)" }}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold" style={{ fontSize:14, color:C.text }}>{post.date}</p>
                        <p className="font-medium mt-0.5" style={{ fontSize:13, color:C.teal }}>{post.shiftType}</p>
                        <p className="font-medium mt-1" style={{ fontSize:12, color:C.textMute }}>{post.storeName} · {post.area}</p>
                        {post.reason&&<p className="mt-1" style={{ fontSize:12, color:"#aacbc8" }}>{post.reason}</p>}
                        <p className="mt-1.5 font-semibold" style={{ fontSize:11, color:C.textSub }}>發布者：{post.postedBy}</p>
                      </div>
                      <button className="shrink-0 px-4 py-2 rounded-xl font-bold text-white" style={{ fontSize:13, background:"linear-gradient(135deg,#4ecdc4,#1fa099)", boxShadow:"0 3px 10px rgba(46,191,181,0.38)" }}>接班</button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {subTab==="mine"&&(
            subs.filter(p=>p.postedBy==="我").length===0?(
              <div className="text-center py-10"><p style={{ fontSize:36 }}>📅</p><p className="mt-2 font-medium" style={{ fontSize:13, color:C.textMute }}>尚無發布的代班</p></div>
            ):(
              <div className="space-y-3">
                {subs.filter(p=>p.postedBy==="我").map(post=>(
                  <div key={post.id} className="p-4 rounded-2xl" style={{ background:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.88)" }}>
                    <p className="font-bold" style={{ fontSize:14, color:C.text }}>{post.date} · {post.shiftType}</p>
                    <p className="mt-0.5 font-medium" style={{ fontSize:12, color:C.textMute }}>{post.storeName} · {post.area}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full font-bold" style={{ fontSize:11, background:"#d7f5f3", color:"#1a8a84" }}>🟢 開放中</span>
                  </div>
                ))}
              </div>
            )
          )}

          {subTab==="post"&&(
            <div className="space-y-4">
              <Field label="代班日期"><input type="date" value={postForm.date} onChange={e=>setPostForm({...postForm,date:e.target.value})} style={inputStyle}/></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="班別">
                  <select value={postForm.shift} onChange={e=>setPostForm({...postForm,shift:e.target.value})} style={inputStyle}>
                    {SHIFT_OPTIONS.map(s=><option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="區域">
                  <select value={postForm.area} onChange={e=>setPostForm({...postForm,area:e.target.value as "萬華區"|"中正區"})} style={inputStyle}>
                    <option>萬華區</option><option>中正區</option>
                  </select>
                </Field>
              </div>
              <Field label="門市">
                <select value={postForm.storeId} onChange={e=>setPostForm({...postForm,storeId:e.target.value})} style={inputStyle}>
                  {STORES.filter(s=>s.area===postForm.area).map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </Field>
              <Field label="代班原因（選填）">
                <textarea value={postForm.reason} onChange={e=>setPostForm({...postForm,reason:e.target.value})} placeholder="請輸入代班原因，讓接班人了解情況" rows={3} style={{ ...inputStyle,resize:"none" }}/>
              </Field>
              <PrimaryBtn label="發布代班需求" onClick={handlePost}/>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
