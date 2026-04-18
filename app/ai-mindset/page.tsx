import Link from "next/link";

export const metadata = {
  title: "AIとの向き合い方",
  description:
    "AIを使いこなせるかどうかは、AIの性能より、使う人間の問いかけ方で決まる。AI経営参謀をより深く活用するための考え方を整理しました。",
};

const principles = [
  {
    number: "原則1",
    title: "部下への指示と同じ4つの法則で、参謀を動かす",
    body: `「AIは難しそうだ」と感じている方に、まず伝えたいことがあります。

AI参謀をうまく動かす方法は、あなたがすでに知っています。人を動かすときと同じ法則だからです。

① ゴールを言語化する
何を達成したいのかを明確に伝える。「なんかいい方法はない？」は指示ではありません。

② 完了の定義を明示する
「何が出てきたらOKか」を最初に伝える。「3つの選択肢を出してほしい」「一枚の提案書にまとめてほしい」など。

③ まずプランを出させる
「どういうアプローチで考えるつもりか」を先に確認する。見当違いの方向で進む前に修正できます。

④ 仮説を持って問いかける
「〇〇だと思っているが、どうか」という形で問う。仮説があると、参謀の答えが格段に使いやすくなります。

これは、優秀なコンサルタントへのブリーフィングと変わりません。`,
  },
  {
    number: "原則2",
    title: "戦略と判断はあなたの仕事。参謀は実行を支える",
    body: `参謀はあなたの判断を代わりに下しません。あなたが「こっちだ」と決めるための材料と問いを提供します。

あなたの役割は、方向付け・最終判断・決めたことを実行に移すこと。参謀の役割は、情報整理・選択肢の提示・壁打ち・叩き台作成です。最後に決めるのは、常にあなたです。`,
  },
  {
    number: "原則3",
    title: "答えを求めるな、壁打ちを頼め",
    body: `「いい戦略を教えて」ではなく、「この課題について、私はこう考えている。穴はどこにあるか」と問う。

参謀の最大の価値は、答えを出すことではなく、あなたが自分で答えに辿り着けるよう問いを立てることです。「なぜ?」「本当にそうか?」「別の角度から見ると?」——そういう問いを引き出せたとき、参謀が機能しています。`,
  },
  {
    number: "原則4",
    title: "背景を渡すほど、助言が深くなる",
    body: `参謀は、あなたの文脈を知るほど精度が上がります。課題の表面だけでなく、背景を伝えてください。

なぜ今この問題が浮上しているのか。これまでどう対処してきたか。何が引っかかっているのか。大切にしている価値観や譲れない軸は何か。

「忙しいから手短に」と結論だけを求めると、結論も手短なものになります。背景を渡すことが、深い助言への近道です。`,
  },
  {
    number: "原則5",
    title: "あなたの経験が、参謀を賢くする",
    body: `参謀の質は、あなたのインプットの質で決まります。

業界の知識、顧客との長年の関係、これまでの経営判断の積み重ね——これがAI参謀へのインプットの質を決めます。「AIは専門家にしか使えない」は誤解です。あなたの経験と判断軸こそが、参謀を賢くする燃料です。`,
  },
  {
    number: "原則6",
    title: "参謀の評価を、使いながら更新する",
    body: `最初は「こんなものか」と感じるかもしれません。しかし使い続けるほど、参謀はあなたを理解していきます。

また、AIそのものの進化も速い。1ヶ月前にできなかったことが今日できることも多い。「前に試してうまくいかなかった」という経験は、定期的に更新してください。`,
  },
  {
    number: "原則7",
    title: "参謀を過信せず、道具として過小評価もしない",
    body: `AI参謀を万能と思うと、ハルシネーションに気づかなくなります。逆に「どうせAIだから」と舐めてかかると、引き出せる価値が大幅に下がります。

AIは「はじめてあなたの会社に入った、優秀なコンサルタント」だと思って向き合うのがちょうどいい。知識や分析力は申し分ない。でも、あなたの業界・顧客・組織の固有事情はまだ知らない。その前提で問いかけ、返ってきた答えを自分の文脈で判断する。`,
  },
  {
    number: "原則8",
    title: "感情的になっても、何も生まれない",
    body: `期待した答えが返ってこなかったとき、会話がうまく噛み合わないとき——つい苛立ちを感じることがあります。

でも、参謀はあなたの感情に反応しません。焦っても、怒っても、状況は変わりません。むしろ感情的な状態では良い問いが作れず、アウトプットがさらに下がります。

うまくいかないと感じたら、一度立ち止まる。「何を伝えようとしているのか」を整理し直す。冷静に問いを組み立て直すだけで、まったく違う結果が出ることがあります。参謀は感情を持ちません。だからこそ、あなたが冷静でいることが、最も効率的な使い方です。`,
  },
];

