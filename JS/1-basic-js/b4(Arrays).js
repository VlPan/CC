/* Arrays (create, indexes, length, modification, built-in methods: sorting, filtering, search, iterating, static methods) */

// !
var arr = [1,2,3];
arr.length = 1;
arr[5] = 5;
// [1, empty × 4, 5]

// TODO: Question 1 create and indexes
var arr1 = [5];
var arr2 = new Array(5);
// what if I go through forIn
for(var key in arr2) {
  console.log(arr[key]);
}
// what if I concatinate
// no console logs
// so how to determine than array has empty slots?
// includes or .length == more than Object.keys().length

arr2.includes(undefined);
arr2.length > Object.keys(arr2).length;

// true
// true



// TODO: Question 2 indexes and length
var arr = [1,2,3];
arr.length = 1;
console.log(arr);
// [1]

// TODO: Question 3 reduce practice
[].reduce((prev, cur) => 15);
// error
[].reduce((prev, cur) => 15, 0);
// 0
[1].reduce((prev, cur) => { console.log('0'); return prev});
// no console.logs
// 1
[1].reduce((prev, cur) => { console.log('0'); return prev}, 15);
// log: 0
// 15
[1, 2].reduce((prev, cur) => prev);
// 1
[1].reduce((prev, cur) => 15, 0);
// 15

// TODO: Question 4 reverse, push, etc
var arr1 = [1,2,3]
var arr2 = arr1.reverse().push(123)

console.log(arr1);
console.log(arr2);

// [3,2,1,123]
// 4

// TODO: Question 5 slice vs splice
var source = [1, 2, 3];
var res = source.splice(1, 1, 3);
console.log(source);
console.log(res);

// [1, 3, 3]
// [2]

// TODO: Question 6 Array from of
// what can be passed in Array from?
// iterable objects and pseudoArrays
// string, set, map, array

// Array.of(5) vs Array(5) ?

// TODO: Question 7 filtering, sort, search

// TODO: Question 8: trick
console.log([].every((a) => a));
// true
console.log([].some((a) => a));
// false

var a = [...5];
// is there mistake?
// how to make it work?

// TODO: Question 9 - PRACTICE convert array to map
// !
var arr = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}];
function convertToMap (arr) {
  return arr.reduce((acc, curr) => ({ 
    [curr.id]: curr, 
    ...acc 
  }), {});
}

// TODO: Question 10 - find NaN in Array
var arr = [1, NaN, 2];
var isExist = arr.indexOf(NaN) > -1;
console.log(isExist)

// false
arr.includes(NaN)
// true
console.log(arr.some((el) => Object.is(el, NaN))); 
// true


// var ar1r = [1];
// console.log(ar1r);
// var ar1r = new Array(true);
// console.log(ar1r);

// // TODO: check if array

// /* for in over Array (see I did not declare key) */
// Array.prototype.clone = function() {
//   console.log('myClone');
// }
// let arr = [1,2,3];
// for(key in arr) {
//   console.log(arr[key]);
// }

// /* prototype. Explain what does it mean */
// console.log([1,2].__proto__.__proto__);

// // TODO: map, some, evert, filter, reduce, reduceRight, 
// // TODO: array from
// // create array from pseudo array object and iterated object

// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]



// var map  = convertToMap(ar22r)
// console.log(map);


// /* PRACTICE Reverse + push */
// var arr1 = [1,2,3]
// var arr2 = arr1.reverse().push(123)

// console.log(arr1);
// console.log(arr2);

// // 3, 2, 1, 123
// // 4

// // how to check array has empty spots??
// // forEach map etc will ignore empty spots. Common loop would not
// // (Object.values(array).length === array.length or array.includes(undefined);)

// console.log([].every((a) => a));
// // true
// console.log([].some((a) => a));
// // false


// /* PLAY WITH REDUCE */
// // TODO: Parse it
// var a = [].reduce(() => {})
// console.log(a);
// // error

// var a = [].reduce(() => {}, 0)
// console.log(a);
// // 0

// var a = [12].reduce(() => {}, 0)
// console.log(a);
// // undefined

// var a = [1].reduce((acc) => {;return acc}, -1)
// console.log(a);
// // -1

// var a = [1].reduce((acc, cur) => {console.log(acc);return acc})
// console.log(a);
// // 1

// var a = [111,12].reduce((acc) => {console.log(acc); return acc})
// console.log(a);
// // 111

// var a = [111,12].reduce((acc) => {console.log(acc)})
// console.log(a);
// // undefined

// [1].reduce((a,b) => 0)
// // 1


// var arr = new Array(50);
// arr.forEach((i) => console.log(i)); // no logs
// [...arr].forEach((i) => console.log(i)); // many logs

// var arr = [1, 0, 2];
// var arr2 = [...arr.sort((a, b) => a - b)];
// var arr3 = [...arr2.reverse()];
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// // 0 1 2 | 2 1 0 | 2 1 0

// var arr = [1, 0, 2];
// var arr2 = arr.sort((a, b) => a - b);
// var arr3 = arr2.reverse();
// var arr4 = arr3.push(4);
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// // 2 1 0 4
// // 2 1 0 4
// // 2 1 0 4
// // 4

// /* SORT */
// // default behavior convert values to string and compare them as Unicode characters
// // compare function (CF) => (0<) a , b
// // compare function (CF) => (=0) no changes for each other
// // compare function (CF) => (>0) b, a
// // a.localeCompare(b) // alphabit for local symbols
// // Mutate array

// // can i make this magic?? var a = [...5] // [1,2,3,4,5]

// Number[Symbol.iterator] = function() {
//   var n = this.valueOf();
//   var i = 0;
//   return {
//     next() {
//       return {
//         done: i >= n ? true : false,
//         value: ++i
//       };
//     }
   
//   }
// }
// var b = new Number(5);

// b[Symbol.iterator] = Number[Symbol.iterator];
// var a = [...b];
// console.log(a);



// var source = [1, 2, 3];
// var res = source.splice(1, 1, [3]);
// console.log(source);
// console.log(res);

// // [1, [1], 3]
// // [2]

// var arr = [NaN]
// console.log(arr.indexOf(NaN) !== -1);
// console.log(arr.includes(NaN));

// // false
// // true