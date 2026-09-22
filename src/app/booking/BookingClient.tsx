"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const serviceOptions = [
  "八字分析（NT$600起）",
  "紫微斗數（NT$1,600起）",
  "雙系統整合（NT$2,000起）",
  "塔羅占卜（NT$350起）",
  "生命靈數（NT$800起）",
  "西洋占星（NT$1,600起）",
  "基礎命理解讀套餐（NT$2,800）",
  "流年運勢分析套餐（NT$3,800）",
  "關係合盤諮詢套餐（NT$4,800）",
  "命理+晶石能量套餐（NT$5,800）",
  "其他（請說明）",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  fontSize: "0.875rem",
  fontFamily: "var(--font-sans)",
  color: "#F5F0E8",
  background: "#121212",
  border: "1px solid rgba(225,174,20,0.15)",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function BookingClient() {
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
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(225,174,20,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#E1AE14", letterSpacing: "0.22em" }}>BOOK A SESSION</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#F5F0E8" }}>預約諮詢</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
              填寫表單，透過 LINE 快速確認預約細節
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-10 section-light" style={{ borderBottom: "1px solid rgba(225,174,20,0.08)" }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "01", t: "填寫表單", d: "說明服務與需求" },
                { n: "02", t: "LINE 聯繫", d: "確認預約與付款" },
                { n: "03", t: "收到報告", d: "透過 LINE 傳送" },
              ].map((s) => (
                <div key={s.n} className="text-center space-y-2">
                  <div className="w-10 h-10 mx-auto flex items-center justify-center font-serif text-sm font-bold"
                    style={{ background: "rgba(225,174,20,0.08)", border: "1px solid rgba(225,174,20,0.25)", color: "#E1AE14" }}>
                    {s.n}
                  </div>
                  <p className="font-serif text-sm font-semibold" style={{ color: "#F5F0E8" }}>{s.t}</p>
                  <p className="text-xs font-sans" style={{ color: "rgba(245,240,232,0.42)" }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-16 section-light">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="p-10 text-center space-y-4"
                  style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.2)" }}>
                  <span className="font-display text-4xl" style={{ color: "#E1AE14" }}>✦</span>
                  <h2 className="font-serif text-2xl font-semibold" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>表單已送出！</h2>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                    LINE 已開啟，請直接傳送訊息給老師確認預約細節。
                  </p>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line inline-flex mt-2">
                    開啟 LINE 繼續溝通
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 p-8"
                  style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.12)" }}>
                  <h2 className="font-serif text-xl font-semibold mb-6" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>填寫預約資料</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>姓名 *</span>
                      <input type="text" required value={form.name} onChange={e => update("name", e.target.value)}
                        placeholder="您的姓名" style={{ ...inputStyle, marginTop: "6px" }} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>出生日期 *</span>
                      <input type="date" required value={form.birth} onChange={e => update("birth", e.target.value)}
                        style={{ ...inputStyle, marginTop: "6px", colorScheme: "dark" }} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>出生時間（可略）</span>
                      <input type="time" value={form.birthTime} onChange={e => update("birthTime", e.target.value)}
                        style={{ ...inputStyle, marginTop: "6px", colorScheme: "dark" }} />
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
                            <input type="radio" value={g} checked={form.gender === g} onChange={e => update("gender", e.target.value)} className="sr-only" />
                            {g === "female" ? "♀ 女性" : "♂ 男性"}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <label className="block">
                    <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>希望預約的服務 *</span>
                    <select required value={form.service} onChange={e => update("service", e.target.value)}
                      style={{ ...inputStyle, marginTop: "6px" }}>
                      <option value="">請選擇服務項目</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>想釐清的主題</span>
                    <input type="text" value={form.theme} onChange={e => update("theme", e.target.value)}
                      placeholder="例如：換工作時機、感情狀況、財運方向..."
                      style={{ ...inputStyle, marginTop: "6px" }} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>LINE ID 或聯絡方式 *</span>
                    <input type="text" required value={form.contact} onChange={e => update("contact", e.target.value)}
                      placeholder="您的 LINE ID 或手機號碼"
                      style={{ ...inputStyle, marginTop: "6px" }} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>其他備註</span>
                    <textarea value={form.message} onChange={e => update("message", e.target.value)}
                      rows={3} placeholder="任何想補充說明的事項..."
                      style={{ ...inputStyle, marginTop: "6px", resize: "none" }} />
                  </label>
                  <button type="submit" className="btn-gold w-full justify-center">
                    送出預約 → 跳轉 LINE
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 space-y-4"
                style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.2)" }}>
                <h3 className="font-serif text-base font-semibold" style={{ color: "#F5F0E8" }}>直接加入 LINE</h3>
                <p className="text-sm font-sans leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
                  也可以直接加入我們的 LINE 官方帳號進行預約，老師會盡快回覆。
                </p>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line text-sm w-full justify-center">
                  加入 LINE @enlite731
                </a>
              </div>
              <div className="p-6 space-y-3"
                style={{ background: "rgba(225,174,20,0.03)", border: "1px solid rgba(225,174,20,0.1)" }}>
                <h3 className="font-serif text-sm font-semibold" style={{ color: "#F5F0E8" }}>服務說明</h3>
                {[
                  "預約確認後會提供付款方式",
                  "報告完成後透過 LINE 傳送",
                  "所有資料嚴格保密",
                  "服務時間：週一至週日 10:00–20:00",
                ].map((text) => (
                  <p key={text} className="flex items-start gap-2 text-xs font-sans" style={{ color: "rgba(245,240,232,0.5)" }}>
                    <span style={{ color: "#E1AE14", marginTop: "2px" }}>◆</span>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
