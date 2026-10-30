import { cn } from "@/lib/cn";

/**
 * 光宇方向 品牌標誌「光之羅盤」
 * 圓＝宇（格局），火焰＝光（照見），火焰同時是羅盤指北針＝方向（選擇）。
 * 顏色跟隨 currentColor；`hole` 是火焰中心的鏤空色，需等於背景色。
 */
export default function BrandMark({
  className,
  hole = "var(--color-bg)",
  title,
}: {
  className?: string;
  hole?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <circle cx="50" cy="56" r="33" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M50 4C57 19 61 30 61 40c0 9-5 16-11 16s-11-7-11-16c0-10 4-21 11-36Z" fill="currentColor" />
      <path d="M50 46c3 4 4 7 0 10-4-3-3-6 0-10Z" fill={hole} />
      <path d="M50 56v24M14 56h8M78 56h8M50 89v7" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
