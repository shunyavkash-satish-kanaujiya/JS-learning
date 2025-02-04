function getNumberInput() {
  try {
    let userInput = prompt("Enter a number:");

    // Convert input to a number
    let number = Number(userInput);

    // Check if it's a valid number
    if (isNaN(number)) {
      throw new Error("Invalid input! Please enter a valid number.");
    }

    console.log("You entered:", number);
  } catch (error) {
    console.error(error.message);
  }
}

getNumberInput();
