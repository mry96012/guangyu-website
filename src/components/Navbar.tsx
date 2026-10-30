"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/ui/BrandMark";
import LineIcon from "@/components/ui/LineIcon";
import { NAV_LINKS, SITE } from "@/config/site";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b bg-bg/95 backdrop-blur-sm transition-colors duration-200",
        scrolled || open ? "border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} 首頁`}>
          <BrandMark className="size-9 text-ink" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-ink">光宇方向</span>
            <span className="mt-1 font-mono text-[0.625rem] text-text-muted">命理研究所 · GUANGYU</span>
          </span>
        </Link>

        <nav aria-label="主要導覽" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={cn(
                "relative flex h-16 items-center px-3 text-[0.9375rem] text-text-muted transition-colors duration-150 hover:text-ink",
                "aria-[current=page]:text-ink aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-0 aria-[current=page]:after:h-px aria-[current=page]:after:bg-ink"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden min-h-10 px-4 text-sm md:inline-flex"
          >
            <LineIcon className="size-4" />
            LINE 預約
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "關閉選單" : "開啟選單"}
            className="flex size-11 items-center justify-center lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span className={cn("absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-200", open && "translate-y-1.5 rotate-45")} />
              <span className={cn("absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-200", open && "-translate-y-1.5 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-bg lg:hidden">
        <nav aria-label="行動版導覽" className="mx-auto flex max-w-[1200px] flex-col px-5 pb-safe pt-2">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center gap-4 border-b border-border text-base text-ink"
            >
              <span className="font-mono text-xs text-text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </Link>
          ))}
          <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full">
            <LineIcon className="size-4" />
            加入 LINE 預約諮詢
          </a>
        </nav>
      </div>
    </header>
  );
}
