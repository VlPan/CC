/* Advanced Expressions (auto type conversions, comparison) */

// TODO: Question 1: comparison
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
// how to compare NaN
// how to obj convert elements
// typeof vs instanceof
Object.is(NaN, NaN);

console.log(function(){} instanceof Object);
console.log(123 instanceof Number);
console.log(new Number(123) instanceof Number);
console.log('123' instanceof String);
console.log(function(){} instanceof Function);
console.log(typeof Array);
console.log(typeof []);
// true
// false
// true
// false
// true
// function
// object

// TODO: Question 2: double equals
console.log(10 == true);
// false -> 1
console.log([] == true);
// false

// TODO: Question 3: falsy values

console.log(!![]);
console.log(!!{});
console.log(!!'1');
console.log(!!'');
console.log(!!null);if()
console.log(!!NaN);

// TODO: Question 4: interesting expressions

/*
ToPrimitive
ToNumber
ToString
ToBoolean

valueOf -> toString -> convert to number or according to operator
*/

1 - '0' + 2 // 3
1 - '-0' + 2 // 3
1 - '-0-' + 'NaN' // NaNNaN
'b' + [NaN + 'ba', 'CC'] - {}; // NaN
[] + (()=>{}); // ()=>{}
[] + (()=>({})); // ()=>({})
[] + (()=>({}))(); // [object Object]
[] + (() => new Object(123))() // '123'
{} + (() => new Object(123))() // 123
(() => new Object(123))() + {} // 123[objectObject]
({}).valueOf() + 1 // "[object Object]1"
{} + 2 // 2
typeof ({}).valueOf() + 2 // object2
+{} // NaN
+{}+[] // 'NaN'
+[] // 0
+[]+{} // 0[Object object]
+[10, 1]+{} // NaN[object Object]
{} + [10] // 10


// /* Reference and primitive - dont touch this expression and make it true */
// [] == '';

// /* Why?? What will be in use-strict*/
// var str = "bob";
// str[0] = "B";
// console.log(str)

// //2
// var statement = "I am";
// var otherStr = statement.slice(2, 4);
// console.log(statement);
// console.log(otherStr);

// statement.splice(0, 2, 'bob')

// // 0
// console.log(+'')

// // 2, NaN, NaN
// console.log(parseInt('  2px'));
// console.log(Number('  2px'));
// console.log(+'2px')


// // true
// console.log(!!"0");

// // true
// console.log(['0'] == '0');

// // true
// console.log([] == 0);

// // false
// console.log([] == "0");

// // false
// console.log(undefined == false);

// console.log(NaN === NaN);
//  // false
// console.log(['10'].indexOf(10));
// // -1 use triple equals
// console.log(Object.is(NaN, NaN));
// // true the same as triple equal expcept for NaN and +0 -0
// console.log(Object.is({}, {}));
// // false - different referece


// // Double equal comperison algorithm:
// // 1 - two types indentical? apply ===
// // 2 - null and undefined? return true
// // 3 - string and number ? transform string to number. go to (1)
// // 4 - boolean vs anything ? transform boolean to number. go to (1)
// // 5 - object vs string  | number | symbol ? transform object to primitive by calling valueOf than toString(). go to (1)
// // 6 - if nothing above applied - return false