const myArray = [0, 2, 3, 4, 5]
console.log(myArray[3])
myArray.push(6)
console.log(myArray)
myArray.push(7)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(7)
console.log(myArray)
myArray.shift()
console.log(myArray)

const newArr = myArray.join()

console.log(myArray)
console.log(newArr)
console.log(typeof newArr)

//splice operaor manipulates original array whereas slice doesn't
console.log("A ", myArray)
const myn1 = myArray.slice(1,3)
console.log(myArray)
console.log(myn1)
console.log("B ", myArray)
const myn2 = myArray.splice(1,3)
console.log("C ",myArray)
console.log(myn2)