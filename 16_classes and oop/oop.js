// Object literal makes


let user = {
    username: "uttam",
    loginCount: 8,
    signedIn: true,
    getuserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
      console.log(`Welcome ${this.username}`);
    }

    return this
}

let userOne =  new User("uttam", 12, true)
let userTwo = new User("CoffeeAurCode", 11, false)
console.log(userOne);
console.log(userTwo);

//Step-1 new keyboard use karte hain to phle ek empty object create   usse hum instant bolte hain
//Step-2 ek constructor function call hota hai new keyboard ke karn
//Step-3 this keyboard jo arguments likhe hai woh inject ho jata hai
//Step-4 function ke andar jo bhi likhe hai wo mil jata