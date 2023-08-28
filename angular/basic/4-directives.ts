creating_behavior_directive:
// Q1: When you will decide to create your own structural/behavior directive? Why not using simple input/ouputs, or helpers, etc
// Q2: <div *myDir="1000; let helloWorld, let something = templateValue"> {{helloWorld}} </div>  It it valid? and what should I do to make it work and display 1000 inside diff
// exportAs
// trackBy

// ng-container vs ng-template

// structural vs behavior (examples of str directives in ang)
// ng-template
// *ngTemplateOutlet
// trackBy

`
<div myClicker="yellow" #clicked=myClicker>Hello world</div>
<button (click)="clicked.myClicker = 'red'">Click to directive</button>
`;


`
@Directive({
    selector: '[myClicker]',
    exportAs: 'myClicker'
})
export class MyClickedDirective {
    @HostBinding('style.color') color = 'blue';
    @HostListener('click') onClick() {
        console.log('MyDirective Clicked!');
    }
    @Input() set myClicker(val) {
        this.el.nativeElement.style.backgroundColor = val;
    }
    constructor(private el: ElementRef) {}
}
`;

creating_structural_directive:
`<div *loadFor="1000; let defaultValue, let something = contexValue"> <div>`;

`
    @Directive({
        selector: 'loadFor'
    })
    export class LoadForDirective() {
        set @Input loadFor(time) {
            setTimeout(() => {
                this.viewContainerRef.createEmbededView(templateRef, {$implicit: 1, contextValue: 2})
            }, time)

        };
        constructor(templateRef: TemplateRef, viewContainerRef: ViewContainerRef) {}

        onInit() {
            // can do the same as set loadFor here
        }
    }
`

// structural vs behavior directive

// == for *ngFor CompileInto
// <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
/* <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
    <li>...</li>
  </ng-template> */

  /* */

// writing your own ngFor

// trackBy

/*


*/

// NgNonBindable

/*
constructor(
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }

*/

// this.viewContainer.createEmbeddedView(this.templateRef);
// this.viewContainer.clear();


/*
<div *ngIf="hero" class="name">{{hero.name}}</div>
*/


/*

<ng-template [ngIf]="hero">
  <div class="name">{{hero.name}}</div>
</ng-template>

*/

// Angular does not create a real <ng-template> element, 
// instead rendering only the <div> and a comment node placeholder to the DOM.

// <!--bindings={
// 	"ng-reflect-ng-if": "[object Object]"
//   }-->
//   <div _ngcontent-c0>Mr. Nice</div>
