//selects the unordered list element with the ID categories
const categoriesList = document.querySelector('#categories');

//retrieves all li elements with the class item within that list.
const categories = categoriesList.querySelectorAll('.item');

//displays the number of categories in the console
console.log(`Number of categories: ${categories.length}`);

//iterates over each category.
categories.forEach(category => {
  const title = category.querySelector('h2').textContent; //gets the text content of the h2 element for that category
  const elementsCount = category.querySelectorAll('ul li').length; // counts the number of li elements within the child ul of the current category

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});