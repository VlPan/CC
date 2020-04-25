// JavaScript Errors (try..catch, throw, Error, custom errors)

// e.name
// e.message
// e.stack

// Syntax error, Reference Error, range errros
// finaly vs return
// window.onerror

// WHY catch errors? 
a.b
console.log(1);

try {
    a.b
} catch {

}
console.log(2);

// log1 err 1
function a () {
    try {
        b();

    }   catch(err) {
        console.log(err);
    }
}

function b() {
    console.log('log1');
    throw 'err1'
    console.log('log2');
}

a();


////////////////////////////////
function a () {
    try {
        b();

    }   catch(err) {
        console.log(err);
        throw 'err2'
    }
}


function b() {
    throw 'err1'
}


try {
    a();
}
catch(err) {
    console.log(err);
} 

///////////////

try {
    setTimeout(() => {
      throw new Error();
    });
  } catch (e) {
    alert( 'Me error' );
}



//task

// x1 = () => {
//     throw new SyntaxError();
// }
// x2 = () => {
//     throw new ReferenceError();
// }

function b() {
    x1()
    x2();
}

try {
    b();
}
catch(err) {
    if(err.name === 'SyntaxError') {

    } else {

    }
}

// catch(err) {
//     if(err.name === 'SyntaxError') {

//     } else {

//     }
// }