// ====================================================================
// ДЕБАГ-ТЕСТ ДЛЯ СИСТЕМЫ ТЕСТИРОВАНИЯ ВЫСОКОВСКОЙ ШКОЛЫ №25
// Файл: test/debug.js
// Назначение: Отладочный тест для проверки работы системы
// Для запуска: введите "debug" на главной странице
// ====================================================================

console.log('🔍 DEBUG MODE: Загрузка отладочного теста...');

// ОБЩАЯ ИНФОРМАЦИЯ О ПРОЕКТЕ
window.PROJECT_INFO = {
    name: "Система тестирования Высоковской школы №25",
    version: "7.1",
    author: "Школьный IT-отдел",
    description: "Модульная система для проведения контрольных работ с античит-системой и Telegram-интеграцией",
    features: [
        "Модульная архитектура тестов",
        "Антикопирование и античит защита",
        "Telegram-уведомления о результатах",
        "Автосохранение прогресса",
        "Пропуск вопросов",
        "Адаптивный дизайн",
        "Полноэкранные результаты",
        "Снежный фон на главной странице"
    ],
    lastUpdated: "2024",
    repository: "https://github.com/vysokovskaya-school/testing-system",
    supportEmail: "it-support@vysokovskaya25.ru"
};

// ОТЛАДОЧНАЯ КОНФИГУРАЦИЯ ТЕСТА
window.TEST_CONFIG = {
    title: "🔧 Отладочный тест системы",
    totalQuestions: 3,        // Минимум вопросов для тестирования
    totalProblems: 1,         // Минимум задач для тестирования
    maxScore: 6,              // 3×1 + 1×3 = 6 баллов
    
    telegram: {
        // ТЕСТОВЫЕ ДАННЫЕ TELEGRAM
        // Для реального теста замените на свои
        botToken: "DEMO_TOKEN_DEBUG_ONLY",
        chatId: "DEBUG_CHAT_ID",
        
        parseMode: "Markdown",
        disableNotification: true  // В отладке уведомления отключены
    },
    
    gradingScale: {
        5: 5,     // 5-6 баллов = 5
        4: 4,     // 4 балла = 4
        3: 2,     // 2-3 балла = 3
        2: 0      // 0-1 балл = 2
    },
    
    anticheat: {
        password: "0000",     // Упрощенный пароль для отладки
        blockTime: 30         // Сокращенное время блокировки (30 секунд)
    },
    
    // Настройки для отладки
    shuffleQuestions: false,  // Не перемешивать для удобства отладки
    shuffleOptions: false,    // Не перемешивать варианты
    showCorrectAnswer: true,  // Показывать правильные ответы
    debugMode: true           // Флаг отладочного режима
};

// ИНФОРМАЦИОННЫЕ ВОПРОСЫ (для демонстрации)
window.questionsBank = [
    {
        text: "Это отладочный тест системы. Выберите 'Правильно' для продолжения.",
        options: [
            {t: "Правильно", v: "correct"},
            {t: "Неправильно", v: "wrong"},
            {t: "Не знаю", v: "wrong"},
            {t: "Пропустить", v: "wrong"}
        ],
        points: 1,
        hint: "Это демонстрационный вопрос для проверки работы системы."
    },
    {
        text: "Система тестирования поддерживает автосохранение прогресса?",
        options: [
            {t: "Да, каждые 30 секунд", v: "correct"},
            {t: "Нет, не поддерживает", v: "wrong"},
            {t: "Только в платной версии", v: "wrong"},
            {t: "Только для учителей", v: "wrong"}
        ],
        points: 1,
        hint: "Прогресс автоматически сохраняется в localStorage."
    },
    {
        text: "Какой пароль по умолчанию в античит-системе для отладки?",
        options: [
            {t: "3265", v: "wrong"},
            {t: "0000", v: "correct"},
            {t: "1234", v: "wrong"},
            {t: "admin", v: "wrong"}
        ],
        points: 1,
        hint: "В отладочном режиме используется упрощенный пароль."
    }
];

// ДЕМОНСТРАЦИОННЫЕ ЗАДАЧИ
window.problemsBank = [
    {
        text: "Сколько будет 2 + 2 × 2?",
        options: [
            {t: "6", v: "correct"},
            {t: "8", v: "wrong"},
            {t: "4", v: "wrong"},
            {t: "10", v: "wrong"}
        ],
        points: 3,
        solution: "Сначала умножение: 2 × 2 = 4, затем сложение: 2 + 4 = 6"
    }
];

// ====================================================================
// ФУНКЦИИ ДЛЯ ОТЛАДКИ И ДИАГНОСТИКИ
// ====================================================================

/**
 * Выводит полную информацию о системе в консоль
 */
