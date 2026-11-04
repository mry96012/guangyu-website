import { MAINTENANCE, SITE } from "@/config/content";

const FOLD = 32; // 折角大小（px）

export default function MaintenanceOverlay() {
  if (!MAINTENANCE.enabled) return null;

  return (
    <>
      {/* 維護期間鎖住背後頁面捲動 */}
      <style>{`html, body { overflow: hidden !important; }`}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="maintenance-title"
        aria-describedby="maintenance-body"
        className="fixed inset-0 z-50 flex h-dvh items-center justify-center bg-[#2B2622]/55 px-4 backdrop-blur-sm"
        style={{
          paddingTop: "max(1rem, env(safe-area-inset-top))",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="relative w-full max-w-md">
          {/* 卡片本體：右上角切出折角 */}
          <div
            className="border border-border bg-card px-7 pt-10 pb-8 text-center shadow-xl sm:px-10"
            style={{
              clipPath: `polygon(0 0, calc(100% - ${FOLD}px) 0, 100% ${FOLD}px, 100% 100%, 0 100%)`,
            }}
          >
            <p className="font-display text-xs font-semibold text-gold-dim">
              {MAINTENANCE.eyebrow}
            </p>

            <h2
              id="maintenance-title"
              className="mt-3 font-serif text-2xl font-semibold text-balance text-text sm:text-3xl"
            >
              {MAINTENANCE.title}
            </h2>

            <div className="mx-auto mt-5 h-px w-12 bg-gold" aria-hidden="true" />

            <p
              id="maintenance-body"
              className="mt-5 text-sm leading-relaxed text-pretty text-text-muted sm:text-base"
            >
              {MAINTENANCE.body}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-text-muted">
              {MAINTENANCE.lineHint}
            </p>

            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-[#06C755] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755]"
            >
              <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              {MAINTENANCE.ctaLine}
              <span className="font-normal opacity-80">{SITE.lineId}</span>
            </a>
          </div>

          {/* 折角翻起的那一片 */}
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 bg-surface shadow-md"
            style={{
              width: FOLD,
              height: FOLD,
              clipPath: "polygon(0 0, 0 100%, 100% 100%)",
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 bg-gold/40"
            style={{
              width: FOLD,
              height: FOLD,
              clipPath: "polygon(0 0, 1px 0, 100% calc(100% - 1px), 100% 100%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
