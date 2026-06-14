"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { calculateBazi, HOUR_NAMES, HOUR_RANGES } from "@/lib/bazi";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const ELEMENT_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  木: { bg: "rgba(76,175,80,0.08)", color: "#2E7D32", border: "rgba(76,175,80,0.25)" },
  火: { bg: "rgba(229,57,53,0.08)", color: "#C62828", border: "rgba(229,57,53,0.25)" },
  土: { bg: "rgba(255,152,0,0.08)", color: "#E65100", border: "rgba(255,152,0,0.25)" },
  金: { bg: "rgba(96,125,139,0.08)", color: "#37474F", border: "rgba(96,125,139,0.25)" },
  水: { bg: "rgba(21,101,192,0.08)", color: "#1565C0", border: "rgba(21,101,192,0.25)" },
};

const outputs = [
  { icon: "☯️", label: "年柱解讀", desc: "了解你的先天命格與五行屬性" },
  { icon: "🌱", label: "日主性格", desc: "揭示你天生的個性特質與優勢" },
  { icon: "✦",  label: "基礎運勢", desc: "命盤的整體走向與人生主題" },
  { icon: "🔓", label: "完整分析預覽", desc: "月柱、日柱、五行分布（解鎖後可見）" },
  { icon: "💬", label: "後續諮詢建議", desc: "依你的命盤推薦最適合的服務" },
];

