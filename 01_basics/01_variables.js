const account_id = 144553
let account_email = "prakarti@google.com"
var account_password = "12345"
account_city = "Ghaziabad"
let account_state  // it's value is undefined

/*Their are two ways to declare variables in javascript that with let keyword and with var keyword
 Prefer not to use var because of the issue in block scope and functional scope*/

// account_id = 2 (this is not posible since value of const variable can't be changed)
// Ctrl + / to comment out 

account_email = "pp@google.com"
account_password = "21212121"
account_city = "Bengaluru"

console.log(account_id);
console.log(account_email);
console.log(account_password);
console.log(account_city);

// writing console.log everytime is very hectic, to make the task easy we use console.table([a,b,c,...])
console.table([account_id, account_email, account_password, account_city, account_state])
