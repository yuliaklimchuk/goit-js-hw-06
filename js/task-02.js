const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const elements = [];
for (const ingredient of ingredients) { 
  const element = document.createElement('li');
  element.textContent = ingredient;
  elements.push(element);
}

list.append(...elements);
