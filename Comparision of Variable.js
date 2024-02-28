console.log(2>1)
console.log(2>=1);
console.log(2<1);
console.log(2 ==1);
console.log(2 != 1);

console.log('2'>1);
console.log('02'>1);

// ! Unpredictable result as null>0  = false and null == 0 fa but null >= 0 = true
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) 

// ! Unpredictable result as undefined will give false in each case
console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined < 0);

// ! Strict Check = It will also check data type
console.log(2==='2') 