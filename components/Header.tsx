"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLeaf = { href: string; label: string };
type NavGroup = { label: string; children: NavLeaf[] };
type NavItem = NavLeaf | NavGroup;

const NAV_ITEMS: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/team", label: "チーム" },
  { href: "/ai-sansho", label: "AI経営参謀" },
  { href: "/articles", label: "全記事" },
  { href: "/ai-mindset", label: "AIとの向き合い方" },
  {
    label: "Codex",
    children: [
      { href: "/codex-guide", label: "Codex入門" },
      { href: "/codex-settings", label: "Codex設定" },
    ],
  },
  {
    label: "Claude Code",
    children: [
      { href: "/claude-code-guide", label: "Claude Code入門" },
      { href: "/claude-code-settings", label: "Claude Code設定" },
    ],
  },
  {
    label: "学ぶ",
    children: [
      { href: "/git-guide", label: "Git/GitHub入門" },
      { href: "/token-saving", label: "トークン節約" },
      { href: "/glossary", label: "用語集" },
    ],
  },
];

function isGroup(item: NavItem): item is NavGroup {
  return (item as NavGroup).children !== undefined;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const isLeafActive = (href: string) =>
    href === "/articles" ? pathname.startsWith("/articles") : pathname === href;

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
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="site-title-link" onClick={() => setMenuOpen(false)}>
            <span className="title-full">トップ</span>
            <span className="title-short">トップ</span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="desktop-nav">
            {NAV_ITEMS.map((item) =>
              isGroup(item) ? (
                <div
                  key={item.label}
                  className="nav-group"
                  onMouseEnter={() => setOpenGroup(item.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className="nav-link nav-group-btn"
                    onClick={() =>
                      setOpenGroup(openGroup === item.label ? null : item.label)
                    }
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <span className="nav-caret" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <div className={`nav-dropdown ${openGroup === item.label ? "open" : ""}`}>
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`nav-dropdown-link ${isLeafActive(c.href) ? "active" : ""}`}
                        onClick={() => setOpenGroup(null)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isLeafActive(item.href) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
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
        {NAV_ITEMS.map((item) =>
          isGroup(item) ? (
            <div key={item.label}>
              <div className="mobile-group-label">{item.label}</div>
              {item.children.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className={`mobile-nav-link mobile-sub ${isLeafActive(c.href) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${isLeafActive(item.href) ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
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
          justify-content: center;
          gap: 8px 18px;
          align-items: center;
          flex: 0 1 auto;
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
        /* ドロップダウン */
        .nav-group {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .nav-group-btn {
          background: none;
          border: none;
          border-bottom: 1px solid #D6D0C8;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          padding: 0 0 4px 0;
        }
        .nav-caret {
          font-size: 9px;
          line-height: 1;
        }
        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 168px;
          background: #FFFFFF;
          border: 1px solid #E2DDD6;
          border-radius: 6px;
          box-shadow: 0 6px 20px rgba(26, 35, 50, 0.10);
          padding: 6px 0;
          display: none;
          flex-direction: column;
          z-index: 101;
        }
        .nav-dropdown.open {
          display: flex;
        }
        .nav-dropdown-link {
          display: block;
          padding: 9px 16px;
          font-size: 13px;
          color: #1A2332;
          text-decoration: none;
          white-space: nowrap;
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
        }
        .nav-dropdown-link:hover {
          background: #FAF6F1;
          color: #C4603A;
        }
        .nav-dropdown-link.active {
          background: #FAF6F1;
          color: #1A2332;
          font-weight: 600;
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
          bottom: 0;
          background-color: #FFFFFF;
          z-index: 99;
          flex-direction: column;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          padding-bottom: 24px;
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
        .mobile-group-label {
          padding: 14px 24px 4px;
          font-size: 12px;
          font-weight: 700;
          color: #C4603A;
          border-top: 1px solid #F0EDE8;
          font-family: "Noto Sans JP", sans-serif;
          letter-spacing: 0.04em;
        }
        .mobile-sub {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 40px;
          border-top: none;
          font-size: 14px;
        }
        @media (max-width: 820px) {
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
