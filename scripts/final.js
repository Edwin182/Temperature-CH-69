// create the variables (arrays)

let temps = [];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let converted = [];
let total = 0;

let hottestTemp = null;
let coldestTemp = null;
let hottestDay = "";
let coldestDay = "";


function convertTemp(){
    console.log("Converting...");

    let scale = prompt(" Enter C for Celsius or F for Fahrenheit: ");
    scale = scale.toUpperCase();
    console.log(scale);

    for(let i=0;i<7;i++){
        let temp = parseFloat(prompt(" Enter the temperature for " + weekDays[i]));
        console.log(temp);
        let convertedTemp;
        if(scale === "C"){
            convertedTemp = celsiusToFar(temp);
        } else {
            convertedTemp = fahrenheitToCel(temp);
        }
        temps.push(temp);
        converted.push(convertedTemp);

        total += temp;

        if(hottestTemp === null || temp > hottestTemp){
            hottestTemp = temp;
            hottestDay = weekDays[i];
        }

        if(coldestTemp === null || temp < coldestTemp){
            coldestTemp = temp;
            coldestDay = weekDays[i];
        }
    }

    let average = total / 7;
    let output = "<h2> Weekly Weather Report</h2>";

    for (let i = 0;i<7;i++){
        let label = "";
        let colorClass = "";

        if(scale === "C"){
            if(temps[i] > 25){
                label = "Hot";
                colorClass = "red";
            } else if(temps[i] < 10){
                label = "Cold";
                colorClass = "blue";
            } else{
                label = "Comfortable";
                colorClass = "green"
            }
        } else {
            if(temps[i] > 77){
                label = "Hot";
                colorClass = "red"
            } else if(temps[i] < 50){
                label = "Cold";
                colorClass = "blue";
            } else{
                label = "Comfortable";
                colorClass = "green"
            }
        }
        
        output += "<p>";
        output += "<strong>" + weekDays[i] + "</strong><br>";
        output += "Original: " + temps[i] + "°" + scale + "<br>";
        output += "Converted: " + converted[i].toFixed(1) + "°"; 

        if (scale === "C"){
            output += "F<br>";
        } else {
            output += "C<br>";
        }
        output += "Condition : <span class='" +colorClass + "'>" + label + "</span>";
        output += "</p>";

    }

        output += "<p><strong>Average Temperature:</strong> " + average.toFixed(1) + "°" + scale + "</p>";
        output += "<p><strong>Hottest Day:</strong> " + hottestDay + " with " + hottestTemp + "°" + scale + "</p>";
        output += "<p><strong>Coldest Day:</strong> " + coldestDay + " with " + coldestTemp + "°" + scale + "</p>";

        document.getElementById("temperatures").innerHTML = output;
    }

    
function celsiusToFar(celsius){
    return (celsius * 9/5) + 32;
}
function fahrenheitToCel(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

        