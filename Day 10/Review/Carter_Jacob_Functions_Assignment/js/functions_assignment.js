/*
 *Jacob Carter
 *1/24/2015
 *SDI Campus
 *Functions Assignment
 */

//alert("Testing");





//Creating an anon function to calculate how much rent will be for each person
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

/*
 *Test 1, put in 100 for totalRent, and 4 for totalPeople. Got $25 per person.
 *Test 2, put in 900 for totalRent, and 3 for totalPeople. Got $300 per person.
 *Test 3, put in 8550 for totalRent, and 12 for totalPeople. Got $712.5 per person.
 */





//Creating a normal function to find the area of a trapezoid
//Setup the area function
function trapArea(a,b,h) {
    //perimeter of a rectangle is 2*width + 2*height
    var area = ((Number(a)+Number(b))/2)*Number(h);
    //return the perimeter
    return area;
}

//Prompt for a base
var baseA = prompt("Please enter base A:");
//Validate our base A prompt
while(isNaN(baseA) || baseA==="") {
    //Re-prompt the user for correct information
    baseA= prompt("Please do not leave blank and only user numbers. \nEnter base A:");
}

//Prompt for b base
var baseB = prompt("Please enter base B:");
//Validate our base A prompt
while(isNaN(baseB) || baseB==="") {
    //Re-prompt the user for correct information
    baseB= prompt("Please do not leave blank and only user numbers. \nEnter base B:");
}

//Prompt for h height
var height = prompt("Please enter the height:");
//Validate our H hieght prompt
while(isNaN(height) || height==="") {
    //Re-prompt the user for correct information
    height= prompt("Please do not leave blank and only user numbers. \nEnter the height:");
}

//Function call area of a trapezoidfunction
var trapezoidArea = trapArea(baseA,baseB,height);
console.log("The area of a trapezoid with A's base being " + baseA + ", B's base being " + baseB + ", and with the height of " + height + " is " + trapezoidArea + ".");

/*
 *Test 1 put in 4 for a, 10 for b, 8 for height. Got 56 for the area
 *Test 2 put in 9 for a, 7 for b, 18 for height. Got 144 for the area
 *Test 3 put in 2 for a, 26 for b, 45 for height. Got 630 for the area.
 */


