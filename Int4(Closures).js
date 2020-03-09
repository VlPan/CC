/* Closures example */

let a = 12;
function f1() {
  console.log(a);
}

function f2() {
  let a = 14;
  f1();
}

f2();