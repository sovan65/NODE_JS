const accountID = 12345
let accountEmail = "sovan@google.gmail"
var accountPassword = "2341"
accountCity = "jaipur"
let accountState;
// accountID = 2 // not allowed

// Prefer not to use var
// because of issue in block scope and functional scope
//In  java script a variable without value declered as a undefined value


accountEmail = "sovan@678.gmail"
accountPassword = "7865"
accountCity = "Bangaluru"

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
