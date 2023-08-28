// Q1 what the difference between constructor and onInit?
// Q2 Why we have init and content
// Q3 Why do we have doCheck and onChanges

// parent -> child
// how will LH will be called?
`
<parent>
    <child> </child>
</parent>
`;
// P constructor
// C constructor // no title
// P onChanges (if there is inputs in parent)
// P onInit
// P DoCheck
// P AfterContentInit
// P AfterContentChecked
// C onChanges // title here
// C onInit
// C DoCheck
// C AfterContentInit
// C AfterContentChecked
// P AfterViewInit
// P AfterViewChecked
// P AfterViewInit
// P AfterViewChecked

// In development mode there will also:
// P DoCheck
// P AfterContentChecked
// C DoCheck
// C AfterContentChecked
// C AfterViewChecked
// P AfterViewChecked

// what if I provide input from parent to child?
`
<parent>
    <child [myInput]="variable"> </child>
</parent>
`;
// will it be accessible and defined in constructor?
// NO
// will it be accessible and defined in onChanges?
// YES
// Okay component initialized. What if I update input now? What will be called
// P Do Check
// P After Content Checked
// C onChanges
// C DoCheck
// C AfterContentChecked
// C AfterViewChecked
// P AfterViewChecked

// todo: onInit vs constructor
// todo: doCheck vs ngOnChanges
// detectChanges, detach, reatach, runOutsideAngular