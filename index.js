// Завдання 1
/**
 * Функція `replaceText` замінює всі входження певного слова у тексті на задану фразу.
 *
 *  word - Слово для заміни.
 *  replacement - Фраза, якою треба замінити слово.
 *  text - Текст, у якому треба здійснити заміну.
 */
function replaceText(word, replacement, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'g' (глобальний пошук).
  
 const regex = new RegExp(word, 'g'); // Створення регулярного виразу для пошуку слова з флагом 'g' (глобальний пошук).
  return text.replace(regex, replacement); // Використання методу `replace` регулярного виразу для заміни слова на фразу у тексті.
}

// Перевірка
console.log("Завдання 1 ==============================");
console.log(
  replaceText(
    "example",
    "sample text",
    "This is an example sentence. Another example is here."
  )
);
// Виведе This is an sample text sentence. Another sample text is here.

// Завдання 2

/**
 * Функція `checkWord` перевіряє, чи міститься певне слово у тексті.
 *
 *  word - Слово для перевірки.
 *  text - Текст, який треба перевірити.
 */
function checkWord(word, text) {
 const regex = new RegExp(word, 'i'); // Створення регулярного виразу для пошуку слова з флагом 'i' (регістронезалежний пошук).
  return regex.test(text); // Використання методу `test` регулярного виразу для перевірки наявності слова у тексті.
}

// Перевірка
console.log("Завдання 2 ==============================");
console.log(checkWord("example", "This is an example sentence."));
// Виведе true

// Завдання 3

/**
 * Функція `extractTextInParentheses` вилучає текст, який знаходиться в круглих дужках, з рядка.
 *
 *  str - Рядок, з якого треба вилучити текст.
 */
function extractTextInParentheses(str) {
const regex = /\((.*?)\)/g; // Створення регулярного виразу з використанням зворотніх посилань для пошуку тексту в круглих дужках /\((.*?)\)/g.
  const matches = str.matchAll(regex); // Використання методу `matchAll` для отримання всіх збігів регулярного виразу.
  const extractedTexts = []; // Створення масиву зі знайденими текстами.

  for (const match of matches) {
    extractedTexts.push(match[1]); // Додавання тексту з другої групи збігу до масиву вилучених текстів.
  }

  return extractedTexts; // Повернення масиву вилучених текстів.
}
// Перевірка
console.log("Завдання 3 ==============================");

console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Виведе [ 'text', 'parentheses' ]

// Завдання 4

/**
 * Функція `countEmails` знаходить та підраховує кількість email-адрес у рядку.
 *
 *  str - Рядок, в якому потрібно знайти email-адреси.
 */
function countEmails(str) {
const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g; // Створення регулярного виразу для пошуку email-адрес /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.
  const matches = str.match(regex); // Використання методу `match` для отримання всіх збігів регулярного виразу.
  const count = matches ? matches.length : 0; // Підрахунок кількості email-адрес.

  return count; // Повернення кількості email-адрес.
}
// Перевірка
console.log("Завдання 4 ==============================");

console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Виведе  3

// Завдання 5
/**
 * Функція `findWordOccurrences` знаходить всі входження заданого слова у рядок з урахуванням ігнорування регістру.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 *  Повертає масив з індексами всіх входжень слова у рядок.
 */
function findWordOccurrences(str, word) {
  const regex = new RegExp(word, 'gi'); // Створення регулярного виразу для пошуку слова з флагами 'g' та 'i'.
  const matches = []; // Створення пустого масиву для зберігання індексів входжень.

  let match;
  while ((match = regex.exec(str)) !== null) {
    matches.push(match.index); // Додавання індексу поточного входження слова у масив.
    regex.lastIndex = match.index + 1; // Оновлення lastIndex, щоб продовжити пошук з наступного символу.
  }

  return matches; // Повернення масиву з індексами входжень.
}

// Перевірка

console.log("Завдання 5 ==============================");

console.log(
  findWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The Fox is quick.",
    "fox"
  )
);
// Виведе  [ 16, 49 ]

// Завдання 6

