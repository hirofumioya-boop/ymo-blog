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
          非エンジニア社長がAI社員だけの会社を作ってみた
        </Link>

        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
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
        }
        .site-title-link:hover {
          color: #1A2332;
        }
      `}</style>
    </header>
  );
}
