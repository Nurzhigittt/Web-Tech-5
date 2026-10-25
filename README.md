# Web-Tech-5

**Student:** Duiset Nurzhigit  
**Group:** IT-2501  
**Course:** Web Technologies  
**Assignment:** #5

## Overview

This assignment focuses on JavaScript basics, including objects, variables, calculations, event handling, and DOM manipulation. The project demonstrates how JavaScript can store and update user information and dynamically change HTML elements.

## Task 1 — Creating a JavaScript Object

Created a `userProfile` object containing the user's name, birth year, developer status, and hobbies array.

The object demonstrates the use of different JavaScript data types:
- String
- Number
- Boolean
- Array

![Task 1](https://github.com/user-attachments/assets/58da065f-5c8a-4720-bace-e766b41d398a)

## Task 2 — Calculations and Output

Calculated the user's age using the current year and birth year. Also calculated the number of hobbies using the array's `length` property.

The results are displayed using JavaScript output.

![Task 2 - Code](https://github.com/user-attachments/assets/867ff0bc-51a2-4798-bc13-922eb3af75b9)

![Task 2 - Result](https://github.com/user-attachments/assets/0305dc94-bd1d-4118-afdd-79942a68371d)

## Task 3 — HTML Form

Created a form that allows the user to enter profile information.

The form includes:
- Username input
- Birth Year input
- Create/Update Profile button

The `required` attribute is used to prevent the form from being submitted when the required fields are empty.

![Task 3 - Form](https://github.com/user-attachments/assets/bd7a3bad-dc6d-4c07-bdf0-bc7b5abb4bea)

![Task 3 - Code](https://github.com/user-attachments/assets/661a3b5e-8d11-4464-9874-68b71a42466d)

## Task 4 — Event Handling and Profile Update

Added a `submit` event listener to the profile form.

When the form is submitted, JavaScript:
1. Prevents the page from reloading using `event.preventDefault()`.
2. Reads the username and birth year from the form.
3. Updates the `userProfile` object.
4. Recalculates the user's age.
5. Displays the updated profile statistics on the page.

![Task 4 - JavaScript Code](https://github.com/user-attachments/assets/ebc2decb-2fa4-494c-8331-b5b74effeeb8)

![Task 4 - Result](https://github.com/user-attachments/assets/5e859cb6-3035-4b89-9449-12bd54fbf0cf)

## Task 5 — DOM Manipulation

Created a hobbies list with two buttons: **Add Item** and **Remove Item**.

- **Add Item:** asks the user to enter a hobby and adds it to the list as a new `<li>` element.
- **Remove Item:** removes the last item from the list.
- JavaScript updates the DOM dynamically without reloading the page.

This task demonstrates the use of event listeners, `document.createElement()`, `appendChild()`, and `remove()`.

![Task 5 - Initial List](https://github.com/user-attachments/assets/32809777-af1d-41f7-b962-6a8467b5ea74)

![Task 5 - Adding an Item](https://github.com/user-attachments/assets/61e825c9-eb78-4e2e-a354-6e89750069a0)

![Task 5 - Removing an Item](https://github.com/user-attachments/assets/a715757f-55ed-41d6-8ba0-ba3cde482ee6)

## Technologies Used

- HTML5
- JavaScript
- DOM Manipulation
- Event Listeners
- GitHub

## Project Files

- `index.html` — page structure and profile form.
- `style.css` — page styling.
- `script.js` — profile object, calculations, event handling, and list manipulation.

## Conclusion

In this assignment, I practiced working with JavaScript objects and arrays, performing calculations, handling form submissions, and manipulating HTML elements through the DOM. I also learned how event listeners can make a webpage interactive without reloading it.


