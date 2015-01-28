/*
Jacob Carter
SDI Campus
1/20/2015
While Loop
 */

//alert("JavaScript works!");

//Basic While Loop

//The while loop. loops through a block of code as long as a condition is true
/*
var i = 0;
while(condition){

Vode that runs while condition is true
incremental change to the counting variable -
OR infinite loop!!!

}

*/

var counter = 0; //Intializing counter

while (counter<=20) {
    //Code that will run as long as counter <20
    console.log(counter + "Somethings just never end");
    
    //Change for the counter variable
    counter++;
}

//Do While Loop
//The code will run AT LEAST once before checking the condition.

var i=20;

do{
    //This code will run before the condition is checked
    //It will also run as long as the condition is true
    console.log("The number is " + i);
    
    i++;
    
    
} while( i<10 );












