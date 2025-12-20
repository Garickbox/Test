// ========== СГЕНЕРИРОВАНО ==========
// Дата: 20.12.2025
// Предмет: Физика
// Класс: 8
// Тема: Электричество
// Учебник: Перышкин А.В. (7-9)
// =================================

// ========== КОНФИГУРАЦИЯ ТЕСТА ==========
window.TEST_CONFIG = {
    title: "ТЕСТ: Электричество (8 класс)",
    subject: "Физика",
    textbook: "Перышкин А.В. (7-9)",
    totalQuestions: 20,
    totalProblems: 5,
    maxScore: 35, // 20×1 + 5×3 = 35
    telegram: {
        botToken: "8344281396:AAGZ9-M2XRyPMHiI2akBSSIN7QAtRGDmLOY",
        chatId: "1189539923",
        parseMode: "Markdown",
        disableNotification: false
    },
    gradingScale: {
        5: Math.floor(35 * 0.9),  // 90% от 35
        4: Math.floor(35 * 0.73),  // 73% от 35
        3: Math.floor(35 * 0.33),  // 33% от 35
        2: 0
    },
    anticheat: { 
        password: "9247", 
        blockTime: 180 
    },
    shuffleQuestions: true,
    shuffleOptions: true,
    showCorrectAnswer: true,
    timeLimit: 45 // минут
};

