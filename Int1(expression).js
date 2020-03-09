/* Advanced Expressions (auto type conversions, comparison) */

console.log(NaN === NaN);
console.log(null === null);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Object);
console.log(typeof {});
console.log(isFinite('123'));
console.log(isFinite('str'));

console.log([1,2] + [3,4]);
console.log('a' + NaN);

console.log(!![]);
console.log(!!{});
console.log(!!'1');
console.log(!!'');
console.log(!!null);
console.log(!!NaN);