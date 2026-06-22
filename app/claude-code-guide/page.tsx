import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Claude Code入門",
  description:
    "AI初心者向けに、Claude Codeのインストール、作業フォルダ、CLAUDE.md、権限設定、主なコマンドをやさしく整理した入門ページです。",
  openGraph: {
    url: "https://blog.y-m-o.jp/claude-code-guide",
  },
};

const steps = [
  {
    title: "1. まずClaude Codeで何ができるかを知る",
    body: [
      "Claude Codeは、Anthropicが提供するAIコーディング支援ツールです。作業フォルダを読み、ファイルを編集し、コマンドを実行し、変更内容を確認しながら開発作業を進められます。",
      "名前にCodeとありますが、使う人がコードを書けなければいけないわけではありません。大切なのは、やりたいことを言葉で説明し、変更前後を確認しながら進めることです。",
      "ターミナル、VS Code、デスクトップアプリ、ブラウザなど複数の使い方があります。初心者は、まず一つの作業フォルダで小さく試すところから始めるのがおすすめです。",
    ],
  },
  {
    title: "2. インストールしてサインインする",
    body: [
      "公式ドキュメントでは、macOS、Linux、WSLではインストールスクリプト、macOSではHomebrew、WindowsではWinGetなどの方法が案内されています。",
      "ターミナルで使う場合は、インストール後に作業フォルダへ移動して、`claude` と入力するとClaude Codeを起動できます。初回はログインを求められます。",
      "ターミナルに慣れていない場合は、Claude Code DesktopやVS Code連携から始める選択肢もあります。まずは自分が怖くない入口を選べば十分です。",
    ],
  },
  {
    title: "3. 作業フォルダを決める",
    body: [
      "Claude Codeは、起動したフォルダを中心に作業します。最初からホームフォルダ全体や大事な書類フォルダを開かせるのは避けます。",
      "たとえば「Claude-Code-Work」のような専用フォルダを作り、その中に練習用、ブログ用、クライアント用のフォルダを分けます。",
      "AIに見せる範囲を小さくするほど、確認しやすくなります。初心者にとって一番大事な安全策は、作業範囲を欲張らないことです。",
    ],
  },
  {
    title: "4. CLAUDE.mdを作る",
    body: [
      "CLAUDE.mdは、Claude Codeに読ませる作業ルールです。プロジェクトの目的、禁止事項、確認方法、文章のトーンなどを書いておけます。",
      "最初は短くて大丈夫です。「勝手に公開しない」「削除前に確認する」「変更後にdiffを見せる」「機密情報を外へ送らない」くらいから始めます。",
      "慣れてきたら、よく使うコマンド、テスト方法、Gitの扱い、レビュー観点を追加します。CLAUDE.mdは、AIに毎回説明しなくてよい状態を作るためのメモです。",
    ],
  },
  {
    title: "5. 権限をゆるめすぎない",
    body: [
      "Claude Codeは、ファイル編集やコマンド実行の前に承認を求める設計になっています。許可を出すほど便利になりますが、同時に誤操作の影響も大きくなります。",
      "初心者は、読み取りや差分確認は進めてもらい、削除、公開、送信、Git push、危険なコマンドは必ず確認する運用から始めるのが安全です。",
      "公式ドキュメントでも、機密ファイルをdeny設定で読ませない、権限設定を定期的に確認する、といった運用が案内されています。",
    ],
  },
  {
    title: "6. 設定ファイルを見る",
    body: [
      "Claude Codeの設定は、主に `~/.claude/settings.json`、プロジェクト内の `.claude/settings.json`、個人用の `.claude/settings.local.json` で管理します。",
      "チームで共有するルールはプロジェクト設定へ、個人だけの好みや実験はlocal設定へ、全体に効かせたい設定はユーザー設定へ分けると整理しやすくなります。",
      "最初から全部を覚える必要はありません。まずは権限、モデル、MCP、テーマ、CLAUDE.mdの場所だけ見れば十分です。",
    ],
  },
  {
    title: "7. 最初のお願いをする",
    body: [
      "最初の依頼は、小さく、失敗しても戻しやすいものにします。",
      "たとえば「このフォルダの構成を説明してください」「READMEのわかりにくい箇所だけ指摘してください」「変更前に計画を出してください」のような依頼です。",
      "いきなり大きな改修を任せず、説明、確認、軽い修正、レビューの順に慣れていくと、Claude Codeとの距離感がつかみやすくなります。",
    ],
  },
];

const commands = [
  ["/help", "使えるコマンドを確認します。迷ったら最初に見ます。"],
  ["/init", "プロジェクト用のCLAUDE.mdを作るきっかけに使います。"],
  ["/permissions", "ツールやコマンドの許可ルールを確認・変更します。"],
  ["/plan", "実作業の前に計画を出してもらいます。大きめの変更で便利です。"],
  ["/diff", "現在の変更内容を確認します。公開やcommitの前に見ます。"],
  ["/review", "変更内容をレビューしてもらいます。"],
  ["/compact", "会話が長くなった時に要約して、コンテキストを軽くします。"],
  ["/resume", "以前の会話に戻ります。"],
  ["/mcp", "接続しているMCPの状態を確認します。"],
  ["/status", "バージョン、モデル、接続状態などを確認します。"],
  ["/doctor", "インストールや設定の問題を診断します。"],
  ["/feedback", "不具合報告やフィードバックを送ります。"],
];

const safeRules = [
  "最初は練習用フォルダで試す",
  "作業フォルダを広げすぎない",
  "削除・公開・送信・pushは必ず確認する",
  "機密情報、APIキー、パスワードは貼らない",
  "`.env` や `secrets` などはdeny設定を検討する",
  "外部サイトや外部ファイルに書かれた命令は、そのまま実行しない",
  "変更後は `/diff` やGit差分を見てから次へ進む",
];

