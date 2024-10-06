"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Jared Dwyer
      Date: 10/5/24

      Filename: project06-03_2.js
*/

// link form
let billShipForm = document.forms.billShip;

// add useShip var and link event listener to copyShippingToBilling() function
let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling());

// Create copyShippingToBilling() function
function copyShippingToBilling() {
  if (useShip.checked) {

    billShipForm.elements.firstnameBill.value = billShipForm.elements.firstnameShip.value;
    billShipForm.elements.lastnameBill.value = billShipForm.elements.lastnameShip.value;
    billShipForm.elements.address1Bill.value = billShipForm.elements.address1Ship.value;
    billShipForm.elements.address2Bill.value = billShipForm.elements.address2Ship.value;
    billShipForm.elements.cityBill.value = billShipForm.elements.cityShip.value;
    billShipForm.elements.countryBill.value = billShipForm.elements.countryShip.value;
    billShipForm.elements.codeBill.value = billShipForm.elements.codeShip.value;
    billShipForm.stateBill.selectedIndex = billShipForm.stateShip.selectedIndex;
  }
}

//declare formElements var
let formElements = document.querySelectorAll("input[type='text']");

// Declare fieldCount var
let fieldCount = formElements.length;

// declare errorBox
let errorBox = document.getElementById("errorBox");

// Create for loop to check for invalid events
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Create showValidationError(evt) function
function showValidationError(evt) {
  evt.preventDefault();

  errorBox.textContent = "Complete all highlighted Fields";
}