export default function ExperiencePage() {
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
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,144,42,0.1) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>FREE EXPERIENCE</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#1A2D45" }}>免費命盤體驗</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-base leading-relaxed" style={{ color: "#5A6E82" }}>
              輸入出生資料，即刻查看你的八字命盤基礎解讀<br />
              <span className="text-sm" style={{ color: "#9AAAB6" }}>完全免費・無需付費・不需要帳號</span>
            </p>
          </div>
        </section>

        {/* What you'll get */}
        <section className="py-14 section-alt">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl font-semibold text-center mb-8" style={{ color: "#1A2D45" }}>免費體驗包含什麼？</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {outputs.map((item) => (
                <div key={item.label} className="rounded-xl p-5 text-center space-y-2"
                  style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.12)", boxShadow: "0 2px 8px rgba(26,45,69,0.04)" }}>
                  <span className="text-2xl block">{item.icon}</span>
                  <p className="font-sans text-xs font-semibold" style={{ color: "#B8902A" }}>{item.label}</p>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#7A8E9E" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 section-light">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-8 space-y-2">
              <h2 className="font-serif text-2xl font-semibold" style={{ color: "#1A2D45" }}>輸入你的出生資料</h2>
              <p className="font-sans text-sm" style={{ color: "#7A8E9E" }}>時間越精準，分析越準確；不知道出生時間也沒關係</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl"
              style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.15)", boxShadow: "0 4px 24px rgba(26,45,69,0.07)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-sans tracking-wider" style={{ color: "#7A8E9E" }}>姓名</span>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="您的姓名（選填）"
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans rounded-lg focus:outline-none transition-colors"
                    style={{ border: "1px solid rgba(26,45,69,0.12)", background: "#FBF8F4", color: "#1A2D45" }} />
                </label>
                <label className="block">
                  <span className="text-xs font-sans tracking-wider" style={{ color: "#7A8E9E" }}>出生日期 *</span>
                  <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans rounded-lg focus:outline-none transition-colors"
                    style={{ border: "1px solid rgba(26,45,69,0.12)", background: "#FBF8F4", color: "#1A2D45" }} />
                </label>
                <label className="block">
                  <span className="text-xs font-sans tracking-wider" style={{ color: "#7A8E9E" }}>出生時辰</span>
                  <select value={form.hour} onChange={e => setForm({...form, hour: e.target.value})}
                    className="mt-1.5 w-full px-4 py-3 text-sm font-sans rounded-lg focus:outline-none transition-colors"
                    style={{ border: "1px solid rgba(26,45,69,0.12)", background: "#FBF8F4", color: "#1A2D45" }}>
                    <option value="12">不確定</option>
                    {HOUR_NAMES.map((n, i) => (
                      <option key={i} value={i === 0 ? 23 : (i * 2 - 1)}>
                        {n}時（{HOUR_RANGES[i]}）
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  <span className="text-xs font-sans tracking-wider block mb-1.5" style={{ color: "#7A8E9E" }}>性別</span>
                  <div className="flex gap-3">
                    {["female","male"].map(g => (
                      <label key={g} className="flex-1 flex items-center justify-center py-2.5 rounded-lg border cursor-pointer transition-all text-sm font-sans"
                        style={{
                          borderColor: form.gender === g ? "#B8902A" : "rgba(26,45,69,0.12)",
                          background: form.gender === g ? "rgba(184,144,42,0.08)" : "#FBF8F4",
                          color: form.gender === g ? "#B8902A" : "#7A8E9E"
                        }}>
                        <input type="radio" value={g} checked={form.gender === g} onChange={e => setForm({...form, gender: e.target.value})} className="sr-only" />
                        {g === "female" ? "♀ 女性" : "♂ 男性"}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <label className="block">
                <span className="text-xs font-sans tracking-wider" style={{ color: "#7A8E9E" }}>聯絡方式（選填，方便後續諮詢）</span>
                <input type="text" value={form.contact} onChange={e => setForm({...form, contact: e.target.value})}
                  placeholder="LINE ID 或手機號碼"
                  className="mt-1.5 w-full px-4 py-3 text-sm font-sans rounded-lg focus:outline-none transition-colors"
                  style={{ border: "1px solid rgba(26,45,69,0.12)", background: "#FBF8F4", color: "#1A2D45" }} />
              </label>
              <button type="submit" className="btn-gold w-full justify-center text-base py-4">
                立即查看我的命盤 →
              </button>
            </form>
          </div>
        </section>

        {/* Results */}
        {submitted && result && (
          <section className="py-16 section-alt">
            <div className="max-w-3xl mx-auto px-6 space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-center" style={{ color: "#1A2D45" }}>
                {form.name ? `${form.name} 的命盤預覽` : "你的命盤預覽"}
              </h2>

              {/* Year pillar – FREE */}
              <div className="p-6 rounded-2xl"
                style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.25)", boxShadow: "0 4px 20px rgba(184,144,42,0.08)" }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-sans tracking-widest uppercase" style={{ color: "#B8902A" }}>年柱 · 日主（免費解鎖）</p>
                  <span className="text-xs font-sans px-2 py-0.5 rounded-full" style={{ background: "rgba(46,125,50,0.1)", color: "#2E7D32" }}>✓ 已解鎖</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold tracking-wider" style={{ color: "#B8902A" }}>{result.year.stem}</p>
                    <p className="text-xs font-sans mt-1" style={{ color: "#7A8E9E" }}>天干</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold tracking-wider" style={{ color: "#B8902A" }}>{result.year.branch}</p>
                    <p className="text-xs font-sans mt-1" style={{ color: "#7A8E9E" }}>地支</p>
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 text-center text-sm font-sans rounded-lg"
                      style={{
                        background: ELEMENT_COLORS[result.year.element].bg,
                        color: ELEMENT_COLORS[result.year.element].color,
                        border: `1px solid ${ELEMENT_COLORS[result.year.element].border}`
                      }}>
                      {result.year.element}命
                    </div>
                    <p className="text-xs font-sans text-center" style={{ color: "#7A8E9E" }}>{result.year.animal}年生</p>
                    <p className="text-xs font-sans text-center" style={{ color: "#7A8E9E" }}>
                      日主：<span className="font-semibold" style={{ color: "#B8902A" }}>{result.dayMaster}</span>（{result.dayMasterElement}）
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl text-sm font-sans leading-relaxed space-y-2"
                  style={{ background: "rgba(184,144,42,0.04)", border: "1px solid rgba(184,144,42,0.1)" }}>
                  <p><span style={{ color: "#B8902A" }}>◆ 年柱解讀：</span>
                    <span style={{ color: "#4A5E72" }}>你的年柱為 <strong style={{ color: "#1A2D45" }}>{result.year.stem}{result.year.branch}</strong>，代表你的先天性格底色與童年環境影響。</span>
                  </p>
                  <p><span style={{ color: "#B8902A" }}>◆ 日主特質：</span>
                    <span style={{ color: "#4A5E72" }}>日主 <strong style={{ color: "#1A2D45" }}>{result.dayMaster}</strong>（{result.dayMasterElement}性），先天具備{result.dayMasterElement}的核心性格，包含其獨特的思維模式與行事風格。</span>
                  </p>
                </div>
              </div>

              {/* Locked pillars */}
              <div className="relative overflow-hidden rounded-2xl"
                style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)" }}>
                <div className="p-6 space-y-4" style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }} aria-hidden="true">
                  <div className="grid grid-cols-4 gap-3">
                    {["年柱","月柱","日柱","時柱"].map((p) => (
                      <div key={p} className="text-center p-4 rounded-lg" style={{ background: "rgba(26,45,69,0.03)" }}>
                        <p className="text-xs mb-3 font-sans" style={{ color: "#c0c8d0" }}>{p}</p>
                        <p className="font-serif text-3xl" style={{ color: "#c0c8d0" }}>甲</p>
                        <p className="font-serif text-3xl mt-1" style={{ color: "#c0c8d0" }}>子</p>
                        <p className="text-xs mt-2 font-sans" style={{ color: "#d0d8e0" }}>木</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center rounded-2xl"
                  style={{ background: "rgba(251,248,244,0.92)" }}>
                  <div className="max-w-sm space-y-4">
                    <span className="text-3xl">🔒</span>
                    <h3 className="font-serif text-xl font-semibold" style={{ color: "#1A2D45" }}>解鎖你的完整命盤</h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>
                      加入 LINE，由老師為你進行完整的八字分析，包含月柱、日柱、五行分布與流年運勢。
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans" style={{ color: "#7A8E9E" }}>
                      {["月柱解析","日柱解析","時柱解析","五行分布","命格描述","流年趨勢"].map(item => (
                        <p key={item} className="flex items-center gap-1.5">
                          <span style={{ color: "#B8902A" }}>◆</span>{item}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line">
                        加入 LINE 解鎖完整分析
                      </a>
                      <Link href="/booking" className="btn-outline">
                        預約正式諮詢
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs font-sans" style={{ color: "#B0B8C0" }}>
                ※ 本工具提供基礎命盤預覽，月柱計算採簡化公式（未考量精確節氣邊界），完整分析請預約專業命理師。
              </p>
            </div>
          </section>
        )}

        {/* How it works — only show before submission */}
        {!submitted && (
          <section className="py-16" style={{ background: "#1A2D45" }}>
            <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
              <h2 className="font-serif text-2xl font-semibold text-white">體驗後還可以做什麼？</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { n: "01", t: "查看基礎命盤", d: "看到年柱、日主與基礎五行特質", icon: "📋" },
                  { n: "02", t: "加入 LINE 諮詢", d: "由老師解說完整命盤，解答你的疑問", icon: "💬" },
                  { n: "03", t: "預約正式諮詢", d: "選擇適合的服務方案，深入探索人生方向", icon: "📅" },
                ].map((step) => (
                  <div key={step.n} className="rounded-2xl p-6 space-y-3"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto font-serif text-sm font-bold"
                      style={{ background: "rgba(184,144,42,0.15)", border: "1px solid rgba(184,144,42,0.3)", color: "#D4A843" }}>
                      {step.n}
                    </div>
                    <p className="text-lg">{step.icon}</p>
                    <p className="font-serif text-base font-semibold text-white">{step.t}</p>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.d}</p>
                  </div>
                ))}
              </div>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line inline-flex">
                直接加入 LINE 詢問
              </a>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
