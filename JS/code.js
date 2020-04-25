setTimeout(() => {
  console.log('TIMEOUT HANDLER!!!');
}, 0);

const fiveSecondsLater = new Date().getTime() + 5000;
while (new Date().getTime() < fiveSecondsLater) {}