// Todo: Memory are of two types: 1. Stack(Premitive) 2. Heap(Non Premitive) 

let myName = "Utkarsh Kumar Verma"
let anotherName = myName

console.log(myName)

console.log(anotherName)

anotherName = "Rishab Kumar Verma"

console.log(anotherName)

console.log(myName)

// ? In stack memory we are offered copy of the data 

let user = {
    email : "verma@gmail.com",
    upi : "itsme@ybl.com"
}

let user1 = user
let user2 = user1
user2.email = "vermau@gmail.com"

console.log(user)

//? In heap memory we are offered the reference to the value that's why on changing it it get completely changed
