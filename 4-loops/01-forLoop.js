for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Challenge : use a for loop to count to 20 by 2's

for (let i = 0; i <= 20; i+=2 ) {
    console.log(i);
}

// Challenge: Use a for loop to go through a  name and display each letter individual.

let name = "Ada";

for (let i = 0; i < name.length; (i++)){
    console.log(name[i]);
}

/*

Challenge

Make a for loop where you add up all the numbers from 1 to 50.
answer 1275.

*/
let sum = 0;

for (let i = 0; i <= 50; i++){
    sum = sum + 1;
}
console.log(sum);