/*
 Jacob Carter
 SDI Campus
 1/15/2015
 Conditionals
 */

//alert("Testing to see if it works");

//Basic Conditional Statement

//Create a boolean variable to test
var oldEnough = true;

//If the child is old enough then print to the console, You Can Ride!

/*
Basic Structure of if statement

if(condition to test){
Code to run if the condition is true
}

*/

if(oldEnough){
 //Code inside of {} will run if the test is true
 //This code will be skipped if test is false
 console.log("You can ride the coaster!");
}

console.log("What comes after the if statement");

//Relational Expression

//If the kid is over 48" tall, then he can ride
var kidHeight = 30;

//Create variable for minimum height
var minHeight = 48;

if(kidHeight > minHeight){
 console.log("You are tall enough to ride!");
} else{
 //This code will run if the test is false!
 console.log("Sorry you are too short!");
}

