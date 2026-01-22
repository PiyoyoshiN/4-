/**
 * Quiz data format:
 * - type: "single" | "multi2"
 * - choices: 4 or 5 (可変)
 * - answer: 1始まりの配列（singleなら [3]、2つ選択なら [2,4]）
 * explanation: "ここに解説を書く（なぜそれが正しい/誤りか、覚え方、注意点など）"
 */
const QUESTIONS = [
  // 例：4択・単一選択
  {
    id: "Q-001",
    category: "第1回",
    type: "single",
    prompt: "発育区分と名称の組み合わせである。正しいのはどれか。",

    choices: [
      "妊娠12週未満　　　　　　胎芽期",
      "生後7日未満の児　　　　 新生児",
      "生後28日未満の児　　　　早期新生児",
      "生後1年未満の児　　　　 乳児"
    ],

    answer: [4],
    explanation:
      "胎芽期は妊娠10週未満である。生後7日未満は早期新生児、生後28日未満は新生児である。生後1年未満を乳児という。"
  },

  {
    id: "Q-002",
    category: "第1回",
    type: "single",
    prompt: "生後4ヶ月の乳児の発達を評価するのはどれか。",

    choices: [
      "寝返り",
      "お座り",
      "首がすわる",
      "つかまり立ち"
    ],

    answer: [3],
    explanation:
      "首がすわる（定頸）は生後3〜4ヶ月頃にみられる。寝返りは5〜6ヶ月、お座りは7ヶ月頃、つかまり立ちは8〜9ヶ月頃である。"
  },

  {
    id: "Q-003",
    category: "第1回",
    type: "multi2",
    prompt: "人の出産予定日はどれか。2つ選べ。",

    choices: [
      "妊娠初日から180日目",
      "妊娠初日から280日目",
      "受精から166日目",
      "受精から266日目"
    ],

    answer: [2, 4],
    explanation:
      "出産予定日は妊娠初日から280日目であり、受精日を基準とすると266日目となる。"
  },

  {
    id: "Q-004",
    category: "第2回",
    type: "single",
    prompt: "エリクソン・E・Hの発達理論で青年期に生じる葛藤はどれか。",

    choices: [
      "同一性　対　役割拡散",
      "生殖性　対　停滞",
      "勤勉性　対　劣等感",
      "自主性　対　罪悪感"
    ],

    answer: [1],
    explanation:
      "エリクソンの発達理論では、青年期の課題は自我同一性（アイデンティティ）の確立であり、『同一性対役割拡散』の葛藤が生じる。"
  },

  {
    id: "Q-005",
    category: "第2回",
    type: "single",
    prompt: "近年、我が国の学童期児童の死亡原因が最も多いのはどれか。",

    choices: [
      "自殺",
      "先天性疾患",
      "悪性新生物",
      "不慮の事故"
    ],

    answer: [3],
    explanation:
      "学童期（6〜12歳）の死亡原因では、悪性新生物が最も多く、次いで自殺、不慮の事故が続く。"
  },

  {
    id: "Q-006",
    category: "第2回",
    type: "single",
    prompt: "日本における2024年の死亡数で、最も近いのはどれか。",

    choices: [
      "160万人",
      "140万人",
      "120万人",
      "100万人"
    ],

    answer: [1],
    explanation:
      "2024年の日本の死亡数は約160万5千人であり、最も近いのは160万人である。"
  },

  {
    id: "Q-007",
    category: "第2回",
    type: "single",
    prompt: "千人あたりのいじめの発生件数が最も多いのはどれか。",

    choices: [
      "高校生",
      "中学生",
      "小学生",
      "幼児園児"
    ],

    answer: [3],
    explanation:
      "千人あたりのいじめの認知件数は小学生が最も多く、中学生、高校生の順に少なくなる。"
  },

  {
    id: "Q-020",
    category: "第6回",
    type: "single",
    prompt: "循環システムのうち、体循環の血液が通過する器官で、誤っているのはどれか。",

    choices: [
      "左心室",
      "左心房",
      "大動脈",
      "大静脈"
    ],

    answer: [2],
    explanation:
      "体循環は左心室から始まり大動脈、全身、大静脈を経て右心房に戻る。左心房は肺循環に含まれる。"
  },

  {
    id: "Q-021",
    category: "第6回",
    type: "single",
    prompt: "下記の概念の説明で、正しいのはどれか。",

    choices: [
      "脈拍とは心臓の収縮期で血液が静脈に送り出されて形成された脈波である。",
      "1分間の脈拍数が50回以下の場合を徐脈という。",
      "全ての静脈内には弁膜がない。",
      "左心室と左心房の間にある弁膜を僧帽弁という。"
    ],

    answer: [4],
    explanation:
      "僧帽弁は左心房と左心室の間に存在する。脈拍は動脈で形成され、徐脈は60回未満である。"
  },

  {
    id: "Q-022",
    category: "第6回",
    type: "single",
    prompt: "胆道閉鎖症の乳児の便の色はどれか。",

    choices: [
      "緑色",
      "黒色",
      "暗赤色",
      "黄土色",
      "灰白色"
    ],

    answer: [5],
    explanation:
      "胆道閉鎖症では胆汁が腸管に排出されないため、便は灰白色となる。"
  },

  {
    id: "Q-023",
    category: "第6回",
    type: "single",
    prompt: "血糖値を下げる働きをもつホルモンはどれか。",

    choices: [
      "アドレナリン",
      "インスリン",
      "グルカゴン",
      "メラトニン"
    ],

    answer: [2],
    explanation:
      "インスリンは血糖を細胞内に取り込ませ、血糖値を低下させる。"
  },

  {
    id: "Q-024",
    category: "第6回",
    type: "single",
    prompt: "脳基底核はどれか。",

    choices: [
      "灰白質の中の神経細胞",
      "白質の中の神経細胞",
      "脊髄の中の神経細胞",
      "脳室の中の神経細胞"
    ],

    answer: [1],
    explanation:
      "脳基底核は白質内に存在する灰白質（神経細胞の集まり）である。"
  },

  {
    id: "Q-025",
    category: "第6回",
    type: "single",
    prompt: "脳室系に含まれないのはどれか。",

    choices: [
      "中心管",
      "側脳室",
      "中脳水道",
      "クモ膜下腔"
    ],

    answer: [4],
    explanation:
      "クモ膜下腔は脳脊髄液が流れる腔であるが、脳室系には含まれない。"
  },

  {
    id: "Q-026",
    category: "第6回",
    type: "single",
    prompt: "認識中枢（感覚性言語中枢）はどれか。",

    choices: [
      "中心後回",
      "大脳基底核",
      "ブローカ野",
      "ウェルニッケ野"
    ],

    answer: [4],
    explanation:
      "ウェルニッケ野は感覚性言語中枢であり、言語理解を司る。"
  },

  {
    id: "Q-027",
    category: "第6回",
    type: "single",
    prompt: "運動性言語を支配する大脳の部位はどれか。",

    choices: [
      "前頭葉",
      "側頭葉",
      "頭頂葉",
      "後頭葉"
    ],

    answer: [1],
    explanation:
      "運動性言語中枢（ブローカ野）は前頭葉に存在する。"
  },

  {
    id: "Q-028",
    category: "第7回",
    type: "single",
    prompt: "細菌感染による急性炎症で最初に病巣に駆けつける白血球はどれか。",

    choices: [
      "単球",
      "好酸球",
      "好中球",
      "好塩基球",
      "リンパ球"
    ],

    answer: [3],
    explanation:
      "細菌感染による急性炎症では、最初に好中球が病巣に集まり、細菌を貪食して化膿を起こす。"
  },

  {
    id: "Q-029",
    category: "第7回",
    type: "single",
    prompt: "疾病発生の外的要因のうち内的要因はどれか。",

    choices: [
      "細菌",
      "紫外線",
      "一酸化炭素",
      "メタノール",
      "加齢"
    ],

    answer: [5],
    explanation:
      "加齢は生理的因子に分類される内的要因である。細菌や紫外線、化学物質は外的要因である。"
  },

  {
    id: "Q-030",
    category: "第7回",
    type: "single",
    prompt: "母乳の初乳にみられる抗体はどれか。",

    choices: [
      "IgD",
      "IgM",
      "IgE",
      "IgA",
      "IgG"
    ],

    answer: [4],
    explanation:
      "IgAは母乳、特に初乳に多く含まれ、消化管や呼吸器などの粘膜免疫を担う。"
  },

  {
    id: "Q-031",
    category: "第7回",
    type: "multi2",
    prompt: "液性免疫を担う細胞はどれか。2つ選べ。",

    choices: [
      "Tリンパ細胞",
      "Bリンパ細胞",
      "キラーT細胞",
      "形質細胞",
      "樹状細胞"
    ],

    answer: [2, 4],
    explanation:
      "液性免疫はBリンパ細胞が担当し、B細胞は形質細胞へ分化して抗体を大量に産生する。"
  },

  {
    id: "Q-032",
    category: "第8回",
    type: "single",
    prompt: "感染症の専門用語の記述である。正しいのはどれか。",

    choices: [
      "伝染病とは媒介動物を介してのみ人へ伝播する病気のこと。",
      "宿主は病原体に感染しても発症していない状態は汚染という。",
      "感染して発症する割合は感染発症指数という。",
      "潜伏期保菌者は感染源に含まれない。"
    ],

    answer: [3],
    explanation:
      "感染発症指数とは、感染者のうち実際に発症した者の割合を示す指標である。他の選択肢はいずれも定義が誤っている。"
  },

  {
    id: "Q-033",
    category: "第8回",
    type: "single",
    prompt: "感染症とその病原体の組合せである。正しいのはどれか。",

    choices: [
      "腸管出血性大腸炎　―　寄生虫",
      "MRSA　―　真菌",
      "疥癬　―　細菌",
      "水痘　―　ウイルス"
    ],

    answer: [4],
    explanation:
      "水痘は水痘・帯状疱疹ウイルスによる感染症である。腸管出血性大腸炎やMRSAは細菌、疥癬はヒゼンダニによる。"
  },

  {
    id: "Q-034",
    category: "第8回",
    type: "single",
    prompt: "感染症成立の条件である。誤っているのはどれか。",

    choices: [
      "病原体",
      "潜伏期間",
      "宿主の感受性",
      "感染経路"
    ],

    answer: [2],
    explanation:
      "感染症成立の条件は、感染源・感染経路・宿主の感受性の3つであり、潜伏期間は含まれない。"
  },

  {
    id: "Q-035",
    category: "第8回",
    type: "single",
    prompt: "経胎盤感染により胎児に白内障、難聴などを起こすのはどれか。",

    choices: [
      "風疹",
      "麻疹",
      "B型肝炎",
      "インフルエンザ"
    ],

    answer: [1],
    explanation:
      "風疹は経胎盤感染により先天性風疹症候群を起こし、白内障や難聴、心疾患などを引き起こす。"
  },

  {
    id: "Q-036",
    category: "第9回",
    type: "single",
    prompt: "幻視の症状がみられるのはどれか。",

    choices: [
      "レビー小体型認知症",
      "前頭側頭型認知症",
      "アルツハイマー型認知症",
      "脳血管性認知症"
    ],

    answer: [1],
    explanation:
      "レビー小体型認知症では、幻視や幻覚が特徴的にみられる。"
  },

  {
    id: "Q-037",
    category: "第9回",
    type: "single",
    prompt: "認知症およびパーキンソン病に関する記述である。正しいのはどれか。",

    choices: [
      "アルツハイマー型認知症では、まだら認知症がみられる。",
      "脳血管性認知症では、早期に人格障害がみられる。",
      "脳血管性認知症では、情動失禁がみられる。",
      "パーキンソン病の主な病変部位は、側頭葉である。",
      "パーキンソン病では、片麻痺がみられる。"
    ],

    answer: [3],
    explanation:
      "脳血管性認知症では、感情のコントロールが障害され情動失禁がみられる。"
  },

  {
    id: "Q-038",
    category: "第9回",
    type: "single",
    prompt: "パーキンソン病についての記述で誤っているのはどれか。",

    choices: [
      "突進歩行の特徴がある。",
      "興奮して、徘徊行動が見られる。",
      "動作緩慢や振戦などの特徴症状がある。",
      "オンとオフ現象が現れると、薬の使用量の調節が要する。",
      "Yahr分類でstageⅢ以上の患者は日常生活上介助を要する。"
    ],

    answer: [2],
    explanation:
      "徘徊行動は認知症の行動・心理症状であり、パーキンソン病の特徴ではない。"
  },

  {
    id: "Q-039",
    category: "第9回",
    type: "single",
    prompt: "特発性てんかんの発症原因はどれか。",

    choices: [
      "脳出血の後遺症",
      "脳腫瘍の合併症",
      "脳外傷の後遺症",
      "原因が特定できない"
    ],

    answer: [4],
    explanation:
      "特発性てんかんは、検査を行っても原因が特定できないてんかんである。"
  },

  {
    id: "Q-040",
    category: "第9回",
    type: "multi2",
    prompt: "筋萎縮性側索硬化症（ALS）で正しいのはどれか。2つ選べ。",

    choices: [
      "女性に多い。",
      "嚥下障害を呈する。",
      "再発と寛解を繰り返す。",
      "進行すると発語によるコミュニケーションが困難になる。"
    ],

    answer: [2, 4],
    explanation:
      "ALSでは球麻痺により嚥下障害や構音障害が生じ、進行すると発語が困難になる。"
  },

   {
    id: "Q-041",
    category: "第11回",
    type: "single",
    prompt: "収縮期血圧の上昇をきたす要因はどれか。",

    choices: [
      "副交感神経の興奮",
      "循環血液量の減少",
      "末梢血管抵抗の増大",
      "血液の粘稠度の低下",
      "動脈血酸素分圧（PaO₂）の上昇"
    ],

    answer: [3],
    explanation:
      "血圧は心拍出量と末梢血管抵抗に影響される。末梢血管抵抗が増大すると血圧（特に収縮期血圧）上昇につながる。"
  },

  {
    id: "Q-042",
    category: "第11回",
    type: "single",
    prompt: "高血圧が原因で起こりやすいのはどれか。",

    choices: [
      "脳出血",
      "脳塞栓症",
      "脳動静脈奇形",
      "急性硬膜下血腫"
    ],

    answer: [1],
    explanation:
      "高血圧の主な合併症として脳血管疾患があり、脳出血は代表的である。"
  },

  {
    id: "Q-043",
    category: "第11回",
    type: "single",
    prompt: "日本高血圧学会が定めた高血圧の診断基準に基づき、Ⅱ度高血圧の値（収縮期/拡張期）はどれか。",

    choices: [
      "140～159 ／ 90～99",
      "160～179 ／ 100～109",
      "130～139 ／ 85～89",
      "≧180 ／ ≧110"
    ],

    answer: [2],
    explanation:
      "高血圧治療ガイドライン2019の分類では、Ⅱ度高血圧は収縮期160～179mmHg、拡張期100～109mmHgである。"
  },

  {
    id: "Q-044",
    category: "第11回",
    type: "single",
    prompt: "糖尿病の特徴について誤っているのはどれか。",

    choices: [
      "早期症状として、体重増加がみられる。",
      "空腹時血糖値が126mg/dl以上である。",
      "HbA1c（ブドウ糖ヘモグロビン）が6.5％以上である。",
      "75g経口ブドウ糖負荷試験2時間血糖値が200mg/dl以上である。"
    ],

    answer: [1],
    explanation:
      "糖尿病の典型症状は多飲・口渇、多尿、多食に加え体重減少（＝三多一少）であり、体重増加は誤りである。"
  },

  {
    id: "Q-045",
    category: "第11回",
    type: "single",
    prompt: "2型糖尿病の食事療法における1日のエネルギー摂取量の算出に必要なのはどれか。",

    choices: [
      "体温",
      "腹囲",
      "標準体重（目標体重）",
      "体表面積"
    ],

    answer: [3],
    explanation:
      "食事療法では目標体重を設定し、目標体重（kg）×エネルギー係数（kcal/kg/日）で1日の摂取エネルギー量を算出する。"
  },

  {
    id: "Q-046",
    category: "第11回",
    type: "single",
    prompt: "低血糖の症状または所見はどれか。",

    choices: [
      "口渇",
      "徐脈",
      "多尿",
      "発汗",
      "発熱"
    ],

    answer: [4],
    explanation:
      "低血糖では交感神経症状として発汗、手指振戦、動悸（頻脈）などがみられる。"
  },

  {
    id: "Q-047",
    category: "第11回",
    type: "single",
    prompt: "痛風の患者の血液検査データで高値を示すのはどれか。",

    choices: [
      "尿酸",
      "尿素窒素",
      "血糖値",
      "血圧"
    ],

    answer: [1],
    explanation:
      "痛風は血清尿酸値の上昇（例：7.0mg/dL以上）を背景に、尿酸塩結晶が関節に析出して起こる。"
  },

  {
    id: "Q-048",
    category: "第11回",
    type: "multi2",
    prompt: "甲状腺機能亢進症（バセドウ病）の主な所見について正しいのはどれか。2つ選べ。",

    choices: [
      "徐脈",
      "眼球突出",
      "手指振戦",
      "血中TSH値の上昇"
    ],

    answer: [2, 3],
    explanation:
      "バセドウ病では代謝亢進により発汗や振戦がみられ、眼球突出が特徴的である。検査ではTSHは低下する。"
  },

  {
    id: "Q-049",
    category: "第12回",
    type: "single",
    prompt: "小学生の喘息発作の特徴で誤っているのはどれか。",

    choices: [
      "夜間と早朝の発症が多い。",
      "起坐呼吸することがある。",
      "早期に吸気性呼吸困難がみられる。",
      "IgE抗体陽性のアトピー型喘息が多い。"
    ],

    answer: [3],
    explanation:
      "喘息発作の初期は呼気性呼吸困難が主体であり、吸気性呼吸困難は症状が進行してからみられる。"
  },

  {
    id: "Q-050",
    category: "第12回",
    type: "single",
    prompt: "組織型別でみた肺癌の臨床症状で、進行が速く、早期から転移しやすいのはどれか。",

    choices: [
      "小細胞癌",
      "大細胞癌",
      "腺癌",
      "扁平上皮癌"
    ],

    answer: [1],
    explanation:
      "小細胞癌は増殖速度が速く、早期からリンパ節や遠隔転移を起こしやすい。"
  },

  {
    id: "Q-051",
    category: "第12回",
    type: "single",
    prompt: "COPDについて正しいのはどれか。",

    choices: [
      "我が国では原因の約50％が喫煙とされている",
      "労作時の息切れが特徴である",
      "肺が縮小する疾患である",
      "運動療法は無効である"
    ],

    answer: [2],
    explanation:
      "COPDでは労作時の息切れが代表的症状であり、原因の多くは喫煙で、運動療法も有効である。"
  },

  {
    id: "Q-052",
    category: "第12回",
    type: "single",
    prompt: "結核に関する記述で、正しいのはどれか。",

    choices: [
      "二週間以上続く高熱が主訴である。",
      "肺に限定した疾患である。",
      "初感染結核は飛沫による経気道感染である。",
      "開放性結核とは、通院治療を受けている患者である。"
    ],

    answer: [3],
    explanation:
      "結核は飛沫や空気感染による経気道感染で成立し、肺外結核もみられる。"
  },

  {
    id: "Q-053",
    category: "第12回",
    type: "single",
    prompt: "成人の1日の尿量で乏尿と判断する基準はどれか。",

    choices: [
      "100mL以下",
      "200mL以下",
      "400mL以下",
      "600mL以下"
    ],

    answer: [3],
    explanation:
      "乏尿は1日尿量400mL以下と定義され、100mL以下は無尿である。"
  },

  {
    id: "Q-054",
    category: "第12回",
    type: "single",
    prompt: "腎前性急性腎不全が起こるのはどれか。",

    choices: [
      "前立腺肥大症",
      "急性心筋梗塞",
      "急性尿細管壊死",
      "急性糸球体腎炎"
    ],

    answer: [2],
    explanation:
      "腎前性急性腎不全は腎血流低下が原因で起こり、急性心筋梗塞では心拍出量低下により発症する。"
  },

  {
    id: "Q-055",
    category: "第12回",
    type: "single",
    prompt: "腎機能を示す血液検査項目はどれか。",

    choices: [
      "クレアチニン（Ccr）",
      "中性脂肪",
      "尿酸",
      "LDLコレステロール"
    ],

    answer: [1],
    explanation:
      "クレアチニンは腎臓から排泄される老廃物であり、腎機能評価に用いられる。"
  },

  {
    id: "Q-056",
    category: "第12回",
    type: "single",
    prompt: "PSA腫瘍マーカーが陽性で検出されるのはどれか。",

    choices: [
      "肺がん",
      "急性腎不全",
      "前立腺肥大",
      "前立腺がん"
    ],

    answer: [4],
    explanation:
      "PSA（前立腺特異抗原）は前立腺がんで高値を示す腫瘍マーカーである。"
  },

   {
    id: "Q-057",
    category: "第13回",
    type: "single",
    prompt: "ウイルス性肝炎で正しいのはどれか。",

    choices: [
      "A型は慢性化しやすい。",
      "C型は経口感染しやすい。",
      "E型は血液感染しやすい。",
      "B型は肝硬変・肝がんに転帰しやすい。"
    ],

    answer: [4],
    explanation:
      "B型肝炎は慢性化しやすく、長期経過で肝硬変や肝癌に進展することがある。"
  },

  {
    id: "Q-058",
    category: "第13回",
    type: "multi2",
    prompt: "急性膵炎で正しいのはどれか。2つ選べ。",

    choices: [
      "男性の成因はアルコール性より胆石性が多い。",
      "重症度判定には造影CTが重要である。",
      "血中アミラーゼ値が低下する。",
      "初発症状は上腹部痛である。"
    ],

    answer: [2, 4],
    explanation:
      "急性膵炎では初発症状として上腹部痛が出現し、重症度判定には造影CTが必須である。"
  },

  {
    id: "Q-059",
    category: "第13回",
    type: "single",
    prompt: "ここ半年に体重が減少し、上腹部の腹痛や貧血があり、黒い便が出ると訴えている70歳代の男性患者に、最も疑われる病気はどれか。",

    choices: [
      "痛風",
      "胃癌",
      "大腸がん",
      "急性膵炎"
    ],

    answer: [2],
    explanation:
      "黒色便（タール便）は上部消化管出血を示し、体重減少や貧血を伴う場合は胃癌が疑われる。"
  },

  {
    id: "Q-060",
    category: "第13回",
    type: "single",
    prompt: "次の部位の内、高齢者が最も起りやすい骨折の部位はどれか。",

    choices: [
      "肋骨",
      "腰椎骨（胸腰椎移行部）",
      "鎖骨",
      "上腕骨遠位"
    ],

    answer: [2],
    explanation:
      "骨粗鬆症による脆弱性骨折は、胸腰椎移行部に最も多くみられる。"
  },

  {
    id: "Q-061",
    category: "第13回",
    type: "multi2",
    prompt: "変形性頚椎症の特徴症状はどれか。2つ選べ。",

    choices: [
      "手指の痺れ",
      "間歇性跛行",
      "頸部腫脹",
      "箸が使いにくい"
    ],

    answer: [1, 4],
    explanation:
      "変形性頚椎症では上肢の痺れや巧緻運動障害（箸が使いにくい）がみられる。"
  },

  {
    id: "Q-062",
    category: "第13回",
    type: "multi2",
    prompt: "骨粗鬆症で正しいのはどれか。2つ選べ。",

    choices: [
      "発症率に男女差はない。",
      "喫煙習慣はリスク因子である。",
      "アルコール摂取とは無関係である。",
      "エストロゲン分泌の低下で骨形成が抑制される。"
    ],

    answer: [2, 4],
    explanation:
      "骨粗鬆症は女性に多く、喫煙やエストロゲン分泌低下は発症リスクを高める。"
  },

   {
    id: "Q-063",
    category: "第14回",
    type: "single",
    prompt: "貧血の診断基準で、誤っているのはどれか。",

    choices: [
      "男性のヘモグロビン≦13g/dℓ",
      "女性のヘモグロビン≦12g/dℓ",
      "高齢者男女のヘモグロビン≦11g/dℓ",
      "女性の赤血球数≦600万個/m³"
    ],

    answer: [4],
    explanation:
      "貧血の診断基準はヘモグロビン濃度であり、赤血球数は基準に含まれない。"
  },

  {
    id: "Q-064",
    category: "第14回",
    type: "single",
    prompt: "不足すると巨赤芽球性貧血になるのはどれか。",

    choices: [
      "ビタミンA",
      "ビタミンB₁₂",
      "ビタミンD",
      "ビタミンE"
    ],

    answer: [2],
    explanation:
      "ビタミンB₁₂欠乏ではDNA合成障害が起こり、巨赤芽球性貧血をきたす。"
  },

  {
    id: "Q-065",
    category: "第14回",
    type: "single",
    prompt: "末梢血液中の（　）が低下した状態を貧血という。",

    choices: [
      "血球数",
      "血小板数",
      "アルブミン濃度",
      "ヘモグロビン濃度"
    ],

    answer: [4],
    explanation:
      "貧血とは、一定容積中のヘモグロビン濃度が低下した状態を指す。"
  },

  {
    id: "Q-066",
    category: "第14回",
    type: "multi2",
    prompt: "鉄欠乏性貧血でみられる症状はどれか。2つ選べ。",

    choices: [
      "動悸",
      "発熱",
      "感覚過敏",
      "匙状爪"
    ],

    answer: [1, 4],
    explanation:
      "鉄欠乏性貧血では酸素不足により動悸がみられ、爪が反る匙状爪が特徴的である。"
  },

  {
    id: "Q-067",
    category: "第14回",
    type: "single",
    prompt: "急性白血病で誤っているのはどれか。",

    choices: [
      "末梢血顆粒球の減少による臓器出血",
      "赤血球生成の抑制による貧血",
      "血小板生成の抑制による出血傾向",
      "白血病細胞の増殖による造血障害"
    ],

    answer: [1],
    explanation:
      "出血傾向は血小板減少が原因であり、顆粒球減少は感染症を起こしやすくする。"
  },

  {
    id: "Q-068",
    category: "第14回",
    type: "multi2",
    prompt: "全身性エリテマトーデスについて正しいのはどれか。2つ選べ。",

    choices: [
      "関節変形がみられる。",
      "高齢女性に発症頻度が高い。",
      "神経系や精神的な症状を認める。",
      "白血球数減少がみられる。"
    ],

    answer: [3, 4],
    explanation:
      "SLEでは中枢神経症状が出現することがあり、血液検査で白血球減少がみられる。"
  },

  {
    id: "Q-069",
    category: "第14回",
    type: "single",
    prompt: "白血病について正しいのはどれか。",

    choices: [
      "高齢者の発症はまれである。",
      "急性リンパ性白血病は成人に多い。",
      "慢性骨髄性白血病は骨髄移植の適応でない。",
      "慢性骨髄性白血病はチロシンキナーゼ阻害薬が有効である。"
    ],

    answer: [4],
    explanation:
      "慢性骨髄性白血病ではチロシンキナーゼ阻害薬（イマチニブなど）が有効である。"
  },

  {
    id: "Q-070",
    category: "第14回",
    type: "single",
    prompt: "膠原病として認められないのはどれか。",

    choices: [
      "変形性関節症",
      "関節リウマチ（RA）",
      "進行性全身硬化症（PSS）",
      "全身性エリテマトーデス（SLE）"
    ],

    answer: [1],
    explanation:
      "変形性関節症は加齢や力学的負荷による疾患であり、膠原病には含まれない。"
  },
];

