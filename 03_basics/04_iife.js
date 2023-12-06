//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNDECTED`);
})();

//global scope ke variables se pollution hota hai , usse code ko bachane ke liye we use iife

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})("prabhakar")