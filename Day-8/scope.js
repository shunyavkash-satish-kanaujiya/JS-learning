// There are two types of scope in javascript.
// 1. Global scope
// Global scope is the scope that is outside of any function or block.
// Variables declared in global scope are accessible from any part of the code.
let a = 30;
const one = () => {
  console.log(a); //30
};
one();
console.log(a); //30
// beacause a declared globally

// 2. Local scope
// Local scope is the scope that is inside a function or block.
// Variables declared in local scope are only accessible within that function or block.

const two = () => {
  let b = 50;
  console.log(b); //30
};
two();
console.log(b); //b; //error:b is not defined
// beacause b declared local in its own function or block
