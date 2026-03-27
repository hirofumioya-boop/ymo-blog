export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A2332",
        color: "#F7F5F0",
        padding: "48px 24px",
        marginTop: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                fontSize: "16px",
                fontWeight: 600,
                color: "#F7F5F0",
                marginBottom: "8px",
              }}
            >
              非エンジニア社長がAI社員だけの会社を作ってみた
            </p>
            <p
              style={{
                fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                fontSize: "14px",
                color: "#9CA3AF",
              }}
            >
              非エンジニア社長がAI社員だけの会社を作ってみた。
            </p>
          </div>

        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "16px",
            marginTop: "8px",
          }}
        >
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "13px",
              color: "#6B7280",
            }}
          >
            © 2026
          </p>
        </div>
      </div>

      <style>{`
        .footer-note-link {
          font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif;
          font-size: 14px;
          color: #C4603A;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 150ms ease;
        }
        .footer-note-link:hover {
          color: #D97754;
        }
      `}</style>
    </footer>
  );
}
