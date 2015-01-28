/*
Jacob Carter
SDI Campus
1/20/2015
Beer Counting
 */

//alert("Testing String");

//99 Bottles of Beer on the wall

for(var i = 99; i>0; i--){
    
    //Add a check for the last round of beers
    if (i==1) {
    console.log(i + " bottles of beer on the wall. " + i + " Bottles of beer. You take one down and pass it around, no more bottles of beer on the wall. \nThe End!") 
    } else{
    console.log(i + " bottles of beer on the wall. " + i + " Bottles of beer. You take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    }
}