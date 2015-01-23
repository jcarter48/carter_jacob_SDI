/*
 *Jacob Carter
 *1/22/2015
 *SDI Campus
 *Scope
 */

//alert("Testing");

//Variable Scope
//Variables inside & outside of a function

//Try not to use the same variable names
//However in large files this is going to be impossible

//variables created inside of functions can only be seen inside of those functions

//Create a variable for width in our MAIN code
var width = 5; //Scoped outside of the function - main code

//Create a function that calculates the perimeter of a rectangle
function calcPeri() {
    
    var width = 10; //Scoped to the function calcPeri
    console.log("Inside of the function the value of width is " + width);
    
    var height = 20;
    var perimeter = width*2 + height*2;
    console.log("Inside of function the perimeter is " + perimeter);
    

}

console.log("Before call " + width);

calcPeri();

console.log("After cal " + width);

//WILL NOT WORK!
//Can not access a variable declared inside of a function from your main code.
console.log("After call the perimeter is " + perimeter);