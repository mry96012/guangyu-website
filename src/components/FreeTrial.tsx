import Link from "next/link";

const LINE_URL = "https://line.me/R/ti/p/%40enlite731";

const benefits = [
  "快速了解你的命盤結構",
  "發現你自己的天賦問題",
  "掌握近期生活重點方向",
  "作為深入分析的參考",
];

const outputItems = [
  { icon: "🌿", label: "五行能量分析", sub: "了解你的五行強弱與平衡狀態" },
  { icon: "👤", label: "性格特質解析", sub: "先天性格、思維模式與優勢特質" },
  { icon: "📈", label: "事業財運方向", sub: "適合發展的領域與財運趨勢" },
  { icon: "💗", label: "感情關係建議", sub: "感情方式、課題與改善方向" },
  { icon: "🧭", label: "當前運勢重點", sub: "近期運勢提醒與行動建議" },
];

export default function FreeTrial() {
  return (
    <section className="py-20" style={{ background: "#1A2D45" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans tracking-widest mb-3" style={{ color: "rgba(184,144,42,0.7)" }}>
            FREE BAZI EXPERIENCE
          </p>
          <h2 className="font-serif text-3xl font-semibold text-white tracking-wide">免費命盤體驗區</h2>
          <div className="gold-diamond mt-3 mb-4"><span /></div>
          <p className="text-sm font-sans" style={{ color: "rgba(255,255,255,0.55)" }}>
            先了解自己，才更知道方向
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Steps + Form area */}
          <div className="space-y-8">
            {/* 3 Steps */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "1", title: "填寫基本資料", sub: "值需提供出生資訊" },
                { n: "2", title: "確認送出",     sub: "系統將立即為你排盤" },
                { n: "3", title: "查看命盤摘要", sub: "快速了解你的命理重點" },
              ].map((s) => (
                <div key={s.n} className="text-center space-y-2">
                  <div
                    className="w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold text-sm font-serif"
                    style={{ background: "#B8902A", color: "#fff" }}
                  >
                    {s.n}
                  </div>
                  <p className="text-xs font-semibold font-sans text-white">{s.title}</p>
                  <p className="text-xs font-sans" style={{ color: "rgba(255,255,255,0.62)" }}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div
              className="rounded-2xl p-7 space-y-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,144,42,0.2)" }}
            >
              <p className="font-serif text-base text-white font-semibold">填寫基本資料</p>
              <p className="text-xs font-sans" style={{ color: "rgba(255,255,255,0.62)" }}>
                資料安全保護，僅用於命盤分析
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "姓名（暱稱）", placeholder: "請輸入" },
                  { label: "性別",         placeholder: "請選擇", type: "select", opts: ["女性", "男性"] },
                  { label: "出生日期",     placeholder: "西元年 / 月 / 日", type: "date" },
                  { label: "出生時間",     placeholder: "選擇（盡量準確）", type: "select", opts: ["不確定", "子時 23:00–01:00", "丑時 01:00–03:00", "寅時 03:00–05:00"] },
                  { label: "出生地點",     placeholder: "請輸入城市或縣市" },
                ].map((f) => {
                  const fieldId = `free-trial-${f.label}`;
                  return (
                  <div key={f.label} className={f.label === "出生地點" ? "sm:col-span-2" : ""}>
                    <label htmlFor={fieldId} className="block text-xs font-sans mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {f.label}
                    </label>
                    {f.type === "select" ? (
                      <select
                        id={fieldId}
                        disabled
                        className="w-full px-4 py-3 text-sm rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(184,144,42,0.25)",
                          color: "rgba(255,255,255,0.4)",
                        }}
                      >
                        <option>{f.placeholder}</option>
                        {f.opts?.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    ) : f.type === "date" ? (
                      <input
                        id={fieldId}
                        type="text"
                        disabled
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 text-sm rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(184,144,42,0.25)",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      />
                    ) : (
                      <input
                        id={fieldId}
                        type="text"
                        disabled
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 text-sm rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(184,144,42,0.25)",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      />
                    )}
                  </div>
                  );
                })}
              </div>
              <Link
                href="/experience"
                className="btn-gold w-full justify-center mt-2 text-sm"
                style={{ display: "flex" }}
              >
                ✦ 立即體驗（免費）
              </Link>
            </div>
          </div>

          {/* Right: What you get */}
          <div className="space-y-6">
            <div>
              <p className="font-serif text-xl font-semibold text-white mb-1">命盤摘要內容預覽</p>
              <div className="h-px w-12" style={{ background: "#B8902A" }} />
            </div>

            <div className="space-y-4">
              {outputItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{ background: "rgba(184,144,42,0.12)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-sans text-white">{item.label}</p>
                    <p className="text-xs font-sans mt-0.5" style={{ color: "rgba(255,255,255,0.62)" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="space-y-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="text-xs font-bold" style={{ color: "#06C755" }}>✓</span>
                  <p className="text-sm font-sans" style={{ color: "rgba(255,255,255,0.65)" }}>{b}</p>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div
              className="p-4 rounded-xl space-y-1.5 text-xs font-sans"
              style={{ background: "rgba(184,144,42,0.07)", border: "1px solid rgba(184,144,42,0.18)" }}
            >
              <p style={{ color: "#E8D08A" }}>注意事項</p>
              <p style={{ color: "rgba(255,255,255,0.62)" }}>・出生時間越準確，分析越精準</p>
              <p style={{ color: "rgba(255,255,255,0.62)" }}>・若不清楚出生時間，可填寫略時或選擇「不確定」</p>
              <p style={{ color: "rgba(255,255,255,0.62)" }}>・摘要為系統自動分析，完整解讀建議預約專業諮詢</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center space-y-4">
          <p className="font-serif text-xl text-white">每個人的命盤都是一張專屬地圖</p>
          <p className="text-sm font-sans" style={{ color: "rgba(255,255,255,0.5)" }}>
            光宇方向，陪你看懂自己，走出屬於你的光明道路。
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/experience" className="btn-gold text-sm px-8 py-3">
              開始體驗 →
            </Link>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-line text-sm px-8 py-3">
              立即加入 LINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
