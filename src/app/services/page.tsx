import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務項目與定價 | 光宇方向命理研究所",
  description: "八字、紫微斗數、雙系統整合、姓名解析、塔羅、生命靈數與五行晶石搭配建議的價格、範圍與交付方式。",
};

const LINE_URL = "https://lin.ee/QRKXhFn";

const themes = [
  { label: "感情", desc: "感情模式、關係困擾與相處課題。", hint: "適合：感情停滯、重複同樣模式、想釐清緣分走向" },
  { label: "事業", desc: "職涯定位、發展方向、決策時機與天賦優勢。", hint: "適合：轉職迷惘、創業評估、不知道自己適合什麼" },
  { label: "財運", desc: "金錢觀、收支節奏與理財習慣的整理。", hint: "適合：收支起伏、想看懂自己的用錢模式" },
  { label: "人際", desc: "人際模式、職場關係與溝通方式。", hint: "適合：人際摩擦、職場困境、想改善溝通方式" },
  { label: "家庭", desc: "親子關係、家族課題、婚姻狀況與家庭和諧。", hint: "適合：親子衝突、婚姻困惑、家庭角色課題" },
  { label: "人生方向", desc: "人生目標、價值觀、轉職選擇與未來方向。", hint: "適合：感覺迷失、找不到意義、想重新定位自己" },
];

