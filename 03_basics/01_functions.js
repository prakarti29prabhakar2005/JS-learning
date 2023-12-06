function sayMyname(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("I");
}

sayMyname()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(9 , 34)

function subtractTwoNumbers(number1, number2){
    return number1 - number2;
}

const result = subtractTwoNumbers(57, 7);
console.log(result)

function loginUserMessage(username){
    return `${username} just logged in`;
}

console.log(loginUserMessage("pari"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 670))

const user  = {
    userName : "Prakarti",
    price : 1000
}

function handleObject(anyObject){
    console.log(`${anyObject.userName} did the shopping of ${anyObject.price}`);
}

handleObject(user)

handleObject({
    userName : "Pari",
    price : 399
})

const myArray = [100, 200, 300, 400]

function returnSecondElement(anyArray){
    return anyArray[1]
}

console.log(returnSecondElement(myArray))
console.log(returnSecondElement([345, 678, 991, 757]))