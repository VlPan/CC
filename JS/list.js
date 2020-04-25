

// FIRST CURRY LEVEL
// const _sum4 = (p, q, r, s) => p + q + r + s;
// const _sum3 = (x, y, z) => x + y + z;
// const sum3 = curry(_sum3);
// const sum4 = curry(_sum4);
// console.log(sum3(1)(3)(2)); // 6
// console.log(sum4(1)(3)(2)(5)); // 6

// function curry(fn) {
//   const N = fn.length;
//   function innerFn(n, args) {
//     return function actualInnerFn(a) {
//       if(n <= 1) {
//         return fn(...args, a);
//       }
//      return innerFn(n - 1, [...args, a]);
//     }
//   }
//   return innerFn(N, [])
// }

// const sum3 = curry(_sum3);
// const sum4 = curry(_sum4);


// SECOND CURRY LEVEL
function curry(fn) { // Infinite curring
  let numberOfArgs = fn.length;
  let argClosure = [];
  let recursive = (...a) => {
    let n = a.length;
    numberOfArgs -= n;
    argClosure.push(...a);
    if(numberOfArgs < 1) {
      let res = fn(...argClosure)
      argClosure = [];
      numberOfArgs = fn.length;
      return res;
    } else {
      return recursive
    }
  }

  return recursive
}
const _sum3 = (x, y, z) => x + y + z;
const _sum4 = (x, y, z, b) => x + y + z + b;
const sum3 = curry(_sum3);
const sum4 = curry(_sum4);
console.log(sum3(2, 3)(4)); //9
console.log(sum3(2)(3, 4)); //9
console.log(sum4(2)(10, 4)(10)); //9




