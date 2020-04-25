let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!

console.log(proxy.test); // 5, we can read it from proxy too (2)

for(let key in proxy) console.log(key); // test, iteration works (3)

delete proxy.test;
console.log(target);

// get set has deleteProperty apply 
// consturct getPrototypeOf setPrototypeOf isExtensible preventExtensions defineProperty getOwnPropertyDescriptor
// own keys

// Traps can intercept these operations, but they must follow some rules. 
// for example set and delete must return true if property has been deleted

// Array that accept only capitilized strings;
var strings = ['Zero', 'One'];
strings = new Proxy(strings, {
    set(target, prop, value) {
        if(typeof value === 'string' && (/[A-Z]/gi).test(value[0]) ) {
            return true
        } else return false;
    }
})

// proxy that would filter object properties started from _ in foreach loops


// example of rewriting descriptor
let user = { };

user = new Proxy(user, {
  ownKeys(target) { // called once to get a list of properties
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) { // called for every property
    return {
      enumerable: true,
      configurable: true
      /* ...other flags, probable "value:..." */
    };
  }

});

alert( Object.keys(user) ); // a, b, c


// example with secret keywords
let user = {
    name: "John",
    _password: "***"
  };
  
  user = new Proxy(user, {
    get(target, prop) {
      if (prop.startsWith('_')) {
        throw new Error("Access denied");
      }
      let value = target[prop];
      return (typeof value === 'function') ? value.bind(target) : value; 
      // Methods should access real target, because if not it's going to call get proxy again and throw error
    },
    set(target, prop, val) { // to intercept property writing
      if (prop.startsWith('_')) {
        throw new Error("Access denied");
      } else {
        target[prop] = val;
        return true;
      }
    },
    deleteProperty(target, prop) { // to intercept property deletion
      if (prop.startsWith('_')) {
        throw new Error("Access denied");
      } else {
        delete target[prop];
        return true;
      }
    },
    ownKeys(target) { // to intercept property list
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });
  
  // "get" doesn't allow to read _password
  try {
    alert(user._password); // Error: Access denied
  } catch(e) { alert(e.message); }
  
  // "set" doesn't allow to write _password
  try {
    user._password = "test"; // Error: Access denied
  } catch(e) { alert(e.message); }
  
  // "deleteProperty" doesn't allow to delete _password
  try {
    delete user._password; // Error: Access denied
  } catch(e) { alert(e.message); }
  
  // "ownKeys" filters out _password
  for(let key in user) alert(key); // name

  


  // range proxy 
  let range = {
    start: 1,
    end: 10
  };
  
  range = new Proxy(range, {
    has(target, prop) {
      return prop >= target.start && prop <= target.end;
    }
  });
  
  alert(5 in range); // true
  alert(50 in range); // false


  // delay decorator using proxy
  function delay(f, ms) {
    return new Proxy(f, {
      apply(target, thisArg, args) {
        setTimeout(() => target.apply(thisArg, args), ms);
      }
    });
  }
  
  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  sayHi = delay(sayHi, 3000);
  
  alert(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target
  
  sayHi("John"); // Hello, John! (after 3 seconds)

  // Reflect

/*
   For every internal method, trappable by Proxy, there’s a corresponding method in Reflect,
   with the same name and arguments as the Proxy trap. 
*/

let user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  };
  
  let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop]; // (*) target = user
      // need to use return Reflect.get(target, prop, receiver); // (*)
    }
  });
  
  let admin = {
    __proto__: userProxy,
    _name: "Admin"
  };
  
  // Expected: Admin
  alert(admin.name); // outputs: Guest (?!?)

  
// Build-in object : INternal slots
let map = new Map();

let proxy = new Proxy(map, {});

proxy.set('test', 1); // Error

// To fix it:

let map = new Map();

let proxy = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value == 'function' ? value.bind(target) : value;
  }
});

proxy.set('test', 1);
alert(proxy.get('test')); // 1 (works!)

// Private fields
class User {
    #name = "Guest";
  
    getName() {
      return this.#name;
    }
  }
  
  let user = new User();
  
  user = new Proxy(user, {});
  
  alert(user.getName()); // Error

  // solution:

  class User {
    #name = "Guest";
  
    getName() {
      return this.#name;
    }
  }
  
  let user = new User();
  
  user = new Proxy(user, {
    get(target, prop, receiver) {
      let value = Reflect.get(...arguments);
      return typeof value == 'function' ? value.bind(target) : value;
    }
  });
  
  alert(user.getName()); // Guest

  // proxy != target

  let allUsers = new Set();

class User {
  constructor(name) {
    this.name = name;
    allUsers.add(this);
  }
}

let user = new User("John");

alert(allUsers.has(user)); // true

user = new Proxy(user, {});

alert(allUsers.has(user)); // false

// Revocalbe

let object = {
    data: "Valuable data"
  };
  
  let {proxy, revoke} = Proxy.revocable(object, {});
  
  // pass the proxy somewhere instead of object...
  alert(proxy.data); // Valuable data
  
  // later in our code
  revoke();
  
  // the proxy isn't working any more (revoked)
  alert(proxy.data); // Error