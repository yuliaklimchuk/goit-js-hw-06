const listOfCategories = document.querySelector('#categories');
const numberOfCategories = listOfCategories.children.length;
console.log('Number of categories:', numberOfCategories);

for (const item of listOfCategories.children) 
{ 
    const firstElemItem = item.firstElementChild;
    console.log(firstElemItem.textContent);
    const elements = firstElemItem.nextElementSibling.children.length;
    console.log('Elements:', elements);
}