var surgery_db = [
	{name: 'Техніка обробки рук та операційного поля.', keys: 'миття, обробка, оброблення, хірургічне оброблення рук,  хірургічне обробка рук, хірургічне миття рук, Гроссіха – Філончикова, біглюконат, гібітан, Спасокукоцького - Кочергіна, первомур, с-4, c-4, стериліум', tags: '', status: 'write'},
	{name: 'Переломи кісток. Види, клінічні симптоми переломів. Перша медична допомога, лікування хворого з переломом кісток.', keys: 'перелом', tags: '', status: 'write'}, 
	{name: 'Поняття про післяопераційний період. Профілактика ранніх і пізніх ускладнень.', keys: 'по', tags: '', status: 'write'}, 
	{name: 'Закриті та відкриті ушкодження грудної клітини та органів грудної порожнини. Надання першої допомоги при них.', keys: 'перелом, стиснення, пневмоторакс, гемоторакс, грудина, ключиця', tags: '', status: 'write'}, 
	{name: 'Поняття про хірургічну операцію та оперативну хірургію. Сучасний хірургічний інструментарій.', keys: 'операція, хір інструментарій', tags: '', status: 'write'}, 
	{name: 'Хірургічний туберкульоз та його форми. Клінічна картина, діагностика та лікування кістково-суглобового туберкульозу.', keys: 'туберкульоз', tags: '', status: 'write'},
	{name: 'Поняття про сучасний багатокомпонентний наркоз. Ускладнення наркозу. Профілактика, лікування.', keys: 'наркоз', tags: '', status: 'write'},
	{name: 'Хімічні опіки. Особливості першої допомоги та лікування.', keys: 'опік, хім опік, хім. опік', tags: '', status: 'write'},
	{name: 'Підготовка хірургічних інструментів для стерилізації. Контроль стерилізації.', keys: 'псо', tags: '', status: 'write'},
	{name: 'Гостра непрохідність кишок. Діагностика, перша медична допомога, особливості транспортування, показання до оперативною лікування.', keys: 'пмд', tags: '', status: 'write'},
	{name: 'Ускладнення при переливанні крові та їх профілактика.', keys: 'перливання, трансфузія, гемотрансфузія', tags: '', status: 'write'},
	{name: 'Газова гангрена, загальні та місцеві прояви, принципи лікування. Профілактика газової гангрени.', keys: '', tags: '', status: 'write'},
	{name: 'Трансфузія. Поняття про групу та резус-фактор крові, методи їх визначення.', keys: 'перливання, трансфузія, гемотрансфузія', tags: '', status: 'write'},
	{name: 'Остеомієліт. Принципи місцевого та загального лікування хронічного остеомієліту з норицями.', keys: '', tags: '', status: 'write'},
	{name: 'Роль фельдшера в транспортуванні та інтенсивній терапії хворих з травматичним шоком. Зміст протишокових заходів в умовах військових дій та екстремальних ситуацій.', keys: 'травм шок, травматичний шок', tags: '', status: 'write'},
	{name: 'Уявлення про некроз. Причини. Суха та волога гангрена. Місцеві й загальні прояви. Профілактика та лікування, догляд за хворими після операції.', keys: 'некроз, змертвіння, гангрени', tags: '', status: 'write'},
	{name: 'Стерилізація перев’язочного матеріалу, білизни, хірургічних інструментів та гумових виробів. Контроль стерилізації.', keys: '', tags: '', status: 'write'},
	{name: 'Опіки. Класифікація. Способи визначення площи та глибини опіка.', keys: '', tags: '', status: 'write'},
	{name: 'Антисептика. Групи антисептичних засобів.', keys: 'антисептика, асептика', tags: '', status: 'write'},
	{name: 'Закриті механічні ушкодження м’яких тканин, перша допомога та принципи лікування.', keys: 'пмд', tags: '', status: 'write'},
	{name: 'Поняття про пов’язки та перев’язки. Види м’яких пов’язок.', keys: '', tags: '', status: 'write'},
	{name: 'Хірургічна інфекція. Класифікація, профілактика хірургічних інфекцій.', keys: 'хір інф, хір інфекція', tags: '', status: 'write'},
	{name: 'Термінальні стани. Показання та протипоказання до серцево-легеневої реанімації.', keys: 'слр', tags: '', status: 'write'},
	{name: 'Пухлини. Класифікація, профілактика та лікування пухлин. Організація онкологічної допомоги.', keys: 'онкологія, рак', tags: '', status: 'write'},
	{name: 'Принцип та техніка дренування ран грудної та черевної порожнини, догляд за дренажами та техніка їх видалення.', keys: 'дренаж, черево', tags: '', status: 'write'},
	{name: 'Запальні захворювання прямої кишки та прилеглих до неї тканин. Клінічна картина і діагностика, консервативне та оперативне лікування. ', keys: 'жопа, дупа, пряма кишка, проктит, парапроктит', tags: '', status: 'write'},
	{name: 'Поняття про передопераційний період. Підготовка хворого до планової та екстреної операції.', keys: 'по, планова, естренна', tags: '', status: 'write'},
	{name: 'Закрита черепно-мозкова травма. Діагностика струсу головного мозку. Перша допомога. Принципи лікування.', keys: 'чмт, пмд, струс', tags: '', status: 'write'},
	{name: 'Оперативна техніка в роботі фельдшера. Уявлення про хірургічну операцію. Види операцій.', keys: 'хір опер', tags: '', status: 'write'},
	{name: 'Гострий панкреатит. Причини, ознаки, перша допомога.', keys: '', tags: '', status: 'write'},
	{name: 'Транспортна іммобілізація та транспортування потерпілих.', keys: '', tags: '', status: 'write'},
	{name: 'Гостра гнійна хірургічна інфекція. Шляхи зараження. Профілактика та лікування гнійно-запальних захворювань.', keys: 'гхі, гній', tags: '', status: 'write'},
	{name: 'Поняття про рани. Види ран. Принципи надання першої медичної допомоги в разі поранення. Активно-пасивна профілактика правця у випадку ушкодження. ', keys: 'пмд', tags: '', status: 'write'},
	{name: 'Черепно-мозкова травма, перша допомога, діагностика та лікування здавлення головного мозку.', keys: 'чмт, пмд, здавлення, гм', tags: '', status: 'write'},
	{name: 'Наркоз. Види наркозу. Основні речовини для наркозу.', keys: '', tags: '', status: 'write'},
	{name: 'Електротравма. Місцева та загальна дія електроструму на організм. Перша допомога при електротравмі.', keys: '', tags: '', status: 'write'},
	{name: 'Гострий апендицит. Причини, ознаки, лікування.', keys: '', tags: '', status: 'write'},
	{name: 'Профілактика та лікування лактаційних маститів.', keys: '', tags: '', status: 'write'},
	{name: 'Кровотеча. Класифікація кровотечі та причини. Значення кровотечі для організму. Лікування крововтрати.', keys: '', tags: '', status: 'write'},
	{name: 'Загальне проявлення опікової травми – опікова хвороба, її розвиток та перебіг.', keys: '', tags: '', status: 'write'},
	{name: 'Кровозамінні рідини. Показання до їх застосування.', keys: 'кровозамінники', tags: '', status: 'write'},
	{name: 'Поняття про пневмоторакс. Види пневмотораксу. Тактика фельдшера під час надання першої медичної допомоги хворим з пневмотораксом. Лікування хворих.', keys: '', tags: '', status: 'write'},
	{name: 'Гострий перитоніт. Причини, симптоми, діагностика.  Перша медична допомога й показання до оперативного лікування. Особливості транспортування.', keys: 'перитоніт, перетоніт', tags: '', status: 'write'},
	{name: 'Поняття про травматизм. Види ушкоджень. Організація першої допомоги при травмах.', keys: 'травми, ушкодження, травматизм', tags: 'травми, травма', status: 'write'},
	{name: 'Гемотрансфузії, проби на сумісність крові донора та реципієнта. Основні гемотрансфузійні засоби (препарати крові).', keys: 'гемотрансфузія, переливання, трансфузія, групи крові, резус фактор, кровозамінники', tags: 'переливання, трансфузія, гемотрансфузія', status: 'write'},
	{name: 'Сепсис – як загальна гнійна хірургічна інфекція. Лікування.', keys: 'сепсис, зараження крові, септичний шок', tags: '', status: 'write'},
	{name: 'Фізична антисептика.', keys: '', tags: '', status: 'write'},
	{name: 'Травми шиї, гортані, трахеї. Перша допомога та лікування.', keys: 'травми, ушкодження, забій', tags: '', status: 'write'},
	{name: 'Післяопераційні ускладнення, їх профілактика та лікування.', keys: '', tags: '', status: 'write'},
	{name: 'Перелом склепіння та основи черепа. Діагностика та перша медична допомога. Особливості', keys: '', tags: '', status: 'write'},
	{name: 'Особливості та види місцевої анестезії. Медикаменти, які застосовуються для місцевої анестезії. Місцева анестезія в практиці фельдшера.', keys: 'анестезія', tags: '', status: 'write'},
	{name: 'Відмороження. Класифікація відморожень за ступенем ушкодження. Клінічна картина.  Перша допомога та лікування відмороження.', keys: 'обмороження', tags: '', status: 'write'},
	{name: 'Первинне хірургічне оброблення поверхневих ран м’яких тканин, показання та протипоказання до операції. Можливі помилки під час оброблення ран. ', keys: 'пхо', tags: '', status: 'write'},
	{name: 'Шлунково-кишкові кровотечі. Причини кровотечі в порожнисті органи. Діагностика кровотеч. Невідкладна допомога. Консервативні та оперативні методи лікування.', keys: 'шкк', tags: '', status: 'write'},
	{name: 'Види дренажів та способи дренування. Клінічний зміст дренування.', keys: '', tags: '', status: 'write'},
	{name: 'Черевна грижа; клінічна картина, діагностика, лікування. Перша медична допомога і показання до госпіталізації, особливості транспортування. Показання до оперативного лікування.', keys: '', tags: '', status: 'write'},
	{name: 'Загальні та місцеві ознаки запалення рани. Основні принципи місцевого лікування ран.', keys: '', tags: '', status: 'write'},
	{name: 'Гострий холецистит. Причини, ознаки, показання до операції.', keys: '', tags: '', status: 'write'},
	{name: 'Передстерилізаційна обробка предметів багаторазового використання. Контроль якості передстерилізаційної обробки.', keys: 'псо', tags: '', status: 'write'},
	{name: 'Вивихи. Клінічна картина. Діагностика. Надання  першої медичної допомоги. Принципи лікування хворого з вивихом.', keys: '', tags: '', status: 'write'},
]
var obstetrics_db = [
	{name: 'Гестози вагітних: поняття, класифікація.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Гестози першої половини вагітності: клінічна картина, принцвання.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Гестози другої половини вагітності: класифікація, діагностичні критерії. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Прееклампсія легкого та середнього ступеня тяжкості: тактика, принципи лікування. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Тяжкі форми пізнього гестозу вагітних: тактика, перша допомога. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Профілактика гестозів вагітних. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Ведення вагітності та пологів при серцево-судинній патології.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Хвороби нирок і вагітність. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Ізосерологічна несумісність крові матері та плода за резус-фактором та системою AB0; особливості ведення вагітності та пологів.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Інфекційні захворювання і вагітність (TORCH) — особливості ведення вагітності і пологів.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Невиношування вагітності: причини мимовільного аборту, стадії розвитку, профілактика. Тактика.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Передчасні пологи, особливості ведення.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Переношування вагітності: діагностика, тактика фельдшера, особливості ведення пологів. Ознаки переношування у плода.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Передлежання плаценти: клінічна картина, діагностика, тактика фельдшера. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Передчасне відшарування плаценти: клінічна картина, діагностика, тактика фельдшера. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Аномалії пологової діяльності: класифікація, діагностика, принципи лікування.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Вузький таз: поняття, класифікація, особливості ведення пологів. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Пологи при розгинальних вставленнях голівки плода.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Тазове передлежання плода: класифікація, діагностика, особливості ведення вагітності та пологів, ускладнення у пологах.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Поперечне положення плода: діагностика, ускладнення вагітності та пологів, тактика в разі задавненого поперечного положення плода. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Багатоплідна вагітність: види, діагностика, ускладнення, тактика ведення пологів. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Патологія послідового періоду, ведення послідового періоду. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Кровотечі в ранній післяпологовий період: причини, перша допомога. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Розриви шийки матки, піхви та промежини: причини, діагностика, тактика. ', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Розрив матки: класифікація, причини, клінічна картина загрози розриву матки та розриву матки, що стався. Тактика фельдшера.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Післяпологові септичні захворювання: класифікація, причини, клінічна картина, принципи лікування.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Акушерські операції: класифікація, показання та умови для виконання розроджувальних операцій.', keys: '', tags: 'акушерство', status: 'write'},
	{name: 'Особливості та значення анамнезу в гінекології, методика збирання анамнезу.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Методика і значення гінекологічного дослідження.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Додаткові методи дослідження в гінекології (інструментальні).', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Піхвові мазки: види, техніка взяття.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Аномалії жіночих статевих органів: причини виникнення, клінічні прояви, діагностика, профілактика. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Неправильні положення матки: причини, клінічні прояви, діагностика, профілактика.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Порушення менструального циклу (за типом дисфункційних маткових кровотеч): етіологія, клінічні прояви, діагностика, профілактика.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Порушення менструального циклу (за типом аменореї): етіологія, клінічні прояви, діагностика, профілактика. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Запальні захворювання жіночих статевих органів (загальні дані). ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Трихомоніаз. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Запальні хвороби зовнішніх статевих органів та піхви неспецифічної етіології: клінічна картина, діагностика, лікування. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Пухлини. Характеристика злоякісних і доброякісних пухлин. Онкологічна служба в Україні. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Передракові хвороби. Значення профілактичних оглядів у діагностиці пухлиноподібних захворювань і пухлин. Рання діагностика раку.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Доброякісні пухлини матки: клінічна картина, діагностика, принципи лікування. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Доброякісні пухлини ясчників: клінічна картина, діагностика, лікування. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Злоякісні пухлини шийки матки: стадії поширення, клінічна картина, діагностика, значення біопсії, принципи комбінованого лікування.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Рак тіла матки: значення діагностичного вишкрібання, клінічна картина, принципи лікування.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Злоякісні новоутворення яєчників: стадії поширення, діагностика, принципи лікування. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Травми жіночих статевих органів (ушкодження, нориці): етіологія, клінічна картина, лікування, діагностика, профілактика.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Позаматкова вагітність: причини, клінічна картина, діагностика, лікування, невідкладна допомога. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Апоплексія яєчників, перекручування ніжки кісти та кістоми яєчника: клінічна картина, діагностика, невідкладна допомога. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Хірургічне лікування в гінекології: підготовка хворих до операції, догляд за післяопераційними хворими. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Види інструктажів з охорони праці. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Інфекційна безпека та інфекційний контроль. ', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Індивідуальні засоби захисту медичного персоналу в гінекології.', keys: '', tags: 'гінекологія', status: 'write'},
	{name: 'Види відповідальності за порушення трудової дисципліни.', keys: '', tags: 'гінекологія', status: 'write'},
]
var therapy_db = [
	{name: 'Історія розвитку внутрішньої медицини в Україні.', keys: '', tags: '', status: 'write'},
	{name: 'Методика проведення опитування пацієнта, послідовність, правила, діагностичне значення опитування.', keys: '', tags: '', status: 'write'},
	{name: 'Методика проведення огляду пацієнта, правила, послідовність проведення, діагностичне значення.', keys: '', tags: '', status: 'write'},
	{name: 'Методика проведення пальпації. Правила проведення. Поверхнева й глибока пальпація. Діагностичне значення методу.', keys: '', tags: '', status: 'write'},
	{name: 'Методика проведення перкусії. Правила проведення. Порівняльна й топографічна перкусія. Варіанти перкуторних звуків. Діагностичне значення перкусії легень і серця.', keys: '', tags: '', status: 'write'},
	{name: 'Методика проведення аускультації. Правила проведення. Діагностичне значення аускультації легень, серця.', keys: '', tags: '', status: 'write'},
	{name: 'Загальний аналіз крові, основні показники. Діагностичне значення в клініці внутрішніх хвороб.', keys: '', tags: '', status: 'write'},
	{name: 'Дослідження сечі (загальний аналіз, за методами Зимницького, Нечипоренка), основні показники, діагностичне значення. Дослідження харкотиння, калу, шлункового та дуоденального вмісту.', keys: '', tags: '', status: 'write'},
	{name: 'Електрокардіографія як метод діагностики захворювань серцево-судинної системи. Методика реєстрації електрокардіограми.', keys: '', tags: '', status: 'write'},
	{name: 'Інструментальні методи обстеження пацієнтів. Діагностичне значення рентгенологічного, ендоскопічного, ультразвукового методів обстежень.', keys: '', tags: '', status: 'write'},
	{name: 'Бронхіт (гострий і хронічний). Етіологія, патогенез, клінічні симптоми, перебіг, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Пневмонії, сучасна класифікація (госпітальні, позагоспітальні, аспіраційні, пневмонії в осіб з тяжкими дефектами імунітету). Визначення, етіологія, патогенез, клінічні симптоми, перебіг, ускладнення, особливості догляду за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Вимоги техніки безпеки до приміщень терапевтичного профілю, протитуберкульозних закладах. Пожежна безпека.', keys: '', tags: '', status: 'write'},
	{name: 'Абсцедуюча пневмонія. Етіологія, патогенез, клінічна картина. Діагностика, перебіг, ускладнення, лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Бронхіальна астма. Етіологія, патогенез, клінічні форми. Клінічна картина нападу бронхіальної астми, лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Діагностика бронхіальної астми. Профілактика захворювання. Принципи лікування в період загострень і в період між нападами.', keys: '', tags: '', status: 'write'},
	{name: 'Астматичний стан. Клінічні симптоми, надання невідкладної допомоги, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Туберкульоз легень. Етіологія, патогенез, класифікація, методи діагностики туберкульозу.', keys: '', tags: '', status: 'write'},
	{name: 'Туберкульоз легень. Коротка характеристика клінічних форм туберкульозу легень, методи лікування, специфічна профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Сухий плеврит. Етіологія, основні клінічні симптоми, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Ексудативний плеврит. Етіологія, клінічні симптоми, діагностика. Лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Бронхоектатична хвороба. Етіологія, патогенез, клінічні симптоми, ускладнення. Діагностика, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: ''},
	{name: 'Рак легень. Чинники, які сприяють розвитку раку легень, клінічна картина залежно від локалізації пухлин. Методи діагностики хвороби та лікування пацієнтів, особливості догляду за ними.', keys: '', tags: '', status: ''},
	{name: 'Емфізема та пневмосклероз легень. Визначення причини захворювань. Основні клінічні симптоми, лікування, догляд за пацієнтами, прогноз.', keys: '', tags: '', status: ''},
	{name: 'Пневмоконіоз. Визначення, етіологія, види, основні клінічні симптоми, ускладнення, лікування, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Легеневе серце. Визначення, причини розвитку, патогенез. Основні клінічні симптоми, діагностика, профілактика, лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Ревматизм. Етіологія, патогенез, клінічна класифікація. Позасерцеві форми ревматизму та їх основні клінічні ознаки.', keys: '', tags: '', status: 'write'},
	{name: 'Ревмокардит. Роль вогнищевої інфекції у виникненні ревмокардиту. Клінічні симптоми, прогноз, діагностика ревматизму.', keys: '', tags: '', status: 'write'},
	{name: 'Комплексне лікування хворих на ревматизм. Роль диспансерного спостереження, профілактика захворювання та його загострень. Прогноз захворювання, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Набуті вади серця. Визначення, види, причини розвитку. Компенсація і декомпенсація. Вади серця та вагітність. Принципи лікування пацієнтів з вадами серця.', keys: '', tags: '', status: 'write'},
	{name: 'Мітральні вади серця (недостатність і стеноз). Етіологія, основні клінічні симптоми, лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Аортальні вади (недостатність і стеноз). Етіологія, основні клінічні симптоми, лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Бактеріальний ендокардит. Етіологія, клінічні симптоми, діагностика, лікування. Догляд за пацієнтами, прогноз.', keys: '', tags: '', status: 'write'},
	{name: 'Міокардит. Етіологія, клінічні симптоми, діагностика, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Гіпертонічна хвороба та симптоматична артеріальна гіпертензія. Етіологія і патогенез розвитку гіпертонічної хвороби. Клінічна класифікація, основні клінічні симптоми. Діагностика захворювання, принципи лікування.', keys: '', tags: '', status: 'write'},
	{name: 'Ускладнення гіпертонічної хвороби. Гіпертонічний криз, його види, клінічні симптоми, невідкладна допомога.', keys: '', tags: '', status: 'write'},
	{name: 'Атеросклероз. Етіологія, чинники ризику. Клінічні симптоми атеросклерозу залежно від локалізації. Принципи лікування, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Ішемічна хвороба серця. Чинники ризику. Стенокардія. Визначення, клінічна класифікація. Характеристика нападу стенокардії. Надання невідкладної допомоги при нападі стенокардії.', keys: '', tags: '', status: 'write'},
	{name: 'Лікування пацієнтів на стенокардію, диспансерне обстеження. Профілактика захворювання. Прогноз.', keys: '', tags: '', status: 'write'},
	{name: 'Інфаркт міокарда. Визначення, причини, які зумовлюють захворювання, механізм його розвитку. Варіанти перебігу. Ускладнення інфаркту міокарда.', keys: '', tags: '', status: 'write'},
	{name: 'Інфаркт міокарда. Клінічні форми. Невідкладна допомога, транспортування пацієнта. Лікування в період гострого інфаркту міокарда.', keys: '', tags: '', status: ''},
	{name: 'Діагностика (лабораторна та інструментальна) інфаркту міокарда. Особливості догляду й спостереження за пацієнтами в блоці інтенсивної терапії. Реабілітація пацієнтів з інфарктом міокарда. Заходи безпеки під час експлуатації медичної апаратури (електрокардіограф).', keys: '', tags: '', status: ''},
	{name: 'Кардіогенний шок як ускладнення інфаркту міокарда. Причини його розвитку. Клінічні симптоми, невідкладна допомога.', keys: '', tags: '', status: ''},
	{name: 'Аритмія. Синусна тахі- та брадікардія, миготлива аритмія, екстраси-стологія. Основні клінічні симптоми, можливі ускладнення. Лікування пацієнтів з аритмією.', keys: '', tags: '', status: ''},
	{name: 'Гостра лівошлуночкова недостатність. Причини, клінічні симптоми, принципи невідкладної допомоги.', keys: '', tags: '', status: ''},
	{name: 'Гостра судинна недостатність (непритомність, колапс, шок). Причини, клінічні ознаки. Заходи невідкладної допомоги.', keys: '', tags: '', status: ''},
	{name: 'Хронічна серцева недостатність. Визначення, клінічна класифікація, причини. Основні клінічні симптоми залежно від стадії. Методи лікування, догляд за пацієнтами. Прогноз.', keys: '', tags: '', status: ''},
	{name: 'Гострий гастрит. Етіологія, патогенез, клінічні симптоми, лікування, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Хронічний гастрит. Етіологія, класифікація, клінічні симптоми. Діагностика, лікування, диспансеризація.', keys: '', tags: '', status: 'write'},
	{name: 'Виразкова хвороба шлунка й дванадцятипалої кишки. Етіологія, патогенез, клінічні симптоми. Методи діагностики лікування, диспансеризація.', keys: '', tags: '', status: 'write'},
	{name: 'Виразкова хвороба. Ускладнення: клінічні ознаки шлункової кровотечі, перфорації шлунка. Принципи надання невідкладної допомоги. Особливості догляду.', keys: '', tags: '', status: 'write'},
	{name: 'Рак шлунка. Передракові захворювання. Клінічні ознаки. Методи діагностики та лікування. Особливості догляду за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Хронічний гепатит. Етіологія, патогенез, клінічна класифікація. Основні клінічні ознаки, перебіг, методи діагностики. Лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Цироз печінки. Етіологія, патогенез, основні клінічні ознаки. Методи діагностики, перебіг. Лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Цироз печінки. Ускладнення. Клінічні ознаки печінкової коми. Лікування, догляд за пацієнтами.', keys: '', tags: '', status: 'write'},
	{name: 'Хронічний холецистит, дискінезія. Діагностика, лікування, догляд за пацієнтами, профілактика, методи діагностики. Перебіг, ускладнення, лікування.', keys: '', tags: '', status: 'write'},
	{name: 'Жовчно-кам’яна хвороба. Етіологія, патогенез, клінічні симптоми печінкової коліки. Діагностика, невідкладна допомога.', keys: '', tags: '', status: 'write'},
	{name: 'Хронічний панкреатит. Етіологія, патогенез, клінічні симптоми. Лабораторна діагностика, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Гострий гломерулонефрит. Етіологія, патогенез, клінічна класифікація. Лікування, догляд за пацієнтами, прогноз, диспансеризація.', keys: '', tags: '', status: 'write'},
	{name: 'Хронічний гломерулонефрит. Етіологія, патогенез, клінічна класифікація. Клінічні ознаки, перебіг, діагностика, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Гострий та хронічний пієлонефрит. Етіологія, патогенез, основні клінічні симптоми. Перебіг, діагностика, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Гостра ниркова недостатність. Причини, основні клінічні симптоми, діагностика. Прогноз, лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Хронічна ниркова недостатність. Етіологія, патогенез. Основні клінічні ознаки, діагностика. Прогноз, лікування. Догляд за пацієнтами, профілактика.', keys: '', tags: '', status: 'write'},
	{name: 'Нироковокам’яна хвороба. Етіологія, патогенез. Основні клінічні ознаки ниркової коліки. Діагностика, зняття нападу ниркової коліки.', keys: '', tags: '', status: 'write'},
	{name: 'Цистит гострий і хронічний. Чинники, які спричинюють розвиток захворювання. Клінічна картина. Зміни в сечі. Перебіг, лікування.', keys: '', tags: '', status: ''},
	{name: 'Ендемічний зоб. Етіологія, поширеність. Клінічні ознаки. Лікування, профілактика.', keys: '', tags: '', status: ''},
	{name: 'Дифузний токсичний зоб. Етіологія, клінічні симптоми. Методи діагностики, лікування, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Гіпотиреоз. Етіологія, клінічні симптоми. Лікування, догляд за пацієнтами, профілактика.', keys: '', tags: '', status: ''},
	{name: 'Цукровий діабет. Етіологія, патогенез, поширеність. Клінічна класифікація. Основні клінічні ознаки захворювання.', keys: '', tags: '', status: ''},
	{name: 'Цукровий діабет. Лабораторна діагностика. Комплексне лікування пацієнтів. Профілактика захворювання та його ускладнення.', keys: '', tags: '', status: ''},
	{name: 'Основні причини розвитку гіпо- й гіперглікемічної коми. Клінічні ознаки. Невідкладна допомога, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Залізодефіцитна анемія. Етіологія, види. Клінічні ознаки. Невідкладна допомога, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'В12-дефіцитна анемія. Етіологія, патогенез, клінічні ознаки. Діагностика, лікування, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Геморагічний діатез. Визначення, класифікація. Етіологія геморагічного васкуліту й тромбоцитопенії. Клінічні ознаки, перебіг, лікування.', keys: '', tags: '', status: ''},
	{name: 'Гострий лейкоз. Причини розвитку хвороби. Клінічні ознаки. Перебіг, прогноз, ускладнення. Лікування, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Хронічний лейкоз (мієлолейкоз і лімфолейкоз). Особливості клінічного перебігу захворювання. Діагностика, прогноз. Лікування, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Ревматоїдний артрит. Етіологія, клінічний перебіг, діагностика. Лікування, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Гострі алергійні захворювання. Причини. Клінічні ознаки кропив’янки і набряку Квінке. Невідкладна допомога.', keys: '', tags: '', status: ''},
	{name: 'Анафілактичний шок. Причини, клінічні ознаки, невідкладна допомога, догляд за пацієнтами.', keys: '', tags: '', status: ''},
	{name: 'Сироваткова хвороба. Причини, клінічні ознаки, перебіг, прогноз, лікування, профілактика.', keys: '', tags: '', status: ''},
	{name: 'Основні види невідкладної допомоги в разі гострих інтоксикацій.', keys: '', tags: '', status: ''},
	{name: 'Охорона праці при роботі з електроприладами.', keys: '', tags: '', status: ''},
	{name: 'Профілактика професійних захворювань.', keys: '', tags: '', status: ''},
]