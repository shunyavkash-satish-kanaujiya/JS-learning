let url = "https://jsonplaceholder.typicode.com/todos";

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "sk", age: 23 }),
})
  .then((response) => response.json())
  .then((data) => console.log("User Created:", data))
  .catch((err) => err);
