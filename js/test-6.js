const inputEl = document.querySelector('#validation-input');
const requiredInputTextLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  const inputTextLength = e.target.value.length;

  if (inputTextLength === requiredInputTextLength) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
