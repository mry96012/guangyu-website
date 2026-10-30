import Image from "next/image";
import BrandMark from "@/components/ui/BrandMark";
import LineIcon from "@/components/ui/LineIcon";
import { SITE } from "@/config/site";

/**
 * 維護公告遮罩：蓋在首頁上方，只保留 LINE 官方帳號的入口。
 * 開關在 src/config/site.ts 的 MAINTENANCE。
 */
export default function MaintenanceOverlay() {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="maintenance-title"
      aria-describedby="maintenance-desc"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-bg/85 px-4 py-10"
    >
      {/* 遮罩開啟時，背後的頁面不能捲動 */}
      <style>{`html,body{overflow:hidden}`}</style>

      <section className="dog-ear animate-rise relative w-full max-w-[460px] border border-border-strong bg-card px-7 pb-8 pt-9 shadow-xl sm:px-10 sm:pb-10 sm:pt-11">
        <div className="flex items-center gap-3">
          <BrandMark className="size-10 text-ink" hole="var(--color-card)" />
          <div className="leading-none">
            <p className="font-serif text-lg font-semibold text-ink">光宇方向</p>
            <p className="mt-1 font-mono text-[0.625rem] text-text-muted">命理研究所 · GUANGYU</p>
          </div>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 border border-border-strong px-3 py-1.5 text-sm text-gold-dim">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-light" />
          系統更新維護作業中
        </p>

        <h1 id="maintenance-title" className="mt-5 font-serif text-[1.75rem] font-semibold leading-snug text-ink sm:text-[2rem]">
          官網正在更新改版
        </h1>
        <p id="maintenance-desc" className="mt-4 text-base leading-relaxed text-text-muted">
          這段期間網站暫停線上服務。預約諮詢不受影響，請直接透過 LINE 官方帳號與我們聯繫。
        </p>

        <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full">
          <LineIcon className="size-[18px]" />
          加入 LINE 官方帳號預約
        </a>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
          <div className="relative size-20 shrink-0 border border-border bg-white">
            <Image src="/qrcode-line.png" alt={`LINE 官方帳號 ${SITE.lineId} 的 QR Code`} fill sizes="80px" className="object-contain p-1" />
          </div>
          <dl className="grid grid-cols-[2.75rem_1fr] gap-y-1.5 text-sm">
            <dt className="font-mono text-xs leading-5 text-text-muted">LINE</dt>
            <dd className="font-mono leading-5 text-ink">{SITE.lineId}</dd>
            <dt className="font-mono text-xs leading-5 text-text-muted">時間</dt>
            <dd className="leading-5 text-ink">{SITE.hours}</dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
