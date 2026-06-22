import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Codex 設定ガイド",
  description:
    "AI初心者向けに、Codexアプリの設定画面（一般・構成・外観・パーソナライズ・MCPサーバー・コンピューターの使用・フックなど）の各項目を、一つずつやさしく解説したページです。",
  openGraph: {
    url: "https://blog.y-m-o.jp/codex-settings",
  },
};

type Item = [string, string];

const generalItems: Item[] = [
  [
    "作業モード（コーディング向け / 日常業務向け）",
    "Codexが表示する技術的な詳細の量を選びます。「コーディング向け」はより技術的な応答と制御、「日常業務向け」は同じ性能のまま技術的な細かさを控えめにします。非エンジニアの方は日常業務向けが扱いやすいです。",
  ],
  [
    "権限 ＞ デフォルトの権限",
    "Codexがワークスペース内のファイルを読み込み・編集できるようにする基本設定です。必要に応じて追加のアクセスを都度求める形になります。",
  ],
  [
    "権限 ＞ 自動レビュー",
    "追加アクセスのリクエストをCodexが自動でレビューする設定です。便利ですが、自動レビューは誤る場合があると明記されています。慎重に使う場面では確認を挟む運用が安全です。",
  ],
  [
    "権限 ＞ フルアクセス",
    "あなたの承認なしに、コンピュータ上のあらゆるファイル編集やネットワークコマンド実行を許可する設定です。データ損失・漏えいのリスクが大幅に高まるため、初心者は基本オフのままにします。",
  ],
];

const profileItems: Item[] = [
  [
    "プロフィール",
    "自分のアカウント表示（名前・アイコンなど）と、利用状況のまとめが表示される画面です。公開／非公開の切り替えや編集ができます。",
  ],
  [
    "トークンの使用状況",
    "日次・週次・累積で、どれくらい使ったかを振り返れます。使いすぎていないかの目安になります。",
  ],
  [
    "アクティビティの分析情報 / よく使うプラグイン",
    "自分の使い方の傾向や、よく使っているプラグインが分かります。設定というより振り返り用のダッシュボードです。",
  ],
];

const appearanceItems: Item[] = [
  [
    "テーマ（システム / ライト / ダーク）",
    "画面全体の見た目を選びます。「システム」を選ぶと、macOSの外観設定（明るい／暗い）に自動で合わせてくれます。",
  ],
  [
    "アクセント / 背景 / 前景の色",
    "強調色や背景色、文字色を細かく調整できます。最初は既定のままで十分です。",
  ],
  [
    "UIフォント / 半透明サイドバー",
    "画面の文字フォントや、サイドバーを半透明にするかどうかなど、細かな見た目を調整できます。",
  ],
];

const configItems: Item[] = [
  [
    "config.toml のカスタム設定",
    "Codexの詳細な動作を書いた設定ファイル（config.toml）を、ユーザー設定として直接開いて編集できます。慣れてきてから触る上級向けの入口です。",
  ],
  [
    "承認ポリシー",
    "Codexがあなたに承認を求めるタイミングを選びます（例：リクエスト時）。どこで確認を入れるかを決める、安全運用の中心になる項目です。",
  ],
  [
    "サンドボックスの設定",
    "コマンドの実行時に、Codexができる操作の範囲を選びます（例：読み取り専用）。範囲を狭くするほど、誤操作の影響を小さく抑えられます。",
  ],
  [
    "ワークスペースの依存関係",
    "現在のバージョン確認、Codexにバンドルされた Node.js・Python ツールの利用許可、ワークスペースの問題を診断する機能がまとまっています。",
  ],
];

const personalizeItems: Item[] = [
  [
    "性格（回答のトーン）",
    "Codexの回答の基本トーンを選びます（例：フレンドリー）。やり取りの雰囲気を好みに合わせられます。",
  ],
  [
    "カスタム指示",
    "このパソコン上のすべてのタスクに共通で効く、追加の指示やコンテキストを書いておけます。毎回同じ説明を繰り返さずに済みます。",
  ],
  [
    "メモリ（試験運用中）",
    "やり取りの内容を記憶して、次回以降に活かす実験的な機能です。試験運用中のため、扱いは慎重にします。",
  ],
];

