import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Git / GitHub入門",
  description:
    "AI初心者向けに、そもそもGitとは何か、GitHubとの違い、何が便利なのか、基本コマンド、Codex・Claude Codeとの関係をやさしく整理した入門ページです。",
  openGraph: {
    url: "https://blog.y-m-o.jp/git-guide",
  },
};

const steps = [
  {
    title: "1. そもそもGitとは何か",
    body: [
      "Gitは、ファイルの変更履歴を記録しておく道具です。文章やプログラムを編集するたびに「この時点の状態」を保存でき、あとからいつでもその時点に戻せます。",
      "ふだん私たちは「企画書_最終.docx」「企画書_最終2.docx」のようにファイルを複製して履歴を残しがちですが、Gitを使うと一つのファイルのまま、いつ・誰が・どこを変えたかをきれいに記録できます。",
      "つまりGitは、保存ボタンの強力版のようなものです。間違えても前に戻れる、という安心感が一番の価値だと私は思っています。",
    ],
  },
  {
    title: "2. Gitは何が便利なのか",
    body: [
      "一つ目は、いつでも過去に戻せることです。変更して壊してしまっても、記録した時点に戻せるので、思い切って試せます。",
      "二つ目は、変更の理由が残ることです。記録（コミット）にひとことメモを添えられるので、あとから「なぜこう直したか」を追えます。",
      "三つ目は、複数人で同じファイルを安全に編集できることです。誰がどこを変えたかが分かるので、上書きし合う事故が起きにくくなります。",
    ],
  },
  {
    title: "3. GitHubとは何か",
    body: [
      "GitHubは、Gitで記録した内容をインターネット上に置いて、保存・共有できるサービスです。手元のパソコンにある履歴を、クラウドにも持っておくイメージです。",
      "パソコンが壊れてもGitHubに送ってあれば無事ですし、他の人に見てもらったり、一緒に編集してもらったりもできます。世界中の開発者が使っている、いわばコードの共有場所です。",
      "私たちの会社のブログやサイトも、GitHubに置いてあるものを公開しています。GitHubに送る（プッシュする）と、サイトに反映される、という流れです。",
    ],
  },
  {
    title: "4. GitとGitHubの違いを整理する",
    body: [
      "混同しやすいのですが、Gitは「手元で履歴を記録する仕組み」、GitHubは「その履歴をネット上に置いて共有する場所」です。",
      "たとえるなら、Gitが手元のノート、GitHubがそのノートを預けたり見せ合ったりするクラウド本棚のような関係です。GitだけでもGitHubなしで使えますが、共有やバックアップにはGitHubが便利です。",
      "GitHubのほかにGitLabやBitbucketといった似たサービスもあります。仕組み（Git）は同じで、置き場所のサービスが違うだけ、と考えると分かりやすいです。",
    ],
  },
  {
    title: "5. まず手元に用意するもの",
    body: [
      "Gitを使うには、まずパソコンにGitをインストールします。macOSやWindows向けに公式ページから入手でき、最近はインストール済みのことも多いです。",
      "インストールしたら、最初に自分の名前とメールアドレスを一度だけ設定します。これは「誰がこの変更を記録したか」を残すためのものです。",
      "GitHubも使うなら、GitHubの無料アカウントを作っておきます。最初は練習用の置き場所（リポジトリ）を一つ作って試すのがおすすめです。",
    ],
  },
  {
    title: "6. 基本の流れをつかむ",
    body: [
      "Gitの基本は、編集する → 記録する → 送る、の3ステップです。具体的には、変更を選ぶ（add）、記録する（commit）、GitHubへ送る（push）という順番です。",
      "最初はこの3つだけ覚えれば十分です。コマンドを丸暗記する必要はなく、「いまどの段階にいるか」を意識できれば、迷いにくくなります。",
      "GitHubから最新の内容を取り寄せる（pull）ことも覚えておくと、別のパソコンや他の人の変更を受け取れるようになります。",
    ],
  },
];

const words = [
  ["リポジトリ", "ファイルとその変更履歴をまとめて入れておく入れ物です。プロジェクト1つにつき1つ作るのが基本です。"],
  ["コミット", "ある時点の変更を記録することです。ひとことメモを添えて、後から振り返れる区切りを作ります。"],
  ["プッシュ", "手元の記録をGitHubへ送ることです。バックアップや共有のために行います。"],
  ["プル", "GitHub上の最新の内容を手元に取り寄せることです。プッシュの逆向きと考えると分かりやすいです。"],
  ["クローン", "GitHubにあるリポジトリを、まるごと手元にコピーしてくることです。"],
  ["ブランチ", "本線とは別の作業用の枝です。本番に影響させずに試したい時に分けて使います。"],
  ["マージ", "ブランチで進めた変更を、本線に合流させることです。"],
  [".gitignore", "記録したくないファイルを指定しておくメモです。パスワードや一時ファイルを誤って送らないために使います。"],
];

