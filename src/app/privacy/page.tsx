import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const CONTACT_EMAIL = "guangyu.pro@gmail.com";
const CONTACT_PHONE = "0978-586-343";
const LINE_URL = "https://line.me/R/ti/p/%40enlite731";
const EFFECTIVE_DATE = "2025年1月1日";
const LAST_UPDATED = "2026年6月15日";

const sectionStyle = {
  background: "#fff",
  border: "1px solid rgba(26,45,69,0.08)",
  borderRadius: "16px",
  padding: "32px",
  marginBottom: "24px",
};

const h2Style = {
  color: "#1A2D45",
  fontSize: "1.1rem",
  fontWeight: 700,
  marginBottom: "16px",
  paddingBottom: "10px",
  borderBottom: "2px solid rgba(184,144,42,0.2)",
};

const pStyle = {
  color: "#4A5E72",
  fontSize: "0.9rem",
  lineHeight: "1.85",
  marginBottom: "12px",
};

const liStyle = {
  color: "#4A5E72",
  fontSize: "0.9rem",
  lineHeight: "1.85",
  marginBottom: "6px",
  paddingLeft: "4px",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "linear-gradient(135deg, #FBF8F4 0%, #F4EDE3 100%)", minHeight: "100vh" }}>

        {/* Header */}
        <section className="pt-32 pb-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,144,42,0.07) 0%, transparent 60%)" }} />
          <div className="relative max-w-3xl mx-auto px-6 space-y-4">
            <p className="text-xs tracking-widest font-sans font-semibold" style={{ color: "#B8902A" }}>LEGAL</p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold" style={{ color: "#1A2D45" }}>
              隱私權與個人資料保護政策
            </h1>
            <div className="h-px w-12 mx-auto" style={{ background: "#B8902A" }} />
            <p className="font-sans text-sm" style={{ color: "#6B7E90" }}>
              生效日期：{EFFECTIVE_DATE}　｜　最後更新：{LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            {/* 前言 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>一、前言</h2>
              <p className="font-sans" style={pStyle}>
                光宇方向命理研究所（以下簡稱「本研究所」）非常重視您的隱私權及個人資料安全。本政策依據中華民國《個人資料保護法》及相關法令規定，說明本研究所蒐集、處理及利用您個人資料之方式與目的，請您詳細閱讀。
              </p>
              <p className="font-sans" style={pStyle}>
                當您使用本網站服務、預約諮詢或提供個人資料時，即表示您已閱讀、瞭解並同意本政策之所有內容。
              </p>
            </div>

            {/* 蒐集個資告知 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>二、個人資料蒐集告知事項（個資法第8條）</h2>

              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>（一）蒐集機構名稱</p>
              <p className="font-sans" style={pStyle}>光宇方向命理研究所</p>

              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>（二）蒐集目的</p>
              <p className="font-sans" style={pStyle}>本研究所依下列目的蒐集、處理及利用您的個人資料：</p>
              <ul className="list-none space-y-1 mb-3 pl-4">
                {[
                  "069｜契約、類似契約或其他法律關係事務（提供命理諮詢服務、預約管理）",
                  "090｜消費者、客戶管理與服務（服務品質維護、問題回覆）",
                  "040｜行銷（提供優惠資訊、活動通知，以您同意為前提）",
                  "157｜調查、統計與研究分析（服務改善與品質提升）",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>（三）個人資料類別</p>
              <ul className="list-none space-y-1 mb-3 pl-4">
                {[
                  "C001｜辨識個人者：姓名、電話、電子郵件、LINE 帳號",
                  "C011｜個人描述：出生年月日、出生時辰、性別、出生地",
                  "C051｜學校記錄：使用者自願提供之教育背景（非必要）",
                  "C093｜財務交易：付款紀錄、服務費用資訊",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>（四）利用期間、地區、對象及方式</p>
              <ul className="list-none space-y-1 mb-3 pl-4">
                {[
                  "期間：於蒐集目的存續期間內，或依相關法令規定之保存年限",
                  "地區：中華民國台灣境內",
                  "對象：本研究所內部人員，以及依法令或業務需要之委託處理機構",
                  "方式：以電子或書面方式為合法、適當之蒐集、處理及利用",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>（五）當事人權利</p>
              <p className="font-sans" style={pStyle}>依個資法第3條，您得就您的個人資料行使下列權利：</p>
              <ul className="list-none space-y-1 mb-3 pl-4">
                {[
                  "查詢或閱覽",
                  "製給複製本",
                  "補充或更正",
                  "停止蒐集、處理或利用",
                  "刪除",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans" style={pStyle}>
                如需行使上述權利，請以 Email 或 LINE 聯繫本研究所，我們將於15個工作日內回覆並處理。本研究所得依個資法第10條但書規定，於符合法定條件時拒絕或限制前述請求。
              </p>

              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>（六）不提供個人資料之影響</p>
              <p className="font-sans" style={pStyle}>
                提供個人資料係您自願行為。若您選擇不提供必要資料（如姓名、聯絡方式、出生資料），本研究所將無法提供完整之命理諮詢服務，但不影響您瀏覽本網站其他內容。
              </p>
            </div>

            {/* 蒐集方式 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>三、個人資料蒐集方式</h2>
              <p className="font-sans" style={pStyle}>本研究所透過以下方式蒐集您的個人資料：</p>
              <ul className="list-none space-y-1 pl-4">
                {[
                  "您主動填寫預約表單或體驗申請表",
                  "您透過 LINE 官方帳號傳送之訊息",
                  "您透過電話或 Email 與本研究所聯繫",
                  "您使用本網站八字計算工具時輸入之出生資料（僅於您的裝置本地計算，不上傳儲存）",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 資料安全 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>四、個人資料安全維護</h2>
              <p className="font-sans" style={pStyle}>
                本研究所採取適當之技術及組織措施保護您的個人資料，防止未經授權之存取、揭露、修改或銷毀，包含：
              </p>
              <ul className="list-none space-y-1 pl-4">
                {[
                  "網站採用 HTTPS 加密傳輸",
                  "限制內部人員存取個人資料之權限",
                  "定期檢視資料安全措施",
                  "諮詢報告及個案資料採匿名化或加密保存",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans" style={pStyle}>
                您的命盤資料、出生資訊及諮詢報告，僅於提供服務所需期間內保存，原則上保存至服務結束後 3 年（供後續追蹤諮詢或爭議處理之用），逾期將以不可回復之方式刪除或銷毀電子檔案。若您於保存期間內主動要求刪除，本研究所將於確認身份後，於 15 個工作日內完成刪除作業。
              </p>
            </div>

            {/* 個資外洩通知 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>五、個人資料事故通知機制</h2>
              <p className="font-sans" style={pStyle}>
                依個資法第12條規定，若本研究所違反個資法規定，致您的個人資料遭不法蒐集、處理、利用或其他侵害情事，本研究所將於知悉後，以適當方式（如 Email、LINE 或網站公告）通知您下列事項：
              </p>
              <ul className="list-none space-y-1 mb-3 pl-4">
                {[
                  "事故發生之時間與經過",
                  "已採取之因應措施",
                  "提供您諮詢申訴的服務窗口",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans" style={pStyle}>
                本研究所亦將檢視事故發生原因，採取必要之補救措施，避免類似情事再次發生。
              </p>
            </div>

            {/* 第三方與 Cookie */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>六、第三方服務與 Cookie</h2>
              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>第三方服務</p>
              <p className="font-sans" style={pStyle}>
                本研究所可能使用以下第三方服務，這些服務有其各自的隱私政策：
              </p>
              <ul className="list-none space-y-1 mb-4 pl-4">
                {[
                  "LINE 官方帳號（LINE Corporation）：用於訊息溝通與預約管理",
                  "Google Analytics：用於網站流量分析（不蒐集可識別個人之資料）",
                  "Vercel：本網站之託管服務商",
                ].map((item) => (
                  <li key={item} className="font-sans flex gap-2" style={liStyle}>
                    <span style={{ color: "#B8902A", flexShrink: 0 }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans font-semibold" style={{ ...pStyle, color: "#1A2D45" }}>Cookie 使用</p>
              <p className="font-sans" style={pStyle}>
                本網站使用 Cookie 及類似技術以改善使用體驗，包含記錄使用偏好及流量統計分析。您可透過瀏覽器設定管理或拒絕 Cookie，但部分功能可能因此受到影響。本網站不使用 Cookie 追蹤個人身份。
              </p>
            </div>

            {/* 未成年人 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>七、未成年人保護</h2>
              <p className="font-sans" style={pStyle}>
                本研究所之服務對象為18歲（含）以上之成年人。未滿18歲者，請在法定代理人同意下使用本服務並提供個人資料。若本研究所發現未成年人未經同意提供個人資料，將予以刪除。
              </p>
            </div>

            {/* 政策修訂 */}
            <div style={sectionStyle}>
              <h2 className="font-serif" style={h2Style}>八、隱私政策修訂</h2>
              <p className="font-sans" style={pStyle}>
                本研究所保留修訂本政策之權利。政策修訂後將於本頁面公告更新日期，重大變更時將另行通知。繼續使用本服務，視為您同意修訂後之政策內容。
              </p>
            </div>

            {/* 聯絡我們 */}
            <div style={{ ...sectionStyle, background: "#1A2D45" }}>
              <h2 className="font-serif" style={{ ...h2Style, color: "#fff", borderBottomColor: "rgba(184,144,42,0.3)" }}>
                九、聯絡本研究所
              </h2>
              <p className="font-sans" style={{ ...pStyle, color: "rgba(255,255,255,0.7)" }}>
                如對本隱私政策有任何疑問，或欲行使個人資料相關權利，請透過以下方式聯絡我們：
              </p>
              <ul className="list-none space-y-3 pl-4">
                {[
                  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                  { label: "電話", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/-/g, "")}` },
                  { label: "LINE", value: "@enlite731", href: LINE_URL },
                ].map((c) => (
                  <li key={c.label} className="font-sans flex gap-3 items-center">
                    <span className="text-xs font-semibold font-sans" style={{ color: "#B8902A", minWidth: "40px" }}>{c.label}</span>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-sans transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.75)" }}>
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="font-sans mt-5" style={{ ...pStyle, color: "rgba(255,255,255,0.5)", marginBottom: 0 }}>
                本研究所將於收到請求後 15 個工作日內回覆。
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/"
                className="inline-flex items-center gap-2 text-sm font-sans transition-colors duration-200"
                style={{ color: "#B8902A" }}>
                ← 返回首頁
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
