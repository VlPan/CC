/* Functions (create, invoke, arrow functions, rest operator, default parameters) */

// TODO: new Function(); - tricks
// TODO: arrow vs regular
// TODO: arguments
// TODO: ...rest
// TODO: Default parameters
// TODO: Default functions 

/* Default parameter */
//1
var x = ((a = {a:2}) => ({a}))();
// {"a":{"a":2}}

a();
b();
c();

let a = function c() {console.log('c');}
function b() {console.log('b');}

a();
b();
c();

// c is not defined
// b hosted
// a is not hosted


var b = 15;
function change(arg) {
    arg = 12
}

change(b);
console.log(b);


var myObj = {1:2};
change(myObj);
console.log(myObj);

// new Function
// - global scope
// - global this

function X (a,b,c) {
    console.log(X);
    console.log(X.length);
    console.log(typeof X);
}


// what if i forget new
function X (a,b,c) {
    if(!(this instanceof X)) {
        return new X();
    }
}

// X could be replaced with arguments callee