/** 全站共用的聯絡資訊與導覽。改這裡就會同步到導覽列、頁尾與 CTA。 */

export const SITE = {
  name: "光宇方向命理研究所",
  nameEn: "GUANGYU METAPHYSICS INSTITUTE",
  tagline: "理解自己・找到方向・創造更好的選擇",
  lineUrl: "https://line.me/R/ti/p/%40enlite731",
  lineId: "@enlite731",
  email: "guangyu.pro@gmail.com",
  phone: "0978-586-343",
  igUrl: "https://instagram.com/enlite731",
  hours: "週一至週日 10:00–21:00",
} as const;

/** 維護模式：true 時首頁蓋上「系統更新維護作業中」遮罩，只留 LINE 按鈕。改成 false 即恢復。 */
export const MAINTENANCE = true;

export const NAV_LINKS = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於光宇" },
  { href: "/services", label: "服務項目" },
  { href: "/cases", label: "客戶案例" },
  { href: "/faq", label: "FAQ" },
] as const;

export const SERVICE_LINKS = [
  { href: "/services#s1", label: "八字分析" },
  { href: "/services#s2", label: "紫微斗數分析" },
  { href: "/services#s4", label: "塔羅占卜" },
  { href: "/services#theme", label: "主題分析" },
  { href: "/services#integrated", label: "整合報告" },
] as const;

/**
 * 真實案例。只放經當事人同意、去識別化後的內容。
 * 陣列為空時，首頁與案例頁會顯示「案例整理中」。
 */
export type CaseStudy = {
  id: string;
  tag: string;
  tagline: string;
  problem: string;
  tools: string;
  focus: string;
  result: string;
  feedback?: string;
};

export const CASES: CaseStudy[] = [];