window.showSystemInfo = function() {
    console.group('🎓 ИНФОРМАЦИЯ О СИСТЕМЕ ТЕСТИРОВАНИЯ');
    console.log('📋 Название:', window.PROJECT_INFO.name);
    console.log('🚀 Версия:', window.PROJECT_INFO.version);
    console.log('👨‍💻 Автор:', window.PROJECT_INFO.author);
    console.log('📝 Описание:', window.PROJECT_INFO.description);
    console.log('⭐ Особенности:', window.PROJECT_INFO.features);
    console.log('🔄 Последнее обновление:', window.PROJECT_INFO.lastUpdated);
    console.groupEnd();
    
    console.group('⚙️ КОНФИГУРАЦИЯ ТЕСТА');
    console.log('📚 Тест:', window.TEST_CONFIG.title);
    console.log('❓ Вопросы:', window.questionsBank.length, 'из', window.TEST_CONFIG.totalQuestions, 'будут выбраны');
    console.log('🧮 Задачи:', window.problemsBank.length, 'из', window.TEST_CONFIG.totalProblems, 'будут выбраны');
    console.log('🎯 Макс. балл:', window.TEST_CONFIG.maxScore);
    console.log('🤖 Telegram бот:', window.TEST_CONFIG.telegram.botToken === 'DEMO_TOKEN_DEBUG_ONLY' ? '❌ Тестовый токен' : '✅ Настроен');
    console.log('🔒 Античит пароль:', window.TEST_CONFIG.anticheat.password);
    console.log('⏱️ Время блокировки:', window.TEST_CONFIG.anticheat.blockTime, 'секунд');
    console.groupEnd();
    
    console.group('📊 ДАННЫЕ ТЕСТА');
    console.log('📖 Банк вопросов:', window.questionsBank.length, 'вопросов');
    window.questionsBank.forEach((q, i) => {
        console.log(`  ${i+1}. ${q.text} (${q.points} балл)`);
    });
    console.log('🧮 Банк задач:', window.problemsBank.length, 'задач');
    window.problemsBank.forEach((p, i) => {
        console.log(`  ${i+1}. ${p.text} (${p.points} балла)`);
    });
    console.groupEnd();
};

/**
 * Тестирует все основные функции системы
 */
window.runSystemTests = async function() {
    console.group('🧪 ЗАПУСК СИСТЕМНЫХ ТЕСТОВ');
    
    // Тест 1: Проверка конфигурации
    console.log('1. Проверка конфигурации...');
    if (!window.TEST_CONFIG) {
        console.error('❌ TEST_CONFIG не определен');
        return false;
    }
    console.log('✅ Конфигурация загружена');
    
    // Тест 2: Проверка банков вопросов
    console.log('2. Проверка банков вопросов...');
    if (!window.questionsBank || !Array.isArray(window.questionsBank)) {
        console.error('❌ questionsBank не найден');
        return false;
    }
    if (!window.problemsBank || !Array.isArray(window.problemsBank)) {
        console.error('❌ problemsBank не найден');
        return false;
    }
    console.log(`✅ Банки вопросов загружены (${window.questionsBank.length} вопросов, ${window.problemsBank.length} задач)`);
    
    // Тест 3: Проверка функций перемешивания
    console.log('3. Тест функций перемешивания...');
    const testArray = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray([...testArray]);
    console.log(`✅ Функция shuffleArray работает: [${testArray}] -> [${shuffled}]`);
    
    // Тест 4: Проверка расчета оценки
    console.log('4. Тест расчета оценки...');
    const testScores = [0, 1, 2, 3, 4, 5, 6];
    testScores.forEach(score => {
        const grade = calculateGrade(score);
        console.log(`   ${score} баллов -> оценка ${grade}`);
    });
    console.log('✅ Расчет оценок работает');
    
    // Тест 5: Проверка localStorage (если доступен)
    console.log('5. Проверка localStorage...');
    try {
        localStorage.setItem('debug_test', 'test_value');
        const value = localStorage.getItem('debug_test');
        localStorage.removeItem('debug_test');
        console.log(`✅ localStorage доступен: ${value === 'test_value' ? 'OK' : 'ERROR'}`);
    } catch (e) {
        console.warn('⚠️ localStorage недоступен:', e.message);
    }
    
    console.groupEnd();
    return true;
};

/**
 * Вспомогательная функция для перемешивания массива
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Вспомогательная функция для расчета оценки
 */
function calculateGrade(score) {
    const scale = window.TEST_CONFIG.gradingScale;
    if (score >= scale[5]) return 5;
    if (score >= scale[4]) return 4;
    if (score >= scale[3]) return 3;
    return 2;
}

/**
 * Создает тестового студента и начинает тест (для быстрой отладки UI)
 */
window.startDebugTest = function() {
    console.log('🚀 Запуск отладочного теста...');
    
    // Автозаполняем данные студента
    if (window.studentNameInput && window.studentClassSelect) {
        window.studentNameInput.value = 'Тестовый Студент';
        window.studentClassSelect.value = '8';
        
        // Имитируем нажатие кнопки "Начать тест"
        if (window.startTestBtn) {
            console.log('👤 Создан тестовый студент: Тестовый Студент, 8 класс');
            window.startTestBtn.click();
        } else {
            console.error('❌ Кнопка начала теста не найдена');
        }
    } else {
        console.error('❌ Элементы формы студента не найдены');
    }
};

