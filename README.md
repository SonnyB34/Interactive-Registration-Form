# Interactive Registration Form

A responsive registration form built with HTML, CSS, and JavaScript.

## Features 

- **HTML validation attributes** (required, minlength, pattern, type)

- **Real-time validation** error updates as the user types

- **localStorage** saves the username after a successful registration so it can be used later

## Reflections 

- preventDefault() helped stop the browser default behavior of submitting the form which allowed me to validate each field and save to localStorage.

- The difference bewtween HTML5 validation and JavaScript validation is the default messages are generic and you cant express more specific rules or wording. Javascript validation lets you react in real time as the user types and write custom error messages and run custom checks HTML cant do.

- I used setItem() to save the username as a string and can be retrieved with getItem() and stays in the input field on page reloads and browser restarts.
localStorage is not good for saving passwords because its stored a text and can be accessed by anyone with access th the browser dev tools.

- One challenge I faced was checking password pattern validation at first i was using validity.pattern and had to look up the documentation and realized it was validity.patternMismatch. I also had to debug to figured out how to focus on the first invalid field. I saved my input fields in a variable as an array and used the find method to to find the first invalid field and focus on it.

- To ensure custom error messages were user friendly and displayed at the appropriate times I used conditional statements to display the correct messages depending on the condition.