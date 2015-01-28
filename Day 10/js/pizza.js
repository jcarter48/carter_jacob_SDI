/*
 *Jacob Carter
 *1/27/2014
 *SDI Campus
 *Pizza Functions
 */

//alert("Testing");

//How much pizza cost per square inch and how much per slice

//Prompt the user for
//Radius of pizza
//Cost of pizza
//Number of slices per pizza

var pizzaRadius = prompt("What is the radius of your pizza?");
//Validate prompt
while(pizzaRadius === "" || isNaN(pizzaRadius)){
    //reprompt the user
    pizzaRadius = prompt("Please do not leave blank and only use numbers. \nWhat is the radius of your pizza?");    
}
do{
    //Prompt the user
    var pizzaCost = prompt("How much does your pizza cost in total?");
    
} while(pizzaCost === "" || isNaN(pizzaCost))

var pizzaSLices = prompt("How many slices are in your pizza?");
while(pizzaSLices === "" || isNaN(pizzaSLices)){
    pizzaSLices = prompt("Please do not leave blank and only use numbers. \nHow many slices are in your pizza?");
    
}

//function call that starts the lordFunction
var results = lordFunction(pizzaRadius, pizzaCost, pizzaSLices);

//console.log
console.log("Your pizza per sq in costs " + results[0]+" that comes out to " + results[1] + " per slice.");

//Create a  function that will start all the other functions
function lordFunction(radius, cost, slices) {
    //calculate the area
    var area = pizzaArea(radius);
    
    //calculate the cost per area
    var areaCost = pizzaSqInCost(cost, area);
    
    //caculate the price per slice
    var slicePrice = pricePerSlice(cost, slices);
    
    //return both the area cost and slice per price
    return [areaCost, slicePrice];
}




//Create a function that calculates the area of a pizza
function pizzaArea(r){
    //area PI = r*r
    var area = Math.PI * r * r;
    return area;
}

//Create a function that calculates the price per square inch of pizza
function pizzaSqInCost(price, area){
    // price / area
    var costPerIn = price/area;
    //Round to 2 decimal places
    costPerIn = costPerIn.toFixed(2);
    return costPerIn;

}

//Function that calculates the price per slice
function pricePerSlice(price, slice) {
    // price / slice
    var costPerSlice = price/slice;
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice;
}