const petsItems: Item[] = [
  [
    "ペットの選択",
    "作業画面に表示される、マスコット（コンパニオン）を選べる遊び心のある機能です。標準のCodexのほか、複数のキャラクターから選べ、自分だけのペットを作ることもできます。設定の本筋ではなく、楽しむための項目です。",
  ],
];

const shortcutItems: Item[] = [
  [
    "キーボードショートカット",
    "よく使う操作のキー割り当てを確認・変更できる画面です。慣れてくると作業が速くなりますが、最初は触らなくても問題ありません。",
  ],
];

const billingItems: Item[] = [
  [
    "使用状況と請求",
    "利用量や契約プラン、請求に関する情報を確認する画面です。お金や契約に関わる部分なので、変更するときは内容をよく確認します。",
  ],
];

const integrationItems: Item[] = [
  [
    "Appshots",
    "今いちばん前に表示しているウィンドウを撮影して、その内容（画面外にスクロールした文字も含む）をCodexに見せる機能です。ホットキー（⌘キーを2回）で呼び出せ、効果音のオン・オフも選べます。",
  ],
  [
    "MCP サーバー",
    "外部ツールやデータ情報源をCodexにつなぐための画面です。サーバーを追加したり、登録済みのものを個別にオン・オフしたりできます。必要になってから増やせば十分です。",
  ],
  [
    "ブラウザ",
    "Codexがブラウザを操作して作業する際の設定をまとめた画面です。Webの確認や操作を任せたいときに関係します。",
  ],
  [
    "コンピューターの使用",
    "Codexが、パソコン上の他のアプリをどこまで操作してよいかを管理します。「任意のアプリ」を許可するか、特定アプリ（例：Google Chrome）だけを常に許可するか、Macがロック中でも使えるようにするか、などを細かく決められます。ここは安全に直結する大事な画面です。",
  ],
];

const codingItems: Item[] = [
  [
    "フック",
    "設定や有効なプラグインから、作業の節目（ライフサイクル）で自動的に走らせる処理を管理します。自動整形や検証などに使える上級向けの仕組みで、設定していなければ何も表示されません。",
  ],
];

const safeRules = [
  "「フルアクセス」は基本オフのまま。承認なしの全権実行は避ける",
  "「承認ポリシー」と「サンドボックス」で、確認のタイミングと操作範囲を絞る",
  "「コンピューターの使用」で、操作を許可するアプリを欲張らない",
  "削除・公開・送信・支払いに関わる操作は、必ず自分で確認する",
  "個人情報・APIキー・パスワードは貼らない・保存させない",
  "config.toml など上級設定は、内容を理解してから触る",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={{ marginTop: "64px" }}>
      <p
        style={{
          fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
          fontSize: "12px",
          fontWeight: 500,
          color: "#C4603A",
          letterSpacing: 0,
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
          fontSize: "24px",
          fontWeight: 700,
          color: "#1A2332",
          marginBottom: "24px",
          lineHeight: 1.5,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
        fontSize: "15px",
        color: "#4B5563",
        lineHeight: 2,
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <div style={{ display: "grid", gap: "14px" }}>
      {items.map(([name, description]) => (
        <div key={name} style={{ borderTop: "1px solid #E2DDD6", paddingTop: "14px" }}>
          <h3
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "16px",
              fontWeight: 600,
              color: "#1A2332",
              marginBottom: "4px",
              lineHeight: 1.6,
            }}
          >
            {name}
          </h3>
          <Paragraph>{description}</Paragraph>
        </div>
      ))}
    </div>
  );
}

