//two ways to declare an object like literals and like constructors
//singleton object is created by constructors
//Object.create   - it is the constructor method to create object

const mySym = Symbol("key1")

const JsUser = {
    name : "Prakarti",
    "full name" : "Prabhakar Prakarti",
    age : 18,
    [mySym] : "myKey1",
    location : "Ghaziabad",
    email : "abc@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) // good method
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "def@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "ghi@gmail.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello world!");
}

console.log(JsUser.greetings);