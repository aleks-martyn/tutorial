import getRandomHexColor from './get-random-hex-color.js';

const changeColorBtnEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValueEl.textContent = randomColor;
}
