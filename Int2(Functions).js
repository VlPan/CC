// how to fix, two bind example
// call, apply, bind, to binds

var u = {
  name: 'us',
  getName: function() {
    return this.name;
  }
}

var f = u.getName;
console.log(f()); 


// do smt to fix this is getName is arrow function
function global() {
  var u = {
    name: 'us',
    getName: () => {
      console.log(this);
      return this.name;
    }
  }
  u.getName();
}

global.call({name: '123'})

// Functiuonal arguments

var myF = (arg) => {
  arg = {b: 12};
}

var obj = {a: 10};
myF(obj);

console.log(obj);



var myF = (arg) => {
  arg.b = 12;
}

var obj = {a: 10};
myF(obj);

console.log(obj);


// Interesting cases
// console.log((function() {}).prototype === (() => {}).prototype);

// var arr = () => {console.log(this);};
// arr.call({name: 'CUSTOM'}) // call is not working

// new arr(); // why error


var X = function () {
  console.log("X");
    X = function () {
      console.log("Y");
    };
};

var prank = X;
X();
X();

prank();
prank();
