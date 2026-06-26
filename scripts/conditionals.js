console.log("conditionals");

// if statements condition (y/n)
// -----syntax------
// if(condition){
//  code to be executed if the condition is true
//  }

let result = 150;

if(result >= 80){
    console.log("You passed the exam!");
}

//Conditionals operators 
//  > greater than
//  < less than
//  >= greter than or equal
//  <= less than or equal
//  == equal
//  != not equal

if(result == 50){
    console.log(" You failed the exam!")
}

let result2 = 90;
if(result == result2);
    console.log(" The values are the same!");

// case 1: 5==5 -. true
// case 2: 5=="5" -> true
// == will check the value only and it does not matter the data type
// case 3: 5==="5" -> error
// will check both value and data type

if(result >= 80){
    console.log(" You passed the exam!");
    if(result >= 100){
        console.log(" You obtained the top grade on this!");
        if(result >100){
            console.log(` It's impossible to the the following score: ${result}`);
        }
    }
}

// if-else statements conditions
//if(condition){
//code to execute if the condition it's met
//}else{
// code to execute if condition it's not met
//}

let points = 30;
if(points >60){
    console.log("You won");
} else{
    console.log("You lose");
}

let waterTemp = 195;
if(waterTemp > 100){
    console.log("The water is boling!");
} else {
    console.log("The water is not boling");
}

// else-if conditions
// if(condition){
//  code to execute if condition is met
//} else if(condition2){
//  code to execute if condition2 it's met
//} else {
// code to execute if condition it's not met
//}

let age = 64;

if(age <13){
    console.log("You are a child");
} else if(age < 21){
    console.log("You are a teenager");
} else if(age < 64){
    console.log("You are an adult");
} else{
    console.log("You are a senior");
}

//Challenge 1
//Scenario:
// You are designing a tiny systems for self-driving bikes
// Instructions:
// Ask for the traffic light color
// ("green, "yellow", or "red") and tell the
// bike what to do (Go, slow down, stop)

let light = "yellow";

if(light === "green"){
    console.log(" Go ");
} else if(light === "yellow"){
    console.log(" Slow down! ");
} else if(light === "red"){
    console.log(" Stop! ");
} else{
    console.log(" That color is not a valid one! ");
}

function accessManager(){
    let userType = "editor";
    if(userType == "admin"){
        console.log(" Full access! ");
    } else if(userType == "editor"){
        console.log("Access granted but limited actions");
        console.log(" Welcome editor ");
    } else {
        console.error(" You don't have access!");
    }
}