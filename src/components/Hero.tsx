import Link from "next/link";
import MingPan from "@/components/MingPan";
import LineIcon from "@/components/ui/LineIcon";
import { SITE } from "@/config/site";

/** 品牌名三字＝三個承諾 */
const promises = [
  { key: "光 · 照見", title: "看懂自己", desc: "天賦、課題、節奏" },
  { key: "宇 · 格局", title: "看見全局", desc: "東西方多系統整合" },
  { key: "方向 · 選擇", title: "做出決定", desc: "書面報告，隨時回顧" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="bg-dawn pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-5 pb-20 pt-32 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="lg:col-span-7 lg:pt-2">
          <p className="eyebrow animate-rise normal-case">{SITE.name} — {SITE.tagline}</p>

          <h1
            className="animate-rise mt-6 font-serif text-[clamp(2.875rem,6.4vw,4.75rem)] font-semibold leading-[1.16] text-ink"
            style={{ animationDelay: "80ms" }}
          >
            找到方向，
            <br />
            是人生的<span className="text-light-mark">光</span>。
          </h1>

          <p className="animate-rise mt-8 max-w-[35rem] text-lg leading-relaxed text-text-muted" style={{ animationDelay: "160ms" }}>
            命理不是替你決定未來，而是幫你看清自己。透過八字、紫微斗數、塔羅、生命靈數與占星整合分析，把散亂的現況整理成一條你看得見的路。
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6" style={{ animationDelay: "240ms" }}>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <LineIcon className="size-[18px]" />
              加入 LINE 預約諮詢
            </a>
            <Link href="/services" className="link-arrow">
              看服務項目 <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="animate-rise mt-14 grid grid-cols-1 border-t border-ink sm:grid-cols-3" style={{ animationDelay: "320ms" }}>
            {promises.map((p) => (
              <li key={p.key} className="border-b border-border py-4 sm:border-b-0 sm:pr-5 sm:[&+li]:border-l sm:[&+li]:pl-5">
                <span className="font-mono text-xs text-gold-dim">{p.key}</span>
                <p className="mt-1.5 font-serif text-xl font-semibold text-ink">{p.title}</p>
                <p className="mt-1 text-sm text-text-muted">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <MingPan className="mx-auto max-w-[480px]" />
        </div>
      </div>
    </section>
  );
}
