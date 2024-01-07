// let myName = " uttam      "
// let myChannel = "coffee    "

// console.log(myName.length);

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}
Object.prototype.uttam = function(){
    console.log(`uttam is present in all objects`);
}

Array.prototype.heyuttam = function(){
    console.log(`Uttam says hello`);
}

//heroPower.uttam()
//myHeros.uttam()
//myHeros.heyuttam()
//heroPower.heyUttam()
// inheritance

let User = {
    name:"coffee",
    email: "coffee@google.com"
}


let Teacher = {
    makeVideo: true
}

let TecahingSupport = {
    isAvailable:false
}
 
let TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User
// Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Coffee"
String.prototype.trueLength = function(){
    console.log(`{this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLenght()
"uttam".trueLength()
"iceTea".trueLenght()