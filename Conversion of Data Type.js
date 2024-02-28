let score = 33
console.log(typeof score); 

let score1 = "33";
console.log(typeof(score1));

let valueInNumber  = Number(score) // * String to Number
console.log(typeof(valueInNumber))

let s = "33abc"
let val = Number(s)
console.log(val) // * 33abc will give NaN when converted to Number
console.log(typeof(val))

let sc = null
let value = Number(sc)
console.log(value) // * null will give 0 when converted to Number

console.log(Number(undefined)) // * undefined will give NaN when converted to Number

console.log(Number(true)) // * true will give 1 when converted to Number
console.log(Number(false))// * false will give 0 when converted to Number

console.log(Boolean("33"))// * 33 will give 33 when converted to Number
console.log(Boolean(0));// * Only 0 will give false when converted to boolean

console.log(Boolean(null))// * null will give false when converted to boolean
console.log(Boolean(undefined))// * undefined will give false when converted to boolean
console.log(Boolean(""))//* Empty string will give false when converted to Boolean

