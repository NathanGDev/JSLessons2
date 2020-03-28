// async function myfn(){
//     let x = await Math.random()
// }
//  a way to write an async function

let myFn = async () => {
    return "Hello  there";
}
// let w = myFn()
//     .then(data => {return data});
//     console.log(w)


async function foo(){
    try{
        let response = await fetch("https://random.dog/woof.json");
        let json = await response.json();
        console.log(json);
        } catch(err) {
            console.error(err);
        }
    }

foo();

//  promise resolvers are .thens or .catch
//  relate code to real world learning
