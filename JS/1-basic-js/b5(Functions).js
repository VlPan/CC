/* Functions (create, invoke, arrow functions, rest operator, default parameters) */

// TODO: Question 1 Create

a();
b();
c();

let a = function c() {console.log('c');}
function b() {console.log('b');}

// a,c can not be called
// c will not be defined after 10 line

// TODO: Function return, length, body, type
// ways to invoke the function
function X (a,b,c) {
    console.log(X);
    console.log(X.length);
    console.log(typeof X);
}

// IIFE syntax and why we need them

// TODO: Question 3 Arrow functions and default parameters
// regular vs common
var x = ((a = {a:2}) => ({a}))();
// {"a":{"a":2}}

// TODO: Question 4 rest and pseudo args
// rest vs arguments

// TODO: Question 5 Important concepts

var b = 15;
function change(arg) {
    arg = 12
}

change(b);
console.log(b);
// 15

var myObj = {1:2};
change(myObj);
console.log(myObj);
// {1:2}

// TODO: ADDITIONAL How new keyword works

// // TODO: new Function(); - tricks
// // TODO: arrow vs regular
// // TODO: arguments
// // TODO: ...rest
// // TODO: Default parameters
// // TODO: Default functions 

// /* Default parameter */
// //1
// var x = ((a = {a:2}) => ({a}))();
// // {"a":{"a":2}}



// // c is not defined
// // b hosted
// // a is not hosted


// var b = 15;
// function change(arg) {
//     arg = 12
// }

// change(b);
// console.log(b);


// var myObj = {1:2};
// change(myObj);
// console.log(myObj);

// // new Function
// // - global scope
// // - global this

// function X (a,b,c) {
//     console.log(X);
//     console.log(X.length);
//     console.log(typeof X);
// }


// // what if i forget new
// function X (a,b,c) {
//     if(!(this instanceof X)) {
//         return new X();
//     }
// }

// X could be replaced with arguments callee