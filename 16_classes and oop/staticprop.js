class User {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createdId(){
        return`123`
    }

}
let uttam = new User("uttam")
//console.log(uttam.createdId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

let iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createdId())

