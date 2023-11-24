//Javascript is quite linent therefore typescript is used
//Javascript allows coparison between different data types whereas this is restricted in case of typescript

console.log("2" > 1); //true
console.log("02" > 1); //true
console.log(2 > 1); //true
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//The reason is that as equality check == and comparisons > < >= <= works differently
//comparison convert null to a number, treating it as 0
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === is strict check , value + datatype