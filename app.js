"use strict"

console.log("Does it actually works?");

// what is a fucntion
// function declaration

function sayHello(){
console.log("Hello world")
}
// invoke or call a function
sayHello();

// when you declare functio you have parameters that give names
//to the function inputs

function sayGoodBye (name){
    console.log("good bye = name");
}

// the data we pass into a function is call an argument
sayGoodBye("neo")

// Sam's comment:if we want to pass information back to the program we can use a return statement
// Imagine I give my barista a bunch of instructions on making my coffee. They take my arguments (money) and complete everything
//But I have not asked them to return anything, so I won't get my coffee back from them
//it's the value you receive back from the functions instructions.

function getFullName(firstName, secondName) {
    return firstName + " " + secondName;
}

let ada = getFullName("ada", "lovelace");
console.log("ada" = ada);

getFullName("sooty", "sweep");

console.log(getFullName("Jez", "Johns"));

function yesOrNoPrompt(promptInfo){
    let userInput = promp(promptInfo);
    if (userInput === "yes") {
        console.log("hurray");
} else if (userInput === "no") {
    console.log("nope");
} else if (userInput === "maybe") {
    console.log("make up your mind");
} else {
    console.log("ERROR: incorrect usage")
}
}

yesOrNoPrompt("well yes or no");
yesOrNoPrompt("how about yes or no");

myName("bungle");

const myName = function(name) {
};

myName ("Anna");

const myArr = ["bananas", "ham", "eggs"];

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

//other version for nymber and fruit
function guessNumber() {
    const correctNumber = 5;
    let attempts = 4;
    while (attempts > 0) {
      myGuessNumber = parseInt(prompt("guess a number between 0 and 9"));

      if (myGuessNumber === correctNumber) {
        alert("Congratulations! You guessed the correct number.");
        return;
      } else if (myGuessNumber > correctNumber && myGuessNumber !== 5) {
        alert("Too high, try again!");
      } else if (myGuessNumber < correctNumber && myGuessNumber !== 5) {
        alert("Too low, try again!");
      }
      attempts--;
    }
    alert(
      "You've run out of attempts. The correct answer was " +
        correctNumber +
        "."
    );
  }
  guessNumber();


  function guessFavoriteFruits() {
    const favoriteFruits = ["apple", "banana", "orange","watermelon"];
    const maxAttempts = 6;
    const guessedFruits = [];
  
    for (let i = 1; i <= maxAttempts; i++) {
      const guess = prompt("Guess one of my favorite fruits:");
  
      let isCorrectGuess = false;
      for (let j = 0; j < favoriteFruits.length; j++) {
        if (guess.toLowerCase() === favoriteFruits[j].toLowerCase()) {
          guessedFruits.push(guess);
          isCorrectGuess = true;
          break;
        }
      }
  
      if (isCorrectGuess) {
        alert("Correct! You guessed one of my favorite fruits.");
      } else {
        alert("Incorrect guess. Try again.");
      }
    }
  
    alert("Game over! You made " + guessedFruits.length + " correct guess(es). My favorite fruits are: " + favoriteFruits + "");//guessedFruits.join(", ") ;
  }
  
  guessFavoriteFruits();
  
  

  alert(
    "It is so nice to meet you " +
      user +
      " now you know that i have zero pets, my lucky number is 7 and you answered  "  +
      myLuckyNumber +
      " to believing in lucky numbers, you also know that I code 7 days a week, i will assume you code 7 days a week too!"
  );
}


