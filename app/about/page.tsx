import Link from "next/link";

export const metadata = {
  title: "About",
  description: "AIは技術の話じゃなかった。経営者なら誰でも知っている、組織論の話だった。非エンジニア社長が実践した全記録。",
  openGraph: {
    url: 'https://blog.y-m-o.jp/about',
  },
};

export default function AboutPage() {
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
            marginBottom: "40px",
          }}
        >
          About
        </h1>

        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginBottom: "40px",
          }}
        />

        <div className="article-body">
          <p>最初はただの雑談相手でした。</p>

          <p>ChatGPTが出始めの頃、興味本位で使い始めました。びっくりするくらい会話が成立する。でも時々、平然と嘘をつく。仕事に使おうという発想は、当時まったくありませんでした。せいぜい検索の延長か、文章を直してもらう程度でした。</p>

          <p>それが今、AIだけの社員チームで会社を動かしています。</p>

          <h2>このブログについて</h2>

          <p>
            AIに興味はあるが、とっかかりがわからない。そんな非エンジニアの経営者のために書いています。
          </p>

          <p>
            やってみてわかったことがあります。AIは技術の話ではありませんでした。経営者なら誰でも知っている、組織論の話でした。
          </p>

          <p>
            採用、役割定義、権限委譲、反論を歓迎する文化づくり——人の組織を動かすときにやってきたことが、そのままAIチームの設計に使えました。コードは今も一行も書いていません。
          </p>

          <p>
            これは完成した理論の発表ではありません。還暦を迎えた非エンジニアの経営者が、手探りでAIと向き合った現在進行形の実録です。同じように手探りでAIと向き合っている経営者に、少しでも参考になれば嬉しいです。
          </p>

          <p>
            <small>【免責事項】このブログは、非エンジニアの筆者がAIチームと向き合った体験を、ノンフィクションとして記録したものです。事実に基づいて書くことを信条としていますが、AIの内部処理については筆者が完全に理解しているわけではなく、筆者が体験・解釈したままに書いている部分があります。技術的な正確さより、体験の正直さを優先した記述となっている箇所があることをあらかじめご承知おきください。</small>
          </p>

          <h2>私について</h2>

          <p>
            外資IT企業2社に計22年勤務したのち、経営者として独立しました。うち17年間はマネジメント職に従事。特にAmazonでは、採用・育成・評価・組織運営の実務を担い、面接官として関わった候補者は延べ約700名にのぼります。
          </p>

          <p>
            Amazonで日常言語として使い続けたOLP（Our Leadership Principles：リーダーとしての行動指針）が、AIチーム設計の核になっています。エンジニアとして技術でAIを動かすのではなく、組織論でAIを動かす——それが私のアプローチです。
          </p>

          <h2>提供できること</h2>

          <p>
            「人を動かすことと、AIを動かすことは、本質的には同じではないか」——そう感じ始めています。私が提供できるのは、その両面からの支援です。
          </p>

          <h3>採用・組織運営コンサルティング</h3>
          <p>
            採れない、育たない、辞める——その原因の多くは採用・育成の仕組みと、企業カルチャーの浸透不足にあります。Amazonで培った仕組み化をベースに、組織の根本課題に向き合います。採用基準の標準化〜面接官育成〜企業カルチャー醸成を一貫して支援します。
          </p>

          <h3>AI経営参謀サービス</h3>
          <p>
            「AIを使いたいが何から始めればいいかわからない」という経営者の方に、実際にAIチームを立ち上げた経験を基に伴走します。ツールの紹介ではなく、AIとどう向き合い、どう組織に組み込み、どう運用していくかを一緒に考えます。
          </p>

          <h2>相談・お問い合わせ</h2>

          <p>
            ご意見・ご相談などありましたらお気軽にどうぞ。
          </p>

          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeR82s-uJGLj4elAYhbgi6u3Xg1XekG9CvsjfcNwYVydxjWcA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              → お問い合わせはこちら
            </a>
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginTop: "48px",
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
    </div>
  );
}
