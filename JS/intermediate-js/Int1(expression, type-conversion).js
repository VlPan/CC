/* Advanced Expressions (auto type conversions, comparison) */

/* BASIC THEORY */
console.log(NaN === NaN);
console.log(null === null);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Object);
console.log(typeof {});
console.log(isFinite('123'));
console.log(isFinite('str'));

/* 
    false
    true
    object
    undefined
    function
    object
    true
    false
*/

console.log(123 instanceof Number);
console.log(new Number(123) instanceof Number);
console.log('123' instanceof String);
console.log(function(){} instanceof Function);
// false
// true
// false
// true

console.log(10 == true);
// false -> 1
console.log([] == true);
// false

console.log([1,2] + [3,4]);
console.log('a' + NaN);

console.log(!![]);
console.log(!!{});
console.log(!!'1');
console.log(!!'');
console.log(!!null);
console.log(!!NaN);

/* Reference and primitive - dont touch this expression and make it true */
[] == '';

/* Why?? What will be in use-strict*/
var str = "bob";
str[0] = "B";
console.log(str)

//2
var statement = "I am";
var otherStr = statement.slice(2, 4);
console.log(statement);
console.log(otherStr);

statement.splice(0, 2, 'bob')

// 0
console.log(+'')

// 2, NaN, NaN
console.log(parseInt('  2px'));
console.log(Number('  2px'));
console.log(+'2px')


// true
console.log(!!"0");

// true
console.log(['0'] == '0');

// true
console.log([] == 0);

// false
console.log([] == "0");

// false
console.log(undefined == false);