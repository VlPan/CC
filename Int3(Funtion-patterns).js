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

