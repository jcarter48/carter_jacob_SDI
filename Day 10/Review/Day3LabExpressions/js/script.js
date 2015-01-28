/*
 Jacob Carter
 1/10/2015
 Day 3 Lab Expressions
 */

//Slice of Pie part 1
//Givens
//Number of slices per pizza
var slices = 16;
//Number of people
var people = 20;
//Number of pizzas
var pizzas = 8;

/*
Multiply the amount of pizzas by the amount of slices then divide that by the number of people
var totalSlices = pizzas * slices;
console.log(totalSlices);

//Result Variable
console.log("There are" +" " + totalSlices + " " + "total slices.");

This isn't needed but I didn't want to delete it.

*/

//Divide the number of people and the total amount of slices
var slicePerPerson = pizzas * slices / people;
//Result Variable
console.log(slicePerPerson);
//Result Format
console.log("Each person ate" + " " + slicePerPerson + " " + "slices of pizza at the party.");

//Slice of Pie part 2
//Calculate how many slices sparky gets using modulo
var sparkySlices = pizzas * slices % people;
//Result Variable
console.log(sparkySlices);
//Result Format
console.log("Sparky got" + " " + sparkySlices + " " + "slices to eat.");

//Average Shopping Bill
//Givens
//Week 1 Grocery Bill
var week1 = 100;
//Week 2 Grocery Bill
var week2 = 110;
//Week 3 Grocery Bill
var week3 = 120;
//Week 4 Grocery Bill
var week4 = 130;
//Week 5 Grocery Bill
var week5 = 140;

//Result Variable
//Total Amount Spent on Groceries
var totalAmount = week1 + week2 + week3 +week4 + week5;
console.log(totalAmount);
//Average weekly grocery spending
var average = totalAmount/5;
console.log(average);
//Result Format
console.log("You have spent a total	of $" + totalAmount + " " + "on groceries over 5 weeks." + " " + "That is an average of $" + average + " " + "per week." );

//Discounts
//Givens
//Original price
var ogPrice = 10;
//Discount percentage
var dcPercentage = 50;
//Description of an item
var gum = "bulk pack of gum";
//Sales tax percentage
var saleTax = 50/100;

//Tax
var tax = ogPrice * (dcPercentage/100) * saleTax;
console.log(tax);

//Result Variables
//With Tax
var withTax = ogPrice * (dcPercentage/100) + tax;
console.log(withTax);
//Without tax
var withoutTax = ogPrice * (dcPercentage/100);
console.log(withoutTax);

//Result Format
console.log("Your" + " " + gum + " " + "was originally $" + ogPrice + " " + "but after a" + " " + dcPercentage + "% discount, it is now $" + withoutTax + " " + "and $" + withTax + " " + "with tax.");






