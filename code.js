// 1
function sum(x, y) {
  result = x + y;
  return result;
}

sum(1,2)
console.log(result);

// 2
function foo() {
  var a = b = 0;
  return a;
}

foo();

console.log(b);
console.log(a);

// 3
// What's difference?
a = 5;
var b = 5;

// 4
// Way to Get global object
'use strict'
function getGlobal(global) {
  return global;
}

console.log(getGlobal(this));
console.log(this);

// 5
// hoisting Temp dead zone 
let a = 10;
function b() {
  console.log(a);
  var a = 12; // What if let
  console.log(a);
}

b();

// 6
// live collection perfomance. What's wrong with this code?
for (let index = 0; index < document.links.length; index++) {
  const element = document.links[index];
  element.style.color = 'red';
}

// 7
// Why has Own preperties in forIn
Array.prototype.clone = function() {
  console.log('myClone');
}
let arr = [1,2,3];
for(let key in arr) {
  console.log(arr[key]);
}
// how to not show myClone (hasOwnProperties and init it correctly by propertyDescriptor)

// 8 
// what's the difference?
// console.log(parseInt('08 hello'));
// console.log(parseInt('08 hello', 10));
// console.log(Number('08'));
// console.log(Number('08 hello'));

// 9
// Literal vs constructor
var o = new Object(1);
console.log(o.toFixed(2));
var o2 = {};
console.log(o2.toFixed(2));

console.log(Number.prototype.__proto__ === Object.prototype); // the answer why

