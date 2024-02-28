let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(typeof myDate)


let myCreatedDate = new Date(2023,1,23,);
console.log(myCreatedDate);

console.log(typeof myCreatedDate);

let date2 = new Date(2023,1,23,)
console.log(date2);
let timeStamp = Date.now() 
console.log(Math.floor(Date.now()/1000));
console.log(new Date().getMinutes());

myDate.toLocaleString('default',{
    weekday: "narrow",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",

})

console.log(myDate);
