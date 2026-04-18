import { getArticleBySlug, getAllArticles, getAllSlugs, formatDate } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/ReadingProgress";

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

  // 前後の記事を取得
  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const isComingSoon = article.status === "coming-soon";

  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
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
      `}</style>
    </div>
  );
}
