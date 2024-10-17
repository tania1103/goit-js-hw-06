const fontSizeControl = document.querySelector('#font-size-control'); //Select the range input element
const textEl = document.querySelector('#text');  //Select the span element containing the text "Abracadabra!"


//We add an input event on the range element, so that whenever the value changes, we update the text size.

fontSizeControl.addEventListener('input', () => {
  const fontSize = `${fontSizeControl.value}px`;
  textEl.style.fontSize = fontSize; //We update the font-size property of the span element according to the current slider value (input#font-size-control).
});