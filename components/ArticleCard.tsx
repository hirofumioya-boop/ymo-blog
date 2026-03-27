import Link from "next/link";
import { ArticleMeta, formatDate } from "@/lib/articles";

interface ArticleCardProps {
  article: ArticleMeta;
  size?: "large" | "medium";
}

export default function ArticleCard({ article, size = "medium" }: ArticleCardProps) {
  const isComingSoon = article.status === "coming-soon";
  const padding = size === "large" ? "40px" : "24px";
  const titleSize = size === "large" ? "24px" : "20px";
  const titleWeight = size === "large" ? 700 : 600;

  if (isComingSoon) {
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2DDD6",
          borderRadius: "4px",
          padding,
          opacity: 0.6,
          cursor: "default",
        }}
      >
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "12px",
            fontWeight: 500,
            color: "#9CA3AF",
            marginBottom: "12px",
          }}
        >
          No.{String(article.number).padStart(2, "0")}
        </p>

        <h3
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: titleSize,
            fontWeight: titleWeight,
            color: "#1A2332",
            lineHeight: 1.5,
            marginBottom: "16px",
          }}
        >
          {article.title}
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontWeight: 500,
              color: "#9CA3AF",
              border: "1px solid #E2DDD6",
              borderRadius: "3px",
              padding: "2px 8px",
              marginLeft: "8px",
              verticalAlign: "middle",
            }}
          >
            準備中
          </span>
        </h3>

        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "13px",
            color: "#9CA3AF",
          }}
        >
          {formatDate(article.date)} / 近日公開
        </p>
      </div>
    );
  }

  return (
    <Link
      href={`/articles/${article.slug}`}
      style={{ textDecoration: "none" }}
      className={`article-card article-card-${size}`}
    >
      <article
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2DDD6",
          borderRadius: "4px",
          padding,
          height: "100%",
        }}
      >
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "12px",
            fontWeight: 500,
            color: "#9CA3AF",
            marginBottom: "12px",
          }}
        >
          No.{String(article.number).padStart(2, "0")}
        </p>

        <h3
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: titleSize,
            fontWeight: titleWeight,
            color: "#1A2332",
            lineHeight: 1.5,
            marginBottom: "16px",
          }}
          className={size === "medium" ? "line-clamp-3" : undefined}
        >
          {article.title}
        </h3>

        {size === "large" && (
          <p
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "16px",
              color: "#6B7280",
              lineHeight: 1.85,
              marginBottom: "20px",
            }}
            className="line-clamp-3"
          >
            {article.excerpt}
          </p>
        )}

        {article.tags && article.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#C4603A",
                  border: "1px solid #C4603A",
                  borderRadius: "3px",
                  padding: "2px 8px",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: size === "large" ? "20px" : "0",
          }}
        >
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "13px",
              color: "#9CA3AF",
            }}
          >
            {formatDate(article.date)} / 約 {article.readingTime} 分
          </p>

          {size === "large" && (
            <span className="read-more-link">
              続きを読む →
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
