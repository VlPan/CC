// create
// BigInt is a special numeric type that provides support for integers of arbitrary length.
// necessary with integer overflow issues
const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // same as 10n

alert(1n + 2n); // 3
alert(5n / 2n); // 2 can only return bigint

// We can’t mix bigints and regular numbers:
alert(1n + 2); // Error: Cannot mix BigInt and other types

// convertion 
let bigint = 1n;
let number = 2;

// number to bigint
alert(bigint + BigInt(number)); // 3

// bigint to number
alert(Number(bigint) + number); // 3

// Not support (+n) convert
let bigint = 1n;

alert( +bigint ); // error

// strict equality
alert( 1 == 1n ); // true
alert( 1 === 1n ); // false

