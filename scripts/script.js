//console.log(10 + 2)
//console.log(10 + 2)

// This is a comment, help us add some notes or define something
// This does not get executed to the browser

console.log("Variables!")
//keybord nameVar = value; 
//var, let, const

//String Variable
var firstName = "Edwin"; 
var thisIsMyFirstVariableCalledSomething = 10;
console.log(firstName);
console.log(thisIsMyFirstVariableCalledSomething);

//First we declare and initialize the variable

let number = 10;
//Then we change the value
//we CANNOT have variables with the same name
number = 5;

//Boolean
let isStudent = false;

//display the values on the console
console.log("My name is: " + firstName + " I'm " + number + " years old "); 

//Aritmetic Operations [+-*/]
let num1 = 5;
let num2 = 3;

let sum = num1 + num2; 
let sub = num1 - num2; 
let mul = num1 * num2;
let div = num1 / num2;

console.log("the sum is: " + sum); 
console.log("the sub is: " + sub); 
console.log("the mul is: " + mul); 
console.log("the div is: " + div); 

// Constants (const)
const weekDays = 7;
console.log(weekDays); 
//Error: the constant never changes. Is always the same
//weekDays = 5; (this will trigger an error on the console because we already declared the weekDays to be 7)

//Prompt function (allows us to ask data from the browser)
word = prompt("type something")
console.log(word)