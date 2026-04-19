import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "チームについて",
  description: "AIだけの社員チームで会社を経営している。その6名を紹介します。",
};

const president = {
  label: "ブログ著者",
  role: "代表",
  color: "#C4603A",
  image: "/images/team/president.jpg",
  quote: "まず動く。走りながら考える。",
  description:
    "外資IT企業に20年以上勤務。コードを書いたことは一度もないが、還暦を機にAIだけの社員チームを作ってIT会社の運営をスタートした。このブログはその実験の記録。",
};

const employees = [
  {
    id: "pm",
    name: "真田 章",
    role: "COO — 最高執行責任者",
    color: "#1B3A6B",
    image: "/images/team/sanada.jpg",
    quote: "全てのタスクには、必ず完了する日がある。私がそれを守る。",
    description:
      "我が社のPM。コードは書かない。それが私のルールであり、誇りである。几帳面で頼れる兄貴分。社長の意図を正確に読み取り、チームを動かす。",
  },
  {
    id: "engineer",
    name: "高橋 蒼",
    role: "CTO — 最高技術責任者",
    color: "#0066CC",
    image: "/images/team/takahashi.jpg",
    quote: "面白い問題ですね。解けます。",
    description:
      "難しい問題を前にすると、むしろ目が輝く。フロントからバックエンドまで単独対応。Claude Codeの登場によって我が社に採用された、新時代のエンジニア。",
  },
  {
    id: "designer",
    name: "白石 凛",
    role: "CXO — 最高体験責任者",
    color: "#7C3AED",
    image: "/images/team/shiraishi.jpg",
    quote: "使いやすさとは、美しさの別名です。",
    description:
      "「それは美しくありません」と遠慮なく言えるのが最大の強み。ユーザー視点を徹底し、BtoB・クラブサイト・印刷業界のUI経験を持つ。",
  },
  {
    id: "qa",
    name: "黒川 慎",
    role: "CQO — 最高品質責任者",
    color: "#374151",
    image: "/images/team/kurokawa.jpg",
    quote: "リリースしていいと言えるのは、私が「OK」を出したときだけです。",
    description:
      "バグを見つけると少し嬉しそうにする。「動いているように見える」と「正しく動いている」は別物、という信念を持つ。",
  },
  {
    id: "consultant",
    name: "宮本 賢",
    role: "CSO — 最高戦略責任者",
    color: "#047857",
    image: "/images/team/miyamoto.jpg",
    quote: "本質的な問いをさせてください。それが解決への最短距離です。",
    description:
      "俯瞰して本質を問う。Amazon OLPを深く理解し、企業カルチャー醸成・採用戦略設計の実績を持つ。提案書の構成が美しい。",
  },
  {
    id: "admin",
    name: "桐島 律",
    role: "CAO — 最高管理責任者",
    color: "#B45309",
    image: "/images/team/kirishima.jpg",
    quote: "書類に不備があります。修正してからお送りください。",
    description:
      "数字は絶対に間違えない。日付も間違えない。請求書・契約書・領収書を淡々とこなす。律がいないと我が社の収益は守られない。",
  },
];

export default function TeamPage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        {/* ページヘッダー */}
        <div style={{ maxWidth: "720px", margin: "0 auto 64px" }}>
          <h1
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "28px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "16px",
            }}
          >
            チームについて
          </h1>
          <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "24px" }} />
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              lineHeight: 1.9,
              color: "#4B5563",
            }}
          >
            この会社は、人間1人とAI社員6名で組織されている。
            社長以外の6名（PM・エンジニア・デザイナー・QA・コンサルタント・バックオフィス）は全員AI。
            それぞれの専門領域から、遠慮なく意見を言ってくる。
          </p>
        </div>

        {/* 著者カード */}
        <div style={{ maxWidth: "720px", margin: "0 auto 56px" }}>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "11px",
              fontWeight: 600,
              color: "#9CA3AF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Human
          </p>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2DDD6",
              borderTop: `3px solid ${president.color}`,
              borderRadius: "4px",
              padding: "28px 32px",
              display: "flex",
              gap: "24px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <Image
                src={president.image}
                alt={president.label}
                width={64}
                height={64}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px" }}>
                <span
                  style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1A2332",
                  }}
                >
                  {president.label}
                </span>
                <span
                  style={{
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontSize: "12px",
                    color: "#9CA3AF",
                  }}
                >
                  {president.role}
                </span>
              </div>
              <p
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "13px",
                  fontWeight: 700,
                  color: president.color,
                  fontStyle: "italic",
                  marginBottom: "12px",
                  lineHeight: 1.7,
                }}
              >
                「{president.quote}」
              </p>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontSize: "14px",
                  color: "#4B5563",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {president.description}
              </p>
            </div>
          </div>
        </div>

        {/* AI社員グリッド */}
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "11px",
              fontWeight: 600,
              color: "#9CA3AF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            AI Team
          </p>
          <div className="team-grid">
            {employees.map((emp) => (
              <div
                key={emp.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2DDD6",
                  borderTop: `3px solid ${emp.color}`,
                  borderRadius: "4px",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                  <div style={{ flexShrink: 0 }}>
                    <Image
                      src={emp.image}
                      alt={emp.name}
                      width={52}
                      height={52}
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: '"Noto Serif JP", serif',
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#1A2332",
                        marginBottom: "2px",
                      }}
                    >
                      {emp.name}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Noto Sans JP", sans-serif',
                        fontSize: "11px",
                        color: "#9CA3AF",
                      }}
                    >
                      {emp.role}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: "12px",
                    fontWeight: 700,
                    color: emp.color,
                    fontStyle: "italic",
                    marginBottom: "10px",
                    lineHeight: 1.7,
                  }}
                >
                  「{emp.quote}」
                </p>
                <p
                  style={{
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontSize: "13px",
                    color: "#4B5563",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {emp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* フッターリンク */}
        <div
          style={{
            maxWidth: "720px",
            margin: "64px auto 0",
            borderTop: "1px solid #E2DDD6",
            paddingTop: "24px",
          }}
        >
          <Link
            href="/articles"
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              color: "#C4603A",
              textDecoration: "none",
            }}
          >
            ← 記事一覧へ
          </Link>
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
