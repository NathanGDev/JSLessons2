
function Person(name, age){
    this.name = name;
    this.age = age;
}
 
let promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        if (true) {
            resolve('Success');
        } else {
            reject('Failure');
        }
    }, 3000 ); // this means the time!
});
// Call back functions ^^^
promise
    .then(result => {
        return result + ' this is the first .then method';
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

console.log('I should be last');
