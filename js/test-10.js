import getRandomHexColor from './get-random-hex-color.js';

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.firstElementChild;
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let boxesAmount = null;

inputEl.addEventListener('input', onInputChange);
createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroybtnClick);

function onInputChange(e) {
  boxesAmount = Number(e.target.value);
}

function onCreateBtnClick() {
  createBoxes(boxesAmount);
}

function onDestroybtnClick() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  boxesAmount = null;
}

function createBoxes(amount) {
  if (!amount) {
    return;
  }

  const boxes = [];
  let size = 20;

  for (let i = 1; i <= amount; i += 1) {
    const bgColor = getRandomHexColor();
    size += 10;

    boxes.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${bgColor}"></div>`
    );
  }

  const boxesMarkup = boxes.join('');
  boxesEl.innerHTML = boxesMarkup;
}
