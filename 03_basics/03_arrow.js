const user = {
    username : "prakarti",
    marks : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()
user.username = "pari"
user.welcomeMessage()

//this is accesible only in objects

const chai = function(){
    let userName = "prakarti prabhakar"
    console.log(this.userName)   //undefined
}

chai()

//Arrow function
const code = () => {
    let userName = "prakarti prabhakar"
    console.log(this.userName)   
}

code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(9, 7))

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({userName : "Pari"})
console.log(addTwo(9, 7))