// type is not fixed in js

let arr1 = [1,2,3.5, "Hello", true]
console.log(arr1);
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);

let arr2 =  new Array("Hello", 1,2,3.4)
console.log(arr2);

let arr3 = new Array(1,2,3, new Array(3,4,5))
console.log(arr3);

arr1.forEach(element => {
    console.log(element);
    
});

arr3.forEach(function(item, index)
{
    console.log(index+"=>"+item);

    
})

arr3.push("Rishab")
console.log(arr3);

let a = arr3.pop()
console.log(arr3);
console.log(a);

let b = arr3.shift()
console.log(b);

arr3.unshift("Utkarsh")
console.log(arr3);

console.log(arr3.indexOf("Karan"));

// splice
arr3.splice(1,2)
console.log(arr3);

// slice
let arr4 = arr3.slice(1,3);
console.log(arr4);

