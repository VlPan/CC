/* Object Oriented Programming (constructors, public, private, static members) */

// TODO: Question 1 class syntax, super, etc
// how to create class?
// example
class A {
  constructor(a){
    this.a = a;
  }
  method1() {
    console.log('1');
  }
}

class B extends A {
  constructor(a) {
    this.a = a;
    super(a);
  }
}
// accesion this before super will lead to mistake
// how to add logic to parent method
super.method1();


// TODO: Question 2 of prototypes 

let a = new A();
a.method1 = () => console.log('mock');
a.method1()
let b = new A();
b.method1();

// mock
// 1

// TODO: Question 3 how to make private method at least in theory

/* Class Syntax with private methods */
class User {
    constructor() {
      var privarteVar = 12;
      var privateMethod = function() {
        console.log(privarteVar);
      }
      this.method = function() {
        privateMethod();
      }
    }
  }
  
  var User = (() => {
    var privateMethod = Symbol();
    class User {
      constructor() {
        
      }
    
      [privateMethod](arg) {
        console.log(arg);
      }
    
      publicMethod(arg) {
        this[privateMethod](arg);
      }
    }
    return User;
  })();

  var u = new User();
  u.publicMethod('world')
  

//   // accesing this before contructor
//   class A {
//     constructor(a){
//       this.a = a;
//     }
//     method1() {
//       console.log('1');
//     }
//   }

//   class B extends A {
//     constructor(a) {
//       this.a = a;
//       super(a);
//     }
//   }

//   // eeror ca not access this before consturcotr


//   class A {
//     method1() {
//       console.log('1');
//     }
//   }

//   class B extends A {
    
//   }

//   new B().method1();

//   A.prototype.method1 = function() {
//     console.log('2');
//   }

//   new B().method1();

//   // 1
//   // 2

//   // prototype mutation 

// class Logger {
//   log() {
//       console.log('class Log');
//   }
// }

// const fakeLog = () => {
//     console.log('fakeLog');
// }

// const l1 = new Logger();
// l1.log = fakeLog;
// l1.log();
// const l2 = new Logger();
// l2.log();

// // fakeLog
// // class Log


// // private methods by weakMap

let map = new WeakMap();

let nameSpace = function (object) {
    if (!map.has(object))
        map.set(object, {});
    return map.get(object);
}

function Point(x, y) {
    nameSpace(this).x = x;
    nameSpace(this).y = y;
}

Point.prototype.logCoordinates = function () {
    console.log(nameSpace(this).x, nameSpace(this).y);
};

Point.prototype.moveRight = function (x) {
    nameSpace(this).x++;
};

Point.prototype.moveLeft = function (x) {
  nameSpace(this).x--;
};

let p1 = new Point(1, 1);
let p2 = new Point(1, 1);

p1.moveRight();
p2.moveLeft();

p1.logCoordinates();
p2.logCoordinates();



// TODO: super.method();
// TODO: super constructor
// TODO: static methods
// TODO: extends 
// TODO: static, public, private, static private in Func and in Class