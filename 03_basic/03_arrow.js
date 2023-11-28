// This method current context refeer karta hai //



const user = {
    username: "uttam", 
    price: 399,

    welcomeMessage: function(){
        console.log(`${this.username} , welocome to website`); 
        console.log(this);

    }

}
// user.welcomeMessage()
// user.username = "karan"
// user.welcomeMessage()

 //console.log(this);

 // this is not use in function and only use in object inside

//  function chai(){
//     let user = "uttam"
//     console.log(this);
//  }

//  chai()

// const chai = function () {
//     let username = "uttam"
//      console.log(this.username);

    
// }

const chai = () => {
    let username = "uttam"
     //console.log(this);



}

chai()

// (() => {}) // this is arrow function

// const addTwo = (num1, num2) =>{
//     return num1 +num2  // this isexplicit

// }

//const addTwo = (num1, num2) => num1 +num2

//const addTwo = (num1, num2) => (num1 +num2) // this is implicit
const addTwo = (num1, num2) => ({username: "uttam"})


console.log(addTwo(3, 4));

