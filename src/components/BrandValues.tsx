"use client";
import { useEffect, useRef } from "react";

const values = [
  {
    num: "一",
    title: "專業整合",
    desc: "結合東方命理與西方占卜、占星與數字能量等工具，多角度綜合分析，提供更全面的理解與建議。",
  },
  {
    num: "二",
    title: "個人化解讀",
    desc: "根據你的生命資訊與提問，量身打造的專屬解讀，不套版、不制式，讓你真正看見自己。",
  },
  {
    num: "三",
    title: "理解與陪伴",
    desc: "不預測未來、也不製造恐懼，協助你整理現況、釐清課題，陪你一起找到方向。",
  },
  {
    num: "四",
    title: "書面報告",
    desc: "提供清楚完整的書面報告，重點整理、易於理解，方便你隨時保存與回顧。",
  },
];

/* Small bagua-inspired SVG for section title */
function BaguaAccent() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "10px", opacity: 0.55 }}>
      <circle cx="16" cy="16" r="14" stroke="#E1AE14" strokeWidth="0.7" />
      <circle cx="16" cy="16" r="8"  stroke="#E1AE14" strokeWidth="0.5" />
      <circle cx="16" cy="16" r="2"  fill="#E1AE14" fillOpacity="0.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={16 + 3 * Math.cos(r)} y1={16 + 3 * Math.sin(r)}
            x2={16 + 13 * Math.cos(r)} y2={16 + 13 * Math.sin(r)}
            stroke="#E1AE14" strokeWidth="0.5" strokeOpacity="0.5"
          />
        );
      })}
    </svg>
  );
}

export default function BrandValues() {
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
      { threshold: 0.15, rootMargin: "-40px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 section-light" style={{ position: "relative" }}>
      {/* Section divider top */}
      <div className="section-divider mb-16 max-w-6xl mx-auto px-6">
        <span>☰ ☱ ☲ ☳</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Title — left-aligned for asymmetry */}
        <div className="reveal mb-14" data-delay="0">
          <p className="font-sans text-xs mb-3" style={{ color: "#E1AE14", letterSpacing: "0.22em" }}>
            CORE VALUES
          </p>
          <h2 className="font-serif text-3xl font-semibold flex items-center" style={{ color: "#F5F0E8", letterSpacing: "0.05em" }}>
            <BaguaAccent />
            我們的核心價值
          </h2>
          <div className="mt-3 h-px w-16" style={{ background: "linear-gradient(to right, #E1AE14, transparent)" }} />
          <p className="mt-4 text-sm font-sans max-w-md" style={{ color: "rgba(245,240,232,0.5)", letterSpacing: "0.01em" }}>
            不只是命理分析，更是陪伴你理解自己、找到方向的專業顧問
          </p>
        </div>

        {/* 2 + 2 staggered grid — breaks the even-4-col AI template feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Row 1: first card is wider visually via padding offset */}
          {values.slice(0, 2).map((v, i) => (
            <div
              key={v.num}
              className="reveal card-lift p-8"
              data-delay={String(120 + i * 100)}
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(225,174,20,0.12)",
                borderLeft: "2px solid rgba(225,174,20,0.35)",
              }}
            >
              <p className="font-display font-bold mb-4" style={{ color: "#E1AE14", fontSize: "1.5rem", opacity: 0.6, letterSpacing: "0.08em" }}>
                {v.num}
              </p>
              <p className="font-serif font-semibold text-lg mb-3" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>
                {v.title}
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)", letterSpacing: "0.01em" }}>
                {v.desc}
              </p>
            </div>
          ))}
          {/* Row 2: right-offset start — md:mt-8 nudge creates visual stagger */}
          {values.slice(2, 4).map((v, i) => (
            <div
              key={v.num}
              className={`reveal card-lift p-8${i === 1 ? " md:mt-8" : ""}`}
              data-delay={String(300 + i * 100)}
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(225,174,20,0.12)",
                borderLeft: "2px solid rgba(225,174,20,0.35)",
              }}
            >
              <p className="font-display font-bold mb-4" style={{ color: "#E1AE14", fontSize: "1.5rem", opacity: 0.6, letterSpacing: "0.08em" }}>
                {v.num}
              </p>
              <p className="font-serif font-semibold text-lg mb-3" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>
                {v.title}
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)", letterSpacing: "0.01em" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote — full-width, right-aligned text for rhythm break */}
        <div
          className="reveal mt-14 py-6 px-8"
          data-delay="480"
          style={{
            background: "rgba(225,174,20,0.04)",
            borderTop: "1px solid rgba(225,174,20,0.15)",
            borderBottom: "1px solid rgba(225,174,20,0.15)",
          }}
        >
          <p className="font-serif text-base text-right" style={{ color: "rgba(245,240,232,0.55)" }}>
            了解自己，是改變的開始；理解課題，是成長的力量；
            <br />
            <span style={{ color: "#E1AE14" }}>找到方向，是人生的光。</span>
          </p>
        </div>
      </div>
    </section>
  );
}
