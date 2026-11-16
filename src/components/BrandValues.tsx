"use client";
import { useEffect, useRef } from "react";

const values = [
  {
    num: "一",
    title: "專業整合",
    desc: "以八字、紫微斗數為主，搭配姓名、塔羅與生命靈數，從不同角度對照整理。",
  },
  {
    num: "二",
    title: "個人化解讀",
    desc: "依你提供的資料與提問撰寫，命理判讀由 Axel 本人審核。",
  },
  {
    num: "三",
    title: "理解與整理",
    desc: "不用宿命式斷言，也不製造恐懼。協助你整理現況、釐清課題。",
  },
  {
    num: "四",
    title: "書面報告",
    desc: "以 PDF 或文字交付，重點整理清楚，方便保存與回看。",
  },
];

/* Small bagua-inspired SVG for section title */
function BaguaAccent() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "10px", opacity: 0.55 }}>
      <circle cx="16" cy="16" r="14" stroke="#A67C3D" strokeWidth="0.7" />
      <circle cx="16" cy="16" r="8"  stroke="#A67C3D" strokeWidth="0.5" />
      <circle cx="16" cy="16" r="2"  fill="#A67C3D" fillOpacity="0.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={16 + 3 * Math.cos(r)} y1={16 + 3 * Math.sin(r)}
            x2={16 + 13 * Math.cos(r)} y2={16 + 13 * Math.sin(r)}
            stroke="#A67C3D" strokeWidth="0.5" strokeOpacity="0.5"
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
          <p className="font-sans text-xs mb-3" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>
            CORE VALUES
          </p>
          <h2 className="font-serif text-3xl font-semibold flex items-center" style={{ color: "#2B2622", letterSpacing: "0.05em" }}>
            <BaguaAccent />
            光宇方向的做法
          </h2>
          <div className="mt-3 h-px w-16" style={{ background: "linear-gradient(to right, #A67C3D, transparent)" }} />
          <p className="mt-4 text-sm font-sans max-w-md" style={{ color: "#6E655A", letterSpacing: "0.01em" }}>
            用命理幫助理解與整理，把結果變成可以行動的建議
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
                background: "#FFFFFF",
                border: "1px solid rgba(166,124,61,0.12)",
                borderLeft: "2px solid rgba(166,124,61,0.35)",
              }}
            >
              <p className="font-display font-bold mb-4" style={{ color: "#A67C3D", fontSize: "1.5rem", opacity: 0.6, letterSpacing: "0.08em" }}>
                {v.num}
              </p>
              <p className="font-serif font-semibold text-lg mb-3" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>
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
                background: "#FFFFFF",
                border: "1px solid rgba(166,124,61,0.12)",
                borderLeft: "2px solid rgba(166,124,61,0.35)",
              }}
            >
              <p className="font-display font-bold mb-4" style={{ color: "#A67C3D", fontSize: "1.5rem", opacity: 0.6, letterSpacing: "0.08em" }}>
                {v.num}
              </p>
              <p className="font-serif font-semibold text-lg mb-3" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>
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
            background: "rgba(166,124,61,0.04)",
            borderTop: "1px solid rgba(166,124,61,0.15)",
            borderBottom: "1px solid rgba(166,124,61,0.15)",
          }}
        >
          <p className="font-serif text-base text-right" style={{ color: "rgba(245,240,232,0.55)" }}>
            了解自己，是改變的開始；理解課題，是成長的力量；
            <br />
            <span style={{ color: "#A67C3D" }}>找到方向，是人生的光。</span>
          </p>
        </div>
      </div>
    </section>
  );
}
