//data types are written in capital
let score = "41"

console.log(typeof score);
console.log(typeof (score)); //as method

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let score2 = "41abc"
let score3 = null
let score4 = undefined

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2) //NaN (not a number)

let valueInNumber3 = Number(score3);
console.log(valueInNumber3) //null to 0
let valueInNumber4 = Number(score4);
console.log(valueInNumber4) // undefined to NAN

//"41" => 41
//"41abc" => NaN
// "Pari" => NaN
// true => 1; false => 0

let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn) //1

//1 => true; 0 => false
//"" => false
//"pari" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)

/* ************************* Operations *********************** */
let str1 = "hello"
let str2 = " world!"
let str3 = str1 + str2
console.log(str3); //hello world!

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true); //1
console.log(+""); //0