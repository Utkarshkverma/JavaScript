// Starting date  = jan 1 1970

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0,23);
console.log(myCreatedDate.toDateString());

let myTimeStamp  = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myCreatedDate/1000));
console.log(new Date().getDay()+1);




