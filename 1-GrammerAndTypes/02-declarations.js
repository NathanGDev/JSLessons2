//  Variables


// 
var a = 1;
    var   b     =       2;
//  (1)   (2)   (3)     (4)

/*
1 - var keyword (denotes a variable)
2 - variable name (cannot be a reserved word, or start with a number)
3 - assignment operator
4 - value put inside of the variable
*/

// variable declaration
var stream;

// Variable initialization
stream = true;

stream = false; // Re-initialization

//var, let, const

// If you don't use a keyword to declare a variable, it creates a global variable no matter where you declare it.


let today = 'great';
const efa = 'School';

today = 'mediocre';
//  const is best to let other developers know your intent. Make sure you always try your best to code with your intent very clear!

console.log(today, efa);