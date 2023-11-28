// sayMyname this is referenence
// sayMyname () this is excute
// function sayMynae(){} this  is syntax

function sayMyname(){
    // console.log("U");
    // console.log("T");
    // console.log("T");
    // console.log("A");
    // console.log("M");
    
}

sayMyname() 
function addTwoNumbers(number1, number2){  // parameter
    //console.log(number1 + number2)
}

addTwoNumbers("a",4)  // Arguments



// function addTwoNumbers(number1, number2){  
//     console.log(number1 + number2)
// }



function addTwoNumbers(number1, number2){  
    
    // let result = number1 + number2
    // return result
    return number1 + number2

}

 const result = addTwoNumbers(5,4)

 //console.log("Result : ", result);

 function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return

    }
    return `{username} just logged in`
 }

 //console.log(loginUserMessage("uttam"));

 //console.log(loginUserMessage("uttam"));


 function calculateCartPrice(val1, val2, ...num1){
    return num1

 }
 //console.log(calculateCartPrice(200, 300, 400, 6000));


 const user = {
    username: "uttam",
    price: 199
 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 //handleObject(user)
 handleObject({
    username: "sam",
    price: 399
 })

 const myNewArray = [100, 200, 300, 400]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 400, 600, 4000]));







