import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權與個人資料保護政策 | 光宇方向命理研究所",
  description: "光宇方向命理研究所個人資料蒐集、處理及利用告知事項，依台灣個人資料保護法規定辦理。",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
