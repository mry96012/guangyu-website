import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡光宇方向 | 光宇方向命理研究所",
  description: "歡迎透過 LINE 或留言表單聯絡光宇方向命理研究所，由 Axel 本人回覆。",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
