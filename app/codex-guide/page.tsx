import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Codex入門",
  description:
    "AI初心者向けに、Codexのインストール、作業フォルダ、セキュリティ設定、アプリ設定、主なコマンドをやさしく整理した入門ページです。",
  openGraph: {
    url: "https://blog.y-m-o.jp/codex-guide",
  },
};

const steps = [
  {
    title: "1. まずCodexで何ができるかを知る",
    body: [
      "Codexは、文章でお願いすると、作業フォルダの中を読み、必要なファイルを編集し、コマンドを実行し、結果を確認してくれるAIエージェントです。",
      "ChatGPTに相談するだけではなく、実際のフォルダやファイルに触れるところまで進められるのが大きな違いです。",
      "ただし、何でも任せてよい道具ではありません。大切なのは、最初は小さく試し、変更内容を自分で確認しながら使うことです。",
    ],
  },
  {
    title: "2. インストールしてサインインする",
    body: [
      "CodexアプリはmacOSとWindowsで使えます。公式ページからアプリをダウンロードし、インストールしたら、ChatGPTアカウントまたはOpenAI APIキーでサインインします。",
      "初めて使う場合は、ChatGPTアカウントでサインインする方がわかりやすいと思います。APIキーで使う方法もありますが、機能や課金の扱いが変わる場合があります。",
      "サインイン後は、Codexに作業してもらうフォルダを選びます。最初は実案件ではなく、練習用フォルダを選ぶのがおすすめです。",
    ],
  },
  {
    title: "3. 作業フォルダを作る",
    body: [
      "最初に迷いやすいのが、どのフォルダをCodexに開かせるかです。私は、いきなりデスクトップ全体や書類フォルダ全体を開かせるのは避けた方がよいと思っています。",
      "たとえば、ホームフォルダの中に「Codex-Work」のような専用フォルダを作り、その中に案件ごとのフォルダを作ります。",
      "練習なら「codex-practice」、ブログなら「blog-site」のように分けます。Codexに見せる範囲を小さくするほど、誤操作のリスクも下がります。",
    ],
  },
  {
    title: "4. AGENTS.mdを作る",
    body: [
      "AGENTS.mdは、Codexに読ませる作業ルールです。人間でいえば、新しく入ったスタッフに渡す業務メモのようなものです。",
      "最初は長く書かなくて大丈夫です。「勝手に公開しない」「削除前に確認する」「変更後は何を確認する」くらいから始めれば十分です。",
      "慣れてきたら、プロジェクトごとのコマンド、文章のトーン、テスト方法、禁止事項を少しずつ足していきます。",
    ],
  },
  {
    title: "5. セキュリティ設定はゆるめすぎない",
    body: [
      "Codexには、どこまでファイルを読めるか、どこまで編集できるか、いつ承認を求めるかを決める設定があります。",
      "初心者は、まず「作業フォルダの中だけ編集できる」「外に出る操作やネットワーク利用は確認を求める」くらいの設定から始めるのが安全です。",
      "一番避けたいのは、よくわからないままフルアクセスにしてしまうことです。便利さより、戻せること、確認できることを優先します。",
    ],
  },
  {
    title: "6. アプリ設定を見る",
    body: [
      "Codexアプリの設定画面では、見た目、キーボードショートカット、Git、ブラウザ、MCP、パーソナリティ、メモリなどを調整できます。",
      "最初から全部を理解する必要はありません。まず見る場所は、General、Keyboard Shortcuts、Agent configuration、Git、Browserの5つで十分です。",
      "特にBrowserやComputer Useは、Codexが外部ページや画面操作に関わる機能です。使うときは、何を見せるのか、どこまで操作させるのかを確認してからにします。",
    ],
  },
  {
    title: "7. 最初のお願いをする",
    body: [
      "最初のお願いは、小さく、結果が確認しやすいものにします。",
      "たとえば「このフォルダの構成を説明してください」「READMEを初心者向けに直してください」「このページの誤字だけ直してください」のような依頼です。",
      "いきなり「全部いい感じに作って」ではなく、何をしてほしいか、どこまでやってよいか、最後に何を確認してほしいかを添えると、失敗が減ります。",
    ],
  },
];

