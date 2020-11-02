/*
What is NgTemplateOutlet
@ViewChild(Comp)
@ViewChild('container', {read: ViewContainerRef, static: false}) container;
@ViewChild('templateRef', {read: TemplateRef, static: false}) container2;
@ViewChild('container', {read: ElementRef, static: false}) container3;
*/

// ViewChild vs contentChild and their basic syntax
// static: false, true - what is it?
// the tasks with <ng-content> with loop
/*
    <child [arr]>
    < ng-content #div>
        <div> my test div </div>
    </ng-content>

    </child>


    Child.

    @input arr
    @ContentChild('div') div

    <ng-container *ngFor="let i of arr">
        <div> *ngTemplateOutlet="div"
    </ng-container>



    <div #container></div>
<ng-template #templateRef></ng-template>

@ViewChild('container', {read: ViewContainerRef, static: false}) container;
@ViewChild('templateRef', {read: TemplateRef, static: false}) container2;
@ViewChild('container', {read: ElementRef, static: false}) container3;

*/

// ViewContainerRef vs TemplateRef vs ElementRef




