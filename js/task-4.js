const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtnEl.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
