
// Q1 data binding (input, output, two ways)
// Q2 by services
// Q3 what if we pass streams as inputs what we should be aware of?
// Q4 What is one directional dataflow
// additional
//

// parent -> child

// todo: pass data from parent to child
// todo: from child to parent


parent:
`
title = 'title;
<child
    [(myInt)]="title"
>
</child>
`;

child:
`
@Input() myInt: any;
{{myInt}}
<input type="text" [(ngModel)]="myInt">
`;

// make it work:
parent_the_same:


child:
`
@Output() myIntChange: EventEmitter<any> = new EventEmitter();
@Input() myInt: any;
onInput($event) {
    this.myIntChange.next($event.target.value);
}

{{myInt}}
<input type="text" <input type="text" [(ngModel)]="myInt" (input)="onInput($event)">>
`;


