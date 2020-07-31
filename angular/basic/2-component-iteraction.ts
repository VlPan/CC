// parent -> child


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

// can I place emit in DoCheck method?
