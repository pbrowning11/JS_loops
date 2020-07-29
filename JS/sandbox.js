//for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['claire','parker','ted'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);    
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//****WHILE LOOPS*****
// const names = ['claire','parker','ted'];
// let i = 0;
// // while (i < 5) {
// //     console.log('in loop: ', i);
// //     i++;
// // }

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
//}

//*****DO WHILE LOOPS*****
// let i = 5;
// do {
//     console.log('val of i is: ', i);
//     i++;
// }
// while (i < 5)

// *****IF STATEMENTS******
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old')
// }

// const ninjas = ['claire','parker','ted','katie'];
// if(ninjas.length > 3) {
//     console.log("that's a lot of Ninjas!");
// }

const password = 'p@ss';

// if(password.length >= 12) {
//     console.log('super strong password!')
// } else if(password.length >= 8) {
//     console.log('that password is long enough')
// } else {
//     console.log('that password is not long enough, must be at least 8 letters')
//}

//logical operators - OR || and AND &&

// if(password.length >= 12 && password.includes('@')) {
//     console.log('mighty strong password');
// }else if (password.length >=8 || password.includes('@') && password.length > 5) {
//     console.log('password is long enough')
// } else {
//     console.log('not long enough')
// }

// logical NOT (!)
// let user = false;

// if(!user) {
//     console.log('you must be logged in to continue')
// }

// console.log(!true);
// console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

    
    if(scores[i] === 0) {
        continue;
    }

    console.log('you score: ', scores[i]);

    if(scores[i] === 100) {
        console.log('congrats, you got the top score');
        break;
    }
    
}