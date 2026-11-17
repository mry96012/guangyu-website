import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "預約諮詢 | 光宇方向命理研究所",
  description: "透過官方 LINE 預約光宇方向的八字、紫微斗數、姓名解析、塔羅與生命靈數服務。",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
