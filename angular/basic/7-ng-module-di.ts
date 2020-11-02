// Q1 How to check whether it is singleTon or not?
// Q2 ForChild vs ForRoot
// Q3 how multi: true works?
// Q4 Why we can get parent component from child contructor
// Q5
/*
	<div a>
		<div b> </div>
	</div>
	a provide SerA, b uses SerA, will it accessible? [Yes]
 =========================
	<div a></div>
	<div b></div>

	and now? [No] why?

*/
// Q6 how interceptors connected with DI

// what is DI in the whole?
// basic example P -> CM1 [provide: Ser1]
//                 -> CM2 [use Ser1] // will it be accessible
// Singleton or not singleton
// DI in LL module
// providers in components
// viewProviders
// can we get parent component from child component. Why it is possible>?
// @Optional @Self @SkipSelf @Host
// @Host for directive and for ng-content
/*

<div a>

</div>

<div b> </div>

b want server that a provides - error, because it works only when b inside a, because it is called ELEMENT INJECTOR
*/


