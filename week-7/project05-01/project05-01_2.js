"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Jared Dwyer
      Date: 09/29/24

      Filename: project05-01_2.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
const questionList = document.querySelectorAll("div#quiz input");

// Add event handler to start quiz on click
startQuiz.onclick = function() {
  overlay.className = "showquiz";
  timeID = setInterval(countdown, 1000);
};

// Create countdown function to update clock
function countdown() {
  if(timeLeft === 0) {
    clearInterval(timeID);

    // Declare totalCorrect variable set to value of checkAnswers function
    let totalCorrect = checkAnswers();

    // Display pop-up window if all questions are correct
    if (totalCorrect === correctAnswers.length) {
      window.alert("Congratulations! You got 100%");
    } else {
      // Display a pop-up window to show wrong answers
      window.alert("You got " + (correctAnswers.length - totalCorrect) + " out of " + (correctAnswers.length) + " correct!");
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  } else {
    timeLeft--;
    quizClock.value = timeLeft;
  }
}


/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

