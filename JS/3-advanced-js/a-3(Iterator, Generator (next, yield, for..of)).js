// Iterator, Generator (next, yield, for..of)

/* 1 Iterator ramge */

// TODO: Question 1 - Syntax
function* generator() {
  var a  = yield 1;
  console.log(a);
  yield a + 2;
  yield 3;
}

var g = generator();
console.log(g.next());
console.log(g.next(15));
console.log(g.next());
// {value: 1, done: false}


// TODO: QUESTION  2 pracise
[...5] // [1,2,3,4,5];


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


var obj = {
    from: 1,
    to: 12,
    [Symbol.iterator]: function () {
        return this;
    },
    next() {
        this.current = this.current || this.from;
        return {
            done: this.current > this.to ? true : false,
            value: this.current++
        }
    }
}

for (let num of obj) {
    console.log(num);
}

/* псеводомассивы и итерируемые обьекты */

/* Generators */

/*
Generator functions behave differently from regular ones.
 When such function is called, it doesn’t run its code. Instead it returns a special object, called “generator object”,
 to manage the execution. 
*/



/* 

To make the object iterable asynchronously:

We need to use Symbol.asyncIterator instead of Symbol.iterator.
next() should return a promise.
To iterate over such an object, we should use a for await (let item of iterable) loop.

*/

// The spread syntax ... doesn’t work asynchronously

let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  for(let value of range) {
    alert(value); // 1, then 2, then 3, then 4, then 5
  }

  let range = {
    from: 1,
    to: 5,
  
    async *[Symbol.asyncIterator]() { // same as [Symbol.asyncIterator]: async function*()
      for(let value = this.from; value <= this.to; value++) {
  
        // make a pause between values, wait for something
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        yield value;
      }
    }
  };
  
  (async () => {
  
    for await (let value of range) {
      alert(value); // 1, then 2, then 3, then 4, then 5
    }
  
  })();

/* The composed generator: */

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  alert(str); // 0..9A..Za..z

  // “yield” is a two-way street


  function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    alert(ask1); // 4
  
    let ask2 = yield "3 * 3 = ?"
  
    alert(ask2); // 9
  }
  
  let generator = gen();
  
  alert( generator.next().value ); // "2 + 2 = ?"
  
  alert( generator.next(4).value ); // "3 * 3 = ?"
  
  alert( generator.next(9).done ); // true

// generator.throw
function* gen() {
    try {
      let result = yield "2 + 2 = ?"; // (1)
  
      alert("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
      alert(e); // shows the error
    }
  }
  
  let generator = gen();
  
  let question = generator.next().value;
  
  generator.throw(new Error("The answer is not found in my database")); // (2)