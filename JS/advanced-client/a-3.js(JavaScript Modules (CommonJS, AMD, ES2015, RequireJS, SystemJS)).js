// JavaScript Modules (CommonJS, AMD, ES2015, RequireJS, SystemJS)

// TODO CommonJS, AMD(RequireJS), SystemJS, ESM

// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js imported the same object
// Changes made in 1.js are visible in 2.js

// Evaluate once than shared across all modules

// import 'smt.js' will run smt.js code


// Import “as”
// export "as"
// why import {a, b} from 'file' better than import * as X from 'file'
// export default

// mixed default with imports

// 📁 user.js
export default class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  // 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');

// Re-export index.js

// try it!
import {admin} from getAdminModule('admin.js');
function getRelativeModule(name) {
    return './' + name;
}

// Dynamic imports

import(modulePath)
  .then()
  .catch()


// 📁 say.js
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}

let {hi, bye} = await import('./say.js');

hi();
bye();

// Import is not a function!