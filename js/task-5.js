const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  const inputText = e.target.value.trim();
  outputEl.textContent = !inputText ? 'Anonymous' : inputText;
}
