import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { REPORT_SAMPLE, SERVICE_PROCESS } from "@/config/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務流程 | 光宇方向命理研究所",
  description: "從預約、填寫資料、一對一諮詢到書面報告交付的流程，以及報告段落的結構示意。",
};

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #FAF6EF 0%, #F0E8D8 50%, #FAF6EF 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(166,124,61,0.07) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>
              {SERVICE_PROCESS.sectionLabel}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#2B2622" }}>
              {SERVICE_PROCESS.title}
            </h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>
              {SERVICE_PROCESS.description}
            </p>
          </div>
        </section>

        <section className="py-8 section-light">
          <div className="max-w-3xl mx-auto px-6">
            <div
              className="px-5 py-4 text-xs font-sans leading-relaxed"
              style={{ background: "rgba(166,124,61,0.04)", border: "1px solid rgba(166,124,61,0.15)", color: "#6E655A" }}
            >
              本頁說明一次諮詢如何進行，以及書面報告有哪些段落。這裡不刊登客戶姓名、引言或評價。
            </div>
          </div>
        </section>

        <section className="pb-16 section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {SERVICE_PROCESS.steps.map((step) => (
                <div
                  key={step.n}
                  className="p-6 flex flex-col gap-3"
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
          </div>
        </section>

        <section className="pb-20 section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="overflow-hidden"
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
                <h2 className="font-serif text-2xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.03em" }}>
                  {REPORT_SAMPLE.title}
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed max-w-3xl" style={{ color: "#6E655A" }}>
                  {REPORT_SAMPLE.intro}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {REPORT_SAMPLE.sections.map((section, i) => (
                  <div
                    key={section.label}
                    className="px-7 py-6"
                    style={{ borderTop: "1px solid rgba(166,124,61,0.08)" }}
                  >
                    <p className="font-sans text-xs font-bold tracking-widest" style={{ color: "#A67C3D" }}>
                      0{i + 1}
                    </p>
                    <p className="mt-2 font-serif text-lg font-semibold" style={{ color: "#2B2622" }}>
                      {section.label}
                    </p>
                    <p className="mt-2 font-sans text-xs" style={{ color: "#A67C3D" }}>
                      {REPORT_SAMPLE.emptyNote}
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>
                      {section.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 section-alt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>
                {SERVICE_PROCESS.promisesTitle}
              </h2>
              <p className="mt-2 font-sans text-sm" style={{ color: "#6E655A" }}>
                {SERVICE_PROCESS.promisesSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_PROCESS.promises.map((item) => (
                <div
                  key={item.label}
                  className="p-5"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}
                >
                  <p className="font-serif text-base font-semibold" style={{ color: "#2B2622" }}>
                    {item.label}
                  </p>
                  <p className="mt-1 font-sans text-sm" style={{ color: "#6E655A" }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}>
                <p className="font-semibold font-sans text-sm" style={{ color: "#2B2622" }}>
                  {SERVICE_PROCESS.infoBooking.title}
                </p>
                <ul className="mt-2 text-sm font-sans space-y-1" style={{ color: "#6E655A" }}>
                  {SERVICE_PROCESS.infoBooking.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}>
                <p className="font-semibold font-sans text-sm" style={{ color: "#2B2622" }}>
                  {SERVICE_PROCESS.infoHours.title}
                </p>
                <p className="mt-2 font-sans text-sm" style={{ color: "#6E655A" }}>
                  {SERVICE_PROCESS.infoHours.days}
                </p>
                <p className="mt-1 font-sans text-sm font-semibold" style={{ color: "#A67C3D" }}>
                  {SERVICE_PROCESS.infoHours.hours}
                </p>
              </div>
              <div className="p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}>
                <p className="font-semibold font-sans text-sm" style={{ color: "#2B2622" }}>
                  {SERVICE_PROCESS.infoNotes.title}
                </p>
                <ul className="mt-2 text-sm font-sans space-y-1" style={{ color: "#6E655A" }}>
                  {SERVICE_PROCESS.infoNotes.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
