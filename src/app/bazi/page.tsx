import type { Metadata } from "next";
import BaziClient from "./BaziClient";

export const metadata: Metadata = {
  title: "免費八字速測 | 光宇方向命理研究所",
  description: "輸入出生資料，即刻查看你的八字基礎命盤預覽。完全免費，無需帳號。",
};

export default function BaziPage() {
  return <BaziClient />;
}
