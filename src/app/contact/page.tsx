import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "聯絡光宇方向 | 光宇方向命理研究所",
  description: "有任何問題歡迎聯絡光宇方向命理研究所。透過官方 LINE 聯絡，由 Axel 本人回覆。",
};

export default function ContactPage() {
  return <ContactClient />;
}
