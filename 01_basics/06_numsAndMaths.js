const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths ++++++++++++++++++++++
console.log(Math); //iss command ko browser me run karne pr maths library ke features show hote hai
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(8, 3, 1, 9))
console.log(Math.min(2, 6, 3, 0))

console.log(Math.random()); //isse value 0 se 9 ke beech me he aati hai
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

const max = 20
const min = 10
//IMPORTANT FORMULA
console.log(Math.floor(Math.random()*(max-min + 1)) + min)