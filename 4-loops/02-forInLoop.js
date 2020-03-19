// KEY VALUE PAIRS

let student = { 
    name: "Peter",
    awesome: true,
    degree: "javascript",
    week: 1
}



for( item in student) { 
    console.log('Key =>', item)
    console.log('Value =>', student[item])
}



let catArray = ['saimese', 'tabby', 'feral', 'sphynx', 'lazy'];

for (cat in catArray) {
    console.log(catArray[cat]);
}
//  a for-in loop allows you to grasb the keys in an object, or the index in an array

// write a for-in loop that capitalizes the first letter of a students name

let studentName = 'dOllPH'
let newName = '';

// for (letter in studentName){
//     let firstLetter = studentName[0].toUpperCase();
//     let restName = studentName.slice(1).toLowercase();
//     console.log(firstLetter + restName);
// }

for (char in studentName) {
    if (char > 0) {
        newName = newName + studentName[char].toLowerCase();
    } else{
        newName = newName + studentName[char].toUpperCase();
    }
}
console.log(newName);