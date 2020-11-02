// Q1 what is one directional dataflow (ValueUpdatedAfterItWasCheckedError)
// Q2 Debug change detection
// Q3 async pipe

// What is change detection
// From which points change detection run. From parent or current component?
// How angular knows that Change detection should be executed [events, setT, setI, XMLHttpReq]
// OnPush vs default
// ValueUpdatedAfterItWasCheckedError - why
// zone.js
// Optimization mousemove
// OnPush with SetTimeout that updates inner state of component
// onChanges vs doCheck
// detectChanges, detach, reatach, runOutsideAngular
// async pipe with onPush
// disable zone.js for the whole app [get rid of this from global imports, and make ngZone: noop when bootstrap module]
// if click, content child will be updated if the component has onPush and no reference change [yes] (because click is special case!!!)

// * How Inline Caching optimize change detection dirty cycle
// * deep object comparison on change detection
// ValueUpdatedAfterItWasCheckedError - in onInit *