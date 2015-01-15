/*
 Jacob Carter
 SDI Campus
 1/13/2015
 Expressions Assignment
 */
//alert("Testing to see if it works");

//Create array
//First array for beanies and prompt for how many beanies the customer wants
var beanie = parseInt(prompt("Welcome to the hat website, everything is currently buy one get on free.\nHow many beanies do you want to purchase?"));
var beanieArray = [beanie, 0];
console.log(beanieArray[0] + beanieArray[1] + " Beanies");

//Second array for fedoras and prompt for how many fedoras the customer wants
var fedora = parseInt(prompt("How many fedoras do you want to purchase?"));
var fedoraArray = [fedora, 0];
console.log(fedoraArray[0] + fedoraArray[1] + " Fedoras");

//Third array for visors and prompt for how many visors the customer wants
var visor = parseInt(prompt("How many visors do you want to purchase?"));
var visorArray = [visor, 0];
console.log(visorArray[0] + visorArray[1] + " Visors");

//Assignment Operators
//Im not entirely sure how to tie these into the equation
//Sales tax
var counter = 100;
counter /=10;
console.log("Sales Tax: " + counter + "%");

//Price of each hat
counter *=1;
console.log("Cost of each hat: $" + counter);

//Calculating how many hats will be free
var freeHats = (beanie + fedora + visor) / 2;

//Price of each hat variable
var hatCost = 10;
//Sales tax variable
var saleTax = 10;

//Calculating how much sales tax will cost
var totalTax = (freeHats * hatCost) * saleTax/100;
console.log("Tax Cost: $" + totalTax);

//Calculating how much the total will cost
var totalCost = (freeHats * hatCost) +totalTax;
console.log("Total Cost: $" + totalCost);

//Calculating the total amount of hats being purchased.
var total = beanie + fedora + visor;
//Final Output String
console.log("You are purchasing " + beanie + " beanies, " + fedora + " fedoras, and " + visor + " visors which is a total of " + total + " hats. Your total comes out to $" + totalCost + ", and " + freeHats + " will be free.");

//Test 1, put in 4 beanies, 4 fedoras, and 4 visors. Got 12 hats, 6 hats for free and the total was $66.
//Test 2, put in 8 beanies, 6 fedoras, and 12 visors. Got 26 hats, 13 hats for free and the total was $143.
//Test 3, put in 2 beanies, 14 fedoras, and 20 visors. Got 36 hats, 18 hats for free and the total was $198.
