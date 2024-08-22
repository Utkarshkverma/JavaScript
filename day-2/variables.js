
// variable can be created by 3 keywords

// let
// const
// var

let message;
message = "Hello";
console.log(message);
// let and const are block scoped
// it means if we define let and const inside block it cannot be used outside

{
    let messagea  = "Hello";
}

// console.log(messagea)

const message1 =  "Hiii";
console.log(message1); 
//message1 = "Hello";
// console.log(message1); // error

// var : global or functional scope
{
    var message2 = "Hello";
}
console.log(message2);

/**
 * Variables defined inside a function are not accessible (visible) from outside the function.

 * Variables declared with var, let and const are quite similar when declared inside a function.

 */

function myFunction() {
    var carName = "Volvo";   // Function Scope
}
// console.log(carName); // error
  function myFunction() {
    let carName = "Volvo";   // Function Scope
}
// console.log(carName); // error
  function myFunction() {
    const carName = "Volvo";   // Function Scope
}
// console.log(carName); //error

var x = 45;
var x = 56;

console.log(x); // 56

/*
 *  1. alphabate, cannnot start from digit 
 *  2. cannot start with special character
 *  3. cannot contain space
 */


