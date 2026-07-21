"use client";
import { useState } from "react";
import { ROUTINE_TASKS } from "@/lib/system-data";
import { Card, C } from "@/components/system/UI";

const CAT_CFG: Record<string,{bg:string;color:string;icon:string}> = {
  "開店流程": { bg:"#d7f5f3", color:"#1a8a84", icon:"🔓" },
  "日常維護": { bg:"#eae8ff", color:"#5b4fc9", icon:"🧹" },
  "物流管理": { bg:"#fff3e8", color:"#c45e1a", icon:"📦" },
  "設備維護": { bg:"#e8eeff", color:"#3d6edd", icon:"🔧" },
  "財務核對": { bg:"#fffae8", color:"#b89416", icon:"💰" },
  "關店流程": { bg:"#f5e8ff", color:"#9c52d4", icon:"🔒" },
};

export default function RoutinePage(){
  const [tasks,setTasks]=useState(ROUTINE_TASKS);
  const [filter,setFilter]=useState("all");
  const cats=["all",...Array.from(new Set(tasks.map(t=>t.category)))];
  const filtered=filter==="all"?tasks:tasks.filter(t=>t.category===filter);
  const done=tasks.filter(t=>t.completed).length;
  const pct=Math.round((done/tasks.length)*100);

  const toggle=(id:string)=>setTasks(p=>p.map(t=>t.id===id?{...t,completed:!t.completed}:t));
  const reset=()=>setTasks(p=>p.map(t=>({...t,completed:false})));

  return(
    <div className="space-y-4 py-5">
      <Card title="例行公事" subtitle="Routine Tasks"
        action={<button onClick={reset} className="px-3 py-1.5 rounded-xl font-bold" style={{ fontSize:12, background:"rgba(255,255,255,0.2)", color:"white" }}>重置</button>}>

        {/* Progress */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold" style={{ fontSize:14, color:C.text }}>今日完成進度</span>
            <span className="font-black" style={{ fontSize:14, color:C.teal }}>{done}/{tasks.length}</span>
          </div>
          <div className="relative h-4 rounded-full overflow-hidden" style={{ background:"rgba(46,191,181,0.12)" }}>
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width:`${pct}%`, background:"linear-gradient(90deg,#4ecdc4,#22c55e)", boxShadow:`0 0 12px rgba(78,205,196,0.5)` }}/>
          </div>
          <div className="flex justify-between mt-1.5">
            <span style={{ fontSize:11, color:C.textMute }}>完成 {done} 項任務</span>
            <span className="font-bold" style={{ fontSize:11, color:pct===100?"#22c55e":C.teal }}>{pct}%</span>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth:"none" }}>
          {cats.map(cat=>{
            const cfg=CAT_CFG[cat];
            const active=filter===cat;
            return(
              <button key={cat} onClick={()=>setFilter(cat)}
                className="shrink-0 px-3 py-1.5 rounded-full font-semibold transition-all duration-150"
                style={{ fontSize:12,
                  ...(active
                    ?(cat==="all"?{background:"linear-gradient(135deg,#4ecdc4,#1fa099)",color:"white",boxShadow:"0 3px 8px rgba(46,191,181,0.35)"}:{background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.color}30`})
                    :{background:"rgba(255,255,255,0.65)",color:C.textSub,border:"1.5px solid rgba(255,255,255,0.85)"})
                }}>
                {cat==="all"?"✨ 全部":cat}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Task list */}
      <Card title={filter==="all"?"所有任務":filter} subtitle={`${filtered.filter(t=>t.completed).length}/${filtered.length} 完成`}>
        <div>
          {filtered.map((task,i)=>{
            const cfg=CAT_CFG[task.category]??{bg:"#eef2f4",color:"#4d7580",icon:"📌"};
            return(
              <div key={task.id}>
                <div className="flex items-center gap-3 py-3.5" style={{ opacity:task.completed?0.55:1 }}>
                  {/* Checkbox */}
                  <button onClick={()=>toggle(task.id)}
                    className="shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-150"
                    style={task.completed?{borderColor:C.teal,background:C.teal}:{borderColor:"#c8d8da",background:"transparent"}}>
                    {task.completed&&<svg width="13" height="11" viewBox="0 0 13 11" fill="none"><polyline points="1,5.5 5,9.5 12,1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </button>
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-lg shrink-0"
                    style={{ background:cfg.bg, border:`1px solid ${cfg.color}20` }}>
                    {cfg.icon}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold leading-tight" style={{ fontSize:14, color:C.text, textDecoration:task.completed?"line-through":"none" }}>{task.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-bold px-2 py-0.5 rounded-lg" style={{ fontSize:10, background:cfg.bg, color:cfg.color }}>{task.category}</span>
                      <span className="font-medium" style={{ fontSize:10, color:C.textMute }}>{task.frequency}</span>
                    </div>
                  </div>
                  {task.dueTime&&<span className="shrink-0 font-semibold" style={{ fontSize:12, color:task.completed?"#aacbc8":C.textSub }}>{task.dueTime}</span>}
                </div>
                {i<filtered.length-1&&<div style={{ height:1, background:"rgba(46,191,181,0.1)" }} />}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
