import Link from "next/link";

export const metadata = {
  title: "About",
  description: "人とAIが共存する組織をデザインするコンサルタント。外資IT企業20年のキャリアとAIチーム運営の実体験を持つ著者のプロフィール。",
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
          <h2>私について</h2>

          <p>
            <strong>人とAIが共存する組織をデザインするコンサルタント。</strong>
          </p>

          <p>
            外資IT企業に20年以上勤務したのち、56歳でアーリーリタイア。
            うち7年間はAmazonで、クラウドビジネスに携わる傍ら、採用・育成・評価・組織運営の実務を担い、面接官として関わった候補者は延べ約700名にのぼる。
            AmazonのリーダーシップPrinciples（OLP：Our Leadership Principles）を日常言語として使い続けた経験が、組織コンサルティングの核になっている。
          </p>

          <p>
            コードを書いたことは一度もない。それでも還暦を機に生成AIと向き合い、
            PM・エンジニア・デザイナー・QA・コンサルタント・バックオフィスの6名——全員AIの社員チームを作り、IT会社を経営している。
            「人を動かす力とAIを動かす力は、思ったより同じものだった」というのが、今のところの結論だ。
          </p>

          <h2>提供できること</h2>

          <h3>組織・採用コンサルティング</h3>
          <p>
            「採用がうまくいかない」「面接官によって判断がバラバラ」「入社しても早期退職が続く」——
            そういった組織の根本問題に、Amazonで培った採用メカニズム設計のノウハウで向き合う。
            カルチャーフィット面接ガイド・評価基準の標準化・面接官育成まで一貫して支援する。
          </p>

          <h3>AIチーム導入支援</h3>
          <p>
            「AIを使いたいが何から始めればいいかわからない」経営者向けに、
            実際にAIチームを運営している当事者の立場から伴走する。
            ツールの紹介ではなく、「どう組織に組み込み、どう責任を持つか」の設計から支援する。
          </p>

          <h2>このブログについて</h2>

          <p>
            AIだけの社員チームで会社を動かした実録を、経営者の視点から書いている。技術の解説ではなく、「非エンジニアがAIとどう向き合ったか」の記録だ。
          </p>

          <p>
            エンジニアなら効率化ツールとしてAIを使いこなすだろう。私のアプローチは違う。17年間、人の組織を動かしてきた経験——採用、役割定義、権限委譲、反論を歓迎する文化づくり——をそのままAIに持ち込んだ。それが私にできる、唯一のアプローチだった。
          </p>

          <p>
            これは完成した理論の発表ではない。まだ結論の出ていない、現在進行形の実験記録だ。同じように手探りでAIと向き合っている経営者に、少しでも参考になれば嬉しい。
          </p>

          <h2>相談・お問い合わせ</h2>

          <p>
            組織・採用の仕組みづくりから、AIチーム導入の伴走まで。
            まずは30分の無料オンライン相談からどうぞ。
          </p>

          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfaht-CZQzRsCoHc1GEXk4DMipHM0DPQbX2hoxDlKbGsMXlCg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              → お問い合わせはこちら（30分・無料）
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
