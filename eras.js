// 時代から学ぶモードの単元一覧。id は単元ごとに一意にします。
const HISTORY_ERAS = [
  {id:'jomon',era:'縄文',name:'縄文時代',subtitle:'自然とともに生きた人々',period:'約1万3000年前〜紀元前4世紀ごろ',emoji:'🏺',description:'くらし・土器・遺跡',available:true,order:1},
  {id:'yayoi',era:'弥生',name:'弥生時代',subtitle:'米づくりが広がったころ',period:'紀元前4世紀ごろ〜3世紀ごろ',emoji:'🌾',description:'米づくり・むら・金属器',available:false,order:2},
  {id:'kofun',era:'古墳',name:'古墳時代',subtitle:'大きな古墳と国づくり',period:'3世紀中ごろ〜7世紀ごろ',emoji:'🗝️',description:'古墳・はにわ・大和朝廷',available:false,order:3},
  {id:'asuka',era:'飛鳥',name:'飛鳥時代',subtitle:'天皇中心の国づくり',period:'6世紀末〜710年',emoji:'🏯',description:'政治・仏教・外国との関わり',available:false,order:4},
  {id:'nara',era:'奈良',name:'奈良時代',subtitle:'平城京と仏教の文化',period:'710年〜794年',emoji:'🦌',description:'都・政治・文化',available:false,order:5},
  {id:'heian',era:'平安',name:'平安時代',subtitle:'貴族の文化と武士の登場',period:'794年〜1185年ごろ',emoji:'📜',description:'貴族・文化・武士',available:false,order:6},
  {id:'kamakura',era:'鎌倉',name:'鎌倉時代',subtitle:'武士による政治の始まり',period:'1185年ごろ〜1333年',emoji:'⚔️',description:'幕府・武士・元との戦い',available:false,order:7},
  {id:'muromachi',era:'室町',name:'室町時代',subtitle:'文化の広がりと人々の成長',period:'1336年〜1573年',emoji:'🏯',description:'幕府・文化・産業',available:false,order:8},
  {id:'azuchi-momoyama',era:'安土桃山',name:'安土桃山時代',subtitle:'全国統一へ向かった時代',period:'1573年〜1603年ごろ',emoji:'🏰',description:'統一・外国との関わり',available:false,order:9},
  {id:'edo-politics',era:'江戸',name:'江戸時代',subtitle:'幕府のしくみ',period:'1603年〜1868年',emoji:'🏯',description:'幕府・大名・政治',available:false,order:10},
  {id:'edo-culture',era:'江戸',name:'江戸時代',subtitle:'文化とくらし',period:'1603年〜1868年',emoji:'🎭',description:'文化・産業・人々のくらし',available:false,order:11},
  {id:'meiji-nation',era:'明治',name:'明治時代',subtitle:'新しい国づくり',period:'1868年〜1912年',emoji:'🏛️',description:'政治・制度・外国との関わり',available:false,order:12},
  {id:'meiji-industry',era:'明治',name:'明治時代',subtitle:'産業とくらし',period:'1868年〜1912年',emoji:'🚂',description:'産業・交通・人々のくらし',available:false,order:13},
  {id:'taisho-showa-war',era:'大正・昭和',name:'大正・昭和時代',subtitle:'民主化と戦争',period:'1912年〜1945年',emoji:'🗳️',description:'民主化・社会・戦争',available:false,order:14},
  {id:'showa-postwar',era:'昭和',name:'昭和時代',subtitle:'戦後の日本',period:'1945年〜1989年',emoji:'🕊️',description:'平和・復興・くらし',available:false,order:15}
];
