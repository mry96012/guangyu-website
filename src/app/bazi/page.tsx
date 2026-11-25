import { redirect } from "next/navigation";

// 免費八字速測下架（2026-11-25 決定，依共用知識庫「不提供免費體驗」）。原 BaziClient.tsx 保留未刪，此頁改為導向服務項目。
export default function BaziPage() {
  redirect("/services");
}
