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