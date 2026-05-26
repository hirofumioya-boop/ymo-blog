import { getArticleBySlug, getAllArticles, getAllSlugs, formatDate } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/ReadingProgress";

// A→B→C 学習導線（TASK-167 Act 2 ②b 決定事項6 / TASK-187）
// 入口: 49→50 / A層: 42,25,26 / B層: 01,15,32 / C層: 13,34 → /ai-sansho
const LEARNING_PATH: Record<string, { slug: string; label: string } | { href: string; label: string }> = {
  "article-49": { slug: "article-50", label: "次の記事へ" },
  "article-50": { slug: "article-42", label: "次の記事へ" },
  "article-42": { slug: "article-25", label: "次の記事へ" },
  "article-25": { slug: "article-26", label: "次の記事へ" },
  "article-26": { slug: "article-01", label: "次の記事へ" },
  "article-01": { slug: "article-15", label: "次の記事へ" },
  "article-15": { slug: "article-32", label: "次の記事へ" },
  "article-32": { slug: "article-13", label: "次の記事へ" },
  "article-13": { slug: "article-34", label: "次の記事へ" },
  "article-34": { href: "/ai-sansho", label: "AI経営参謀サービスを見る →" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const articleUrl = `https://blog.y-m-o.jp/articles/${slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    ...(article.archived && {
      robots: { index: false, follow: true },
    }),
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      publishedTime: article.date,
      siteName: 'YMOブログ',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // 前後の記事を取得（公開日順ナビゲーション）
  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  // A→B→C 学習導線の次のステップを取得
  const learningNext = LEARNING_PATH[slug] ?? null;
  // 次のスラグが記事の場合はタイトルを取得
  let learningNextArticle: { title: string; number: number } | null = null;
  if (learningNext && "slug" in learningNext) {
    const found = allArticles.find((a) => a.slug === learningNext.slug);
    if (found) {
      learningNextArticle = { title: found.title, number: found.number };
    }
  }

  const isComingSoon = article.status === "coming-soon";

  // JSON-LD: BlogPosting スキーマ（TASK-116）
  // データソース: ローカル Markdown フロントマター（gray-matter 解析済み）
  // JSON.stringify によりエスケープ済みの信頼済みコンテンツ
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "YMOブログ編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "横濱マネジメントオフィス合同会社"
    },
    "url": `https://blog.y-m-o.jp/articles/${slug}`,
    "description": article.excerpt
  });

  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      {/* JSON-LD: BlogPosting スキーマ（Google リッチリザルト対応） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ReadingProgress />
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 24px 96px",
        }}
      >
        {/* パンくずリスト */}
        <div style={{ marginBottom: "32px" }}>
          <Link href="/articles" className="back-link">
            ← 一覧へ戻る
          </Link>
        </div>

        {/* 本文エリア */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          {/* 記事ヘッダー */}
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: "12px",
                fontWeight: 500,
                color: "#9CA3AF",
                marginBottom: "16px",
                letterSpacing: "0.1em",
              }}
            >
              No. {String(article.number).padStart(2, "0")}
            </p>

            <h1
              style={{
                fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#1A2332",
                marginBottom: "20px",
              }}
              className="article-title"
            >
              {article.title}
            </h1>

            <p
              style={{
                fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                fontSize: "13px",
                color: "#9CA3AF",
              }}
            >
              {formatDate(article.date)}
              {!isComingSoon && <span>　|　約 {article.readingTime} 分で読めます</span>}
            </p>
          </div>

          {/* セパレーター */}
          <div
            style={{
              borderTop: "1px solid #E2DDD6",
              marginBottom: "40px",
            }}
          />

          {/* 本文 */}
          {isComingSoon ? (
            <div
              style={{
                padding: "48px 0",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                  fontSize: "20px",
                  color: "#9CA3AF",
                  marginBottom: "16px",
                }}
              >
                この記事は準備中です。
              </p>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "14px",
                  color: "#9CA3AF",
                }}
              >
                近日公開予定です。しばらくお待ちください。
              </p>
            </div>
          ) : (
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          )}

          {/* セパレーター */}
          <div
            style={{
              borderTop: "1px solid #E2DDD6",
              marginTop: "48px",
              marginBottom: "40px",
            }}
          />

          {/* 前後の記事ナビゲーション */}
          <div className="article-nav-grid">
            <div>
              {prevArticle && (
                <Link
                  href={`/articles/${prevArticle.slug}`}
                  className="article-nav-link"
                >
                  <p className="nav-direction">← 前の記事</p>
                  <p className="nav-title">
                    No.{String(prevArticle.number).padStart(2, "0")} {prevArticle.title}
                  </p>
                </Link>
              )}
            </div>

            <div>
              {nextArticle && (
                <Link
                  href={`/articles/${nextArticle.slug}`}
                  className="article-nav-link article-nav-link-next"
                >
                  <p className="nav-direction">次の記事 →</p>
                  <p className="nav-title">
                    No.{String(nextArticle.number).padStart(2, "0")} {nextArticle.title}
                  </p>
                </Link>
              )}
            </div>
          </div>

          {/* A→B→C 学習導線ブロック */}
          {learningNext && (
            <div className="learning-path-block">
              <p className="learning-path-label">この記事を読んだ方へ</p>
              {"slug" in learningNext ? (
                <Link
                  href={`/articles/${learningNext.slug}`}
                  className="learning-path-link"
                >
                  <span className="learning-path-link-label">{learningNext.label}</span>
                  {learningNextArticle && (
                    <span className="learning-path-link-title">
                      No.{String(learningNextArticle.number).padStart(2, "0")} {learningNextArticle.title}
                    </span>
                  )}
                </Link>
              ) : (
                <Link
                  href={(learningNext as { href: string; label: string }).href}
                  className="learning-path-link learning-path-link-service"
                >
                  <span className="learning-path-link-label">{learningNext.label}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .article-title {
          font-size: 36px;
        }
        @media (max-width: 640px) {
          .article-title {
            font-size: 26px;
          }
        }
        .back-link {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 14px;
          color: #6B7280;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 150ms ease;
        }
        .back-link:hover {
          color: #C4603A;
        }
        .note-link {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 14px;
          color: #C4603A;
          text-decoration: none;
          transition: color 150ms ease;
        }
        .note-link:hover {
          color: #D97754;
        }
        .article-nav-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 480px) {
          .article-nav-grid {
            grid-template-columns: 1fr;
          }
        }
        .article-nav-link {
          display: block;
          padding: 20px;
          background-color: #FFFFFF;
          border: 1px solid #E2DDD6;
          border-radius: 4px;
          text-decoration: none;
          transition: box-shadow 200ms ease;
        }
        .article-nav-link:hover {
          box-shadow: 0 4px 16px rgba(26,35,50,0.08);
        }
        .article-nav-link-next {
          text-align: right;
        }
        .nav-direction {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          margin-bottom: 8px;
        }
        .nav-title {
          font-family: "Noto Serif JP", "游明朝", Georgia, serif;
          font-size: 14px;
          color: #1A2332;
          line-height: 1.5;
        }
        .learning-path-block {
          margin-top: 32px;
          padding: 28px 24px;
          background-color: #FDF8F4;
          border: 1px solid #D4A57A;
          border-radius: 4px;
        }
        .learning-path-label {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }
        .learning-path-link {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-decoration: none;
          transition: opacity 200ms ease;
        }
        .learning-path-link:hover {
          opacity: 0.75;
        }
        .learning-path-link-label {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 13px;
          color: #C4603A;
          font-weight: 500;
        }
        .learning-path-link-title {
          font-family: "Noto Serif JP", "游明朝", Georgia, serif;
          font-size: 15px;
          color: #1A2332;
          line-height: 1.55;
        }
        .learning-path-link-service .learning-path-link-label {
          font-size: 15px;
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .learning-path-block {
            padding: 20px 16px;
          }
          .learning-path-link-title {
            font-size: 16px;
          }
          .learning-path-link-label {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
