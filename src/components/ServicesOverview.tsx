import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/config/site";

/** 服務總覽：依〈02 服務項目與價格〉的四大分類，價格為該類最低起價 */
const categories = [
  {
    name: "東方命理",
    tools: "八字・紫微斗數・姓名學・流年大運",
    fit: "想看懂自己的人生結構、性格傾向與時間節奏。",
    from: "600",
    href: "/services#s1",
  },
  {
    name: "西方命理",
    tools: "塔羅占卜・生命靈數・西洋占星",
    fit: "想快速聚焦當下問題，或從數字與星盤認識自己。",
    from: "350",
    href: "/services#s4",
  },
  {
    name: "主題分析",
    tools: "感情・事業・財運・人際・家庭・狀態",
    fit: "想針對單一議題深入整理，看清卡點與可行方向。",
    from: "1,800",
    href: "/services#theme",
  },
  {
    name: "整合深度服務",
    tools: "八字＋紫微・東西方交叉・雙主題報告・合盤合婚",
    fit: "想一次得到較完整的觀察，並留下可回顧的書面整理。",
    from: "2,000",
    href: "/services#integrated",
  },
];

export default function ServicesOverview() {
  return (
    <section aria-labelledby="services-title" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-24 lg:px-8 lg:py-32">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">03 — Services</p>
            <h2 id="services-title" className="mt-5 font-serif text-[clamp(1.875rem,3.2vw,2.5rem)] font-semibold leading-tight text-ink">
              服務總覽
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
              依照想了解的問題與深度選擇。不同工具各有用途，重點不是哪一個最神，而是哪一個更適合你現在的狀態。
            </p>
          </div>
          <Link href="/services" className="link-arrow shrink-0">
            完整服務與價格 <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 border-l border-t border-border-strong bg-bg sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <li key={c.name} className="border-b border-r border-border-strong">
              <Reveal delay={i * 60} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col p-7 transition-colors duration-150 hover:bg-card"
                >
                  <span className="font-mono text-xs text-text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gold-dim">{c.tools}</p>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-text-muted">{c.fit}</p>
                  <p className="mt-8 flex items-baseline justify-between border-t border-border pt-4">
                    <span className="text-sm text-text-muted">
                      NT$<span className="font-serif text-2xl font-semibold text-ink tabular-nums">{c.from}</span> 起
                    </span>
                    <span aria-hidden="true" className="text-ink transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8">
          <p className="text-[0.9375rem] leading-relaxed text-text-muted">
            不確定適合哪一種？{" "}
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline decoration-border-strong underline-offset-4 hover:decoration-ink">
              透過 LINE 說明你的狀況
            </a>
            ，會依需求推薦適合的方案，不一律推薦最高價。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
