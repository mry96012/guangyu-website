import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "預約諮詢 | 光宇方向命理研究所",
  description: "填寫預約表單，選擇命理服務與諮詢主題，透過 LINE 快速確認預約細節。",
};

export default function BookingPage() {
  return <BookingClient />;
}