/* -------------------------
   State
-------------------------- */
let order = QUESTIONS.map((q) => q.id);
let index = 0;
let score = 0;
let locked = false;

// GitHub Pagesでも壊れにくいように、進捗をlocalStorageに保存
const STORAGE_KEY = "quiz_state_v1";

/* -------------------------
   Utils
-------------------------- */
function $(id) { return document.getElementById(id); }

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeNums(nums) {
  return [...nums].map(Number).sort((a, b) => a - b);
}

function setFeedback(text, kind = "") {
  const el = $("feedback");
  el.className = "feedback" + (kind ? " " + kind : "");
  el.textContent = text || "";
}

function currentQuestion() {
  const id = order[index];
  return QUESTIONS.find((q) => q.id === id);
}

function saveState() {
  const data = { order, index, score };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data.order) || typeof data.index !== "number") return false;
    // IDが一致するものだけ残す（問題を増減しても破綻しにくい）
    const validIds = new Set(QUESTIONS.map((q) => q.id));
    order = data.order.filter((id) => validIds.has(id));
    // もし足りないIDがあれば末尾に追加
    for (const q of QUESTIONS) if (!order.includes(q.id)) order.push(q.id);
    index = Math.min(Math.max(0, data.index), order.length - 1);
    score = typeof data.score === "number" ? data.score : 0;
    return true;
  } catch {
    return false;
  }
}

