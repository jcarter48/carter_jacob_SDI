/*
 *Jacob Carter
 *1/24/2015
 *SDI Campus
 *Random Numbers
 */

//alert("Testing");

//Create variables for min and max value
var min = prompt("Please enter a min value:");

//Validate our min prompt
while(isNaN(min) || min==="") {
    //Re-prompt the user for correct information
    min= prompt("Please do not leave blank and only user numbers. \nWhat is the min value:");
}

var max = prompt("Please enter a max value:");

//Validate our max prompt
while(isNaN(max) || max==="" || Number(min) > Number(max)) {
    //Re-prompt the user for correct information
    
    if (isNaN(max)) {
        max= prompt("Please only user numbers. \nWhat is the max value:");
    } else if (max === "") {
        max= prompt("Please do not leave blank and only user numbers. \nWhat is the max value:");
    } else {
        max= prompt("Max value must be greater than min value. \nWhat is the max value:");
    }
}

//Create function
function randomizer(mn, mx) {
    
    //generate our random number
    var randomNum = Math.round(Math.random() *(mx-mn) +Number(mn));
    
    //Return that random number to ur main code
    return randomNum;

}

//Function call BUT create a variable to catch the return value
var ranNum = randomizer(min, max);
console.log("Your random number between " + min + " and " + max + " is " + ranNum);

//15 random numbers between our min and max
//Create for loop
for(var i=0; i<15; i++){
    console.log(randomizer(min, max));
    
}







