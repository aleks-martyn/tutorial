const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const createListItemEl = item => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = item;
  listItemEl.classList.add('item');

  return listItemEl;
};

const makeListItems = (items, callback) => items.map(callback);

const listItems = makeListItems(ingredients, createListItemEl);

listEl.append(...listItems);
