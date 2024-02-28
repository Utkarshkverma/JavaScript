

const mySym = Symbol("myKey1")
const jsUser = { // ~ Obkect litrals
    name : "utkarsh",
    [mySym] : "myKey1",
    age: 21,
    location : 'Delhi',
    email : "vermau2k01@gmail.com",
    isLoggedIn :  false,
}

console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser[mySym]);

jsUser.email="verma_utkarsh01@yahoo.co.in";

//Object.freeze(jsUser) // ! Can't make further change

jsUser.greetings = function()
{
    return "Hello Js User";
}
jsUser.greet = function()
{
    return `Name : ${this.name}`;
}

console.log(jsUser.greetings());
console.log(jsUser.greet());




