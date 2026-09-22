"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { calculateBazi, HOUR_NAMES, HOUR_RANGES } from "@/lib/bazi";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const ELEMENT_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  木: { bg: "rgba(76,175,80,0.12)",   color: "#66BB6A", border: "rgba(76,175,80,0.3)"   },
  火: { bg: "rgba(229,57,53,0.12)",   color: "#EF5350", border: "rgba(229,57,53,0.3)"   },
  土: { bg: "rgba(255,152,0,0.12)",   color: "#FFA726", border: "rgba(255,152,0,0.3)"   },
  金: { bg: "rgba(180,190,200,0.12)", color: "#B0BEC5", border: "rgba(180,190,200,0.3)" },
  水: { bg: "rgba(33,150,243,0.12)",  color: "#42A5F5", border: "rgba(33,150,243,0.3)"  },
};

export default function BaziClient() {
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

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(225,174,20,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#E1AE14", letterSpacing: "0.22em" }}>FREE BAZI READING</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#F5F0E8" }}>八字速測</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
              輸入出生資料，即刻查看您的八字基礎命盤預覽
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 section-light">
          <div className="max-w-2xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-5 p-8"
              style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.15)" }}>
              <h2 className="font-serif text-xl font-semibold mb-2" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>輸入出生資料</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>姓名</span>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="您的姓名（選填）"
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
                    style={{ border: "1px solid rgba(225,174,20,0.15)", background: "#121212", color: "#F5F0E8" }} />
                </label>
                <label className="block">
                  <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>出生日期 *</span>
                  <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
                    style={{ border: "1px solid rgba(225,174,20,0.15)", background: "#121212", color: "#F5F0E8", colorScheme: "dark" }} />
                </label>
                <label className="block">
                  <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>出生時辰</span>
                  <select value={form.hour} onChange={e => setForm({...form, hour: e.target.value})}
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
                    style={{ border: "1px solid rgba(225,174,20,0.15)", background: "#121212", color: "#F5F0E8" }}>
                    <option value="12">不確定</option>
                    {HOUR_NAMES.map((n, i) => (
                      <option key={i} value={i === 0 ? 23 : (i * 2 - 1)}>
                        {n}時（{HOUR_RANGES[i]}）
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  <span className="text-xs font-sans tracking-wider block mb-1.5" style={{ color: "rgba(245,240,232,0.45)" }}>性別</span>
                  <div className="flex gap-3">
                    {["female","male"].map(g => (
                      <label key={g} className="flex-1 flex items-center justify-center py-2.5 border cursor-pointer transition-all text-sm font-sans"
                        style={{
                          borderColor: form.gender === g ? "#E1AE14" : "rgba(225,174,20,0.15)",
                          background: form.gender === g ? "rgba(225,174,20,0.08)" : "#121212",
                          color: form.gender === g ? "#E1AE14" : "rgba(245,240,232,0.42)"
                        }}>
                        <input type="radio" value={g} checked={form.gender === g} onChange={e => setForm({...form, gender: e.target.value})} className="sr-only" />
                        {g === "female" ? "♀ 女性" : "♂ 男性"}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <label className="block">
                <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>聯絡方式（選填，方便後續諮詢）</span>
                <input type="text" value={form.contact} onChange={e => setForm({...form, contact: e.target.value})}
                  placeholder="LINE ID 或手機號碼"
                  className="mt-1.5 w-full px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
                  style={{ border: "1px solid rgba(225,174,20,0.15)", background: "#121212", color: "#F5F0E8" }} />
              </label>
              <button type="submit" className="btn-gold w-full justify-center">
                查看我的命盤 →
              </button>
            </form>
          </div>
        </section>

        {/* Results */}
        {submitted && result && (
          <section className="pb-16 section-alt">
            <div className="max-w-3xl mx-auto px-6 space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-center" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>
                {form.name ? `${form.name} 的命盤預覽` : "命盤預覽"}
              </h2>

              <div className="p-6" style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.25)" }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-sans tracking-widest uppercase" style={{ color: "#E1AE14" }}>年柱（基礎查看）</p>
                  <span className="text-xs font-sans px-2 py-0.5" style={{ background: "rgba(76,175,80,0.1)", color: "#66BB6A", border: "1px solid rgba(76,175,80,0.2)" }}>✓ 已查看</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold tracking-wider" style={{ color: "#E1AE14" }}>{result.year.stem}</p>
                    <p className="text-xs font-sans mt-1" style={{ color: "rgba(245,240,232,0.42)" }}>天干</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold tracking-wider" style={{ color: "#E1AE14" }}>{result.year.branch}</p>
                    <p className="text-xs font-sans mt-1" style={{ color: "rgba(245,240,232,0.42)" }}>地支</p>
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 text-center text-sm font-sans"
                      style={{ background: ELEMENT_COLORS[result.year.element].bg, color: ELEMENT_COLORS[result.year.element].color, border: `1px solid ${ELEMENT_COLORS[result.year.element].border}` }}>
                      {result.year.element}命
                    </div>
                    <p className="text-xs font-sans text-center" style={{ color: "rgba(245,240,232,0.42)" }}>{result.year.animal}年生</p>
                    <p className="text-xs font-sans text-center" style={{ color: "rgba(245,240,232,0.42)" }}>
                      日主：<span className="font-semibold" style={{ color: "#E1AE14" }}>{result.dayMaster}</span>（{result.dayMasterElement}）
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 text-xs font-sans leading-relaxed"
                  style={{ background: "rgba(225,174,20,0.04)", border: "1px solid rgba(225,174,20,0.1)" }}>
                  <span style={{ color: "#E1AE14" }}>◆ 基礎解讀：</span>
                  <span style={{ color: "rgba(245,240,232,0.6)" }}>
                    您的年柱為 <strong style={{ color: "#F5F0E8" }}>{result.year.stem}{result.year.branch}</strong>，
                    日主為 <strong style={{ color: "#F5F0E8" }}>{result.dayMaster}</strong>（{result.dayMasterElement}命），
                    先天具備{result.dayMasterElement}性格特質。想了解完整命格分析，歡迎預約諮詢。
                  </span>
                </div>
              </div>

              {/* Locked pillars */}
              <div className="relative overflow-hidden" style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.1)" }}>
                <div className="blur-locked p-6 space-y-4" aria-hidden="true">
                  <div className="grid grid-cols-4 gap-3">
                    {["年柱","月柱","日柱","時柱"].map((p) => (
                      <div key={p} className="text-center p-4" style={{ background: "rgba(245,240,232,0.02)" }}>
                        <p className="text-xs mb-3 font-sans" style={{ color: "rgba(245,240,232,0.15)" }}>{p}</p>
                        <p className="font-serif text-3xl" style={{ color: "rgba(245,240,232,0.12)" }}>甲</p>
                        <p className="font-serif text-3xl mt-1" style={{ color: "rgba(245,240,232,0.12)" }}>子</p>
                        <p className="text-xs mt-2 font-sans" style={{ color: "rgba(245,240,232,0.08)" }}>木</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  style={{ background: "rgba(18,18,18,0.92)" }}>
                  <div className="max-w-sm space-y-4">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center"
                      style={{ background: "rgba(225,174,20,0.08)", border: "1px solid rgba(225,174,20,0.2)" }}>
                      <span className="font-serif text-lg" style={{ color: "#E1AE14" }}>完</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>取得完整命盤分析</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans" style={{ color: "rgba(245,240,232,0.45)" }}>
                      {["月柱解析","日柱解析","時柱解析","五行分布","命格描述","流年趨勢"].map(item => (
                        <p key={item} className="flex items-center gap-1.5">
                          <span style={{ color: "#E1AE14" }}>◆</span>{item}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line text-sm">
                        加入 LINE 獲取完整分析
                      </a>
                      <a href="/booking" className="btn-outline text-sm">
                        立即預約諮詢
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs font-sans" style={{ color: "rgba(245,240,232,0.25)" }}>
                ※ 本工具提供基礎命盤預覽，月柱計算採簡化公式（未考量精確節氣邊界），完整分析請預約專業命理師。
              </p>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
