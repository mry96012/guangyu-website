const steps = [
  {
    n: "01",
    title: "預約諮詢",
    icon: "📅",
    desc: "選擇服務項目與時段，完成預約與付款，收到預約確認通知。",
  },
  {
    n: "02",
    title: "填寫資料",
    icon: "📝",
    desc: "填寫個人基本資料與諮詢需求，協助老師更準確掌握你的狀況。",
  },
  {
    n: "03",
    title: "專業諮詢",
    icon: "💬",
    desc: "與老師進行一對一諮詢，深入分析命盤與課題，提供具體建議與方向。",
  },
  {
    n: "04",
    title: "報告製作",
    icon: "📊",
    desc: "老師整理專屬分析報告，內容包含重點解析與建議行動方向。",
  },
  {
    n: "05",
    title: "報告交付與追蹤",
    icon: "📨",
    desc: "交付電子報告，協助你落實建議，後續可提供延伸諮詢與追蹤服務。",
  },
];

const promises = [
  { icon: "🛡", label: "專業可靠", sub: "嚴謹分析・不誇大不恐嚇" },
  { icon: "🔒", label: "隱私保密", sub: "個資嚴格保護・安心諮詢" },
  { icon: "💛", label: "真誠陪伴", sub: "理解你的處境・給予支持與建議" },
  { icon: "🎯", label: "實用導向", sub: "提供具體方向・協助落實行動" },
];

export default function ServiceProcess() {
  return (
    <section className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>服務流程說明</h2>
          <div className="gold-diamond"><span /></div>
          <p>清楚的流程，讓你安心每一步</p>
        </div>
        <p className="text-center text-sm font-sans mb-14" style={{ color: "#6B7E90" }}>
          從預約諮詢到報告交付，我們用專業與細心，陪伴你完成一趟有收穫的命理旅程。
        </p>

        {/* Steps timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: "rgba(184,144,42,0.2)", zIndex: 0, margin: "0 10%" }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="flex flex-col items-center text-center space-y-4 relative z-10">
                {/* Arrow connector (mobile) */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute right-0 top-10 text-xs"
                    style={{ color: "#B8902A", right: "-12px" }}
                  >
                    ›
                  </div>
                )}
                {/* Step circle */}
                <div
                  className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
                  style={{
                    background: "#fff",
                    border: "2px solid rgba(184,144,42,0.3)",
                    boxShadow: "0 4px 16px rgba(184,144,42,0.12)",
                  }}
                >
                  <span className="text-xl">{s.icon}</span>
                  <span
                    className="text-xs font-bold font-sans mt-0.5"
                    style={{ color: "#B8902A" }}
                  >
                    {s.n}
                  </span>
                </div>
                <p className="font-serif font-semibold text-base" style={{ color: "#1A2D45" }}>{s.title}</p>
                <p className="text-xs font-sans leading-relaxed" style={{ color: "#5A6E82" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promise badges */}
        <div
          className="mt-16 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ background: "#fff", border: "1px solid rgba(184,144,42,0.12)" }}
        >
          <div className="md:col-span-4 mb-2">
            <p className="font-serif text-base font-semibold text-center" style={{ color: "#1A2D45" }}>
              我們的服務承諾
            </p>
            <p className="text-xs text-center font-sans mt-1" style={{ color: "#6B7E90" }}>
              尊重、誠信、專業、保密，是我們對每一位客戶的基本承諾。
            </p>
          </div>
          {promises.map((p) => (
            <div key={p.label} className="flex items-center gap-3">
              <span className="text-xl">{p.icon}</span>
              <div>
                <p className="text-sm font-semibold font-sans" style={{ color: "#1A2D45" }}>{p.label}</p>
                <p className="text-xs font-sans" style={{ color: "#6B7E90" }}>{p.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="p-5 rounded-xl space-y-2"
            style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)" }}
          >
            <p className="font-semibold font-sans text-sm" style={{ color: "#1A2D45" }}>📋 預約方式</p>
            <ul className="text-xs font-sans space-y-1" style={{ color: "#5A6E82" }}>
              <li>・官方網站預約</li>
              <li>・LINE 官方帳號預約</li>
              <li>・填寫表單預約</li>
            </ul>
          </div>
          <div
            className="p-5 rounded-xl space-y-2"
            style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)" }}
          >
            <p className="font-semibold font-sans text-sm" style={{ color: "#1A2D45" }}>🕐 服務時間</p>
            <p className="text-xs font-sans" style={{ color: "#5A6E82" }}>週一至週日</p>
            <p className="text-sm font-semibold font-sans" style={{ color: "#B8902A" }}>10:00 – 21:00（採預約制）</p>
          </div>
          <div
            className="p-5 rounded-xl space-y-2"
            style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.08)" }}
          >
            <p className="font-semibold font-sans text-sm" style={{ color: "#1A2D45" }}>❓ 注意事項</p>
            <ul className="text-xs font-sans space-y-1" style={{ color: "#5A6E82" }}>
              <li>・諮詢前請準時填寫資料，確保分析準度</li>
              <li>・諮詢過程錄音僅供個人學習，請勿外傳</li>
              <li>・若需更改預約，請提前 24 小時告知</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
