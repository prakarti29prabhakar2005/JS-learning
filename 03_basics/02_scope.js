function one(){
    const userName = "prakarti"

    function two(){
        const website = "github"
        console.log(userName)
    }
   // console.log(website)

    two()
}

one()

if(true){
    const userName = "Pari"
    if(userName === "Pari"){
        const website = "github"
        console.log(userName + website);
    }
   // console.log(website);
}

//console.log(userName)

//+++++++++++++++ interesting +++++++++++++++++++

addOne(5)

function addOne(num){
    return num + 1
}

addTwo(5)

const addTwo = function(num){
    return num + 2
}

