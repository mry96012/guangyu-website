import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "光宇方向命理研究所 | 東西方命理整合・專業顧問式服務",
  description:
    "透過八字、紫微斗數、塔羅占卜、生命靈數與占星分析，協助你理解人生課題，做出更適合自己的選擇。看懂自己・理解處境・找到方向。",
  keywords: "命理, 八字, 紫微斗數, 塔羅, 占星, 生命靈數, 命理諮詢, 光宇方向",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "光宇方向命理研究所",
    description: "東西方命理整合 × 現代專業顧問式陪伴",
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
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
