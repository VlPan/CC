/*
Variables, Values, Types (number, string, boolean, object, null, undefined, Symbol), declaration (var, let, const, hoisting, temporary dead zone)
*/
// why null and undefined - two types


var b = 10;
var a = b = 5;
// a = 5, b = 5 (assign order)

var a = {
  a
}
console.log(a.a); 
// undefined(a.a)

let a1 = {
  a1
}
// error

// TODO: 1 QUESTION:
// data types
// Reference vs primitive
// Pass by value vs pass by reference:
// !: simplified
function X(a) {
  a = 5;
  arguments[1] = 12;
  console.log(arguments)
}

var b = 25;
var c = 'c'
X(b, c);

console.log(b);
console.log(c);
// 25, c

function X(a) {
  a = {name: 'changed'};
  arguments[1].name = 'changed'
  console.log(arguments)
}

var b = {name: 'b'};
var c = {name: 'c'}
X(b, c);

console.log(b);
console.log(c);

// {name: "b"}
// {name: "changed"}



// TODO: 2 QUESTION - VARIABLES DECLARATION (1)
// !
var b = 5;
b.x = 10;
console.log(b.x);
// NOTHING
// WHY then the following example works ?
b.toString();
// WHAT IF i will do like this:
var b = 5;
b.toString();
b.x = 10;
// NOTHING
// can I somehow make it work?
// yes - define with new Number

// TODO: 3 QUESTION - VARIABLE DECLARATION (2)
// !
// What will the following code do?
function foo() {
  var a = b = 0;
}

foo();
console.log(b);
console.log(a);
// 0
// error
// Can you simplify the code to show what's really happening here:
// Right answer:
var a;
b = 0;
a = b;


// WHAT IF I make if instead of a function:
// WHAT IF I replace var with let??

// TODO: 4 QUESTION - number
0.1 + 0.2
// WHY

// !
// TODO: 5 QUESTION - string
var a = 'Bob';
a[0] = 'b';
console.log(a);
//Bob

// TODO: 6 QUESTION - boolean
if(new Boolean(false)) {
  console.log(true)
}
// true

// TODO: 7 QUESTION - hoisting, temporary dead zone and Closures
// !
var a = 10;

function b() {
  console.log(a);
  let a = 12;
}

// What if I will wrap console.log in function and change 63 and 62 lines
var a = 10;

function b() {
  let a = 12;
  logA();
}

function logA() {
  console.log(a);
}

// TODO: 8 QUESTION - variable types

// typeof vs indexOf

typeof typeof {};
typeof (() => {})() 
'123' instanceof String;  

// string
// undefined
// false

// TODO: ADDITIONAL
// 1) isNan

let n = new Number('abc') 
// what happend?
// Object with Nan
Number.isNaN('as12');
isNaN('as12');
// false - more reliable - no convertion
// true - try to convert string

// 2) why Symbol

var a = {};
var b = {};
a !== b;

var as = Symbol();
var bs = Symbol();

console.log(as !== bs);

var obj = {
  [a]: 12
}

// Symb interesting cases:
// how to make symb be equal
// Why do we need global symbols

var globalId = Symbol.for('id')
var another = Symbol.for('id')
var third = Symbol('id')

globalId === another // true
another === third // false

Symbol.keyFor(third)
// undefined


Symbol.keyFor(another)
"id"

// how to get value if we dont have reference anymore.

obj[Symbol.for('id')]

var obj = {
  [globalId]: 25
}

obj.globalId = 12;

for(key in obj) {
  console.log(key)
}
// no symbol in console.




/* ========================================================= */

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

12





if(new Boolean(false)) {
  console.log(true)
 }
 true


var x = 1;
if(false) {
    var x  = 10;
}

console.log(x)
1



// PLAYING

var a = {
  a
}
console.log(a.a); 
// undefined(a.a)

let a1 = {
  a1: a1
}

// error

// will for in iterate symbols?
// - no
// will for in iterate props?
// -it depends
// will for of interate symbols
// - we cannot interate objects ))


var a = {a: 1, b:2}

for([key, val] of Object.entries(a)) {
    console.log(key);
    console.log(val)
}

