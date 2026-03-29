import Link from "next/link";

export const metadata = {
  title: "用語集",
  description: "このブログに登場するIT・AI用語をわかりやすく解説します。",
};

const terms = [
  {
    term: "Anthropic",
    reading: "アンソロピック",
    description:
      "ClaudeをつくったアメリカのAI企業。2021年創業。「安全なAIの開発」を使命に掲げている。このブログに登場するAI社員たちは、全員Anthropicが開発したClaudeがベースになっている。",
  },
  {
    term: "API",
    reading: "エーピーアイ（Application Programming Interface）",
    description:
      "アプリやサービスの「窓口」のこと。「Claude APIを使う」とは、プログラムからClaudeに話しかける仕組みを使うこと。普通はチャット画面を通じてAIと会話するが、APIを使うと自分のプログラムの中からAIを動かせる。このブログでは、会話終了後に自動でチームの記憶を更新する仕組みにAPIを使っている。",
  },
  {
    term: "Claude",
    reading: "クロード",
    description:
      "Anthropicが開発したAI。このブログに登場するAI社員（真田・高橋・白石・黒川・宮本・桐島）は、全員Claudeがベースになっている。同じClaudeでも、キャラクター設定（役割・性格・口癖）を与えることで、それぞれが異なる「社員」として動く。",
  },
  {
    term: "Claude Code",
    reading: "クロード コード",
    description:
      "Anthropicが提供する開発者向けのAIツール。ターミナル（コマンド入力画面）やVSCode（コードエディタ）と連携して使う。このブログの社長はClaude Codeを使ってAI社員チームと会話しながら、コードを一行も書かずにシステムを構築している。",
  },
  {
    term: "Claude Haiku",
    reading: "クロード ハイク",
    description:
      "Claudeの軽量・低コストモデル。SonnetやOpusより処理能力は低いが、速くて安い。このブログでは、会話終了後に6人分の社員の記憶を自動更新する処理（要約作業）にHaikuを使っている。重い処理には向かないが、こういった繰り返しの作業には最適。",
  },
  {
    term: "Claude Opus",
    reading: "クロード オーパス",
    description:
      "Claudeの最上位モデル。分析力・推論力が最も高い。その分コストもかかる。このブログでは「スーパー宮本さん」として登場。通常は使わないが、全18記事の整合性チェックのような高度な分析が必要な場面で召喚した。",
  },
  {
    term: "Claude Sonnet",
    reading: "クロード ソネット",
    description:
      "Claudeの標準モデル。能力とコストのバランスが良い。このブログのAI社員（真田・高橋・白石・黒川・宮本・桐島）は全員Sonnetベースで動いている。",
  },
  {
    term: "OLP",
    reading: "オーエルピー（Our Leadership Principles）",
    description:
      "Amazonの行動指針。現在16箇条あり、採用・評価・日常の意思決定すべての場面で共通言語として使われていた。このブログの社長はAmazonに7年間勤務し、OLPを日常的に意識して行動してきた。その精神を受け継いでAI社員チーム向けに再設計した16か条を「自社LP」と呼んでいる。",
  },
];

export default function GlossaryPage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        <h1
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "28px",
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: "12px",
          }}
        >
          用語集
        </h1>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "14px",
            color: "#6B7280",
            marginBottom: "40px",
            lineHeight: 1.8,
          }}
        >
          このブログに登場するIT・AI用語をわかりやすく解説します。
        </p>

        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginBottom: "40px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {terms.map((item) => (
            <div key={item.term}>
              <h2
                style={{
                  fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2332",
                  marginBottom: "4px",
                }}
              >
                {item.term}
              </h2>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "12px",
                  color: "#9CA3AF",
                  marginBottom: "10px",
                }}
              >
                {item.reading}
              </p>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.9,
                }}
              >
                {item.description}
              </p>
              <div
                style={{
                  borderBottom: "1px solid #E2DDD6",
                  marginTop: "32px",
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px" }}>
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
    </div>
  );
}
