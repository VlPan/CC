// realize prototype inheritance
// realize private methods
function Gadget() {
  // private member
  var name = 'iPod';
  // public function
  this.getName = function () {
  return name;
  }
}
Gadget.prototype = (function () {
  // private member
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


// return from function constructor
// function User(name) {
//   console.log(arguments.callee);
//   this.name = name;
//   return {} // what if I return 123
// }

// var u = new User('name');
// console.log(u);


// What if I forget new??
function User(name) {
  console.log(this instanceof arguments.callee);
  this.name = name;
}

var u = new User('name');
console.log(u);