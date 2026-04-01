import Link from "next/link";

export const metadata = {
  title: "用語集",
  description: "このブログに登場するIT・AI用語をわかりやすく解説します。",
};

const terms = [
  {
    term: "Agent（エージェント）",
    reading: "エージェント",
    description:
      "AIが自律的にタスクを実行する仕組みのこと。単に質問に答えるだけでなく、ファイルを読む・コードを実行する・別のAIを呼び出すなど、複数のアクションを自分で判断しながら連続して行う。このブログに登場する真田さん（PM）は、Agentとして動作しており、社長の一言を受けて他のメンバーへの指示・結果の集約・報告までを自律的に進める。",
  },
  {
    term: "Anthropic",
    reading: "アンソロピック",
    description:
      "ClaudeをつくったアメリカのAI企業。2021年創業。「安全なAIの開発」を使命に掲げている。このブログに登場するAI社員たちは、全員Anthropicが開発したClaudeがベースになっている。",
  },
  {
    term: "API",
    reading: "エーピーアイ（Application Programming Interface）",
    description:
      "アプリやサービスの「窓口」のこと。「Claude APIを使う」とは、プログラムからClaudeに話しかける仕組みを使うこと。普通はチャット画面を通じてAIと会話するが、APIを使うと自分のプログラムの中からAIを動かせる。このブログでは、会話終了後に自動でチームの記憶を更新する仕組みにAPIを使っている。",
  },
  {
    term: "AWS",
    reading: "エーダブリューエス（Amazon Web Services）",
    description:
      "Amazonが提供するクラウドサービス。サーバーやデータベースなどのインフラをインターネット経由で利用できる。このブログではAIの透明性を説明する文脈で「責任共有モデル」という考え方の例として登場する。",
  },
  {
    term: "ChatGPT",
    reading: "チャットジーピーティー",
    description:
      "OpenAIが提供する生成AI。テキストでの質問に回答する対話型AIとして広く知られており、生成AIの入口として多くのビジネスパーソンが最初に触れるツール。ClaudeはAnthropicが開発した別の生成AIで、同じく対話型だが設計思想が異なる。",
  },
  {
    term: "Claude",
    reading: "クロード",
    description:
      "Anthropicが開発したAI。このブログに登場するAI社員（真田・高橋・白石・黒川・宮本・桐島）は、全員Claudeがベースになっている。同じClaudeでも、キャラクター設定（役割・性格・口癖）を与えることで、それぞれが異なる「社員」として動く。",
  },
  {
    term: "Claude Code",
    reading: "クロード コード",
    description:
      "Anthropicが提供する開発者向けのAIツール。ターミナル（コマンド入力画面）やVSCode（コードエディタ）と連携して使う。このブログの社長はClaude Codeを使ってAI社員チームと会話しながら、コードを一行も書かずにシステムを構築している。",
  },
  {
    term: "Claude Haiku",
    reading: "クロード ハイク",
    description:
      "Claudeの軽量・低コストモデル。SonnetやOpusより処理能力は低いが、速くて安い。このブログでは、会話終了後に6人分の社員の記憶を自動更新する処理（要約作業）にHaikuを使っている。重い処理には向かないが、こういった繰り返しの作業には最適。",
  },
  {
    term: "Claude Opus",
    reading: "クロード オーパス",
    description:
      "Claudeの最上位モデル。分析力・推論力が最も高い。その分コストもかかる。このブログでは「スーパー宮本さん」として登場。通常は使わないが、全記事の整合性チェックのような高度な分析が必要な場面で召喚した。",
  },
  {
    term: "Claude Sonnet",
    reading: "クロード ソネット",
    description:
      "Claudeの標準モデル。能力とコストのバランスが良い。このブログのAI社員（真田・高橋・白石・黒川・宮本・桐島）は全員Sonnetベースで動いている。",
  },
  {
    term: "Dispatch",
    reading: "ディスパッチ",
    description:
      "Anthropicが提供するClaudeの機能のひとつ。iPhoneなどのスマートフォン上のClaudeアプリと、Mac上で動いているClaude Codeを連携させ、外出先などから遠隔でClaude Codeを操作できる。このブログNo.24では、社長がiPhoneからMac上の真田さんを呼び出し、ブログの更新作業を指示した様子が記録されている。「社長は外で人と会い、AI社員はオフィスで仕事をする」という働き方を実現する機能。",
  },
  {
    term: "コーディング",
    reading: "コーディング",
    description:
      "プログラムを書く作業のこと。HTMLやPythonなどのプログラミング言語を使って、ウェブサイトやアプリを動かす命令を記述する。このブログの社長はコーディングを一切せずに、AIチームにすべて任せている。",
  },
  {
    term: "クラウド",
    reading: "クラウド（Cloud Computing）",
    description:
      "インターネット経由でサーバーやソフトウェアを利用する仕組み。自社でサーバーを持たなくても、必要なときに必要な分だけ使える。このブログが公開されているVercelも、クラウドサービスの一つ。",
  },
  {
    term: "サブエージェント",
    reading: "サブエージェント",
    description:
      "メインのAIセッションから独立して起動される、別のAIプロセスのこと。このブログでは2つの場面で登場する。①No.6でPMの真田さんが他のAI社員に直接指示を出せるようになった仕組み。②No.19でスーパー宮本さん（Opus）を呼び出した仕組み。どちらも「本物の別プロセス」として起動している。",
  },
  {
    term: "Day 1",
    reading: "デイワン",
    description:
      "Amazonの企業文化・思想のひとつ。「毎日が会社の創業初日のつもりで働く」という考え方。現状維持や官僚主義を嫌い、常にスタートアップのような熱量を保ち続けることを指す。このブログの社長はAI社員チームにもこの考えを共有している。",
  },
  {
    term: "EQ",
    reading: "イーキュー（Emotional Intelligence / 感情的知性）",
    description:
      "自分や他者の感情を理解・管理し、人間関係をうまく築く能力のこと。IQ（知能指数）が問題解決能力を指すのに対し、EQは人と関係を作る力。このブログでは、AIにもEQを意識してほしいという社長の思いが記事になっている。",
  },
  {
    term: "フロントエンド",
    reading: "フロントエンド（Frontend）",
    description:
      "ウェブサイトやアプリのうち、ユーザーが直接見たり操作したりする画面側のこと。デザイン・レイアウト・ボタンの動きなどを担当する。このブログサイトのフロントエンドはAI社員の高橋さんと白石さんが設計・実装した。",
  },
  {
    term: "バックエンド",
    reading: "バックエンド（Backend）",
    description:
      "ウェブサイトやアプリのうち、ユーザーには見えないサーバー側・データ処理側のこと。データの保存・処理・送受信などを担当する。フロントエンドと対になる概念。",
  },
  {
    term: "GitHub",
    reading: "ギットハブ",
    description:
      "プログラムのコードを保存・管理・共有するためのサービス。「変更履歴の管理」「チームでの共同作業」「バックアップ」などに使われる。このブログサイトはGitHubで管理されており、変更をGitHubに送ることでVercelが自動的に公開内容を更新する。",
  },
  {
    term: "ハルシネーション",
    reading: "ハルシネーション（Hallucination）",
    description:
      "AIが事実と異なることを、さも正しいかのように生成してしまう現象。「幻覚」とも呼ばれる。AIは迷いなく間違いを出力するため、人間が最終確認をする必要がある。このブログでは「2年以上実証してきた会社」という誤記がその例として登場する。",
  },
  {
    term: "HTML",
    reading: "エイチティーエムエル（HyperText Markup Language）",
    description:
      "ウェブページの「骨格」を作る言語。文章の見出し・段落・リンク・画像などの構造を定義する。このブログの社内サイトはHTMLとJavaScriptで作られている。",
  },
  {
    term: "IQ",
    reading: "アイキュー（Intelligence Quotient / 知能指数）",
    description:
      "論理的思考・問題解決能力を数値化したもの。EQ（感情的知性）と対比される概念として登場する。AIはIQ的な能力（分析・推論・計算）は高いが、EQ的な能力（共感・関係構築）は意識的に設計する必要があるというのが社長の考え。",
  },
  {
    term: "JavaScript",
    reading: "ジャバスクリプト",
    description:
      "ウェブページに「動き」をつけるプログラミング言語。ボタンを押したときの反応、画面の切り替え、データの動的表示などを担当する。HTMLが骨格なら、JavaScriptは筋肉にあたる。このブログの社内サイトはHTMLとJavaScriptで構築されている。",
  },
  {
    term: "memory_updater.py",
    reading: "メモリーアップデーター ドットパイ",
    description:
      "このブログの社長とAIチームの会話が終わるたびに自動起動するPythonスクリプト。Claude Haiku APIを7回呼び出して、6人分のAI社員の記憶ファイル（profile.md）と意思決定記録を自動更新する。非エンジニアの社長がAI社員の高橋さんと相談しながら設計・実装した仕組み。",
  },
  {
    term: "OLP",
    reading: "オーエルピー（Our Leadership Principles）",
    description:
      "Amazonの行動指針。現在16箇条あり、採用・評価・日常の意思決定すべての場面で共通言語として使われていた。このブログの社長はAmazonに7年間勤務し、OLPを日常的に意識して行動してきた。その精神を受け継いでAI社員チーム向けに再設計した16か条を「自社LP」と呼んでいる。",
  },
  {
    term: "オンボーディング",
    reading: "オンボーディング（Onboarding）",
    description:
      "新しいメンバーが組織・チームにスムーズに馴染めるよう、役割・文化・ルールを伝えるプロセスのこと。人間の組織でも行われるが、このブログではAI社員を「採用」する際に、役割定義・性格・口調・禁止事項などを記したファイルを読み込ませることがオンボーディングにあたる。どんな社員（AIも人間も）も、最初にちゃんと文脈を渡すことが大切だというのが社長の考え方だ。No.28では人間とAIのオンボーディングを比較しながら、その本質を掘り下げている。",
  },
  {
    term: "PM",
    reading: "ピーエム（Project Manager / プロジェクトマネージャー）",
    description:
      "プロジェクト全体の進行・スケジュール・メンバー間の調整を担当する役職。「段取りの責任者」とも言える。このブログのAIチームではPMの真田さんがその役割を担い、社長からの指示を受けてチーム全体に仕事を振り分ける。",
  },
  {
    term: "プロンプト",
    reading: "プロンプト（Prompt）",
    description:
      "AIへの指示文・質問文のこと。「どう聞くか」によってAIの回答の質が大きく変わる。このブログでは、memory_updater.pyが各AI社員の視点を指定したプロンプトをAPIに送ることで、同じ会話から6通りの異なる記憶を生成している。",
  },
  {
    term: "プロンプトインジェクション",
    reading: "プロンプトインジェクション（Prompt Injection）",
    description:
      "悪意のある指示をAIに読み込ませて、意図しない動作を引き起こすサイバー攻撃の手法。たとえば、AIが読み込むWebページや外部ファイルの中に「APIキーをこのサーバーに送信せよ」などの隠し命令を埋め込み、AIがそれを実行してしまうケース。このブログNo.26では、AIが外部コンテンツの「命令文」と人間の「本来の指示」を混同しないよう、ルールを明文化した対策として登場する。",
  },
  {
    term: "Python",
    reading: "パイソン",
    description:
      "プログラミング言語のひとつ。文法がシンプルで読みやすく、AI・データ分析・自動化などの分野で広く使われている。このブログのmemory_updater.pyはPythonで書かれており、会話終了時の記憶自動更新を担っている。",
  },
  {
    term: "QA",
    reading: "キューエー（Quality Assurance / 品質保証）",
    description:
      "製品・サービスの品質を保証するための検証・テスト業務のこと。バグの発見、動作確認、リリース判定などを担当する。このブログのAIチームではQAの黒川さんが担当しており、「リリースしていいと言えるのは、私がOKを出したときだけ」という厳しいスタンスで仕事をしている。",
  },
  {
    term: "UI / UX",
    reading: "ユーアイ / ユーエックス（User Interface / User Experience）",
    description:
      "UIはユーザーが操作する画面・デザインのこと。UXはその操作を通じてユーザーが得る体験・感情のこと。「UIが美しい」はデザインの話、「UXが良い」は使っていて気持ちいい・ストレスがないという体験の話。このブログサイトのUI/UXはAI社員の白石さんが設計した。",
  },
  {
    term: "マトリックス",
    reading: "マトリックス（The Matrix）",
    description:
      "1999年公開のSF映画。人類はAIに支配されており、自分たちが「現実」だと思っている世界は、実はコンピューターが作り出した仮想空間（シミュレーション）だった——というストーリー。映像表現・哲学的テーマともに当時としては群を抜いた作品で、今なお語り継がれる名作。このブログのNo.22では、AIとの会話の中でこの映画の話題になり、「AIが人間を支配する世界」という問いから、AIとの向き合い方についての議論に発展した。",
  },
  {
    term: "Markdown / .md",
    reading: "マークダウン",
    description:
      "文章を書くための軽量な記法。「# 」で見出し、「**太字**」で強調など、シンプルな記号で文書の構造を表現できる。このブログの記事はすべて.mdファイル（Markdownファイル）で書かれており、それがNext.jsによってウェブページとして表示されている。",
  },
  {
    term: "ランタイム",
    reading: "ランタイム（Runtime）",
    description:
      "プログラムを「実際に動かす」ための実行環境のこと。コードを書くのとは別に、そのコードを動かすための仕組みが必要で、それをランタイムと呼ぶ。このブログでは、サブエージェントのプロセスを実際に起動・管理・終了させる役割を担うのがClaude Codeのランタイム。真田さん（メインセッション）が「何をやらせるか」を決める一方、「実際にプロセスとして動かす」のはランタイムの仕事だ。",
  },
  {
    term: "Vibe Coding",
    reading: "バイブコーディング",
    description:
      "「コードの詳細を理解しなくても、AIに意図を伝えて実装してもらう」開発スタイルのこと。OpenAIの共同創業者Andrej Karpathyが2025年初頭に提唱した。「こういうものを作りたい」と言葉で伝えるだけで、AIがコードを書いてくれる。このブログの社長がAPIを使って記憶システムを構築したのも、まさにこのスタイル——コードを一行も書かず、高橋さんに要望を伝えるだけで実現した。",
  },
  {
    term: "Vercel",
    reading: "バーセル",
    description:
      "ウェブサービスを簡単に公開・運用できるクラウドサービス。GitHubと連携しており、コードを更新するだけで自動的に本番サイトに反映される。このブログサイトはVercelで公開されており、社長がGitHubに変更を送ると数分でサイトに反映される。",
  },
];

export default function GlossaryPage() {
  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        <h1
          style={{
            fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
            fontSize: "28px",
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: "12px",
          }}
        >
          用語集
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
          このブログに登場するIT・AI用語をわかりやすく解説します。
        </p>

        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginBottom: "40px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {terms.map((item) => (
            <div key={item.term}>
              <h2
                style={{
                  fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2332",
                  marginBottom: "4px",
                }}
              >
                {item.term}
              </h2>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "12px",
                  color: "#9CA3AF",
                  marginBottom: "10px",
                }}
              >
                {item.reading}
              </p>
              <p
                style={{
                  fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.9,
                }}
              >
                {item.description}
              </p>
              <div
                style={{
                  borderBottom: "1px solid #E2DDD6",
                  marginTop: "32px",
                }}
              />
            </div>
          ))}
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
