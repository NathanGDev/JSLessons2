let myList = ['thing1', 'thing2', 'thing3', [1,3, 4]];

myList[3][1].keys1;

let colors = []
//  ADDING TO THE ENDD
console.log(colors);
colors.push('Blue');
console.log(colors);
colors.push('Purple');
console.log(colors);

// REMOVING FROM THE END
let removed = colors.pop()
console.log(colors);
console.log(removed)

let orders = ['Mary', 'Tim', 'Greg', 'Dolph', 'Ashley'];
            //(1)(2)    (3)
orders.splice(1, 1, 'Donovan');
orders.splice(3, 0, 'Adam');
console.log(orders);

/*
1- Where its located/ where to start

2- how many to remove

3- value to add

*/


let shifted = orders.shift();
console.log(orders);
console.log(shifted)

orders.unshift();
console.log(orders)

let foods = ['Pecan pie', 'Shrimp', 'Quesadilla', 'HotDog', 'Chana Masala'];

// for (let i = 0; i < foods.length; i++ ){
//     console.log(foods[i])
// }
// for (i in foods){
//     console.log(foods[i]);
// }
// for (food of foods){
//     console.log(food);
// }

foods.forEach(food => console.log(food));

foods.forEach( (x, y, z) => console.log(x, y, z) );

console.log(typeof foods)
console.log(foods instanceof Array) // asking the question of what the instance of said item is.

console.log(typeof 3 == "number")



function poo(){
    
    let yoyo = [1, 2, 3, 4, 5];
    console.log(yoyo);
        if(yoyo instanceof Array){
            console.log(213123789432718943261784362987156378291);
        let new_yoyo = yoyo.reverse();
            new_yoyo.forEach(new_yoyo => console.log(new_yoyo));
    }
}
poo();


