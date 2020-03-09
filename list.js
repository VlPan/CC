/*
Variables, Values, Types (number, string, boolean, object, null, undefined, Symbol), declaration (var, let, const, hoisting, temporary dead zone)
*/

// Conversion
console.log(3 > 2 > 1);
console.log(1 == '1');

/* Expressions, Operators, Statements (literals, conditions, loops), destructuring, string templating */
var a12 = 1 || 12;
console.log(a12);
var a12 = 1 && 12;
console.log(a12);


// hoisting Temp dead zone 
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