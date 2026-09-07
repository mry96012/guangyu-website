"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

/* Five-element star SVG */
function FiveElementsStar() {
  const points = Array.from({ length: 5 }, (_, i) => {
    const outer = ((i * 72 - 90) * Math.PI) / 180;
    const inner = (((i * 72 + 36) - 90) * Math.PI) / 180;
    const ox = 50 + 42 * Math.cos(outer);
    const oy = 50 + 42 * Math.sin(outer);
    const ix = 50 + 18 * Math.cos(inner);
    const iy = 50 + 18 * Math.sin(inner);
    return `${ox},${oy} ${ix},${iy}`;
  }).join(" ");

  return (
    <svg width="52" height="52" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <polygon points={points} stroke="#E1AE14" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
      <circle cx="50" cy="50" r="48" stroke="#E1AE14" strokeWidth="0.6" strokeOpacity="0.3" />
      <circle cx="50" cy="50" r="20" stroke="#E1AE14" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="50" cy="50" r="3" fill="#E1AE14" fillOpacity="0.5" />
    </svg>
  );
}

export default function FinalCTA() {
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
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)" }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(225,174,20,0.06) 0%, transparent 70%)" }}
      />

      {/* Section divider top */}
      <div className="section-divider mb-16 max-w-3xl mx-auto px-6">
        <span>☰ ☲ ☴ ☶</span>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center space-y-8">

        <div className="reveal flex justify-center" data-delay="0">
          <FiveElementsStar />
        </div>

        <div className="reveal space-y-4" data-delay="120">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug" style={{ color: "#F5F0E8", letterSpacing: "0.04em" }}>
            準備好了解自己，找到方向了嗎？
          </h2>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.48)", letterSpacing: "0.02em" }}>
            加入 LINE 官方帳號，立即預約諮詢
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4" data-delay="240">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line text-base px-10 py-4 inline-flex items-center gap-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            加入 LINE 好友
          </a>

          <div
            className="flex items-center gap-3 px-5 py-3"
            style={{ background: "rgba(245,240,232,0.04)", border: "1px solid rgba(225,174,20,0.15)" }}
          >
            <div className="w-14 h-14 overflow-hidden relative shrink-0">
              <Image src="/qrcode-line.png" alt="LINE QR Code" fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold font-sans" style={{ color: "#F5F0E8" }}>LINE 官方帳號</p>
              <p className="text-xs font-sans mt-0.5" style={{ color: "rgba(245,240,232,0.42)" }}>@enlite731</p>
              <p className="text-xs font-sans mt-0.5" style={{ color: "#E1AE14", opacity: 0.6 }}>預約・諮詢・優惠</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
