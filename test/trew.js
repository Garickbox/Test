// Демо-тест для быстрой проверки системы
window.TEST_CONFIG = {
    title: "Демонстрационный тест",
    totalQuestions: 5,
    totalProblems: 1,
    maxScore: 8,
    
    telegram: {
        botToken: "DEMO_TOKEN",
        chatId: "DEMO_CHAT"
    },
    
    gradingScale: {
        5: 7,
        4: 5,
        3: 3,
        2: 0
    },
    
    anticheat: {
        password: "1234",
        blockTime: 60
    }
};

window.questionsBank = [
    {
        text: "Сколько будет 2+2?",
        options: [
            {t: "3", v: "wrong"},
            {t: "4", v: "correct"},
            {t: "5", v: "wrong"},
            {t: "6", v: "wrong"}
        ],
        points: 1
    },
    {
        text: "Столица России?",
        options: [
            {t: "Москва", v: "correct"},
            {t: "Санкт-Петербург", v: "wrong"},
            {t: "Казань", v: "wrong"},
            {t: "Новосибирск", v: "wrong"}
        ],
        points: 1
    },
    {
        text: "Самый большой океан?",
        options: [
            {t: "Атлантический", v: "wrong"},
            {t: "Тихий", v: "correct"},
            {t: "Индийский", v: "wrong"},
            {t: "Северный Ледовитый", v: "wrong"}
        ],
        points: 1
    },
    {
        text: "Сколько цветов у радуги?",
        options: [
            {t: "5", v: "wrong"},
            {t: "6", v: "wrong"},
            {t: "7", v: "correct"},
            {t: "8", v: "wrong"}
        ],
        points: 1
    },
    {
        text: "Сколько месяцев в году?",
        options: [
            {t: "10", v: "wrong"},
            {t: "11", v: "wrong"},
            {t: "12", v: "correct"},
            {t: "13", v: "wrong"}
        ],
        points: 1
    }
];

window.problemsBank = [
    {
        text: "У Пети было 5 яблок, 2 он съел. Сколько яблок осталось?",
        options: [
            {t: "1", v: "wrong"},
            {t: "2", v: "wrong"},
            {t: "3", v: "correct"},
            {t: "4", v: "wrong"},
            {t: "5", v: "wrong"},
            {t: "6", v: "wrong"},
            {t: "7", v: "wrong"},
            {t: "8", v: "wrong"}
        ],
        points: 3
    }
];

console.log('✅ Демо-тест trew.js загружен успешно!');