const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const {
    elements: { email, password },
  } = form;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All fields must be filled in!');
    return;
  }

  console.log({ email: emailValue, password: passwordValue });

  form.reset();
}
