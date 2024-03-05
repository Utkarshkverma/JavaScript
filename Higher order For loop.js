const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for (const i of arr) {  // ! For of loop in javascript
    console.log(i); // 1 2 3 4 5 
}

// ! Maps in JavaScript

const map = new Map()
map.set("In", "India");
map.set("USA", "United Stataes of America");
map.set("Fr","France")
map.set("In", "India");

for (const [key, value] of map) { // ! For of in JavaScript
    console.log(key);
    console.log(value);
    
}


// ! For Of in Objects

const myobj = {
    game1 : "GOW",
    game2 : "Spiderman",
    game3: "The Last of us"
}

// for (const [key,value] of myobj) {
//     console.log(key + ": " + value);  // ! objects are not iteratable in for of loop
// }

for (const key in myobj) { // ! For In loop 
    console.log(key);
    console.log(myobj[key]);
}

for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}


for (const key in map) {
   console.log(key); // ! Map will not give any output as it is not iteratable
}


arr.forEach(element => {
    console.log(element); // ! This method works on arrays only
});


arr.forEach(function(item){
    console.log(item);
})

arr.forEach((i)=>{
    console.log(i);
})


function printMe(item){
    console.log(item);
}

console.log(printMe("Hello"));

// arr.forEach(item,index,arr){
//     console.log(item, index,arr);
// }


const coding=[
    {
        lang: "javascript",
        langFile:"js"
    },
    {
        lang: "java",
        langFile:"java"
    },
    {
        lang: "python",
        langFile:"py"
    }
]

console.log(coding);


coding.forEach((item)=>{
  console.log(item.lang);
  console.log(item.langFile);
})