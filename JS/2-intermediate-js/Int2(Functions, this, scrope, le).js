/* Advanced Functions (arguments, 'this' scope, call, apply methods) */


// TODO: Question 1 arguments
// what is pseudo array
// how to convert arguments to real array

// TODO: Question 2 this
var u = {
  name: 'us',
  getName: function() {
    return this.name;
  }
}

var f = u.getName;
console.log(f()); 
// lost this
// how to fix it
// what if get name is arrow - will not fix the problem
// Practice: can you write an arrow function that will not get this point to window?

// TODO: Question 3 - arrow tricks
var a = () => this;
new a();
a.prototype;
a.length;
a.call({})

// TODO: Question 4 - this in classes
class Logger {
  constructor(A, B) {
    this.A = A;
    this.B = B;

    this.logA = () => {
      console.log(this.A);
    }
  }
};

Logger.prototype.logB = () => {
  console.log(this.B);
};

const logger = new Logger("A", "B");

logger.logA();
logger.logB();

// A, undefined

// TODO: Question 5 - mutation
var X = function () {
  console.log("X");
    X = function () {
      console.log("Y");
    };
};

var magic = X;
X();
X();

magic();
magic();
// X Y X X

// TODO: Question 6 - bind tricks
function a() {
  this.three = 'three';
  console.log(this);
}

const customThisOne = { one: 'one' };
const customThisTwo = { two: 'two' };

const bound = a.bind(customThisOne);
bound(); 
bound.call(customThisTwo);
bound.apply(customThisTwo);
new bound();

// {one: "one", three: "three"}
// {one: "one", three: "three"}
// {one: "one", three: "three"}
// {three: "three"}


// // TODO: two binds
// // TODO: call, apply, bind

// /* Lose this */
// var u = {
//   name: 'us',
//   getName: function() {
//     return this.name;
//   }
// }

// var f = u.getName;
// console.log(f()); 

// const mario = {
//   lives: 3,
//   log: () => {
//       console.log(this.lives);
//   }
// }
// mario.log();
// // window undefined


// /* Arguments mutation */
// /* Case1 */
// var myF = (arg) => {
//   arg = {b: 12};
// }
// var obj = {a: 10};
// myF(obj);
// console.log(obj);
// /* Arguments mutation */

// /* Case2 */
// var myF = (arg) => {
//   arg.b = 12;
// }
// var obj = {a: 10};
// myF(obj);
// console.log(obj);


// /* reference mutation in Function */
// var X = function () {
//   console.log("X");
//     X = function () {
//       console.log("Y");
//     };
// };

// var magic = X;
// X();
// X();

// magic();
// magic();
// // X Y X X

// /* EXERCISE  - we have function x*/
// let x = () => this;
// // make it return anything except window

// var obj = {};
// obj.f = x;
// obj.f(); // wrong

// x.call({a: 12}) // wrong

// function a() {
//   let x = () => console.log(this);
//   x();
// }
// a.call({a: 12})
//  // right!

// function b() {
//   function a() {
//     let x = () => console.log(this);
//     x();
//   }
//   a();
// }

// b.call({a: 12})
// // window


// let u = function() {
//   let x = () => console.log(this);
//   x();
// };
// let ui = new u();

// // right!

// // TODO: Partial application

// // Blic

// var a = ((x) => this);
// new a();
// a.prototype;
// a.length;
// a.call({})

// // What if someone add in array forEach or hasOwnProperty
// var arr = [1,2];
// arr.forEach = () => 'myF';
// Array.prototype.forEach.call(arguments, item => {});

// // another example
// var obj = { 
//   hasOwnProperty: () => 'MyF'
// }
// for(key in obj) {
//   if(obj.hasOwnProperty(key)) {
//       console.log(key);
//   }
// }

// // THIS in classes

// class Logger {
//   constructor(A, B) {
//     this.A = A;
//     this.B = B;

//     this.logA = () => {
//       console.log(this.A);
//     }
//   }
// };

// Logger.prototype.logB = () => {
//   console.log(this.B);
// };

// const logger = new Logger("A", "B");

// logger.logA();
// logger.logB();

// // A, undefined



// function a() {
//   this.three = 'three';
//   console.log(this);
// }

// const customThisOne = { one: 'one' };
// const customThisTwo = { two: 'two' };

// const bound = a.bind(customThisOne);
// bound(); 
// bound.call(customThisTwo);
// bound.apply(customThisTwo);
// new bound();

// // {one: "one", three: "three"}
// // {one: "one", three: "three"}
// // {one: "one", three: "three"}
// // {three: "three"}



// class Logger {
//   A = 1; // in instance
//   B = 2;
//   logb = () => {console.log(this.B)} // in instance
//   logC() { // in proto
//       console.log(this.A)
//   }
// constructor() {
//   this.logA = () => { // in instance
//     console.log(this.A);
//   }
// }
// };