import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * 光宇方向 品牌標誌（五行合一彩色標準版）。
 * 中央「光宇」為金，四周火、水、木、土依方位環繞。
 * 檔案：public/brand/guangyu-mark.svg —— 換 logo 時只要替換這個檔案。
 */
export default function BrandMark({ className, title }: { className?: string; title?: string }) {
  return (
    <span className={cn("relative inline-block shrink-0", className)}>
      <Image
        src="/brand/guangyu-mark.svg"
        alt={title ?? ""}
        fill
        sizes="96px"
        unoptimized
        priority
        className="object-contain"
      />
    </span>
  );
}
