/*
 *Jacob Carter
 *1/22/2015
 *SDI Campus
 *Functions Worksheet
 */

//alert("Testing");

//calculating the circumference of a circle
//Create a function to calculate the circumference of a circle
//circumference = 2*pi*r
function circleCircum(radius){
    var circum = 2*Math.PI *radius;
    
    //return this area
    return circum;
    
}

//prompt user for the radius(the given)
var userRad = prompt("Please type in a radius:");

//validating if its a number/if its an empty string
while(isNaN(userRad) || userRad===""){
    userRad = prompt("Please only use numbers \nType in a radius:");
}

//parsing the variable
userRad = parseInt(userRad);

//variable to catch the results
var circumference = circleCircum(userRad);

//return:
console.log(circumference);

//result to print to the console
console.log("The circumference of your circle with a radius of " + userRad + " is " + circumference.toFixed(2));

//stung!
//calculating how many bee sings are needed to kill an animal in a function
//Create a function to calculate the how many bee stings it takes to kill an animal
//8.666666667*pounds=total bee stings to kill an animal
function beeStings(weight){
    var totalStings= 8.666666667*weight;
    
    //return this area
    return totalStings;
    
}

//prompt user for the how much the animal weighs in pounds(the given)
var petWeight = prompt("Please type in how much your pet weighs (in pounds):");

//validating if its a number/if its an empty string
while(isNaN(petWeight) || petWeight===""){
    petWeight = prompt("Please only use numbers \nType in how much your pet weighs (in pounds):");
}

//parsing the variable
petWeight = parseInt(petWeight);

//variable to catch the results
var stingsDeath = beeStings(petWeight);

//return:
console.log(stingsDeath);

//result to print to the console
console.log("It will take " + stingsDeath.toFixed(2) + " bee stings to kill your pet that weighs " + petWeight + " pounds");
