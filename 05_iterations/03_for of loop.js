// for of

// ["", "", ""] // this is string

// [{}, {}, {}] // this is object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
}

const greetings =  "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}


// Maps

const map = new Map ()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

for (const [key, Value] of map) {
    //console.log(key, ':-', Value);
    
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}
 for (const [key, Value] of Object.entries (myObject)) {
    console.log(key, Value, ':-', Value);
    
 }



