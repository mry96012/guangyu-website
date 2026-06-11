"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const serviceOptions = [
  "八字命盤分析（NT$1,200起）",
  "紫微斗數分析（NT$1,600起）",
  "雙系統整合（NT$2,000起）",
  "姓名學分析（NT$800起）",
  "塔羅占卜・單題（NT$350起）",
  "生命靈數分析（NT$800起）",
  "西洋占星分析（NT$1,600起）",
  "感情深度分析（NT$1,800起）",
  "主題式分析（NT$800起）",
  "整合型報告（NT$2,000起）",
  "其他（請說明）",
];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "", birth: "", birthTime: "", gender: "female",
    service: "", theme: "", contact: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lineMsg = encodeURIComponent(
      `【預約諮詢】\n姓名：${form.name}\n出生：${form.birth} ${form.birthTime}\n性別：${form.gender === "female" ? "女" : "男"}\n服務：${form.service}\n主題：${form.theme}\n聯絡：${form.contact}\n備註：${form.message}`
    );
    window.open(`https://line.me/R/ti/p/%40enlite731?text=${lineMsg}`, "_blank");
    setSent(true);
  };

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

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
            style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(200,166,58,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-xl mx-auto px-6 space-y-4">
            <p className="text-gold/60 text-xs tracking-[0.3em] font-sans uppercase">Book a Session</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream tracking-wide">預約諮詢</h1>
            <div className="gold-divider max-w-xs mx-auto">
              <span className="text-gold/50 text-xs tracking-widest">填寫表單・LINE 快速回覆</span>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-navy py-10 border-b border-gold/10">
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "01", t: "填寫表單", d: "說明服務與需求" },
                { n: "02", t: "LINE 聯繫", d: "確認預約與付款" },
                { n: "03", t: "收到報告", d: "透過 LINE 傳送" },
              ].map((s) => (
                <div key={s.n} className="text-center space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center font-serif text-sm font-bold"
                    style={{ background: "rgba(200,166,58,0.1)", border: "1px solid rgba(200,166,58,0.3)", color: "#C8A63A" }}>
                    {s.n}
                  </div>
                  <p className="font-serif text-sm font-semibold text-cream">{s.t}</p>
                  <p className="text-cream/40 text-xs font-sans">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + LINE */}
        <section className="section-navy py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="p-10 text-center space-y-4 border border-gold/20"
                  style={{ background: "rgba(200,166,58,0.06)" }}>
                  <span className="text-gold text-4xl">✦</span>
                  <h2 className="font-serif text-2xl text-cream">表單已送出！</h2>
                  <p className="text-cream/60 font-sans text-sm">
                    LINE 已開啟，請直接傳送訊息給老師確認預約細節。
                  </p>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex mt-2">
                    開啟 LINE 繼續溝通
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-serif text-xl text-cream mb-6">填寫預約資料</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-cream/60 text-xs font-sans tracking-wider">姓名 *</span>
                      <input type="text" required value={form.name} onChange={e => update("name", e.target.value)}
                        placeholder="您的姓名" className="mt-1.5 input-field" />
                    </label>
                    <label className="block">
                      <span className="text-cream/60 text-xs font-sans tracking-wider">出生日期 *</span>
                      <input type="date" required value={form.birth} onChange={e => update("birth", e.target.value)}
                        className="mt-1.5 input-field" style={{ colorScheme: "dark" }} />
                    </label>
                    <label className="block">
                      <span className="text-cream/60 text-xs font-sans tracking-wider">出生時間（可略）</span>
                      <input type="time" value={form.birthTime} onChange={e => update("birthTime", e.target.value)}
                        className="mt-1.5 input-field" style={{ colorScheme: "dark" }} />
                    </label>
                    <div>
                      <span className="text-cream/60 text-xs font-sans tracking-wider block mb-1.5">性別</span>
                      <div className="flex gap-3">
                        {["female","male"].map(g => (
                          <label key={g} className="flex-1 flex items-center justify-center py-2.5 border cursor-pointer transition-all text-sm font-sans"
                            style={{ borderColor: form.gender === g ? "#C8A63A" : "rgba(200,166,58,0.2)", background: form.gender === g ? "rgba(200,166,58,0.1)" : "transparent", color: form.gender === g ? "#C8A63A" : "rgba(245,241,234,0.5)" }}>
                            <input type="radio" value={g} checked={form.gender === g} onChange={e => update("gender", e.target.value)} className="sr-only" />
                            {g === "female" ? "♀ 女性" : "♂ 男性"}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <label className="block">
                    <span className="text-cream/60 text-xs font-sans tracking-wider">希望預約的服務 *</span>
                    <select required value={form.service} onChange={e => update("service", e.target.value)}
                      className="mt-1.5 w-full px-4 py-3 text-sm font-sans text-cream border focus:outline-none focus:border-gold transition-colors"
                      style={{ borderColor: "rgba(200,166,58,0.3)", background: "#0F2340" }}>
                      <option value="">請選擇服務項目</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-cream/60 text-xs font-sans tracking-wider">想釐清的主題</span>
                    <input type="text" value={form.theme} onChange={e => update("theme", e.target.value)}
                      placeholder="例如：換工作時機、感情狀況、財運方向..." className="mt-1.5 input-field" />
                  </label>
                  <label className="block">
                    <span className="text-cream/60 text-xs font-sans tracking-wider">LINE ID 或聯絡方式 *</span>
                    <input type="text" required value={form.contact} onChange={e => update("contact", e.target.value)}
                      placeholder="您的 LINE ID 或手機號碼" className="mt-1.5 input-field" />
                  </label>
                  <label className="block">
                    <span className="text-cream/60 text-xs font-sans tracking-wider">其他備註</span>
                    <textarea value={form.message} onChange={e => update("message", e.target.value)}
                      rows={3} placeholder="任何想補充說明的事項..."
                      className="mt-1.5 input-field resize-none" />
                  </label>
                  <button type="submit" className="btn-gold w-full justify-center">
                    送出預約 → 跳轉 LINE
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 border border-gold/20 space-y-4"
                style={{ background: "rgba(24,47,74,0.4)" }}>
                <h3 className="font-serif text-base text-gold">直接加入 LINE</h3>
                <p className="text-cream/60 text-sm font-sans">
                  也可以直接加入我們的 LINE 官方帳號進行預約，老師會盡快回覆。
                </p>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-gold text-xs w-full justify-center">
                  加入 LINE @enlite731
                </a>
              </div>
              <div className="p-6 border border-gold/10 space-y-3"
                style={{ background: "rgba(24,47,74,0.2)" }}>
                <h3 className="font-serif text-sm text-cream">服務說明</h3>
                {[
                  { icon: "◆", text: "預約確認後會提供付款方式" },
                  { icon: "◆", text: "報告完成後透過 LINE 傳送" },
                  { icon: "◆", text: "所有資料嚴格保密" },
                  { icon: "◆", text: "服務時間：週一至週日 10:00–20:00" },
                ].map((i) => (
                  <p key={i.text} className="flex items-start gap-2 text-cream/50 text-xs font-sans">
                    <span className="text-gold mt-0.5">{i.icon}</span>
                    {i.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.input-field { width: 100%; padding: 12px 16px; font-size: 0.875rem; font-family: var(--font-sans); color: var(--color-cream); background: rgba(24,47,74,0.4); border: 1px solid rgba(200,166,58,0.3); transition: border-color 0.2s; } .input-field:focus { outline: none; border-color: #C8A63A; } .input-field::placeholder { color: rgba(245,241,234,0.3); }`}</style>
    </>
  );
}
