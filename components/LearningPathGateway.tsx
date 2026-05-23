import Link from "next/link";

interface Props {
  startArticle?: string;
  startLabel?: string;
}

export default function LearningPathGateway({
  startArticle = "article-49",
  startLabel = "article-49 から読む",
}: Props) {
  return (
    <div
      style={{
        borderLeft: "3px solid #C4603A",
        backgroundColor: "#F0EDE7",
        padding: "16px 20px",
        marginBottom: "32px",
      }}
    >
      <p
        style={{
          fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
          fontSize: "12px",
          fontWeight: 600,
          color: "#C4603A",
          marginBottom: "8px",
          letterSpacing: "0.05em",
        }}
      >
        はじめて読む方へ
      </p>
      <p
        style={{
          fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
          fontSize: "14px",
          color: "#4B5563",
          lineHeight: 1.8,
          marginBottom: "12px",
        }}
      >
        このシリーズは「AI初心者の非エンジニア社長が学んだ順」に読むと理解が深まります。
      </p>
      <Link
        href={`/articles/${startArticle}`}
        className="lpg-link"
      >
        → まず {startLabel}
      </Link>

      <style>{`
        .lpg-link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #C4603A;
          text-decoration: none;
          transition: opacity 150ms ease;
        }
        .lpg-link:hover {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}
