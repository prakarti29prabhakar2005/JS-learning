for(let index = 0 ; index <= 10 ; index++){
    const element = index
    if(element == 5){
        console.log("Five")
    }
    console.log(element)
}

for (let index = 0; index < 5; index++) {
    console.log(`Outer loop : ${index}`)
    for (let i = 0; i < 5; i++) {
        //console.log(`Inner loop value : ${i} and outer loop value : ${index}`)
        console.log(i + '*' + index + '=' + i*index);
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

/*****************braek and continue*************** */

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is detected")
        break
    }
    console.log(element)
}

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is detected")
        continue
    }
    console.log(element)
}