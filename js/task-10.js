function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const inputEl = controls.querySelector('input'); //Selects the input where the user enters the number of divs.
const createBtn = controls.querySelector('[data-create]'); // Select the buttons for creating and destroying divs.
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes'); //Selects the div#boxes where the generated divs will be added.


// Creates a boxes array that will contain all generated divs.
// Set the initial size of each div to 30x30px and increase it by 10px for each subsequent div.
// Generate a random color for each div and apply the required size and styles.
// Append all divs from the boxes array to div#boxes using append().

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
    size += 10; // crește dimensiunea fiecărui element cu 10px
  }

  boxesContainer.append(...boxes);
}

// Deletes all divs in div#boxes by setting its contents to empty (innerHTML = '').
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


// When the "Create" button is pressed, we read the value from the input and generate the specified number of divs if the value is greater than 0.
// When the "Destroy" button is pressed, all divs in div#boxes are deleted.

createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});