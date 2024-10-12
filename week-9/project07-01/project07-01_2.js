"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Jared Dwyer
      Date: 10/9/24

      Filename: project07-01_2.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
  // prevent browser from responding to submit event
   e.preventDefault()

 // Create variables
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   let regex1 = /[A-Z]/; // Contain at least one uppercase
   let regex2 = /\d/; // Contain at least one digit
   let regex3 = /[!\$#%]/; // Contain at least 1 special char

   // Verify Password
  if(pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters";
  } else if(!regex1.test(pwd)) {
    feedback.textContent = "Your password must include an uppercase letter.";
  } else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number.";
  } else if (!regex3.test(pwd)) {
    feedback.textContent = "Your password must include one of the following: !$#%";
  } else {
    signupForm.submit();
  }
});