import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HashScroll from "@/components/HashScroll";
import Script from "next/script";

const siteTitle = "AIが気になる。でもとっかかりがわからない。";
const siteDescription = "AIは技術の話じゃなかった。経営者なら誰でも知っている、組織論の話だった。非エンジニア社長が実践した全記録。";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://blog.y-m-o.jp',
    siteName: '横濱マネジメントオフィス ブログ',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Noto+Sans+JP:wght@400;500&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: WebSite スキーマ（TASK-116・全ページ共通）
            静的な定数値のみで構成。外部入力なし。 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebSite","name":"横濱マネジメントオフィス ブログ","url":"https://blog.y-m-o.jp","publisher":{"@type":"Organization","name":"横濱マネジメントオフィス合同会社"}}' }}
        />
      </head>
      <body>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        <HashScroll />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
