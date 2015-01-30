/*
 *Jacob Carter
 *SDI Campus
 *1/29/2015
 *Final Exam
 */

//alert("I hate exams");

//Prompt for cost of an item
var costItem = prompt("Please enter how much the item is that you want to purchase:");
//Validate that it is a number and not blank
while(isNaN(costItem) || costItem==="") {
    //Re-prompt the user for correct information
    costItem= prompt("Please do not leave blank and only user numbers. \nHow much is the item you want to purchase?");
}

//Prompt for a discount%
var discountPercent = prompt("Please enter how much the discount is for the item that you want to purchase: (0-100%):");
//Validate that it is a number and not blank
while(isNaN(discountPercent) || discountPercent==="") {
    //Re-prompt the user for correct information
    discountPercent = prompt("Please do not leave blank and only user numbers. \nHow much is the discount for the item you want to purchase?");
}

//Creating a normal function to calculate the price of a discounted item
//Setup the function
function discountItem(c,d) {
    //discount = original cost * (discount%/100)
    var discount = c * (d/100);
    var discountPrice = c - discount
    //return the final price of the discounted item
    return discountPrice;
}

//function call
var discount = discountItem(costItem,discountPercent);
console.log("The final cost of an item that costs $" + costItem + " with a discount of " + discountPercent + "% is $" + discount + ".");