export default function CodexSettingsPage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "64px 24px 96px" }}>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "13px",
            color: "#C4603A",
            letterSpacing: 0,
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Codex Settings
        </p>
        <h1
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "30px",
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: "16px",
            lineHeight: 1.45,
          }}
        >
          Codex の設定画面ガイド
        </h1>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "16px",
            color: "#6B7280",
            lineHeight: 1.9,
            marginBottom: "32px",
          }}
        >
          Codexアプリの設定画面に並ぶ項目を、一つずつやさしく説明します。
          どこで安全を守り、どこは後回しでよいのか、はじめての方が迷わないための地図として使ってください。
        </p>
        <div style={{ borderTop: "1px solid #E2DDD6", marginBottom: "40px" }} />

        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2DDD6",
            borderRadius: "4px",
            padding: "24px",
            marginBottom: "48px",
          }}
        >
          <Paragraph>
            設定画面は、Codexアプリの画面左下の「設定」、またはメニューの「Codex」から開けます（キーボードでは ⌘ と「,」を同時押し）。
            設定は大きく<strong>「個人設定」「連携」「コーディング」</strong>の3つに分かれています。
          </Paragraph>
          <Paragraph>
            全部を覚える必要はありません。まずは「一般」の権限と、「構成」の承認ポリシー・サンドボックス、
            そして「コンピューターの使用」だけ押さえておけば、安全に使い始められます。
          </Paragraph>
        </div>

        <Section eyebrow="Personal" title="個人設定">
          <Paragraph>自分用の基本設定です。動作の許可、見た目、応答の好みなどをここで決めます。</Paragraph>

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>一般</h3>
          <Paragraph>作業モードと、Codexがどこまでファイルを触れるかという権限の入口です。安全の要になります。</Paragraph>
          <ItemList items={generalItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>プロフィール</h3>
          <Paragraph>自分のアカウント表示と、使い方を振り返るためのダッシュボードです。</Paragraph>
          <ItemList items={profileItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>外観</h3>
          <Paragraph>画面の見た目を調整します。最初は既定のままで問題ありません。</Paragraph>
          <ItemList items={appearanceItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>構成</h3>
          <Paragraph>承認ポリシーとサンドボックスを設定する、安全運用の中心となる画面です。</Paragraph>
          <ItemList items={configItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>パーソナライズ</h3>
          <Paragraph>応答のトーンや、共通の指示・記憶など、付き合い方を自分好みに整えます。</Paragraph>
          <ItemList items={personalizeItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>Pets</h3>
          <ItemList items={petsItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>キーボードショートカット</h3>
          <ItemList items={shortcutItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>使用状況と請求</h3>
          <ItemList items={billingItems} />
        </Section>

        <Section eyebrow="Integration" title="連携">
          <Paragraph>
            外部のツールやアプリ、ブラウザ、パソコン操作とCodexをつなぐ設定です。
            ここは便利さと引き換えに、できることが広がる場所なので、許可する範囲を意識します。
          </Paragraph>
          <ItemList items={integrationItems} />
        </Section>

        <Section eyebrow="Coding" title="コーディング">
          <Paragraph>開発作業の自動化に関わる、上級向けの設定です。</Paragraph>
          <ItemList items={codingItems} />
        </Section>

        <Section eyebrow="Security" title="初心者が押さえる安全ポイント">
          <ul
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 2,
              paddingLeft: "1.4em",
              margin: 0,
            }}
          >
            {safeRules.map((rule) => (
              <li key={rule} style={{ marginBottom: "8px" }}>
                {rule}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Next" title="あわせて読む">
          <Paragraph>
            Codexをはじめて触る方は、先に
            <Link href="/codex-guide" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Codex入門
            </Link>
            で全体像をつかむと、この設定ガイドが読みやすくなります。Claude Codeとの違いを知りたい場合は、
            <Link href="/claude-code-guide" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Claude Code入門
            </Link>
            もどうぞ。
          </Paragraph>
        </Section>

        <Section eyebrow="Note" title="このページについて">
          <Paragraph>
            このページは、2026年6月22日時点の我が社のCodexアプリの設定画面を実際に確認して作成しています。
            項目名や構成はアップデートで変わることがあるため、細かな最新情報はアプリ内の表示もあわせて確認してください。
            画面に表示される個人情報やアカウント名は、このページには載せていません。
          </Paragraph>
        </Section>
      </div>
    </div>
  );
}
