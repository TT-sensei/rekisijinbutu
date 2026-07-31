// 時代から学ぶモードの単元一覧。画面では order 順に表示します。
const HISTORY_ERAS = [
  {id:'jomon',era:'縄文',name:'縄文時代',subtitle:'自然とともに生きた人々',period:'約1万3000年前〜紀元前4世紀ごろ',emoji:'🏺',description:'くらし・土器・遺跡',available:true,order:1},
  {id:'yayoi',era:'弥生',name:'弥生時代',subtitle:'米づくりとむらの広がり',period:'紀元前4世紀ごろ〜3世紀ごろ',emoji:'🌾',description:'米づくり・むら・金属器',available:true,order:2},
  {id:'kofun',era:'古墳',name:'古墳時代',subtitle:'大きな古墳と大和朝廷',period:'3世紀中ごろ〜7世紀ごろ',emoji:'🗝️',description:'古墳・豪族・渡来人',available:true,order:3},
  {id:'asuka',era:'飛鳥',name:'飛鳥時代',subtitle:'天皇を中心とする国づくり',period:'6世紀末〜710年',emoji:'🏯',description:'政治・仏教・外国との関わり',available:true,order:4},
  {id:'nara',era:'奈良',name:'奈良時代',subtitle:'都と仏教の文化',period:'710年〜794年',emoji:'🦌',description:'都・律令・天平文化',available:true,order:5},
  {id:'heian',era:'平安',name:'平安時代',subtitle:'貴族の文化と武士の登場',period:'794年〜1185年ごろ',emoji:'📜',description:'貴族・国風文化・武士',available:true,order:6},
  {id:'kamakura',era:'鎌倉',name:'鎌倉時代',subtitle:'武士による政治の始まり',period:'1185年ごろ〜1333年',emoji:'⚔️',description:'幕府・御家人・元寇',available:true,order:7},
  {id:'muromachi',era:'室町',name:'室町時代',subtitle:'武士の政治と今につながる文化',period:'1336年〜1573年',emoji:'🍵',description:'幕府・貿易・東山文化',available:true,order:8},
  {id:'azuchi-momoyama',era:'安土桃山',name:'安土桃山時代',subtitle:'全国統一と豪華な文化',period:'1573年〜1603年ごろ',emoji:'🏰',description:'統一・城・南蛮文化',available:true,order:9},
  {id:'edo-politics',era:'江戸',name:'江戸時代',subtitle:'幕府のしくみと安定した社会',period:'1603年〜1868年',emoji:'🏯',description:'幕藩体制・大名・外国との窓口',available:true,order:10},
  {id:'edo-culture',era:'江戸',name:'江戸時代',subtitle:'産業・交通・文化の発展',period:'1603年〜1868年',emoji:'🎭',description:'産業・交通・学問・文化',available:true,order:11},
  {id:'meiji-nation',era:'明治',name:'明治時代',subtitle:'新しい国づくり',period:'1868年〜1912年',emoji:'🏛️',description:'政治・制度・憲法',available:true,order:12},
  {id:'meiji-industry',era:'明治',name:'明治時代',subtitle:'産業の発展と人々のくらし',period:'1868年〜1912年',emoji:'🚂',description:'産業・交通・社会問題・外交',available:true,order:13},
  {id:'taisho-showa-war',era:'大正・昭和',name:'大正・昭和時代',subtitle:'民主化の動きと戦争',period:'1912年〜1945年',emoji:'🗳️',description:'民主化・社会・戦争と人々',available:true,order:14},
  {id:'showa-postwar',era:'昭和',name:'昭和時代',subtitle:'戦後の復興と発展',period:'1945年〜1989年',emoji:'🕊️',description:'憲法・復興・経済・環境',available:true,order:15}
];
