>>>Установите Vs Code

# 🧮 Catalana Counter (JavaScript)

Проект предназначен для вычисления количества правильно сформированных скобочных последовательностей (числа Каталана) для заданного чётного числа `n`.

---

## 🚀 Установка

```bash
npm install
▶️ Использование

const { countWellFormedParentheses } = require('./index');
console.log(countWellFormedParentheses(4)); // Выведет: "2"
✅ Запуск тестов
В проекте используется Jest для модульного тестирования.

bash
npm test
⚙️ Тест производительности
bash
node perf.test.js
📌 Ограничения входных данных
n должно быть чётным и неотрицательным

n ≤ 40

📁 Структура проекта
bash
catalana-counter-js/
├── index.js             # Основная логика
├── index.test.js        # Модульные тесты
├── test.load.js.        # Тест производительности
├── package.json         # Конфигурация NPM
├── .gitignore           # Игнорируемые файлы Git
└── README.md            # Документация проекта
🔄 CI: GitHub Actions
Проект автоматически запускает тесты при каждом push и pull request в ветку main, используя GitHub Actions.
