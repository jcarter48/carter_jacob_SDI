/*
 Jacob Carter
 SDI Campus
 1/13/2015
 Expressions Assignment
 */
//alert("Testing to see if it works");

//Create array
//Array for all hats
var hats = ["Beanies","Fedoras","Visors"];
//Output for hats array
console.log(hats);

//Prompt for beanie amount
var beanies = parseInt(prompt("Welcome to the hat website, everything is currently buy one get on free.\nHow many beanies do you want to purchase?"));
while(beanies === "" || isNaN(beanies)){
    beanies = prompt("Please do not leave blank and only use numbers. \nHow many beanies do you want to purchases?");
}

//Ouput for beanie amount
console.log(hats[0] + ":" + beanies);

//Prompt for fedora amount
var fedoras = parseInt(prompt("How many fedoras do you want to purchase?"));
while(fedoras === "" || isNaN(fedoras)){
    fedoras = prompt("Please do not leave blank and only use numbers. \nHow many fedoras do you want to purchases?");   
}
//Output for fedora amount
console.log(hats[1] + ":" + fedoras);

//Prompt for visor amount
var visors = parseInt(prompt("How many visors do you want to purchase?"));
while(visors === "" || isNaN(visors)){
    visors = prompt("Please do not leave blank and only use numbers. \nHow many visors do you want to purchases?");
    
}
//Output for visor amount
console.log(hats[2] + ":" + visors);

//Assignment Operators
//Sales tax
var counter = 100;
counter /=10;
console.log("Sales Tax: " + counter + "%");

//Price of each hat
counter *=1;
console.log("Cost of each hat: $" + counter);

//Calculating how many hats will be free
var freeHats = (beanies + fedoras + visors) / 2;

//Price of each hat variable
var hatCost = 10;
//Sales tax variable
var saleTax = 10;

//Calculating how much sales tax will cost
var totalTax = (freeHats * hatCost) * (saleTax/100);
console.log("Tax Cost: $" + totalTax);

//Calculating how much the total will cost
var totalCost = (freeHats * hatCost) +totalTax;
console.log("Total Cost: $" + totalCost);

//Calculating the total amount of hats being purchased.
var total = beanies + fedoras + visors;
//Final Output String
console.log("You are purchasing " + beanies + " " + hats[0] + " " + fedoras + " " + hats[1] + " and " + visors + " " + hats[2] + " which is a total of " + total + " hats. Your total comes out to $" + totalCost + ", and " + freeHats + " will be free.");

//Test 1, put in 2 Beanies, 2 Fedoras, and 2 Visors. Got 6 hats, 3 hats for free and the total was $66.
//Test 2, put in 10 Beanies, 10 Fedoras, and 10 Visors. Got 30 hats, 15 hats for free and the total was $165.
//Test 3, put in 100 Beanies, 100 Fedoras, and 100 Visors. Got 300 hats, 150 hats for free and the total was $1650.
