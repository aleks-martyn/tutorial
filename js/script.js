"use srtict";

const yearOfBirth = 2006;
console.log(yearOfBirth);

class User {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango);

console.log("JavaScript is awesome".length);
console.log("JavaScript is awesome".toUpperCase());

const quantity = 17;
console.log(typeof quantity);

const username = "Mango";
console.log("Username is ", username);

const x = 5;
const y = 10;
const z = 5;

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"