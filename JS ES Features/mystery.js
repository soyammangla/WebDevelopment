// Q4_debuggingMystery.js
(() => {
  "use strict";

  // WHY IT THROWS:
  // Under strict mode, assigning to an undeclared identifier (greeting = "...") throws ReferenceError.
  // Fix by declaring the variable in an appropriate scope.

  function showMessage() {
    // Fix: declare with let/const/var
    let greeting = "Welcome";
    console.log(greeting);
    // Add watch point in VS Code: watch "greeting"
    // Put a breakpoint here to inspect call stack:
    // debugger;
  }

  showMessage();
})();
