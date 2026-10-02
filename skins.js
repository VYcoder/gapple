/* ===== ДАННЫЕ САЙТА — редактируйте только этот файл =====
   Все цены в монетах Oxide.
   weapon — к какому предмету относится скин (по нему кейсы выбирают скины)
   rarity — c обычный, u необычный, r редкий, e эпический, l легендарный
   value  — цена скина в монетах
   img    — имя картинки в репозитории (png/webp с прозрачным фоном)
   ico    — иконка-запасной вариант, если картинка не загрузилась */
const SKINS=[
 // --- Штурмовая винтовка (AK-47) ---
 {id:'groza',weapon:'Штурмовая винтовка',name:'Гроза района',rarity:'l',collection:'Street Legacy',img:'groza.webp',value:550},
 {id:'shepot',weapon:'Штурмовая винтовка',name:'Шепот предков',rarity:'l',collection:'Tribe of the Spark',img:'shepot.webp',value:500},
 {id:'kraken',weapon:'Штурмовая винтовка',name:'Щупальца кракена',rarity:'l',collection:'Eldritch Depths',img:'kraken.webp',value:650},
 {id:'digital',weapon:'Штурмовая винтовка',name:'Цифровой потрошитель',rarity:'l',collection:'Protocol: Shadow',img:'digital.webp',value:700},
 {id:'unstoppable',weapon:'Штурмовая винтовка',name:'Неудержимый',rarity:'l',collection:'State of Riot',img:'unstoppable.webp',value:600},
 {id:'flame',weapon:'Штурмовая винтовка',name:'Пламенный воин',rarity:'l',collection:'Path of the Sword',img:'flame.webp',value:750},
 {id:'ice',weapon:'Штурмовая винтовка',name:'Ледяной раскол',rarity:'l',collection:'Frozen Fury',img:'ice.webp',value:800},

 // --- Premium ---
 {id:'buggy',weapon:'Багги',name:'Багги',rarity:'l',collection:'',img:'buggy.webp',ico:'🏎️',value:280},
 {id:'quarry',weapon:'Каменоломня',name:'Каменоломня',rarity:'l',collection:'',img:'quarry.webp',ico:'🪨',value:1600},
 {id:'copter',weapon:'Коптер',name:'Коптер',rarity:'l',collection:'',img:'copter.webp',ico:'🚁',value:600},
 {id:'turret',weapon:'Турель',name:'Турель',rarity:'l',collection:'',img:'turret.webp',ico:'🗼',value:350}
];

/* weapons — из каких предметов кейс берёт скины (нет поля = из всех)
   rar — шансы редкостей; нет редкости = не выпадает
   cw  — относительный вес конкретного скина внутри кейса (по умолчанию 1):
         чем больше число, тем чаще выпадает. Шансы в процентах видны в окне кейса. */
const CASES=[
 {id:'ak',name:'AK-47',price:680,ico:'🔫',k:'#e0a53a',weapons:['Штурмовая винтовка'],rar:{l:1},
  cw:{shepot:4,groza:3,unstoppable:3,kraken:2,digital:2,flame:1.5,ice:1}},
 {id:'premium',name:'Premium',price:550,ico:'💎',k:'#a56bd0',weapons:['Багги','Каменоломня','Коптер','Турель'],rar:{l:1},
  cw:{buggy:40,turret:30,copter:20,quarry:10}}
];
