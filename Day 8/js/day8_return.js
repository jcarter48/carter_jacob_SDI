/*
 *Jacob Carter
 *1/22/2015
 *SDI Campus
 *Return Values
 */

//alert("Testing!");

//Create a function calculate the area of a rectangle
function calcArea(w,h) {
    //Calc Area
    var area = w*h;
    //console.log(area);
    //Return the area value to the main code
    //Does not return the variable iteself
    return area;

}


//function call

//Create a variable that will catch the return value

var returnedArea = calcArea(77,9);

//THIS DOES NOT WORK!!!
//console.log(area);
console.log(returnedArea);

//Create a function to calculate the area of a circle
//area = pi *r*r

function circleArea(radius){
    var area = Math.PI *radius*radius;
    
    //return this area
    return area;
    
}

//Function call
var results = circleArea(6);

console.log("The area of the circle is " + results.toFixed(2));

//Had two circle with the same radius. What is the total area?
var twoArea = results*2;

console.log("The area ofboth circles is " + twoArea.toFixed(2));


var results2 = circleArea(3);

console.log("The area of a circle with a radius of 3 is " + results2.toFixed(2));

//Prompt user for radius Calc area
var userRad = prompt("Please type in a radius:");

//Validate prompt
while(isNaN(userRad) || userRad===""){
    userRad = prompt("Please only use numbers \nType in a radius:");
}

//Parse the variable
userRad = parseInt(userRad);

//Create a variable to catch the results!
var userResults = circleArea(userRad);
console.log("The area of your circle with a radius of " + userRad + " is " + userResults.toFixed(2));



