import Image from "next/image";
import type { ReactNode } from "react";

/**
 * 內頁頁首：左側文字、右側品牌底圖（淡彩水墨，2026-11 品牌視覺系列 E1–E4）。
 * 手機版底圖淡化當背景，文字置中；桌機版文字靠左、圖片主體在右側。
 * 還原方式：各頁改回原本的 <section> 漸層頁首即可（見 git 歷史）。
 */
export default function PageHero({
  label,
  title,
  description,
  image,
}: {
  label: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FAF6EF" }}>
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      {/* 手機：整片淡化；桌機：左側淡出，保留右側主體 */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{ background: "rgba(250,246,239,0.78)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(250,246,239,0.92) 0%, rgba(250,246,239,0.7) 38%, rgba(250,246,239,0) 62%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-28 min-h-[360px] md:min-h-[520px] flex items-center">
        <div className="max-w-xl space-y-4 text-center md:text-left mx-auto md:mx-0">
          <p
            className="text-xs tracking-widest font-sans font-semibold"
            style={{ color: "#8A5D0A", letterSpacing: "0.22em" }}
          >
            {label}
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-semibold tracking-wide"
            style={{ color: "#2B2622" }}
          >
            {title}
          </h1>
          <div className="gold-diamond max-w-xs mx-auto md:mx-0">
            <span />
          </div>
          {description ? (
            <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: "#6B6259" }}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
