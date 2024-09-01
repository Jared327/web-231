/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Jared Dwyer
      Date: 08/31/24

      Filename: project02-04_2.js
 */

  // Declare constant variables
  const CHICKEN_PRICE = 10.95; // Price of chicken
  const HALIBUT_PRICE = 13.95; // Price of halibut
  const BURGER_PRICE = 9.95; // Price of burger
  const SALMON_PRICE = 18.95; // Price of salmon
  const SALAD_PRICE = 7.95; // Price of salad
  const SALES_TAX = 0.07; // Sales tax value

  // set event handler to run calcTotal() function when elements are clicked
  document.getElementById("chicken").onchange = calcTotal;
  document.getElementById("halibut").onchange = calcTotal;
  document.getElementById("burger").onchange = calcTotal;
  document.getElementById("salmon").onchange = calcTotal;
  document.getElementById("salad").onchange = calcTotal;

  function calcTotal() {
    let cost = 0;

    // Set variables equal to checked property
    let buyChicken = document.getElementById("chicken").checked;
    let buyHalibut = document.getElementById("halibut").checked;
    let buyBurger = document.getElementById("burger").checked;
    let buySalmon = document.getElementById("salmon").checked;
    let buySalad = document.getElementById("salad").checked;

    // Compare the checked function to increase the price of item checked and 0 if false
    cost += buyChicken ? CHICKEN_PRICE : 0;
    cost += buyHalibut ? HALIBUT_PRICE : 0;
    cost += buyBurger ? BURGER_PRICE : 0;
    cost += buySalmon ? SALMON_PRICE : 0;
    cost += buySalad ? SALAD_PRICE : 0;

    // set foodTotal to the total cost of food checked
    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

    // set tax variable equal to cost * tax
    let tax = cost * SALES_TAX

    // set the foodTax to the value of tax
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    // set the totalCost equal to the cost + tax
    let totalCost = cost + tax;

    // set the totalBill equal to the totalCost value
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

}


// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
