
const myArray = [0,1,2,3,4,5]
console.log(myArray[0]);

const myHeros = ['Superman',"Spiderman", "Batman","Captian America"]
console.log(myHeros[0]);

const arr = new Array('Superman',"Spiderman", "Batman","Captian America")
console.log(arr);


myArray.push(6)
myArray.push(7)
myArray.pop()
myArray.unshift(9) // insert value at 1st position
myArray.shift()  // remove value from 1st position
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(100));

const newArry = myArray.join()

console.log(myArray);
console.log(newArry);

console.log(typeof myArray); // Object
console.log(typeof newArry); // String

console.log("A ", myArray);
const myn1 = myArray.slice(1,3)
console.log("B ", myn1);
console.log("A ", myArray);

console.log("Splice");


console.log("A ", myArray);
const myn2 = myArray.splice(1,3)
console.log("B ", myn2);
console.log("A ", myArray);








