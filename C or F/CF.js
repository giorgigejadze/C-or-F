const prompt = require('prompt-sync')();

let change = prompt("enter C to convert from Fahrenheit to Celsius or enter F to convert from Celsius to Fahrenheit.")
console.log("Your choice:" + change );
if(change == "c" || change == "C"){
  let fahrenheit = prompt("Please enter the temperature in Fahrenheit: ");
  console.log("The temperature in Celsius is " + (fahrenheit - 32) * 5 / 9);
}
if(change == "f" || change == "F"){
  let celsius = prompt("Please enter the temperature in celsius: ");
  let fahren = ((celsius * 9 / 5) + 32);
  console.log("The temperature in Fahrenheit is " + fahren );
}