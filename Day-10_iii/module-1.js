const multiply = (a, b, c) => {
  return a * b * c;
};
const addition = (a, b, c) => {
  return a + b + c;
};
const divide = (a, b, c) => {
  if (c === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b / c;
};
export { multiply, addition, divide };
