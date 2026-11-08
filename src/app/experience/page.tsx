import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = pageMeta("/experience", "免費命盤體驗 | 光宇方向命理研究所", "輸入出生資料，即刻查看你的八字命盤基礎解讀。了解年柱、日主與五行屬性，完全免費，無需帳號。");

export default function ExperiencePage() {
  return <ExperienceClient />;
}
