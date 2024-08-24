// type conversion 
// 1. explicit type conversion

// a. String conversion 
let a = 12;
console.log(typeof a);
let b  =  String(a);
console.log(typeof b);
console.log(a.length);
console.log(b.length);

console.log(typeof a.toString());
console.log(typeof false.toString());

// b.  Numaric conversion
let value = "1234"
console.log(value+5);
let value1 = Number(value)
console.log(value1+5);
console.log(typeof value1);
let int = parseInt(value);
console.log(int+5);
let float = parseFloat(value);
console.log(float);
// Undefined becomes NaN, null become zero, true =  1, false = 0



// c. Boolean conversion
let ex = "false"
console.log(Boolean(ex));
let ex1 = ""
console.log(Boolean(ex1));
let ex2 = 23;
console.log(Boolean(ex2));
console.log(Boolean(-ex2));
let ex3 = 0;
console.log(Boolean(ex3));
let ex4 = null;
console.log(Boolean(ex4));


// 2. implicit type conversion
