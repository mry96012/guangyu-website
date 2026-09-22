import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "聯絡我們 | 光宇方向命理研究所",
  description: "有任何問題歡迎聯絡光宇方向命理研究所。透過 LINE 或填寫留言表單，老師將盡快回覆。",
};

export default function ContactPage() {
  return <ContactClient />;
}
