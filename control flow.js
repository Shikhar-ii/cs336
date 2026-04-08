// Function to check if a number is positive, negative, or neither (zero)

// Method 1: Using if-else statements
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Neither (Zero)";
  }
}

// Method 2: Using switch statement with conditions
function checkNumberSwitch(num) {
  switch (true) {
    case num > 0:
      return "Positive";
    case num < 0:
      return "Negative";
    default:
      return "Neither (Zero)";
  }
}

// Method 3: Using ternary operators
const checkNumberTernary = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Neither (Zero)";

// Test the functions
console.log("Testing checkNumber function:");
console.log(checkNumber(5));      // Positive
console.log(checkNumber(-3));     // Negative
console.log(checkNumber(0));      // Neither (Zero)

console.log("\nTesting checkNumberSwitch function:");
console.log(checkNumberSwitch(10));     // Positive
console.log(checkNumberSwitch(-8));     // Negative
console.log(checkNumberSwitch(0));      // Neither (Zero)

console.log("\nTesting checkNumberTernary function:");
console.log(checkNumberTernary(7));     // Positive
console.log(checkNumberTernary(-2));    // Negative
console.log(checkNumberTernary(0));     // Neither (Zero)
