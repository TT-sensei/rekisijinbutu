// people.js — 歴史人物データ 42人
const PEOPLE = [
  // ── 古代 ──
  { id:"himiko",      name:"卑弥呼",       kana:"ひみこ",              era:"古代",     emoji:"👑", hint:"邪馬台国の女王" },
  { id:"shotoku",     name:"聖徳太子",     kana:"しょうとくたいし",    era:"古代",     emoji:"📜", hint:"十七条の憲法を作った皇族（本名：厩戸皇子）" },
  { id:"imoko",       name:"小野妹子",     kana:"おののいもこ",         era:"古代",     emoji:"🚢", hint:"遣隋使として中国に渡った人物" },
  { id:"tenchi",      name:"中大兄皇子",   kana:"なかのおおえのおうじ", era:"古代",     emoji:"⚔️", hint:"大化の改新をおこした皇子" },
  { id:"kamatari",    name:"中臣鎌足",     kana:"なかとみのかまたり",   era:"古代",     emoji:"🏛️", hint:"大化の改新で中大兄皇子を助けた人物" },
  // ── 奈良 ──
  { id:"shomu",       name:"聖武天皇",     kana:"しょうむてんのう",     era:"奈良",     emoji:"🦌", hint:"東大寺と大仏を建てた天皇" },
  { id:"gyoki",       name:"行基",         kana:"ぎょうき",             era:"奈良",     emoji:"🙏", hint:"民のために橋や道を作ったお坊さん" },
  { id:"ganjin",      name:"鑑真",         kana:"がんじん",             era:"奈良",     emoji:"⛵", hint:"日本に仏教の戒律を伝えた中国の僧" },
  // ── 平安 ──
  { id:"michinaga",   name:"藤原道長",     kana:"ふじわらのみちなが",   era:"平安",     emoji:"🌕", hint:"「この世をばわが世とぞ思ふ」と詠んだ貴族" },
  { id:"murasaki",    name:"紫式部",       kana:"むらさきしきぶ",       era:"平安",     emoji:"📖", hint:"源氏物語を書いた女性作家" },
  { id:"seishonagon", name:"清少納言",     kana:"せいしょうなごん",     era:"平安",     emoji:"✍️", hint:"枕草子を書いた女性作家" },
  { id:"kiyomori",    name:"平清盛",       kana:"たいらのきよもり",     era:"平安",     emoji:"⚓", hint:"武士として初めて太政大臣になった人物" },
  // ── 鎌倉 ──
  { id:"yoritomo",    name:"源頼朝",       kana:"みなもとのよりとも",   era:"鎌倉",     emoji:"🏹", hint:"鎌倉幕府を開いた将軍" },
  { id:"yoshitsune",  name:"源義経",       kana:"みなもとのよしつね",   era:"鎌倉",     emoji:"🌊", hint:"平家をほろぼした悲劇の武将" },
  { id:"tokimune",    name:"北条時宗",     kana:"ほうじょうときむね",   era:"鎌倉",     emoji:"🌀", hint:"元寇から日本を守った執権" },
  // ── 室町 ──
  { id:"takauji",     name:"足利尊氏",     kana:"あしかがたかうじ",     era:"室町",     emoji:"🏯", hint:"室町幕府を開いた将軍" },
  { id:"yoshimitsu",  name:"足利義満",     kana:"あしかがよしみつ",     era:"室町",     emoji:"🏅", hint:"金閣寺を建てた将軍" },
  { id:"yoshimasa",   name:"足利義政",     kana:"あしかがよしまさ",     era:"室町",     emoji:"🌙", hint:"銀閣寺を建て、応仁の乱のころの将軍" },
  { id:"sesshu",      name:"雪舟",         kana:"せっしゅう",           era:"室町",     emoji:"🖌️", hint:"水墨画で有名なお坊さん画家" },
  // ── 安土桃山 ──
  { id:"xavier",      name:"ザビエル",     kana:"ざびえる",             era:"安土桃山", emoji:"✝️", hint:"日本にキリスト教を伝えた宣教師" },
  { id:"nobunaga",    name:"織田信長",     kana:"おだのぶなが",         era:"安土桃山", emoji:"⚔️", hint:"天下統一をめざした戦国武将" },
  { id:"hideyoshi",   name:"豊臣秀吉",     kana:"とよとみひでよし",     era:"安土桃山", emoji:"🌸", hint:"農民から天下人になった武将" },
  // ── 江戸 ──
  { id:"ieyasu",      name:"徳川家康",     kana:"とくがわいえやす",     era:"江戸",     emoji:"🎯", hint:"江戸幕府を開いた将軍" },
  { id:"iemitsu",     name:"徳川家光",     kana:"とくがわいえみつ",     era:"江戸",     emoji:"🔒", hint:"参勤交代を定め鎖国を完成させた将軍" },
  { id:"yoshimune",   name:"徳川吉宗",     kana:"とくがわよしむね",     era:"江戸",     emoji:"📊", hint:"享保の改革をおこなった将軍" },
  { id:"chikamatsu",  name:"近松門左衛門", kana:"ちかまつもんざえもん", era:"江戸",     emoji:"🎭", hint:"人形浄瑠璃の脚本を書いた作家" },
  { id:"hiroshige",   name:"歌川広重",     kana:"うたがわひろしげ",     era:"江戸",     emoji:"🗻", hint:"東海道五十三次で有名な浮世絵師" },
  { id:"norinaga",    name:"本居宣長",     kana:"もとおりのりなが",     era:"江戸",     emoji:"🌸", hint:"古事記伝を書いた国学者" },
  { id:"genpaku",     name:"杉田玄白",     kana:"すぎたげんぱく",       era:"江戸",     emoji:"🔬", hint:"解体新書を翻訳した医者" },
  { id:"tadataka",    name:"伊能忠敬",     kana:"いのうただたか",       era:"江戸",     emoji:"🗺️", hint:"日本全国を歩いて測量した人物" },
  // ── 江戸末期 ──
  { id:"perry",       name:"ペリー",       kana:"ぺりー",               era:"江戸末期", emoji:"⚓", hint:"黒船で日本に開国を求めたアメリカの提督" },
  { id:"kaishu",      name:"勝海舟",       kana:"かつかいしゅう",       era:"江戸末期", emoji:"🤝", hint:"江戸城を無血開城した幕府の人物" },
  { id:"takamori",    name:"西郷隆盛",     kana:"さいごうたかもり",     era:"江戸末期", emoji:"🐕", hint:"薩摩藩出身の明治維新の英雄" },
  { id:"toshimichi",  name:"大久保利通",   kana:"おおくぼとしみち",     era:"江戸末期", emoji:"🏛️", hint:"明治維新を推し進めた薩摩の政治家" },
  { id:"takayoshi",   name:"木戸孝允",     kana:"きどたかよし",         era:"江戸末期", emoji:"📝", hint:"長州藩出身の明治維新の指導者" },
  // ── 明治 ──
  { id:"meiji",       name:"明治天皇",     kana:"めいじてんのう",       era:"明治",     emoji:"👑", hint:"明治維新で近代日本を開いた天皇" },
  { id:"fukuzawa",    name:"福沢諭吉",     kana:"ふくざわゆきち",       era:"明治",     emoji:"📚", hint:"学問のすすめを書いた教育者・思想家" },
  { id:"okuma",       name:"大隈重信",     kana:"おおくましげのぶ",     era:"明治",     emoji:"🎓", hint:"早稲田大学を作った政治家" },
  { id:"itagaki",     name:"板垣退助",     kana:"いたがきたいすけ",     era:"明治",     emoji:"✊", hint:"自由民権運動を進めた政治家" },
  { id:"hirobumi",    name:"伊藤博文",     kana:"いとうひろぶみ",       era:"明治",     emoji:"📜", hint:"初代内閣総理大臣" },
  { id:"mutsu",       name:"陸奥宗光",     kana:"むつむねみつ",         era:"明治",     emoji:"🖊️", hint:"不平等条約の改正に成功した外務大臣" },
  { id:"togo",        name:"東郷平八郎",   kana:"とうごうへいはちろう", era:"明治",     emoji:"🚢", hint:"日本海海戦でロシア艦隊をやぶった提督" },
  { id:"komura",      name:"小村寿太郎",   kana:"こむらじゅたろう",     era:"明治",     emoji:"🕊️", hint:"ポーツマス条約を結んだ外務大臣" },
  { id:"hideyo",      name:"野口英世",     kana:"のぐちひでよ",         era:"明治",     emoji:"🧪", hint:"世界で活躍した細菌学者" },
];
