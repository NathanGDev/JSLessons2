// Boolean
let on = true;
console.log(on);

let off = false;
console.log(off);

// null
//again, null is to show your intent and use logic checks. 

let empty = null;

// Undefined
// Undefined is the default empty value
let walmart = undefined;
// same as let walmart;

// numbers
let degrees = 90;

let precise = 999999999999999;
console.log(precise);

let toomuch = 9999999999999999n;
console.log(toomuch);

let notQuite = 0.2 + 0.1;
console.log(notQuite)

console.log(typeof toomuch);

// String
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks` ;

let first = 1050 + 100;
//  string concatenation
let second = '1050' + '100';

console.log(first, second);

let third = 1050 + '100';

console.log(third);
console.log(typeof third);

// Object
let firstObject = {
    integer: 50,
    stringOne: "hello world",
    isRemote: true,
};

console.log(firstObject);
console.log(typeof firstObject);

// Array

let firstArray = ["Spanish", "English", "Dutch", "French"];

let alternateForm = {
    0: "Spanish",
    1: "English",
    2: "Dutch",
    3: "French",

};

console.log(firstArray[0]);
console.log(alternateForm[3]);
