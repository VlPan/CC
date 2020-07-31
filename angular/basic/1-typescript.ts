
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