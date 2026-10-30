import BrandMark from "@/components/ui/BrandMark";
import { cn } from "@/lib/cn";

/**
 * 紫微斗數十二宮盤（示意）＋從命宮射出的一道光。
 * 地支固定位置：上排 巳午未申、右欄 酉戌、下排 寅丑子亥、左欄 辰卯。
 * 以「命宮在寅」為示意，沒有安星，不是任何人的命盤。
 */
type Cell = { branch: string; palace: string; row: number; col: number };

const CELLS: Cell[] = [
  { branch: "寅", palace: "命宮", row: 4, col: 1 },
  { branch: "丑", palace: "兄弟", row: 4, col: 2 },
  { branch: "子", palace: "夫妻", row: 4, col: 3 },
  { branch: "亥", palace: "子女", row: 4, col: 4 },
  { branch: "戌", palace: "財帛", row: 3, col: 4 },
  { branch: "酉", palace: "疾厄", row: 2, col: 4 },
  { branch: "申", palace: "遷移", row: 1, col: 4 },
  { branch: "未", palace: "交友", row: 1, col: 3 },
  { branch: "午", palace: "官祿", row: 1, col: 2 },
  { branch: "巳", palace: "田宅", row: 1, col: 1 },
  { branch: "辰", palace: "福德", row: 2, col: 1 },
  { branch: "卯", palace: "父母", row: 3, col: 1 },
];

export default function MingPan({ className }: { className?: string }) {
  return (
    <figure className={cn("relative w-full", className)}>
      <div
        className="relative grid aspect-square grid-cols-4 grid-rows-4 border border-border-strong bg-card/85"
        role="img"
        aria-label="紫微斗數十二宮盤示意圖：一道光從命宮出發，穿過命盤指向遠方，象徵先理解自己，方向自然清楚"
      >
        {CELLS.map((c, i) => {
          const isLife = i === 0;
          return (
            <div
              key={c.branch}
              aria-hidden="true"
              style={{ gridRow: c.row, gridColumn: c.col, animationDelay: `${200 + i * 60}ms` }}
              className={cn(
                "animate-cell flex flex-col justify-between border border-border p-2 sm:p-3",
                isLife && "bg-light/15"
              )}
            >
              <span className="self-end font-mono text-[0.6875rem] text-text-muted sm:text-xs">{c.branch}</span>
              <span className={cn("font-serif text-sm sm:text-base", isLife ? "font-semibold text-gold-dim" : "text-ink")}>
                {c.palace}
              </span>
            </div>
          );
        })}

        <div
          aria-hidden="true"
          style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2", animationDelay: "100ms" }}
          className="animate-cell flex flex-col items-center justify-center gap-3 border border-border bg-bg"
        >
          <BrandMark className="size-12 text-ink sm:size-16" />
          <span className="font-mono text-[0.6875rem] text-text-muted sm:text-xs">從命宮出發</span>
        </div>

        {/* 光束：由命宮中心射向右上方 */}
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-10 size-full overflow-visible">
          <defs>
            <linearGradient id="beam-fade" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="var(--color-light)" stopOpacity="0.95" />
              <stop offset="1" stopColor="var(--color-light)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line
            x1="12.5" y1="87.5" x2="104" y2="-4"
            stroke="url(#beam-fade)"
            strokeWidth="0.45"
            className="animate-beam"
          />
          <circle cx="12.5" cy="87.5" r="1.3" fill="var(--color-light)" className="animate-cell" style={{ animationDelay: "900ms" }} />
        </svg>
      </div>

      <figcaption className="mt-3 flex justify-between font-mono text-[0.6875rem] text-text-muted sm:text-xs">
        <span>FIG. 01 — 一道從命宮出發的光</span>
        <span>示意圖</span>
      </figcaption>
    </figure>
  );
}
