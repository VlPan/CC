// TODO: BigInt

/* 1

var x = {1: 2}
A(x);
console.log(x);

function A(arg) {
    arg = null;
}

var a = Symbol('a');
var b = Symbol('a');

var a = {};
var b = {};

console.log(a === b);

var a = Symbol.for('a');
var b = Symbol.for((() => 'a')());

console.log(a === b);
Symbol.keyFor(a);

*/

// var a = {1:2, 3:4};


// console.log(3 > 2 > 1);
// console.log((3 > 2 && 2) > 1);
// console.log(3 + 3 * 3);


// var a = [];
// a[2] = 1;
// a[4] = 3;

// var obj = {
//     1:2,
//     3:4,
//     'num': 123
// }

// for(var num of Object.keys(obj)) {
//     console.log(obj.num);
// }


/* Arrays */

// var a = [];

// a[2]= 1;
// a[4]= 2
// console.log(a);
// Object.values(array).length === array.length
// var b = [...a]
// console.log(b);
// for (const key in b) {
//     console.log(b[key]);
//         // const element = a[key];
//         // console.log(element);
// }

// fn`123124`


// var a = {};
// var b = new Object(1);
// b.toFixed(12);

// a[1] = 2;

// a[2 + 5] = 12;
// a[(2 + 5).toFixed(2)] = 7;
// console.log(a[a.toString() + b.toString()]);

// console.log(a);

// typeof {};
// typeof Object;


// Object.defineProperty(a, 'test', (() => {
//     var c = 0
//     return  {
//         get: function() {
//             return ++c;
//         }
//     }
// })());


// console.log(a.test);

// console.log(Object.getOwnPropertyNames(a));

// var t2 = {
//     a: 1,
//     b: {a: 123},
// }

// Object.seal(t2);
// delete t2.b;

// console.log(t2);

// var users = [{id:1}, {id:2}];
// users
// function deleteUser(id) {
//     var i = users.findIndex(el => el.id === id);
//     var clone = [ ...users ];
//     clone.splice(i, 1);
//     return clone;
// }
// let u = deleteUser(2);
// console.log(u);
// console.log(users);

// var arr = [ ];
// arr[2] = 3;
// arr[4] = 5;
// console.log(Object.getOwnPropertyDescriptor(arr[2]));

// new Array(10);

// var res = [1].reduce((a, b) => {
//     console.log('Callback', a ,b);
// }, 0);

// console.log(res);


// var f = function f2() {
//     console.log(f === f2 === this);
//     console.log(f2);
//     console.log(this);
// };

// f.call(f);

// console.log(f.__proto__ === Function.prototype);

// var g;
// var f = function u(a) {
//     g = u;
//     this.a = a;
//     console.log(this);
// }

// var test = new f();
// var test2 = new g();

// console.log(test);
// console.log(test2);
// console.log(test === test2);



// var b = {};
// b.a = f;
// b.a();

// var f = () => {

// }

// function f() {

// }


// if("" || NaN || undefined || 0 || null || false) {

// }
// console.log(10 == true);
// console.log(true == '10');
// console.log('100' - -'150');

// console.log({a: 2} + [1,2]);

// console.log("4" + 8);
// console.log(8 + "4");

// let str = 'react';
// str[0] = 'R';


// console.log(undefined + - 'Re' + - NaN + [1,2]);


// (() => {
//     return {
//         b: function() {
//             console.log(this);
//         }
//     }
// }).call().b();

// (() => {
//     return {
//         b: () => {
//             console.log(this);
//         }
//     }
// }).call(null).b();


// (() => {
//     return {
//         b: () => {
//             console.log(this);
//         }
//     }
// }).call({1:2}).b();

// (function() {
//     return {
//         b: () => {
//             console.log(this);
//         }
//     }
// }).call({1:2}).b();

// Array.prototype.slice.call(arguments);

// let a = 1;
// var b = function () {
//     let a = 12;
//     logA();
// }

// function logA() {
//     console.log(a);
// }


function User(name) {
    this.name = name;
    var private = 12;
    this.public = () => {
        console.log(private);
    }
}
User.static = 12;
User.prototype = (() => {
    var staticPriv = 12;
    return {
        plus: function() {
            staticPriv++;
            console.log(staticPriv);
        }
    }
})()

var u = new User();
u.plus();
u.staticPriv

function WebDev() {
    User.apply(this, arguments);
}
WebDev.prototype = Object.create(User.prototype);
var wd = new WebDev();


