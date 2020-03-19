let friend = "Tom";

switch (friend){
    case "Tom":
        console.log('Hey Tom, you wanna go rock climbing?');
        break;
    case "Kenn":
        console.log ('Hey kenn, want to play Cata?');
        break;
    case "carolyn":
        console.log('Hey Carolyn, when are we playing DnD?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do i know you?`);
}


/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let desert = "pie";

switch (desert) {
    case "pie":
        console.log('Pie, Pie, me oh my!');
        break;
    case "cake":
        console.log('Cake is great');
        break;
    case "Ice cream":
        console.log("i scream for ice cream!")
        break;
    default:
        console.log(`not on the menu!`)
}


// Multiple Conditions

let yep = -8;

switch ( true ) {
    case ( yep < 0 && yep > -10):
        console.log("Worked");
        break;
    case ( yep > 0 ):
        console.log('worked!');
        break;
    default:
        console.log('didn\'t work'); 
}