import getRandomHexColor from './get-random-hex-color.js';

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.firstElementChild;
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  const boxesAmount = Number(e.target.value);
  createBoxes(boxesAmount);
}

function createBoxes(amount) {
  console.log(amount);
}
