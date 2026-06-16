"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const faqGroups = [
  {
    group: "服務相關",
    icon: "📋",
    items: [
      { q: "報告多久收到？", a: "依服務內容不同，約 1–4 個工作天。急件服務請事先告知，我們會盡力配合。" },
      { q: "需要準備哪些資料？", a: "提供出生年月日時間（越準確越好）與出生地即可。若想要更精準的分析，也可以提供想釐清的主題或問題。" },
      { q: "可以退款嗎？", a: "依服務內容不同，原則上不提供退款。如有特殊情況請在諮詢前與我們討論，確認後再付款。" },
      { q: "適合哪種服務？", a: "如果是第一次諮詢，建議從「基礎命理解讀」或「塔羅占卜」開始了解。如果有明確想釐清的問題，可以選擇「主題式分析」。不確定的話歡迎直接 LINE 詢問，老師會為你推薦最適合的方案。" },
    ],
  },
  {
    group: "出生資料",
    icon: "📅",
    items: [
      { q: "不知道出生時間怎麼辦？", a: "可填寫略時，或選擇「不確定」。沒有出生時間仍可進行大部分的命盤分析，只是無法計算時柱，準確度會稍微降低。建議可以詢問家人或查看出生證明。" },
      { q: "出生地點重要嗎？", a: "在西洋占星分析中，出生地點（城市）是必要資訊，因為它影響上升星座的計算。在八字和紫微分析中，出生地點的影響較小，但若能提供仍有助於更精準的分析。" },
      { q: "農曆生日可以嗎？", a: "可以，請告知是農曆還是國曆，我們會為你換算。建議同時提供年份（如：民國幾年或西元幾年），避免換算錯誤。" },
    ],
  },
  {
    group: "諮詢方式",
    icon: "💬",
    items: [
      { q: "線上諮詢與現場諮詢有差別嗎？", a: "內容與品質完全相同，線上以 Google Meet 進行，方便彈性，全台客戶都可諮詢。現場諮詢需提前預約地點，通常在台北市區，適合偏好面對面交流的客戶。" },
      { q: "諮詢是用說的還是書面報告？", a: "兩者都有。大多數服務包含書面報告（PDF 電子檔）加上文字說明。部分服務也提供視訊或語音諮詢，詳情依服務項目而定。" },
      { q: "諮詢後還可以再提問嗎？", a: "報告交付後，提供 7 天內一次簡短問題回覆服務。若需要更深入的追蹤或進一步討論，可預約延伸諮詢（另計費用）。" },
    ],
  },
  {
    group: "付款與預約",
    icon: "💳",
    items: [
      { q: "如何付款？", a: "目前接受銀行轉帳、LINE Pay 等方式。預約確認後老師會提供付款帳號，完成付款後即可開始服務流程。" },
      { q: "如何修改或取消預約？", a: "若需更改預約時間或取消，請提前 24 小時通知。緊急情況可彈性處理，但請務必事先告知，以利安排。" },
      { q: "可以代替別人預約嗎？", a: "可以，但需要提供當事人的出生資料與想釐清的問題。本人同意接受分析是基本前提，請確認當事人知情且同意。" },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,144,42,0.08) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>FAQ</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#1A2D45" }}>常見問題</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>
              讓你在預約前就對服務有清楚的了解
            </p>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="py-20 section-light">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            {faqGroups.map((group) => (
              <div key={group.group}>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{group.icon}</span>
                  <h2 className="font-serif text-xl font-semibold" style={{ color: "#1A2D45" }}>{group.group}</h2>
                  <div className="flex-1 h-px" style={{ background: "rgba(184,144,42,0.2)" }} />
                </div>

                {/* Accordion items */}
                <div className="space-y-3">
                  {group.items.map((item, i) => {
                    const key = `${group.group}-${i}`;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="rounded-xl overflow-hidden"
                        style={{
                          background: "#fff",
                          border: isOpen ? "1px solid rgba(184,144,42,0.35)" : "1px solid rgba(26,45,69,0.08)",
                          boxShadow: isOpen ? "0 4px 16px rgba(184,144,42,0.08)" : "0 1px 4px rgba(26,45,69,0.04)",
                          transition: "all 0.2s ease",
                        }}>
                        <button type="button" onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold font-sans w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: "rgba(184,144,42,0.12)", color: "#B8902A" }}>Q</span>
                            <span className="font-sans text-sm font-semibold" style={{ color: "#1A2D45" }}>{item.q}</span>
                          </div>
                          <span className="text-lg shrink-0 transition-transform duration-200 ml-3"
                            style={{ color: "#B8902A", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                        </button>
                        <div
                          className="px-6 flex gap-3 overflow-hidden"
                          style={{
                            borderTop: isOpen ? "1px solid rgba(184,144,42,0.1)" : "none",
                            maxHeight: isOpen ? "400px" : "0px",
                            paddingTop: isOpen ? "12px" : "0px",
                            paddingBottom: isOpen ? "20px" : "0px",
                            transition: "max-height 0.25s ease, padding 0.25s ease",
                          }}
                        >
                          <span className="text-xs font-bold font-sans w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(26,45,69,0.07)", color: "#4A5E72" }}>A</span>
                          <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E72" }}>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 section-alt">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold" style={{ color: "#1A2D45" }}>還有其他問題？</h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E72" }}>
              歡迎直接加入 LINE 詢問，老師會盡快為你解答。
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line px-8 py-3">
                LINE 直接詢問
              </a>
              <Link href="/booking" className="btn-outline px-8 py-3">
                立即預約諮詢
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
