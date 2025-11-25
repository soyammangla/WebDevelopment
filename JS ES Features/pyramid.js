// Q6_pyramidGenerator.js
(() => {
  "use strict";

  function generatePyramid(rows = 5) {
    if (!Number.isFinite(rows) || rows < 1) rows = 5;
    let output = "";
    for (let i = 1; i <= rows; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += "* ";
      }
      output += line.trimEnd() + "\n";
    }
    return output;
  }

  console.log("Default pyramid (rows=5):\n" + generatePyramid());

  // Replace let with var to observe differences:
  function generatePyramidWithVar(rows = 5) {
    if (!Number.isFinite(rows) || rows < 1) rows = 5;
    var output = "";
    for (var i = 1; i <= rows; i++) {
      var line = "";
      for (var j = 1; j <= i; j++) {
        line += "* ";
      }
      output += line.trimEnd() + "\n";
    }
    // Note: using var means i and j leak to the function scope (but still okay here)
    return output;
  }

  console.log("Pyramid with var (rows=4):\n" + generatePyramidWithVar(4));

  // Outer loop controlled by user input (example)
  const userRows =
    Number(process && process.env && process.env.PYRAMID_ROWS) || 5; // example env-based input
  console.log(
    `Pyramid with userRows=${userRows}:\n` + generatePyramid(userRows)
  );

  // Add a debugger hint to step through loops:
  // Put breakpoint on the inner loop if you want to inspect j/value
  // debugger;
})();
