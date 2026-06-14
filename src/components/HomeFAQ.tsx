"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "報告多久收到？",
    a: "依服務內容不同，約 1–4 個工作天。急件服務請事先告知，我們會盡力配合。",
  },
  {
    q: "需要準備哪些資料？",
    a: "提供出生年月日時間（越準確越好）與出生地即可。若想要更精準的分析，也可以提供想釐清的主題或問題。",
  },
  {
    q: "不知道出生時間怎麼辦？",
    a: "可填寫略時，或選擇「不確定」。沒有出生時間仍可進行大部分的命盤分析，只是無法計算時柱，準確度會稍微降低。",
  },
  {
    q: "線上諮詢與現場諮詢有差別嗎？",
    a: "內容與品質相同，線上以 Google Meet 進行，方便彈性。現場諮詢需提前預約地點，通常在台北市區。",
  },
  {
    q: "諮詢後還可以再提問嗎？",
    a: "報告交付後，提供 7 天內一次簡短問題回覆服務。若需要更深入的追蹤，可預約延伸諮詢。",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 section-light">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>常見問題 FAQ</h2>
          <div className="gold-diamond"><span /></div>
          <p>降低陌生感，讓你安心預約</p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                background: "#fff",
                border: open === i ? "1px solid rgba(184,144,42,0.35)" : "1px solid rgba(26,45,69,0.08)",
                boxShadow: open === i ? "0 4px 16px rgba(184,144,42,0.08)" : "0 1px 4px rgba(26,45,69,0.04)",
                transition: "all 0.2s ease",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold font-sans w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(184,144,42,0.12)", color: "#B8902A" }}
                  >
                    Q
                  </span>
                  <span className="font-sans text-sm font-semibold" style={{ color: "#1A2D45" }}>
                    {f.q}
                  </span>
                </div>
                <span
                  className="text-lg shrink-0 transition-transform duration-200"
                  style={{ color: "#B8902A", transform: open === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div
                  className="px-6 pb-5 flex gap-3"
                  style={{ borderTop: "1px solid rgba(184,144,42,0.1)" }}
                >
                  <span
                    className="text-xs font-bold font-sans w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-3"
                    style={{ background: "rgba(26,45,69,0.07)", color: "#4A5E72" }}
                  >
                    A
                  </span>
                  <p className="font-sans text-sm leading-relaxed pt-3" style={{ color: "#5A6E72" }}>
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More FAQ */}
        <div className="mt-10 text-center">
          <p className="text-sm font-sans mb-4" style={{ color: "#6B7E90" }}>
            還有其他問題嗎？
          </p>
          <Link href="/faq" className="btn-outline text-sm px-6 py-3">
            查看更多 FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
}
