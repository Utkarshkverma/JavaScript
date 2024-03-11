const arr  = ["java","js","py"]

const val= arr.forEach((item)=>{ // ! for each does't return the value
    console.log(item);
}
)

console.log(val);// Udefined

const mynums = [1,2,3,4,5,6,7,8,9,10]

const arr1 = mynums.filter( (num)=> {
    return num > 4
}) //! Filter = It returns the value but when we use curly braces we need to use keyword return  otherwise it will consider as an expression not a statement
console.log(arr1);


const newNums = []

mynums.forEach((num)=>{
    if(num%2===0){
        newNums.push(num)
    }
})

console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let filter_book = books.filter((book) => book.genre === "History");

  console.log(filter_book); // [{title:"Book Seven

filter_book = books.filter((book)=> {return  book.publish < 1990 && book.genre ==="Fiction"});

console.log(filter_book);

// -- Map 

const newNum = mynums.map( (num)=> num*2 );
console.log(newNum);

const newnum1 = mynums.map((num)=>num*10).map((num)=>num+3).filter((num)=>num>30 && num<60);

console.log(newnum1);



// -- Reduce

const nums = [1,2,3]
var total = nums.reduce( function(acc, curr){
    console.log(acc);
    console.log(curr);
    return acc+ curr;
},0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const price = shoppingCart.reduce( (acc, obj) => acc+obj.price ,0 )

console.log(price);