"use client";
import { useState } from "react";
import { STORES, type Area } from "@/lib/system-data";

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

const AREA_OPTIONS: Array<Area | "全部區域"> = ["全部區域", "萬華區", "中正區"];

export default function StoresPage() {
  const [areaFilter, setAreaFilter] = useState<Area | "全部區域">("全部區域");
  const [search, setSearch] = useState("");

  const filtered = STORES.filter(s =>
    (areaFilter === "全部區域" || s.area === areaFilter) &&
    (search === "" || s.name.includes(search) || s.address.includes(search))
  );

  function openMaps(address: string) {
    const encoded = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encoded}`, "_blank");
  }

  return (
    <div className="space-y-4 py-4">
      <SectionCard title="門市資訊" subtitle="Stores · 查詢 · 地址 · 導航">
        {/* Area Filter */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-4 scrollbar-hide">
          {AREA_OPTIONS.map(area => (
            <button
              key={area}
              onClick={() => setAreaFilter(area)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-150"
              style={areaFilter === area
                ? { background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)", borderColor: "transparent", color: "white", boxShadow: "0 2px 8px rgba(78,205,196,0.35)" }
                : { background: "transparent", borderColor: "rgba(78,205,196,0.4)", color: "#5a8a87" }
              }
            >
              {areaFilter === area && area === "全部區域" && "✓ "}{area}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="請輸入門市名稱"
            className="w-full pl-4 pr-12 py-3 rounded-2xl text-sm"
            style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(78,205,196,0.25)", color: "#2c3a47" }}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </div>

        {/* Count */}
        <p className="text-xs mb-3" style={{ color: "#7aada9" }}>共 {filtered.length} 間門市</p>

        {/* Store List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-4xl mb-2">🔍</p>
              <p className="text-sm" style={{ color: "#7aada9" }}>找不到符合的門市</p>
            </div>
          ) : (
            filtered.map(store => (
              <div
                key={store.id}
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(78,205,196,0.15)" }}
              >
                <span
                  className="text-xs font-bold px-2 py-1 rounded-lg shrink-0"
                  style={{ background: store.area === "萬華區" ? "#fff3ed" : "#eeebff", color: store.area === "萬華區" ? "#e07b39" : "#7c6fd4" }}
                >
                  {store.area}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold px-3 py-0.5 rounded-lg text-white" style={{ background: "#3d4d5c" }}>
                      {store.name}
                    </span>
                  </div>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: "#7aada9" }}>{store.address}</p>
                </div>
                <button
                  onClick={() => openMaps(store.address)}
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 active:scale-90"
                  style={{ background: "linear-gradient(135deg, #4ecdc4, #2ab5ad)", boxShadow: "0 2px 8px rgba(78,205,196,0.3)" }}
                  title="導航至此"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </SectionCard>
    </div>
  );
}
