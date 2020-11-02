
/* 
  animations: [
    trigger('enableStateChange', [

      state(
        'default',
        style({
          opacity: 1
        })
      ),
      state(
        'disabled',
        style({
          opacity: 0.5
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ])
  ]

*/

// trigger
// state
// style
// transtion,
// animate
// enter
// exit
// *
// void
//

/* 

trigger('fadeSlideInOut', [
	transition(':enter', [
		style({ opacity: 0, transform: 'translateY(10px)' }),
		animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
	]),
	transition(':leave', [
		animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
	]),
]),


<div *ngIf="show" @fadeSlideInOut>...</div>
*/
// query - apply animation to all children
// limit on query


// amimate children
/*

trigger('container', [
		transition(':enter, :leave', [
			query('@*', animateChild()),
		]),
	]),

*/

// Router Animations
// [@routeAnimation]
// 	data: { animation: 'home' },

