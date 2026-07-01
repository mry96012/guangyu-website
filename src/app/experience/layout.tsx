import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免費命盤體驗 | 光宇方向命理研究所",
  description: "免費領取個人命盤解析，輸入生辰資料即可獲得八字命盤速覽、五行結構與今年運勢重點。",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
