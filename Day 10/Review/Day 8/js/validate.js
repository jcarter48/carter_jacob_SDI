/*
 *Jacob Carter
 *1/22/2015
 *SDI Campus
 *Validate Prompts Take 2
 */
//alert("Testing");

//User leaves it blank?
//Returns an empty text string ""
var movie = prompt("What is your favorite movie?");

while(movie==="") {
    //User left the prompt blank
    //Reprompt the user
    movie=prompt("Please don't leave this blank. \n What is your favorite movie?");
    
}

//Test to see if the user typed in a number or not
//isNaN() - Its not a number
//Text strings return true
//Numbers return false

var ticketPrice = prompt("How much is a movie ticket?");
while(isNaN(ticketPrice)) {
    //User did not type in a number
    //Reprompt for number
    ticketPrice = prompt("Please type in a number \nWhat is the cost of a movie ticket?");
}

//User both validations in the same while loop
var age = prompt("To get into R rated movies, we must know your age. \nHow old are you?");

//Validate that the prompt is not blank AND is a number
while (isNaN(age) || age==="") {
    //The user typed in a text string or left it blank
    console.log("Inside of while loop");
    
    //Test to see what went wrong
    if (isNaN(age)) {
        age=prompt("Please only use numbers.\nHow old are you?");
    } else {
        age=prompt("Please do not leave blank!\nWhat is your age?");
    }
    
}

//Validate something specific
var movieGenre = prompt("Do you want to see an action movie or comedy?");

//Validate that the user typed in one of the 2 genres.

//Change to lower case
movieGenre = movieGenre.toLowerCase();

while (movieGenre !="action" && movieGenre !="comedy") {
    
    movieGenre = prompt("Only type in comedy or action.\nWhat genre do you want to watch?");
}






