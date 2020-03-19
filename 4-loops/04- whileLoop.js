// while a condition is met

let x = true;
let i = 0;

while(true) {
    i++;
    if (i === 5){
        break;
    }
    console.log(i);
}

while (i < 10){
    let v = 8;

    while (true ) { 
        v--;
        if (v=== 0 ){
            break;
        }
        console.log(v);
    }

    console.log('testing');
    i++;
}

// do while - code with intent

do{ // if you want som,ething to happen at least once
    // code block here
} while (true)