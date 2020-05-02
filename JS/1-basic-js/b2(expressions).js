/* Expressions, Operators, Statements (literals, conditions, loops), destructuring, string templating */

// TODO: 1 QUESTION Expression:
var a = 1 || 12;
console.log(a);
a = 1 && 12;
console.log(a);

// 1, 12
// WHAT if replace 1 -> 0
// 12, 0

// TODO: 2 QUESTION Operators order

console.log(12 + 1 * -1 + 12);
// 23
console.log(3 + 3 + !3 * 3)
// 6
console.log(3 > 2 > 1);
// false

// TODO: 3 QUESTION LOOPS

// for while do while
// break;
// continue;

// for loop syntax play with some advanced examples

for(var a,b,c = 12; (() => c < 24)(); console.log('hello world')) {
  c++;
  console.log(c);
}

// TODO: 4 destructuring
// 1) 
var params = {
  a: 1, b: 2, c: 3
}
var {a: b, b, c: d} = params;
// How many vars declared?
// 2 b = 2; d = 3

// 2) 
// get inner c value
var a = {
  a:1,
  c:2,
  x: {
    c: 12, 
  }
}

// var {x: {c}} = a;

// what if I want outer c which is 2?
// var {c: b, x: {c}} = a;
// or 
// var {c, x: {c: b}} = a;

// TODO: 5 template syntax
/* Template function */
var name = 'Brandon';
var age = 26;
 
function greet(words, ...rest){
  console.log(words);
  console.log(rest);
}
greet`I'm ${name}. I'm ${age} years old.`;

// words I'm . I'm years old
// rest - our encapsulated values

// TODO: 6 ADDITIONAL:
// 1) switch
let key = '10'
switch (key) {
  case 10:
    console.log('1');
    break;

  default:
    console.log('2');
    break;
}

// 2) increment
a = 1; 
console.log(a++);

// 1