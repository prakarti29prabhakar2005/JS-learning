if(2 == '2'){
    console.log("executable")
}

if(2 === '2'){
    console.log("executable with data compatibility")
}

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`User power : ${power}`);
}

//console.log(`User power : ${power}`);

const balance = 1000
// if(balance > 500) console.log("test"),
// console.log("case"),
// console.log("passed");           //not a good practice to write in this manner

if (balance < 500){
    console.log("Balance is less than 500")
}else if (balance < 750){
    console.log("less than 750")
}else{
    console.log("Greater")
}


const debitCard = true
const userLoggedIn = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(debitCard && userLoggedIn && loggedInFromEmail){
    console.log("Allow to buy course")
}

if(debitCard && userLoggedIn && (loggedInFromEmail || loggedInFromGoogle)){
    console.log("Allow to buy course")
}