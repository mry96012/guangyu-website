import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務項目 | 光宇方向命理研究所",
  description: "光宇方向的服務項目、價格與交付方式。",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
