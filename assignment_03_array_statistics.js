// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const prompt = require("prompt-sync")();

function calculateSum(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

function calculateAverage(numbers) {
  const total = calculateSum(numbers);
  return total / numbers.length;
}

function calculateMax(numbers) {
  let highest = numbers[0];
  for (const num of numbers) {
    if (num > highest) {
      highest = num;
    }
  }
  return highest;
}

function calculateMin(numbers) {
  let lowest = numbers[0];
  for (const num of numbers) {
    if (num < lowest) {
      lowest = num;
    }
  }
  return lowest;
}

function statSummary() {
  const n = parseInt(prompt("How many numbers? "));

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    const num = parseInt(prompt(`Enter number ${i + 1}: `));
    numbers.push(num);
  }

  const total = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const highest = calculateMax(numbers);
  const lowest = calculateMin(numbers);

  console.log("\nResults:");
  console.log(`Sum:     ${total}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${highest}`);
  console.log(`Minimum: ${lowest}`);
}

statSummary();