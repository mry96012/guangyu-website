import type { MetadataRoute } from "next";

const BASE_URL = "https://www.guangyu888.tw";

// 產生 /robots.txt：允許所有搜尋引擎爬取全站，並告知 sitemap 位置
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
