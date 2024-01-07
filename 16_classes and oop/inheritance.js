class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
let coffee = new Teacher("coffee","coffee@teacher.com", "123")
coffee.addCourse()
let malaieCoffee = new User("malaieCoffee")
malaieCoffee.logMe()

console.log(coffee instanceof User);
