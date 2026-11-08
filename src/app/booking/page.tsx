import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import BookingClient from "./BookingClient";

export const metadata: Metadata = pageMeta("/booking", "預約諮詢 | 光宇方向命理研究所", "填寫預約表單，選擇命理服務與諮詢主題，透過 LINE 快速確認預約細節。");

export default function BookingPage() {
  return <BookingClient />;
}
