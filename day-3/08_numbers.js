const score = 400

const balance = new Number(100)
console.log(balance);
console.log(balance.toFixed(2));

const otherNumber = 12345.213213123
console.log(otherNumber.toPrecision(6));

const hundred = 10000000

console.log(hundred.toLocaleString('en-IN'));

// +++++ Maths +++++

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); 
console.log(Math.floor(4.6));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());
console.log(Math.round(Math.random()*10) +1);
const min= 10;
const max = 100;
console.log( Math.floor(Math.random() * (max - min + 1)) + min);






