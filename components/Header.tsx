"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  { href: "/team", label: "チーム", match: (p: string) => p === "/team" },
  { href: "/ai-sansho", label: "AI経営参謀", match: (p: string) => p === "/ai-sansho" },
  { href: "/articles", label: "全記事", match: (p: string) => p.startsWith("/articles") },
  { href: "/ai-mindset", label: "AIとの向き合い方", match: (p: string) => p === "/ai-mindset" },
  { href: "/codex-guide", label: "Codex入門", match: (p: string) => p === "/codex-guide" },
  { href: "/codex-settings", label: "Codex設定", match: (p: string) => p === "/codex-settings" },
  { href: "/claude-code-guide", label: "Claude Code入門", match: (p: string) => p === "/claude-code-guide" },
  { href: "/claude-code-settings", label: "Claude Code設定", match: (p: string) => p === "/claude-code-settings" },
  { href: "/git-guide", label: "Git/GitHub入門", match: (p: string) => p === "/git-guide" },
  { href: "/token-saving", label: "トークン節約", match: (p: string) => p === "/token-saving" },
  { href: "/glossary", label: "用語集", match: (p: string) => p === "/glossary" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          minHeight: "64px",
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
            padding: "10px 24px",
            minHeight: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Link href="/" className="site-title-link" onClick={() => setMenuOpen(false)}>
            <span className="title-full">トップ</span>
            <span className="title-short">トップ</span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${item.match(pathname) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ハンバーガーボタン（モバイルのみ表示） */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-line ${menuOpen ? "open-1" : ""}`} />
            <span className={`hamburger-line ${menuOpen ? "open-2" : ""}`} />
            <span className={`hamburger-line ${menuOpen ? "open-3" : ""}`} />
          </button>
        </div>
      </header>

      {/* モバイルドロップダウンメニュー */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${item.match(pathname) ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <style>{`
        .site-title-link {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #1A2332;
          text-decoration: none;
          letter-spacing: 0.03em;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .site-title-link:hover {
          color: #C4603A;
        }
        .title-short {
          display: none;
        }
        /* デスクトップナビ */
        .desktop-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px 18px;
          align-items: center;
          flex: 1 1 auto;
        }
        .nav-link {
          font-size: 12px;
          font-weight: 500;
          color: #1A2332;
          text-decoration: none;
          white-space: nowrap;
          padding-bottom: 4px;
          border-bottom: 1px solid #D6D0C8;
          transition: color 0.2s ease, border-bottom-color 0.2s ease, font-weight 0.2s ease;
        }
        .nav-link.active {
          color: #C4603A;
          font-weight: 600;
          border-bottom-color: #C4603A;
        }
        .nav-link:hover {
          color: #C4603A;
          font-weight: 600;
          border-bottom-color: #C4603A;
        }
        /* ハンバーガーボタン */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #1A2332;
          transition: transform 0.2s, opacity 0.2s;
        }
        .hamburger-line.open-1 {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger-line.open-2 {
          opacity: 0;
        }
        .hamburger-line.open-3 {
          transform: translateY(-7px) rotate(-45deg);
        }
        /* モバイルドロップダウン */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background-color: #FFFFFF;
          border-bottom: 1px solid #E2DDD6;
          z-index: 99;
          flex-direction: column;
          max-height: calc(100vh - 64px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .mobile-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .mobile-nav-link {
          display: block;
          padding: 16px 24px;
          font-size: 15px;
          color: #4A5568;
          text-decoration: none;
          border-top: 1px solid #F0EDE8;
          font-family: "Noto Sans JP", sans-serif;
        }
        .mobile-nav-link.active {
          color: #1A2332;
          font-weight: 600;
        }
        .mobile-nav-link:hover {
          background-color: #FAF9F7;
          color: #1A2332;
        }
        @media (max-width: 720px) {
          .title-full {
            display: none;
          }
          .title-short {
            display: inline;
            font-size: 14px;
          }
          .desktop-nav {
            display: none;
          }
          .hamburger-btn {
            display: flex;
          }
          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