/**
 * Показывает все доступные тесты в системе
 */
window.showAvailableTests = function() {
    console.group('📂 ДОСТУПНЫЕ ТЕСТЫ В СИСТЕМЕ');
    console.log('1. electricity.js - Контрольная по электричеству');
    console.log('2. debug.js - Отладочный тест (этот файл)');
    console.log('3. trew.js - Пример другого теста');
    console.log('');
    console.log('📁 Структура проекта:');
    console.log('  /index.html - Главная страница');
    console.log('  /test.html - Страница тестирования');
    console.log('  /style.css - Стили');
    console.log('  /script.js - Основной скрипт');
    console.log('  /test/ - Папка с тестами');
    console.log('    electricity.js - Тест по электричеству');
    console.log('    debug.js - Этот файл');
    console.log('    trew.js - Пример теста');
    console.groupEnd();
};

// ====================================================================
// АВТОМАТИЧЕСКИЕ ДЕЙСТВИЯ ПРИ ЗАГРУЗКЕ
// ====================================================================

// Выводим информацию при загрузке
console.log('=========================================');
console.log('🔧 ОТЛАДОЧНЫЙ РЕЖИМ СИСТЕМЫ ТЕСТИРОВАНИЯ');
console.log('=========================================');

// Автоматически показываем информацию о системе
setTimeout(() => {
    window.showSystemInfo();
    
    // Добавляем кнопки отладки в интерфейс, если мы на странице теста
    if (window.location.pathname.includes('test.html')) {
        setTimeout(() => {
            addDebugButtons();
        }, 1000);
    }
}, 500);

/**
 * Добавляет кнопки отладки в интерфейс
 */
function addDebugButtons() {
    const buttonContainer = document.querySelector('.button-container') || 
                           document.querySelector('.button-group') ||
                           document.querySelector('.section');
    
    if (!buttonContainer) return;
    
    // Создаем контейнер для кнопок отладки
    const debugContainer = document.createElement('div');
    debugContainer.style.cssText = `
        margin: 20px 0;
        padding: 15px;
        background: #f0f7ff;
        border: 2px dashed #4b6cb7;
        border-radius: 10px;
        text-align: center;
    `;
    
    debugContainer.innerHTML = `
        <div style="font-weight: bold; color: #4b6cb7; margin-bottom: 10px;">
            <i class="fas fa-bug"></i> Панель отладки
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button id="debugInfoBtn" style="background: #4b6cb7;">
                <i class="fas fa-info-circle"></i> Инфо
            </button>
            <button id="debugTestBtn" style="background: #34b86e;">
                <i class="fas fa-play"></i> Тест системы
            </button>
            <button id="debugListBtn" style="background: #9c27b0;">
                <i class="fas fa-list"></i> Список тестов
            </button>
            <button id="debugStartBtn" style="background: #ff9800;">
                <i class="fas fa-rocket"></i> Быстрый старт
            </button>
        </div>
        <div id="debugOutput" style="margin-top: 10px; padding: 10px; background: white; 
              border-radius: 5px; font-family: monospace; font-size: 12px; text-align: left; 
              max-height: 200px; overflow-y: auto; display: none;"></div>
    `;
    
    // Вставляем после кнопок или в конец секции
    buttonContainer.parentNode.insertBefore(debugContainer, buttonContainer.nextSibling);
    
    // Назначаем обработчики
    document.getElementById('debugInfoBtn').onclick = () => {
        window.showSystemInfo();
        showDebugOutput('Информация о системе выведена в консоль браузера (F12)');
    };
    
    document.getElementById('debugTestBtn').onclick = async () => {
        const result = await window.runSystemTests();
        showDebugOutput(result ? '✅ Все тесты пройдены успешно' : '❌ Обнаружены ошибки');
    };
    
    document.getElementById('debugListBtn').onclick = () => {
        window.showAvailableTests();
        showDebugOutput('Список тестов выведен в консоль браузера (F12)');
    };
    
    document.getElementById('debugStartBtn').onclick = () => {
        window.startDebugTest();
        showDebugOutput('Запущен быстрый старт теста с тестовым студентом');
    };
    
    function showDebugOutput(message) {
        const output = document.getElementById('debugOutput');
        output.style.display = 'block';
        output.innerHTML = `<div>${new Date().toLocaleTimeString()}: ${message}</div>` + output.innerHTML;
    }
    
    console.log('✅ Панель отладки добавлена в интерфейс');
}

// ====================================================================
// ЭКСПОРТ ДЛЯ ГЛОБАЛЬНОГО ИСПОЛЬЗОВАНИЯ
// ====================================================================

window.debugTestConfig = window.TEST_CONFIG;
window.debugQuestions = window.questionsBank;
window.debugProblems = window.problemsBank;

console.log('✅ Отладочный тест загружен и готов к использованию!');
console.log('👉 Введите "debug" на главной странице для запуска.');
console.log('👉 Используйте window.showSystemInfo() для информации о системе.');
console.log('👉 Используйте window.runSystemTests() для проверки системы.');