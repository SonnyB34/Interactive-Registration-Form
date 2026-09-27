const registerForm = document.getElementById('registrationForm');
const userNameInput = document.getElementById('username');
const userNameError = document.getElementById('usernameError');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

window.addEventListener('DOMContentLoaded', () => {
  const savedUserNames = localStorage.getItem('username');
  if (savedUserNames) {
    userNameInput.value = savedUserNames;
  }
});

userNameInput.addEventListener('input', (e) => {
  if (userNameInput.validity.tooShort || userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity(
      'Please enter a min of 4 characters and a max of 14 characters!',
    );
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Username is required!');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameError.textContent = userNameInput.validationMessage;
});

emailInput.addEventListener('change', (e) => {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity('Email address required!');
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity('Please enter a valid email address!');
  } else {
    emailInput.setCustomValidity('');
  }

  emailError.textContent = emailInput.validationMessage;
});

passwordInput.addEventListener('input', (e) => {
   
  if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity('Password is required!');
  } else if (passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number!'
    );
  } else {
    passwordInput.setCustomValidity('');
  }

  passwordError.textContent = passwordInput.validationMessage;
});

// validate password and confirm password match

confirmPasswordInput.addEventListener('input', (e) => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity('Passwords do not match!');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }

  confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const userNameValid = userNameInput.checkValidity();
    const emailValid = emailInput.checkValidity();
    const passwordValid = passwordInput.checkValidity();
    const confirmPasswordValid = confirmPasswordInput.checkValidity();
   
    if(!userNameValid || !emailValid || !passwordValid || !confirmPasswordValid) {
      alert('Cannot create account check input fields');
      
      const inputFields = [userNameInput, emailInput, passwordInput, confirmPasswordInput];
      inputFieldInvalid = inputFields.find(field => !field.checkValidity());
      if(inputFieldInvalid) {
        inputFieldInvalid.focus();
      }
      return;
   } else {
        alert('Account has been created!');
        localStorage.setItem('username', userNameInput.value);

        passwordInput.value = '';
        confirmPasswordInput.value = '';
    }
});
