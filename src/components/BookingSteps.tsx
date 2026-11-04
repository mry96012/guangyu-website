import Reveal from "@/components/ui/Reveal";
import LineIcon from "@/components/ui/LineIcon";
import { SITE } from "@/config/site";

/** 預約流程：依〈05 LINE 與預約流程〉— 先確認服務 → 提供資料 → 交付報告 */
const steps = [
  {
    title: "加入官方 LINE",
    desc: `搜尋 ${SITE.lineId} 或掃描 QR Code，所有預約與諮詢都在 LINE 進行。`,
  },
  {
    title: "說明需求、確認服務",
    desc: "簡單說明想了解的問題，確認適合的服務項目、價格與交付方式。",
  },
  {
    title: "提供資料、完成付款",
    desc: "依服務提供國曆出生日期、出生時間與性別（姓名學另附姓名），完成付款後開始分析。",
  },
  {
    title: "收到書面報告",
    desc: "約 1–3 個工作天以 LINE 或 Email 交付，看完有疑問可再提出補充說明。",
  },
];

export default function BookingSteps() {
  return (
    <section aria-labelledby="booking-title" className="bg-bg">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-24 lg:grid-cols-12 lg:px-8 lg:py-32">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">04 — How it works</p>
            <h2 id="booking-title" className="mt-5 font-serif text-[clamp(1.875rem,3.2vw,2.5rem)] font-semibold leading-tight text-ink">
              預約流程
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-text-muted">
              四個步驟，先確認服務、再提供資料，每一步都會清楚告訴你接下來會發生什麼。
            </p>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              <LineIcon className="size-[18px]" />
              從 LINE 開始預約
            </a>
          </div>
        </Reveal>

        <ol className="lg:col-span-8">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 60} className="relative grid grid-cols-[3rem_1fr] gap-x-5 pb-10 last:pb-0 sm:grid-cols-[4rem_1fr]">
                {/* 節點與連線 */}
                <span aria-hidden="true" className="relative flex justify-center">
                  <span className="relative z-10 flex size-11 items-center justify-center border border-ink bg-bg font-mono text-sm text-ink tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && <span className="absolute bottom-[-2.5rem] top-11 w-px bg-border-strong" />}
                </span>
                <div className="pt-2">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    <span className="sr-only">步驟 {i + 1}：</span>
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-text-muted">{s.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
