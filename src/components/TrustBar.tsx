const trusts = [
  {
    icon: "⊕",
    title: "專業顧問式服務",
    desc: "結構化命理分析・清楚整理方向",
  },
  {
    icon: "◈",
    title: "多元工具整合",
    desc: "多角度觀察，協助你更完整理解自己",
  },
  {
    icon: "◯",
    title: "隱私安全保障",
    desc: "嚴格保護個人資料・絕不外洩",
  },
  {
    icon: "✦",
    title: "完整書面報告",
    desc: "結構清晰・方便理解與回顧",
  },
];

export default function TrustBar() {
  return (
    <section
      className="relative py-6 md:py-8 border-y"
      style={{
        background: "rgba(24,47,74,0.6)",
        borderColor: "rgba(200,166,58,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/15">
          {trusts.map((t) => (
            <div key={t.title}
              className="flex items-center gap-3 px-4 md:px-8 py-3 md:py-0 group">
              <span className="text-gold text-xl shrink-0 group-hover:scale-110 transition-transform">
                {t.icon}
              </span>
              <div>
                <p className="font-serif text-sm font-semibold text-cream tracking-wide">
                  {t.title}
                </p>
                <p className="text-cream/50 text-xs font-sans mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
