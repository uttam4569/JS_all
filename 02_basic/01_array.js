// array

// []  =  Square brackets or Box Bracket
// ()  =  parehtheses or Round Brackets
// {}  =  Brace or Curly Brakets
// < > =  Angle Brackets or Chevrons

const myArr = [0,1,2,3,4,5,]
const myHeros = ["Yash Raj", "Amir khan", "Allu Arjun"]
const myArr2 = (1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods
// 1.Push(how many array in present just like 0, 1, 2, 3)
// 2.Pop(pop means remove in last element in present in array)

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


//myArr.unshift(9)
//myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.includes(13));
// console.log(myArr.indexOf(13)); // if present element is available then present element print if not present element not available then print(-1)

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// Slice, Splice
 
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myn1);

const myn2 = myArr.splice(1, 3)
onsole.log("C", myArr);
console.log(myn2);