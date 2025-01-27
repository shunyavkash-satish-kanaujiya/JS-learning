/* TYPE OF VARIABLE IN JS
1.const (you can't redeclare or redefine)
2.let (you can redefine but can't redeclare)

3.var (you can redeclare or define)
*/

const id = 123;
let name = "satish";
var age = 22;

// Changing the value of variables
id = 456;
name = "suresh";
age = 25;

// Accessing the values of variables
console.log(id); // error because you can't redefine;
console.log(name); // Output: ramesh
console.log(age); // Output: 25

/*
DATA TYPES IN JS
1. Primitive types (6 types):
   - String
   - Number
   - Boolean
   - Undefined
   - Null
   - Symbol

2. Reference types (2 types):
   - Object
   -Array
*/

// String
let str = "Hello, World!";
console.log(typeof str); // Output: string

// Number
let num = 123;
console.log(typeof num); // Output: number

// Boolean
let bool = true;
console.log(typeof bool); // Output: boolean

// Undefined
let undef;
console.log(typeof undef); // Output: undefined

// Null
let nul = null;
console.log(typeof nul); // Output: object (null is an object in JS)

// Symbol
let sym = Symbol("my symbol");
console.log(typeof sym); // Output: symbol
//BASICALLY SYMBOL IS A ADVANCE DATA TYPE IN JS WHICH IS USED TO CREATE UNIQUE IDENTIFIERS FOR OBJECTS MOSTLY USED IN REACT COMPONENTS.

// Object
let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: object
// OBJECT IS A REFERENCE TYPE IN JS WHICH IS USED TO STORE DIFFERENT-DIFFERENT TYPES IN KEY VALUE PAIRS.

// Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: object (array is an object in JS)
//YOU CAN STORE MULTIPLE VALUES WITH SAME DATA TYPE.
