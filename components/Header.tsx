"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        height: "64px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E2DDD6",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" className="site-title-link">
          <span className="title-full">非エンジニア社長がAI社員だけの会社を作ってみた</span>
          <span className="title-short">AI社員だけの会社</span>
        </Link>

        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/team"
            className={`nav-link ${pathname === "/team" ? "active" : ""}`}
          >
            チーム
          </Link>
          <Link
            href="/articles"
            className={`nav-link ${pathname.startsWith("/articles") ? "active" : ""}`}
          >
            全記事
          </Link>
        </nav>
      </div>

      <style>{`
        .site-title-link {
          font-family: "Noto Serif JP", "游明朝", Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #1A2332;
          text-decoration: none;
          letter-spacing: 0.05em;
          flex-shrink: 1;
          min-width: 0;
        }
        .site-title-link:hover {
          color: #1A2332;
        }
        .title-short {
          display: none;
        }
        @media (max-width: 640px) {
          .title-full {
            display: none;
          }
          .title-short {
            display: inline;
            font-size: 16px;
          }
          .nav-link {
            font-size: 13px !important;
          }
        }
        @media (max-width: 400px) {
          .site-title-link {
            font-size: 14px;
          }
        }
      `}</style>
    </header>
  );
}
