/*
Jacob Carter
SDI Campus
1/20/2015
For Loop
 */

//alert("JavaScript works!");

/*
for(initialization; Condition To Test; Increment of Change){
    
    Code to run as long as the condition is true
    
}
 */

for(var i=0; i<20; i+=4){
    //Code to run as long as i<20
    console.log("The value of i = " + i);
}


for(var k=0; k<5; k++){
    
    console.log("The value of k is " + k);
    //Add a break point
    //If k is eqaul to 3 then stop the code
    
    if (k===3) {
    
    console.log("I am done");
    break;
    }
    
}
