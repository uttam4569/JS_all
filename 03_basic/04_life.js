// Immediately Invoked Function Expression (IIFE)
// Global scope ke polution se problem hoti hai use hatane  keliye iife use karte hai //

(function chai() {
    console.log(`DB CONNECTED`);
    
}) ();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('uttam')