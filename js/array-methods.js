const numbers = [5, 10, 15, 20, 25];
numbers.forEach((number, index, array) =>
  console.log(`Індекс ${index}, значення ${number}, значення ${array}`)
);

const fruits = [
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
];

const anyAvailable = fruits.some(({ amount }) => amount > 0);
// console.log(anyAvailable);
