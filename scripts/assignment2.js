// constants
const city = "San Diego"; 

//1. create the fn that convert C to F
function celsiusToFar(celsius){
    return (celsius * 9/5) + 32;
}

//2. create variable for each day
let mondayC = 30;
let tuesdayC = 40; 
let wednesdayC = 32;
let thursdayC = 38;
let fridayC = 25;
let saturdayC = 28;
let sundayC = 20;

//3. Call the fn for everyday
let mondayF = celsiusToFar(mondayC); 
let tuesdayF = celsiusToFar(tuesdayC);
let wednesdayF = celsiusToFar(wednesdayC);
let thursdayF = celsiusToFar(thursdayC);
let fridayF = celsiusToFar(fridayC);
let saturdayF = celsiusToFar(saturdayC);
let sundayF = celsiusToFar(sundayC);

//4. create the output
let output = "";

output += `<div class="weather-card">`;
output += `<h2>${city}☀️</h2>`;

output += `<p>Monday: ${mondayC}°C - ${mondayF.toFixed(1)}°F 🌡️</p>`;
output += `<p>Tuesday: ${tuesdayC}°C - ${tuesdayF.toFixed(1)}°F 🔥</p>`;
output += `<p>Wednesday: ${wednesdayC}°C - ${wednesdayF}°F 🥵 </p>`;
output += `<p>Thursday: ${thursdayC}°C - ${thursdayF}°F 😳</p>`;
output += `<p>Friday: ${fridayC}°C - ${fridayF}°F 😎</p>`;
output += `<p>Saturday: ${saturdayC}°C - ${saturdayF}°F 😏</p>`;
output += `<p>Sunday: ${sundayC}°C - ${sundayF}°F ⛅</p>`;
output += `</div>`;
document.getElementById("forecast").innerHTML= output;