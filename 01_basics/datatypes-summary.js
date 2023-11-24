/*Datatypes are of two types: (1)Primitive (2)Derived
Primitive datatypes are call by value
7 Types of primitive datatypes : String, Number, Boolean, null, undefined, Symbol, BigInt

Non-primitive datatypes are reference datatypes
: Array, Objects, Functions*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

//putting 'n' at the end of an integer value makes it bigint

const bigNumber = 235678367n
console.log(typeof bigNumber); //bigint

//Array
const uttarPradesh = ["ghaziabad", "kanpur", "lucknow", "meerut"]

//objects : these are written in curly brackets and are written in key value pair
let myObj = {
    name : "Prakarti",
    age : 18,
}

//function
const myFunction = function(){
    console.log("Hello world!");
}

/* ************************* Stack and heap memory ******************************* */

/* Stack (Primitive), Heap (Non-Primitive)*/

//heap 
let userOne = {
    email : "userOne@google.com",
    upi : "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "newEmail@google.com"

console.log(userOne.email); //newEmail@google.com
console.log(userTwo.email); //newEmail@google.com