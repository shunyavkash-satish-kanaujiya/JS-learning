let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
};

// Accessing properties of an object
console.log(book.title); // Output: Harry Potter and the Philosopher's Stone
console.log(book.author); // Output: J.K. Rowling
console.log(book.year); // Output: 1997
console.log(book.genre); // Output: Fantasy

// Updating properties of an object
book.title = "Harry Potter and the Chamber of Secrets";
console.log(book.title); // Output: Harry Potter and the Chamber of Secrets

// Adding new properties to an object
book.publisher = "Bloomsbury Publishing";
console.log(book.publisher); // Output: Bloomsbury Publishing

// Deleting properties from an object
delete book.genre;
console.log(book.genre); // Output: undefined

// Checking if a property exists in an object
console.log("publisher" in book); // Output: true
console.log("language" in book); // Output: false

// Accessing properties of an object using bracket notation
console.log(book["title"]); // Output: Harry Potter and the Chamber of Secrets
console.log(book["author"]); // Output: J.K. Rowling
console.log(book["year"]); // Output: 1997
console.log(book["genre"]); // Output: undefined
console.log(book["publisher"]); // Output: Bloomsbury Publishing

// Adding new properties to an object using bracket notation
book["country"] = "United Kingdom";
console.log(book["country"]); // Output: United Kingdom

// Deleting properties from an object using bracket notation
delete book["language"];
console.log(book["language"]); // Output: undefined
