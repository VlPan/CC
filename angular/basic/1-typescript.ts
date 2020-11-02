


// Q1

export type Freeze<T> = {
	readonly [key in keyof T]: Freeze<T[key]>
}


type t1 = {a: number, b: {c: number, x: number}};


type t2 = Freeze<t1>;
type t3 = Readonly<t1>;

var a2: t2 = {
	a: 1,
	b: {
		c:1,
		x:2
	}
};

var a3: t3 = {
	a: 1,
	b: {
		c:1,
		x:2
	}
};

a3.b.c = 12;


// Q2 Unfreeze It!





// todo: tuple magic
// todo: take first from array
// never


// Object vs object
// All non-primitive types
type NonPrimitive = object;

const proto = {};

Object.create(proto);     // OK
Object.create(null);      // OK
Object.create(undefined); // Error
Object.create(1337);      // Error
Object.create(true);      // Error
Object.create("oops");    // Error
// interface WeakMap<K extends object, V>

// object vs Object vs {}

// Object (uppercased) describes functionality that is common to all JavaScript objects. That includes the toString() and the hasOwnProperty() methods, for example.


// const obj = {};
// obj.prp = 12 // error
// you can still use methods from prototype

// define variable
let a: Object = 5;
a = 12;

// it works. why?

a.newProp = 12;

// no work. why?

// how to define interface? optional prop, class. const vs readonly
interface IPerson {
    gender: string;
}
class Person implements IPerson {
    public gender: string;
}
class Teacher extends Person {}

// given a function. write its type
function func(person: IPerson): void {
    console.log(person.gender);
}

var myF: (person: IPerson) => void = func;

// person: Person - OK
// person: Teacher - OK
// person: Object - OK

// call function

func(new Person());     // Ok
func(new Teacher());    // Ok
func({gender: 'male'}); // Ok

// DI sugar with angular
// write an example of injecting service to component:


@Component({
//..
})
class MyComp {
    constructor(private service: ser) {}
    // what private variable mean here? how to write it differently?
}

// never vs any vs void
function error(message: string): never {
    throw new Error(message);
}

/** Бесконечный цикл */
function infiniteLoop(): never {
    while (true) {
    }
}

/** Божественная рекурсия */
// Utility Types
function infiniteRec(): never {
    return infiniteRec();
}
type Exclude<T, U> = T extends U ? never : T;

/** Extract from T those types that are assignable to U - PRIMITIVE */
type Extract<T, U> = T extends U ? T : never;

/** Construct a type with the properties of T except for those in type K. */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/** Exclude null and undefined from T */
type NonNullable<T> = T extends null | undefined ? never : T;




class NeverError extends Error {
    // если дело дойдет до вызова конструктора с параметром - ts выдаст ошибку
    constructor(value: never) {
        super(`Unreachable statement: ${value}`);
    }
}


class ActionEngine {
    doAction(action: AdminAction) {
        switch (action) {
            case "CREATE":
                // логика здесь
                return "CREATED";
            case "ACTIVATE":
                // логика здесь
                return "ACTIVATED";
            default:
                throw new NeverError(action);
                //                   ^ контролирует здесь что все варианты в switch блоке определены.
        }
    }
}

// Теперь добавьте в AdminAction новое значение «BLOCK» и получите ошибку на этапе компиляции: Argument of type '«BLOCK»' is not assignable to parameter
//of type 'never'.ts(2345).


class never<never> {
    never: never;
}

const whats = new never<string>();
whats.never = "";






