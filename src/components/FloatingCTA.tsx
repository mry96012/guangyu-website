"use client";
import { useEffect, useState } from "react";
import LineIcon from "@/components/ui/LineIcon";
import { SITE } from "@/config/site";
import { cn } from "@/lib/cn";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="加入 LINE 預約諮詢"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "btn-primary fixed bottom-safe right-safe z-30 shadow-lg transition-[opacity,transform] duration-200 ease-out md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <LineIcon className="size-[18px]" />
      LINE 預約
    </a>
  );
}
