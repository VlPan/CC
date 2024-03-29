/* Basic Async JavaScript (Timers, Promise) */

// TODO: Create a promise that will be resolved if user click button withing 3 seconds and rejected otherwise
var p = new Promise((res, rej) => {
  setTimeout(rej, 3000);
  btn.onclick = function() {
      res();
  }
});

p.then(() => alert('Resolved')).catch(() => alert('Rejected'))

// TODO: Question 1 order

/* Order of console logs */
console.log(1);
setTimeout(() => console.log(2))
Promise.resolve(3).then(console.log);
console.log(4);

// 1
// 4
// 3
// 2


// TODO: Question 2 promise chain
let p = new Promise((res, rej) => {
  res(1);
  rej();
});

p
.then((v) => console.log(v))
.catch((v) => console.log('catch'))
.then((v) => console.log(v))

p.then(console.log)

// 1,1, undefined

setTimeout(() => { 
  console.log(1);
  Promise.resolve(3).then(console.log)
})
setTimeout(() => console.log(2));


// can i do then after catch. why?
// yes

// Assumption 1: catch / then return promise with pending value.
// When callback of catch / then called this promise is going to be resolved with return value
// if nothing returned its going to be resolved with undefined
// to reject we need to throw an error or explicitly return promise reject
// If callback was not called It s going to res/rej promise with value from promise above
// you should always remember than each of these promises is planned in microtasks queue

// TODO: Q3 advance

<div id="parent">
  <button id="child">Click me</button>
</div>

const parent = document.getElementById('parent');
const child = document.getElementById('child');
const f = () => {
  setTimeout(() => console.log('setTimeout'), 10);
  requestAnimationFrame(() => console.log('raf'));
  Promise.resolve().then(() => console.log('promise'));
}
parent.addEventListener('click', () => { console.log(1); f(); });
child.addEventListener('click', () => { console.log(2); f(); });

// 2 → Promise → 1 → Promise → rAF → rAF → setTimeout → setTimeout
// what if child.click() ?
// 2 → 1 → Promise → Promise → rAF → rAF → setTimeout → setTimeout


let p = new Promise((res, rej) => {
  res(12);
});

p
  .catch((r) => console.log(r))
  .then((r)=> console.log(r))
  .catch((arg) => console.log(arg))
  .then((arg) => console.log(arg));

p.then(() => console.log('second'))



  // second
  // 12 
  // undefined

  // is change rej(12) res()
  // 12
  // undefined
  // undefined

  



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