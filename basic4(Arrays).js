
// What's diffrence??
var ar1r = [1];
console.log(ar1r);
var ar1r = new Array(true);
console.log(ar1r);

// how to check that this is array


// HasOwnProperties
Array.prototype.clone = function() {
  console.log('myClone');
}
let arr = [1,2,3];
for(let key in arr) {
  console.log(arr[key]);
}


// Convert array to map
let ar22r = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}];
function convertToMap (ar22r) {
  return ar22r.reduce((acc, curr) => ({ 
    [curr.id]: curr, 
    ...acc 
  }), {});
}

var rr  = convertToMap(ar22r)
console.log(rr);


// map, some, evert, filter, reduce, reduceRight, 
// reverse

/* task */
var arr2 = [1,2,3]
var arr3 = arr2.reverse().push(123)

console.log(arr3);
console.log(arr2);

console.log([1,2].__proto__.__proto__.__proto__);
