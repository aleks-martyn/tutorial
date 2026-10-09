const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const {
    elements: { email, password },
  } = form;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === '' || passwordValue.trim() === '') {
    alert('All fields must be filled in!');
    return;
  }

  console.log({ email: emailValue, password: passwordValue });

  form.reset();
}