/* -------------------------
   Render
-------------------------- */
function render() {
  const q = currentQuestion();
  if (!q) return;

  locked = false;
  $("nextBtn").disabled = true;

  $("progress").textContent = `${index + 1} / ${order.length}`;
  $("score").textContent = `Score: ${score}`;
  $("category").textContent = q.category ?? "-";
  $("mode").textContent = q.type === "single" ? "1つ選択" : "2つ選択";

  $("prompt").textContent = q.prompt;

  const form = $("choices");
  form.innerHTML = "";

  const inputType = q.type === "single" ? "radio" : "checkbox";
  const name = "choice";

  q.choices.forEach((text, i) => {
    const num = i + 1;

    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = inputType;
    input.name = name;
    input.value = String(num);

    const span = document.createElement("span");
    span.className = "label";
    span.textContent = `${num}. ${text}`;

    label.appendChild(input);
    label.appendChild(span);
    form.appendChild(label);
  });

  setFeedback("");
  $("explain").hidden = true;
  $("explainBody").textContent = "";
  saveState();
}

/* -------------------------
   Logic
-------------------------- */
function getSelected() {
  const inputs = Array.from(document.querySelectorAll('#choices input'));
  return inputs.filter((x) => x.checked).map((x) => Number(x.value));
}

function judge(q, selected) {
  const sel = normalizeNums(selected);
  const ans = normalizeNums(q.answer);

  if (q.type === "single") {
    return sel.length === 1 && sel[0] === ans[0];
  }
  if (q.type === "multi2") {
    if (sel.length !== 2) return { ok: false, reason: "2つ選んでください。" };
    const ok = sel.length === ans.length && sel.every((v, i) => v === ans[i]);
    return { ok, reason: ok ? "" : "不正解" };
  }
  return { ok: false, reason: "未対応の形式です。" };
}

