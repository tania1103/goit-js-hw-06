function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body'); //select the <body> element, as we will change its background color
const colorSpan = document.querySelector('.color'); //select the span.color element which will display the generated color value
const changeColorBtn = document.querySelector('.change-color'); //select the button to trigger the color to change when pressed



changeColorBtn.addEventListener('click', () => { //Add a click event on the button
  const newColor = getRandomHexColor(); //generate a new color with getRandomHexColor()
  bodyEl.style.backgroundColor = newColor; // Apply this color to the body element using style.backgroundColor
  colorSpan.textContent = newColor;  //Display the color value in the span.color element by updating the textContent property.
});