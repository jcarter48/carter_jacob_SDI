/*
 Jacob Carter
 SDI Campus
 1/15/2015
 Conditionals Worksheet
 */
//alert("Testing to see if it works");

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
//Password entered by user
var password = prompt("Please enter your password:");
//Correct username
var correctUsername = ("jacob");
//Correct password
var correctPassword = ("carter");

//If correct username & password
if(username == correctUsername && password == correctPassword) {
 console.log("Welcome, " + correctUsername + "!");

//If the username doesn't match
} else if (username != correctUsername) {
 console.log("User not found. Try again.");

//If the password doesn't match
} else { (password != correctPassword)
 console.log("Password does not match our records.");
 }




//Tire Pressure I
//Array for all tire psi
var tirePSI = [38,38,40,40];

//If both front tires are the same psi, and if both back tires are the same psi
if(tirePSI[0] == tirePSI[1] && tirePSI[2] == tirePSI[3]) {
 console.log("The tires pass spec!");

 //If a front tires aren't the same psi, or if the back tires aren't the same psi
} else { (tirePSI[0] != tirePSI[1] && tirePSI[2] != tirePSI[3])
 console.log("Get your tires checked out!");
 }
