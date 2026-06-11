"use client";
import { useState } from "react";
import { calculateBazi, HOUR_RANGES, HOUR_NAMES } from "@/lib/bazi";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const ELEMENT_COLORS: Record<string, string> = {
  木: "#4CAF50", 火: "#FF5722", 土: "#FFA726", 金: "#90A4AE", 水: "#42A5F5",
};

export default function BaziPreview() {
  const [form, setForm] = useState({ name: "", date: "", hour: "0", gender: "female" });
  const [result, setResult] = useState<ReturnType<typeof calculateBazi> | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date) return;
    const [y, m, d] = form.date.split("-").map(Number);
    const bazi = calculateBazi(y, m, d, Number(form.hour));
    setResult(bazi);
    setSubmitted(true);
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0C1D2F 0%, #0F2340 50%, #0C1D2F 100%)" }}
    >
      {/* Decorative wheel bg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="190" fill="none" stroke="#C8A63A" strokeWidth="2" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#C8A63A" strokeWidth="1" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="#C8A63A" strokeWidth="1" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * 30 - 90) * (Math.PI / 180);
            const r4 = (n: number) => Math.round(n * 10000) / 10000;
            return <line key={i}
              x1={r4(200 + 90 * Math.cos(a))} y1={r4(200 + 90 * Math.sin(a))}
              x2={r4(200 + 190 * Math.cos(a))} y2={r4(200 + 190 * Math.sin(a))}
              stroke="#C8A63A" strokeWidth="1" />;
          })}
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-gold/70 text-xs tracking-[0.3em] font-sans uppercase">Free Preview</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream tracking-wide">
            八字速測・免費查看
          </h2>
          <p className="text-cream/55 font-sans text-sm max-w-sm mx-auto">
            輸入出生資料，即刻查看您的年柱與日主
          </p>
          <div className="ornament-line max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <label className="block">
                <span className="text-cream/60 text-xs font-sans tracking-wider">姓名</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="請輸入您的姓名"
                  className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream bg-transparent border focus:outline-none focus:border-gold transition-colors"
                  style={{ borderColor: "rgba(200,166,58,0.3)", background: "rgba(24,47,74,0.4)" }}
                />
              </label>
              <label className="block">
                <span className="text-cream/60 text-xs font-sans tracking-wider">出生日期</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                  className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream bg-transparent border focus:outline-none focus:border-gold transition-colors"
                  style={{
                    borderColor: "rgba(200,166,58,0.3)",
                    background: "rgba(24,47,74,0.4)",
                    colorScheme: "dark",
                  }}
                />
              </label>
              <label className="block">
                <span className="text-cream/60 text-xs font-sans tracking-wider">出生時辰</span>
                <select
                  value={form.hour}
                  onChange={(e) => setForm({ ...form, hour: e.target.value })}
                  className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream border focus:outline-none focus:border-gold transition-colors"
                  style={{ borderColor: "rgba(200,166,58,0.3)", background: "#0F2340" }}
                >
                  {HOUR_NAMES.map((n, i) => (
                    <option key={i} value={i === 0 ? 23 : (i * 2 - 1)}>
                      {n}時（{HOUR_RANGES[i]}）
                    </option>
                  ))}
                  <option value="12">不確定</option>
                </select>
              </label>
              <div className="flex gap-4">
                {["female", "male"].map((g) => (
                  <label key={g}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border cursor-pointer transition-all text-sm font-sans"
                    style={{
                      borderColor: form.gender === g ? "#C8A63A" : "rgba(200,166,58,0.2)",
                      background: form.gender === g ? "rgba(200,166,58,0.1)" : "transparent",
                      color: form.gender === g ? "#C8A63A" : "rgba(245,241,234,0.5)",
                    }}
                  >
                    <input type="radio" value={g} checked={form.gender === g}
                      onChange={(e) => setForm({ ...form, gender: e.target.value })}
                      className="sr-only" />
                    {g === "female" ? "♀ 女性" : "♂ 男性"}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-gold w-full justify-center text-sm">
              立即查看我的命盤 →
            </button>
          </form>

          {/* Result */}
          <div className="relative">
            {!submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-8 border border-gold/10 text-center space-y-3"
                style={{ background: "rgba(24,47,74,0.3)", minHeight: "300px" }}>
                <span className="text-gold/40 text-4xl">☯</span>
                <p className="text-cream/40 font-sans text-sm">填寫左側資料後<br />即可查看您的免費命盤預覽</p>
              </div>
            ) : result ? (
              <div className="space-y-4">
                {/* Year pillar - FREE */}
                <div className="p-5 border border-gold/30"
                  style={{ background: "rgba(200,166,58,0.06)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold text-xs font-sans tracking-widest">年柱（免費查看）</p>
                    <span className="text-green-400 text-xs font-sans">✓ 已解鎖</span>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="text-center">
                      <p className="font-serif text-4xl font-bold text-gold">{result.year.stem}</p>
                      <p className="text-cream/50 text-xs font-sans mt-1">天干</p>
                    </div>
                    <div className="text-center">
                      <p className="font-serif text-4xl font-bold text-gold">{result.year.branch}</p>
                      <p className="text-cream/50 text-xs font-sans mt-1">地支</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-cream text-sm font-sans">{result.year.element}命</p>
                      <p className="text-cream/50 text-xs font-sans">{result.year.animal}年</p>
                    </div>
                  </div>
                  <p className="text-cream/60 text-xs font-sans mt-3">
                    日主：<span className="text-gold font-semibold">{result.dayMaster}</span>（{result.dayMasterElement}）・
                    先天{result.dayMasterElement}性格鮮明
                  </p>
                </div>

                {/* Locked pillars */}
                <div className="relative p-5 border border-gold/10 overflow-hidden"
                  style={{ background: "rgba(24,47,74,0.4)" }}>
                  <div className="blur-locked space-y-2 select-none" aria-hidden="true">
                    <div className="flex gap-4">
                      {["月柱","日柱","時柱"].map((p) => (
                        <div key={p} className="flex-1 text-center p-3 border border-white/5">
                          <p className="text-cream/40 text-xs mb-2">{p}</p>
                          <p className="font-serif text-2xl text-cream/30">甲</p>
                          <p className="font-serif text-2xl text-cream/30">子</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-1 mt-2">
                      {Object.entries(result.fiveElements).map(([el, v]) => (
                        <div key={el} className="flex-1 text-center">
                          <p className="text-xs text-cream/30">{el}</p>
                          <div className="h-2 mt-1 rounded-sm" style={{ background: `${ELEMENT_COLORS[el]}` + "33" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Lock overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4"
                    style={{ background: "rgba(12,29,47,0.7)" }}>
                    <span className="text-gold text-2xl mb-2">🔒</span>
                    <p className="text-cream/80 text-sm font-serif text-center">解鎖完整命盤分析</p>
                    <p className="text-cream/50 text-xs font-sans text-center mt-1 mb-4">
                      月柱、日柱、時柱、五行分析、命格解讀
                    </p>
                    <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                      className="btn-gold text-xs pulse-gold">
                      加入 LINE 獲取完整分析
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <p className="text-center text-cream/30 text-xs font-sans mt-8">
          ※ 本工具提供基礎命盤預覽，完整分析請預約專業命理師諮詢。
        </p>
      </div>
    </section>
  );
}
