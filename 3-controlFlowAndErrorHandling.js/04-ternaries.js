let x = 8;

// x > 0 ? console.log('positive') : console.log('negative or zero')

x > 0
    ? console.log('positive')
    : console.log('negative or zero')


if (x === 0){
    console.log('hello');
} else if (x < 0 ){
    console.log('hi');
} else  {
    console.log('goodbye')
}

x === 0
    ? console.log('hello')
        : x < 0
            ? console.log ('hi')
            : console.log ( 'goodbye');

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

// let age = 15;

// if ( age <= 17 ) {
//     console.log("sorry, you're too young to do anything")
// } else if (age <= 20) {
//     console.log ('yay yo you can vote!') 
// } else if (age <= 24) {
//     console.log("yay you can drink")
// } else {
//     console.log("Yay! You can  rent a car");
// } 

let age = 20;

age = 17
    ? console.log("sorry, you're too young to do anything")
    : age <= 20
            ? console.log("yay! you can vote")
            : age <= 24
                ? console.log('yay! you can drink!')
                : console.log('Yay! you can rent a car!');