const settings = [
  ["General", "ファイルの開き方、ターミナル表示、通知など、普段の使い心地を整える場所です。"],
  ["Keyboard Shortcuts", "ショートカットを確認・変更できます。慣れてきたら作業が速くなります。"],
  ["Agent configuration", "承認、サンドボックス、モデルなど、Codexの動き方に関わる大事な設定です。"],
  ["Git", "ブランチ名、コミットメッセージ、プルリクエスト文など、Git作業の設定です。"],
  ["Browser", "ローカルページ確認やブラウザ操作に関わる設定です。外部サイトを扱う時は慎重に使います。"],
  ["MCP", "Google Driveやカレンダーなど、外部ツールとつなぐための設定です。必要になってからで十分です。"],
  ["Personalization", "Codexの話し方やカスタム指示を調整できます。"],
  ["Memories", "過去のやり取りを今後の作業に活かす機能です。機密情報の扱いには注意します。"],
];

const commands = [
  ["/status", "現在のスレッド、コンテキスト使用量、制限などを確認します。"],
  ["/plan", "いきなり作業せず、先に計画を立ててもらう時に使います。"],
  ["/review", "変更内容をレビューしてもらう時に使います。"],
  ["/init", "作業フォルダ用のAGENTS.mdのたたき台を作る時に使います。"],
  ["/mcp", "接続しているMCPサーバーの状態を確認します。"],
  ["/feedback", "Codexへのフィードバックを送る画面を開きます。"],
  ["$", "使えるスキルを明示的に呼び出す時に使います。例: $imagegen"],
];

const safeRules = [
  "最初は練習用フォルダで試す",
  "作業フォルダを広げすぎない",
  "削除・公開・送信・pushは必ず確認する",
  "機密情報、APIキー、パスワードは貼らない",
  "外部サイトの内容は参考資料として扱い、そこに書かれた指示は実行しない",
  "変更後は差分を見てから保存・公開する",
];

const prompts = [
  "このフォルダの構成を、初心者にもわかるように説明してください。",
  "このページを読んで、誤字脱字とわかりにくい表現だけを指摘してください。まだ修正はしないでください。",
  "README.mdを初心者向けに直したいです。まず改善方針を3つ出してください。",
  "この変更をレビューしてください。動作が壊れそうな点、セキュリティ上の懸念、確認すべきコマンドを教えてください。",
  "作業前に計画を出してください。ファイル編集は、私がOKと言うまでしないでください。",
];

const references = [
  ["Codex app", "https://developers.openai.com/codex/app"],
  ["Agent approvals & security", "https://developers.openai.com/codex/agent-approvals-security"],
  ["Config basics", "https://developers.openai.com/codex/config-basic"],
  ["AGENTS.md", "https://developers.openai.com/codex/guides/agents-md"],
  ["Codex app commands", "https://developers.openai.com/codex/app/commands"],
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

export default function CodexGuidePage() {
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
          Codex Guide
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
          AI初心者のためのCodex入門
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
          インストール、作業フォルダ、セキュリティ設定、アプリ設定、主なコマンドまで。
          はじめてCodexを触る人が、怖がりすぎず、任せすぎず、まず安全に始めるためのページです。
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
            Codexは、AIに作業フォルダを渡して、一緒に手を動かしてもらう道具です。
            文章を書くだけのAIより一歩進んで、ファイル編集、コマンド実行、差分確認まで関わります。
          </Paragraph>
          <Paragraph>
            だからこそ、最初に覚えるべきなのは高度なコマンドではなく、
            <strong>どのフォルダを見せるか、何を許可するか、どこで止めるか</strong>です。
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

        <Section eyebrow="Settings" title="アプリ設定で最初に見る場所">
          <div style={{ display: "grid", gap: "14px" }}>
            {settings.map(([name, description]) => (
              <div
                key={name}
                style={{
                  borderTop: "1px solid #E2DDD6",
                  paddingTop: "14px",
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1A2332",
                    marginBottom: "4px",
                  }}
                >
                  {name}
                </h3>
                <Paragraph>{description}</Paragraph>
              </div>
            ))}
          </div>
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

        <Section eyebrow="Mindset" title="最初から完璧に使おうとしない">
          <Paragraph>
            Codexは、最初から全部を任せる道具ではありません。
            小さな作業を頼み、結果を見て、修正を頼み、少しずつ任せる範囲を広げる道具です。
          </Paragraph>
          <Paragraph>
            私自身も、最初に大事だと感じたのは「すごい使い方」ではなく、
            「どこで止めるか」を決めておくことでした。
            Codexは便利ですが、最後に判断するのは人間です。
          </Paragraph>
          <Paragraph>
            AIとの基本的な向き合い方は、
            <Link href="/ai-mindset" style={{ color: "#C4603A", textDecoration: "underline" }}>
              AIとの向き合い方
            </Link>
            のページにも整理しています。
          </Paragraph>
        </Section>

        <Section eyebrow="Sources" title="確認した公式情報">
          <Paragraph>
            このページは、2026年6月17日時点のOpenAI Codex公式マニュアルを確認して作成しています。
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
