// Page Lifecycle (parsing, reflow, repaint, optimizations)

// TODO: Q1: wait for 5 seconds. Will button appear 
var btn = document.createElement('button');
btn.textContent = 'MyVtn'

c.appendChild(btn);

const fiveSecondsLater = new Date().getTime() + 5000;
while (new Date().getTime() < fiveSecondsLater) {}
btn.style.display = 'none';

// what will happend if I trigger this script??
// render DOM. wait 5 seconds. No button on screen

// TODO: Q2: button example
var btn = document.createElement('button');
btn.textContent = 'MyVtn'

c.appendChild(btn);

btn.style.display = 'none';

// what if I wrap 9 line in setTimeout?
// what if I wrap 9 line in reqAnimFrame?
// what if I wrap 9 line in primise that resolve immediately?
