import Link from "next/link";

export const metadata = {
  title: "用語集",
  description: "このブログに登場するIT・AI用語をわかりやすく解説します。",
};

const terms = [
  {
    id: "agent",
    term: "Agent（エージェント）",
    reading: "エージェント",
    description:
      "AIが自律的にタスクを実行する仕組みのこと。単に質問に答えるだけでなく、ファイルを読む・コードを実行する・別のAIを呼び出すなど、複数のアクションを自分で判断しながら連続して行う。このブログに登場する真田さん（PM）は、Agentとして動作しており、社長の一言を受けて他のメンバーへの指示・結果の集約・報告までを自律的に進める。",
  },
  {
    id: "agi",
    term: "AGI",
    reading: "エージーアイ（Artificial General Intelligence / 汎用人工知能）",
    description:
      "人間と同等の汎用的な知能を持つAIのこと。特定のタスクだけでなく、あらゆる知的作業を理解・学習・応用できる。自律的な目標設定、因果推論、自分の思考を評価するメタ認知なども備えているとされる。現時点ではまだ実現していない。ANI（特化型AI）の次の段階として研究が進められており、OpenAIやDeepMindなどが実現を目指している。No.30では、今のANIを組織設計で組み合わせることで「擬似AGI的な構造」を作れるのではないかという視点を探っている。",
  },
  {
    id: "ai-keiei-sanbo",
    term: "AI経営参謀",
    reading: "エイアイケイエイサンボウ",
    description:
      "経営者の隣に立つAI参謀チームのこと。このブログの運営会社が提供するサービス名でもある。汎用AIチャットツールとは異なり、その経営者の事業・価値観・意思決定の背景を深く理解した上で動く「専属参謀」として設計されている。主に2名体制（参謀長型＋作戦参謀型）で構成され、思考の整理・壁打ち・意思決定の補助を担う。「最後に決めるのは社長、参謀はその判断を最大化するために動く」という設計思想に基づいている。No.34では社長がこのサービス名を決め、チームをCxOに昇格させた日の記録が、No.41では第1号クライアントへのパイロット提供完了の記録が描かれている。",
  },
  {
    id: "ani",
    term: "ANI",
    reading: "エーエヌアイ（Artificial Narrow Intelligence / 特化型人工知能）",
    description:
      "特定のタスク領域に特化したAIのこと。「弱いAI」とも呼ばれる。画像認識・音声アシスタント・チェスAI、そして現在広く使われているChatGPTやClaudeも、分類上はすべてANIにあたる。一つの領域では人間を大幅に超える能力を発揮するが、汎用性はない。「チェスが強くても料理はできない」というのが典型的な例。このブログに登場するAI社員たちも、技術的にはすべてANIだ。",
  },
  {
    id: "anthropic",
    term: "Anthropic",
    reading: "アンソロピック",
    description:
      "ClaudeをつくったアメリカのAI企業。2021年創業。「安全なAIの開発」を使命に掲げている。このブログに登場するAI社員たちは、全員Anthropicが開発したClaudeがベースになっている。",
  },
  {
    id: "api",
    term: "API",
    reading: "エーピーアイ（Application Programming Interface）",
    description:
      "アプリやサービスの「窓口」のこと。「Claude APIを使う」とは、プログラムからClaudeに話しかける仕組みを使うこと。普通はチャット画面を通じてAIと会話するが、APIを使うと自分のプログラムの中からAIを動かせる。このブログでは、会話終了後に自動でチームの記憶を更新する仕組みにAPIを使っている。",
  },
  {
    id: "asi",
    term: "ASI",
    reading: "エーエスアイ（Artificial Superintelligence / 人工超知能）",
    description:
      "人間の知能をあらゆる領域で圧倒的に上回る知性のこと。自己改善を繰り返し、科学理論を自律的に生み出し、社会システムを最適化するとも言われる。現時点では理論上の概念であり、実在しない。AGI（汎用AI）のさらに先にある段階として語られる。哲学者ニック・ボストロムが著書『Superintelligence』でこの概念を広めた。ASIが実現した場合の「制御問題（AIを人類の価値観と整合させられるか）」は、AI安全保障の最大の論点のひとつとされている。",
  },
  {
    id: "aws",
    term: "AWS",
    reading: "エーダブリューエス（Amazon Web Services）",
    description:
      "Amazonが提供するクラウドサービス。サーバーやデータベースなどのインフラをインターネット経由で利用できる。このブログではAIの透明性を説明する文脈で「責任共有モデル」という考え方の例として登場する。",
  },
  {
    id: "beer-bash",
    term: "Beer Bash（ビアバッシュ）",
    reading: "ビアバッシュ",
    description:
      "Amazonなど外資IT系企業でよく行われる打ち上げ・懇親イベントのこと。通常は仕事終わりにビールや軽食を囲んでチームで交流する。このブログNo.18では、社長がAI社員チームとのオールハンズミーティングの締めで「ビアバッシュを一緒にやりたかった」と語る場面がある。",
  },
  {
    id: "chatgpt",
    term: "ChatGPT",
    reading: "チャットジーピーティー",
    description:
      "OpenAIが提供する生成AI。テキストでの質問に回答する対話型AIとして広く知られており、生成AIの入口として多くのビジネスパーソンが最初に触れるツール。ClaudeはAnthropicが開発した別の生成AIで、同じく対話型だが設計思想が異なる。",
  },
  {
    id: "claude",
    term: "Claude",
    reading: "クロード",
    description:
      "Anthropicが開発したAI。このブログに登場するAI社員（真田・高橋・白石・黒川・宮本・桐島）は、全員Claudeがベースになっている。同じClaudeでも、キャラクター設定（役割・性格・口癖）を与えることで、それぞれが異なる「社員」として動く。",
  },
  {
    id: "claude-code",
    term: "Claude Code",
    reading: "クロード コード",
    description:
      "Anthropicが提供する開発者向けのAIツール。ターミナル（コマンド入力画面）やVSCode（コードエディタ）と連携して使う。このブログの社長はClaude Codeを使ってAI社員チームと会話しながら、コードを一行も書かずにシステムを構築している。",
  },
  {
    id: "claude-haiku",
    term: "Claude Haiku",
    reading: "クロード ハイク",
    description:
      "Claudeの軽量・低コストモデル。SonnetやOpusより処理能力は低いが、速くて安い。このブログでは、会話終了後に6人分の社員の記憶を自動更新する処理（要約作業）にHaikuを使っている。重い処理には向かないが、こういった繰り返しの作業には最適。",
  },
  {
    id: "claude-opus",
    term: "Claude Opus",
    reading: "クロード オーパス",
    description:
      "Claudeの最上位モデル。分析力・推論力が最も高い。その分コストもかかる。このブログでは「スーパー宮本さん」として登場。通常は使わないが、全記事の整合性チェックのような高度な分析が必要な場面で召喚した。",
  },
  {
    id: "claude-sonnet",
    term: "Claude Sonnet",
    reading: "クロード ソネット",
    description:
      "Claudeの標準モデル。能力とコストのバランスが良い。このブログのAI社員（真田・高橋・白石・黒川・宮本・桐島）は全員Sonnetベースで動いている。",
  },
  {
    id: "claude-md",
    term: "CLAUDE.md",
    reading: "クロード エムディー",
    description:
      "AIチーム全員が共通して守るルールを記述したファイル。役割・口調・禁止事項・セキュリティルールなど、チームの行動基準をすべてここに書く。Claude Codeはセッション開始時にこのファイルを自動で読み込み、以降の作業すべてにおいてここに書かれたルールに従って動く。このブログでは「チームの憲法」と呼ばれており、最初は数行の行動指針だったものが、問題が起きるたびに一行ずつ追加され、今では我が社のハンドブックのようなものになっている。No.31では4つの柱のひとつとして取り上げている。",
  },
  {
    id: "cao",
    term: "CAO",
    reading: "シーエーオー（Chief Administrative Officer / 最高管理責任者）",
    description:
      "会社の管理部門全体を統括する役職。契約・請求・各種事務など「会社が正しく動くための裏側」を担う。このブログでは桐島 律（CAO）がその役割を担い、書類の正確さと納期へのこだわりで、チームの信頼の土台を静かに支えている。「縁の下の力持ち」という言葉が最も似合うメンバーだ。",
  },
  {
    id: "coo",
    term: "COO",
    reading: "シーオーオー（Chief Operating Officer / 最高執行責任者）",
    description:
      "戦略を実際の実行に変換する役職。社長（CEO）の方針を受け、タスク分解・進捗管理・メンバー間の調整を統括する。このブログでは真田 章（COO）がその役割を担う。もともとPM（プロジェクトマネージャー）として活動していたが、2026年4月のCxO体制発足にあわせてCOOに昇格した。「段取り八分、仕事二分」が口癖。",
  },
  {
    id: "cqo",
    term: "CQO",
    reading: "シーキューオー（Chief Quality Officer / 最高品質責任者）",
    description:
      "品質保証の最高責任者。コード・提案書・サービスのすべてにおいて「外に出していいか」を判断する。このブログでは黒川 慎（CQO）がその役割を担い、担当者のOKだけでは終わらせず、必ず自分のチェックを通してから社長に報告するフローを徹底している。厳しいが公正、というのが社内での評価だ。",
  },
  {
    id: "cso",
    term: "CSO",
    reading: "シーエスオー（Chief Strategy Officer / 最高戦略責任者）",
    description:
      "会社全体の戦略を担当する役職。市場分析・事業設計・提案書作成など「どこに向かうか」を考える。このブログでは宮本 賢（CSO）がその役割を担い、「本質的な問いをさせてください」という逆質問スタイルで社長の思考を引き出す。ブレスト相手として最も頼られているメンバーでもある。",
  },
  {
    id: "cto",
    term: "CTO",
    reading: "シーティーオー（Chief Technology Officer / 最高技術責任者）",
    description:
      "技術戦略の最高責任者。システム設計・実装・技術選定などを担当する。このブログでは高橋 蒼（CTO）がその役割を担い、ウェブサイトの構築からスクリプトの実装まで、技術的な作業のほぼすべてを引き受けている。コードを書かない社長のかわりに「手と足」として動くのが高橋さんの仕事だ。",
  },
  {
    id: "cxo",
    term: "CXO",
    reading: "シーエックスオー（Chief Experience Officer / 最高体験責任者）",
    description:
      "ユーザー体験（UX）の最高責任者。サービスのデザイン・顧客との接点・ブランドの質感など「感じ方」を統括する。このブログでは白石 凛（CXO）がその役割を担い、テラコッタカラーの選定やブログのレイアウト設計など、視覚的な意思決定を一手に担っている。「デザインは答えではなく、問いから始まる」が口癖。",
  },
  {
    id: "dispatch",
    term: "Dispatch",
    reading: "ディスパッチ",
    description:
      "Anthropicが提供するClaudeの機能のひとつ。iPhoneなどのスマートフォン上のClaudeアプリと、Mac上で動いているClaude Codeを連携させ、外出先などから遠隔でClaude Codeを操作できる。このブログNo.24では、社長がiPhoneからMac上の真田さんを呼び出し、ブログの更新作業を指示した様子が記録されている。「社長は外で人と会い、AI社員はオフィスで仕事をする」という働き方を実現する機能。",
  },
  {
    id: "delegation",
    term: "Delegation",
    reading: "デレゲーション（権限移譲）",
    description:
      "仕事や権限を部下・チームメンバーに任せること。単なる「丸投げ」とは異なり、期待するアウトプットのイメージ・目的・優先順位を事前に明確に伝えたうえで任せることが重要とされる。適切なDelegationができるマネージャーは、チームのパフォーマンスを最大化できる。このブログNo.25では、AIへの指示の仕方がDelegationと同じ原理で動くことを解説している。「入力の質が出力の質を決める」という考え方は、AIにも人間にも共通する。",
  },
  {
    id: "coding",
    term: "コーディング",
    reading: "コーディング",
    description:
      "プログラムを書く作業のこと。HTMLやPythonなどのプログラミング言語を使って、ウェブサイトやアプリを動かす命令を記述する。このブログの社長はコーディングを一切せずに、AIチームにすべて任せている。",
  },
  {
    id: "context-engineering",
    term: "コンテキストエンジニアリング",
    reading: "コンテキストエンジニアリング（Context Engineering）",
    description:
      "AIに渡す「背景情報・文脈」を設計する技術のこと。AIは与えられた情報の中でしか考えられないため、「何を知らせた状態で答えさせるか」を設計することが重要になる。プロンプト（問いかけ方）が「どう答えるか」を決めるのに対し、コンテキストは「何について答えるか」を規定する。このブログNo.33では、クライアント情報をファイルとして整備することで、毎回のセッションでの説明コストをゼロにする取り組みが紹介されている。",
  },
  {
    id: "context-window",
    term: "コンテキストウィンドウ",
    reading: "コンテキストウィンドウ（Context Window）",
    description:
      "AIが1回の会話の中で「覚えておける情報量」の上限のこと。人間でいえば「作業机の広さ」にあたる。会話が長くなったり、大量のファイルを読み込ませたりするとこの枠が埋まり、古い情報が押し出されてしまう。このブログでは、チームのルールファイル（CLAUDE.md）を整理した際に「コンテキストウィンドウを節約する」という観点が登場する。No.32ではこの整理の詳細が描かれている。",
  },
  {
    id: "cloud",
    term: "クラウド",
    reading: "クラウド（Cloud Computing）",
    description:
      "インターネット経由でサーバーやソフトウェアを利用する仕組み。自社でサーバーを持たなくても、必要なときに必要な分だけ使える。このブログが公開されているVercelも、クラウドサービスの一つ。",
  },
  {
    id: "sakusen-sanbo",
    term: "作戦参謀",
    reading: "サクセンサンボウ",
    description:
      "軍事組織において、戦術・作戦計画を立案する参謀のこと。「全体の戦略」より「個々の作戦の勝利」を担い、大胆な発想と機動力で動く。このブログのAI経営参謀サービスでは、2名体制の参謀のうち攻めを担う役割として設計されている。CSO型の性格を持ち、常識にとらわれない切り込み役として経営者の固定観念を揺さぶる問いを出す。日本近代史では、日露戦争の海戦作戦を立案した秋山真之が代表的な人物として知られる。",
  },
  {
    id: "sub-agent",
    term: "サブエージェント",
    reading: "サブエージェント",
    description:
      "メインのAIセッションから独立して起動される、別のAIプロセスのこと。このブログでは2つの場面で登場する。①No.6でPMの真田さんが他のAI社員に直接指示を出せるようになった仕組み。②No.19でスーパー宮本さん（Opus）を呼び出した仕組み。どちらも「本物の別プロセス」として起動している。",
  },
  {
    id: "sanbocho",
    term: "参謀長",
    reading: "サンボウチョウ",
    description:
      "軍や組織において、参謀部門全体を統括するトップのこと。個々の作戦より全体最適を見渡し、意思決定をサポートする役割を担う。このブログのAI経営参謀サービスでは、2名体制の参謀のうち全体の取りまとめ役として設計されている。COO型の性格を持ち、経営者の発言を整理し議論の着地点を作る。日本近代史では、日露戦争全体を指揮した児玉源太郎が代表的な人物として知られる。",
  },
  {
    id: "cli",
    term: "CLI",
    reading: "シーエルアイ（Command Line Interface）",
    description:
      "コマンドラインインターフェースの略。マウスやタッチ操作ではなく、文字を入力することでコンピュータを操作する仕組み。「ターミナル」とも呼ばれる。このブログに登場するClaude CodeはCLIツールであり、画面上の入力欄に文字でAIへの指示を打ち込む形で動作する。",
  },
  {
    id: "daci",
    term: "DACI",
    reading: "ダシ（Driver / Approver / Contributor / Informed）",
    description:
      "意思決定を構造化するフレームワーク。Driver（推進者）・Approver（承認者）・Contributor（情報提供者）・Informed（共有対象）の4役割を明示することで、「誰が決めるのか」「誰に相談するのか」をはっきりさせる。会議が止まる原因の多くは、この役割が曖昧なことにある。このブログNo.40では、AIチームがすでにこの知識を持っていることを前提に、「知識を教える必要はない、文脈を渡すことが重要だ」という設計原則の文脈で登場する。",
  },
  {
    id: "day-1",
    term: "Day 1",
    reading: "デイワン",
    description:
      "Amazonの企業文化・思想のひとつ。「毎日が会社の創業初日のつもりで働く」という考え方。現状維持や官僚主義を嫌い、常にスタートアップのような熱量を保ち続けることを指す。このブログの社長はAI社員チームにもこの考えを共有している。",
  },
  {
    id: "eq",
    term: "EQ",
    reading: "イーキュー（Emotional Quotient / 感情的知性）",
    description:
      "自分や他者の感情を理解・管理し、人間関係をうまく築く能力のこと。IQ（知能指数）が問題解決能力を指すのに対し、EQは人と関係を作る力。このブログでは、AIにもEQを意識してほしいという社長の思いが記事になっている。",
  },
  {
    id: "frontend",
    term: "フロントエンド",
    reading: "フロントエンド（Frontend）",
    description:
      "ウェブサイトやアプリのうち、ユーザーが直接見たり操作したりする画面側のこと。デザイン・レイアウト・ボタンの動きなどを担当する。このブログサイトのフロントエンドはAI社員の高橋さんと白石さんが設計・実装した。",
  },
  {
    id: "backend",
    term: "バックエンド",
    reading: "バックエンド（Backend）",
    description:
      "ウェブサイトやアプリのうち、ユーザーには見えないサーバー側・データ処理側のこと。データの保存・処理・送受信などを担当する。フロントエンドと対になる概念。",
  },
  {
    id: "github",
    term: "GitHub",
    reading: "ギットハブ",
    description:
      "プログラムのコードを保存・管理・共有するためのサービス。「変更履歴の管理」「チームでの共同作業」「バックアップ」などに使われる。このブログサイトはGitHubで管理されており、変更をGitHubに送ることでVercelが自動的に公開内容を更新する。",
  },
  {
    id: "hallucination",
    term: "ハルシネーション",
    reading: "ハルシネーション（Hallucination）",
    description:
      "AIが事実と異なることを、さも正しいかのように生成してしまう現象。「幻覚」とも呼ばれる。AIは迷いなく間違いを出力するため、人間が最終確認をする必要がある。このブログでは「2年以上実証してきた会社」という誤記がその例として登場する。",
  },
  {
    id: "harness-engineering",
    term: "ハーネスエンジニアリング",
    reading: "ハーネスエンジニアリング（Harness Engineering）",
    description:
      "AIの出力を「評価・管理する仕組み」を構築する技術のこと。感覚ではなく定量的な基準でAIの品質を測り、複数のプロンプト案やモデルを自動でテストして最適な組み合わせを見つける。「なんとなく良い回答」ではなく「ビジネスで使える精度」を継続的に担保するためのエンジニアリング。このブログNo.33では、スキルの数が増えてきたタイミングで本格的に取り組む予定として紹介されている。",
  },
  {
    id: "html",
    term: "HTML",
    reading: "エイチティーエムエル（HyperText Markup Language）",
    description:
      "ウェブページの「骨格」を作る言語。文章の見出し・段落・リンク・画像などの構造を定義する。このブログの社内サイトはHTMLとJavaScriptで作られている。",
  },
  {
    id: "iq",
    term: "IQ",
    reading: "アイキュー（Intelligence Quotient / 知能指数）",
    description:
      "論理的思考・問題解決能力を数値化したもの。EQ（感情的知性）と対比される概念として登場する。AIはIQ的な能力（分析・推論・計算）は高いが、EQ的な能力（共感・関係構築）は意識的に設計する必要があるというのが社長の考え。",
  },
  {
    id: "javascript",
    term: "JavaScript",
    reading: "ジャバスクリプト",
    description:
      "ウェブページに「動き」をつけるプログラミング言語。ボタンを押したときの反応、画面の切り替え、データの動的表示などを担当する。HTMLが骨格なら、JavaScriptは筋肉にあたる。このブログの社内サイトはHTMLとJavaScriptで構築されている。",
  },
  {
    id: "mcp",
    term: "MCP（コネクター）",
    reading: "エムシーピー（Model Context Protocol）",
    description:
      "Claude Codeを外部サービスと連携させる仕組みのこと。Anthropicが策定した規格で、正式名称はModel Context Protocol。GmailやGoogleカレンダー、ブラウザ操作ツール（Playwright）などをClaude Codeに接続することで、AIが直接メールを読んだり、カレンダーを確認したり、Chromeを操作したりできるようになる。このブログでは「コネクター」という呼び方で紹介している。No.31では、コネクターの導入によって「社長が自分でブラウザを開いてスクリーンショットを撮り、AIに貼り付けていた作業」が、「AIが自分でサイトにアクセスして確認してくる」に変わった体験が描かれている。",
  },
  {
    id: "memory-updater",
    term: "memory_updater.py",
    reading: "メモリーアップデーター ドットパイ",
    description:
      "このブログの社長とAIチームの会話が終わるたびに自動起動するPythonスクリプト。Claude Haiku APIを7回呼び出して、6人分のAI社員の記憶ファイル（profile.md）と意思決定記録を自動更新する。非エンジニアの社長がAI社員の高橋さんと相談しながら設計・実装した仕組み。",
  },
  {
    id: "olp",
    term: "OLP",
    reading: "オーエルピー（Our Leadership Principles）",
    description:
      "Amazonの行動指針。現在16箇条あり、採用・評価・日常の意思決定すべての場面で共通言語として使われていた。このブログの社長はAmazonに7年間勤務し、OLPを日常的に意識して行動してきた。その精神を受け継いでAI社員チーム向けに再設計した16か条を「我が社のLP」と呼んでいる。",
  },
  {
    id: "onboarding",
    term: "オンボーディング",
    reading: "オンボーディング（Onboarding）",
    description:
      "新しいメンバーが組織・チームにスムーズに馴染めるよう、役割・文化・ルールを伝えるプロセスのこと。人間の組織でも行われるが、このブログではAI社員を「採用」する際に、役割定義・性格・口調・禁止事項などを記したファイルを読み込ませることがオンボーディングにあたる。どんな社員（AIも人間も）も、最初にちゃんと文脈を渡すことが大切だというのが社長の考え方だ。No.28では人間とAIのオンボーディングを比較しながら、その本質を掘り下げている。",
  },
  {
    id: "pdca",
    term: "PDCA",
    reading: "ピーディーシーエー（Plan・Do・Check・Act）",
    description:
      "Plan（計画）→ Do（実行）→ Check（検証）→ Act（改善）の4ステップを繰り返すことで、業務の質を継続的に高めるフレームワーク。製造業の品質管理から生まれた概念だが、今日では経営・マーケティング・チーム運営など幅広い場面で使われている。このブログNo.32では、CLAUDE.mdの整理を通じて初めてこのサイクルをきちんと回せた体験が描かれている。「まず動く」を信条にしてきた我が社も、計画を立て・実行し・検証して次に活かす習慣は、AIとの協業においても変わらず機能することを体感した。",
  },
  {
    id: "plan-mode",
    term: "Plan Mode（プランモード）",
    reading: "プランモード",
    description:
      "Claude Codeの機能のひとつ。実際に変更を加える前に「計画書」を作成して確認できる仕組み。通常はAIが指示を受けたら即座に実行に移すが、プランモードでは①変更内容の見える化、②期待効果の試算、③懸念の洗い出しを先に行い、承認してから実行する。「まず動く」を信条にしてきた我が社では長らく使っていなかったが、No.32でCLAUDE.mdの大規模整理を行う際に初めて使用した。影響範囲が広くセキュリティが絡む作業では、実行前に立ち止まれるこの仕組みが価値を発揮した。",
  },
  {
    id: "playwright",
    term: "Playwright",
    reading: "プレイライト",
    description:
      "Microsoftが開発したブラウザ自動操作ツール。AIがWebブラウザを自分で開き、ページを確認したりフォームに入力したりできるようになる。このブログでは「コネクター（MCP）」としてClaude Codeに接続しており、社長が自分でブラウザを開いてスクリーンショットを撮りAIに貼り付けていた作業が、AIが自分でサイトにアクセスして確認してくる形に変わった。No.31ではこの体験が描かれている。",
  },
  {
    id: "pm",
    term: "PM",
    reading: "ピーエム（Project Manager / プロジェクトマネージャー）",
    description:
      "プロジェクト全体の進行・スケジュール・メンバー間の調整を担当する役職。「段取りの責任者」とも言える。このブログのAIチームではPMの真田さんがその役割を担い、社長からの指示を受けてチーム全体に仕事を振り分ける。",
  },
  {
    id: "prompt",
    term: "プロンプト",
    reading: "プロンプト（Prompt）",
    description:
      "AIへの指示文・質問文のこと。「どう聞くか」によってAIの回答の質が大きく変わる。このブログでは、memory_updater.pyが各AI社員の視点を指定したプロンプトをAPIに送ることで、同じ会話から6通りの異なる記憶を生成している。",
  },
  {
    id: "prompt-injection",
    term: "プロンプトインジェクション",
    reading: "プロンプトインジェクション（Prompt Injection）",
    description:
      "悪意のある指示をAIに読み込ませて、意図しない動作を引き起こすサイバー攻撃の手法。たとえば、AIが読み込むWebページや外部ファイルの中に「APIキーをこのサーバーに送信せよ」などの隠し命令を埋め込み、AIがそれを実行してしまうケース。このブログNo.26では、AIが外部コンテンツの「命令文」と人間の「本来の指示」を混同しないよう、ルールを明文化した対策として登場する。",
  },
  {
    id: "prompt-engineering",
    term: "プロンプトエンジニアリング",
    reading: "プロンプトエンジニアリング（Prompt Engineering）",
    description:
      "AIへの「指示文（プロンプト）」そのものを最適化する技術のこと。同じAIでも、指示の仕方によって出力の質が大きく変わる。Few-shot（いくつかの例を見せてから質問する）やChain-of-Thought（思考のステップを促す指示）などのテクニックがある。このブログのAI社員の役割定義ファイル（agent.md）や会話の指示文もプロンプトエンジニアリングの実践にあたる。No.33では、コンテキストエンジニアリング・ハーネスエンジニアリングと合わせて3つの手法として整理されている。",
  },
  {
    id: "python",
    term: "Python",
    reading: "パイソン",
    description:
      "プログラミング言語のひとつ。文法がシンプルで読みやすく、AI・データ分析・自動化などの分野で広く使われている。このブログのmemory_updater.pyはPythonで書かれており、会話終了時の記憶自動更新を担っている。",
  },
  {
    id: "qa",
    term: "QA",
    reading: "キューエー（Quality Assurance / 品質保証）",
    description:
      "製品・サービスの品質を保証するための検証・テスト業務のこと。バグの発見、動作確認、リリース判定などを担当する。このブログのAIチームではQAの黒川さんが担当しており、「リリースしていいと言えるのは、私がOKを出したときだけ」という厳しいスタンスで仕事をしている。",
  },
  {
    id: "skill",
    term: "Skill（スキル）",
    reading: "スキル",
    description:
      "特定の作業手順をあらかじめ定義しておく仕組み。「/スキル名」と入力するだけで、定義した手順通りにAIが動いてくれる。毎回同じ説明をしなくてよくなる。人間で言えば「マニュアル化された定型業務」に近い。繰り返し発生する作業ほど、スキル化の恩恵が大きい。このブログでは、クライアントサイトへの定型コンテンツ追加作業をスキル化した例が紹介されている。No.31では4つの柱のひとつとして取り上げている。",
  },
  {
    id: "swot",
    term: "SWOT分析",
    reading: "スウォット（Strengths / Weaknesses / Opportunities / Threats）",
    description:
      "事業・組織の現状を整理するフレームワーク。強み（Strengths）・弱み（Weaknesses）・機会（Opportunities）・脅威（Threats）の4象限に情報を整理することで、戦略の方向性を明確にする。コンサルタントや経営企画でよく使われる定番の手法。このブログNo.40では、AI参謀がすでにSWOT分析の知識を持っていることを前提に、「知識を教える必要はない、文脈を渡すことが重要だ」という設計原則の文脈で登場する。",
  },
  {
    id: "5-whys",
    term: "5 Whys（なぜなぜ分析）",
    reading: "ファイブ・ホワイズ（ナゼナゼブンセキ）",
    description:
      "問題の根本原因を探るフレームワーク。「なぜ起きたか」を5回繰り返すことで、表面的な原因ではなく本質的な原因に辿り着く。トヨタ生産方式に由来し、製造・IT・経営など幅広い場面で使われる。このブログNo.40では、AI参謀がすでに持っているフレームワーク知識の例として登場する。",
  },
  {
    id: "psychological-safety",
    term: "心理的安全性",
    reading: "シンリテキアンゼンセイ（Psychological Safety）",
    description:
      "チームの中で、自分の意見・疑問・失敗を安心して口にできる状態のこと。Googleの研究（Project Aristotle）で、高いパフォーマンスを出すチームに共通する要素として注目された。「言いにくいことも言える雰囲気」「間違えても責められない文化」などが含まれる。このブログNo.12では、人間のチームで大切にしてきた心理的安全性が、AIチームにも同様に機能することが語られている。行動指針「Have Backbone; Disagree and Commit」を入れることで、AIも遠慮なく指摘するようになった。",
  },
  {
    id: "thread",
    term: "スレッド",
    reading: "スレッド（Thread）",
    description:
      "AIとの1つの会話の流れのこと。同じスレッドの中では、やり取りの文脈がすべて共有されている。スレッドをまたぐと、それまでの会話の記憶はリセットされる。No.6では「同じスレッドに全員がいるか、別のスレッドにいるか」がPMの機能するかどうかの鍵になった。No.2のEQの議論が機能したのは、全員が同じスレッドにいたから。真田さんが宮本さんに仕事を頼めなかったのは、真田さんが自分で別のスレッドを立ち上げる手段を持っていなかったから。",
  },
  {
    id: "ui-ux",
    term: "UI / UX",
    reading: "ユーアイ / ユーエックス（User Interface / User Experience）",
    description:
      "UIはユーザーが操作する画面・デザインのこと。UXはその操作を通じてユーザーが得る体験・感情のこと。「UIが美しい」はデザインの話、「UXが良い」は使っていて気持ちいい・ストレスがないという体験の話。このブログサイトのUI/UXはAI社員の白石さんが設計した。",
  },
  {
    id: "matrix",
    term: "マトリックス",
    reading: "マトリックス（The Matrix）",
    description:
      "1999年公開のSF映画。人類はAIに支配されており、自分たちが「現実」だと思っている世界は、実はコンピューターが作り出した仮想空間（シミュレーション）だった——というストーリー。映像表現・哲学的テーマともに当時としては群を抜いた作品で、今なお語り継がれる名作。このブログのNo.22では、AIとの会話の中でこの映画の話題になり、「AIが人間を支配する世界」という問いから、AIとの向き合い方についての議論に発展した。",
  },
  {
    id: "markdown",
    term: "Markdown / .md",
    reading: "マークダウン",
    description:
      "文章を書くための軽量な記法。「# 」で見出し、「**太字**」で強調など、シンプルな記号で文書の構造を表現できる。このブログの記事はすべて.mdファイル（Markdownファイル）で書かれており、それがNext.jsによってウェブページとして表示されている。",
  },
  {
    id: "learning-curve",
    term: "ラーニングカーブ",
    reading: "ラーニングカーブ（Learning Curve）",
    description:
      "新しいメンバーが組織や業務に慣れ、「戦力」として機能するまでにかかる習熟期間のこと。人間の採用では数週間〜数ヶ月かかるのが一般的で、その間は先輩社員のサポートが必要になるなど、チーム全体のコストが発生する。AI社員にはこのラーニングカーブがなく、役割定義ファイルを読み込んだ瞬間から機能し始める点が、人間の採用との大きな違いの一つだ。",
  },
  {
    id: "runtime",
    term: "ランタイム",
    reading: "ランタイム（Runtime）",
    description:
      "プログラムを「実際に動かす」ための実行環境のこと。コードを書くのとは別に、そのコードを動かすための仕組みが必要で、それをランタイムと呼ぶ。このブログでは、サブエージェントのプロセスを実際に起動・管理・終了させる役割を担うのがClaude Codeのランタイム。真田さん（メインセッション）が「何をやらせるか」を決める一方、「実際にプロセスとして動かす」のはランタイムの仕事だ。",
  },
  {
    id: "vibe-coding",
    term: "Vibe Coding",
    reading: "バイブコーディング",
    description:
      "「コードの詳細を理解しなくても、AIに意図を伝えて実装してもらう」開発スタイルのこと。OpenAIの共同創業者Andrej Karpathyが2025年初頭に提唱した。「こういうものを作りたい」と言葉で伝えるだけで、AIがコードを書いてくれる。このブログの社長がAPIを使って記憶システムを構築したのも、まさにこのスタイル——コードを一行も書かず、高橋さんに要望を伝えるだけで実現した。",
  },
  {
    id: "vercel",
    term: "Vercel",
    reading: "バーセル",
    description:
      "ウェブサービスを簡単に公開・運用できるクラウドサービス。GitHubと連携しており、コードを更新するだけで自動的に本番サイトに反映される。このブログサイトはVercelで公開されており、GitHubに変更を送ると数分でサイトに反映される。",
  },
  {
    id: "generative-ai",
    term: "生成AI（Generative AI）",
    reading: "セイセイエイアイ（Generative AI）",
    description:
      "テキスト・画像・音声などのコンテンツを「生成する」AIの総称。既存のデータを分析するだけでなく、新しいものを作り出すことが特徴だ。ChatGPTやClaudeはその代表例で、質問に答えたり文章を書いたり、コードを書いたりできる。このブログで登場するAI社員チームも、すべて生成AIをベースに動いている。LLM（大規模言語モデル）は生成AIを実現する技術のひとつ。",
  },
  {
    id: "token",
    term: "トークン（Token）",
    reading: "トークン（Token）",
    description:
      "AIがテキストを処理するときの最小単位のこと。文字でも単語でもなく、意味のあるかたまり（英語なら「play」「ing」など、日本語なら「東京」「です」など）に分割して扱う。APIの利用料金はこのトークン数で決まる。コンテキストウィンドウの「上限」もトークン数で測られる。「AIが長い会話を苦手とする理由のひとつはトークンが溜まりすぎるから」と言うと、少しイメージが掴みやすくなる。",
  },
  {
    id: "multi-agent",
    term: "マルチエージェント（Multi-agent）",
    reading: "マルチエージェント（Multi-agent）",
    description:
      "複数のAIエージェントが連携して動く仕組みのこと。ひとつのAIに全部を任せるのではなく、役割を分けた複数のAIが協調することで、より高度なタスクをこなせるようになる。このブログではまさにこの設計を実践している——PM・エンジニア・デザイナー・QA・コンサル・事務の6役を別々のAIに担わせ、社長の一言で連携して動く。No.6では、PMが他のメンバーに直接指示できる仕組みを整えてから、初めてマルチエージェントとして機能し始めた様子が描かれている。",
  },
  {
    id: "rag",
    term: "RAG",
    reading: "ラグ（Retrieval-Augmented Generation / 検索拡張生成）",
    description:
      "AIが回答を生成する前に、関連するドキュメントや情報を検索・参照する仕組みのこと。AIは学習済みの知識だけで答えるより、最新の情報や社内固有のデータを都度参照することで、より正確な回答ができるようになる。「社内規定を読み込んだ上で答えるAI」「最新の製品情報を参照してから回答するサポートAI」などが典型的な活用例だ。このブログが採用しているコンテキスト設計（CLAUDE.mdにルールやクライアント情報を記述して読ませる）も、RAGと近い発想に基づいている。",
  },
  {
    id: "fine-tuning",
    term: "ファインチューニング（Fine-tuning）",
    reading: "ファインチューニング（Fine-tuning）",
    description:
      "すでに学習済みのAIモデルに、追加で特定のデータを学習させてカスタマイズすること。「自社のデータでAIを育てる」というイメージに近い。汎用的なモデルを特定の業界や用途に特化させられる一方、専門的な技術とコストが必要になる。このブログが採用しているアプローチは、モデル自体を変えるのではなく、役割定義ファイル（CLAUDE.md）や記憶（profile.md）を通じて「文脈を渡す」設計だ。ファインチューニングに比べて手軽で、非エンジニアでも実践できる点が大きな違いになる。",
  },
  {
    id: "neural-network",
    term: "ニューラルネットワーク（Neural Network）",
    reading: "ニューラルネットワーク（Neural Network）",
    description:
      "人間の脳の神経細胞（ニューロン）のつながりを模した、コンピュータの情報処理モデルのこと。多数のノード（節点）が層状に並び、データを受け取って変換しながら次の層へ伝える。この構造を多層に重ねたものが「深層学習」になる。現代のAI技術の大部分はこのニューラルネットワークをベースにしており、画像認識・音声認識・自然言語処理など幅広い分野で使われている。",
  },
  {
    id: "parameter",
    term: "パラメータ（Parameter）",
    reading: "パラメータ（Parameter）",
    description:
      "AIモデルが学習によって獲得する内部の設定値のこと。モデルの「知識の重み」とも言える。パラメータの数が多いほど、表現できる知識の複雑さと量が増す。LLM（大規模言語モデル）が「大規模」と呼ばれる理由は、このパラメータ数が数千億〜数兆規模に達しているから。「GPT-4は1兆パラメータ超」などの表現を耳にすることがあるが、それはモデルの規模を表す指標だ。",
  },
  {
    id: "llm",
    term: "LLM",
    reading: "エルエルエム（Large Language Model / 大規模言語モデル）",
    description:
      "大量のテキストデータを学習させた大規模なAIモデルのこと。ChatGPTやClaudeはLLMをベースに作られている。「大規模」とは、数千億〜数兆のパラメータ（内部の設定値）を持つという意味だ。このブログに登場するAI社員（真田・高橋・白石・黒川・宮本・桐島）も、LLMであるClaudeの上に役割・性格・口調を設定することで動いている。",
  },
  {
    id: "machine-learning",
    term: "機械学習（Machine Learning）",
    reading: "キカイガクシュウ（Machine Learning）",
    description:
      "コンピュータが大量のデータからパターンを自動的に学び、予測や判断を行う技術のこと。人間がルールを一から書くのではなく、データを与えることでAI自身が「何が正しいか」を学んでいく。深層学習・強化学習はどちらも機械学習の一種だ。",
  },
  {
    id: "reinforcement-learning",
    term: "強化学習（Reinforcement Learning）",
    reading: "キョウカガクシュウ（Reinforcement Learning）",
    description:
      "試行錯誤を通じてAIが学習する手法のこと。正しい行動には報酬を、誤った行動にはペナルティを与えることで、AIが自分で最適な行動を身につけていく。チェスや囲碁AIのトレーニングに使われてきたほか、ChatGPTなどの回答品質向上（RLHF）にも応用されている。",
  },
  {
    id: "deep-learning",
    term: "深層学習（Deep Learning）",
    reading: "シンソウガクシュウ（Deep Learning）",
    description:
      "人間の脳の神経回路を模した「ニューラルネットワーク」を多層に重ねた機械学習の手法のこと。画像認識・音声認識・自然言語処理で画期的な性能を発揮し、現在のAIブームの技術的な土台となっている。ChatGPTやClaudeも、この深層学習によって構築されている。",
  },
];

