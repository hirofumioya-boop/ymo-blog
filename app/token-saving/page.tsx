import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "トークン節約のコツ",
  description:
    "AI初心者向けに、Claude Code・Codex共通で効く「トークン節約」のコツを、仕組み（なぜ効くのか）から初級・中級・上級まで、やさしく解説したページです。コストを抑え、速く、精度を保つための実践ガイド。",
  openGraph: {
    url: "https://blog.y-m-o.jp/token-saving",
  },
};

type Item = [string, string];

const mechanismItems: Item[] = [
  [
    "履歴は毎回まるごと送られる",
    "AIは前の会話を覚えているわけではなく、新しく送るたびに「それまでのやり取り全部」を一緒に送り直しています。だから会話が長くなるほど、毎回の送信量（＝トークン）が積み上がっていきます。話が一段落したら区切る、が効く理由です。",
  ],
  [
    "出力（AIの返答）は割高",
    "同じ量でも、AIが文章を「書く」ぶんは、こちらが「渡す」ぶんより数倍コストがかかります。つまり「長々と説明させる」より「結論だけ簡潔に」と頼むほうが、安く・速く済みます。",
  ],
  [
    "2つの上限と自動圧縮",
    "トークンには「一度に扱える量（コンテキスト窓）」と「プランごとの使用量」の2つの上限があります。窓がいっぱいに近づくと自動で要約（圧縮）されますが、待たずに自分で整理したほうが、精度も保てます。",
  ],
];

const beginnerItems: Item[] = [
  [
    "話題が変わったら新しい会話に",
    "別のテーマに移るときは、前の文脈を引きずらないよう新しい会話を始めます。関係ない履歴を毎回送らずに済み、AIも迷いません。",
  ],
  [
    "長くなってきたら要約（圧縮）する",
    "会話が伸びてきたら、要点だけ残して圧縮します。大事な前提は保ったまま、送信量を一気に減らせます。",
  ],
  [
    "質問はまとめて1回で",
    "関連する質問を小出しにせず、ひとつのメッセージにまとめます。やり取りの往復が減るほど、積み上がる履歴も減ります。",
  ],
  [
    "前提は先に伝える",
    "OSやバージョン、使っているツールなどの前提を最初に伝えておくと、AIが確認のために聞き返す回数が減ります。",
  ],
  [
    "結論だけ求める",
    "「詳しく全部」より「結論だけ・差分だけ」と頼むと、割高な出力を抑えられます。必要になったら掘り下げてもらえば十分です。",
  ],
];

const intermediateItems: Item[] = [
  [
    "難易度でモデルを使い分ける",
    "難しい設計は高性能モデル、ふつうの作業は標準モデル、簡単な修正は軽いモデル、と使い分けます。簡単な用事に高性能モデルを使い続けると、もったいない消費になります。",
  ],
  [
    "会話の途中でモデルを変えない",
    "やり取りの最中にモデルを切り替えると、それまでの「使い回しによる節約（プロンプトキャッシュ）」が効かなくなり、かえって消費が増えることがあります。モデルは始める前に決めておくのがおすすめです。",
  ],
  [
    "前提は指示ファイルに書く（ただし長くしすぎない）",
    "毎回説明している前提は、指示ファイル（Claude CodeはCLAUDE.md／CodexはAGENTS.md）に書いておくと繰り返しを省けます。ただしこのファイルは毎回読まれるので、盛り込みすぎは逆効果。要点だけ簡潔に保ちます。",
  ],
  [
    "ファイルは範囲を絞って渡す",
    "丸ごと渡すのではなく、必要なファイル・必要な行だけを指定します（「ファイル名と行番号」で示すと正確です）。読む量が減れば、そのぶん消費も減ります。",
  ],
];

const advancedItems: Item[] = [
  [
    "使わないMCP・コネクタ・拡張を切る",
    "外部ツール連携は、つないでいるだけで「どんな道具があるか」の説明が毎回読み込まれ、トークンを消費します。使わないものは切っておくと無駄が減ります。",
  ],
  [
    "読み込み範囲を絞る",
    "キーワード検索で必要箇所だけ読む、行範囲を指定する、生成物（node_modules・ビルド結果・ログなど）は読ませない、といった工夫で、ムダな読み込みを避けます。",
  ],
  [
    "プランモードで手戻りを減らす",
    "大きな変更の前に、まず方針だけ立てさせて確認します。いきなり作って作り直す、という一番もったいない往復を防げます。",
  ],
  [
    "調査はサブエージェントに逃がす／並列は控えめに",
    "広く調べる作業は別のエージェントに任せると、本体の会話が雑多な情報で膨らむのを防げます。一方、たくさんのエージェントを同時に動かすとトークンを大きく消費するので、必要な範囲にとどめます。",
  ],
];

const cheatRows: [string, string, string][] = [
  ["会話を要約して圧縮する", "/compact", "/compact"],
  ["会話をリセット／新しく始める", "/clear", "/new（または /clear）"],
  ["いまの文脈の使用量を確認する", "/context", "ステータス表示のトークン数（設定「コンテキストウィンドウの使用量を表示」）"],
  ["モデルを切り替える", "/model（または送信欄の選択）", "送信欄のモデル選択"],
  ["思考量（考える深さ）を調整する", "/effort", "作業モードやモデルで調整"],
  ["前提を覚えさせて説明を省く", "CLAUDE.md", "AGENTS.md"],
];

