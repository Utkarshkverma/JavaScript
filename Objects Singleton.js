const tinderUser = new Object(); // ~ Singleton Object
//--------------------------------------------------------- 
tinderUser.userName = "Random"
tinderUser.age = 21
tinderUser.gender = "Male";
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "someone@gmail.com",
    fullName  : {
        firstName : "SomeOne",
        lastName: "Lastname",


    }
}


const obj1 = { 1:2 , 3:4}
const obj2 = {5:6, 7:8}

const retrive = Object.assign(obj1,obj2)
console.log(obj1);

const obj3 = {...obj1,...obj2} // & Use this 
console.log(obj3);


// ! Use this when value is fetched from database

console.log(Object.keys(tinderUser)); // & return is array
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLooedIn'));