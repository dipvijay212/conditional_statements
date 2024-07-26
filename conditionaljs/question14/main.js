
function calculateBmi(weight, height) {
    let bmi = weight / (height ** 2);
    return bmi;
}

function categorizeBmi(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

let weight = parseFloat(prompt("Enter your weight in kg: "));
let height = parseFloat(prompt("Enter your height in meters: "));

let bmi = calculateBmi(weight, height);
let category = categorizeBmi(bmi);

alert(`Your BMI is: ${bmi.toFixed(2)}`);
alert(`Your category is: ${category}`);