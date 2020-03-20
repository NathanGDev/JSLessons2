let student = {
    name:'Nesken',
    awesome: true,
    degree: 'Python'
}

let students = ['Nesken', 'Amanda', 'Jeff', 'Dylan'];

// for (let i =0 ; students.length;i++){
//     let item = students[i];
//     // code goes here that goes in the 'for of loop'
// }

for(item of students) {
    console.log(students[item]);
}