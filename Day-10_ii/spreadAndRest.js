//Rest and spread operators
const numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2;
console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

const numbers3 = [1, 2, 3, 4, 5];
const newNumbers = [...numbers3, 6, 7, 8];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

const numbers4 = [1, 2, 3];
const numbers5 = [4, 5, 6];
const mergedNumbers = [...numbers4, ...numbers5];
console.log(mergedNumbers); // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { name: "sk", age: 22 };
const obj2 = { city: "surat" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: 'John', age: 30, city: 'New York' }
