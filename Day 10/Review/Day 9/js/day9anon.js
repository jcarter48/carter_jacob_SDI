/*
 *Jacob Carter
 *1/24/2015
 *SDI Campus
 *Anonymous
 */

//alert("Testing");

//Anonymous Functions
//Widely used in JS and jQuery
//Important in Object Oriented Program
//Can be used interchangably with normal function, if done right

//Very quick and easy
//Save on memory

/*
 Basic structure of anon function
 var functionName = function(parameters){
    Code to run goes here.
 }
 */
//function call BEFORE the normal function is defined
var results2 = triArea(6,7);
console.log("Before the function results2 is " + results2);

//Function call before the anon function is defined
/*
THIS DOES NOT WORK!
FUNCTION CALL HAS TO COME AFTER ANON FUNCTION DEFINITION!
var results4 = triaAneaAnon(7,8);
console.log("Before the anon function results4 is " + results4);
*/  

///Create a NORMAL function for area of triangle
function triArea(b,h){
    //Area = 1/2 * base * height
    var area = .5 * b * h;
    return area;
    
}

//Function Call
var results1 = triArea(5,6);
console.log(results1);

//Create an anonymous function that calc the area of a triangle
var triaAneaAnon = function(b, h){
    var area = .5 * b*h;
    return area;
};

//Function call after defined of anon function
var results3 = triaAneaAnon(4,5);
console.log("Results of anonymous function after defined is " + results3);
