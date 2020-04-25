/* Expressions, Operators, Statements (literals, conditions, loops), destructuring, string templating */

/* Expression  1, 12 */
var a = 1 || 12;
console.log(a);
a = 1 && 12;
console.log(a);

// 1, 12

/* Expression Order */
console.log(12 + 1 * -1 + 12);
// 23
console.log(3 + 3 + !3 * 3)
// 6
console.log(3 > 2 > 1);
// false

/* Loops words */
// break;
// continue;


// TODO statement
console.log({}.toString() + 12);
// error
// how to fix
// console.log(({}).toString() + 12);

/* Destructuring */
var params = {
  a: 1, b: 2, c: 3
}
var {a: b, b, c: d} = params;
// How many vars declared?

/* Destructuring-2 */
var params = [1,2,3]
var [a, ...rest] = params;
console.log(a, rest);


// TODO: template syntax

/* Template function */
var name = 'Brandon';
var age = 26;
 
function greet(words, ...rest){
  console.log(words);
  console.log(rest);
}
greet`I'm ${name}. I'm ${age} years old.`;

// ForOf over objects, Set, String, map

'Visit W3Schools.\nLearn JavaScript.'.replace(/\n/, String.raw`\n`)