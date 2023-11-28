const userEmail = "ramu@google.com"

if (userEmail) {
    console.log("Got user email");
    
} else{
    console.log("Don't have user email");
}


// falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, Not a Number //

// truthy values

// "0", 'truthy', " ", {}, function(){} //

// if (userEmail.length === 0) {
//     console.log("Array is empty");

    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// false == 0 then output is true //
// false == '' then output is true //
// 0 == '' then output is true //

// Nullish Coalescing Operator (??): null undefind

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 50 ?? 20

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



