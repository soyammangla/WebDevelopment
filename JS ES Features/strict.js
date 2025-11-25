// Q8_strictModeShowdown.js

// Without strict mode (not enforced here because file uses strict by default in many environments).
(() => {
  // Demonstration: duplicate parameter names and delete of non-configurable binding

  // Case A: without "use strict" (in practice older JS allowed duplicate param names)
  function demoNonStrict(a, a_duplicate) {
    // In non-strict, duplicate parameter names might be allowed in older engines.
    // Implicit global assignment:
    // total = 10; // would create global in non-strict
    // delete total; // delete of a variable binding returns false (can't delete)
    // But in Node modules and modern engines, strict-like behavior may be enforced.
  }

  // Case B: strict mode example (illegal operations)
  (function strictExample() {
    "use strict";
    try {
      // Duplicate param names are syntax error in strict mode in older specs.
      // Also assignment to undeclared variable is ReferenceError.
      // delete of an un-deletable binding also causes behavior issues.
      // We'll show correct ES6 version instead of intentionally throwing here.
      // Intentionally show what to avoid.
      // total = 10; // ReferenceError in strict mode
      // delete total; // SyntaxError when trying to delete variables or functions
    } catch (err) {
      console.error("Strict mode error observed:", err.message);
    }
  })();

  // Correct ES6 version:
  function demoCorrect(a, b) {
    "use strict";
    let total = 10; // properly declared
    // delete total; // not allowed; instead set to undefined if needed:
    // total = undefined;
    return a + b + total;
  }

  console.log("Correct ES6 run:", demoCorrect(5, 10));
})();
