let hi = () => {
    return "hi";
}

let hello = hi();

console.log(hello);

// NO NEED FOR PARENTHESIS IF THERE IS ONLY 1 PARAMETER
let capName = name => {
    let capitalizedName = "";

    for(let letter in name){
        if( letter == 0){
            capitalizedName += name[letter].toUpperCase();
        }else {
            capitalizedName += name[letter].toLowerCase();
        }
    }
    console.log(capitalizedName);
    return capitalizedName;
}

let myName = capName('kaELoN');

console.log(myName);

let getTip = amount => {
    amount *= 100;
    amount = Math.round(amount / 5) / 100;
    return amount;
};

let tipOfMyCoffee = getTip(4.59);
console.log(tipOfMyCoffee);

let tipCalc = bill => (bill * 0.2).toFixed(2);
let totalTip = tipCalc(19.72);
console.log(totalTip);
