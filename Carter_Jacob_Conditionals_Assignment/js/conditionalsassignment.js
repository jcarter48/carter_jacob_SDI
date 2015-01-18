/*
 Jacob Carter
 SDI Campus
 1/17/2015
 Conditionals Assignment
 */
//alert("Testing to see if it works");

//Making a calculator to determine whether you go to a theme park, arcade, or stay home
//prompt for how much money I am willing to spend
var spendingMoney = prompt("How much money are you willing to spend?");
//prompt for the temperature
var temperature = prompt("What's the temperature today?");
//prompt for weather (clear skys, overcast, raining)
var forecast = prompt("What's the forecast today? (clear, overcast, or rain)");

//array for forecast
var forecastArray = [clear,overcast,rain];
//variables for possible forecast
var clear = ("clear");
var overcast = ("overcast");
var rain = ("rain");

//conditional to see whether you should go to a theme park, arcade, or stay home
if (spendingMoney >= 100 && temperature >= 80 && forecast == forecastArray[0]) {
 console.log("Go to the theme park!");

} else if (spendingMoney >= 30 && temperature >= 60 && forecast == forecastArray[0,1]) {
console.log("Go to the arcade");

} else if (spendingMoney < 30 && temperature <=40 && forecast == forecastArray[0,1,2]) {
 console.log("Stay home!");
}


