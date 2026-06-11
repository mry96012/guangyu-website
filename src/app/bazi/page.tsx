"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { calculateBazi, HOUR_NAMES, HOUR_RANGES } from "@/lib/bazi";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const ELEMENT_COLORS: Record<string, { backgroundColor: string; color: string }> = {
  木: { backgroundColor: "rgba(76,175,80,0.15)", color: "#81C784" },
  火: { backgroundColor: "rgba(255,87,34,0.15)", color: "#FF8A65" },
  土: { backgroundColor: "rgba(255,167,38,0.15)", color: "#FFB74D" },
  金: { backgroundColor: "rgba(144,164,174,0.15)", color: "#B0BEC5" },
  水: { backgroundColor: "rgba(66,165,245,0.15)", color: "#64B5F6" },
};

export default function BaziPage() {
  const [form, setForm] = useState({ name: "", date: "", hour: "12", gender: "female", contact: "" });
  const [result, setResult] = useState<ReturnType<typeof calculateBazi> | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date) return;
    const [y, m, d] = form.date.split("-").map(Number);
    const h = Number(form.hour) === 12 ? 12 : Number(form.hour);
    setResult(calculateBazi(y, m, d, h));
    setSubmitted(true);
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const totalEl = result
    ? Object.values(result.fiveElements).reduce((a, b) => a + b, 0)
    : 0;

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          className="pt-32 pb-14 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0C1D2F 0%, #182F4A 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,166,58,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-xl mx-auto px-6 space-y-4">
            <p className="text-gold/60 text-xs tracking-[0.3em] font-sans uppercase">Free BaZi Reading</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream tracking-wide">八字速測</h1>
            <div className="gold-divider max-w-xs mx-auto">
              <span className="text-gold/50 text-xs tracking-widest">免費查看年柱與日主</span>
            </div>
            <p className="text-cream/60 font-sans text-sm">
              輸入出生資料，即刻查看您的八字基礎命盤預覽
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="section-navy py-14">
          <div className="max-w-2xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-5 p-8 border border-gold/20"
              style={{ background: "rgba(24,47,74,0.4)" }}>
              <h2 className="font-serif text-xl text-cream mb-2">輸入出生資料</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-cream/60 text-xs font-sans tracking-wider">姓名</span>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="您的姓名（選填）"
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream border focus:outline-none focus:border-gold transition-colors"
                    style={{ borderColor: "rgba(200,166,58,0.3)", background: "rgba(12,29,47,0.5)" }} />
                </label>
                <label className="block">
                  <span className="text-cream/60 text-xs font-sans tracking-wider">出生日期 *</span>
                  <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream border focus:outline-none focus:border-gold transition-colors"
                    style={{ borderColor: "rgba(200,166,58,0.3)", background: "rgba(12,29,47,0.5)", colorScheme: "dark" }} />
                </label>
                <label className="block">
                  <span className="text-cream/60 text-xs font-sans tracking-wider">出生時辰</span>
                  <select value={form.hour} onChange={e => setForm({...form, hour: e.target.value})}
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream border focus:outline-none focus:border-gold transition-colors"
                    style={{ borderColor: "rgba(200,166,58,0.3)", background: "#0F2340" }}>
                    <option value="12">不確定</option>
                    {HOUR_NAMES.map((n, i) => (
                      <option key={i} value={i === 0 ? 23 : (i * 2 - 1)}>
                        {n}時（{HOUR_RANGES[i]}）
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  <span className="text-cream/60 text-xs font-sans tracking-wider block mb-1.5">性別</span>
                  <div className="flex gap-3">
                    {["female","male"].map(g => (
                      <label key={g} className="flex-1 flex items-center justify-center py-2.5 border cursor-pointer transition-all text-sm font-sans"
                        style={{ borderColor: form.gender === g ? "#C8A63A" : "rgba(200,166,58,0.2)", background: form.gender === g ? "rgba(200,166,58,0.1)" : "transparent", color: form.gender === g ? "#C8A63A" : "rgba(245,241,234,0.5)" }}>
                        <input type="radio" value={g} checked={form.gender === g} onChange={e => setForm({...form, gender: e.target.value})} className="sr-only" />
                        {g === "female" ? "♀ 女性" : "♂ 男性"}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <label className="block">
                <span className="text-cream/60 text-xs font-sans tracking-wider">聯絡方式（選填，方便後續諮詢）</span>
                <input type="text" value={form.contact} onChange={e => setForm({...form, contact: e.target.value})}
                  placeholder="LINE ID 或手機號碼"
                  className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream border focus:outline-none focus:border-gold transition-colors"
                  style={{ borderColor: "rgba(200,166,58,0.3)", background: "rgba(12,29,47,0.5)" }} />
              </label>
              <button type="submit" className="btn-gold w-full justify-center">
                查看我的命盤 →
              </button>
            </form>
          </div>
        </section>

        {/* Results */}
        {submitted && result && (
          <section className="section-navy pb-16">
            <div className="max-w-3xl mx-auto px-6 space-y-6">
              <h2 className="font-serif text-2xl text-cream text-center">
                {form.name ? `${form.name} 的命盤預覽` : "命盤預覽"}
              </h2>

              {/* Year pillar – FREE */}
              <div className="p-6 border border-gold/30"
                style={{ background: "rgba(200,166,58,0.06)" }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gold text-xs font-sans tracking-widest uppercase">年柱（免費查看）</p>
                  <span className="text-green-400 text-xs font-sans bg-green-900/30 px-2 py-0.5 rounded">✓ 已解鎖</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold text-gold tracking-wider">{result.year.stem}</p>
                    <p className="text-cream/50 text-xs font-sans mt-1">天干</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold text-gold tracking-wider">{result.year.branch}</p>
                    <p className="text-cream/50 text-xs font-sans mt-1">地支</p>
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 text-center text-sm font-sans rounded-sm"
                      style={ELEMENT_COLORS[result.year.element]}>
                      {result.year.element}命
                    </div>
                    <p className="text-cream/60 text-xs font-sans text-center">{result.year.animal}年生</p>
                    <p className="text-cream/60 text-xs font-sans text-center">
                      日主：<span className="text-gold font-semibold">{result.dayMaster}</span>（{result.dayMasterElement}）
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 border border-gold/10 text-xs font-sans text-cream/60 leading-relaxed"
                  style={{ background: "rgba(12,29,47,0.3)" }}>
                  <span className="text-gold">◆ 基礎解讀：</span>
                  您的年柱為 <strong className="text-cream">{result.year.stem}{result.year.branch}</strong>，
                  日主為 <strong className="text-cream">{result.dayMaster}</strong>（{result.dayMasterElement}命），
                  先天具備{result.dayMasterElement}性格特質。想了解完整命格分析，歡迎預約諮詢。
                </div>
              </div>

              {/* Locked pillars */}
              <div className="relative overflow-hidden border border-gold/10"
                style={{ background: "rgba(24,47,74,0.4)" }}>
                <div className="blur-locked p-6 space-y-4" aria-hidden="true">
                  <div className="grid grid-cols-4 gap-3">
                    {["年柱","月柱","日柱","時柱"].map((p) => (
                      <div key={p} className="text-center p-4 border border-white/5">
                        <p className="text-cream/30 text-xs mb-3 font-sans">{p}</p>
                        <p className="font-serif text-3xl text-cream/25">甲</p>
                        <p className="font-serif text-3xl text-cream/25 mt-1">子</p>
                        <p className="text-cream/20 text-xs mt-2 font-sans">木</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-cream/30 text-xs font-sans mb-2">五行能量分布</p>
                    <div className="flex gap-2">
                      {Object.entries(result.fiveElements).map(([el]) => (
                        <div key={el} className="flex-1">
                          <p className="text-xs font-sans text-center mb-1" style={{ color: ELEMENT_COLORS[el].color + "88" }}>{el}</p>
                          <div className="h-16 rounded-sm" style={{ background: ELEMENT_COLORS[el].backgroundColor }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  style={{ background: "rgba(12,29,47,0.82)" }}>
                  <div className="max-w-sm space-y-4">
                    <span className="text-gold text-3xl">🔒</span>
                    <h3 className="font-serif text-xl text-cream">解鎖完整命盤分析</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans text-cream/60">
                      {["月柱解析","日柱解析","時柱解析","五行分布","命格描述","流年趨勢"].map(i => (
                        <p key={i} className="flex items-center gap-1.5">
                          <span className="text-gold">◆</span>{i}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                        className="btn-gold text-xs pulse-gold">
                        加入 LINE 獲取完整分析
                      </a>
                      <a href="/booking" className="btn-outline text-xs">
                        立即預約諮詢
                      </a>
                    </div>
                    <p className="text-cream/30 text-xs">LINE ID：@enlite731</p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <p className="text-center text-cream/30 text-xs font-sans">
                ※ 本工具提供基礎命盤預覽，月柱計算採簡化公式（未考量精確節氣邊界），完整分析請預約專業命理師。
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
