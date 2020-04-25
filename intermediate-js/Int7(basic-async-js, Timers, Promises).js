/* Basic Async JavaScript (Timers, Promise) */

/* Order of console logs */
console.log(1);
setTimeout(() => console.log(2))
new Promise((res, rej) => res(3)).then((res) => console.log(res));
console.log(4);

// // TODO: Most advanced example with Promises Timers, Events, etc


// 12
let p = new Promise((res, rej) => {
  res(12);
  rej()
});

p.catch((r) => console.log(r)).then((r)=> console.log(r))


// mofify example (the same)
let p = new Promise((res, rej) => {
  setTimeout(() => {
    return new Promise((res, rej) => res('Success'));
  }, 3000)
  res('Success')
});

p.then((r) => {
  console.log(2, r);
})


var promise = new Promise((res, rej) => {
  rej('my reject!');
});

promise.then((r) => {
  console.log('T1', r);
  throw 'err'
}).catch((r) => {
  console.log('C1', r);
}).then((r) => {
  console.log('T2', r);
}).catch((r) => {
  console.log('C2', r);
})

promise.catch((r) => {
  console.log('C3', r);
  return Promise.reject(123);
}).then((res) => {
  console.log('T3', res);
}).catch((r) => {
  console.log('C4', r);
})

// C3 my reject
// C1 my reject
// T2 undefined
// c4 123


Promise.resolve().then(() => console.log(1));
console.log(2);

// 2 1