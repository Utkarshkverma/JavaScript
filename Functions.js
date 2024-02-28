function calculatePrice(...num) // ! Rest and Spread operater
{
    return num
}

console.log(calculatePrice(200,400,500,600));  
// Output: [200, 400, 500, 600]

function calculate(val1,val2,... val3)
{
    return  [val1, val2, val3];
}

console.log(calculate(100,200,300,400,500,600));
// Output : [100, 200, [300,400,500,600]]

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}


handleObject({name:"John", price:100});
// Output : username is John and price is 100