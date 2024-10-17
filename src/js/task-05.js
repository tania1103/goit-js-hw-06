const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

//sets up an event listener for changes in the input
inputEl.addEventListener('input', () => {
  outputEl.textContent = inputEl.value.trim() !== '' ? inputEl.value : 'Anonymous';
});

//We check if the current input value is empty (we use trim() to remove whitespaces).
//If the input has a value, we update the span text with that value.
//If the input is empty, we display the text "Anonymous" in the span.