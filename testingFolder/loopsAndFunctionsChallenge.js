for (let i = 0; i <= 10; i++) {   
    log(i)
}
function log(i){
    console.log(i);
    isEven(i)
}
function isEven(i){
    if(i % 2 == 0){
        console.log("this number is even");
    } else {
        console.log("this number is odd");
        }
     }