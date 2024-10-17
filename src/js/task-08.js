const form = document.querySelector('.login-form'); //We select the form with class login-form.


//We add a submit event on the form:
form.addEventListener('submit', (event) => {
  event.preventDefault(); //prevents the form's default behavior (reloading the page).

  const {
    elements: { email, password } //We use destructuring to access the email and password input fields in the form's elements property.
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Toate câmpurile trebuie completate!');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  form.reset(); //We reset the form, clearing the values in the input fields.
});

