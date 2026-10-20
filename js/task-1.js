const itemsByClass = document.querySelectorAll('.item');
console.log(itemsByClass);

console.log(`Number of categories: ${itemsByClass.length}`);

itemsByClass.forEach(el => {
  console.log(`Category: ${el.firstElementChild?.textContent}`);
  console.log(`Elements: ${el.lastElementChild?.childElementCount ?? 0}`);
});
