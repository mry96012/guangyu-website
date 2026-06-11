import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "光宇方向命理研究所｜東西方命理整合分析",
  description:
    "結合八字、紫微斗數、姓名學、塔羅、生命靈數與占星觀點，協助你理解自己、整理目前狀態，並釐清更適合的人生方向。",
  keywords: "命理諮詢, 八字分析, 紫微斗數, 塔羅占卜, 占星, 生命靈數, 姓名學, 光宇方向命理研究所",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "光宇方向命理研究所｜東西方命理整合分析",
    description: "結合八字、紫微斗數、姓名學、塔羅、生命靈數與占星觀點，協助你理解自己，整理目前狀態，釐清更適合的人生方向。",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full antialiased">
    <div className="pb-16 md:pb-0">{children}</div>
    <BottomNav />
  </body>
    </html>
  );
}
