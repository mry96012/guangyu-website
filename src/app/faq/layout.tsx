import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常見問題 FAQ | 光宇方向命理研究所",
  description: "解答關於命理諮詢、出生資料、預約方式與付款流程的常見疑問，讓你更放心預約。",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
