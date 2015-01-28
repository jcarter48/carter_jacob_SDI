/*
 *Jacob Carter
 *1/24/2015
 *SDI Campus
 *Multiple
 */

//alert("Testing");

//Prompt the user for width and height
//Calculate both the area and perimeter of a rectangle

//First setup area of rectangle function
function areaRect(w,h){
    //Area of rectangle is width*height
    var area = w*h;
    return area;

}

//Setup the perimeter function

function periRect(w,h) {
    //perimeter of a rectangle is 2*width + 2*height
    var perimeter = 2*Number(w) + 2*Number(h);
    //return the perimeter
    return perimeter;

}

//Prompt the user for width and height
var width = prompt("Please enter the width of your rectangle:");
//validate it
while((width==="") || isNaN(width)){
    //Re-prompt the user
    width = prompt("Please do not leave blank and only use numbers \nWhat is the width:")
    
}

var height = prompt("Please enter the height of your rectangle:");
//Validate
while((height==="") || isNaN(height)){
    height = prompt("Please do not leave blank and only type in numbers. \nWhat is the height:")

}

//Function call both functions........... ONE at a time
var resultArea = areaRect(width, height);
var resultPeri = periRect(width, height);

//report out to the user
console.log("The area of a rectangle is " + resultArea + " and the perimeter is " + resultPeri);

//Combined function to calculate the perimeter and the area
function combinedRect(w,h){
    //Calculate are
    var area = w*h;
    
    //Calculate perimeter
    var peri = 2*w + 2*h;
    
    //Return BOTH values!
    return[area, peri];
    
}

//Function call
var combinedResults = combinedRect(width, height);

console.log(combinedResults[0]);
console.log(combinedResults[1]);



