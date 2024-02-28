const score = 400
const balance = new Number(199)
console.log(score);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.896
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const num  = 1000000000
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));


// ~ Maths

console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-10));
console.log(Math.max(10,20));
console.log(Math.round(5.7));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.4));
console.log(Math.sqrt(3));
console.log(Math.random()); //value lies b/w 0 and 1
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
