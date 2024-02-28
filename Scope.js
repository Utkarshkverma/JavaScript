//var c= 100
let a = 300 // ! global scope
if(true)
{
    let a = 10 // ! Block Scope
    const b = 20
    //var c = 30
    console.log(a);
}


console.log(a);
//console.log(b);
//console.log(c); //! It is giving val outta scope that's why we dont use it
