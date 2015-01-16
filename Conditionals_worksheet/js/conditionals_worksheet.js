/*
 Jacob Carter
 SDI Campus
 1/15/2015
 Conditionals Worksheet
 */
//alert("Testing to see if it works");
/*Hot Enough?

//Is it hot enough to go to the beach?

var temp = 80;

//if the temperature is less than 75..

if(temp < 75){

//if its less than 75

 console.log(“We will go to the movies.”);

else{

//if it’s greater or equal to 75

  console.log(“We will go to the beach!”);

 }
*/
//Last Chance for Gas!
//Gas efficiency of the car (in mpg)
var mpg = 30;
//Gauge reading of the gas tank (in %)
var gasGauge =50;
//Car’s gas tank capacity (in gallons)
var gasTank = 20;

//Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
//How many gallons of gas is left?
var gallonsLeft = (gasGauge/100) * gasTank;
console.log(gallonsLeft);

//How many miles can we drive with the gas we have left?
var milesEmpty = (gallonsLeft * mpg);
console.log(milesEmpty);

//Don't have to stop if we can go for 200miles with the gas we have left.
//If there is greater than 200mpg till empty
if(milesEmpty >= 200) {
 console.log("Yes, you can make it without stopping for gas!");

//If less than 200mpg left
}else{
  console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
 }

//Check the login
//Username entered by user
var username = prompt("Please enter your username:");
console.log(username);
//Password entered by user
var password = prompt("Please enter your password:");
//Correct username
var correctUsername = ("jacob");
//Correct password
var correctPassword = ("carter");
//Invalid username
var wrongUsername =
//Invalid password
//hooters48
//If correct username & password
if(correctUsername && correctPassword) {
 console.log("Welcome, " + correctUsername + "!");

//If the username doesn't match
} else { (username )
console.log("User not found. Try again.");

 }