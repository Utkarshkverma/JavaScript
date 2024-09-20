const name = "Utkarsh";
const title = "Verma";


// String interpolation
console.log(`Hello my name is ${name} ${title}`);

const gameName = new String("God of war");
console.log(gameName);
console.log(gameName[0]);

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'));

console.log(gameName.substring(0,4)); // can't give -ve value
console.log(gameName.slice(-8,4)); // can give -ve value

const newString = "    Utkarsh     "
console.log(newString);
console.log(newString.trim());

let url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('=','-'));
console.log(url.replaceAll('=','-'));

let str1 = "dfwefefpowkoijijrekrokokawkoegkowokokokwokro fecdckdsmsekcpokchlwuiqwejlfeqeffe"
console.log(str1.split(''));











