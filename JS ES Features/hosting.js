// Q5_hoistingLab.js
(() => {
  "use strict";

  // ORIGINAL (predict):
  // console.log(score);         // undefined (var hoisted but init later)
  // announce();                 // "Game started" (function declaration hoisted)
  // var score = 50;
  // function announce() { console.log("Game started"); }
  // let status = "ready";
  // startGame();                // ReferenceError: cannot access 'status' before initialization
  // function startGame() { console.log(status); }

  // Explanation of memory states:
  // - var score: hoisted (declared) in creation phase, initialized to undefined until assignment
  // - function announce: entire function hoisted and available
  // - let status: hoisted but in TDZ until evaluated at assignment
  // - startGame: function hoisted
  // So calling startGame before 'status' initialization triggers a ReferenceError.

  // FIXED version (ordered safely):
  console.log("=== Fixed Version ===");
  var score = 50;
  function announce() {
    console.log("Game started");
  }
  announce();
  console.log(score);

  let status = "ready";
  function startGame() {
    console.log(status);
  }
  startGame();

  // Arrow function variant: note: arrow functions are not hoisted as function declarations.
  console.log("\n=== Arrow Function Variant ===");
  const announceArrow = () => console.log("Game started (arrow)");
  announceArrow();

  const startGameArrow = () => {
    console.log(status);
  };
  startGameArrow();

  // If we attempted to call announceArrow() before its declaration, we'd get ReferenceError (not hoisted).
})();
