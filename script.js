const registerForm = document.getElementById('registrationForm');
const userNameInput = document.getElementById('username');
const userNameError = document.getElementById('usernameError');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

window.addEventListener('DOMContentLoaded', () => {
    const savedUserNames = localStorage.getItem('username');
    if(savedUserNames) {
        userName.value = savedUserNames;
    }
})

userNameInput.addEventListener('input', (e) => {
    if (userNameInput.validity.tooShort || userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Please enter a min of 3 characters and a max of 12 characters!');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Username is required!');
    } else {
        userNameInput.setCustomValidity('');
    }

    userNameError.textContent = userNameInput.validationMessage;
});

emailInput.addEventListener('input', (e) => {

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
        passwordInput.setCustomValidity('Password is required!')
    } else if (passwordInput.validity.typeMismatch) {
        emailInput.setCustomValidity('Please Enter a valid password!');
    } else if (passwordInput.validity.pattern) {
        passwordInput.setCustomValidity('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number!');
    } else {
        passwordInput.setCustomValidity('');
    }

    passwordError.textContent = passwordInput.validationMessage;
})