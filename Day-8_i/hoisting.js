// hoisting with var
console.log(num); //undefined
var num = 10;

// hoisting with let
console.log(letNum); //error: Cannot access 'letNum' before initialization
let letNum = 10;

// hoisting with const
console.log(constNum); // error:  Cannot access 'constNum' before initialization
const constNum = 10;
