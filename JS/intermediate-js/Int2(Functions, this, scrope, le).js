/* Advanced Functions (arguments, 'this' scope, call, apply methods) */

// TODO: two binds
// TODO: call, apply, bind

/* Lose this */
var u = {
  name: 'us',
  getName: function() {
    return this.name;
  }
}

var f = u.getName;
console.log(f()); 

const mario = {
  lives: 3,
  log: () => {
      console.log(this.lives);
  }
}
mario.log();
// window undefined


/* Arguments mutation */
/* Case1 */
var myF = (arg) => {
  arg = {b: 12};
}
var obj = {a: 10};
myF(obj);
console.log(obj);
/* Arguments mutation */

/* Case2 */
var myF = (arg) => {
  arg.b = 12;
}
var obj = {a: 10};
myF(obj);
console.log(obj);


/* reference mutation in Function */
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

/* EXERCISE  - we have function x*/
let x = () => this;
// make it return anything except window

var obj = {};
obj.f = x;
obj.f(); // wrong

x.call({a: 12}) // wrong

function a() {
  let x = () => console.log(this);
  x();
}
a.call({a: 12})
 // right!

function b() {
  function a() {
    let x = () => console.log(this);
    x();
  }
  a();
}

b.call({a: 12})
// window


let u = function() {
  let x = () => console.log(this);
  x();
};
let ui = new u();

// right!

// TODO: Partial application

// Blic

var a = ((x) => this);
new a();
a.prototype;
a.length;
a.call({})

// What if someone add in array forEach or hasOwnProperty
var arr = [1,2];
arr.forEach = () => 'myF';
Array.prototype.forEach.call(arguments, item => {});

// another example
var obj = { 
  hasOwnProperty: () => 'MyF'
}
for(key in obj) {
  if(obj.hasOwnProperty(key)) {
      console.log(key);
  }
}

// THIS in classes

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