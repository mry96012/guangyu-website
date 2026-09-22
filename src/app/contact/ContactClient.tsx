"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `【諮詢留言】\n姓名：${form.name}\n聯絡：${form.contact}\n主題：${form.subject}\n內容：${form.message}`
    );
    window.open(`https://line.me/R/ti/p/%40enlite731?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-14 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(225,174,20,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#E1AE14", letterSpacing: "0.22em" }}>GET IN TOUCH</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#F5F0E8" }}>聯絡我們</h1>
            <div className="gold-divider max-w-xs mx-auto">
              <span className="text-xs font-sans tracking-widest" style={{ color: "rgba(225,174,20,0.5)", padding: "0 14px" }}>任何問題都歡迎詢問</span>
            </div>
          </div>
        </section>

        <section className="py-16 section-light">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl font-semibold" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>與我們聯繫</h2>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
                  無論是服務諮詢、預約問題或任何想了解的事，
                  都歡迎透過 LINE 或填寫聯絡表單與我們聯繫。
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "LINE", label: "LINE 官方帳號", value: "@enlite731", href: LINE_URL },
                  { icon: "◆", label: "服務時間", value: "週一至週日 10:00–20:00" },
                  { icon: "◆", label: "回覆時間", value: "通常在 24 小時內回覆" },
                  { icon: "◆", label: "隱私保護", value: "所有個人資料嚴格保密" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-4"
                    style={{ background: "rgba(225,174,20,0.03)", border: "1px solid rgba(225,174,20,0.1)" }}>
                    <span className="text-sm mt-0.5 shrink-0 font-sans" style={{ color: "#E1AE14" }}>{c.icon}</span>
                    <div>
                      <p className="text-xs font-sans mb-0.5" style={{ color: "rgba(245,240,232,0.38)" }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer"
                          className="link-hover text-sm font-sans transition-colors" style={{ color: "#F5F0E8" }}>
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-sans" style={{ color: "#F5F0E8" }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center">
                直接加入 LINE @enlite731
              </a>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="p-10 text-center space-y-4"
                  style={{ background: "rgba(225,174,20,0.04)", border: "1px solid rgba(225,174,20,0.2)" }}>
                  <span className="font-display text-4xl" style={{ color: "#E1AE14" }}>✦</span>
                  <h2 className="font-serif text-xl font-semibold" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>訊息已送出！</h2>
                  <p className="font-sans text-sm" style={{ color: "rgba(245,240,232,0.52)" }}>
                    LINE 已開啟，請直接傳送訊息，老師將盡快回覆您。
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline text-xs inline-flex">
                    再次留言
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-serif text-xl font-semibold mb-6" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>填寫留言</h2>
                  {[
                    { key: "name",    label: "姓名 *",              type: "text", req: true,  ph: "您的姓名" },
                    { key: "contact", label: "LINE ID 或聯絡方式 *", type: "text", req: true,  ph: "方便回覆" },
                    { key: "subject", label: "詢問主題",             type: "text", req: false, ph: "例如：想了解八字分析" },
                  ].map((f) => (
                    <label key={f.key} className="block">
                      <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>{f.label}</span>
                      <input type={f.type} required={f.req}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.ph}
                        className="mt-1.5 w-full px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
                        style={{ border: "1px solid rgba(225,174,20,0.2)", background: "#121212", color: "#F5F0E8" }} />
                    </label>
                  ))}
                  <label className="block">
                    <span className="text-xs font-sans tracking-wider" style={{ color: "rgba(245,240,232,0.45)" }}>留言內容 *</span>
                    <textarea required value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5} placeholder="請描述您想諮詢的內容..."
                      className="mt-1.5 w-full px-4 py-3 text-sm font-sans focus:outline-none transition-colors resize-none"
                      style={{ border: "1px solid rgba(225,174,20,0.2)", background: "#121212", color: "#F5F0E8" }} />
                  </label>
                  <button type="submit" className="btn-gold w-full justify-center">
                    送出留言 → 跳轉 LINE
                  </button>
                  <p className="text-xs font-sans text-center" style={{ color: "rgba(245,240,232,0.28)" }}>
                    點擊送出後將開啟 LINE，把預填訊息傳送給老師即可。
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
