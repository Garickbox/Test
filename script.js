// ====================================================================
// ОСНОВНОЙ СКРИПТ СИСТЕМЫ ТЕСТИРОВАНИЯ
// Версия 3.0 - Модульная система
// ====================================================================

// Глобальные переменные системы
let currentQuestionIndex = 0;
let selectedQuestions = [];
let selectedProblems = [];
let userAnswers = [];
let score = 0;
let testStarted = false;
let testCompleted = false;
let timer = null;
let isInitialized = false;

// DOM элементы
const elements = {
    startBtn: document.getElementById('start-test-btn'),
    testContent: document.getElementById('test-content'),
    studentName: document.getElementById('student-name'),
    studentClass: document.getElementById('student-class'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    questionType: document.getElementById('question-type'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    confirmBtn: document.getElementById('confirm-btn'),
    results: document.getElementById('results'),
    scoreValue: document.getElementById('score-value'),
    gradeValue: document.getElementById('grade-value'),
    pointsBreakdown: document.getElementById('points-breakdown'),
    telegramStatus: document.getElementById('telegram-status'),
    fullscreenResult: document.getElementById('fullscreen-result'),
    fullscreenGrade: document.getElementById('fullscreen-grade'),
    fullscreenScore: document.getElementById('fullscreen-score'),
    fullscreenBreakdown: document.getElementById('fullscreen-breakdown'),
    finishBtn: document.getElementById('finish-btn'),
    blockerOverlay: document.getElementById('blockerOverlay'),
    anticheatModal: document.getElementById('anticheatModal'),
    cheatMessage: document.getElementById('cheatMessage'),
    countdownTimer: document.getElementById('countdownTimer'),
    passwordInput: document.getElementById('passwordInput'),
    continueBtn: document.getElementById('continueBtn')
};

// ==================== ИНИЦИАЛИЗАЦИЯ ТЕСТА ====================

/**
 * Основная функция инициализации теста
 * Вызывается после загрузки конфигурации теста
 */
function initTest() {
    if (isInitialized) {
        console.log('⚠️ Тест уже инициализирован');
        return;
    }
    
    if (!window.TEST_CONFIG) {
        console.error('❌ Конфигурация теста не загружена!');
        showError('Конфигурация теста не загружена. Проверьте код теста.');
        return;
    }
    
    if (!window.questionsBank || !window.problemsBank) {
        console.error('❌ Банки вопросов не загружены!');
        showError('Вопросы теста не загружены.');
        return;
    }
    
    console.log('🚀 Инициализация теста:', window.TEST_CONFIG.title);
    console.log('📊 Вопросов в банке:', window.questionsBank.length);
    console.log('📊 Задач в банке:', window.problemsBank.length);
    console.log('🎯 Максимальный балл:', window.TEST_CONFIG.maxScore);
    
    // Устанавливаем заголовок теста (уже установлен в test.html)
    
    // Инициализируем вопросы
    initQuestions();
    
    // Настройка событий
    setupEventListeners();
    
    // Запуск античит системы
    setupAnticheatSystem();
    
    isInitialized = true;
    console.log('✅ Тест инициализирован успешно');
}

/**
 * Показать ошибку
 */
function showError(message) {
    const studentInfoSection = document.getElementById('student-info-section');
    if (studentInfoSection) {
        studentInfoSection.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #f44336;"></i>
                <h3 style="color: #f44336; margin: 20px 0;">Ошибка загрузки</h3>
                <p>${message}</p>
                <button onclick="window.location.href='../index.html'" 
                        style="background: #4b6cb7; color: white; border: none; padding: 12px 24px; 
                               border-radius: 8px; margin-top: 20px; cursor: pointer;">
                    <i class="fas fa-arrow-left"></i> Вернуться на главную
                </button>
            </div>
        `;
    }
}

/**
 * Инициализация вопросов и задач
 */
function initQuestions() {
    // Проверяем наличие вопросов
    if (!window.questionsBank || window.questionsBank.length < window.TEST_CONFIG.totalQuestions) {
        console.error('❌ Недостаточно теоретических вопросов');
        showError(`Недостаточно теоретических вопросов. Нужно: ${window.TEST_CONFIG.totalQuestions}, доступно: ${window.questionsBank ? window.questionsBank.length : 0}`);
        return;
    }
    
    if (!window.problemsBank || window.problemsBank.length < window.TEST_CONFIG.totalProblems) {
        console.error('❌ Недостаточно задач');
        showError(`Недостаточно задач. Нужно: ${window.TEST_CONFIG.totalProblems}, доступно: ${window.problemsBank ? window.problemsBank.length : 0}`);
        return;
    }
    
    // Случайный выбор вопросов
    selectedQuestions = getRandomQuestions(window.questionsBank, window.TEST_CONFIG.totalQuestions);
    selectedProblems = getRandomQuestions(window.problemsBank, window.TEST_CONFIG.totalProblems);
    
    console.log(`✅ Выбрано ${selectedQuestions.length} вопросов и ${selectedProblems.length} задач`);
}

/**
 * Получить случайные вопросы из банка
 */
function getRandomQuestions(bank, count) {
    const shuffled = [...bank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// ==================== ОСНОВНАЯ ЛОГИКА ТЕСТИРОВАНИЯ ====================

/**
 * Настройка обработчиков событий
 */
function setupEventListeners() {
    // Проверяем, что элементы существуют
    if (!elements.startBtn || !elements.confirmBtn || !elements.finishBtn) {
        console.error('❌ Не найдены необходимые элементы DOM');
        return;
    }
    
    // Кнопка начала теста
    elements.startBtn.addEventListener('click', startTest);
    
    // Кнопка подтверждения ответа
    elements.confirmBtn.addEventListener('click', confirmAnswer);
    
    // Кнопка завершения теста
    elements.finishBtn.addEventListener('click', finishTest);
    
    // Античит система
    if (elements.passwordInput && elements.continueBtn) {
        elements.passwordInput.addEventListener('input', validatePassword);
        elements.continueBtn.addEventListener('click', unblockTest);
    }
    
    // Блокировка горячих клавиш
    document.addEventListener('keydown', blockHotkeys);
    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('selectstart', blockSelection);
    document.addEventListener('dragstart', blockDrag);
    
    console.log('✅ Обработчики событий установлены');
}

/**
 * Начать тест
 */
function startTest() {
    const name = elements.studentName.value.trim();
    const studentClass = elements.studentClass.value;
    
    if (!name || !studentClass) {
        alert('Пожалуйста, введите имя и выберите класс');
        return;
    }
    
    // Сохраняем данные ученика
    window.STUDENT_INFO = {
        name: name,
        class: studentClass,
        startTime: new Date().toISOString(),
        testName: window.TEST_CONFIG.title
    };
    
    // Скрываем форму ввода и показываем тест
    document.getElementById('student-info-section').style.display = 'none';
    elements.testContent.style.display = 'block';
    
    testStarted = true;
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    
    // Показываем первый вопрос
    showQuestion();
    
    // Запускаем античит мониторинг
    startAnticheatMonitoring();
    
    console.log('✅ Тест начат для ученика:', name, studentClass);
}

/**
 * Показать текущий вопрос
 */
function showQuestion() {
    const totalQuestions = selectedQuestions.length + selectedProblems.length;
    const allQuestions = [...selectedQuestions, ...selectedProblems];
    
    if (currentQuestionIndex >= allQuestions.length) {
        showResults();
        return;
    }
    
    const question = allQuestions[currentQuestionIndex];
    const isProblem = currentQuestionIndex >= selectedQuestions.length;
    
    // Обновляем прогресс
    updateProgress(currentQuestionIndex, totalQuestions);
    
    // Устанавливаем тип вопроса
    elements.questionType.textContent = isProblem ? 'ЗАДАЧА (3 балла)' : 'ВОПРОС (1 балл)';
    
    // Устанавливаем текст вопроса
    elements.questionText.textContent = `${currentQuestionIndex + 1}. ${question.text}`;
    
    // Очищаем контейнер с вариантами
    elements.optionsContainer.innerHTML = '';
    
    // Перемешиваем варианты ответов
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    // Создаем кнопки вариантов
    shuffledOptions.forEach((option, index) => {
        if (index >= letters.length) return; // Защита от выхода за пределы массива букв
        
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option.t}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, option.v));
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // Сбрасываем выбранный вариант
    elements.confirmBtn.disabled = true;
    
    // Сохраняем правильный ответ для проверки
    const correctOption = question.options.find(opt => opt.v === 'correct');
    window.currentCorrectAnswer = correctOption ? correctOption.t : '';
    
    console.log(`📝 Показан вопрос ${currentQuestionIndex + 1} из ${totalQuestions}`);
}

/**
 * Выбрать вариант ответа
 */
function selectOption(optionElement, optionValue) {
    // Снимаем выделение со всех вариантов
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Выделяем выбранный вариант
    optionElement.classList.add('selected');
    
    // Активируем кнопку подтверждения
    elements.confirmBtn.disabled = false;
    
    // Сохраняем выбранный ответ
    window.selectedAnswer = optionValue;
    window.selectedAnswerText = optionElement.querySelector('.option-text').textContent;
}

/**
 * Подтвердить ответ
 */
function confirmAnswer() {
    if (!window.selectedAnswer) return;
    
    const allQuestions = [...selectedQuestions, ...selectedProblems];
    const currentQuestion = allQuestions[currentQuestionIndex];
    const isCorrect = window.selectedAnswer === 'correct';
    
    // Сохраняем ответ пользователя
    userAnswers.push({
        question: currentQuestion.text,
        userAnswer: window.selectedAnswerText,
        correctAnswer: window.currentCorrectAnswer,
        isCorrect: isCorrect,
        points: isCorrect ? currentQuestion.points : 0,
        questionType: currentQuestionIndex < selectedQuestions.length ? 'question' : 'problem'
    });
    
    // Добавляем баллы
    if (isCorrect) {
        score += currentQuestion.points;
    }
    
    // Переходим к следующему вопросу
    currentQuestionIndex++;
    
    // Очищаем выбранный ответ
    window.selectedAnswer = null;
    window.selectedAnswerText = null;
    
    // Показываем следующий вопрос или результаты
    if (currentQuestionIndex < allQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

/**
 * Обновить прогресс
 */
function updateProgress(current, total) {
    const percentage = ((current + 1) / total) * 100;
    elements.progressBar.style.width = `${percentage}%`;
    elements.progressText.textContent = `Вопрос ${current + 1} из ${total}`;
}

/**
 * Показать результаты
 */
function showResults() {
    testCompleted = true;
    
    // Скрываем контейнер с вопросами
    elements.testContent.style.display = 'none';
    
    // Рассчитываем оценку
    const grade = calculateGrade(score);
    const maxScore = window.TEST_CONFIG.maxScore;
    
    // Обновляем результаты
    elements.scoreValue.textContent = score;
    elements.gradeValue.textContent = grade;
    elements.gradeValue.style.color = getGradeColor(grade);
    
    // Формируем детализацию
    let breakdownHTML = '<h3>Детализация ответов:</h3>';
    let correctCount = 0;
    
    userAnswers.forEach((answer, index) => {
        correctCount += answer.isCorrect ? 1 : 0;
        breakdownHTML += `
            <div class="answer-detail ${answer.isCorrect ? 'correct' : 'wrong'}">
                <strong>${answer.questionType === 'question' ? 'Вопрос' : 'Задача'} ${index + 1}:</strong> ${answer.question}<br>
                <span class="${answer.isCorrect ? 'correct-text' : 'wrong-text'}">
                    ${answer.isCorrect ? '✅ Правильно' : '❌ Неправильно'}
                    (${answer.isCorrect ? '+' + answer.points : '0'} баллов)
                </span><br>
                ${!answer.isCorrect ? `<small>Правильный ответ: ${answer.correctAnswer}</small><br>` : ''}
                <small>Ваш ответ: ${answer.userAnswer}</small>
            </div>
        `;
    });
    
    elements.pointsBreakdown.innerHTML = breakdownHTML;
    
    // Показываем результаты
    elements.results.style.display = 'block';
    
    // Отправляем результаты в Telegram
    sendResultsToTelegram(grade, correctCount, userAnswers.length);
    
    // Показываем полноэкранный результат
    showFullscreenResult(grade, score, maxScore, breakdownHTML);
    
    console.log('📊 Тест завершен. Результаты:', {
        score: score,
        grade: grade,
        correctAnswers: correctCount,
        totalQuestions: userAnswers.length
    });
}

/**
 * Рассчитать оценку по баллам
 */
function calculateGrade(score) {
    const scale = window.TEST_CONFIG.gradingScale;
    
    if (score >= scale[5]) return 5;
    if (score >= scale[4]) return 4;
    if (score >= scale[3]) return 3;
    return 2;
}

/**
 * Получить цвет для оценки
 */
function getGradeColor(grade) {
    const colors = {
        5: '#4CAF50',
        4: '#8BC34A',
        3: '#FFC107',
        2: '#F44336'
    };
    return colors[grade] || '#333';
}

/**
 * Показать полноэкранный результат
 */
function showFullscreenResult(grade, score, maxScore, breakdown) {
    elements.fullscreenResult.style.display = 'flex';
    elements.fullscreenGrade.textContent = grade;
    elements.fullscreenGrade.style.color = getGradeColor(grade);
    elements.fullscreenScore.textContent = `${score} из ${maxScore}`;
    elements.fullscreenBreakdown.innerHTML = breakdown;
}

/**
 * Завершить тест
 */
function finishTest() {
    // Можно добавить дополнительную логику при завершении
    alert('Тест завершен! Результаты отправлены учителю.');
    
    // Закрываем полноэкранный результат
    elements.fullscreenResult.style.display = 'none';
    
    // Прокручиваем к началу результатов
    elements.results.scrollIntoView({ behavior: 'smooth' });
}

// ==================== АНТИЧИТ СИСТЕМА ====================

/**
 * Настройка античит системы
 */
function setupAnticheatSystem() {
    // Сообщения при попытках обмана
    window.cheatMessages = [
        "Обнаружена попытка переключения вкладок!",
        "Не пытайтесь искать ответы в других окнах!",
        "Система фиксирует все попытки списывания!",
        "Это контрольная работа, а не поиск ответов в интернете!",
        "Будьте честны с собой и учителем!",
        "Списывание обнаруживается автоматически!"
    ];
}

/**
 * Начать мониторинг античит
 */
function startAnticheatMonitoring() {
    // Мониторинг потери фокуса
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
}

/**
 * Обработка изменения видимости страницы
 */
function handleVisibilityChange() {
    if (document.hidden && testStarted && !testCompleted) {
        triggerAnticheat();
    }
}

/**
 * Обработка потери фокуса окна
 */
function handleWindowBlur() {
    if (testStarted && !testCompleted) {
        triggerAnticheat();
    }
}

/**
 * Обработка получения фокуса окна
 */
function handleWindowFocus() {
    // Можно добавить логику при возвращении на страницу
}

/**
 * Запустить античит блокировку
 */
function triggerAnticheat() {
    if (window.isBlocked) return;
    
    window.isBlocked = true;
    window.blockStartTime = Date.now();
    
    // Случайное сообщение
    const randomMessage = window.cheatMessages[
        Math.floor(Math.random() * window.cheatMessages.length)
    ];
    
    elements.cheatMessage.textContent = randomMessage;
    elements.blockerOverlay.style.display = 'block';
    elements.anticheatModal.style.display = 'block';
    
    // Запуск таймера
    startCountdown(window.TEST_CONFIG.anticheat.blockTime || 180);
    
    // Блокируем весь контент
    document.body.style.overflow = 'hidden';
    
    console.log('🚨 Античит система активирована');
}

/**
 * Запустить обратный отсчет
 */
function startCountdown(seconds) {
    let remaining = seconds;
    
    const updateTimer = () => {
        const minutes = Math.floor(remaining / 60);
        const secs = remaining % 60;
        elements.countdownTimer.textContent = 
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (remaining <= 0) {
            clearInterval(timer);
            elements.continueBtn.disabled = false;
            elements.passwordInput.focus();
        }
        
        remaining--;
    };
    
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

/**
 * Валидация пароля
 */
function validatePassword() {
    const password = elements.passwordInput.value;
    const correctPassword = window.TEST_CONFIG.anticheat.password || "3265";
    
    if (password === correctPassword) {
        elements.continueBtn.disabled = false;
    } else {
        elements.continueBtn.disabled = true;
    }
}

/**
 * Разблокировать тест
 */
function unblockTest() {
    window.isBlocked = false;
    
    // Скрываем модалку
    elements.blockerOverlay.style.display = 'none';
    elements.anticheatModal.style.display = 'none';
    elements.passwordInput.value = '';
    
    // Разблокируем контент
    document.body.style.overflow = 'auto';
    
    // Очищаем таймер
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    
    // Снимаем обработчики античита
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', handleWindowFocus);
    
    console.log('✅ Античит система разблокирована');
}

// ==================== БЛОКИРОВКА ГОРЯЧИХ КЛАВИШ ====================

/**
 * Блокировка горячих клавиш
 */
function blockHotkeys(e) {
    if (!testStarted || testCompleted) return;
    
    // Блокируем Ctrl+C, Ctrl+V, Ctrl+A, Ctrl+S, F12, Print Screen
    if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'a' || e.key === 's')) ||
        e.key === 'F12' ||
        e.key === 'PrintScreen'
    ) {
        e.preventDefault();
        return false;
    }
    
    // Блокируем контекстное меню (правая кнопка мыши)
    if (e.key === 'ContextMenu') {
        e.preventDefault();
        return false;
    }
}

/**
 * Блокировка контекстного меню
 */
function blockContextMenu(e) {
    if (testStarted && !testCompleted) {
        e.preventDefault();
        return false;
    }
}

/**
 * Блокировка выделения текста
 */
function blockSelection(e) {
    if (testStarted && !testCompleted) {
        e.preventDefault();
        return false;
    }
}

/**
 * Блокировка перетаскивания
 */
function blockDrag(e) {
    if (testStarted && !testCompleted) {
        e.preventDefault();
        return false;
    }
}

// ==================== TELEGRAM ИНТЕГРАЦИЯ ====================

/**
 * Отправить результаты в Telegram
 */
async function sendResultsToTelegram(grade, correctCount, totalCount) {
    const config = window.TEST_CONFIG.telegram;
    
    if (!config || !config.botToken || !config.chatId) {
        console.warn('Telegram не настроен');
        elements.telegramStatus.innerHTML = 
            '<p style="color: #ff9800;">⚠️ Telegram не настроен. Сообщите учителю о результате.</p>';
        return;
    }
    
    // Проверяем, есть ли токен (не дефолтный)
    if (config.botToken === "ВАШ_BOT_TOKEN" || config.botToken === "DEMO_TOKEN") {
        console.warn('⚠️ Используется тестовый токен Telegram');
        elements.telegramStatus.innerHTML = 
            '<p style="color: #ff9800;">⚠️ Telegram настроен для тестирования. В реальном тесте будут использоваться реальные данные.</p>';
        return;
    }
    
    const student = window.STUDENT_INFO;
    const testName = window.TEST_CONFIG.title;
    const maxScore = window.TEST_CONFIG.maxScore;
    
    // Формируем сообщение
    const message = `
📊 *РЕЗУЛЬТАТ ТЕСТА*
    
📝 *Тест:* ${testName}
👤 *Ученик:* ${student.name}
🏫 *Класс:* ${student.class}
    
🎯 *Результат:*
• Правильных ответов: ${correctCount}/${totalCount}
• Набрано баллов: ${score}/${maxScore}
• Оценка: ${grade}
    
📅 *Время завершения:* ${new Date().toLocaleString('ru-RU')}
    
${grade >= 3 ? '✅ Отличная работа!' : '❌ Нужно повторить материал!'}
    `;
    
    try {
        // Отправляем запрос к Telegram Bot API
        const response = await fetch(
            `https://api.telegram.org/bot${config.botToken}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: config.chatId,
                    text: message,
                    parse_mode: 'Markdown'
                })
            }
        );
        
        const data = await response.json();
        
        if (data.ok) {
            elements.telegramStatus.innerHTML = 
                '<p style="color: #4CAF50;">✅ Результаты отправлены учителю в Telegram!</p>';
            console.log('✅ Результаты отправлены в Telegram');
        } else {
            throw new Error(data.description || 'Неизвестная ошибка Telegram');
        }
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
        elements.telegramStatus.innerHTML = 
            `<p style="color: #f44336;">❌ Ошибка отправки: ${error.message}</p>`;
    }
}

