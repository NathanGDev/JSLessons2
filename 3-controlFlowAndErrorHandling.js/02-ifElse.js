let weather = 50;

if(weather === 50){
    console.log ("no jacket needed!");
} else {
    console.log ("wear a jacket!")
}


/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = "Kaelon";

if(myName === "f"){
    console.log("Hello my name is" + " " + myName + ".");
} else {
    console.log("Hello, is your name " + myName + "?")
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


let name = 'zAchARy';

if(name[0] === name[0].toUpperCase()){
    let fixedString = name[0] + name.slice(1).toLowerCase;
    console.log(fixedString)
}else{
    let firstLetter = name[0].toUpperCase();
    let restOfName = name.slice(1).toLowerCase()
    let fullName = firstLetter + restOfName;
    console.log(fullName);
}