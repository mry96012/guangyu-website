"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const cases = [
  {
    id: "08-1",
    tag: "事業轉換期",
    tagline: "找到熱情所在，勇敢踏出下一步",
    quote: "一直猶豫是否該離職創業，透過分析才發現自己的優勢與時機，更有信心做出決定！",
    problem: "不知道是否該離職創業，擔心時機不對或能力不足。",
    tools: "八字分析 + 紫微斗數",
    focus: "事業運勢、天賦特質、流年時機、適合發展方向",
    result: "了解自己的優勢與最佳時機，順利轉換跑道創業成功。",
    feedback: "「報告內容非常詳細，讓我看見自己的價值與方向，感謝老師的專業與耐心！」",
  },
  {
    id: "08-2",
    tag: "感情反覆內耗",
    tagline: "看見關係模式，學會愛與被愛",
    quote: "總是在感情裡受傷，透過分析看見彼此互動模式，學會先愛自己，關係也慢慢改善。",
    problem: "總是遇到類似感情模式，關係反覆受傷、難以穩定。",
    tools: "塔羅占卜 + 生命靈數",
    focus: "感情互動模式、內在需求、吸引力法則、成長課題",
    result: "看見自己的相處盲點，調整溝通方式，關係更穩定和諧。",
    feedback: "「老師的分析很準確，讓我更理解自己，也更有力量去經營一段健康的關係！」",
  },
];

const detailLabels = ["困境", "工具", "重點", "結果"];

export default function CaseStudies() {
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
      { threshold: 0.1, rootMargin: "-40px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 section-alt">
      {/* Top divider */}
      <div className="section-divider mb-16 max-w-6xl mx-auto px-6">
        <span>☵ ☶ ☷ ☰</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Title — right-aligned, asymmetric from BrandValues */}
        <div className="reveal mb-14 text-right" data-delay="0">
          <p className="font-sans text-xs mb-3" style={{ color: "#E1AE14", letterSpacing: "0.22em" }}>CASE STUDIES</p>
          <h2 className="font-serif text-3xl font-semibold" style={{ color: "#F5F0E8", letterSpacing: "0.05em" }}>
            真實案例分享
          </h2>
          <div className="mt-3 h-px w-16 ml-auto" style={{ background: "linear-gradient(to left, #E1AE14, transparent)" }} />
          <p className="mt-4 text-sm font-sans" style={{ color: "rgba(245,240,232,0.5)" }}>
            陪伴你走過迷惘，找到專屬的方向
          </p>
        </div>

        {/* Cases — full-width stacked cards, alternating indent */}
        <div className="space-y-6">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className={`reveal${i === 1 ? " lg:ml-16" : ""}`}
              data-delay={String(120 + i * 140)}
            >
              <div
                className="card-lift overflow-hidden"
                style={{
                  background: "#121212",
                  border: "1px solid rgba(225,174,20,0.12)",
                  borderTop: "2px solid rgba(225,174,20,0.4)",
                }}
              >
                {/* Header */}
                <div className="px-8 pt-8 pb-6 lg:flex lg:gap-10 lg:items-start" style={{ borderBottom: "1px solid rgba(225,174,20,0.08)" }}>
                  <div className="lg:flex-1">
                    <span
                      className="inline-block text-xs font-semibold font-sans px-3 py-1 mb-4"
                      style={{ background: "rgba(225,174,20,0.08)", color: "#E1AE14", border: "1px solid rgba(225,174,20,0.2)" }}
                    >
                      {c.tag}
                    </span>
                    <p className="font-serif text-2xl font-semibold mb-4" style={{ color: "#F5F0E8", letterSpacing: "0.03em" }}>
                      {c.tagline}
                    </p>
                  </div>
                  <div className="lg:w-80 pl-4" style={{ borderLeft: "1px solid rgba(225,174,20,0.2)" }}>
                    <p className="text-sm font-sans italic leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                      「{c.quote}」
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[c.problem, c.tools, c.focus, c.result].map((value, j) => (
                    <div key={detailLabels[j]} className="flex items-start gap-3">
                      <span className="text-xs font-semibold font-sans shrink-0 mt-0.5" style={{ color: "#E1AE14", minWidth: "36px", letterSpacing: "0.04em" }}>
                        {detailLabels[j]}
                      </span>
                      <p className="text-sm font-sans leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", letterSpacing: "0.01em" }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Feedback quote — full-width bottom strip */}
                <div className="px-8 py-4" style={{ background: "rgba(225,174,20,0.04)", borderTop: "1px solid rgba(225,174,20,0.08)" }}>
                  <p className="text-sm font-sans italic" style={{ color: "rgba(245,240,232,0.5)" }}>
                    {c.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — left-aligned */}
        <div className="reveal mt-10 flex items-center gap-5" data-delay="440">
          <Link href="/cases" className="btn-outline text-sm px-7 py-3 inline-flex items-center gap-2">
            查看更多案例
          </Link>
          <p className="font-serif text-sm" style={{ color: "rgba(245,240,232,0.35)" }}>
            每個故事，都是改變的開始
          </p>
        </div>
      </div>
    </section>
  );
}
