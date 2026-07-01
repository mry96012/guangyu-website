import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "客戶案例 | 光宇方向命理研究所",
  description: "真實客戶案例分享，透過命理分析找到人生方向的真實故事。",
};

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const cases = [
  {
    tag: "事業轉換期",
    tagColor: "#1A2D45",
    emoji: "👔",
    tagline: "找到熱情所在，勇敢踏出下一步",
    situation: "在同一家公司工作了 6 年，每天都覺得提不起勁，卻又害怕「萬一失敗怎麼辦」。想創業但不知道現在是不是好時機，也不確定自己有沒有那個能力。",
    insight: "透過八字分析，發現自己的天賦優勢在於獨立決策與執行力，而非服從型的組織環境。流年分析顯示當年下半年有貴人運加持，是少見的適合轉換的時間窗口。",
    change: "諮詢後 3 個月決定離職，半年後正式創業。因為知道自己的優勢在哪、時機是否合適，心態比以前穩定很多，少走了很多冤枉路。",
    tools: "八字分析 + 紫微斗數",
    outcome: "成功轉職創業，目前穩定經營中",
    feedback: "「報告內容非常詳細，讓我看見自己的價值與方向，老師的專業讓我在關鍵時刻有了底氣去做決定！」",
  },
  {
    tag: "感情反覆內耗",
    tagColor: "#C0453A",
    emoji: "💗",
    tagline: "看見關係模式，學會愛與被愛",
    situation: "三段感情都是類似的結局：對方起初很熱情，後來卻逐漸冷淡。自己每次都付出很多，卻總是那個先受傷的人。開始懷疑是不是自己有什麼問題。",
    insight: "生命靈數與塔羅分析揭示了她的「照顧者人格」——習慣把對方的需求放在自己之前，在關係中容易失去自我。這種模式會吸引來需要被照顧的對象，但卻不會吸引平等互動的伴侶。",
    change: "開始練習在關係中表達自己的需求，不再因為害怕衝突而壓抑自己。花了約半年時間調整，現在的關係比過去任何一段都平等、穩定。",
    tools: "塔羅占卜 + 生命靈數",
    outcome: "建立起健康穩定的關係，不再重蹈覆轍",
    feedback: "「老師的分析很準確，終於搞清楚我為什麼一直吸引同一類型的人。有了這個理解，才能真正改變。」",
  },
  {
    tag: "財運與投資決策",
    tagColor: "#B8902A",
    emoji: "💰",
    tagline: "了解財務週期，做出更明智的決策",
    situation: "手上有一筆資金想投資，但不確定現在是不是好時機。朋友圈有人說大漲，也有人說要謹慎。自己沒有判斷依據，焦慮了快兩個月。",
    insight: "八字流年分析顯示當年為「伏吟年」，財星受制，不適合大規模投資或冒進決策。建議以保守守成為主，將資金分散、降低單次風險。",
    change: "按照建議保守操作，那一年確實出現了幾次市場震盪，同期朋友重倉操作損失慘重。因為提前知道自己的財運狀態，做了保守配置，整體資產反而略有增長。",
    tools: "八字分析 + 流年運勢",
    outcome: "避開風險期，資產安全穩健",
    feedback: "「老師的分析非常實用，讓我在做財務決策時有依據，不再憑感覺。很慶幸當時有諮詢！」",
  },
  {
    tag: "職場人際困境",
    tagColor: "#4A9E6E",
    emoji: "🤝",
    tagline: "看清人際模式，建立更好的關係",
    situation: "進入新公司半年，和幾位同事關係一直處不好。自己覺得已經很努力配合，但還是常常被誤解，甚至被排擠。開始懷疑是不是自己的問題，或是這個環境根本不適合自己。",
    insight: "紫微斗數分析發現她的「命宮化忌入交友宮」，代表人際課題是此生的重要功課，容易在互動中因溝通方式造成誤解。西洋占星補充說明她傾向直接表達，在較保守的組織文化中容易顯得強勢。",
    change: "了解自己的溝通風格後，開始練習在職場上加入更多「過渡語言」，不再直接衝突。3 個月後，主管回饋她的協作能力明顯改善，和兩位原本緊張的同事也建立了工作默契。",
    tools: "紫微斗數 + 西洋占星",
    outcome: "職場關係明顯改善，升遷機會也隨之而來",
    feedback: "「讓我更理解自己的溝通盲點，也知道如何在不同環境中調整表達方式，非常實用！」",
  },
];

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,144,42,0.08) 0%, transparent 60%)" }} />
          <div className="relative max-w-2xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>CASE STUDIES</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide" style={{ color: "#1A2D45" }}>客戶案例</h1>
            <div className="gold-diamond max-w-xs mx-auto"><span /></div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>
              每個人都有屬於自己的困境與轉機。這些故事，也許有你的影子。
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 section-light">
          <div className="max-w-3xl mx-auto px-6">
            <div className="rounded-xl px-5 py-4 text-xs font-sans leading-relaxed"
              style={{ background: "rgba(184,144,42,0.05)", border: "1px solid rgba(184,144,42,0.15)", color: "#7A8E9E" }}>
              ℹ️ 以下案例來自真實諮詢個案，內容經客戶同意分享，並已調整足以識別身份的細節（姓名、地點與部分時間資訊）以保護隱私。目的是讓你在預約前更清楚了解光宇方向的諮詢方式，而非預測式的「算命結果」。
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="pb-20 section-light">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            {cases.map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden"
                style={{ background: "#fff", border: `1px solid ${c.tagColor}20`, boxShadow: "0 4px 24px rgba(26,45,69,0.07)" }}>

                {/* Case Header */}
                <div className="px-7 pt-7 pb-6"
                  style={{ background: `linear-gradient(135deg, ${c.tagColor}08 0%, transparent 60%)` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{c.emoji}</span>
                    <span className="text-xs font-bold font-sans px-3 py-1.5 rounded-full"
                      style={{ background: c.tagColor, color: "#fff" }}>
                      {c.tag}
                    </span>
                    <span className="text-xs font-sans px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(184,144,42,0.1)", color: "#8A6A1A", border: "1px solid rgba(184,144,42,0.2)" }}>
                      {c.tools}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold" style={{ color: c.tagColor }}>{c.tagline}</h2>
                </div>

                {/* Story flow: 困境 → 洞察 → 改變 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
                  style={{ borderColor: "rgba(26,45,69,0.07)" }}>
                  {[
                    { step: "01", label: "當時的困境", icon: "😔", content: c.situation, bg: "rgba(26,45,69,0.02)" },
                    { step: "02", label: "諮詢後的洞察", icon: "💡", content: c.insight, bg: "rgba(184,144,42,0.03)" },
                    { step: "03", label: "之後的改變", icon: "🌱", content: c.change, bg: "rgba(74,158,110,0.03)" },
                  ].map((s) => (
                    <div key={s.step} className="px-6 py-6 space-y-3" style={{ background: s.bg }}>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs font-bold tracking-widest" style={{ color: "#B8902A" }}>{s.step}</span>
                        <span className="text-base">{s.icon}</span>
                        <span className="font-sans text-xs font-semibold" style={{ color: "#5A6E82" }}>{s.label}</span>
                      </div>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#4A5E72" }}>{s.content}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom: outcome + feedback */}
                <div className="px-7 py-5 flex flex-col md:flex-row items-start md:items-center gap-4"
                  style={{ background: "rgba(26,45,69,0.02)", borderTop: "1px solid rgba(26,45,69,0.07)" }}>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm">✅</span>
                    <span className="text-xs font-semibold font-sans" style={{ color: "#4A9E6E" }}>{c.outcome}</span>
                  </div>
                  <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(26,45,69,0.1)" }} />
                  <div className="flex-1 rounded-xl px-4 py-3"
                    style={{ background: "rgba(184,144,42,0.05)", border: "1px solid rgba(184,144,42,0.12)" }}>
                    <p className="text-xs font-sans italic leading-relaxed" style={{ color: "#6B5C30" }}>
                      💬 {c.feedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 section-alt">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-3xl font-semibold" style={{ color: "#1A2D45" }}>
              你的故事，也可以從這裡開始
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: "#5A6E72" }}>
              每個人都有屬於自己的命盤與課題。<br />光宇方向陪你看懂自己，找到屬於你的方向。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 inline-flex">
                📅 加入 LINE 預約諮詢
              </a>
              <a href="/experience" className="btn-outline px-8 py-4 inline-flex">
                ✦ 先體驗免費命盤
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
