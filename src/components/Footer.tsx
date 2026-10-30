import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/config/site";

const contact = [
  { label: "LINE", value: SITE.lineId, href: SITE.lineUrl },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "電話", value: SITE.phone, href: `tel:${SITE.phone.replace(/-/g, "")}` },
  { label: "IG", value: "@enlite731", href: SITE.igUrl },
  { label: "時間", value: SITE.hours },
];

const linkCls = "text-[0.9375rem] text-on-ink-muted transition-colors duration-150 hover:text-on-ink";

export default function Footer() {
  return (
    <footer className="on-ink border-t border-white/10 bg-ink text-on-ink">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <BrandMark className="size-11 text-light" hole="var(--color-ink)" />
              <div>
                <p className="font-serif text-lg font-semibold">光宇方向</p>
                <p className="mt-1 font-mono text-[0.625rem] text-on-ink-muted">命理研究所 · GUANGYU</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-on-ink-muted">
              找到方向，是人生的光。結合東西方命理，透過專業分析與溫暖陪伴，協助你理解自己、做出更適合自己的選擇。
            </p>
          </div>

          <nav aria-label="頁尾導覽" className="md:col-span-2">
            <h2 className="font-mono text-xs uppercase text-gold-light">網站</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="服務項目" className="md:col-span-2">
            <h2 className="font-mono text-xs uppercase text-gold-light">服務</h2>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase text-gold-light">聯絡</h2>
            <dl className="mt-5 grid grid-cols-[3.5rem_1fr] gap-y-3">
              {contact.map((c) => (
                <div key={c.label} className="contents">
                  <dt className="font-mono text-xs leading-6 text-on-ink-muted">{c.label}</dt>
                  <dd className="break-all leading-6">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={linkCls}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-[0.9375rem] text-on-ink-muted">{c.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <Link href="/privacy" className="transition-colors duration-150 hover:text-on-ink">隱私權與個資政策</Link>
        </div>
      </div>
    </footer>
  );
}
