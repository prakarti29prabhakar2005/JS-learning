const Name = "Prakarti"
const tech = "Javascript"

console.log(`Hello! my name is ${Name} and I am learning ${tech}`); //Hello! my name is Prakarti and I am learning Javascript

//creating object of string
const gameName = new String('Prakarti')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);
//negative valus can't be passed in substring

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  prakarti  "
console.log(newStringOne);
console.log(newStringOne.trim());

//browser url me space nhi samajhta wo space ko %20 se replace kr deta hai
const url = "https://prak%20prabhakar"
console.log(url.replace('%20','-'))     
console.log(url.includes('kar'))
console.log(url.includes('abcd'))
console.log(url.split('a'))