/**
 * Функція `checkRegexFlags` перевіряє регулярний вираз на наявність флагів 'g' та 'm'.
 *
 *  regex - Регулярний вираз, який потрібно перевірити.
 * Повертає  - true, якщо флаги 'g' та 'm' присутні, інакше - false.
 */
function checkRegexFlags(regex) {
 const flags = regex.flags; // Отримуємо всі флаги регулярного виразу.
  const hasGFlag = flags.includes('g'); // Перевіряємо наявність флага 'g' за допомогою методу `includes`.
  const hasMFlag = flags.includes('m'); // Перевіряємо наявність флага 'm' за допомогою методу `includes`.

  return hasGFlag && hasMFlag; // Повертаємо true, якщо флаги 'g' та 'm' присутні, інакше - false.
}

// Перевірка

console.log("Завдання 6 ==============================");

console.log(checkRegexFlags(/pattern/gm));
// Виведе true

// Завдання 7

/**
 * Функція `replaceWordOccurrences` замінює всі входження заданого слова у рядку на нове слово.
 *
 *  str - Рядок, в якому потрібно замінити входження слова.
 *  word - Слово, яке потрібно замінити.
 *  newWord - Нове слово, яким потрібно замінити.
 * Повертає  - Результат заміни входжень слова у рядку.
 */
function replaceWordOccurrences(str, word, newWord) {
const regex = new RegExp(word, 'g'); // Створюємо регулярний вираз зі словом і флагом 'g' для глобального пошуку всіх входжень.
  const replacedStr = str.replace(regex, newWord); // Заміняємо всі входження слова у рядку на нове слово за допомогою методу `replace`.

  return replacedStr; // Повертаємо результат заміни входжень слова у рядку.
}
// Перевірка
console.log("Завдання 7 ==============================");

console.log(
  replaceWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "fox",
    "cat"
  )
);
// Виведе The quick brown cat jumps over the lazy dog. The cat is quick.

// Завдання 8

/**
 * Функція `checkFlags` перевіряє, які флаги використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив флагів, які використовуються у регулярному виразі.
 */
function checkFlags(regex) {
const flags = []; // Створюємо масив для зберігання використаних флагів.

  if (regex.ignoreCase) {
    flags.push('ignoreCase'); // Перевіряємо, чи використовується флаг 'i' (ignoreCase) у регулярному виразі.
  }

  flags.push(regex.source); // Додаємо вихідний код регулярного виразу до масиву.

  return flags; // Повертаємо масив використаних флагів.}
}
// Приклад використання:
console.log("Завдання 8 ==============================");

console.log(checkFlags(/pattern/gimsy));
// Виведе[ 'ignoreCase', 'pattern' ]

// Завдання 9

/**
 * Функція `checkRegexMethods` перевіряє, які методи використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив методів, які використовуються у регулярному виразі.
 */
function checkRegexMethods(regex) {
  const methods = [];
// Створюємо масив для зберігання використаних методів.
  // Перевіряємо, чи використовується метод `dotAll`.
  // Перевіряємо, чи використовується метод `multiline`.
  // Перевіряємо, чи використовується метод `sticky`.
  // Повертаємо масив використаних методів.
  if (regex.dotAll) {
    methods.push('dotAll');
  }
  if (regex.multiline) {
    methods.push('multiline');
  }
  if (regex.sticky) {
    methods.push('sticky');
  }

  return methods;
}

// Приклад використання:
console.log("Завдання 9 ==============================");

console.log(checkRegexMethods(/test/msy));
// Виведе [ 'dotAll', 'multiline', 'sticky' ]

// Завдання 10

/**
 * Функція `findWord` знаходить перше входження заданого слова у рядок за допомогою методу `search`.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 * Повертає  - Індекс першого входження слова у рядок або -1, якщо слово не знайдено.
 */
function findWord(str, word) {
 // Створення регулярного виразу для пошуку слова.
  const regex = new RegExp(`\\b${word}\\b`);

  // Використання методу `search` для пошуку першого входження слова.
  const index = str.search(regex);

  return index;}

// Приклад використання:
console.log("Завдання 10 ==============================");

console.log(
  findWord(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "quick"
  )
); // Виведе: 4
