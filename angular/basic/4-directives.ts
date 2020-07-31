creating_behavior_directive:
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
``;