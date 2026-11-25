"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

const LINE_URL = "https://lin.ee/QRKXhFn";

const faqGroups = [
  {
    group: "服務相關",
    char: "服",
    items: [
      { q: "多久可以收到？", a: "交付日期依每個個案的內容，在付款前約定。" },
      { q: "適合哪一項服務？", a: "想看整體結構與指定年度的重點，可以選八字、紫微斗數或雙系統整合。只想問一個具體問題，可以選塔羅占卜。不確定的話，先在 LINE 說明想了解的方向。" },
      { q: "一次可以看多少內容？", a: "八字與紫微斗數限單人、指定一年度，主題最多 2 個（感情、事業、財運、人際、家庭、人生方向）。雙系統整合為單人、指定一年度的完整綜合分析。塔羅以題計費，一個問題一次占卜。" },
      { q: "可以取名或選號嗎？", a: "可以。姓名解析加購命名服務、手機號碼解析加購選號服務，各另加 NT$300，細節由 Axel 本人確認。公司、品牌與店名命名不提供。" },
      { q: "有提供西洋占星或合盤嗎？", a: "目前沒有，生命靈數也已停止提供。正式服務為八字、紫微斗數、雙系統整合、姓名解析、手機號碼解析、塔羅，以及五行能量晶石設計。" },
    ],
  },
  {
    group: "出生資料",
    char: "資",
    items: [
      { q: "一定要提供出生時間嗎？", a: "所有服務都需要出生時間。建議先向家人確認；真的無法提供，請在 LINE 說明，由 Axel 本人確認可以怎麼處理，不會自行假設時辰。" },
      { q: "農曆生日可以嗎？", a: "可以，請註明是國曆還是農曆，並提供完整年份，避免換算錯誤。" },
      { q: "需要提供出生地嗎？", a: "八字、紫微斗數與雙系統整合需要出生地。出生時間接近時辰交界時，會說明採用的校正方式。" },
    ],
  },
  {
    group: "交付方式",
    char: "交",
    items: [
      { q: "成果是什麼形式？", a: "以 PDF 或文字交付。塔羅提供牌面圖與文字說明，不另製 PDF。" },
      { q: "有語音、視訊或現場諮詢嗎？", a: "沒有。服務以文字與 PDF 進行，聯絡都透過官方 LINE。" },
      { q: "收到後還可以再問嗎？", a: "交付後 7 日內，可針對原內容提出一次文字釐清。新題目、新對象或重新占卜另計。資料或計算錯誤的更正不占釐清次數。" },
    ],
  },
  {
    group: "付款與預約",
    char: "約",
    items: [
      { q: "如何付款？", a: "銀行轉帳、街口支付或 LINE Pay Money。確認服務內容與交付日期後，由 Axel 提供付款資訊。" },
      { q: "可以改期或退費嗎？", a: "改期與退費申請，逐案由 Axel 本人確認。" },
      { q: "LINE 上回覆我的是誰？", a: "官方 LINE 先由 AI 小幫手接待並整理資料，訊息會標示為 AI 自動回覆。命理判讀與最後交付由 Axel 本人負責。" },
      { q: "可以替別人預約嗎？", a: "可以，但需要當事人知情並同意，並提供當事人的資料與想釐清的主題。" },
    ],
  },
];

export default function FaqClient() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #FAF6EF 0%, #F0E8D8 50%, #FAF6EF 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(166,124,61,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>FAQ</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#2B2622" }}>常見問題</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>
              讓你在預約前就對服務有清楚的了解
            </p>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="py-20 section-light">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            {faqGroups.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0"
                    style={{ background: "rgba(166,124,61,0.08)", border: "1px solid rgba(166,124,61,0.22)" }}>
                    <span className="font-serif text-xs font-semibold" style={{ color: "#A67C3D" }}>{group.char}</span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>{group.group}</h2>
                  <div className="flex-1 h-px" style={{ background: "rgba(166,124,61,0.15)" }} />
                </div>

                <div className="space-y-3">
                  {group.items.map((item, i) => {
                    const key = `${group.group}-${i}`;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="overflow-hidden"
                        style={{
                          background: isOpen ? "#FFFFFF" : "#FFFFFF",
                          border: isOpen ? "1px solid rgba(166,124,61,0.3)" : "1px solid rgba(166,124,61,0.1)",
                          transition: "all 0.2s ease",
                        }}>
                        <button type="button" onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold font-sans w-6 h-6 flex items-center justify-center shrink-0"
                              style={{ background: "rgba(166,124,61,0.1)", color: "#A67C3D", border: "1px solid rgba(166,124,61,0.2)" }}>Q</span>
                            <span className="font-sans text-sm font-semibold" style={{ color: "#2B2622" }}>{item.q}</span>
                          </div>
                          <span className="text-lg shrink-0 transition-transform duration-200 ml-3"
                            style={{ color: "#A67C3D", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                        </button>
                        <div className="px-6 flex gap-3 overflow-hidden"
                          style={{
                            borderTop: isOpen ? "1px solid rgba(166,124,61,0.1)" : "none",
                            maxHeight: isOpen ? "400px" : "0px",
                            paddingTop: isOpen ? "12px" : "0px",
                            paddingBottom: isOpen ? "20px" : "0px",
                            transition: "max-height 0.25s ease, padding 0.25s ease",
                          }}>
                          <span className="text-xs font-bold font-sans w-6 h-6 flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(43,38,34,0.08)", color: "#6E655A" }}>A</span>
                          <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>{item.a}</p>
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
            <h2 className="font-serif text-2xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>還有其他問題？</h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>
              直接在官方 LINE 詢問，由 Axel 本人回覆。
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line px-8 py-3">
                LINE 直接詢問
              </a>
              <Link href="/services" className="btn-outline px-8 py-3">
                看服務項目與價格
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
