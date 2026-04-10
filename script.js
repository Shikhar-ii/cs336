// Say hello
function sayHello() {
  alert("Hello student");
}


function checkNumber() {
  let num = Number(document.getElementById("numInput").value);

  switch (true) {
    case num > 0:
      document.getElementById("demo").innerText = "Positive";
      break;
    case num < 0:
      document.getElementById("demo").innerText = "Negative";
      break;
    default:
      document.getElementById("demo").innerText = "Zero";
  }
}

// Arithmetic operations using switch-case
function calculate(operation) {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let resultText;

  switch (operation) {
    case "add":
      resultText = "Sum: " + (n1 + n2);
      break;
    case "multiply":
      resultText = "Product: " + (n1 * n2);
      break;
    case "subtract":
      resultText = "Difference: " + (n1 - n2);
      break;
    case "divide":
      resultText = n2 === 0 ? "Cannot divide by zero" : "Quotient: " + (n1 / n2);
      break;
    default:
      resultText = "Invalid operation";
  }

  document.getElementById("result").innerText = resultText;
}

// Name input using switch-case for confirmation
function inputName() {
  let name = prompt("What is your name?");
  let student = confirm("Are you a student?");
  let message;

  switch (student) {
    case true:
      message = "Welcome student " + name;
      break;
    case false:
      message = "Sorry " + name;
      break;
    default:
      message = "Hello " + name;
  }

  alert(message);
}

// Sum from 1 to n
function sumToN() {
  let n = Number(document.getElementById("sumInput").value);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  document.getElementById("sumResult").innerText = "Sum from 1 to " + n + " is: " + sum;
}

// Print even numbers from 1 to 20
function printEvenNumbers() {
  let evenNumbers = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  document.getElementById("evenResult").innerText = "Even numbers from 1 to 20: " + evenNumbers.join(", ");
}
