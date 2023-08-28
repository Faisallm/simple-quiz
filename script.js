const prompt = require("prompt-sync")()   // loading module(to grab user input)

// collecting user's input
// a const is a variable whose value cannot change
// const value = prompt("Enter something: ");

// // error: assignment to constant variable.
// value = 1


// let value = prompt("Enter something: ");

// // error: assignment to constant variable.
// value = 1
let correctAnwers = 0
const totalQuestions = 3


console.log("Welcome to the Computer Hardware Quiz!")

const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer1 = "CPU"

if(answer1.toLowerCase() === correctAnswer1.toLowerCase()) {
    console.log("You got it correct")
    correctAnwers++
} else {
    console.log("You got it wrong...")
}


const answer2 = prompt("Which is better a 3090ti or a 4060? ");
const correctAnswer2 = "3090ti"

if(answer2.toLowerCase() === correctAnswer2.toLowerCase()) {
    console.log("You got it correct")
    correctAnwers++
} else {
    console.log("You got it wrong...")
}


const answer3 = prompt("What is my name? ");
const correctAnswer3 = "Faisal"

if(answer3.toLowerCase() === correctAnswer3.toLowerCase()) {
    console.log("You got it correct")
    correctAnwers++
} else {
    console.log("You got it wrong...")
}

console.log("You got", correctAnwers, "questions correct!")
console.log("You score", (correctAnwers / totalQuestions)*100, "perfect!")