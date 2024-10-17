// We select the input element using the validation-input ID
const inputEl = document.querySelector('#validation-input');


//We add a blur event on the input.
// This will fire when the user exits the input field.
inputEl.addEventListener('blur', () => {
  const requiredLength = Number(inputEl.dataset.length); //Take the value from the data-length attribute and convert it to number using Number().
  const inputLength = inputEl.value.length; //Check the length of the text entered by the user.


  //If the length of the input text is equal to the required length (6 characters in this case), we add the valid class and remove the invalid class.
  //Otherwise, we add the invalid class and remove the valid class.

  if (inputLength === requiredLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});