let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); // will return NaN value

let score1 = undefined
let valueInNumber1 = Number(score1)
console.log(valueInNumber1);

let score2 = false;
let valueInNumber2 = Number(score2)
console.log(valueInNumber2);

let score3 = true;
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);


let isMarried = -2;
let booleanIsLoggedIn = Boolean(isMarried); // only 0 will give false
console.log(booleanIsLoggedIn);

let is = ""
let booleanIs = Boolean(is) // only "" will give false
console.log(booleanIs);

let has = null
let booleanHas = Boolean(has) // only null will give false
console.log(booleanHas);

let are = undefined
let booleanAre = Boolean(are) // only null and undefined will give false
console.log(booleanAre);










