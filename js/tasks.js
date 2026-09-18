const number = 10;
let string = '';

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  // console.log((string += i));
  // console.log('Непарне i: ', i);
}

// console.log(string.split('').join(', ')); // 1, 3, 5, 7, 9

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (const number of numbers) {
  if (number < threshold) {
    continue;
  }

  // console.log(`Число більше за ${threshold}: ${number}`); // 18, 29, 34
}

const a = ['mango'];
const b = a;
// console.log(a === b); // true

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}
// console.log(multiply(1, 2, 3)); // 6

function fn(...args) {
  // Змінна args буде містити повноцінний масив
  // console.log(args);
}

fn(4, 5, 6); // [4, 5, 6]

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  // console.log(key);
  // Значення властивості з таким ключем
  // console.log(book[key]);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Імітуємо доступність абонента випадковим числом
const isRecipientAvailable = Math.random() > 0.5;
// console.log(isRecipientAvailable);
