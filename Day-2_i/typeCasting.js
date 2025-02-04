// Type Conversion
// 1. Implicit Conversion
// JavaScript automatically converts data types when performing operations between different types.
// Examples of Implicit Conversion
// (a) String Conversion
// When a number or boolean is added to a string, JavaScript converts them into strings.

let result1;

result1 = "5" + 2; // "5" is a string, so 2 is converted to "2"
console.log(result1); // Output: "52"

result1 = "Hello" + true;
console.log(result1); // Output: "Hellotrue"

result1 = "10" + null;
console.log(result1); // Output: "10null"

// (b) Number Conversion
// When a mathematical operation involves a string containing a number, JavaScript converts it into a number.
let result2;

result2 = "5" - 2; // "5" is converted to 5
console.log(result2); // Output: 3

result2 = "10" * 2;
console.log(result2); // Output: 20

result2 = "20" / "5";
console.log(result2); // Output: 4
// However, when a non-numeric string is involved in an arithmetic operation, JavaScript returns NaN (Not a Number).

console.log("Hello" - 5); // NaN
console.log("123abc" * 2); // NaN

// (c) Boolean Conversion
// JavaScript converts values to boolean in conditions like if statements.

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// 2. Explicit Type Conversion (Type Casting)
// Explicit conversion is manually done using built-in JavaScript functions.
