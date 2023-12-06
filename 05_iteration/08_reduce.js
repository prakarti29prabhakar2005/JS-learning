const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curValue) {
//     console.log(`acc : ${acc} and curValue : ${curValue}`);
//     return acc + curValue
// },0)

const myTotal = myNums.reduce( (acc, curValue) => acc+curValue, 0)

console.log(myTotal)