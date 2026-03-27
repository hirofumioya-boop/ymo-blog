import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "全記事一覧",
  description: "非エンジニア社長がAI社員だけの会社を作ってみた——全12本の記事一覧。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

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
        <div style={{ marginBottom: "48px" }}>
          <h1
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "28px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "8px",
            }}
          >
            全 {articles.length} 本の記事
          </h1>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#6B7280",
              lineHeight: 1.8,
            }}
          >
            非エンジニアがAIだけの社員チームを作ってIT会社を経営している実録シリーズ。
          </p>
        </div>

        {/* 区切り線 */}
        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginBottom: "40px",
          }}
        />

        {/* 記事グリッド */}
        <div className="articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} size="medium" />
          ))}
        </div>
      </div>

      <style>{`
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 640px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
