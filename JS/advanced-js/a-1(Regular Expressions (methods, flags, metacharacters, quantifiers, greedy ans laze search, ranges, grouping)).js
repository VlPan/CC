// Regular Expressions (methods, flags, metacharacters, quantifiers, greedy ans laze search, ranges, grouping)


// regExp.exec
// reg.test
// str.match

let str = 'My name is Vladzimir';
let reg = /My name is (\w+)/g;


let str = '[sto] [12a2] 123';
let regExp  = /\[\w+\]/g;

let str = '[sto] [12a2] 1234';
let regExp  = /My age is [0-9]{1,3}/

let str = 'My age is 1234 Hello hello';
let regExp  = /[A-Z]\w+/

str = 'file.mp3 file.mp4';
let regExp = '(\w+)\.mp3';


function domainName(url){
    let res = url.replace(/https?:\/\/|www\./g, '');
    return res.split('.')[0];
  }

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");