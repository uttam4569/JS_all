// if

// if  condition is True then the code execute 

// if condition is Flase then the code not excute

// True Or Flase (condition)

// (<) = les than
 // (>) = grater than
 //(<=) = greater ya equalsto hai ya nhi 
 //(>=) = lessthan ya equalsto hai ya nhi
 //(=)  = assginment operator
 //(==) = equals hai ya nhi
 //(!=) = not equals hai((-)statement me (-) checking bhi karte hai true ya flase hota hai)
 //(===)= strict equal(Num ya Datatype bhi important uske liye use karte hai)

//  const isuserloggedIn = true
//  const temperature = 41

//  if ( temperature === 40 ) {
//     console.log("less than 50");

//  } else {
//      console.log("temperature is greater than 50");

//  }
//  console.log("Excute");

// const score = 200 

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

//const balance = 1000

//if(balance > 500) console.log("test"),console.log("test2"); 

// (this is not good practice. Because it is not readable this is code)

// const balance = 1000

// if (balance > 500) {
//     console.log("less than 500");
// } else if ("balance < 750") {
//     console.log("less than 750");

// } else if ("balance < 900") {
//     console.log("less than 750");

// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const userLoggedInFromEmail = true
const userLoggedInFromGoogle = false

if(userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User logged in");

}
