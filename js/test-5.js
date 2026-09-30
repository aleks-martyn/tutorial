const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  outputEl.textContent = !e.target.value.trim()
    ? 'Anonymous'
    : e.target.value.trim();

  //   if (!e.target.value.trim().length) {
  //     outputEl.textContent = 'Anonymous';
  //   }
}
