/*
 Jacob Carter
 SDI Campus
 1/17/2015
 Conditionals Assignment
 */
//alert("Testing to see if it works");

//Making a calculator to determine whether you go to a theme park, arcade, or stay home
//prompt for how much money I am willing to spend
var promptSpendingMoney = prompt("How much money are you willing to spend?");
//variable to store prompt information
var spendingMoney = promptSpendingMoney;
//console.log(spendingMoney);
//checking if the variable is empty
if (spendingMoney === " "){
 prompt("Please enter how much money you are willing to spend.");
}

//prompt for the temperature
var promptTemperature = prompt("What's the temperature today?");
//variable to store prompt information
var temperature = promptTemperature;
//console.log(temperature);
//checking if the variable is empty
if (temperature === " ") {
 prompt("Please enter today's temperature.");
}

//prompt for weather (clear skys, overcast, raining)
var promptForecast = prompt("What's the forecast today? (clear, overcast, or rain)");
//variable to store prompt information
var forecast = promptForecast;
//console.log(forecast);
//checking if the variable is empty
if (forecast === " ") {
 prompt("Please today's forecast.");
}

//variables for possible forecast
var clear = ("clear");
var overcast = ("overcast");
var rain = ("rain");

//variables for cost
var busTicket = 10;
var themeParkTicket = 90;
var arcadeTokens = 30;
var movieTicket = 10;

//calculating leftover money for all outcomes
var moneyThemePark = spendingMoney - (busTicket + themeParkTicket);
var moneyArcade = spendingMoney - (busTicket + arcadeTokens);
var moneyMovie = spendingMoney - (busTicket + movieTicket);

//conditionals to see whether you should go to a theme park, arcade, movie theater, or stay home
if (spendingMoney >= 100 && temperature >= 80 && forecast == clear) {
 console.log("Go to the theme park! It will cost you $" + busTicket + " for the bus ticket to get there, and $" + themeParkTicket + " for the theme park ticket! Leaving you with $" + moneyThemePark + ".");

} else if ((spendingMoney >= 40 && temperature >= 70) && (forecast == clear || forecast == overcast)) {
console.log("Go to the arcade! It will cost you $" + busTicket + " for the bus ticket to get there, and $" + arcadeTokens + " for the arcade tokens! Leaving you with $" + moneyArcade + ".");

} else if ((spendingMoney >= 20 && temperature >= 40) && (forecast == clear || forecast == overcast || forecast == rain)) {
 console.log("Go to the movie theater! It will cost you $" + busTicket + " for the bus ticket to get there, and $" + movieTicket + " for a movie ticket! Leaving you with $" + moneyMovie + ".");
}else {
 home = (spendingMoney < 20) ? "Stay at home because you don't have enough money or it's cold out, or both!" : (temperature < 40) ? "Stay at home because you don't have enough money or it's cold out, or both!" : "";
 console.log(home);
}




