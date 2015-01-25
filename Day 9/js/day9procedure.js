/*
 *Jacob Carter
 *1/24/2015
 *SDI Campus
 *Procedures
 */

//alert("Testing");

//This is a basic or normal function
function calcArea(width, height){
    var area = width*height
    return area;

}

//function call
//create variable to CATCH the return value!
var results =calcArea(4,5);
console.log(results);

//This is a procedure
//It does not return a value
//list of steps to do
function calcAreaP(width, height) {
    
    //calculations
    var area = width * height;
    console.log(area);
    //It will not have a return
    
}

//function call for a procedure
calcAreaP(6,7);

alert("Test"); //procedure
var userInput = prompt("ask a question");
//prompting is a function

