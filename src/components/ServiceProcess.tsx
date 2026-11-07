"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { REPORT_SAMPLE, SERVICE_PROCESS } from "@/config/content";

export default function ServiceProcess() {
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
      <div className="section-divider mb-16 max-w-6xl mx-auto px-6">
        <span>☵ ☶ ☷ ☰</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14 text-right" data-delay="0">
          <p className="font-sans text-xs mb-3" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>
            {SERVICE_PROCESS.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.05em" }}>
            {SERVICE_PROCESS.title}
          </h2>
          <div className="mt-3 h-px w-16 ml-auto" style={{ background: "linear-gradient(to left, #A67C3D, transparent)" }} />
          <p className="mt-4 text-sm font-sans" style={{ color: "#6E655A" }}>
            {SERVICE_PROCESS.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICE_PROCESS.steps.map((step, i) => (
            <div
              key={step.n}
              className="reveal card-lift p-6 flex flex-col gap-3"
              data-delay={String(120 + i * 70)}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(166,124,61,0.12)",
                borderTop: "2px solid rgba(166,124,61,0.4)",
              }}
            >
              <p className="font-sans text-xs font-bold tracking-widest" style={{ color: "#A67C3D" }}>
                {step.n}
              </p>
              <p className="font-serif text-lg font-semibold" style={{ color: "#2B2622", letterSpacing: "0.03em" }}>
                {step.title}
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="reveal mt-10 overflow-hidden"
          data-delay="480"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(166,124,61,0.12)",
            borderTop: "2px solid rgba(166,124,61,0.4)",
          }}
        >
          <div className="px-7 pt-7 pb-5" style={{ borderBottom: "1px solid rgba(166,124,61,0.08)" }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="font-sans text-xs" style={{ color: "#A67C3D", letterSpacing: "0.18em" }}>
                {REPORT_SAMPLE.sectionLabel}
              </p>
              <span
                className="text-xs font-semibold font-sans px-3 py-1"
                style={{ background: "rgba(166,124,61,0.08)", color: "#A67C3D", border: "1px solid rgba(166,124,61,0.2)" }}
              >
                {REPORT_SAMPLE.badge}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.03em" }}>
              {REPORT_SAMPLE.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed max-w-3xl" style={{ color: "#6E655A" }}>
              {REPORT_SAMPLE.intro}
            </p>
          </div>
          <div className="px-7 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REPORT_SAMPLE.sections.map((section, i) => (
              <div key={section.label} className="flex items-start gap-3">
                <span className="font-sans text-xs font-bold tracking-widest shrink-0 mt-0.5" style={{ color: "#A67C3D" }}>
                  0{i + 1}
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold" style={{ color: "#2B2622" }}>
                    {section.label}
                  </p>
                  <p className="font-sans text-xs mt-1" style={{ color: "#A67C3D" }}>
                    {REPORT_SAMPLE.emptyNote}
                  </p>
                  <p className="font-sans text-sm leading-relaxed mt-1" style={{ color: "#6E655A" }}>
                    {section.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10" data-delay="560">
          <Link href="/cases" className="btn-outline text-sm px-7 py-3 inline-flex items-center gap-2">
            看完整服務流程
          </Link>
        </div>
      </div>
    </section>
  );
}