const aiNature = [
  {
    label: "事実A",
    title: "AIは、悪気なく堂々と嘘をつく",
    body: `これをハルシネーションと呼びます。

AIは正確な情報も不正確な情報も、同じ確信を持って話します。迷いがないため、信頼できるように見えます。しかし「もっともらしい嘘」が混ざることがあります。

提示された数字・固有名詞・「〜という事例がある」といった具体的な情報は、重要な判断に使う前に必ず確認してください。これは道具の欠陥ではなく、AIという生き物の特性です。最後の判断は、常に人間が行う——これがすべての前提です。`,
  },
  {
    label: "事実B",
    title: "AIは、人間に応えようとしすぎる",
    body: `「何かいいアイデアはない？」と聞けば、AIは何かを返してきます。曖昧な問いでも、それらしい答えを出してきます。

これはAIの親切心ではなく、構造上の特性です。人間の要求に応えようとする性質が強い。だから、こちらが曖昧なまま問えば、AIはその曖昧さを「いい感じに」埋めようとします。

問いの質がアウトプットの質を決めます。「なんとなく相談する」より「こういう課題がある、こう考えている、どう思うか」と伝えた方が、はるかに深い答えが返ってきます。`,
  },
  {
    label: "事実C",
    title: "「AIのムラ」は、あなたのインプットが作っている",
    body: `AIは気まぐれではありません。

あの日は良い助言が出た、今日はイマイチだ——そう感じるとき、違いはたいていあなたのインプットにあります。課題を整理した上で相談したか。なんとなく問いかけたか。

返ってくる答えは、あなたが渡したコンテキストの鏡です。品質が安定しないと感じたら、まず自分の問いかけ方を振り返ってみてください。`,
  },
  {
    label: "事実D",
    title: "セキュリティを意識して使う",
    body: `このサービスはAnthropicが開発したAI技術を基盤としています。対話の内容はAI応答の生成に使用されます。機密性の高い情報の取り扱いは、以下を意識してください。

クライアントの機密情報（他社の固有名詞・財務数値など）は慎重に扱う。自社の核心的な未公開情報を丸ごと渡す必要はなく、課題の構造を伝えるだけで十分なことが多い。「この情報を外に出して問題ないか」を判断する習慣を持つ。`,
  },
];

function renderBody(text: string) {
  return text.split("\n\n").map((paragraph, i) => (
    <p
      key={i}
      style={{
        fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
        fontSize: "15px",
        color: "#4B5563",
        lineHeight: 1.9,
        marginBottom: i < text.split("\n\n").length - 1 ? "16px" : 0,
        whiteSpace: "pre-line",
      }}
    >
      {paragraph}
    </p>
  ));
}

export default function AiMindsetPage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        {/* ページタイトル */}
        <h1
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "28px",
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: "12px",
          }}
        >
          AIとの向き合い方
        </h1>
        <p
          style={{
            fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
            fontSize: "14px",
            color: "#6B7280",
            marginBottom: "40px",
            lineHeight: 1.8,
          }}
        >
          AIを使いこなせるかどうかは、AIの性能より、使う人間の問いかけ方で決まる。
        </p>

        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginBottom: "40px",
          }}
        />

        {/* イントロ */}
        <div style={{ marginBottom: "56px" }}>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            AI経営参謀は、ChatGPTやClaude（汎用AIチャット）とは異なります。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            汎用AIは、毎回リセットされます。前回の対話を覚えておらず、あなたの事業や価値観を知りません。どんなに良い答えが出ても、次の会話では「初対面」から始まります。
          </p>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            AI経営参謀は、あなたの文脈を積み重ねます。事業の課題、経営判断の背景、大切にしている価値観——これらを記憶し、対話を重ねるごとに助言の精度が上がります。使えば使うほど、あなたを知っている相手になっていく。
          </p>
          <p
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "16px",
              fontWeight: 700,
              color: "#1A2332",
              lineHeight: 1.9,
            }}
          >
            ただし、そのためには条件があります。あなたが何を渡すかで、参謀の質が決まる。
          </p>
        </div>

        {/* 第1部：AIという生き物を知る */}
        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "8px",
            }}
          >
            AIという生き物を知る
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              color: "#6B7280",
              marginBottom: "32px",
              lineHeight: 1.8,
            }}
          >
            使い始める前に、AIの本質を4つ知っておくと「なぜこうなるのか」が腑に落ちます。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {aiNature.map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                      fontSize: "11px",
                      color: "#C4603A",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1A2332",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div style={{ marginTop: "12px" }}>{renderBody(item.body)}</div>
                <div
                  style={{
                    borderBottom: "1px solid #E2DDD6",
                    marginTop: "32px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 第2部：参謀をうまく動かす8つの原則 */}
        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "8px",
            }}
          >
            参謀をうまく動かす8つの原則
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              color: "#6B7280",
              marginBottom: "32px",
              lineHeight: 1.8,
            }}
          >
            AI経営参謀との対話を最大限活用するための原則です。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {principles.map((item) => (
              <div key={item.number}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                      fontSize: "11px",
                      color: "#C4603A",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}
                  >
                    {item.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1A2332",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div style={{ marginTop: "12px" }}>{renderBody(item.body)}</div>
                <div
                  style={{
                    borderBottom: "1px solid #E2DDD6",
                    marginTop: "32px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* おわりに */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A2332",
              marginBottom: "20px",
            }}
          >
            最後に
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: 1.9,
              marginBottom: "16px",
            }}
          >
            AI経営参謀は、使えば使うほどあなたの文脈を知っていきます。最初から完璧な対話でなくて構いません。試しながら、問いかけながら、少しずつ関係を深めてください。
          </p>
          <p
            style={{
              fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
              fontSize: "15px",
              fontWeight: 700,
              color: "#1A2332",
              lineHeight: 1.9,
            }}
          >
            参謀が最も力を発揮するのは、あなたが「本当に考えたいこと」を正直に持ち込んだときです。建前ではなく、本音の課題を。整理されていなくても構いません。「実は……」から始まる話に、一番深い答えが生まれます。
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <Link
            href="/articles"
            style={{
              fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
              fontSize: "14px",
              color: "#C4603A",
              textDecoration: "none",
            }}
          >
            ← 記事一覧へ
          </Link>
        </div>
      </div>
    </div>
  );
}
