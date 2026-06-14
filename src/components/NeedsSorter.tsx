import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const needs = [
  {
    id: "04-1",
    emoji: "💗",
    title: "感情",
    color: "#E8697A",
    bg: "rgba(232,105,122,0.06)",
    border: "rgba(232,105,122,0.2)",
    desc: "想了解感情發展、關係困擾，另一半的想法，或是複合可能，更理解自己的感情模式與課題。",
  },
  {
    id: "04-2",
    emoji: "💼",
    title: "事業",
    color: "#4A7CC2",
    bg: "rgba(74,124,194,0.06)",
    border: "rgba(74,124,194,0.2)",
    desc: "想知道職涯發展、工作選擇，適合的發展方向與優勢，突破瓶頸、找到下一步方向。",
  },
  {
    id: "04-3",
    emoji: "💰",
    title: "財運",
    color: "#B8902A",
    bg: "rgba(184,144,42,0.06)",
    border: "rgba(184,144,42,0.2)",
    desc: "想了解財運狀況、收入來源，投資理財方向、賺錢機會，或如何改善金錢流動與生活品質。",
  },
  {
    id: "04-4",
    emoji: "👥",
    title: "人際",
    color: "#4A9E6E",
    bg: "rgba(74,158,110,0.06)",
    border: "rgba(74,158,110,0.2)",
    desc: "想改善人際關係、職場互動，合作關係、貴人運與小人，更理解自己在人際中的角色與定位。",
  },
  {
    id: "04-5",
    emoji: "🏡",
    title: "家庭",
    color: "#8B6CC2",
    bg: "rgba(139,108,194,0.06)",
    border: "rgba(139,108,194,0.2)",
    desc: "想了解家庭關係、親子互動，家族議題、婚姻狀況，找到更和諧、穩定的相處方式。",
  },
  {
    id: "04-6",
    emoji: "🧭",
    title: "人生方向",
    color: "#B8902A",
    bg: "rgba(184,144,42,0.06)",
    border: "rgba(184,144,42,0.2)",
    desc: "想釐清人生目標、價值觀，未來發展方向、轉職或重大選擇，找回內心的方向與力量。",
  },
];

export default function NeedsSorter() {
  return (
    <section className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>你最近最想釐清什麼？</h2>
          <div className="gold-diamond"><span /></div>
          <p>每個人生階段都會遇到不同的課題，點選你想釐清的需求，我們將為你推薦最適合的分析服務</p>
        </div>

        {/* How to use tip */}
        <div
          className="mb-10 px-5 py-3 rounded-lg inline-flex items-center gap-3"
          style={{ background: "rgba(184,144,42,0.08)", border: "1px solid rgba(184,144,42,0.2)" }}
        >
          <span style={{ color: "#B8902A" }}>💡 如何使用？</span>
          <span className="text-sm font-sans" style={{ color: "#4A5E72" }}>
            選擇你目前最想了解或整理的主題，系統將為你推薦適合的命理工具與服務方案。
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {needs.map((n) => (
            <div
              key={n.id}
              className="card-lift rounded-2xl p-6 space-y-4 group"
              style={{ background: "#fff", border: `1px solid rgba(26,45,69,0.08)`, boxShadow: "0 2px 10px rgba(26,45,69,0.04)" }}
            >
              {/* Icon */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: n.bg, border: `1px solid ${n.border}` }}
                >
                  {n.emoji}
                </div>
                <p className="font-serif text-xl font-semibold" style={{ color: n.color }}>{n.title}</p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: `${n.border}` }} />

              {/* Desc */}
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#5A6E82" }}>{n.desc}</p>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                style={{ color: n.color }}
              >
                查看推薦服務 →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom tips */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="px-6 py-4 rounded-xl flex items-start gap-3"
            style={{ background: "rgba(184,144,42,0.05)", border: "1px solid rgba(184,144,42,0.12)" }}
          >
            <span className="text-xl">💡</span>
            <div>
              <p className="text-sm font-semibold font-sans" style={{ color: "#1A2D45" }}>小提醒</p>
              <p className="text-xs font-sans mt-1" style={{ color: "#5A6E82" }}>
                如果你同時有多個困擾，建議先選擇「目前最想釐清」的主題。
                也可以從免費體驗開始，先了解自己的整體狀態。
              </p>
            </div>
          </div>
          <div
            className="px-6 py-4 rounded-xl flex items-center justify-between"
            style={{ background: "#1A2D45" }}
          >
            <div>
              <p className="text-sm font-semibold font-sans text-white">不知道怎麼選？</p>
              <p className="text-xs font-sans mt-1 text-white/60">點我與老師聊聊，獲得專業建議</p>
            </div>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs px-4 py-2.5 shrink-0"
            >
              → 諮詢老師
            </a>
          </div>
        </div>

        {/* Footer quote */}
        <p className="mt-8 text-center text-sm font-sans italic" style={{ color: "#8A9BAC" }}>
          每個問題，都值得被理解；每個選擇，都值得被支持。
        </p>
      </div>
    </section>
  );
}