// ==================== УТИЛИТЫ ====================

/**
 * Добавить стили для детализации ответов
 */
function addAnswerDetailStyles() {
    // Проверяем, не добавлены ли стили уже
    if (document.getElementById('answer-detail-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'answer-detail-styles';
    style.textContent = `
        .answer-detail {
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #ccc;
        }
        
        .answer-detail.correct {
            background: #e8f5e9;
            border-left-color: #4CAF50;
        }
        
        .answer-detail.wrong {
            background: #ffebee;
            border-left-color: #f44336;
        }
        
        .correct-text {
            color: #4CAF50;
            font-weight: 500;
        }
        
        .wrong-text {
            color: #f44336;
            font-weight: 500;
        }
        
        .answer-detail small {
            color: #666;
            font-size: 14px;
            display: block;
            margin-top: 5px;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Функция для тестирования Telegram (для отладки)
 */
window.testTelegram = async function() {
    const config = window.TEST_CONFIG.telegram;
    
    if (!config || !config.botToken || !config.chatId) {
        alert('❌ Telegram не настроен в конфигурации теста');
        return;
    }
    
    const url = `https://api.telegram.org/bot${config.botToken}/sendMessage`;
    
    console.log('🔄 Тестируем отправку в Telegram...');
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: config.chatId,
                text: '🔧 *Тестовая отправка из системы тестирования*\n\n✅ Система работает корректно!\n📅 Время: ' + new Date().toLocaleString('ru-RU'),
                parse_mode: 'Markdown'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            alert('✅ Тестовая отправка в Telegram прошла успешно!');
        } else {
            alert('❌ Ошибка Telegram: ' + (data.description || 'Неизвестная ошибка'));
        }
    } catch (error) {
        alert('❌ Ошибка сети: ' + error.message);
    }
};

// ==================== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ====================

// Добавляем стили для детализации
addAnswerDetailStyles();

// Экспортируем функции для глобального использования
window.initTest = initTest;

console.log('📚 Основной скрипт системы тестирования загружен');
console.log('⏳ Ожидаем загрузку конфигурации теста...');

// Если конфигурация уже загружена (например, в test.html скрипт теста загрузился раньше)
if (window.TEST_CONFIG) {
    console.log('✅ Конфигурация теста уже загружена, инициализируем...');
    setTimeout(() => initTest(), 100);
}

// Отправляем событие о загрузке скрипта
document.addEventListener('DOMContentLoaded', function() {
    const event = new Event('scriptLoaded');
    document.dispatchEvent(event);
    console.log('📢 Событие scriptLoaded отправлено');
});