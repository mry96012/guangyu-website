import Reveal from "@/components/ui/Reveal";

/** 品牌理念：依〈01 品牌總說明〉3-3 核心理念、3-6 價值主張 */
const values = [
  {
    title: "理解自己，不是被命運判斷",
    desc: "幫你看懂自己的傾向、優勢與課題，而不是只得到一句「命好不好」。",
  },
  {
    title: "東西方工具交叉觀察",
    desc: "八字、紫微、姓名學、塔羅、生命靈數與占星各有切入點，交叉比對讓觀察更立體。",
  },
  {
    title: "把專業翻成聽得懂的話",
    desc: "保留必要的專業名詞，但一定轉成白話；除了分析，也給提醒與可行的建議。",
  },
  {
    title: "溫和、理性、不恐嚇",
    desc: "不說「一定會」「註定」，不用焦慮促成預約。命理提供理解與提醒，選擇仍在你手上。",
  },
];

export default function BrandValues() {
  return (
    <section aria-labelledby="values-title" className="bg-bg">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-24 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-32">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">02 — Philosophy</p>
            <h2 id="values-title" className="mt-5 font-serif text-[clamp(1.875rem,3.2vw,2.5rem)] font-semibold leading-tight text-ink">
              命理的價值，
              <br />
              不在製造神秘感
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-text-muted">
              而是協助你理解自己的人生結構、能量狀態與所處階段。看懂自己的節奏，就比較能在混亂中找到方向。
            </p>
          </div>
        </Reveal>

        <ol className="border-t border-ink lg:col-span-8">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={i * 60} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-border py-8 sm:grid-cols-[4rem_14rem_1fr] sm:gap-x-6">
                <span className="font-mono text-sm text-gold-dim tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl font-semibold leading-snug text-ink">{v.title}</h3>
                <p className="col-start-2 mt-2 text-base leading-relaxed text-text-muted sm:col-start-3 sm:mt-0">{v.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="lg:col-span-8 lg:col-start-5">
          <blockquote className="border-l border-gold pl-6 font-serif text-[clamp(1.25rem,2.2vw,1.625rem)] leading-relaxed text-ink">
            這不是只告訴你命好不好，而是透過多元命理工具，幫你看見自己的結構、課題與方向。
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
