const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  const fontSizeValue = e.target.value;
  textEl.style.fontSize = `${fontSizeValue}px`;
}
