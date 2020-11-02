// Q1 how ngModel become part of NgForm under the hood? *
// Q2 prestine/dirty, touched/untouced, valid/invalid
// Q3 how to create directive that will validte template driven input


// Template driven forms how to create
// #f = ngForm
// name - ngModel
// max-length min-length pattern email required
// ([ngModel])="email" #email = ngModel
// email.invalid && (email.touched || email.dirty)
// email.errors.errorNama
// ngModelGroup

// Validate by Directive:
/*

    @Directive({
        selector: 'MyValidatorDirctive',
        providers: [
            {provide: NG-VALIDATORS,
                useExisting: MyValidatorDirective
            }
        ]
    })

    export class MyValidatorDirective implement Validator {

        validate(control: AbstractControl) {
            let fn = control.controls.firstname;
            let ln = control.controls.lastname;
        }
    }
*/