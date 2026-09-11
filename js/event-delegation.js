const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  //pattern Guard Clause
  //фільтр мети делегування
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt);
}

/* код додавання кнопок */

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Button ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
