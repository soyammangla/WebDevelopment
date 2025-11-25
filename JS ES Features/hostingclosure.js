// Q10_nestedHoistingClosures.js
(() => {
  "use strict";

  // ORIGINAL
  function outerOriginal() {
    console.log("outerOriginal initial count:", count); // hoisted var -> undefined
    var count = 5;
    function inner() {
      console.log("inner before var count:", count); // inner's own var hoisted -> undefined
      var count = 10;
      console.log("inner after var count:", count);
    }
    inner();
  }

  // Predict:
  // outerOriginal initial count: undefined
  // inner before var count: undefined
  // inner after var count: 10

  console.log("=== Run original ===");
  outerOriginal();

  // Explanation:
  // - In outerOriginal, var count is hoisted (declared) at top of outer function, initial value undefined until assignment.
  // - In inner, var count is hoisted within inner (new local variable), so inner's reference to count sees its own hoisted var (undefined) rather than outer's count.

  // Arrow version (inner as arrow)
  function outerWithArrow() {
    console.log("outerWithArrow initial count:", count);
    var count = 5;
    const inner = () => {
      // Arrow functions do not create their own 'this' but still have their own variable scope.
      // If we declare a var count inside arrow, it will be hoisted in that scope just like function.
      console.log("arrow inner sees count (no local var):", count);
    };
    inner();
  }

  console.log("=== Run arrow variant ===");
  outerWithArrow();

  // If we add a var count inside the arrow, the same hoisting for that scope applies.
  // Debugging: place breakpoint inside inner and inspect scope chain / call stack:
  // debugger;
})();
