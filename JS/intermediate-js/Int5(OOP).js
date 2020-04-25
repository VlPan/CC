/* Object Oriented Programming (constructors, public, private, static members) */

// TODO: super.method();
// TODO: super constructor
// TODO: static methods
// TODO: extends 
// TODO: static, public, private, static private in Func and in Class

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
  

  // accesing this before contructor
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

  // eeror ca not access this before consturcotr


  class A {
    method1() {
      console.log('1');
    }
  }

  class B extends A {
    
  }

  new B().method1();

  A.prototype.method1 = function() {
    console.log('2');
  }

  new B().method1();

  // 1
  // 2

  // prototype mutation 

class Logger {
  log() {
      console.log('class Log');
  }
}

const fakeLog = () => {
    console.log('fakeLog');
}

const l1 = new Logger();
l1.log = fakeLog;
l1.log();
const l2 = new Logger();
l2.log();

// fakeLog
// class Log
