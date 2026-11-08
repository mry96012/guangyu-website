import type { Metadata } from "next";
import { SITE } from "@/config/content";

// 正式網址（與 sitemap.ts 一致）。所有 canonical、分享網址都以此為準。
export const BASE_URL = "https://www.guangyu888.tw";

// 分享縮圖（app/opengraph-image.jpg，1200×630）。子頁自訂 openGraph 時不會自動繼承，所以明確帶入
const SHARE_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "光宇方向命理研究所｜八字・紫微斗數・塔羅・占星整合諮詢",
};

/**
 * 每一頁的 SEO 與分享設定：
 * - canonical：告訴 Google 這頁的正式網址，避免 www／非 www、帶參數網址被當成重複內容分散權重
 * - openGraph / twitter：LINE、Facebook、IG、Threads 貼連結時顯示「這一頁」的標題與說明
 *   （附上統一的分享縮圖）
 */
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.nameChinese,
      locale: "zh_TW",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
