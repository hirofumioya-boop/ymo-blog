import Link from "next/link";

export const metadata = {
  title: "AI経営参謀とは",
  description:
    "経営者の孤独を、専属参謀で変える。非エンジニアの経営者が、AIと一緒に意思決定を加速させるサービスです。",
};

export default function AiSanshoPage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        {/* ページタイトル */}
        <h1
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "28px",
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: "12px",
          }}
        >
          AI経営参謀とは
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
          経営者の孤独を、専属参謀で変える。
        </p>

        <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "48px" }} />

        {/* セクション1：問題提起 */}
        <div style={{ marginBottom: "56px" }}>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            夜中に一人で経営課題を抱えたことは、ありませんか。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            右腕がいない。腹を割って話せる相手がいない。コンサルタントに頼む予算もない。でも、誰かに意見を聞きたい——そういう場面は、経営者なら一度は経験しているはずです。
          </p>
          <p
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "16px",
              fontWeight: 700,
              color: "#1A2332",
              lineHeight: 1.9,
            }}
          >
            あなたが欲しかったのは、ツールではなく参謀だったのかもしれません。
          </p>
        </div>

        {/* セクション2：汎用AIとの違い */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "24px",
            }}
          >
            ChatGPTと何が違うのか
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            ChatGPTやClaudeは、質問すれば答えてくれる便利な道具です。ただ、毎回「自分は誰で、どんな事業をしていて、何に悩んでいるか」を説明し直すのは手間がかかる。そして、返ってくる答えは「一般的に正しいこと」であって、あなたの事業固有の文脈には必ずしも最適化されていません。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            AI経営参謀は違います。あなたの事業の課題、経営判断の背景、大切にしている価値観——これらを最初に丁寧にヒアリングし、あなた専用の参謀として設計されます。対話の記録は、セッションの節目ごとにファイルとして蓄積されます。次の対話では、その記録を参謀が読み込んだ状態でスタートします。毎回ゼロから説明し直す必要はなく、会話を重ねるほど、参謀があなたの文脈を理解している相手になっていきます。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
            }}
          >
            さらに、参謀は2名体制です。実務・段取りを担うCOO型と、本質を問うCSO型が掛け合いながら議論を深めます。一つの問いに対して、複数の角度から考えてくれる。それが一人で抱え込んでいた思考を解きほぐします。
          </p>
        </div>

        <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "48px" }} />

        {/* セクション3：非エンジニアでも使えるか */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "24px",
            }}
          >
            非エンジニアでも、本当に使えるのか
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            使えます。むしろ、経営経験がある人ほど使いこなせます。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            AIをうまく動かすために必要なのは、プログラミングの知識ではありません。「何を達成したいか」「何が引っかかっているか」を言葉にする力——つまり、人に仕事を依頼するときと同じ力です。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            このサービスを設計・運営している代表は、コードを書かない、還暦を迎えた非エンジニア経営者です。外資IT企業での17年間のマネジメント経験が、そのままAIを動かす力になっています。「AIは若い人やエンジニアのもの」という思い込みは、実録が否定しています。
          </p>
        </div>

        <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "48px" }} />

        {/* セクション4：具体的な活用例 */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "24px",
            }}
          >
            こんなことができます
          </h2>

          {[
            {
              label: "壁打ち・ブレスト",
              body: "「新規事業を考えているが、どこに穴があるか」「この方針で本当にいいか、別の角度から見てほしい」——2名の参謀が掛け合いながら、あなたの思考を深めます。一人で考えていると見えない盲点が、対話の中で浮かび上がります。",
            },
            {
              label: "意思決定サポート",
              body: "「A案とB案、どちらが正しいか」ではなく、「それぞれのリスクと前提条件を整理する」。参謀は決めません。あなたが決めるための材料と問いを提供します。最後の判断は、常にあなたのものです。",
            },
            {
              label: "課題の言語化",
              body: "「なんかうまくいっていない気がする」「何かが引っかかっているが言葉にならない」——そのモヤモヤを構造的に整理することも、参謀の仕事です。整理されていなくても構いません。「実は……」から始まる話に、一番深い答えが生まれます。",
            },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: "32px" }}>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "14px",
                  color: "#C4603A",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.9,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "48px" }} />

        {/* セクション5：安心のポイント */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "24px",
            }}
          >
            安心して使うために
          </h2>

          {[
            {
              label: "セキュリティ",
              body: "運用が始まれば、参謀との対話も、そこで話した経営情報も、すべてあなたのPC内にのみ存在します。弊社がそれらを保管・参照することはありません。",
            },
            {
              label: "難しさについて",
              body: "必要なのはIT知識ではなく、言語化する力だけです。「うまく伝えられるか不安」という方も、最初は短い言葉で構いません。対話を重ねながら、徐々に深めていけます。",
            },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "14px",
                  color: "#C4603A",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.9,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "48px" }} />

        {/* セクション6：AIとの向き合い方へ */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "16px",
            }}
          >
            より深く使いこなすために
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            AI経営参謀をより深く活用するには、AIという存在の特性を知っておくことが助けになります。ハルシネーション（AIが嘘をつくこと）、問いかけ方の重要性、セキュリティの考え方——これらを整理したページを用意しています。
          </p>
          <Link
            href="/ai-mindset"
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              color: "#C4603A",
              textDecoration: "none",
            }}
          >
            AIとの向き合い方を読む →
          </Link>
        </div>

        {/* フッターリンク */}
        <div style={{ borderTop: "1px solid #E2DDD6", paddingTop: "24px" }}>
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
