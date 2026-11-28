import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/config/content";

// 404 頁（2026-11 品牌視覺系列 E6：半掩木門暖光）。刪除此檔即恢復 Next.js 預設 404。
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden" style={{ background: "#FAF6EF" }}>
          <Image
            src="/images/heroes/not-found.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0 pointer-events-none md:hidden"
            style={{ background: "rgba(250,246,239,0.8)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,246,239,0.92) 0%, rgba(250,246,239,0.7) 38%, rgba(250,246,239,0) 62%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24 min-h-[640px] md:min-h-[720px] flex items-center">
            <div className="max-w-xl space-y-5 text-center md:text-left mx-auto md:mx-0">
              <p
                className="text-xs tracking-widest font-sans font-semibold"
                style={{ color: "#8A5D0A", letterSpacing: "0.22em" }}
              >
                404 · PAGE NOT FOUND
              </p>
              <h1
                className="font-serif text-4xl md:text-5xl font-semibold tracking-wide"
                style={{ color: "#2B2622" }}
              >
                找不到這個頁面
              </h1>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#6B6259" }}>
                頁面可能已經移動或下架。
                <br />
                可以回到首頁，或透過官方 LINE 直接詢問。
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-2">
                <a
                  href={SITE.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-12 px-7 rounded-full font-sans font-bold text-sm tracking-wider"
                  style={{ background: "#E0A019", color: "#1A1714" }}
                >
                  透過官方 LINE 預約
                </a>
                <Link href="/" className="font-sans text-sm font-medium underline underline-offset-4" style={{ color: "#8A5D0A" }}>
                  回到首頁
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