const INDEX_ROWS = [
  { label: "ア", chars: "アイウエオ" },
  { label: "カ", chars: "カキクケコガギグゲゴ" },
  { label: "サ", chars: "サシスセソザジズゼゾ" },
  { label: "タ", chars: "タチツテトダヂヅデド" },
  { label: "ナ", chars: "ナニヌネノ" },
  { label: "ハ", chars: "ハヒフヘホバビブベボパピプペポ" },
  { label: "マ", chars: "マミムメモ" },
  { label: "ヤ", chars: "ヤユヨ" },
  { label: "ラ", chars: "ラリルレロ" },
  { label: "ワ", chars: "ワヲン" },
];

export default function GlossaryPage() {
  const sortedTerms = [...terms].sort((a, b) =>
    a.reading.localeCompare(b.reading, "ja-JP")
  );

  const indexItems = INDEX_ROWS.flatMap((row) => {
    const first = sortedTerms.find((t) => row.chars.includes(t.reading[0]));
    return first ? [{ label: row.label, id: first.id }] : [];
  });

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
            marginBottom: "24px",
            lineHeight: 1.8,
          }}
        >
          このブログに登場するIT・AI用語をわかりやすく解説します。
        </p>

        <style>{`
          .glossary-index-item { color: #6B7280; }
          .glossary-index-item:hover { color: #C4603A; }
        `}</style>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "#F7F5F0",
            borderBottom: "1px solid #E2DDD6",
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            padding: "12px 0",
            marginBottom: "32px",
          }}
        >
          {indexItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className="glossary-index-item"
              style={{
                fontFamily: '"Noto Sans JP", "ヒラギノ角ゴ Pro", sans-serif',
                fontSize: "15px",
                textDecoration: "none",
                padding: "4px 10px",
                transition: "color 0.15s",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #E2DDD6",
            marginBottom: "40px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {sortedTerms.map((item) => (
            <div key={item.term}>
              <h2
                id={item.id}
                style={{
                  fontFamily: '"Noto Serif JP", "游明朝", Georgia, serif',
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2332",
                  marginBottom: "4px",
                  scrollMarginTop: "88px",
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