const firstSteps = [
  "話題が変わったら、新しい会話に切り替える（Claude Codeは /clear、Codexは /new）",
  "会話が長くなってきたら、/compact で要約して身軽にする",
  "簡単な用事は、軽いモデルにして任せる",
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

const cellStyle: React.CSSProperties = {
  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
  fontSize: "14px",
  color: "#4B5563",
  lineHeight: 1.8,
  padding: "12px 14px",
  borderTop: "1px solid #E2DDD6",
  verticalAlign: "top",
  textAlign: "left",
};

const headCellStyle: React.CSSProperties = {
  ...cellStyle,
  fontWeight: 600,
  color: "#1A2332",
  borderTop: "none",
  whiteSpace: "nowrap",
};

const codeStyle: React.CSSProperties = {
  fontFamily: '"SF Mono", "JetBrains Mono", Menlo, monospace',
  fontSize: "13px",
  color: "#1A2332",
  backgroundColor: "#F0EDE8",
  borderRadius: "3px",
  padding: "1px 6px",
};

function CheatTable() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
        <thead>
          <tr>
            <th style={headCellStyle}>やりたいこと</th>
            <th style={headCellStyle}>Claude Code</th>
            <th style={headCellStyle}>Codex</th>
          </tr>
        </thead>
        <tbody>
          {cheatRows.map(([what, claude, codex]) => (
            <tr key={what}>
              <td style={cellStyle}>{what}</td>
              <td style={cellStyle}>
                <span style={codeStyle}>{claude}</span>
              </td>
              <td style={cellStyle}>
                {codex.includes("/") && !codex.includes("（") ? (
                  <span style={codeStyle}>{codex}</span>
                ) : (
                  codex
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TokenSavingPage() {
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
          Token Saving
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
          トークンを節約するコツ
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
          Claude Code・Codex に共通して効く「トークン節約」のコツを、仕組み（なぜ効くのか）から、初級・中級・上級の順にやさしく説明します。
          節約はケチるためではなく、<strong>安く・速く・精度を保って</strong>使い続けるための工夫です。
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
            「トークン」はAIが文章を処理するときの最小の単位で、<strong>使った量がそのまま料金・使用量になります</strong>。
            節約のコツは難しくありません。まずは<strong>「会話を身軽に保つ」</strong>こと。これだけで多くが解決します。
          </Paragraph>
          <Paragraph>
            ここでは Claude Code と Codex の<strong>共通の考え方</strong>を中心に説明し、操作名が違うところは
            <strong>ツール別の早見表</strong>で並べて示します。全部を覚える必要はなく、初級の3つから始めれば十分です。
          </Paragraph>
        </div>

        <Section eyebrow="Why" title="まず仕組み（なぜ節約が効くのか）">
          <Paragraph>テクニックの前に、なぜ効くのかを押さえると、自分で判断できるようになります。</Paragraph>
          <ItemList items={mechanismItems} />
        </Section>

        <Section eyebrow="Beginner" title="初級：まず押さえる基本">
          <Paragraph>むずかしい設定は不要。会話の進め方を少し変えるだけで効きます。</Paragraph>
          <ItemList items={beginnerItems} />
        </Section>

        <Section eyebrow="Cheatsheet" title="ツール別 操作早見表">
          <Paragraph>
            やりたいことは同じでも、操作名がツールで少し違います。困ったときの早見表としてどうぞ
            （ショートカットは macOS が「⌘」、Windows が「Ctrl」に読み替えてください）。
          </Paragraph>
          <CheatTable />
        </Section>

        <Section eyebrow="Intermediate" title="中級：もう一歩">
          <Paragraph>慣れてきたら、モデルや指示ファイルの使い方で、さらに効率を上げられます。</Paragraph>
          <ItemList items={intermediateItems} />
        </Section>

        <Section eyebrow="Advanced" title="上級：さらに絞る">
          <Paragraph>大きめの作業や、本格的に使い込む場面で効いてくる工夫です。</Paragraph>
          <ItemList items={advancedItems} />
        </Section>

        <Section eyebrow="Start" title="まずやる3つ">
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
            {firstSteps.map((step) => (
              <li key={step} style={{ marginBottom: "8px" }}>
                {step}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Next" title="あわせて読む">
          <Paragraph>
            ツールごとの設定は、
            <Link href="/claude-code-settings" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Claude Code設定ガイド
            </Link>
            と
            <Link href="/codex-settings" style={{ color: "#C4603A", textDecoration: "underline" }}>
              Codex設定ガイド
            </Link>
            にまとめています。自動圧縮やモデルの設定など、このページのコツと合わせて見ると分かりやすいです。
          </Paragraph>
        </Section>

        <Section eyebrow="Note" title="このページについて">
          <Paragraph>
            このページは、2026年6月22日時点の情報をもとに、Anthropic（Claude Code）・OpenAI（Codex）の公式ドキュメントと、
            一般的に知られている運用上のコツを参照して作成しています。
            コマンド名や設定はアップデートで変わることがあるため、細かな最新情報は各アプリ内の表示や公式情報もあわせて確認してください。
          </Paragraph>
        </Section>
      </div>
    </div>
  );
}
