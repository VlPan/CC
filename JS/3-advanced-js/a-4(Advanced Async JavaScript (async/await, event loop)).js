// Advanced Async JavaScript (async/await, event loop)


// TODO: Question 1: Explain Event Loop


// TODO: Question 2:After how many seconds setTimeout will be called (5s)
setTimeout(() => {
  console.log('TIMEOUT');
}, 2000);

const fiveSecondsLater = new Date().getTime() + 5000;
while (new Date().getTime() < fiveSecondsLater) {}
console.log('after while');

// TODO: Qusetion 3: Tell me about async await and example
var s = async function() {
  console.log('s called');
}
console.log(s());
console.log('After async');

// s called
// promise resolved
// after async

var s = async function() {
  console.log('s called');
  throw 'err';
}
console.log(s());
console.log('After async');

// s called
// promise rejected
// after async




function getData () {
    return fetch('http://example.com/movies.json');
}
  /* 
  callback should be async
  1s, 2s, 3s 
  3 all will be done after 3s
  */

//  forEach like mergeMap  
[1,2,3].forEach((i) => {
    let res = await getData(); // 1s, 2s, 3s
    console.log(res);
})

/* for like concatMap */
(async () => {
    for(let i = 0; i < 3; i++) {
        let res = await getData();
        console.log('RES', i , res);
    }
})()
  

/* forof concatMap */
for await (const element of [1,2,3]) {
    let res = await getData();
    console.log('RES', element , res);
}



  


// function fakeCall() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('success')
//     })
//   })
// }

// var s = async function() {
//   console.log('s called');
//   let res = await fakeCall();
//   return res;
// }
// console.log(s());
// console.log('After async');


// console.log('start');
// requestAnimationFrame(() => {
//     console.log('raf1');
//     requestAnimationFrame(() => {
//         console.log('raf2');
//     })
// })
// setTimeout(() => {
//   console.log('setT');
//     btn.style.display = 'none';
// }, 1000)

// console.log('Done');

// // s called
// // promise pending
// // after async
// // How to se response?