const googleReviews = [
  {
    name: "陳 O 芸",
    service: "事業諮詢",
    tag: "工作方向",
    date: "2024/04/12",
    title: "方向清楚，心更踏實",
    content: "老師的分析很有條理，不只是看到問題，更幫助我理解背後的原因，讓我知道接下來可以往哪裡走，謝謝老師！",
  },
  {
    name: "林 O 瑄",
    service: "感情諮詢",
    tag: "感情關係",
    date: "2024/03/28",
    title: "感情困擾得到很大幫助",
    content: "一直困惑為什麼關係總是重複類似的狀況，透過老師的分析，讓我看見了自己的互動模式，也學會如何調整自己，現在的關係穩定多了！",
  },
  {
    name: "王 O 傑",
    service: "人生方向諮詢",
    tag: "人生方向",
    date: "2024/04/18",
    title: "專業又溫暖的陪伴",
    content: "報告內容非常詳細，文字清楚易懂，而且老師很有耐心解答問題，讓我在迷惘時有了方向與信心，真的很推薦！",
  },
];

const lineReviews = [
  {
    content: "老師的分析很準確，尤其是對我的性格與優勢的描述，完全說到我心坎裡！看完報告後更了解自己了，謝謝老師～",
    time: "14:30",
    avatar: "🧑‍💼",
  },
  {
    content: "困擾很久的事，老師分析後讓我豁然開朗，不只是看見問題，還給我具體的建議，真的受益良多！",
    time: "20:45",
    avatar: "👩‍💻",
  },
  {
    content: "整份報告很有系統，內容也很實用，會想再回來做流年分析，持續追蹤自己的人生方向～",
    time: "11:20",
    avatar: "🧑",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="section-title">
          <h2>客戶評價區</h2>
          <div className="gold-diamond"><span /></div>
          <p>真實回饋，來自客戶的信任</p>
        </div>
        <p className="text-center text-sm font-sans mb-12" style={{ color: "#6B7E90" }}>
          每一則評價，都是我們持續前進的動力，也希望陪伴更多人找到屬於自己的方向。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Google rating summary */}
          <div
            className="lg:col-span-1 rounded-2xl p-7 flex flex-col items-center justify-center text-center space-y-4"
            style={{
              background: "#fff",
              border: "1px solid rgba(184,144,42,0.15)",
              boxShadow: "0 2px 12px rgba(26,45,69,0.05)",
            }}
          >
            <div style={{ width: "40px", height: "40px" }}>
              {/* Google G logo */}
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <p
                className="font-serif font-bold"
                style={{ fontSize: "3.5rem", color: "#B8902A", lineHeight: 1 }}
              >
                5.0
              </p>
              <div className="flex justify-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-sans" style={{ color: "#6B7E90" }}>來自 128 則評論</p>
              <div className="mt-3 space-y-1">
                {[128, 0, 0, 0, 0].map((count, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs font-sans w-8 text-right" style={{ color: "#8A9BAC" }}>{5 - i} 星</span>
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "#EDE3D6" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: i === 0 ? "100%" : "0%",
                          background: "#B8902A",
                        }}
                      />
                    </div>
                    <span className="text-xs font-sans w-6" style={{ color: "#8A9BAC" }}>{count}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://google.com/search?q=光宇方向命理研究所"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans px-4 py-2 rounded-full border transition-colors duration-200"
              style={{ color: "#4285F4", borderColor: "rgba(66,133,244,0.3)" }}
            >
              🌐 查看 Google 評價
            </a>
          </div>

          {/* Google review cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {googleReviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-5 flex flex-col gap-3"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(26,45,69,0.08)",
                  boxShadow: "0 2px 10px rgba(26,45,69,0.04)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="self-start text-xs font-sans px-2.5 py-0.5 rounded-full"
                  style={{ background: "rgba(184,144,42,0.10)", color: "#8A6A1A", border: "1px solid rgba(184,144,42,0.2)" }}>
                  {r.tag}
                </span>
                <p className="font-serif text-base font-semibold" style={{ color: "#1A2D45" }}>{r.title}</p>
                <p className="text-sm font-sans leading-relaxed flex-1" style={{ color: "#5A6E72" }}>{r.content}</p>
                <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: "rgba(26,45,69,0.06)" }}>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-semibold"
                    style={{ background: "#1A2D45", color: "#C8A63A", fontSize: "0.65rem" }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold font-sans" style={{ color: "#1A2D45" }}>{r.name}</p>
                    <p className="text-xs font-sans" style={{ color: "#8A9BAC" }}>{r.service} · {r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINE Reviews */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "rgba(184,144,42,0.2)" }} />
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#06C755">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="text-sm font-semibold font-sans" style={{ color: "#1A2D45" }}>LINE 客戶回饋（節錄）</span>
            </div>
            <div className="h-px flex-1" style={{ background: "rgba(184,144,42,0.2)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lineReviews.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 space-y-3"
                style={{ background: "#fff", border: "1px solid rgba(26,45,69,0.07)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{r.avatar}</span>
                  <div className="flex-1 h-px" style={{ background: "#EDE3D6" }} />
                  <span className="text-xs font-sans" style={{ color: "#8A9BAC" }}>{r.time}</span>
                </div>
                <p className="text-sm font-sans leading-relaxed" style={{ color: "#4A5E72" }}>{r.content}</p>
                <div className="flex justify-end">
                  <span className="text-sm" style={{ color: "#06C755" }}>❤️ {10 + i * 5}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 py-6 px-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(184,144,42,0.06)", border: "1px solid rgba(184,144,42,0.18)" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <p className="font-sans text-sm" style={{ color: "#4A5E72" }}>
              感謝每一位客戶的信任與支持，光宇方向將持續提供專業、誠信、用心的服務，
              陪伴你在人生路上走得更穩、更清楚。
            </p>
          </div>
          <a
            href="https://google.com/search?q=光宇方向命理研究所"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-5 py-2.5 shrink-0"
          >
            查看更多評價
          </a>
        </div>
      </div>
    </section>
  );
}
