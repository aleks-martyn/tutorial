"use srtict";

const number = 10;
let string = "";
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(string += i);
  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
}
console.log(string.split('').join(', '));

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (const number of numbers) {
  if (number < threshold) {
    continue;
  }

  console.log(`Число більше за ${threshold}: ${number}`); // 18, 29, 34
}


const a = ['mango'];
const b = a;
console.log(a === b);

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}
console.log(multiply(1, 2, 3));

function fn(...args) {
  // Змінна args буде містити повноцінний масив
  console.log(args);
}
fn(4, 5, 6);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}



// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

const isRecipientAvailable = Math.random() > 0.5;
console.log(isRecipientAvailable);

const numbersus = [5, 10, 15, 20, 25];
numbersus.forEach((number, index, array) =>
  console.log(`Індекс ${index}, значення ${number}, значення ${array}`)
);

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];
const anyAvailable = fruits.some(({amount}) => amount > 0);
console.log(anyAvailable);

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
});

console.log(total);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

console.log(tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);