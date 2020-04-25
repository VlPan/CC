/*
Variables, Values, Types (number, string, boolean, object, null, undefined, Symbol), declaration (var, let, const, hoisting, temporary dead zone)
*/

/* Hosting, Temporary Dead Zones*/
var a = 10;

function b() {
  console.log(a);
  let a = 12;
}

/* Closures mixed with Hosting */

var a = 10;

function b() {
  let a = 12;
  logA();
}

function logA() {
  console.log(a);
}

/* Variables Declaration */
var a = new Number(5);
var b = 5;
b.x = 10;
a.x = 12;

console.log(b.x);
console.log(a);


/* Variables Declaration-2 */
a = 5;
var b = 5;
let c = 5;
// What's difference?

/* Variables Declaration-3 */
function foo() {
  var a = b = 0;
  return a;
}

foo();
console.log(b);
console.log(a);


if (true) {
  var a = b = 0;
}

console.log(b);
console.log(a);


/* Variables methods */
1. toString();


typeof typeof foo;
typeof (() => {})()


// TODO: preventExtension, seal, freeze and their IS

let n = new Number('abc') 
// what happend?
// Object with Nan
Number.isNaN('as12');
isNaN('as12');
// false
// true

/* keys, hasOwnProperty with enumerable */

// var b =  Object.create(null) vs var b = {};

// Symbols interesting cases
// object keys - string or symbol, nothing else
// Symbol can not be converted to string unpure,  but you can convert via .toString

/* 1 */
// what if new symbol
var id = Symbol('id');
user = {
  [id]: 123
}

for (key in user) {
  console.log(user[key]);
}
// no loop

// Object.assign for Symbols will copy symbols too
var obj = Object.assign({}, user);

/* 2 */

var v1 = Symbol('id');
var v2 = Symbol('id');
console.log(v1 === v2);

// not equal

/* 3 */

var globalId = Symbol.for('id')
var another = Symbol.for('id')

console.log(globalId === another);

// equal

console.log(Symbol.keyFor(another));

// Object.getOwnPropertySymbols(obj)
// Reflect.ownKeys(obj)

// Well-known Symbols: 

// Symbol.iterator
// Symbol.toPrimitive
// Symbol.asyncIterator
// Symbol.hasInstance

/* 4 */
var ls = Symbol('123');
Symbol.keyFor(ls);

// undefined


var a = {b: 1}
function X(arg) {
  arg = {1: 2};
}

X(a);
console.log(a);

// {b:1}

var a = 12
function X(arg) {
  arg = 10
}

X(a);
console.log(a);

// 12


// Why symbol
var a = {x: 1}
var b = {x: 1}

a !== b;

var obj = {
 [a]: 12,
}

var a = Symbol();


if(new Boolean(false)) {
  console.log(true)
 }
 // true


var x = 1;
if(false) {
    var x  = 10;
}

console.log(x)
// 1