import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "常見問題 FAQ | 光宇方向命理研究所",
  description: "光宇方向命理研究所常見問題解答，包含服務說明、出生資料、諮詢方式與付款預約相關問題。",
};

export default function FAQPage() {
  return <FaqClient />;
}
