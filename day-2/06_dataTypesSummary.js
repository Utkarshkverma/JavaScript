// Premitive

// 1. Boolean
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// 2. String
let str = 'Hello, World!';
console.log(str);
console.log(typeof str);
console.log(str.length);

// 3. Number
let num = 10;
console.log(num);
console.log(typeof num);

// 4. null
let nullVar = null;
console.log(nullVar);
console.log(typeof nullVar);
console.log(null === null);

// 5. undefined
let undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);
console.log(undefined === undefined);
console.log(undefined === null);
console.log(undefined === undefinedVar);
console.log(undefinedVar === null);

// 6. Symbol
let sym = Symbol('Hello');
console.log(sym);
console.log(typeof sym);
console.log(Symbol('Hello') === Symbol('Hello'));

// 7. BigInt
let bigInt = 10n;
console.log(bigInt);
console.log(typeof bigInt);
console.log(BigInt(10));


// Reference 

// 1. Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// 2. Object
let obj = { name: 'John', age: 30 };
console.log(obj);

// 3. Function
function greet(name) {
    console.log(`Hello, ${name}!`);
    }
    greet('John');
    console.log(typeof greet);
    console.log(greet === greet.toString());


    