// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

let coffee = new User("coffee", "coffee@gmail.com", "123")
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());

// Behind the scene

 function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    User.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }
    User.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }
    
    let tea = new User("tea", "tea@google.com", "123")
    console.log(tea.encryptPassword());
    console.log(tea.changeUsername());