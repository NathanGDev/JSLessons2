// Boolean declaration 
var amIGood = false;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);
// amIGood - A Boolean variable to define whether you are naughty or nice.
// iCanHasGift - The promise itself.
// resolve(gift) - You made the nice list and received a Turbo-Man figure. The promise is resolved!
// reject(naughty) - Your poor behavior has landed you on the naughty list. The promise is rejected. Don't forget your coal!



// proper syntax for a Promise
// new Promise(/* executor */ function (resolve, reject) {...} ); 

// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(playDate) // chain here
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();

//    checkTwice - function that consumes the promise iCanHasGift
//    .then - used with function(fulfilled) {...} if promise is resolved.
//    .catch - used with function(error){...} if promise is rejected.
//    fulfilled - the value passed in resolve(). In our case, gift is the fulfilled value.
//    error - the value passed in reject(). In our case, naughty is the error value.


// 2nd promise
var playDate = function (gift) {
    var message = "Salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

    return Promise.resolve(message);
};