console.log("Loops");

for(let i=0;i<4;i++){
    document.write("My for is working?");
}

for(let i=1;i<=10;i++){
    document.write(`<p>${i}</p>`);
}

for(let i=0;i<=100;i+=10){
    document.write(`<p>${i}</p>`);
}

for(let i=0;i<=20;i+=2){
    document.write(`<p>${i}</p>`);
}
for(let i=1;i<=20;i++){
    document.write(`<p>${i} * ${2}</p>`);
}

const num = 2;
for(let i=1;i<=10;i++){
    document.write(`<p>${i} * ${num} = ${i*num}</p>`);
}

let temp1 =30; 
let temp2 =32; 
let temp3 =31; 
let temp4 =29; 
let temp5 =32; 
let temp6 =30; 
let temp7 =31;

// temp of 7 days using an array
// positions 0, 1, 2, 3, 4, 5 what goes on [0,1,2 and so on]
let temps = [30,32,31,29,32,30,31];
//console.log(temps[0]);
//console.log(temps[1]);
//console.log(temps[2]);
//console.log(temps[3]);

// create a loop to travel the array

for (let i=0;i<=6; i++){
    console.log(`Day ${i+1} = ${temps[i]}`);
}