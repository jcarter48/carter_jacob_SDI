/*
Jacob Carter
SDI Campus
1/13/2015
Day 4 In Class Assignment
Arrays
*/

//alert("Testing to see if this is connected");

//Create a basic array
var avengersNames = ["Thor","Captain America","Iron Man"];

//Print it out to the console
console.log(avengersNames);

//Print out one specific item
console.log(avengersNames[1]);

//Switch a team member
avengersNames[2] = "Spiderman";

console.log(avengersNames);

//Add a team member
avengersNames[3] = "Black Widow";

//Print out roster
console.log(avengersNames);

//Use a variable as a index #
var num = 2;
console.log(avengersNames[num]);

//Length property
//Dot syntax - fancy for use a period
console.log(avengersNames.length);

//last index number is the Length - 1


//recruit a new team member
avengersNames[avengersNames.length] = "Powerman";
console.log(avengersNames);
