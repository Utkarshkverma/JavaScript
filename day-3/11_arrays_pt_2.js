const myHeros = ['Superman',"Spiderman", "Batman","Captian America"]
const myHeros2 = ['Aquaman','Flash','Ironman']

// myHeros.push(myHeros2)

// console.log(myHeros); // push array inside array

const myArray = myHeros.concat(myHeros2);
 console.log(myArray); // concat array inside array but will return new array

const all_new_heros = [...myHeros, ...myHeros2]
console.log(all_new_heros); // spread operator to create new array

const another_array = [1,2,3,4,[4,5,6],[5,7,8,[9,10]]]
const flatArray = another_array.flat(Infinity)
console.log(flatArray); // flat array to remove nested array

console.log(Array.isArray("Utkarsh"));
console.log(Array.from("Utkarsh"));

console.log(Array.from({name : "Utkarsh"})); // return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));








