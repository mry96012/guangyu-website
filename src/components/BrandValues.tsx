import Reveal from "@/components/ui/Reveal";

const values = [
  {
    title: "專業整合",
    desc: "結合東方命理與西方占卜、占星與數字能量等工具，多角度綜合分析，提供更全面的理解與建議。",
  },
  {
    title: "個人化解讀",
    desc: "根據你的生命資訊與提問，獨立撰寫的專屬解讀，不套版、不制式，讓你真正看見自己。",
  },
  {
    title: "理解與陪伴",
    desc: "不預測未來、也不製造恐懼，協助你整理現況、釐清課題，陪你一起找到方向。",
  },
  {
    title: "書面報告",
    desc: "提供清楚完整的書面報告，重點整理、易於理解，方便你隨時保存與回顧。",
  },
];

export default function BrandValues() {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-24 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-32">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">02 — Core Values</p>
            <h2 className="mt-5 font-serif text-[clamp(1.875rem,3.2vw,2.5rem)] font-semibold leading-tight text-ink">
              我們的核心價值
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-text-muted">
              不只是命理分析，更是陪伴你理解自己、找到方向的專業顧問。
            </p>
          </div>
        </Reveal>

        <ol className="border-t border-ink lg:col-span-8">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={i * 60} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-border py-8 sm:grid-cols-[4rem_12rem_1fr] sm:gap-x-6">
                <span className="font-mono text-sm text-gold-dim tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl font-semibold text-ink">{v.title}</h3>
                <p className="col-start-2 mt-2 text-base leading-relaxed text-text-muted sm:col-start-3 sm:mt-0">{v.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="lg:col-span-8 lg:col-start-5">
          <blockquote className="border-l border-gold pl-6 font-serif text-[clamp(1.25rem,2.2vw,1.625rem)] leading-relaxed text-ink">
            了解自己，是改變的開始；
            <br />
            理解課題，是成長的力量。
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
