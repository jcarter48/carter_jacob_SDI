/*
 *Jacob Carter
 *1/20/2015
 *SDI Campus
 *Validating Prompts
 */

//alert("Testing Scripts");

var userInput = prompt("Please type in your name:");

//Validating prompt with an conditional.
if (userInput === "") {
    //User did not type anything in
    userInput = prompt("Please do not leave blank, Type in your name?");
}

//Instead use a while loop
//Check the input multiples as many times as it takes

var firstName = prompt("Please type in your first name:");

while(firstName===""){
    //This means the user typed in nothing
    //Reprompt for first name
    firstName = prompt("Please type in your first name and DO NOT leave blank:");
}


//Test to see if it is a number
//isNaN() - tests what is inside of the (). Is it not a number?
//Numbers return false
//Everything else returns true

console.log(isNaN("Monkey")); //Returns true
console.log(isNaN(7)); //Returns false

//Lets ask the user their age
var age = prompt("Please enter your age:");

//Validate that the user typed in a number
while(isNaN(age) || age===""){
    //This code runs anytime that the age is not a number
    //Reprompt the user for a number
    age = prompt("Only use numbers, please enter your age:");
}

var choice = prompt("Please type in yes or no:");

//Convert to lower case
choice = choice.toLowerCase();

while(choice !="yes" && choice!="no"){
    choice = prompt("Please only type in yes or no!");
}








