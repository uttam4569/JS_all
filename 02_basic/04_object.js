// const tinderUser = new Object()  // (Singleton object)

const tinderUser = {               // (it is non-singleton object)

}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// const regularUser = {
//     email: "sammy@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Uttam",
//             lastname: "Kumar"

//         }
//     }
// }

// //console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 const obj3a = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3b= {...obj1, ...obj2}
console.log(obj3b);

// const user = [
//     {
//         id: 1,
//         email: "uttm@google.com",
//     },
//     {

//     },
//     {

//     },
//     {

//     },
// ]

// user[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnproperty('isLoggedIn'));

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "uttam",
// }
// // cosole.courseInstructor

// //const{courseInstructor: instructor} = course
// console.log(instructor);


 const navbar =  ({company}) => {
    return {
        "name": "uttam",
        "coursename": "js in hindi",
        "price": "free",
    };

 };

 let result = navbar({company: "uttam"});
 console.log(result);

 


