import Link from "next/link";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const cases = [
  {
    id: "08-1",
    tag: "事業轉換期",
    tagline: "找到熱情所在，勇敢踏出下一步",
    quote: "一直猶豫是否該離職創業，透過分析才發現自己的優勢與時機，更有信心做出決定！",
    problem: "不知道是否該離職創業，擔心時機不對或能力不足。",
    tools: "八字分析 + 紫微斗數",
    focus: "事業運勢、天賦特質、流年時機、適合發展方向",
    result: "了解自己的優勢與最佳時機，順利轉換跑道創業成功。",
    feedback: "「報告內容非常詳細，讓我看見自己的價值與方向，感謝老師的專業與耐心！」",
  },
  {
    id: "08-2",
    tag: "感情反覆內耗",
    tagline: "看見關係模式，學會愛與被愛",
    quote: "總是在感情裡受傷，透過分析看見彼此互動模式，學會先愛自己，關係也慢慢改善。",
    problem: "總是遇到類似感情模式，關係反覆受傷、難以穩定。",
    tools: "塔羅占卜 + 生命靈數",
    focus: "感情互動模式、內在需求、吸引力法則、成長課題",
    result: "看見自己的相處盲點，調整溝通方式，關係更穩定和諧。",
    feedback: "「老師的分析很準確，讓我更理解自己，也更有力量去經營一段健康的關係！」",
  },
];

const detailLabels = ["困境", "工具", "重點", "結果"];

const cardContent = (c: (typeof cases)[number]) => (
  <>
    <div className="px-7 pt-7 pb-5" style={{ borderBottom: "1px solid rgba(166,124,61,0.1)" }}>
      <span
        className="inline-block text-xs font-semibold font-sans px-3 py-1 mb-3"
        style={{
          background: "rgba(166,124,61,0.08)",
          color: "#A67C3D",
          border: "1px solid rgba(166,124,61,0.18)",
        }}
      >
        {c.tag}
      </span>
      <p className="font-serif text-xl font-semibold" style={{ color: "#2B2622" }}>
        {c.tagline}
      </p>
      <div className="mt-4 pl-4" style={{ borderLeft: "2px solid rgba(166,124,61,0.28)" }}>
        <p className="text-sm font-sans italic leading-relaxed" style={{ color: "rgba(43,38,34,0.52)" }}>
          「{c.quote}」
        </p>
      </div>
    </div>

    <div className="px-7 py-5 space-y-3">
      {[c.problem, c.tools, c.focus, c.result].map((value, i) => (
        <div key={detailLabels[i]} className="flex items-start gap-3">
          <span
            className="text-xs font-semibold font-sans shrink-0 mt-0.5"
            style={{ color: "#A67C3D", minWidth: "36px" }}
          >
            {detailLabels[i]}
          </span>
          <p className="text-sm font-sans leading-relaxed" style={{ color: "rgba(43,38,34,0.68)" }}>
            {value}
          </p>
        </div>
      ))}

      <div
        className="mt-4 px-4 py-3"
        style={{
          background: "rgba(166,124,61,0.05)",
          border: "1px solid rgba(166,124,61,0.12)",
        }}
      >
        <p className="text-xs font-semibold font-sans mb-1" style={{ color: "#A67C3D" }}>客戶回饋</p>
        <p className="text-sm font-sans leading-relaxed" style={{ color: "rgba(43,38,34,0.65)" }}>
          {c.feedback}
        </p>
      </div>
    </div>
  </>
);

export default function CaseStudies() {
  return (
    <section className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">

        <AnimateIn direction="none">
          <div className="section-title">
            <h2>真實案例分享</h2>
            <div className="gold-diamond"><span /></div>
            <p>陪伴你走過迷惘，找到專屬的方向</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {cases.map((c, i) => (
            <AnimateIn
              key={c.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
            >
              <div
                className="overflow-hidden h-full"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(166,124,61,0.12)",
                }}
              >
                {cardContent(c)}
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn direction="none" delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-5">
            <p className="font-serif text-base" style={{ color: "rgba(43,38,34,0.45)" }}>
              每個故事，都是改變的開始
            </p>
            <Link href="/cases" className="btn-outline text-sm px-6 py-3 inline-flex items-center gap-2">
              查看更多案例
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
