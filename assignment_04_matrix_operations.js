// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, name) {
  console.log(`Enter matrix ${name}:`);
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = prompt(`Enter row ${i + 1}: `)
      .split(" ")
      .map(Number);
    matrix.push(row);
  }
  return matrix;
}

function displayMatrix(matrix) {
  for (const row of matrix) {
    let line = "";
    for (const value of row) {
      line += String(value).padStart(5, " ");
    }
    console.log(line);
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let total = 0;
      for (let k = 0; k < colsA; k++) {
        total += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(total);
    }
    result.push(newRow);
  }
  return result;
}

function main() {
  // PART A - Transpose
  console.log("--- PART A: Transpose a Matrix ---");
  const rows = parseInt(prompt("Enter number of rows: "));
  const cols = parseInt(prompt("Enter number of columns: "));
  const matrix = readMatrix(rows, cols, "");

  console.log("\nOriginal Matrix:");
  displayMatrix(matrix);

  console.log("\nTransposed Matrix:");
  const transposed = transposeMatrix(matrix);
  displayMatrix(transposed);

  // PART B - Add Two Matrices
  console.log("\n--- PART B: Add Two Matrices ---");
  const matrixA = readMatrix(rows, cols, "A");
  const matrixB = readMatrix(rows, cols, "B");

  console.log("\nSum of Matrices:");
  const sumResult = addMatrices(matrixA, matrixB);
  displayMatrix(sumResult);

  // PART C - Multiply Two Matrices
  console.log("\n--- PART C: Multiply Two Matrices ---");
  const m = parseInt(prompt("Enter rows of Matrix A: "));
  const n = parseInt(prompt("Enter columns of Matrix A / rows of Matrix B: "));
  const p = parseInt(prompt("Enter columns of Matrix B: "));

  const matrixC = readMatrix(m, n, "A");
  const matrixD = readMatrix(n, p, "B");

  console.log("\nMatrix Product (A x B):");
  const product = multiplyMatrices(matrixC, matrixD);
  displayMatrix(product);
}

main();