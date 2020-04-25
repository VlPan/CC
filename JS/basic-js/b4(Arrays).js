
/* Declaration */
var ar1r = [1];
console.log(ar1r);
var ar1r = new Array(true);
console.log(ar1r);

// TODO: check if array

/* for in over Array (see I did not declare key) */
Array.prototype.clone = function() {
  console.log('myClone');
}
let arr = [1,2,3];
for(key in arr) {
  console.log(arr[key]);
}

/* prototype. Explain what does it mean */
console.log([1,2].__proto__.__proto__);

// TODO: map, some, evert, filter, reduce, reduceRight, 

Array.from({a:1, b:2});

/* PRACTICE: Convert array to map */
var arr = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}];
function convertToMap (arr) {
  return arr.reduce((acc, curr) => ({ 
    [curr.id]: curr, 
    ...acc 
  }), {});
}

var map  = convertToMap(ar22r)
console.log(map);


/* PRACTICE Reverse + push */
var arr1 = [1,2,3]
var arr2 = arr1.reverse().push(123)

console.log(arr1);
console.log(arr2);

// 3, 2, 1, 123
// 4

// how to check array has empty spots??
// forEach map etc will ignore empty spots. Common loop would not
// (Object.values(array).length === array.length or array.includes(undefined);)

console.log([].every((a) => a));
// true
console.log([].some((a) => a));
// false


/* PLAY WITH REDUCE */
// TODO: Parse it
var a = [].reduce(() => {})
console.log(a);
// error

var a = [].reduce(() => {}, 0)
console.log(a);
// 0

var a = [12].reduce(() => {}, 0)
console.log(a);
// undefined

var a = [1].reduce((acc) => {;return acc}, -1)
console.log(a);
// -1

var a = [1].reduce((acc, cur) => {console.log(acc);return acc})
console.log(a);
// 1

var a = [111,12].reduce((acc) => {console.log(acc); return acc})
console.log(a);
// 111

var a = [111,12].reduce((acc) => {console.log(acc)})
console.log(a);
// undefined

[1].reduce((a,b) => 0)
// 1


var k = '123';
k.length = 1;
console.log(k);

// no changes, error in use strict

var arr = new Array(50);
arr.forEach((i) => console.log(i)); // no logs
[...arr].forEach((i) => console.log(i)); // many logs

var arr = [1, 0, 2];
var arr2 = [...arr.sort((a, b) => a - b)];
var arr3 = [...arr2.reverse()];
console.log(arr);
console.log(arr2);
console.log(arr3);

// 0 1 2 | 2 1 0 | 2 1 0

var arr = [1, 0, 2];
var arr2 = arr.sort((a, b) => a - b);
var arr3 = arr2.reverse();
var arr4 = arr3.push(4);
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);

// 2 1 0 4
// 2 1 0 4
// 2 1 0 4
// 4

/* SORT */
// default behavior convert values to string and compare them as Unicode characters
// compare function (CF) => (0<) a , b
// compare function (CF) => (=0) no changes for each other
// compare function (CF) => (>0) b, a
// a.localeCompare(b) // alphabit for local symbols
// Mutate array

// can i make this magic?? var a = [...5] // [1,2,3,4,5]

Number[Symbol.iterator] = function() {
  var n = this.valueOf();
  var i = 0;
  return {
    next() {
      return {
        done: i >= n ? true : false,
        value: ++i
      };
    }
   
  }
}
var b = new Number(5);

b[Symbol.iterator] = Number[Symbol.iterator];
var a = [...b];
console.log(a);



var source = [1, 2, 3];
var res = source.splice(1, 1, [3]);
console.log(source);
console.log(res);

// [1, [1], 3]
// [2]