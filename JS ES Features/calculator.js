// Q7_smartCalculator.js
(() => {
  "use strict";

  class InvalidOperationError extends Error {}
  class MathError extends Error {}

  const operations = ["add", "divide", "power", "root", "subtract"];

  function smartCalc(operation, a, b) {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "divide":
        if (b === 0) throw new MathError("DivideByZero");
        return a / b;
      case "power":
        return Math.pow(a, b);
      case "root":
        if (a < 0) throw new MathError("RootOfNegative");
        // if b is root degree, e.g., b=2 => sqrt
        if (b === 0) throw new MathError("ZeroDegreeRoot");
        return Math.pow(a, 1 / b);
      default:
        throw new InvalidOperationError(`InvalidOperation: ${operation}`);
    }
  }

  const num1 = 25,
    num2 = 0;
  const tests = ["add", "divide", "power", "root", "subtract", "unknown"];

  for (const op of tests) {
    try {
      const result = smartCalc(op, num1, num2);
      console.log(`Operation=${op} | ${num1} , ${num2} => Result = ${result}`);
    } catch (err) {
      if (err instanceof InvalidOperationError) {
        console.error(`Invalid operation: ${op} - ${err.message}`);
      } else if (err instanceof MathError) {
        console.error(`Math error during ${op}: ${err.message}`);
      } else {
        console.error(`Unhandled error for ${op}: ${err.message}`);
      }
    }
  }

  // Formatted summary
  console.log("\nSummary:");
  tests.forEach((op) => {
    try {
      const r = smartCalc(op, num1, num2);
      console.log(`${op.padEnd(8)} => OK      => ${r}`);
    } catch (e) {
      console.log(`${op.padEnd(8)} => FAILED  => ${e.message}`);
    }
  });
})();