// ========== БАНК ВОПРОСОВ (40 шт.) ==========
window.questionsBank = [
    {
        id: 1,
        text: "Что является основной характеристикой электрического тока?",
        options: [
            {t: "Направленное движение заряженных частиц", v: "correct"},
            {t: "Хаотическое движение молекул", v: "wrong"},
            {t: "Изменение температуры проводника", v: "wrong"},
            {t: "Свечение проводника", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 2,
        text: "Какая частица имеет самый маленький отрицательный заряд?",
        options: [
            {t: "Электрон", v: "correct"},
            {t: "Протон", v: "wrong"},
            {t: "Нейтрон", v: "wrong"},
            {t: "Ион", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 3,
        text: "В каких единицах измеряется сила тока?",
        options: [
            {t: "Ампер (А)", v: "correct"},
            {t: "Вольт (В)", v: "wrong"},
            {t: "Ом (Ом)", v: "wrong"},
            {t: "Кулон (Кл)", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 4,
        text: "Прибор для измерения электрического напряжения называется...",
        options: [
            {t: "Вольтметр", v: "correct"},
            {t: "Амперметр", v: "wrong"},
            {t: "Омметр", v: "wrong"},
            {t: "Ваттметр", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 5,
        text: "Как включается амперметр в электрическую цепь?",
        options: [
            {t: "Последовательно", v: "correct"},
            {t: "Параллельно", v: "wrong"},
            {t: "Произвольно", v: "wrong"},
            {t: "Вместо источника тока", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 6,
        text: "Какое вещество является хорошим диэлектриком?",
        options: [
            {t: "Резина", v: "correct"},
            {t: "Медь", v: "wrong"},
            {t: "Железо", v: "wrong"},
            {t: "Раствор соли", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 7,
        text: "Закон Ома для участка цепи формулируется так:",
        options: [
            {t: "I = U / R", v: "correct"},
            {t: "U = I / R", v: "wrong"},
            {t: "R = I / U", v: "wrong"},
            {t: "I = U * R", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 8,
        text: "В каких единицах измеряется электрическое сопротивление?",
        options: [
            {t: "Ом", v: "correct"},
            {t: "Джоуль", v: "wrong"},
            {t: "Ватт", v: "wrong"},
            {t: "Ампер", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 9,
        text: "Как изменится сопротивление проводника, если его длину увеличить в 2 раза?",
        options: [
            {t: "Увеличится в 2 раза", v: "correct"},
            {t: "Уменьшится в 2 раза", v: "wrong"},
            {t: "Не изменится", v: "wrong"},
            {t: "Увеличится в 4 раза", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 10,
        text: "Чему равно общее сопротивление двух последовательно соединенных резисторов по 5 Ом?",
        options: [
            {t: "10 Ом", v: "correct"},
            {t: "2.5 Ом", v: "wrong"},
            {t: "5 Ом", v: "wrong"},
            {t: "25 Ом", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 11,
        text: "При параллельном соединении проводников одинаковой остается величина:",
        options: [
            {t: "Напряжение", v: "correct"},
            {t: "Сила тока", v: "wrong"},
            {t: "Сопротивление", v: "wrong"},
            {t: "Мощность", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 12,
        text: "Формула работы электрического тока:",
        options: [
            {t: "A = U * I * t", v: "correct"},
            {t: "A = U * I", v: "wrong"},
            {t: "A = F * S", v: "wrong"},
            {t: "A = P / t", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 13,
        text: "В каких единицах измеряется мощность электрического тока?",
        options: [
            {t: "Ватт (Вт)", v: "correct"},
            {t: "Джоуль (Дж)", v: "wrong"},
            {t: "Вольт (В)", v: "wrong"},
            {t: "Ом (Ом)", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 14,
        text: "Закон Джоуля-Ленца определяет:",
        options: [
            {t: "Количество теплоты в проводнике", v: "correct"},
            {t: "Напряжение на участке цепи", v: "wrong"},
            {t: "Скорость движения электронов", v: "wrong"},
            {t: "Магнитное действие тока", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 15,
        text: "Короткое замыкание возникает, если:",
        options: [
            {t: "Сопротивление цепи становится очень малым", v: "correct"},
            {t: "Напряжение падает до нуля", v: "wrong"},
            {t: "Разомкнуть выключатель", v: "wrong"},
            {t: "Использовать длинные провода", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 16,
        text: "Устройство для защиты электрических цепей от перегрузок:",
        options: [
            {t: "Предохранитель", v: "correct"},
            {t: "Реостат", v: "wrong"},
            {t: "Конденсатор", v: "wrong"},
            {t: "Аккумулятор", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 17,
        text: "За направление тока в цепи принято считать движение:",
        options: [
            {t: "От '+' к '-'", v: "correct"},
            {t: "От '-' к '+'", v: "wrong"},
            {t: "От меньшего сопротивления к большему", v: "wrong"},
            {t: "Случайное движение", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 18,
        text: "Какой прибор служит для регулирования силы тока в цепи?",
        options: [
            {t: "Реостат", v: "correct"},
            {t: "Вольтметр", v: "wrong"},
            {t: "Ключ", v: "wrong"},
            {t: "Гальванометр", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 19,
        text: "Электрический ток в металлах создается движением:",
        options: [
            {t: "Свободных электронов", v: "correct"},
            {t: "Положительных ионов", v: "wrong"},
            {t: "Отрицательных ионов", v: "wrong"},
            {t: "Протонов", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 20,
        text: "Как взаимодействуют два одноименных заряда?",
        options: [
            {t: "Отталкиваются", v: "correct"},
            {t: "Притягиваются", v: "wrong"},
            {t: "Не взаимодействуют", v: "wrong"},
            {t: "Сначала притягиваются, потом отталкиваются", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 21,
        text: "Атом, потерявший электрон, превращается в:",
        options: [
            {t: "Положительный ион", v: "correct"},
            {t: "Отрицательный ион", v: "wrong"},
            {t: "Нейтрон", v: "wrong"},
            {t: "Другой химический элемент", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 22,
        text: "Прибор для обнаружения электрического заряда:",
        options: [
            {t: "Электроскоп", v: "correct"},
            {t: "Барометр", v: "wrong"},
            {t: "Динамометр", v: "wrong"},
            {t: "Гигрометр", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 23,
        text: "Что происходит с эбонитовой палочкой при трении о мех?",
        options: [
            {t: "Заряжается отрицательно", v: "correct"},
            {t: "Заряжается положительно", v: "wrong"},
            {t: "Остается нейтральной", v: "wrong"},
            {t: "Нагревается, но не заряжается", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 24,
        text: "Какое действие тока используется в лампах накаливания?",
        options: [
            {t: "Тепловое", v: "correct"},
            {t: "Химическое", v: "wrong"},
            {t: "Магнитное", v: "wrong"},
            {t: "Механическое", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 25,
        text: "Единица измерения электрического заряда:",
        options: [
            {t: "Кулон", v: "correct"},
            {t: "Ньютон", v: "wrong"},
            {t: "Паскаль", v: "wrong"},
            {t: "Генри", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 26,
        text: "В ядре атома находятся:",
        options: [
            {t: "Протоны и нейтроны", v: "correct"},
            {t: "Протоны и электроны", v: "wrong"},
            {t: "Электроны и нейтроны", v: "wrong"},
            {t: "Только протоны", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 27,
        text: "Электрическое напряжение — это физическая величина, равная:",
        options: [
            {t: "Отношению работы тока к заряду", v: "correct"},
            {t: "Отношению заряда ко времени", v: "wrong"},
            {t: "Произведению силы тока на время", v: "wrong"},
            {t: "Отношению силы тока к сопротивлению", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 28,
        text: "Как изменится сила тока в цепи, если напряжение увеличить в 3 раза?",
        options: [
            {t: "Увеличится в 3 раза", v: "correct"},
            {t: "Уменьшится в 3 раза", v: "wrong"},
            {t: "Не изменится", v: "wrong"},
            {t: "Увеличится в 9 раз", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 29,
        text: "Удельное сопротивление проводника зависит от:",
        options: [
            {t: "Рода вещества", v: "correct"},
            {t: "Длины проводника", v: "wrong"},
            {t: "Площади сечения", v: "wrong"},
            {t: "Силы тока", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 30,
        text: "При последовательном соединении общая сила тока:",
        options: [
            {t: "Одинакова на всех участках", v: "correct"},
            {t: "Равна сумме токов", v: "wrong"},
            {t: "Равна разности токов", v: "wrong"},
            {t: "Равна произведению токов", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 31,
        text: "Чему равно общее сопротивление двух параллельно соединенных резисторов по 10 Ом?",
        options: [
            {t: "5 Ом", v: "correct"},
            {t: "20 Ом", v: "wrong"},
            {t: "10 Ом", v: "wrong"},
            {t: "100 Ом", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 32,
        text: "Какое действие тока наблюдается во всех проводниках (кроме сверхпроводников)?",
        options: [
            {t: "Тепловое", v: "correct"},
            {t: "Магнитное", v: "wrong"},
            {t: "Химическое", v: "wrong"},
            {t: "Световое", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 33,
        text: "1 миллиампер (мА) — это:",
        options: [
            {t: "0,001 А", v: "correct"},
            {t: "0,01 А", v: "wrong"},
            {t: "1000 А", v: "wrong"},
            {t: "0,1 А", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 34,
        text: "Работа электрического тока в 1 кДж равна:",
        options: [
            {t: "1000 Дж", v: "correct"},
            {t: "100 Дж", v: "wrong"},
            {t: "0,001 Дж", v: "wrong"},
            {t: "10 Дж", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 35,
        text: "Мощность электрического чайника 2 кВт. Это:",
        options: [
            {t: "2000 Вт", v: "correct"},
            {t: "200 Вт", v: "wrong"},
            {t: "0,002 Вт", v: "wrong"},
            {t: "20 Вт", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 36,
        text: "Прибор для измерения работы тока в быту:",
        options: [
            {t: "Электросчетчик", v: "correct"},
            {t: "Вольтметр", v: "wrong"},
            {t: "Амперметр", v: "wrong"},
            {t: "Ваттметр", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 37,
        text: "Какое соединение используется для розеток в квартире?",
        options: [
            {t: "Параллельное", v: "correct"},
            {t: "Последовательное", v: "wrong"},
            {t: "Смешанное", v: "wrong"},
            {t: "Квартиры не используют соединения", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 38,
        text: "Металл, из которого чаще всего делают спирали ламп накаливания:",
        options: [
            {t: "Вольфрам", v: "correct"},
            {t: "Медь", v: "wrong"},
            {t: "Алюминий", v: "wrong"},
            {t: "Железо", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 39,
        text: "Что происходит с сопротивлением металла при нагревании?",
        options: [
            {t: "Увеличивается", v: "correct"},
            {t: "Уменьшается", v: "wrong"},
            {t: "Не изменяется", v: "wrong"},
            {t: "Сначала падает, потом растет", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    },
    {
        id: 40,
        text: "Электрический ток в электролитах создается:",
        options: [
            {t: "Ионами", v: "correct"},
            {t: "Электронами", v: "wrong"},
            {t: "Дырками", v: "wrong"},
            {t: "Атомами", v: "wrong"}
        ],
        points: 1,
        difficulty: "medium"
    }
];

// ========== БАНК ЗАДАЧ (10 шт.) ==========
window.problemsBank = [
    {
        id: 1,
        text: "Через поперечное сечение проводника за 2 минуты прошел заряд 120 Кл. Вычислите силу тока в проводнике.",
        options: [
            {t: "0.5 А", v: "wrong"},
            {t: "1 А", v: "correct"},
            {t: "2 А", v: "wrong"},
            {t: "60 А", v: "wrong"},
            {t: "240 А", v: "wrong"},
            {t: "0.1 А", v: "wrong"},
            {t: "10 А", v: "wrong"},
            {t: "12 А", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "I = q / t. t = 2 мин = 120 с. I = 120 Кл / 120 с = 1 А."
    },
    {
        id: 2,
        text: "Рассчитайте сопротивление медного провода длиной 10 м и площадью поперечного сечения 0.1 мм². (ρ меди = 0.017 Ом·мм²/м)",
        options: [
            {t: "1.7 Ом", v: "correct"},
            {t: "0.17 Ом", v: "wrong"},
            {t: "17 Ом", v: "wrong"},
            {t: "0.017 Ом", v: "wrong"},
            {t: "170 Ом", v: "wrong"},
            {t: "0.85 Ом", v: "wrong"},
            {t: "3.4 Ом", v: "wrong"},
            {t: "0.0017 Ом", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "R = ρ * L / S. R = 0.017 * 10 / 0.1 = 1.7 Ом."
    },
    {
        id: 3,
        text: "Электрическая плитка работает при напряжении 220 В. Сила тока в ней 5 А. Какое количество теплоты выделится за 10 минут?",
        options: [
            {t: "660 кДж", v: "correct"},
            {t: "1100 Дж", v: "wrong"},
            {t: "11 кДж", v: "wrong"},
            {t: "66 кДж", v: "wrong"},
            {t: "2200 Дж", v: "wrong"},
            {t: "1320 кДж", v: "wrong"},
            {t: "330 кДж", v: "wrong"},
            {t: "5500 Дж", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "Q = U * I * t. t = 600 с. Q = 220 * 5 * 600 = 660 000 Дж = 660 кДж."
    },
    {
        id: 4,
        text: "Два резистора по 12 Ом соединены параллельно. К ним последовательно подключен третий резистор 4 Ом. Найдите общее сопротивление.",
        options: [
            {t: "28 Ом", v: "wrong"},
            {t: "10 Ом", v: "correct"},
            {t: "8 Ом", v: "wrong"},
            {t: "16 Ом", v: "wrong"},
            {t: "6 Ом", v: "wrong"},
            {t: "20 Ом", v: "wrong"},
            {t: "12 Ом", v: "wrong"},
            {t: "4 Ом", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "R_пар = 12 / 2 = 6 Ом. R_общ = 6 + 4 = 10 Ом."
    },
    {
        id: 5,
        text: "Определите напряжение на концах проводника сопротивлением 20 Ом, если за 5 минут ток совершил работу 6000 Дж.",
        options: [
            {t: "10 В", v: "wrong"},
            {t: "20 В", v: "correct"},
            {t: "5 В", v: "wrong"},
            {t: "40 В", v: "wrong"},
            {t: "100 В", v: "wrong"},
            {t: "2 В", v: "wrong"},
            {t: "15 В", v: "wrong"},
            {t: "30 В", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "A = U²t / R => U = sqrt(A*R/t). t=300с. U = sqrt(6000*20/300) = sqrt(400) = 20 В."
    },
    {
        id: 6,
        text: "Лампа мощностью 100 Вт рассчитана на напряжение 220 В. Чему равна сила тока в лампе?",
        options: [
            {t: "2.2 А", v: "wrong"},
            {t: "0.45 А", v: "correct"},
            {t: "0.22 А", v: "wrong"},
            {t: "4.5 А", v: "wrong"},
            {t: "1 А", v: "wrong"},
            {t: "0.5 А", v: "wrong"},
            {t: "22 А", v: "wrong"},
            {t: "0.1 А", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "I = P / U. I = 100 / 220 ≈ 0.45 А."
    },
    {
        id: 7,
        text: "Какова длина нихромовой проволоки сечением 0.5 мм², если её сопротивление 22 Ом? (ρ нихрома = 1.1 Ом·мм²/м)",
        options: [
            {t: "10 м", v: "correct"},
            {t: "20 м", v: "wrong"},
            {t: "5 м", v: "wrong"},
            {t: "11 м", v: "wrong"},
            {t: "44 м", v: "wrong"},
            {t: "1 м", v: "wrong"},
            {t: "50 м", v: "wrong"},
            {t: "25 м", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "L = R * S / ρ. L = 22 * 0.5 / 1.1 = 10 м."
    },
    {
        id: 8,
        text: "Три резистора 2 Ом, 3 Ом и 5 Ом соединены последовательно. Напряжение в цепи 20 В. Какова сила тока?",
        options: [
            {t: "1 А", v: "wrong"},
            {t: "2 А", v: "correct"},
            {t: "10 А", v: "wrong"},
            {t: "4 А", v: "wrong"},
            {t: "0.5 А", v: "wrong"},
            {t: "5 А", v: "wrong"},
            {t: "20 А", v: "wrong"},
            {t: "3 А", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "R_общ = 2+3+5 = 10 Ом. I = U / R = 20 / 10 = 2 А."
    },
    {
        id: 9,
        text: "Сколько энергии потребляет телевизор мощностью 150 Вт за 4 часа работы?",
        options: [
            {t: "0.6 кВт·ч", v: "correct"},
            {t: "600 кВт·ч", v: "wrong"},
            {t: "1.5 кВт·ч", v: "wrong"},
            {t: "0.15 кВт·ч", v: "wrong"},
            {t: "4 кВт·ч", v: "wrong"},
            {t: "2.16 МДж", v: "wrong"},
            {t: "0.3 кВт·ч", v: "wrong"},
            {t: "1 кВт·ч", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "E = P * t = 0.15 кВт * 4 ч = 0.6 кВт·ч."
    },
    {
        id: 10,
        text: "При напряжении 12 В через нить накала лампы проходит 240 Кл заряда за 2 минуты. Каково сопротивление нити?",
        options: [
            {t: "6 Ом", v: "correct"},
            {t: "12 Ом", v: "wrong"},
            {t: "2 Ом", v: "wrong"},
            {t: "24 Ом", v: "wrong"},
            {t: "0.5 Ом", v: "wrong"},
            {t: "10 Ом", v: "wrong"},
            {t: "4 Ом", v: "wrong"},
            {t: "1 Ом", v: "wrong"}
        ],
        points: 3,
        difficulty: "hard",
        solution: "I = q/t = 240/120 = 2 А. R = U/I = 12/2 = 6 Ом."
    }
];