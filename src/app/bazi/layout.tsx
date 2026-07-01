import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "八字命盤計算 | 光宇方向命理研究所",
  description: "免費輸入生辰八字，即時計算天干地支與五行格局，了解自己的命盤結構與人生課題。",
};

export default function BaziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
