const userEmail = "user@example.com"; // ! If we assume that the value of sting is true it is called truthy

if(userEmail)
{
    console.log(userEmail); // Output: user@example.
}
else{
    console.log("Don't have the email");
}

// & falsy value

// ! false ,0,-0,BigInt 0n,"", null,undefined,NaN are all considered as Falsy values in JavaScript.

// & truthy value

// ! "0" , 'false' , ' ', [],{}, function(){}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0) console.log("Hello there");

const emptyArr = []
if(emptyArr.length === 0) console.log("Whoa");


// Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = 5??10

console.log(val1);
val1 = null ?? 10
console.log(val1);

var1 = undefined??15
console.log(var1);


val1 = null ?? 10 ?? 20
console.log(val1);


// Ternary Operator

const ip = 100
ip >= 80  ? console.log('Pass') : console.log('Fail');