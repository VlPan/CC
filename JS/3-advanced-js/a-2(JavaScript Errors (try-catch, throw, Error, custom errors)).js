// JavaScript Errors (try..catch, throw, Error, custom errors)

// e.name
// e.message
// e.stack

// Syntax error, Reference Error, range errros
// finaly vs return
// window.onerror

// TODO: Question 1: why error:
a.b
console.log(1);

try {
    a.b
} catch {

}
console.log(2);

// TODO: Question 2: throw anything, will console.log worl after throw

// TODO: Question 3: Async error - not working , how to fix?
try {
    setTimeout(() => {
      throw new Error();
    });
  } catch (e) {
    alert( 'Me error' );
}

// TODO: Question 4: custom errors
class Err1 extends Error {}
class Err2 extends Error {}

x1 = () => {
    throw new Err1();
}
x2 = () => {
    throw new Err2();
}

function b() {
    x1()
    x2();
}

try {
    b();
}
catch(err) {
    if(err instanceof Err1) {
        console.log('err1');
    } else {
        console.log('err2');
    }
}

////////////////////////////////
// function a () {
//     try {
//         b();

//     }   catch(err) {
//         console.log(err);
//         throw 'err2'
//     }
// }


// function b() {
//     throw 'err1'
// }


// try {
//     a();
// }
// catch(err) {
//     console.log(err);
// } 

///////////////



//task



// catch(err) {
//     if(err.name === 'SyntaxError') {

//     } else {

//     }
// }

// log1 err 1
// function a () {
//     try {
//         b();

//     }   catch(err) {
//         console.log(err);
//     }
// }

// function b() {
//     console.log('log1');
//     throw 'err1'
//     console.log('log2');
// }

// a();