//simple array value print with for loop
let arr = [2, 5, 4, 3, 8, 1, 7];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//assign new value in array
console.log("arr before assign new value", arr);
arr[0] = 10;
console.log("arr after assign new value", arr);