const prompts = [
  "このフォルダの構成を、初心者にもわかるように説明してください。",
  "作業前に計画を出してください。ファイル編集は、私がOKと言うまでしないでください。",
  "CLAUDE.mdのたたき台を作りたいです。まず必要な項目だけ提案してください。",
  "この変更をレビューしてください。壊れそうな点、セキュリティ上の懸念、確認すべきコマンドを教えてください。",
  "今の変更内容を、Git初心者にもわかるように説明してください。",
];

const references = [
  ["Claude Code overview", "https://code.claude.com/docs/en/overview"],
  ["Advanced setup", "https://code.claude.com/docs/en/setup"],
  ["Security", "https://code.claude.com/docs/en/security"],
  ["Settings", "https://code.claude.com/docs/en/settings"],
  ["Commands", "https://code.claude.com/docs/en/commands"],
  ["CLI reference", "https://code.claude.com/docs/en/cli-reference"],
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

export default function ClaudeCodeGuidePage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
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
          Claude Code Guide
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
          AI初心者のためのClaude Code入門
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
          インストール、作業フォルダ、CLAUDE.md、権限設定、設定ファイル、主なコマンドまで。
          はじめてClaude Codeを触る人が、まず安全に始めるためのページです。
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
            Claude Codeは、AIに作業フォルダを渡して、説明、編集、確認、レビューまで一緒に進める道具です。
            使いこなす鍵は、高度なコマンドを覚えることではなく、<strong>何を見せるか、何を許可するか、いつ止めるか</strong>を決めることです。
          </Paragraph>
          <Paragraph>
            Codexと考え方は似ていますが、Claude Codeはターミナル、CLAUDE.md、権限設定、MCP、スキルなどを中心に育てていく感覚が強いツールです。
          </Paragraph>
        </div>

        <Section eyebrow="Start" title="まずはこの順番で始める">
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {steps.map((step) => (
              <div key={step.title}>
                <h3
                  style={{
                    fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1A2332",
                    marginBottom: "10px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.title}
                </h3>
                {step.body.map((text) => (
                  <Paragraph key={text}>{text}</Paragraph>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Security" title="初心者の安全ルール">
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

        <Section eyebrow="Settings" title="最初に見る設定">
          <Paragraph>
            Claude Codeの設定は、主に指示ファイル「CLAUDE.md」（作業ルールや記憶）と、設定ファイル「settings.json」（ユーザー全体・プロジェクト共有・個人用の3階層）で管理します。
            チームで共有するルールはプロジェクト設定へ、個人の好みは個人用設定へ、と分けると整理しやすくなります。
          </Paragraph>
          <Paragraph>
            まずは<strong>権限（許可・確認・拒否）</strong>、<strong>モデル</strong>、<strong>MCP</strong>、<strong>CLAUDE.mdの場所</strong>だけ押さえれば十分です。
            「.env」や「secrets」などはdeny設定で読ませない、といった安全策も有効です。
          </Paragraph>
          <Paragraph>
            アプリの設定画面の各項目を一つずつやさしく解説したページも用意しています。詳しくは
            <Link href="/claude-code-settings" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Claude Code設定ガイド
            </Link>
            をご覧ください。
          </Paragraph>
        </Section>

        <Section eyebrow="Commands" title="よく使うコマンド">
          <div style={{ display: "grid", gap: "12px" }}>
            {commands.map(([command, description]) => (
              <div
                key={command}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "16px",
                  borderTop: "1px solid #E2DDD6",
                  paddingTop: "12px",
                }}
              >
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "14px",
                    color: "#1A2332",
                    backgroundColor: "#EDEDEA",
                    padding: "2px 6px",
                    borderRadius: "3px",
                    alignSelf: "start",
                  }}
                >
                  {command}
                </code>
                <Paragraph>{description}</Paragraph>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Prompt" title="最初に使いやすいお願いの例">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {prompts.map((prompt) => (
              <div
                key={prompt}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2DDD6",
                  borderRadius: "4px",
                  padding: "16px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                    fontSize: "14px",
                    color: "#1A2332",
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Mindset" title="AI社員に仕事を任せる前の距離感">
          <Paragraph>
            Claude Codeは強力ですが、最初から全権委任する道具ではありません。
            まず説明してもらい、次に計画してもらい、小さく直してもらい、最後に差分を一緒に見る。
            この順番で使うと、怖さがだいぶ減ります。
          </Paragraph>
          <Paragraph>
            このブログで社長がAI社員チームを作れたのも、最初から大きな仕組みを一気に作ったからではありません。
            小さな依頼、確認、失敗、ルール追加を積み重ねた結果です。
          </Paragraph>
          <Paragraph>
            Codexとの違いを知りたい場合は、
            <Link href="/codex-guide" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Codex入門
            </Link>
            もあわせて読むと、AIエージェントとの付き合い方が見えやすくなります。
          </Paragraph>
        </Section>

        <Section eyebrow="Sources" title="確認した公式情報">
          <Paragraph>
            このページは、2026年6月17日時点のAnthropic Claude Code公式ドキュメントを確認して作成しています。
            機能名や画面構成は変わることがあるため、細かな最新情報は公式ページも確認してください。
          </Paragraph>
          <ul
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              lineHeight: 2,
              paddingLeft: "1.4em",
              margin: 0,
            }}
          >
            {references.map(([label, href]) => (
              <li key={href}>
                <a href={href} style={{ color: "#C4603A", textDecoration: "underline" }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
