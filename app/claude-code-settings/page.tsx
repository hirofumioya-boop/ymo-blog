import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Claude Code 設定ガイド",
  description:
    "AI初心者向けに、Claude Code（デスクトップアプリ）の設定画面の各項目を、一つずつやさしく解説したページです。権限モード・Claude Code・連携・カスタマイズなど、どこで安全を守り、どこは後回しでよいかを地図のように説明します。",
  openGraph: {
    url: "https://blog.y-m-o.jp/claude-code-settings",
  },
};

type Item = [string, string];

const claudeCodeGeneralItems: Item[] = [
  [
    "セッション状態の分類",
    "Claudeが、進行中の各セッションを「ブロック中／レビュー待ち／完了」などに自動で仕分けします。たくさんの作業を並行しても状況がひと目で分かります。分類はプランの使用量に少し加算され、新しいセッションから有効になります。",
  ],
  [
    "フラグ検知時にモデルを切り替える",
    "安全対策でメッセージにフラグが立ったとき、会話を止めずに別のモデルへ自動で切り替えて続行する設定です。オフにすると、代わりにセッションが一時停止します（ウェブ・リモートのセッションが対象）。",
  ],
];

const claudeCodeDisplayItems: Item[] = [
  [
    "テーマ（ライト用・ダーク用の配色）",
    "コードや差分（変更箇所）の色づけを、ライト用（例：Claude Light）とダーク用（例：Claude Dark）でそれぞれ選べます。追加・削除がひと目で分かるようになります。最初は既定のままで十分です。",
  ],
  [
    "コードフォント",
    "コードやターミナルに使う等幅フォントを指定できます（例：JetBrains Mono）。空欄なら既定のフォントが使われます。",
  ],
];

const claudeCodeAppearanceItems: Item[] = [
  [
    "ハイコントラストダークテーマ",
    "ダークモードのとき、より黒に近い背景にしてコントラストを強める設定です。見やすさの好みで切り替えます。",
  ],
  [
    "インターフェースフォント",
    "メニュー・サイドバー・チャットなど、画面全体の文字フォントを選びます（Anthropic Sans／システム）。",
  ],
  [
    "トランスクリプトのテキストサイズ",
    "会話ログの文字サイズを、小・中・大から選べます。読みやすい大きさにできます。",
  ],
  [
    "トランスクリプトの幅",
    "会話と入力欄の最大幅を、狭い・中・広いから選べます。長い行の読みやすさを調整できます。",
  ],
];

const permissionModeItems: Item[] = [
  [
    "確認モード（Ask・既定）",
    "変更を加える前に、必ずあなたの承認を求めるモードです。差分（変更箇所）を見てから、承認・却下を一つずつ選べます。ファイルは承認するまで書き換わりません。はじめての方はこのままが安心です。",
  ],
  [
    "自動承認（Auto accept edits）",
    "ファイルの編集を自動で受け入れて、素早く進めるモードです。スピードは出ますが、確認が減るぶん、内容を理解した安全な場面に絞って使います。",
  ],
  [
    "プランモード（Plan）",
    "ファイルを一切触らずに、進め方の計画だけを立てさせるモードです。大きな変更の前に、方針だけ先に確認したいときに向いています。",
  ],
];

const settingsItems: Item[] = [
  [
    "一般",
    "アプリ全体に関わる基本的な設定の入口です。まず開いて、表示や動作の好みを整えます。",
  ],
  [
    "アカウント",
    "ログイン中のアカウント情報やプラン、サインアウトなどを扱う画面です。個人情報に触れるので、変更するときは内容をよく確認します。",
  ],
  [
    "プライバシー",
    "会話データの取り扱いや、学習への利用可否などプライバシーに関する設定です。気になる項目はここで確認・調整できます。",
  ],
  [
    "請求",
    "プランや支払い方法、請求に関する情報を確認する画面です。お金に関わる部分なので、変更は慎重に行います。",
  ],
  [
    "使用量",
    "日次・週次などの利用量を振り返れるダッシュボードです。使いすぎていないかの目安になります。",
  ],
  [
    "機能",
    "実験的な機能や追加機能のオン・オフをまとめた画面です。必要になってから触れば十分です。",
  ],
  [
    "Cowork",
    "指示した作業を、クラウド上で自律的に進めてくれる「Cowork」の設定です。バックグラウンドで動くぶん、任せる範囲を意識します。",
  ],
  [
    "Claude in Chrome",
    "ChromeでClaudeにページの閲覧・操作を任せるための連携設定です。便利な反面できることが広がるので、許可する範囲に注意します。",
  ],
];

const desktopAppItems: Item[] = [
  [
    "一般",
    "デスクトップアプリ自体の基本動作（起動時の挙動や表示など）に関する設定です。",
  ],
  [
    "拡張機能",
    "アプリに追加できる拡張機能を管理する画面です。必要なものだけ有効にします。",
  ],
  [
    "開発者",
    "ログ出力や詳細表示など、上級者・トラブル調査向けの設定がまとまっています。普段は触らなくて問題ありません。",
  ],
];

const customizeItems: Item[] = [
  [
    "スキル",
    "繰り返す作業を「スキル」として呼び出せる仕組みの管理画面です（例：レビュー手順、定型の作業）。チャットで「/（スラッシュ）」や「＋」ボタンから使えます。",
  ],
  [
    "コネクタ",
    "Google Drive・Gmail・Slackなど、外部サービスとClaudeをつなぐための設定です。必要になったサービスだけ繋ぐのが安全です。",
  ],
  [
    "プラグイン",
    "スキル・エージェント・コネクタ・MCPなどをまとめて追加できる「プラグイン」の管理画面です。信頼できる提供元のものだけ入れます。",
  ],
];

