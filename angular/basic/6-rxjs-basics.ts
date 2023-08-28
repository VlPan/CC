// Q1 what will happend if we make two subscriptions for http call, why?
// Q2 exaple of couple of operators (zip vs combineLatest for example)
// Q3 when we need switchMap, take(1)
// Q4: when to unsubscribe, what if it is service?

// What is Observable?
// hot vs cold observables?
// Subject Types
// create your own interval observable
// subscription observer interface
// how to clear subscriptions
// hight order observables - swithcMap, concatMap, exhautMap, mergeMap
// promise vs observable
// http two subscribes, why if we do not subscribe we will not receive calls from backend? sharing and multicasting
// error catching in rxjs
// schedulers

/*
console.log(1)
of(2).subscribe(console.log)
console.log(3)

console.log(1);
of(2).pipe(observeOn(asyncScheduler)).subscribe(
  (val) => console.log(val)
);
console.log(3);
*/


/*

Types of Schedulers in RxJS
null – This means you are not setting any scheduler. Execution of the observable or subscription happen Synchronously.
queueScheduler – Schedules the execution on a queue, useful for iteration operations.
asapScheduler – Schedules on the JavaScript microtask queue. Microtask queue used for Promises.
asyncScheduler – Schedules work with setInternal.
animationFrameScheduler – Schedules task just before the next browser content repaint. For example, 
use it to create smooth browser animations.

*/