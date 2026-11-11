import type { Metadata } from "next";

export const SITE_URL = "https://www.guangyu888.tw";
export const SITE_NAME = "光宇方向命理研究所";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "zh_TW",
      type: "website",
    },
  };
}
