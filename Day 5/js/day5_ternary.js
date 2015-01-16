/*
 Jacob Carter
 SDI Campus
 1/15/2015
 Ternary
 */
//alert("Testing to see if it works");


//If gpa is greater than 2.0 you can graduate!

// (condition to test) ? true code: false code;

//Noraml if else statement
var gpa = 3.8;

if(gpa>2.0){

 console.log("Congrats! You can graduate!");

} else {

 console.log("Sorry, your gpa is too low.");

}

//Ternary way
(gpa>2.0) ? console.log("Congrats! You can graduate!") : console.log("Sorry, your gpa is too low.");



//Decide what book a kid will read
var age = 16;
var book;

//If the child is under 10 - they read Green Eggs & Ham
//Otherwise they can read The Time Machine
//If the kid is older than 15 then they read Twilight

book = (age<10) ? "Green Eggs & Ham" : "The Time Machine";

var book2 = (age<10) ? "Green Eggs & Ham" : (age>15) ? "The Time Machine" : "Twilight" ;

console.log("You should read " + book);
console.log(book2);
