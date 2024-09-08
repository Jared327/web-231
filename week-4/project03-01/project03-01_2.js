/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Jared Dwyer
      Date: 09/07/24

      Filename: project03-01_2.js
*/
// Declare variable
let menuItems = document.getElementsByClassName("menuItem");

// Create for loop for contents of menu item collection
for (let i = 0; i < menuItems.length; i++) {
  // Add event listener to menuItems to run calcTotal when clicked
  menuItems[i].addEventListener("click", calcTotal);
}

// Create calcTotal function with orderTotal variable set to 0
function calcTotal() {
  let orderTotal = 0;

// Create a for loop that loops through menuItems contents
 for (i = 0; i < 5; i++) {

 // if statement to decide item is checked
  if (menuItems[i].checked) {

   // increase orderTotal value by menuItem value
   orderTotal += (Number(menuItems[i].value) * 1);
  }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
};


 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }