/* Objects (create, manage properties, built-in methods, hash data structure, property descriptors, static methods, calculated props, getter/setter)
 */

/* Object creation */
var o = new Object(1);
var o2 = {};

console.log(o.__proto__ === Number.prototype);

// TODO: manage properties
// TODO: Clone object tasks
// TODO: built-in methods downsides
// TODO: static methods
// TODO: calculated props
// TODO: hash data structure Theory and Practice of creation from array
// TODO: Object.create vs Object.assign

/* Has own property and for IN */
/* 1 */
var obj = { 
    a:1,
    b:2
}
for(key in obj) {
    console.log(key);
}

/* 2 */
Object.prototype.myMethod = () => 'special'
var obj = { 
    a:1,
    b:2
}
for(key in obj) {
    console.log(key);
}

/* 3 */
Object.prototype.myMethod = () => 'special'
var obj = { 
    a:1,
    b:2
}
for(key in obj) {
    if(obj.hasOwnProperty(key)) {
        console.log(key);
    }
}

/* 4 What if i do like this */
Object.prototype.myMethod = () => 'special'
var obj = { 
    a:1,
    b:2,
    hasOwnProperty: () => 'MyF'
}
for(key in obj) {
    if(obj.hasOwnProperty(key)) {
        console.log(key);
    }
}

/* 5 Solution */
Object.prototype.myMethod = () => 'special'
var obj = { 
    a:1,
    b:2,
    hasOwnProperty: () => 'MyF'
}
for(key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key);
    }
}

/* 6 What if I dont want to show my method (hasOwnProperty) ? */

Object.prototype.myMethod = () => 'special';
var obj = { 
    a:1,
    b:2
}
Object.defineProperty(obj, 'hasOwnProperty', {enumerable: false, value: () => 'myF'})

for(key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key);
    };
}


// TODO: How to copy Objects (spread, assign, stringify)
// TODO: Object.create

/* PRACTICE */
/* How to to like this: */
obj.a // 1
obj.a // 2
obj.a // 3



a = {b: 1};
Object.defineProperty(a, 'v', {enumerable: false, value: 'v'})
Object.keys(a)
a.hasOwnProperty('v')

//static obj methods
Object.assign
Object.create
Object.keys
Object.values
Object.entries
Object.freeze
Object.seal
Object.defineProperties
Object.defineProperty
Object.getOwnPropertyDescriptor
Object.is
// and all properties from function.prototype

var k = '123';
k.prop = 12;
// wrong

console.log(k.prop);
Object.getOwnPropertyDescriptors(k); 
// all keys w:f c:f e: t , length: w:f c:f e:f
Object.isFrozen(k);
// true

// seal vs preventExtension
// seal cannot delete
// preventExtension can delete

// clone object deep vs shallow
var a = {getSmt: () => console.log(12), b: 12, c: {v: 11}};
console.log(Object.freeze(a));
console.log(Object.getOwnPropertyDescriptors(a));


var b =  JSON.parse(JSON.stringify(a));
console.log(b);
console.log(Object.getOwnPropertyDescriptors(b));

// BAD: desriptors and methods dont preserve

// CLONE EXERCIZE with method preserve
var a = {getSmt: () => console.log(12), b: 12, c: {v: 11}};

function makeDeepClone(obj) {
    var res = {};
    console.log('makeDeepClone', obj);
    for(var key in obj) {
        var value = obj[key];
        res[key] = value instanceof Object && Object.keys(value).length > 0 ? makeDeepClone(value) : value;
    }
    return res;
}

var res = makeDeepClone(a);
console.log(res);