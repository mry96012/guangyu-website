"use client";
import { useEffect, useRef } from "react";

const googleReviews = [
  {
    name: "陳 O 芸",
    initial: "陳",
    service: "事業諮詢",
    tag: "工作方向",
    date: "2024/04",
    title: "方向清楚，心更踏實",
    content: "老師的分析很有條理，不只是看到問題，更幫助我理解背後的原因，讓我知道接下來可以往哪裡走，謝謝老師！",
  },
  {
    name: "林 O 瑄",
    initial: "林",
    service: "感情諮詢",
    tag: "感情關係",
    date: "2024/03",
    title: "感情困擾得到很大幫助",
    content: "一直困惑為什麼關係總是重複類似的狀況，透過老師的分析，讓我看見了自己的互動模式，也學會如何調整自己，現在的關係穩定多了！",
  },
  {
    name: "王 O 傑",
    initial: "王",
    service: "人生方向諮詢",
    tag: "人生方向",
    date: "2024/04",
    title: "專業又溫暖的陪伴",
    content: "報告內容非常詳細，文字清楚易懂，而且老師很有耐心解答問題，讓我在迷惘時有了方向與信心，真的很推薦！",
  },
];

const lineTestimonials = [
  "老師的分析很準確，尤其是對我性格與優勢的描述，完全說到心坎裡！看完報告後更了解自己了，謝謝老師。",
  "困擾很久的事，老師分析後讓我豁然開朗，不只是看見問題，還給我具體的建議，真的受益良多。",
  "整份報告很有系統，內容也很實用，會想再回來做流年分析，持續追蹤自己的人生方向。",
];

const GOOGLE_ICON = (size = 15) => (
  <svg viewBox="0 0 24 24" style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0 }} fill="none" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.delay ?? "0";
            setTimeout(() => target.classList.add("visible"), Number(delay));
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "-40px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 section-light">
      {/* Top divider */}
      <div className="section-divider mb-16 max-w-6xl mx-auto px-6">
        <span>☱ ☳ ☵ ☷</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Title — centered */}
        <div className="reveal section-title" data-delay="0">
          <p className="font-sans text-xs mb-3" style={{ color: "#E1AE14", letterSpacing: "0.22em" }}>REVIEWS</p>
          <h2 className="font-serif text-3xl font-semibold" style={{ color: "#F5F0E8", letterSpacing: "0.05em" }}>客戶評價</h2>
          <div className="gold-diamond mt-3"><span /></div>
          <p className="mt-2 text-sm font-sans" style={{ color: "rgba(245,240,232,0.5)" }}>真實回饋，來自客戶的信任</p>
        </div>

        {/* 4-col: rating panel (1) + review cards (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12">

          {/* Rating panel */}
          <div className="reveal lg:col-span-1" data-delay="100">
            <div
              className="p-7 flex flex-col items-center text-center gap-4 h-full"
              style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.15)" }}
            >
              {GOOGLE_ICON(30)}
              <div>
                <p className="font-display font-bold" style={{ fontSize: "3rem", color: "#E1AE14", lineHeight: 1 }}>5.0</p>
                <p className="text-sm mt-1" style={{ color: "rgba(225,174,20,0.6)", letterSpacing: "3px" }}>★★★★★</p>
              </div>
              <p className="text-xs font-sans" style={{ color: "rgba(245,240,232,0.35)" }}>共 128 則評論</p>
              <div className="w-full space-y-1.5">
                {[128, 0, 0, 0, 0].map((count, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs font-sans w-8 text-right" style={{ color: "rgba(245,240,232,0.3)" }}>{5 - i} 星</span>
                    <div className="flex-1 h-1" style={{ background: "rgba(245,240,232,0.06)", borderRadius: "1px" }}>
                      <div className="h-full" style={{ width: i === 0 ? "100%" : "0%", background: "#E1AE14", borderRadius: "1px" }} />
                    </div>
                    <span className="text-xs font-sans w-5" style={{ color: "rgba(245,240,232,0.3)" }}>{count}</span>
                  </div>
                ))}
              </div>
              <a href="https://google.com/search?q=光宇方向命理研究所" target="_blank" rel="noopener noreferrer"
                className="text-xs font-sans" style={{ color: "#4285F4" }}>查看 Google 評價</a>
            </div>
          </div>

          {/* Review cards — stagger */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {googleReviews.map((r, i) => (
              <div key={r.name} className="reveal card-lift" data-delay={String(180 + i * 90)}>
                <div
                  className="p-5 flex flex-col gap-3 h-full"
                  style={{ background: "#1A1A1A", border: "1px solid rgba(225,174,20,0.1)" }}
                >
                  <div className="flex items-center justify-between">
                    <span style={{ color: "rgba(225,174,20,0.6)", fontSize: "0.72rem", letterSpacing: "2px" }}>★★★★★</span>
                    {GOOGLE_ICON(14)}
                  </div>
                  <span className="self-start text-xs font-sans px-2 py-0.5"
                    style={{ background: "rgba(225,174,20,0.08)", color: "#E1AE14", border: "1px solid rgba(225,174,20,0.15)" }}>
                    {r.tag}
                  </span>
                  <p className="font-serif text-sm font-semibold" style={{ color: "#F5F0E8" }}>{r.title}</p>
                  <p className="text-sm font-sans leading-relaxed flex-1" style={{ color: "rgba(245,240,232,0.55)" }}>{r.content}</p>
                  <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center font-semibold"
                      style={{ background: "rgba(225,174,20,0.12)", color: "#E1AE14", fontSize: "0.65rem" }}>
                      {r.initial}
                    </div>
                    <div>
                      <p className="text-xs font-semibold font-sans" style={{ color: "#F5F0E8" }}>{r.name}</p>
                      <p className="text-xs font-sans" style={{ color: "rgba(245,240,232,0.32)" }}>{r.service} · {r.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINE Testimonials */}
        <div className="mt-12">
          <div className="gold-divider mb-6">
            <span className="text-xs font-sans shrink-0" style={{ color: "rgba(245,240,232,0.35)", padding: "0 14px", letterSpacing: "0.08em" }}>
              LINE 客戶回饋（節錄）
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lineTestimonials.map((text, i) => (
              <div key={i} className="reveal card-lift" data-delay={String(400 + i * 90)}>
                <div
                  className="p-6 h-full"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(225,174,20,0.07)",
                    borderLeft: "2px solid rgba(225,174,20,0.3)",
                  }}
                >
                  <p className="text-sm font-sans leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
