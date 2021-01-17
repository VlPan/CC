// Q1 what is control value accessor
// Q2 When you would use template driven vs reactive form


// implementing controlValueAccessor

/*

@Component({
    template: '<input [(ngModel)]="value"/>local: {{val}}',
    selector: 'custom-input',
    providers: [{
        implement: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: myCustomInput
    }]
})
export class MyCustomInput implements ControlValueAccessor {

    onChange any = () => {}

    onTouche: any = () => {}

    val =""

    set value(val) {
        this.val = val;
        this.onChange(val)
        this.onTouch(val)

    }

    writeValue(value) {
        this.value = value;
    }

    registerOnTouched(fn) {this.onTouch = fn}

    registerOnChange(fn) {this.onChange = fn}
}


USING:

<app-custom-input
 [(ngModel)]="external"
 name="externalVal"
 #validations="ngModel"></app-custom-input>


*/



