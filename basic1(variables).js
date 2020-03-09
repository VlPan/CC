/*
Variables, Values, Types (number, string, boolean, object, null, undefined, Symbol), declaration (var, let, const, hoisting, temporary dead zone)
*/

var a12 = 5;
var a12 =  new Number(5);
a12.b = 12;
console.log('a12.b', a12.b);

let a = 10;
function b() {
  console.log(a);
  var a = 12; // What if let
  console.log(a);
}

// What's difference?
a = 5;
var b = 5;

// What will be in console log
function foo() {
  var a = b = 0;
  return a;
}

foo();
console.log(b);
console.log(a);

// why?
1..toString();

// как округлить число
// toFixed


