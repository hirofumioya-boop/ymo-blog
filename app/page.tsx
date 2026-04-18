import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import AnimatedCard from "@/components/AnimatedCard";
import Link from "next/link";

export default function Home() {
  const articles = getAllArticles();
  const latestArticle = articles[articles.length - 1];
  const allArticles = articles;

  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      {/* Hero セクション */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 24px 64px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "#C4603A",
            margin: "0 auto 20px",
          }}
        />
        <h1
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "32px",
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: "16px",
            letterSpacing: "0.05em",
          }}
        >
          非エンジニア社長がAI社員だけの会社を作ってみた
        </h1>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "16px",
            color: "#6B7280",
            lineHeight: 1.8,
          }}
        >
          AIと組織運営について書いています。
        </p>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "15px",
            color: "#C4603A",
            marginTop: "16px",
            fontWeight: 500,
          }}
        >
          このサイトのデザイン・開発は、100% 私のAIチームが担当しました。
          詳細は、<Link href="/articles/article-14" style={{ color: "#C4603A", textDecoration: "underline" }}>記事No.14</Link>と<Link href="/articles/article-16" style={{ color: "#C4603A", textDecoration: "underline" }}>記事No.16</Link>をご覧ください。
        </p>
      </section>

      {/* 読者への呼びかけ */}
      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 24px 72px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "15px",
            color: "#4B5563",
            lineHeight: 2.2,
            marginBottom: "16px",
          }}
        >
          AIという言葉を聞くたびに、なんとなく焦っている。
          でも、何から始めればいいかわからない。
        </p>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "15px",
            color: "#4B5563",
            lineHeight: 2.2,
            marginBottom: "16px",
          }}
        >
          ChatGPTは一度使ってみた。でも業務には活かせていない。
          「AIで業務効率化」という記事を読んでも、書いているのはエンジニアか若い人ばかりで、
          自分には遠い話に感じる。
        </p>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "15px",
            color: "#4B5563",
            lineHeight: 2.2,
            marginBottom: "24px",
          }}
        >
          コードは書けない。ITの専門知識もない。
          でも会社を動かしている。人を動かしている。意思決定をしている。
          「AIってうちの会社には関係ないのかな」と思いかけていた、そんなあなたへ。
        </p>
        <p
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "18px",
            fontWeight: 700,
            color: "#1A2332",
          }}
        >
          3日前の私も、同じことを思っていました。
        </p>
      </section>

      {/* 最新記事 フィーチャード */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 64px",
        }}
      >
        <h2
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "13px",
            fontWeight: 500,
            color: "#9CA3AF",
            letterSpacing: "0.1em",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          最新記事
        </h2>

        <ArticleCard article={latestArticle} size="large" />
      </section>

      {/* 全記事一覧 */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "13px",
              fontWeight: 500,
              color: "#9CA3AF",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            全記事 — {allArticles.length} 本
          </h2>

          <Link
            href="/articles"
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              color: "#C4603A",
              textDecoration: "none",
            }}
          >
            一覧で見る →
          </Link>
        </div>

        <div className="article-grid">
          {allArticles.map((article, index) => (
            <AnimatedCard key={article.slug} index={index}>
              <ArticleCard article={article} size="medium" />
            </AnimatedCard>
          ))}
        </div>
      </section>

      <style>{`
        .article-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 640px) {
          .article-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
