console.log(" This is on the console");

//1. declare the function (create the fn)
function login(){
    console.log("Welcome to the system");
}

//2. call the fn (code, console, user)
login();

// example 2.1 parameter
function logout(user){
    console.log(" Goodbye " + user+ " see you later ");
}

logout("Edwin");

//example 3. 2-3 parameter
function gradeExam(student,correctItems,points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
}

gradeExam("Edwin", 10,0.33);
gradeExam("Austin", 12, 0.33);

// Challenge 1

function doubleNumber(num){
    let total = num * 2;
    console.log(total);
}
doubleNumber(4);
doubleNumber(10);

//Example 4. return
function add(num1,num2){
    let total = num1 + num2;
    return total;
}
let x = add(4,6);
console.log(`the result is: ${x}`);