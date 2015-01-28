/*
 *Jacob Carter
 *1/20/2015
 *SDI Campus
 *While Loop
 */

//alert("Testing Scripts");

//Lets ask the user their age
var laps = prompt("Please enter how many laps a racecar can do before stopping:");

//Validate that the user typed in a number
while(isNaN(laps) || laps===""){
    //This code runs anytime that the age is not a number
    //Reprompt the user for a number
    laps = prompt("Only use numbers, please enter how many laps a racercar do do before stopping:");
}

var counter = laps; //counter

while (counter<=50) {
    //Code that will run as long as counter <50
    console.log("Racecars can drive for " + counter + " laps before making a pit stop");
    
    //Change for the counter variable
    counter++;
}
