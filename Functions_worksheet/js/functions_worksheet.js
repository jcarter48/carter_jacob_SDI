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





