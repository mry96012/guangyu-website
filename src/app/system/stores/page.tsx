"use client";
import { useState } from "react";
import { STORES, type Area } from "@/lib/system-data";
import { Card, C } from "@/components/system/UI";

const AREAS: Array<Area|"全部區域"> = ["全部區域","萬華區","中正區"];
const AREA_COLOR: Record<string,{ bg:string; color:string }> = {
  "萬華區":{ bg:"#ffeede", color:"#c45e1a" },
  "中正區":{ bg:"#eae8ff", color:"#5b4fc9" },
};

export default function StoresPage() {
  const [area, setArea] = useState<Area|"全部區域">("全部區域");
  const [search, setSearch] = useState("");

  const filtered = STORES.filter(s =>
    (area==="全部區域"||s.area===area) &&
    (!search||s.name.includes(search)||s.address.includes(search))
  );

  return (
    <div className="space-y-4 py-5">
      <Card title="門市資訊" subtitle="Stores · 查詢 · 地址 · 導航">
        {/* Area chips */}
        <div className="flex gap-2 mb-4">
          {AREAS.map(a=>(
            <button key={a} onClick={()=>setArea(a)}
              className="flex items-center gap-1 px-4 py-2 rounded-full font-semibold transition-all duration-150 active:scale-95"
              style={{ fontSize:13,
                ...(area===a
                  ? { background:"linear-gradient(135deg,#4ecdc4,#1fa099)", color:"white", boxShadow:"0 3px 10px rgba(46,191,181,0.38)" }
                  : { background:"rgba(255,255,255,0.65)", color:C.textSub, border:"1.5px solid rgba(255,255,255,0.8)", boxShadow:"0 2px 6px rgba(0,50,70,0.06)" })
              }}>
              {area===a&&<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>}
              {a}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="搜尋門市名稱或地址"
            className="w-full pl-4 pr-12 py-3 rounded-2xl"
            style={{ background:"rgba(255,255,255,0.82)", border:"1.5px solid rgba(255,255,255,0.9)", color:C.text, fontSize:14, outline:"none", boxShadow:"0 2px 8px rgba(0,50,70,0.07)" }}
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background:"linear-gradient(135deg,#4ecdc4,#1fa099)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>
        <p className="font-medium mb-3" style={{ fontSize:12, color:C.textMute }}>共 {filtered.length} 間門市</p>

        {/* List */}
        <div className="space-y-2">
          {filtered.length===0 ? (
            <div className="text-center py-10">
              <p style={{ fontSize:36 }}>🔍</p>
              <p className="mt-2 font-medium" style={{ fontSize:13, color:C.textMute }}>找不到符合的門市</p>
            </div>
          ) : filtered.map(store=>{
            const ac = AREA_COLOR[store.area];
            return (
              <div key={store.id} className="flex items-center gap-3 px-4 py-3.5 rounded-2xl"
                style={{ background:"rgba(255,255,255,0.7)", border:"1px solid rgba(255,255,255,0.88)", boxShadow:"0 2px 10px rgba(0,50,70,0.07)" }}>
                {/* Area badge */}
                <span className="shrink-0 text-xs font-bold px-2 py-1 rounded-lg" style={{ background:ac.bg, color:ac.color }}>{store.area}</span>

                {/* Name + Address */}
                <div className="flex-1 min-w-0">
                  <p className="font-black" style={{ fontSize:15, color:C.text }}>{store.name}</p>
                  <p className="mt-0.5 leading-snug" style={{ fontSize:11, color:C.textMute }}>{store.address}</p>
                </div>

                {/* Nav button */}
                <button onClick={()=>window.open(`https://maps.google.com/?q=${encodeURIComponent(store.address)}`,"_blank")}
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90"
                  style={{ background:"linear-gradient(135deg,#4ecdc4,#1fa099)", boxShadow:"0 3px 10px rgba(46,191,181,0.38)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
