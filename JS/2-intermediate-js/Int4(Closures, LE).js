/* Closures (nested functions, context, inner/outer context) */
// TODO: closuers was covered in first chapter

/* Closures example */

var a = 10;
function b() {
  let a = 12;
  logA();
}

function logA() {
  console.log(a);
}

b();

// EX 2
function logA() {
  console.log(a);
  setTimeout(() => {console.log(a), 0})
}

var a;

function b() {
  a = 10;
  logA();
}

b();

a = 15;

var k = 10;
function a() {
  var k = 20;
  return function() {
    console.log(k);
  }
}

var fn = a();
k = 30;

fn();

// 20

var k = 10;
function a() {
  console.log(k);
  k = 20;
  return function() {
    console.log(k);
  }
}

var fn = a();
k = 30;
a();
fn();

// 10 30 20


function a() {
  var name = 'John Doe';
  
  function b() {
    return name;
  }

  return b;
}

var c = a();

console.log( c());

// 'John Doe'