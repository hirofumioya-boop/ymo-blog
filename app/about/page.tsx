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
          <p><em>AIという言葉を聞くたびに、なんとなく焦っている。<br />でも、何から始めればいいかわからない。</em></p>
          <p><em>ChatGPTは一度使ってみた。でも業務には活かせていない。「AIで業務効率化」という記事を読んでも、書いているのはエンジニアか若い人ばかりで、自分には遠い話に感じる。</em></p>
          <p><em>コードは書けない。ITの専門知識もない。でも会社を動かしている。人を動かしている。意思決定をしている。「AIってうちの会社には関係ないのかな」と思いかけていた、そんなあなたへ。</em></p>
          <p><strong>3日前の私も、同じことを思っていました。</strong></p>

          <h2>このブログについて</h2>

          <p>
            AIだけの社員チームで会社を立ち上げた実録を、経営者の視点から書いています。技術の解説ではなく、「非エンジニアがAIとどう向き合ったか」の記録です。
          </p>

          <p>
            エンジニアなら効率化ツールとしてAIを使いこなすでしょう。しかし、私のアプローチは異なります。17年間、人の組織を動かしてきた経験——採用、役割定義、権限委譲、反論を歓迎する文化づくり——それらをそのままAIに持ち込みました。それが私にできる、唯一のアプローチでした。
          </p>

          <p>
            これは完成した理論の発表ではありません。まだ結論の出ていない、現在進行形の実験記録です。同じように手探りでAIと向き合っている経営者に、少しでも参考になれば嬉しいです。
          </p>

          <h2>私について</h2>

          <p>
            <strong>人とAIが共存する組織をデザインするコンサルタントです。</strong>
          </p>

          <p>
            外資IT企業に20年以上勤務したのち、56歳でサラリーマンをアーリーリタイアしました。
            うち7年間はAmazonで、クラウドビジネスに携わる傍ら、採用・育成・評価・組織運営の実務を担い、面接官として関わった候補者は延べ約700名にのぼります。
            AmazonのOLP（Our Leadership Principles：リーダーとしての行動指針）を日常言語として使い続けた経験が、組織コンサルティングの核になっています。
          </p>

          <p>
            コードを書いたことは一度もありません。それでも還暦を機に生成AIと向き合い、
            PM・エンジニア・デザイナー・QA・コンサルタント・バックオフィスの6名——全員AIの社員チームを作り、IT会社の運営をスタートしました。
          </p>

          <h2>提供できること</h2>

          <p>
            「人を動かすということと、AIを動かすということは、本質的には同じではないか」——Amazonで7年間培った組織設計/運営の経験が、AIチームの設計/運営でも同じように機能しそうだと感じ始めています。どちらも、「仕組み」と「言葉（言語化）」が鍵になると思います。私が提供できるのは、採用・組織運営とAI導入、その両面からの支援です。
          </p>

          <h3>採用・組織運営コンサルティング</h3>
          <p>
            採れない、育たない、辞める——その根本は、組織に再現性のある"仕組み"がないことが多いと考えています。
            Amazonで培った採用・評価・育成の仕組み設計のノウハウで、組織の根本課題に向き合います。
            採用プロセスの仕組み化（採用基準の標準化〜面接官育成）を一貫して支援します。AIも積極的に活用しながら進めます。
          </p>

          <h3>AIチーム導入支援</h3>
          <p>
            「AIを使いたいが何から始めればいいかわからない」という経営者の方に向けて、実際にAIチームを立ち上げた経験を基に伴走します。
            ツールの紹介ではなく、「AIとどう向き合い、どう組織に組み込み、どう運用してゆくか」について、一緒に考えます。（こちらはまだ実証実験の途中です。正解を一緒に探したい方を歓迎します）
          </p>

          <h2>相談・お問い合わせ</h2>

          <p>
            ご意見・ご相談などありましたらお気軽にどうぞ。
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
