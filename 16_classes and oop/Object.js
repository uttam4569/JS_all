//Function is also function but function is an object

// protype is not only provide methods together with internal properties provide 

// .this = jis ne bolaya hai 

function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
let cahi = createUser("chai",25)
let tea = createUser("tea", 250)

cahi.printMe()

 /* 
 Here's what happens behind the scenes when the new keyword is used:

 A new object is created: The new keyword initiates the creation of a new javaScript object.

 *A prototype is linked:- The newly created object gets linked to the prototype property of the constructor function. This mean that it has access to properties and methods defined on the constructor's prototype.
 
 *The constructor is called:- The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit reurn value is specified from the constructor. JavaScript assumes this, the newly created objected, to be the intended return value.

 *The new obhject is returned:- After the constructor function has been called, if it doesn't return a non-primitive value (object, arrau, function, etc.), the newly created object is returned.
 
 */
