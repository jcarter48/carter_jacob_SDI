/*
 *Jacob Carter
 *1/24/2015
 *SDI Campus
 *Functions Assignment
 */

//alert("Testing");
//Creating an anon function to calculate how much rent will be for each person
//Create an anonymous function that calc the area of a triangle
var rentEach = function(r, p){
    var each = r/p;
    return each;
};

//Prompt for total rent
var totalRent = prompt("Please enter how much your total rent:");
//Validate our total rentprompt
while(isNaN(totalRent) || totalRent==="") {
    //Re-prompt the user for correct information
    totalRent= prompt("Please do not leave blank and only user numbers. \nHow much is your total rent:");
}

//Prompt for how many people live in the apartment
var totalPeople = prompt("Please enter how many people do you live with, including yourself:");
//Validate our total rentprompt
while(isNaN(totalPeople) || totalPeople==="") {
    //Re-prompt the user for correct information
    totalPeople= prompt("Please do not leave blank and only user numbers. \nHow many people do you live with, including yourself:");
}

//Function call anon function
var rentPerPerson = rentEach(totalRent,totalPeople);
console.log("Your total rent is $" + totalRent + " , and you live with " + totalPeople + " people, so rent will cost $" + rentPerPerson + " per person.");

//Creating a normal function to find the area of a trapezoid
//Setup the area function
function trapArea(a,b,h) {
    //perimeter of a rectangle is 2*width + 2*height
    var area = ((a+b)/2)*h;
    //return the perimeter
    return area;
}



