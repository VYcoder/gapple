/* ===== ДАННЫЕ САЙТА — редактируйте только этот файл =====
   Все цены в монетах Oxide.
   weapon — к какому предмету относится скин (по нему кейсы выбирают скины)
   rarity — c обычный, u необычный, r редкий, e эпический, l легендарный
   value  — цена скина в монетах
   img    — имя картинки в репозитории; если пусто, показывается иконка ico
   Строки с «(заглушка)» замените на настоящие скины. */
const SKINS=[
 // --- Штурмовая винтовка (AK-47) ---
 {id:'groza',weapon:'Штурмовая винтовка',name:'Гроза района',rarity:'l',collection:'Street Legacy',img:'groza.webp',value:550},
 {id:'shepot',weapon:'Штурмовая винтовка',name:'Шепот предков',rarity:'l',collection:'Tribe of the Spark',img:'shepot.webp',value:500},
 {id:'kraken',weapon:'Штурмовая винтовка',name:'Щупальца кракена',rarity:'l',collection:'Eldritch Depths',img:'kraken.webp',value:650},
 {id:'digital',weapon:'Штурмовая винтовка',name:'Цифровой потрошитель',rarity:'l',collection:'Protocol: Shadow',img:'digital.webp',value:700},
 {id:'unstoppable',weapon:'Штурмовая винтовка',name:'Неудержимый',rarity:'l',collection:'State of Riot',img:'unstoppable.webp',value:600},
 {id:'flame',weapon:'Штурмовая винтовка',name:'Пламенный воин',rarity:'l',collection:'Path of the Sword',img:'flame.webp',value:750},
 {id:'ice',weapon:'Штурмовая винтовка',name:'Ледяной раскол',rarity:'l',collection:'Frozen Fury',img:'ice.webp',value:800},
 {id:'ak_c',weapon:'Штурмовая винтовка',name:'АК обычный (заглушка)',rarity:'c',collection:'',img:'',ico:'🔫',value:5},
 {id:'ak_u',weapon:'Штурмовая винтовка',name:'АК необычный (заглушка)',rarity:'u',collection:'',img:'',ico:'🔫',value:12},
 {id:'ak_r',weapon:'Штурмовая винтовка',name:'АК редкий (заглушка)',rarity:'r',collection:'',img:'',ico:'🔫',value:40},
 {id:'ak_e',weapon:'Штурмовая винтовка',name:'АК эпический (заглушка)',rarity:'e',collection:'',img:'',ico:'🔫',value:120},

 // --- Premium: карьер, каменоломня, костёр, багги, турель ---
 {id:'fire',weapon:'Костёр',name:'Скин на костёр (заглушка)',rarity:'c',collection:'',img:'',ico:'🔥',value:15},
 {id:'stonepit',weapon:'Каменоломня',name:'Скин на каменоломню (заглушка)',rarity:'u',collection:'',img:'',ico:'🪨',value:40},
 {id:'quarry',weapon:'Карьер',name:'Скин на карьер (заглушка)',rarity:'r',collection:'',img:'',ico:'⛏️',value:120},
 {id:'turret',weapon:'Турель',name:'Скин на турель (заглушка)',rarity:'e',collection:'',img:'',ico:'🗼',value:300},
 {id:'buggy',weapon:'Багги',name:'Скин на багги (заглушка)',rarity:'l',collection:'',img:'',ico:'🏎️',value:900}
];

/* weapons — из каких предметов кейс берёт скины (нет поля = из всех)
   rar — шансы редкостей; нет редкости = не выпадает */
const CASES=[
 {id:'ak',name:'AK-47',price:25,ico:'🔫',k:'#8d9aa0',weapons:['Штурмовая винтовка'],rar:{c:55,u:28,r:12,e:4,l:1}},
 {id:'premium',name:'Premium',price:150,ico:'💎',k:'#a56bd0',weapons:['Карьер','Каменоломня','Костёр','Багги','Турель'],rar:{c:30,u:28,r:22,e:15,l:5}},
 {id:'legend',name:'Легендарный кейс',price:750,ico:'👑',k:'#e0a53a',rar:{l:1}}
];