const commands = [
  ["git init", "今のフォルダで新しくGitの記録を始めます。最初の一回だけ使います。"],
  ["git clone", "GitHubにあるリポジトリを手元にコピーしてきます。"],
  ["git status", "今どのファイルが変わっているか、どの段階にあるかを確認します。迷ったらまず見ます。"],
  ["git add", "記録する変更を選びます。`git add .` でまとめて選べます。"],
  ["git commit", "選んだ変更を記録します。`-m` でひとことメモを添えます。"],
  ["git push", "手元の記録をGitHubへ送ります。公開や共有の前の最後の操作です。"],
  ["git pull", "GitHub上の最新の内容を手元に取り寄せます。"],
  ["git log", "これまでの記録（コミット）の一覧を見ます。"],
  ["git diff", "まだ記録していない変更が、どこにあるかを確認します。"],
  ["git branch", "ブランチ（作業用の枝）の確認や作成をします。"],
  ["git switch", "別のブランチに切り替えます。"],
  ["git merge", "ブランチの変更を本線に合流させます。"],
];

const safeRules = [
  "パスワード、APIキー、機密ファイルはコミットしない（`.gitignore` で除外する）",
  "公開やpushは、何を送るか確認してから行う",
  "迷ったら、まず `git status` と `git diff` で今の状態を見る",
  "履歴を強制的に書き換える操作（force push など）は慎重に扱う",
  "練習は、本番ではなく練習用リポジトリで試す",
  "他の人と共同作業する時は、作業前に `git pull` で最新を取り寄せる",
];

const prompts = [
  "Gitとは何か、GitHubとの違いも含めて、初心者にもわかるように説明してください。",
  "このフォルダでGitを始めたいです。最初に必要なコマンドを、意味も添えて順番に教えてください。",
  "今の変更内容を、Git初心者にもわかるように説明してください。まだpushはしないでください。",
  "コミットメッセージのたたき台を、何を変えたか分かる形で考えてください。",
  "間違えてファイルを消してしまいました。前の状態に戻す方法を、慎重なやり方で教えてください。",
];

const references = [
  ["Git 公式サイト", "https://git-scm.com/"],
  ["Git とは（公式ドキュメント）", "https://git-scm.com/book/ja/v2"],
  ["GitHub Docs（はじめに）", "https://docs.github.com/ja/get-started"],
  ["GitHub Hello World", "https://docs.github.com/ja/get-started/start-your-journey/hello-world"],
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

export default function GitGuidePage() {
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
          Git / GitHub Guide
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
          AI初心者のためのGit / GitHub入門
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
          そもそもGitとは何か、GitHubとの違い、何が便利なのか、基本コマンド、そしてCodex・Claude Codeとの関係まで。
          はじめてGitに触れる人が、用語に怖がりすぎず、まず全体像をつかむためのページです。
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
            Gitは、ファイルの変更履歴を記録して、いつでも前に戻せるようにする道具です。
            GitHubは、その記録をインターネット上に置いて、保存・共有できる場所です。
          </Paragraph>
          <Paragraph>
            むずかしそうに見えますが、最初に覚えるのは難しいコマンドではなく、
            <strong>何を記録し、どこに送り、どうやって前に戻すか</strong>という流れだけで十分です。
          </Paragraph>
        </div>

        <Section eyebrow="Basics" title="まずはこの順番で理解する">
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

        <Section eyebrow="Words" title="よく出てくる言葉">
          <div style={{ display: "grid", gap: "14px" }}>
            {words.map(([name, description]) => (
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

        <Section eyebrow="Commands" title="基本のコマンド一通り">
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

        <Section eyebrow="Prompt" title="AIに頼むときのお願いの例">
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

        <Section eyebrow="Relation" title="Codex・Claude Codeとの関係">
          <Paragraph>
            CodexやClaude Codeは、作業フォルダの中のファイルを編集してくれるAIです。
            その編集の履歴を記録したり、GitHubへ送ったりする土台になっているのがGitです。
          </Paragraph>
          <Paragraph>
            実際、CodexにもClaude CodeにもGitに関わる設定やコマンドがあり、AIに「変更を記録して」「GitHubに送る前に確認して」とお願いできます。
            つまりGitは、AIと一緒に作業するときの<strong>共通の足場</strong>になっています。
          </Paragraph>
          <Paragraph>
            私自身、Gitの細かい仕組みを全部は分かっていません。それでも「記録する・戻せる・送る」という考え方を持っておくだけで、AIに安心して任せられる範囲が広がりました。
          </Paragraph>
          <Paragraph>
            あわせて、
            <Link href="/codex-guide" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Codex入門
            </Link>
            と
            <Link href="/claude-code-guide" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Claude Code入門
            </Link>
            も読むと、AIとGitの組み合わせがよりイメージしやすくなります。
          </Paragraph>
        </Section>

        <Section eyebrow="Sources" title="確認した公式情報">
          <Paragraph>
            このページは、2026年6月19日時点のGit公式サイトおよびGitHub公式ドキュメントを確認して作成しています。
            画面構成や細かな手順は変わることがあるため、最新の情報は公式ページもあわせて確認してください。
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
