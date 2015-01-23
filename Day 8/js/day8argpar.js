/*
 *Jacob Carter
 *1/22/2015
 *SDI Campus
 *Arguments and Parameters
 */

//alert("Testing!");

//Arguments - Goes in the function call.
//Parameters - Goes in the function definition.

//must have the same number of arguments and parameters........usually

//Create a function to calculate the area of a rectangle
function calcArea(w,h) { //Paramters go here
    
    //var width = 10;
    //var height = 20;
    //var area = width*height;
    
    var area = w*h;
    var results = w+h;
    console.log("The area is " + area);
    console.log(results);

}

//Function call
calcArea(10,20);
calcArea(5,4);


//Calculate Dog Years
//Put in human years and get out dog years
function dogYears(humanAge) { //Humanage Parameter
    //dog year = human*7
    var dogAge = humanAge*7;
    console.log("Dog age is " + dogAge);
    
}

//Function call with arguments
dogYears(19);

dogYears(6);

var userAge = prompt("How old are you ?");
dogYears( Number(userAge) );






