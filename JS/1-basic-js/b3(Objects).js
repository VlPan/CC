/* Objects (create, manage properties, built-in methods, hash data structure, property descriptors, static methods, calculated props, getter/setter)
 */

// TODO: QUESTION 1 Creation
// how to crate object?
// !
var o = new Object(1);
var o2 = {};
var o3 = Object.create(null)
// What the difference between these three objects?
console.log(o.__proto__ === Number.prototype);

// TODO: QUESTION 2 keys, forIn, forOf, descriptor, call

x = {1: 3, "1": 4, 1.0: 5} // x[1] == 5

// !
/*has own property and for IN */
/* 1 Here is object */
var obj = {
    a:1,
    b:2
}
for(key in obj) {
    console.log(key);
}

/* 2 What if I add method to its prototype, will it be displayed in forIn, how to fix it? */
Object.prototype.myMethod = () => 'special'
var obj = { 
    a:1,
    b:2
}
for(key in obj) {
    console.log(key);
}

/* 3 Solution But Why it does not print methods properties from prototype? How can I define myMethod the same way */
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

/* 4 What if i add my Own has own property */
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

/* 5 Solution call hasOwnProperty from Object.prototype */
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


// TODO: QUESTION 3 static methods
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

// TODO: QUESTION 4 seal vs preventExtension
// seal cannot delete
// preventExtension can delete

// TODO: QUESTION 5 clone object deep vs shallow
var b =  JSON.parse(JSON.stringify(a));
console.log(b);
console.log(Object.getOwnPropertyDescriptors(b));


// TODO: PRACTICE
/* How to to like this: */
var counter = 0;
var obj = {};
Object.defineProperty(obj, 'a', {
    get: function() {
        return counter++;
    }
})
obj.a; // 1
obj.a; // 2
obj.a; // 3

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



/* keys, hasOwnProperty with enumerable */
// var b =  Object.create(null) vs var b = {};


// ForOf over objects, Set, String, map

'Visit W3Schools.\nLearn JavaScript.'.replace(/\n/, String.raw`\n`)


// TODO: manage properties
// TODO: Clone object tasks
// TODO: built-in methods downsides
// TODO: static methods
// TODO: calculated props
// TODO: hash data structure Theory and Practice of creation from array
// TODO: Object.create vs Object.assign

// TODO: How to copy Objects (spread, assign, stringify)
// TODO: Object.create

var k = '123';
k.prop = 12;
// wrong

console.log(k.prop);
Object.getOwnPropertyDescriptors(k); 
// all keys w:f c:f e: t , length: w:f c:f e:f
Object.isFrozen(k);
// true
