// Object declare are two types

// 1.Literals object (literal create object from not create sngleton)
// 2.constructor     (constructor create object from always singleton)

// singleton
//Object.create (create a singleton)


// object literals  // ( {} This is oject but it is empty object )  

const mySym = Symbol("key1")

const JsUser = {       
   name: "Uttam",
   "full name" : "Uttam Kumar",
   [mySym] : "mykey1",
   age: "25" ,
   location : "Ambala",
   email : "uttam@google.com",
   isLoggedIn : "false",
   lastLoggedIn : ["Monday", "Saturday"]

}  

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name "]);
// console.log(JsUser[mySym]);

// if you rserve some word do not change user you use (object.freeze)

JsUser.email = "uttam@chatgpt"
//Object.freeze(JsUser) 
JsUser.email = "uttam@microsoft.com"

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
};
JsUser.greeting();
JsUser.greetingTwo();