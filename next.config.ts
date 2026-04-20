import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // 全ページに適用
        source: "/(.*)",
        headers: [
          {
            // クリックジャッキング防止
            // 自分のサイトが他サイトに透明に埋め込まれるのを防ぐ
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // MIMEタイプのなりすまし防止
            // ブラウザがファイルの種類を勝手に変えて解釈するのを防ぐ
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // リファラー情報の制限
            // 他サイトへのリンクを踏んだとき、どこから来たか教えすぎないようにする
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // 権限の制限
            // カメラ・マイク・位置情報などの機能を無効化する
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // コンテンツセキュリティポリシー
            // 読み込んでいい外部リソースの範囲を明示する
            // Googleフォント・Googleフォーム・GA4を許可している
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com", // Next.jsの動作・GA4に必要
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "frame-src https://docs.google.com", // Googleフォームリンク用
              "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