const safeRules = [
  "まずは「確認モード（Ask）」で使い、差分（変更箇所）を見てから承認する",
  "「自動承認」は内容を理解し、安全だと分かる場面に絞って使う",
  "コネクタ・プラグイン・MCPは、信頼できるものだけ・必要な範囲だけ繋ぐ",
  "削除・公開・送信・支払いに関わる操作は、必ず自分で確認する",
  "個人情報・APIキー・パスワードは貼らない・保存させない",
  "「開発者」など上級設定は、内容を理解してから触る",
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

export default function ClaudeCodeSettingsPage() {
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
          Claude Code Settings
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
          Claude Code の設定画面ガイド
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
          Claude Code（デスクトップアプリ）の設定画面に並ぶ項目を、一つずつやさしく説明します。
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
            設定画面は、アプリのメニュー（macOSは画面上部の<strong>「Claude ＞ 設定…」</strong>）から開けます。
            キーボードショートカットは、<strong>macOSが「⌘」+「,」</strong>、<strong>Windowsが「Ctrl」+「,」</strong>です。
            設定は左側のメニューで、大きく<strong>「設定」「デスクトップアプリ」「カスタマイズ」</strong>の3つに分かれています。
          </Paragraph>
          <Paragraph>
            全部を覚える必要はありません。まずは<strong>「権限モード」</strong>（確認のタイミング）と、
            <strong>「Claude Code」</strong>タブの見た目、そして<strong>「コネクタ」「プラグイン」</strong>で何を繋ぐかだけ押さえておけば、安全に使い始められます。
          </Paragraph>
        </div>

        <Section eyebrow="Permission" title="権限モード（いちばん大事なところ）">
          <Paragraph>
            Claude Codeでは、ファイルを編集する前にどこまで確認するかを「権限モード」で選びます。
            ここが安全運用の中心です。チャット画面の権限モード表示から、いつでも切り替えられます。
          </Paragraph>
          <ItemList items={permissionModeItems} />
        </Section>

        <Section eyebrow="Claude Code" title="Claude Code タブ">
          <Paragraph>
            コーディング機能（Claude Code）そのものの設定です。動作の見え方や、コード・会話ログの表示を整えます。
          </Paragraph>

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>一般</h3>
          <Paragraph>セッションの仕分けや、安全フラグが立ったときのふるまいを決めます。</Paragraph>
          <ItemList items={claudeCodeGeneralItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>コードの表示設定</h3>
          <Paragraph>コードや差分（変更箇所）の見え方を整えます。最初は既定のままで問題ありません。</Paragraph>
          <ItemList items={claudeCodeDisplayItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>外観</h3>
          <Paragraph>画面全体の見た目や、文字の大きさ・幅を好みに合わせます。</Paragraph>
          <ItemList items={claudeCodeAppearanceItems} />

          <h3 style={{ fontFamily: '"Noto Sans JP", sans-serif', fontSize: "17px", fontWeight: 600, color: "#1A2332", margin: "28px 0 8px" }}>ゲストパス</h3>
          <Paragraph>
            友だちにClaude Codeの無料トライアルを贈れる紹介機能です。設定の本筋ではなく、おまけの項目です。
          </Paragraph>
        </Section>

        <Section eyebrow="Settings" title="設定（アカウントまわり）">
          <Paragraph>
            アカウント・プライバシー・請求・利用量など、自分の使い方に関わる基本設定がまとまっています。
            CoworkやClaude in Chromeなど、別の使い方の設定もここに並びます。
          </Paragraph>
          <ItemList items={settingsItems} />
        </Section>

        <Section eyebrow="Desktop App" title="デスクトップアプリ">
          <Paragraph>アプリ本体の動作に関する設定です。多くは初期設定のままで問題ありません。</Paragraph>
          <ItemList items={desktopAppItems} />
        </Section>

        <Section eyebrow="Customize" title="カスタマイズ（スキル・コネクタ・プラグイン）">
          <Paragraph>
            Claude Codeにできることを足していく設定です。ここは便利さと引き換えに、できることが広がる場所なので、
            信頼できるものを必要な範囲で追加します。
          </Paragraph>
          <ItemList items={customizeItems} />
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
            Claude Codeをはじめて触る方は、先に
            <Link href="/claude-code-guide" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Claude Code入門
            </Link>
            で全体像をつかむと、この設定ガイドが読みやすくなります。Codexとの違いを知りたい場合は、
            <Link href="/codex-settings" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Codex設定ガイド
            </Link>
            もあわせてどうぞ。
          </Paragraph>
        </Section>

        <Section eyebrow="Note" title="このページについて">
          <Paragraph>
            このページは、2026年6月22日時点の我が社のClaude Codeアプリの設定画面（左メニューの構成と各項目）を実際に確認し、
            Anthropicの公式ドキュメントもあわせて参照して作成しています。
            項目名や構成はアップデートで変わることがあるため、細かな最新情報はアプリ内の表示もあわせて確認してください。
            なお本ガイドはmacOS版の画面をもとにしていますが、Claude CodeのデスクトップアプリはWindowsでも使え、項目はほぼ同じです（キーボードショートカットなど一部が異なります）。
            画面に表示される個人情報やアカウント名は、このページには載せていません。
          </Paragraph>
        </Section>
      </div>
    </div>
  );
}
