/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Jared Dwyer
      Date: 08/24/24

      Filename: project02-02_txt2.js
 */

function verifyFrom() {
// Declare variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

// Create a conditional to test all fields are inserted
(document.getElementById("name").value !== "") && (document.getElementById("email").value !== "") && (document.getElementById("phone").value !== "")
? window.alert("Thank you!") :
window.alert("Please fill in all fields.");
}

// Event Listener
document.getElementById("submit").onclick = verifyFrom;
