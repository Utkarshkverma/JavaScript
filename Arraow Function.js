const userName = {
    userName : "John Doe",
    price: 1000,
    welcomemessage : function()
    {
        console.log(`${this.userName}, welcome to our store!`);
        console.log(this);
    }
}

userName.welcomemessage()
userName.userName = 'Sam'
userName.welcomemessage()

console.log(this);

function chaii()
{
    let userName = "Hitesh"
    console.log(this);
}

const chai = () =>
{
    let userName = "Hitesh"
    console.log(this);
}

//chai()

const log = (num1,num2)=>{
 return num1+num2 // 
}

console.log(log(5,7));

const add = (num1,num2) =>  num1+num2 // Implicit return don't write return function
console.log(add(9,4))

const loga = () => ({username: "utkarsh"})

console.log(loga())