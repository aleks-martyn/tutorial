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