const services = [
  { id: "s1", label: "八", title: "八字命盤解析", price: "NT$1,280", scope: "單人・指定一年度重點・最多 2 個主題", desc: "從四柱與五行結構，整理性格特質、目前課題與指定年度的重點。", delivery: "PDF 報告", needs: "稱呼、性別、出生年月日時（註明國曆或農曆）、出生地" },
  { id: "s2", label: "紫", title: "紫微斗數命盤解析", price: "NT$1,480", scope: "單人・指定一年度重點・最多 2 個主題", desc: "從命宮與十二宮位，整理天賦、關係模式與指定年度的重點。", delivery: "PDF 報告", needs: "稱呼、性別、出生年月日時（註明國曆或農曆）、出生地" },
  { id: "s3", label: "合", title: "雙系統整合解析｜八字 × 紫微", price: "NT$2,380", scope: "單人・指定一年度重點・最多 2 個主題", desc: "同一份資料用兩套系統對照，整理彼此呼應與需要留意的地方。", delivery: "PDF 報告", needs: "稱呼、性別、出生年月日時（註明國曆或農曆）、出生地" },
  { id: "s4", label: "名", title: "姓名解析", price: "NT$450", scope: "單一姓名", desc: "解析現有姓名的結構與特質。不含取名、改名或多個名字比較。", delivery: "文字或 PDF", needs: "要解析的姓名" },
  { id: "s5", label: "塔", title: "塔羅主題占卜", price: "NT$300／題", scope: "一個問題一次占卜", desc: "針對當下一個具體問題，整理現況、阻礙與可以採取的行動。", delivery: "牌面圖與文字說明，不另製 PDF", needs: "稱呼與想問的問題" },
  { id: "s6", label: "數", title: "生命靈數・自我探索", price: "NT$680", scope: "單人", desc: "從出生日期的數字組合，整理性格特質、天賦與成長課題。", delivery: "文字或 PDF", needs: "稱呼與國曆出生年月日" },
  { id: "s7", label: "石", title: "五行晶石搭配建議", price: "訂製價", scope: "獨立服務或八字分析後加購", desc: "依五行需求提出晶石搭配建議。內容與價格個別確認後報價。", delivery: "個別確認", needs: "先在 LINE 說明需求" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #FAF6EF 0%, #F0E8D8 50%, #FAF6EF 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(166,124,61,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#A67C3D", letterSpacing: "0.22em" }}>
              SERVICES & PRICING
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#2B2622" }}>
              服務項目
            </h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>
              從你最在意的問題出發，找到適合的服務
            </p>
          </div>
        </section>

        {/* STEP 1: 選擇主題 */}
        <section className="py-20 section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "rgba(166,124,61,0.1)", color: "#A67C3D", border: "1px solid rgba(166,124,61,0.25)" }}>1</div>
              <h2 className="font-serif text-2xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>我想了解的主題是…</h2>
            </div>
            <p className="font-sans text-sm mb-10 pl-12" style={{ color: "#6E655A" }}>
              八字、紫微與雙系統可指定最多 2 個主題，作為解析重點
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {themes.map((t) => (
                <a
                  key={t.label}
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 space-y-3 transition-all duration-200 cursor-pointer card-lift"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.1)" }}
                >
                  <div className="flex items-center gap-3">
                    <p className="font-serif text-lg font-semibold" style={{ color: "#2B2622" }}>{t.label}分析</p>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>{t.desc}</p>
                  <p className="font-sans text-xs leading-relaxed p-3"
                    style={{ background: "rgba(166,124,61,0.04)", color: "rgba(166,124,61,0.7)", border: "1px solid rgba(166,124,61,0.12)" }}>
                    {t.hint}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold font-sans" style={{ color: "#A67C3D" }}>
                    <span>在 LINE 說明這個主題</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* STEP 2: 服務項目與價格 */}
        <section id="tools" className="py-20 section-alt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "rgba(166,124,61,0.1)", color: "#A67C3D", border: "1px solid rgba(166,124,61,0.25)" }}>2</div>
              <h2 className="font-serif text-2xl font-semibold" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>服務項目與價格</h2>
            </div>
            <p className="font-sans text-sm mb-10 pl-12" style={{ color: "#6E655A" }}>
              金額為新台幣。不確定選哪一項，可以先在 LINE 說明想了解的方向。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="card-lift p-6 space-y-4 flex flex-col"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(166,124,61,0.07)", border: "1px solid rgba(166,124,61,0.18)" }}>
                      <span className="font-serif text-lg font-semibold" style={{ color: "#A67C3D" }}>{s.label}</span>
                    </div>
                    <div>
                      <p className="font-serif text-lg font-semibold" style={{ color: "#2B2622" }}>{s.title}</p>
                      <p className="font-semibold text-base mt-0.5 whitespace-nowrap" style={{ color: "#8A5D0A" }}>{s.price}</p>
                    </div>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#6E655A" }}>{s.desc}</p>
                  <dl className="font-sans text-xs leading-relaxed space-y-1.5 flex-1" style={{ color: "#6E655A" }}>
                    <div><dt className="inline font-semibold" style={{ color: "#2B2622" }}>範圍：</dt><dd className="inline">{s.scope}</dd></div>
                    <div><dt className="inline font-semibold" style={{ color: "#2B2622" }}>交付：</dt><dd className="inline">{s.delivery}</dd></div>
                    <div><dt className="inline font-semibold" style={{ color: "#2B2622" }}>需要：</dt><dd className="inline">{s.needs}</dd></div>
                  </dl>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                    className="btn-line inline-flex items-center justify-center text-sm py-2.5">
                    透過 LINE 預約
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "交付形式", value: "以 PDF 或文字交付，不含語音、視訊與現場諮詢" },
                { label: "交付後釐清", value: "交付後 7 日內，可針對原內容提出一次文字釐清" },
                { label: "另計項目", value: "新題目、新對象或重新占卜另計" },
              ].map((e) => (
                <div key={e.label} className="flex items-start gap-4 p-4"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(166,124,61,0.12)" }}>
                  <div className="w-2 h-2 mt-1.5 shrink-0" style={{ background: "#A67C3D", opacity: 0.6 }} />
                  <div>
                    <p className="text-sm font-semibold font-sans" style={{ color: "#2B2622" }}>{e.label}</p>
                    <p className="text-xs font-sans mt-0.5" style={{ color: "#6E655A" }}>{e.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process + FAQ inline */}
        <section className="py-16 section-alt">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="font-serif text-xl font-semibold mb-6" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>預約流程</p>
                <div className="space-y-4">
                  {["LINE 詢問","確認範圍與資料","付款前確認","製作與審核","交付與釐清"].map((s, i) => (
                    <div key={s} className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0"
                        style={{ background: "rgba(166,124,61,0.08)", color: "#A67C3D", border: "1px solid rgba(166,124,61,0.22)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="font-sans text-sm font-semibold" style={{ color: "#2B2622" }}>{s}</p>
                      {i < 4 && <div className="flex-1 h-px" style={{ background: "rgba(166,124,61,0.12)" }} />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold mb-6" style={{ color: "#2B2622", letterSpacing: "0.04em" }}>常見問題 FAQ</p>
                <div className="space-y-4">
                  {[
                    { q: "多久收到？", a: "交付日期依個案內容，在付款前約定。" },
                    { q: "需要哪些資料？", a: "依服務項目不同，每張服務卡都列出需要的資料。出生時間不確定時，先提供已知資訊，可分析的範圍由 Axel 本人確認後說明。" },
                    { q: "可以退費嗎？",   a: "退費申請逐案由 Axel 本人確認。" },
                  ].map((faq) => (
                    <div key={faq.q} className="space-y-1">
                      <p className="text-sm font-semibold font-sans" style={{ color: "#2B2622" }}>Q：{faq.q}</p>
                      <p className="text-sm font-sans leading-relaxed" style={{ color: "#6E655A" }}>A：{faq.a}</p>
                    </div>
                  ))}
                </div>
                <Link href="/faq" className="mt-4 inline-block text-sm font-semibold link-hover" style={{ color: "#A67C3D" }}>
                  查看更多 FAQ →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
