/* Functional Patterns (immediate, callback, memoization, chaining, currying, binding) */

/* PIPE */

const pipe = (...funcs) => initVal => {
  return funcs.reduce((res, func) => {
    return func(res);
  }, initVal)
} 

const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;

const res = pipe(
  multiplyTwo,
  minusFour
)(10);

console.log(res);

/* Infinite Curring */

const cAdd = (v) => {
  let res = 0;
  const f = (v) => {
    if(!v) return res;
    res += v;
    return f;
  }
  return f(v);
}

let res2 = cAdd(5)(2)(10)(10)();
console.log(res2);

/* CURRING LVL 1 */

function curry(fn) { // Infinite curring
  let numberOfArgs = fn.length;
  const argClosure = [];
  let recursive = (a) => {
    argClosure.push(a);
    if(numberOfArgs <= 1) {
      return fn(...argClosure)
    } else {
      numberOfArgs--;
      return recursive
    }
  }

  return recursive
}

const _sum4 = (p, q, r, s) => p + q + r + s;
const _sum3 = (x, y, z) => x + y + z;
const sum3 = curry(_sum3);
const sum4 = curry(_sum4);
console.log(sum3(1)(3)(2)); // 6
console.log(sum4(1)(3)(2)(5)); // 6

/* CURRING LVL 2 */
function curry(fn) {
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
console.log(sum3(2, 3)(4));
console.log(sum3(2)(3, 4));
console.log(sum4(2)(10, 4)(10));


/* MEMO */
var sum = (a,b) => a + b;

const memo = (f, results = new Map()) => (...rest) => {
  let key = JSON.stringify(rest);
  if(!results.get(key)) {
    results.set(key, f(...rest))
  }
  return results.get(key)
}

var memedSum = memo(sum);


console.log(memedSum(1,2));
console.log(memedSum(1,2));


// function memo(f) {
//   let results = new Map();
//   return function(...rest) {
//     let key = JSON.stringify(rest);
//     if(!results.get(key)) {
//       results.set(key, f(...rest))
//     }
//     return results.get(key)
//   }
// }

