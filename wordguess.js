"use strict";
//301251124, Harvend Tauries
const words = [
  "House",
  "Job",
  "Business",
  "Food",
  "Restaurant",
  "Telephone",
  "Address",
  "Money",
  "Friend",
  "Love",
  "Happy",
  "Angry",
  "Excited",
  "Tired",
]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are

//create an array that store the correct letters guessed
let CorrectArray = [];


function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters

  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    letterDiv.innerHTML =
      '<div class="wordBox-letter">*</div><div class="wordBox-line"></div>';
    letterDiv.className = "wordBox";
    wordDiv.appendChild(letterDiv);
  }
  //set the array length equal to currentword length
  CorrectArray.length = currentWord.length;

  //run the function everytime the user input
  inputBox.addEventListener("input", delayCheck);
}
//delaying for 300ms before running the check function
function delayCheck(){
  setTimeout(wordCheck, 300)
}


//word check function that check for user input
function wordCheck (){
  //make an array based on the current word 
  var wordArray = currentWord.split('');
  //make the input value to be upper case, and assign it to inpVal variable
  let inpVal = inputBox.value.toUpperCase(); 
  //iterate through the currentword
  for (let i = 0; i<currentWord.length;i++){

    //if the letter is guessed
    if (wordArray[i] == inpVal){
      //change the child value of worddiv of guessed letter to contain the correct letter and display it
      this.wordDiv.children[i].innerHTML = '<div class="wordBox-letter">'+inpVal+'</div><div class="wordBox-line"></div>';

      //add the value of the correct letter to the correct array to the specific index where it is the correct letter 
      CorrectArray[i] = inpVal;

      //make a correct word variable that join the array 
      let correctWord = CorrectArray.join('');
      //check if the words is the same as the current word
      if (currentWord == correctWord){
        //display this message when all the letters guessed correctly
        msgBox.innerHTML = 'You guessed the word ' + currentWord+ ' correctly!';

        //disable the inputbox
        inputBox.disabled = true;

      }
    }
  }
  //erase the user input 
  inputBox.value = "";
}
//301251124, Harvend Tauries

/* Event Listeners -- DO NOT REMOVE THIS */

startButton.addEventListener("click", startGame); // Starting game by clicking the start button
