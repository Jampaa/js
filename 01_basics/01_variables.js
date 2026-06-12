const accountId = "11111";
let accountEmail = "jampa@gmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";
let hello;

// accountId = 2  // not allowed since const cant be changed 
accountEmail = "tenzin@gmail"
accountPassword = "32424"
accountCity = "Delhi"
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, hello])

