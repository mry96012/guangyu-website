import { redirect } from "next/navigation";

// 不提供免費體驗（2026-11-16 決定）。原 ExperienceClient.tsx 保留未刪，此頁改為導向服務項目。
export default function ExperiencePage() {
  redirect("/services");
}
