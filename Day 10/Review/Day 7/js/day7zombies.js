/*
Jacob Carter
SDI Campus
1/20/2015
Zombie Attack
 */

//alert("Testing Script");

//Zombie Attack
//There is a zombie at Full Sail
//It can bite 4 people a day and turn them into zombies
//The COC wants to know how many zombies there will be in 8 days

var numZombies = 1; //How many zombies do we have
var numBites = 4; //Numbers bites per zombie per day
var days = 8; //Number of days
var daysTakes = 0;

/*for(var i=1; i<=days; i++) {
    //How many zombies get made AND when do they go bite people
    //They get bitten and the next day they can bite
    
    //New zombies made everyday
    var newZombies = numBites * numZombies;
    
    //Update the total number of zombies at the end of the day
    numZombies += newZombies;
    
    //Report at the end of the day
    console.log("There are " + numZombies + " zombies at the end of day #" + i + "!");
}
*/

//How many days will it take to reach a million zombies?

while(numZombies<=1000000){
    
    //New Zombies
    var newZombies = numZombies * numBites;
    
    //How many zombies we have?
    numZombies += newZombies;
    
    //Add 1 to the total number of days it takes
    daysTakes++;
    
    
    
}

console.log("It will take " + daysTakes + " days for one million zombies.");