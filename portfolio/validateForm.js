"use strict";

/* Validate the form inputs used in contact.html */

/*
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateTextArea()
      Validates that the user has entered text into the text area
      
   validateEmail()
      Validates that the user has entered a valid and legitimate email
      
   validateNumber()
      Validates that the user has entered a valid and legitimate phone number
      THIS FUNCTION IS NOT REQUIRED BECAUSE THE PHONE NUMBER IS NOT SET AS REQUIRED IN HTML
      
   validateLastName()
      Validates that the user has entered a last name
      
   validateFirstName()
      Validates that the user has specified the name on the credit card
*/

/* <!-- This fulfills requirement 3.2.6 C)--> */
window.addEventListener("load", function() {
    document.getElementById("subButton").onclick = runSubmit;
    document.getElementById("firstName").oninput = validateFirstName;
    document.getElementById("lastName").oninput = validateLastName;  
    document.getElementById("phone").oninput = validateNumber;
    document.getElementById("email").oninput = validateEmail;
    document.getElementById("commBox").oninput = validateTextArea;   
});

function runSubmit() {
    validateFirstName();
    validateLastName();
    validateNumber();
    validateEmail();
    validateTextArea();
}

/* <!-- This fulfills requirement 3.2.6 B)--> */
function validateFirstName() {
    var firstName = document.getElementById("firstName");
    if (firstName.validity.valueMissing) {
       firstName.setCustomValidity("Enter your first name");
    } else {
       firstName.setCustomValidity("");
    }
}

function validateLastName() {
    var lastName = document.getElementById("lastName");
    if (lastName.validity.valueMissing) {
       lastName.setCustomValidity("Enter your last name");
    } else {
       lastName.setCustomValidity("");
    }
}

function validateNumber() {
    var number = document.getElementById("phone");
    if (number.validity.valueMissing) {
       number.setCustomValidity("Enter your phone number");
    } 
    else if (number.validity.patternMismatch) {
      number.setCustomValidity("Enter a valid phone number")
   }else {
       number.setCustomValidity("");
    }
}

function validateEmail() {
    var email = document.getElementById("email");
    if (email.validity.valueMissing) {
       email.setCustomValidity("Enter your email");
    } else {
       email.setCustomValidity("");
    }
}

function validateTextArea() {
    var comment = document.getElementById("commBox");
    if (comment.validity.valueMissing) {
       comment.setCustomValidity("Fill out this field");
    } else {
       comment.setCustomValidity("");
    }
}
