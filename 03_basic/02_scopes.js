// {} This is scope
//++++++++++++Types of scope+++++++++//
// 1. Block scope (let is block scope)
// 2. function scope (function is used in inside function scope)
// 3. Global scope ( var is global scope)

let a = 300
if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);

}

//console.log(a);
//console.log(b);

function one(){
    const username = "uttam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "uttam"
    if (username === "uttam"){
        const website = "youtube"
        //console.log(username + website);

    }
    //console.log(website);

}

//console.log(username);

//+++++++++++++++++++++ Interesting +++++++++++++++++++ //

console.log(addone(5))
function addone(num){
    return num + 1
}


 // Declartion se phle use nhi kar sakte hai decl ke baad use kar skte hai
 addTwo(5)
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))

