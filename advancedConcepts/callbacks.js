
let outer = cb => {
    console.log('before the call back')
    cb();
}

let inner = () => {
    console.log('i am the call back')
}

outer(inner);