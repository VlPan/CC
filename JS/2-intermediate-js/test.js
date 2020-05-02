var btn = document.createElement('button');
btn.textContent = 'MyVtn'

c.appendChild(btn);

const fiveSecondsLater = new Date().getTime() + 5000;
while (new Date().getTime() < fiveSecondsLater) {}

btn.style.display = 'none';