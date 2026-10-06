const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(e.target.elements);
  const {
    elements: { email, password },
  } = e.target;
  console.log(email.value, password.value);
}
