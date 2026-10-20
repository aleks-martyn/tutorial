const inputEl = document.querySelector('#validation-input');
const requiredInputTextLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  const inputTextLength = e.target.value.length;

  if (inputTextLength === requiredInputTextLength) {
    if (!inputEl.classList.contains('valid')) {
      inputEl.classList.add('valid');
    }
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
  } else {
    if (!inputEl.classList.contains('invalid')) {
      inputEl.classList.add('invalid');
    }
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
  }
}
