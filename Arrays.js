const arr = []

arr.push(1)
console.log(arr);

arr.push(2)

console.log(arr);

arr.push(3)

console.log(arr);

arr.pop()

console.log(arr);

arr.unshift(3)

console.log(arr);

arr.shift()

console.log(arr)

console.log(arr.includes(4));

console.log(arr.indexOf(4));

const arr2 = [1, 2, 3, 4]

const newArr = arr.join()

console.log(newArr)


// ! Slice v/s Splice

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("A", arr3);

console.log(arr3.slice(2, 5))

console.log("B", arr3);

console.log(arr3.splice(2,6));

console.log("C", arr3);

// ! Splish will trim down the original array while slice will show only the portion of that array

const marvelHeroes = ["thor","ironMan","Captain America"]
const dcHeroes = ["SuperMan","Flash","Batman"]
//marvelHeroes.push(dcHeroes) // ! Merge will add direct array 2 leading to 2D array
//console.log(marvelHeroes[3]);

//! Concatenation
const marvel3 = marvelHeroes.concat(dcHeroes) // ! Concat will concat multiple arrays leading to 1D array 
console.log(marvel3);


// ! Spread

const all_Heros = [...marvelHeroes, ...dcHeroes] // ! Another wy to perform concatanation

console.log(all_Heros);

const another_array = [1,2,3,[4,5,6],7,[8,[9]]]

// ! Flatting of the array

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray(another_array));

console.log(Array.from("Utkarsh"));

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c));