function onCheck() {
  if (locked) return;

  const q = currentQuestion();
  const selected = getSelected();

  if (q.type === "single" && selected.length !== 1) {
    setFeedback("1つ選んでください。");
    return;
  }
  if (q.type === "multi2" && selected.length !== 2) {
    setFeedback("2つ選んでください。");
    return;
  }

  const res = judge(q, selected);
  const ok = typeof res === "boolean" ? res : res.ok;

  locked = true;
  $("nextBtn").disabled = false;

  if (ok) {
    score += 1;
    setFeedback("OK", "ok");
  } else {
    setFeedback("NG", "ng");
  }

  $("score").textContent = `Score: ${score}`;

  // ✅ ここから解説表示
  const exp = q.explanation ?? "";
  const ansText = `正解: ${normalizeNums(q.answer).join(", ")}\n`;

  if (exp.trim().length > 0) {
    $("explainBody").textContent = ansText + exp;
    $("explain").hidden = false;
  } else {
    // 解説が無い場合でも正解だけ出したいならここを ansText に変える
    $("explain").hidden = true;
    $("explainBody").textContent = "";
  }

  saveState();
}


function onNext() {
  if (!locked) {
    setFeedback("先に判定を押してください。");
    return;
  }
  index = Math.min(index + 1, order.length - 1);
  render();
}

function onShuffle() {
  // 現在の問題を先頭に残して他をシャッフル（学習しやすい）
  const currentId = order[index];
  const rest = order.filter((id) => id !== currentId);
  shuffleArray(rest);
  order = [currentId, ...rest];
  index = 0;
  setFeedback("シャッフルしました。");
  saveState();
  render();
}

function onReset() {
  order = QUESTIONS.map((q) => q.id);
  index = 0;
  score = 0;
  locked = false;
  localStorage.removeItem(STORAGE_KEY);
  setFeedback("リセットしました。");
  render();
}

/* -------------------------
   Bind
-------------------------- */
$("checkBtn").addEventListener("click", onCheck);
$("nextBtn").addEventListener("click", onNext);
$("shuffleBtn").addEventListener("click", onShuffle);
$("resetBtn").addEventListener("click", onReset);

// 起動
loadState(); // 失敗してもOK
render();
