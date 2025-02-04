function outer() {
  let count = 0;
  return function inner() {
    return count++;
  };
}
let counter = outer();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
