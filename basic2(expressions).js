/* Expressions, Operators, Statements (literals, conditions, loops), destructuring, string templating */

var a = 1 || 12;
console.log(a);
var a = 1 && 12;
console.log(a);

// break;
// continue;
console.log(3 > 2 > 1);

var params = {
  a: 1, b: 2, c: 3
}
var {a, b, c} = params;
console.log(a,b,c);
var {a: b, b, c: d} = params;
console.log(a, b,c,d);

var params = [1,2,3]
var [a, ...rest] = params;
console.log(a, rest);


/* `` tempate syntax */


// TAG FUNCTION
var name = 'Brandon';
var age = 26;
 
function greet(words, ...rest){
  console.log(words);
  console.log(rest);
}
greet`I'm ${name}. I'm ${age} years old.`;

