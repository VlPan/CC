
/* Prototypal Inheritance (set prototype, temporary constructor patterns, instanceof operator), ES2015 Classes */



// TODO: Question 1 realize prototype inheritace, instances
function A() {}
function B() {}
A.prototype.log = function() {console.log('LOG');}
B.prototype = Object.create(A.prototype);
B.constructor // ??
B.prototype.constructor = B; // WHY?

var b = new B();

// What is in b that link to A.prototype
b === A.prototype;
// b.__proto___.__proto___ === A.prototype;

b.constructor
// B
b.prototype
// undefined

function c() {

}


// TODO: Qusestion 2 - Object create
var X1 = {
  a: 'a'
}
var X2 = Object.create(X1);
delete X2.a
console.log(X2.a);
// a


// TODO: Qusestion 3 - How instance of work??
// TODO: Qusestion 4 - realize private , static members in functional style



/* Constructor */


B.prototype = Object.create(A.prototype);
B.constructor // ??
B.prototype.constructor = B; // WHY?

// B.constructor = Function
// A.prototype.costructor = A
// B.prototype.constructor = A becase of Object create

function Gadget() {
  // private member
  var name = 'iPod';
  // public function
  this.getName = function () {
  return name;
  }
}
Gadget.prototype = (function () {
  // private static member
   var browser = "Mobile Webkit";  
  // public prototype members
  return {
    getBrowser: function () {
      return browser;
    }
  };
}());
var toy = new Gadget();
console.log(toy.getName()); // privileged "own" method
console.log(toy.getBrowser()); // privileged prototype method
// [1,2].__proto__.__proto__.__proto___ // what the hack is that >> ??


/* What if I return? */
function User(name) {
  console.log(arguments.callee);
  this.name = name;
  return {} // what if I return 123
}

var u = new User('name');
console.log(u);


/* What if I forget new? */
function User(name) {
  this.name = name;
}

var u = User('name');
console.log(u);


/* How to fix it? */
function User(name) {
  if(!(this instanceof User)) {
    return new User(name);
  }
  this.name = name;
}

var u = User('name');
console.log(u);


// public , private , static, static private

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

/* 
паблик статик - наследуется, меняется из вне. Зашарин на все сущности.
привайт статик - зашарин на все сущности. Можно юзать только внутри класса
протектед статик - зашарин во всех классах, можно юзать из наследника через Parent.Static
*/

// Object create
var X1 = {
  a: 'a'
}
var X2 = Object.create(X1);
delete X2.a
console.log(X2.a);

// TODO: is true quiz of questions
// TODO: realize prototype inheritance
// TODO: (extend below example): realize private methods
// TODO: instance of vs typeof interesting caseses
// TODO: temporary constructor patterns
// TODO: ES2015 Classes interesting cases