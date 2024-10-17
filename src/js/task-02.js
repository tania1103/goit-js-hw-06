const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

//goes through each ingredient in the array
ingredients.forEach(ingredient => {
  const listItem = document.createElement('li'); // creates a new list item
  listItem.classList.add('item');  //adds the class item to the newly created <li>
  listItem.textContent = ingredient; //sets the text of the list item to the current ingredient name
  ingredientsList.append(listItem); // adds the list item to the unordered list
});