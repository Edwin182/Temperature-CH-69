// Ask the user for the temperature
let temperature = Number(prompt(" Enter a temperature: "))

// Ask for the scale
let scale = prompt(" Enter C for Celsius or F for Fahrenheit: " );

// Convert thr scale to uppercase
scale = scale.toUpperCase();

// Function to convert temperature
function convertTemperature(temp, scale){
    if (scale === "C"){
        return (temp * 9/5) +32; 
    } else if (scale === "F"){
        return (temp -32) * 5/9;
    } else {
        return " Invalid temperature scale. "
    }
}

// Call the function
let convertedTemperature = convertTemperature(temperature, scale);

// Find the results area
let results = document.getElementById("results");

//Display the results
if (scale === "C"){
    results.innerHTML = temperature + "°C = " + convertedTemperature.toFixed(1) + " °F ";
} else if (scale === "F"){
    results.innerHTML = temperature + "°F = " + convertedTemperature.toFixed(1) + "° C ";
} else {
    results.innerHTML = convertedTemperature;
}

let celsius; 
if (scale === "C"){
    celsius = temperature;
} else if (scale === "F"){
    celsius = converted;
}
if (celsius < 10){
    results.classList.add("blue");
} else if ( celsius <= 25){
    results.classList.add("green");
}else  {
    results.classList.add("red");
}