/*
 Jacob Carter
 SDI Campus
 1/17/2015
 Day 6
 */
//alert("JavaScript works!");

//Is my steak done?

/*
 *120 and under is undercooked
 *120 - 124 - steak is rare
 *125 - 129 - steak is medium-rare
 *130 - 139 - steak is medium
 *140 - 149 - steak is medium-well
 *150 - 165 - steak is well done
 *165 is burnt to a crisp
 */

//var steakTemp = 135;
//var steakDone;
//
//if (steakTemp < 120) {
//    steakDone = "Not done";
//} else if (steakTemp <= 124) {
//    steakDone = "Rare";
//}   else if (steakTemp <= 129) {
//    steakDone = "Medium rare";
//} else if (steakTemp <= 139) {
//    steakDone = "Medium";
//} else if (steakTemp <= 149) {
//    steakDone = "Medium-well";
//} else if (steakTemp <= 165) {
//    steakDone = "Well done";
//} else {
//    steakDone = "Burnt to a crisp!";
//    }
//    
//console.log("The steak is " + steakDone);
//
//
//
////get our outside temperature
//var airTemp = parseInt(prompt("What's the temperature outside?", "65"));
//
////create the variable for the water temperature
//var waterTemp;
//
////conditional to see what we're doing
//if (airTemp >= 85) {
//    console.log("Let's go to the beach");
//    waterTemp = parseInt(prompt("What's the temperature of the water?", "75"));
//
//    if (waterTemp >= 75) {
//        console.log("Let's go in the water!");
//    } else {
//        console.log("Let's build a sandcastle");
//    }
//} else {
//    console.log("We're going to the movies");
//}
//

















//round()
//Noraml rounding .5 and up

var num1 = 9.544444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);

//floor(x)
//Returns x, rounded down to the nearest integer/ whole number
var num2 = 6.1;
console.log(num2);
num2 = Math.floor(num2);
console.log("Number down to the nearest integer/whole number is " + num2);

//ceil(x)
//Return x rounded up to the next integer/whole number
var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log("Number rounded up to the next interger/whole number is " + num3);

//random()
//Returns a number between 0 and 1
var num4 = Math.round(Math.random()*100);
console.log("A number between 0 and 1 is " + num4);

//Random number between two numbers
//Math.random() * (max-min) + min
var num5 = Math.round(Math.random() * (80 - 50) + 50);
console.log(num5);

var arrOfItems = ["Chips Ahoy","Oreos","E.l. Fudge","Thin Mints"]

var randomCookie = Math.floor(Math.random() * arrOfItems.length);

console.log("My current favorite is " + arrOfItems[randomCookie]);

console.log(Math.PI.toFixed(2));
console.log(Math.SQRT2);





