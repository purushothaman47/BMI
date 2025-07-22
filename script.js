function calculateBMI(){

        let weightinput = prompt("Enter your weight in kg");
let heightinput = prompt("Enter your height in cm");

let weight = parseFloat(weightinput);
let heightcm = parseFloat(heightinput); 

let height = heightcm /100;

let bmi = weight/(height*height);

document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}

