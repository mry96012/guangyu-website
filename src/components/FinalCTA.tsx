import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import LineIcon from "@/components/ui/LineIcon";
import { SITE } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="on-ink bg-ink text-on-ink">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-24 lg:grid-cols-12 lg:px-8 lg:py-28">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-xs uppercase text-gold-light">04 — Contact</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight">
            準備好了解自己，
            <br />
            找到方向了嗎？
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-on-ink-muted">加入 LINE 官方帳號，預約一次屬於你的整合諮詢。</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-paper">
              <LineIcon className="size-[18px]" />
              加入 LINE 好友
            </a>
            <a href={`mailto:${SITE.email}`} className="link-arrow text-on-ink decoration-on-ink-muted/50 hover:decoration-on-ink">
              或寄 Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
          <div className="flex items-center gap-5 border border-white/15 p-5">
            <div className="relative size-24 shrink-0 bg-white p-1.5">
              <Image src="/qrcode-line.png" alt={`LINE 官方帳號 ${SITE.lineId} 的 QR Code`} fill sizes="96px" className="object-contain p-1.5" />
            </div>
            <div>
              <p className="text-base font-medium">LINE 官方帳號</p>
              <p className="mt-1 font-mono text-sm text-on-ink-muted">{SITE.lineId}</p>
              <p className="mt-3 text-sm text-on-ink-muted">用手機相機掃描加入</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
