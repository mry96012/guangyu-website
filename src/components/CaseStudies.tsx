import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { CASES, SITE } from "@/config/site";

const fields = [
  { key: "problem", label: "困境" },
  { key: "tools", label: "工具" },
  { key: "focus", label: "重點" },
  { key: "result", label: "結果" },
] as const;

export default function CaseStudies() {
  const cases = CASES.slice(0, 2);

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-24 lg:px-8 lg:py-32">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">03 — Case Studies</p>
            <h2 className="mt-5 font-serif text-[clamp(1.875rem,3.2vw,2.5rem)] font-semibold leading-tight text-ink">真實案例分享</h2>
            <p className="mt-4 text-base text-text-muted">陪伴你走過迷惘，找到專屬的方向。</p>
          </div>
          {cases.length > 0 && (
            <Link href="/cases" className="link-arrow shrink-0">
              查看更多案例 <span aria-hidden="true">→</span>
            </Link>
          )}
        </Reveal>

        {cases.length === 0 ? (
          <Reveal className="mt-12">
            <div className="grid grid-cols-1 border border-border-strong bg-bg md:grid-cols-12">
              <div className="border-b border-border p-8 md:col-span-4 md:border-b-0 md:border-r">
                <p className="font-mono text-xs text-text-muted">00 / 案例</p>
                <p className="mt-4 font-serif text-2xl font-semibold text-ink">案例整理中</p>
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 md:col-span-8">
                <p className="max-w-xl text-base leading-relaxed text-text-muted">
                  每一則案例都會在當事人同意、並去除可識別資訊後才公開。在那之前，你可以先透過 LINE 聊聊你目前的狀況。
                </p>
                <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline self-start">
                  透過 LINE 詢問
                </a>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <article className="flex h-full flex-col border border-border-strong bg-bg">
                  <header className="border-b border-border p-8">
                    <p className="font-mono text-xs text-gold-dim">{c.tag}</p>
                    <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-ink">{c.tagline}</h3>
                  </header>
                  <dl className="grid flex-1 grid-cols-[3rem_1fr] gap-x-4 gap-y-4 p-8">
                    {fields.map((f) => (
                      <div key={f.key} className="contents">
                        <dt className="font-mono text-xs leading-6 text-text-muted">{f.label}</dt>
                        <dd className="text-[0.9375rem] leading-6 text-ink">{c[f.key]}</dd>
                      </div>
                    ))}
                  </dl>
                  {c.feedback && (
                    <p className="border-t border-border p-8 font-serif text-base leading-relaxed text-text-muted">{c.feedback}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
