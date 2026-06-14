import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "預約諮詢 | 光宇方向命理研究所",
  description: "線上預約光宇方向命理諮詢，提供八字、紫微斗數、塔羅、占星等整合分析服務，一對一專屬解讀。",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
