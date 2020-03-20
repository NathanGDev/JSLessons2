function greeting(){
    console.log('Hello, friend');
}

let hal = function(){
    console.log("I'm sorry dave, but I cannot do that");
}

greeting();
greeting();

hal();

let arr = ["this", "is", "really", "cool"];


/*
CHALLENGE
***************

        - Given the array, create a function that lists out the values individually.
*/

// for of loop grabs the VALUE of the array
// for IN  loop grabs the indicies of the array

function yerr(){
    for (items in arr){
        console.log(arr[items]);
    }
}
yerr();

