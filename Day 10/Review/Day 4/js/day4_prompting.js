/*
 Jacob Carter
 SDI Campus
 1/13/2015
 Prompting
 */
//alert("Testing to see if it works");

//Ask user for input - prompt()
//Save the user's response - by creating a variable
var userInput = prompt("Enter your year of birth");

//validating if its a number/if its an empty string
while(isNaN(userInput) || userInput===""){
    userInput = prompt("Please only use numbers \nType in your year of birth:");
}
console.log("Your year of birth is " + userInput);

//Calculate the area of a rectangle
// area = length + width

//Create 2 variables and prompt the user for length and width
var length = prompt("Let's calculate the area of a rectangle. \nPlease enter in the length:");
while(isNaN(length) || length===""){
    length = prompt("Please only use numbers \nType in the length:");
}
var width = prompt("Please enter in width:");
while(isNaN(width) || width===""){
    width = prompt("Please only use numbers \nType in the width:");
}
//Calculate area
var areaRect = length * width;
console.log("The area of your rectangle with a length of " +length + " and a width of " + width + " is " + areaRect);




