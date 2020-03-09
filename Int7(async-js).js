console.log(1);
setTimeout(() => console.log(2))
new Promise((res, rej) => res(3)).then((res) => console.log(res));
console.log(4);


async function getData () {
  let pr = new Promise((res, rej) => res([1,2,3])).then((res) => res);
  let res = await pr;

  return res;
}

[1,2,3].forEach(async (element) => {
  let data = await getData();
  console.log(data);
});

var arr1= [1,2,3];

for (let index = 0; index < arr1.length; index++) {
   (async() => {
    const element = arr1[index];
    let data = await getData();
    console.log(data);
  })();
}