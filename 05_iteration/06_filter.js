const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myValues = myNums.filter( (nums) => nums > 6)
console.log(myValues)

const myValues2 = myNums.filter( (nums) => {
    return nums > 6
})
console.log(myValues2)

const newNums = []
myNums.forEach((nums) => {
    if (nums > 6){
        newNums.push(nums)
    }
})
console.log(newNums)